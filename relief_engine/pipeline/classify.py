import base64
import io
from dataclasses import dataclass
from typing import Optional

import numpy as np
import requests
from PIL import Image

from relief_engine.config import CONFIG


@dataclass
class ClassificationResult:
    scores: dict
    top_category: str
    confidence: float
    face_detected: bool


def classify_image(image_array: np.ndarray, endpoint: Optional[str] = None) -> ClassificationResult:
    if endpoint:
        result = _classify_via_endpoint(image_array, endpoint)
        if result is not None:
            return result
    return _fallback_classify(image_array)


def _classify_via_endpoint(image_array: np.ndarray, endpoint: str) -> Optional[ClassificationResult]:
    try:
        image = Image.fromarray(image_array.astype(np.uint8))
        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        payload = {
            "image_base64": base64.b64encode(buffer.getvalue()).decode("ascii"),
            "model": CONFIG.classifier_model,
            "prompts": [
                "portrait photo",
                "animal",
                "product photo",
                "flower or plant",
                "landscape",
                "logo or text",
            ],
        }
        response = requests.post(endpoint, json=payload, timeout=CONFIG.request_timeout_sec)
        if response.status_code != 200:
            return None
        data = response.json()
        scores = data.get("scores", {})
        top_category = max(scores, key=scores.get) if scores else "object"
        confidence = float(scores.get(top_category, 0.0))
        return ClassificationResult(
            scores=scores,
            top_category=top_category,
            confidence=confidence,
            face_detected=bool(data.get("face_detected", False)),
        )
    except Exception:
        return None


def _fallback_classify(image_array: np.ndarray) -> ClassificationResult:
    height, width, _ = image_array.shape
    pixel_count = height * width
    edge_count = 0
    saturation_sum = 0.0
    brightness_sum = 0.0
    brightness_sq = 0.0
    skin_tone_count = 0

    for y in range(1, height - 1):
        for x in range(1, width - 1):
            r, g, b = image_array[y, x]
            gray = (r + g + b) / 3.0
            brightness_sum += gray
            brightness_sq += gray * gray

            max_c = max(r, g, b)
            min_c = min(r, g, b)
            saturation_sum += 0 if max_c == 0 else (max_c - min_c) / max_c

            right = image_array[y, x + 1].mean()
            bottom = image_array[y + 1, x].mean()
            gx = right - gray
            gy = bottom - gray
            if (gx * gx + gy * gy) ** 0.5 > 25:
                edge_count += 1

            is_skin = r > 95 and g > 40 and b > 20 and r > g and g > b and (r - b) > 15
            if is_skin:
                skin_tone_count += 1

    avg_brightness = brightness_sum / pixel_count
    variance = brightness_sq / pixel_count - avg_brightness * avg_brightness
    brightness_std = max(0.0, variance) ** 0.5
    edge_density = edge_count / pixel_count
    avg_saturation = saturation_sum / pixel_count
    skin_ratio = skin_tone_count / pixel_count

    graphic_score = min(1.0, edge_density * 6) * (1 - min(1.0, avg_saturation * 2))
    scene_score = min(1.0, brightness_std / 70) * 0.6 + max(0.0, 0.4 - edge_density) * 0.4
    organic_score = min(1.0, avg_saturation * 1.8) * min(1.0, brightness_std / 80)
    portrait_score = min(1.0, skin_ratio * 8)
    animal_score = min(1.0, (edge_density + avg_saturation) * 0.8)
    product_score = max(0.2, 1 - (graphic_score + scene_score + organic_score + portrait_score) * 0.5)

    scores = {
        "portrait": portrait_score,
        "animal": animal_score,
        "product": product_score,
        "organic": organic_score,
        "scene": scene_score,
        "graphic": graphic_score,
    }
    top_category = max(scores, key=scores.get)
    confidence = scores[top_category]

    return ClassificationResult(
        scores=scores,
        top_category=top_category,
        confidence=confidence,
        face_detected=skin_ratio > 0.12,
    )
