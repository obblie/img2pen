from dataclasses import dataclass
from typing import Tuple

import numpy as np
from scipy.ndimage import gaussian_filter, sobel, label

from relief_engine.config import CONFIG
from relief_engine.pipeline.relief_modes import MODE_WEIGHTS


@dataclass
class HeightModel:
    form: np.ndarray
    features: np.ndarray
    combined: np.ndarray


def build_features(grayscale: np.ndarray, mode: str, feature_strength: float) -> np.ndarray:
    if mode == "graphic":
        threshold = _otsu_threshold(grayscale)
        binary = (grayscale < threshold).astype(np.float32)
        return gaussian_filter(binary, sigma=0.8)

    base = gaussian_filter(grayscale, sigma=max(2.0, min(grayscale.shape) * 0.02))
    delit = (grayscale - base * 0.7) / np.maximum(1.0, base)

    grad_x = sobel(delit, axis=1)
    grad_y = sobel(delit, axis=0)
    edges = np.clip(np.hypot(grad_x, grad_y) / 60.0, 0.0, 1.0)

    if mode == "organic":
        small = gaussian_filter(delit, sigma=1.0)
        large = gaussian_filter(delit, sigma=3.0)
        ridge = np.clip((small - large) / 40.0, 0.0, 1.0)
        features = np.clip(edges + ridge * 0.8, 0.0, 1.0)
    else:
        features = edges

    return features * feature_strength


def combine_maps(form: np.ndarray, features: np.ndarray, mode: str) -> np.ndarray:
    weights = MODE_WEIGHTS.get(mode, MODE_WEIGHTS["object"])
    combined = weights["w_form"] * form + weights["w_feat"] * features
    return _normalize(combined)


def apply_depth_curve(height_map: np.ndarray, curve_type: str) -> np.ndarray:
    result = height_map.copy()
    if curve_type == "strong":
        result = np.power(result, 0.7)
    elif curve_type == "portrait":
        result = np.where(result < 0.5, result * 1.2, 0.6 + (result - 0.5) * 0.8)
    else:
        result = np.power(result, 0.9)
    return np.clip(result, 0.0, 1.0)


def clamp_depth(height_map: np.ndarray, max_depth_mm: float = CONFIG.max_depth_mm) -> np.ndarray:
    return np.clip(height_map * max_depth_mm, 0.0, max_depth_mm)


def clamp_slopes(height_map: np.ndarray, mode: str) -> np.ndarray:
    max_slope = {
        "portrait": 0.15,
        "object": 0.2,
        "organic": 0.18,
        "scene": 0.12,
        "graphic": 0.25,
    }.get(mode, 0.2)

    result = height_map.copy()
    height, width = result.shape
    for _ in range(3):
        for y in range(1, height - 1):
            for x in range(1, width - 1):
                center = result[y, x]
                right = result[y, x + 1]
                bottom = result[y + 1, x]
                max_local = max(abs(right - center), abs(bottom - center))
                if max_local > max_slope:
                    neighbors = [result[y - 1, x], result[y, x - 1], right, bottom]
                    result[y, x] = center * 0.7 + np.mean(neighbors) * 0.3
    return result


def remove_micro_islands(\n+    height_map: np.ndarray,\n+    min_feature_mm: float,\n+    diameter_mm: float,\n+    max_depth_mm: float = CONFIG.max_depth_mm,\n+) -> np.ndarray:
    pixel_size = diameter_mm / height_map.shape[1]
    min_pixels = max(1, int(np.ceil(min_feature_mm / pixel_size)))
    threshold = max_depth_mm * 0.08

    mask = height_map > threshold
    labeled, num = label(mask)
    if num == 0:
        return height_map

    cleaned = height_map.copy()
    for component in range(1, num + 1):
        indices = np.where(labeled == component)
        if len(indices[0]) < min_pixels:
            cleaned[indices] = 0.0
    return cleaned


def build_heightfield(height_map_mm: np.ndarray, max_depth_mm: float = CONFIG.max_depth_mm) -> np.ndarray:
    normalized = np.clip(height_map_mm / max_depth_mm, 0.0, 1.0)
    return (normalized * 255).astype(np.uint8)


def _normalize(array: np.ndarray) -> np.ndarray:
    min_val = float(array.min())
    max_val = float(array.max())
    if max_val - min_val < 1e-6:
        return np.zeros_like(array)
    return (array - min_val) / (max_val - min_val)


def _otsu_threshold(grayscale: np.ndarray) -> float:
    histogram, _ = np.histogram(grayscale, bins=256, range=(0, 255))
    total = histogram.sum()
    sum_total = np.dot(np.arange(256), histogram)
    sum_b = 0.0
    weight_b = 0
    max_between = 0.0
    threshold = 128

    for i in range(256):
        weight_b += histogram[i]
        if weight_b == 0:
            continue
        weight_f = total - weight_b
        if weight_f == 0:
            break
        sum_b += i * histogram[i]
        mean_b = sum_b / weight_b
        mean_f = (sum_total - sum_b) / weight_f
        between = weight_b * weight_f * (mean_b - mean_f) ** 2
        if between > max_between:
            max_between = between
            threshold = i

    return float(threshold)


def heightfield_to_rgba(heightfield: np.ndarray) -> np.ndarray:
    height, width = heightfield.shape
    rgba = np.zeros((height, width, 4), dtype=np.uint8)
    rgba[..., 0] = heightfield
    rgba[..., 1] = heightfield
    rgba[..., 2] = heightfield
    rgba[..., 3] = 255
    return rgba


def compute_variant_settings(name: str) -> Tuple[str, float, str]:
    if name == "detail":
        return "low", 1.2, "default"
    if name == "bold":
        return "medium", 1.5, "strong"
    return "high", 0.8, "default"
