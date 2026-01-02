import base64
import io
from dataclasses import dataclass
from typing import Optional

import numpy as np
import requests
from PIL import Image
from scipy.ndimage import sobel

from relief_engine.config import CONFIG


@dataclass
class SegmentationResult:
    mask: np.ndarray
    subject_area: float
    estimated_subject_count: int
    confidence: float


def segment_subject(image_array: np.ndarray, endpoint: Optional[str] = None) -> SegmentationResult:
    if endpoint:
        result = _segment_via_endpoint(image_array, endpoint)
        if result is not None:
            return result

    return _fallback_segment(image_array)


def _segment_via_endpoint(image_array: np.ndarray, endpoint: str) -> Optional[SegmentationResult]:
    try:
        image = Image.fromarray(image_array.astype(np.uint8))
        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        payload = {
            "image_base64": base64.b64encode(buffer.getvalue()).decode("ascii"),
            "model": CONFIG.segment_model,
        }
        response = requests.post(endpoint, json=payload, timeout=CONFIG.request_timeout_sec)
        if response.status_code != 200:
            return None
        data = response.json()
        mask_data = np.array(data.get("mask"), dtype=np.uint8)
        if mask_data.ndim != 2:
            return None
        subject_area = float(mask_data.mean() / 255.0)
        return SegmentationResult(
            mask=mask_data,
            subject_area=subject_area,
            estimated_subject_count=int(data.get("subject_count", 1)),
            confidence=float(data.get("confidence", 0.5)),
        )
    except Exception:
        return None


def _fallback_segment(image_array: np.ndarray) -> SegmentationResult:
    grayscale = np.dot(image_array[..., :3], np.array([0.299, 0.587, 0.114], dtype=np.float32))
    grad_x = sobel(grayscale, axis=1)
    grad_y = sobel(grayscale, axis=0)
    magnitude = np.hypot(grad_x, grad_y)

    height, width = grayscale.shape
    center_x = width / 2.0
    center_y = height / 2.0
    max_dist = (center_x**2 + center_y**2) ** 0.5

    yy, xx = np.mgrid[0:height, 0:width]
    dist = np.sqrt((xx - center_x) ** 2 + (yy - center_y) ** 2)
    center_weight = 1 - np.minimum(1.0, dist / max_dist)
    saliency = magnitude * (0.5 + 0.5 * center_weight)

    threshold = np.percentile(saliency, 80)
    mask = (saliency >= threshold).astype(np.uint8) * 255

    subject_area = float(mask.mean() / 255.0)
    estimated_subject_count = _estimate_components(mask)

    return SegmentationResult(
        mask=mask,
        subject_area=subject_area,
        estimated_subject_count=estimated_subject_count,
        confidence=0.4,
    )


def _estimate_components(mask: np.ndarray) -> int:
    if mask.max() == 0:
        return 0
    visited = np.zeros(mask.shape, dtype=bool)
    height, width = mask.shape
    components = 0

    for y in range(height):
        for x in range(width):
            if mask[y, x] == 0 or visited[y, x]:
                continue
            components += 1
            stack = [(y, x)]
            visited[y, x] = True
            while stack:
                cy, cx = stack.pop()
                for ny, nx in ((cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)):
                    if 0 <= ny < height and 0 <= nx < width:
                        if mask[ny, nx] and not visited[ny, nx]:
                            visited[ny, nx] = True
                            stack.append((ny, nx))
    return components
