from typing import Optional

import numpy as np
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

from relief_engine.config import CONFIG
from relief_engine.pipeline.analyze import analyze_quality
from relief_engine.pipeline.classify import classify_image
from relief_engine.pipeline.depth import estimate_depth
from relief_engine.pipeline.relief_modes import select_mode, smoothing_sigma_px
from relief_engine.pipeline.postprocess import (
    apply_depth_curve,
    build_features,
    build_heightfield,
    clamp_depth,
    clamp_slopes,
    combine_maps,
    compute_variant_settings,
    heightfield_to_rgba,
    remove_micro_islands,
)
from relief_engine.pipeline.segment import segment_subject
from relief_engine.pipeline.stl_export import export_stl
from relief_engine.pipeline.utils import encode_bytes_base64, encode_png_base64, image_to_array, load_image, to_grayscale

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://obblie.github.io",
        "https://img2pen.onrender.com",
        "https://momenza.io",
        "https://www.momenza.io",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"]
)


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "segment_endpoint": bool(CONFIG.segment_endpoint),
        "depth_endpoint": bool(CONFIG.depth_endpoint),
        "classifier_endpoint": bool(CONFIG.classifier_endpoint),
        "max_depth_mm": CONFIG.max_depth_mm,
    }


@app.post("/relief")
async def relief_endpoint(
    image: UploadFile = File(...),
    diameter_mm: Optional[float] = Form(None),
    relief_depth_mm: Optional[float] = Form(None),
    mode: Optional[str] = Form(None),
):
    raw_bytes = await image.read()
    diameter = diameter_mm or CONFIG.diameter_mm
    max_depth_mm = float(relief_depth_mm) if relief_depth_mm else CONFIG.max_depth_mm

    image_pil = load_image(raw_bytes, CONFIG.heightmap_size)
    image_array = image_to_array(image_pil)
    grayscale = to_grayscale(image_array)

    quality = analyze_quality(grayscale)
    segmentation = segment_subject(image_array, CONFIG.segment_endpoint or None)
    classification = classify_image(image_array, CONFIG.classifier_endpoint or None)

    use_conservative = (
        quality.is_low_quality
        or segmentation.subject_area < 0.1
        or classification.confidence < 0.5
    )

    requested_mode = (mode or CONFIG.default_mode).lower()
    if requested_mode != "auto":
        selected_mode = requested_mode
        mode_reason = "user"
    else:
        selected = select_mode(classification, segmentation, quality)
        selected_mode = selected.mode
        mode_reason = selected.reason

    variants = ["classic", "detail", "bold"] if CONFIG.generate_variants else [CONFIG.default_variant]
    results = []

    for variant in variants:
        smoothing_label, feature_strength, curve_type = compute_variant_settings(variant)
        if use_conservative:
            smoothing_label = "high"
            feature_strength *= 0.6

        sigma = smoothing_sigma_px(selected_mode, grayscale.shape[1])
        if smoothing_label == "high":
            sigma *= 1.5
        elif smoothing_label == "low":
            sigma *= 0.7

        if selected_mode == "graphic":
            form = np.zeros_like(grayscale, dtype=np.float32)
        else:
            form = estimate_depth(image_array, selected_mode, CONFIG.depth_endpoint or None, sigma_px=sigma)

        if selected_mode == "portrait" and classification.face_detected:
            form = _apply_symmetry(form, CONFIG.symmetry_blend_portrait)

        features = build_features(grayscale, selected_mode, feature_strength)
        combined = combine_maps(form, features, selected_mode)

        curve = curve_type
        if selected_mode == "portrait":
            curve = "portrait"

        processed = apply_depth_curve(combined, curve)
        height_mm = clamp_depth(processed, max_depth_mm)
        height_mm = clamp_slopes(height_mm, selected_mode)
        height_mm = remove_micro_islands(height_mm, CONFIG.min_feature_mm, diameter, max_depth_mm)

        heightfield = build_heightfield(height_mm, max_depth_mm)
        height_rgba = heightfield_to_rgba(heightfield)
        height_image = Image.fromarray(height_rgba, mode="RGBA")
        heightmap_png = encode_png_base64(height_image)

        stl = export_stl(height_mm, diameter, CONFIG.base_thickness_mm)

        results.append({
            "name": variant,
            "heightmap_png": f"data:image/png;base64,{heightmap_png}",
            "heightmap_width": heightfield.shape[1],
            "heightmap_height": heightfield.shape[0],
            "stl_base64": encode_bytes_base64(stl.stl_bytes),
            "vertex_count": stl.vertex_count,
            "face_count": stl.face_count,
        })

    return {
        "mode_used": selected_mode,
        "variants": results,
        "debug": {
            "mode_reason": mode_reason,
            "use_conservative": use_conservative,
            "segmentation_confidence": segmentation.confidence,
            "subject_area": segmentation.subject_area,
            "classification_confidence": classification.confidence,
            "face_detected": classification.face_detected,
            "quality": quality.__dict__,
        },
    }


def _apply_symmetry(depth_map: np.ndarray, blend: float) -> np.ndarray:
    height, width = depth_map.shape
    result = depth_map.copy()
    for y in range(height):
        for x in range(width // 2):
            left = depth_map[y, x]
            right = depth_map[y, width - 1 - x]
            blended = left * (1 - blend) + right * blend
            result[y, x] = blended
            result[y, width - 1 - x] = blended
    return result
