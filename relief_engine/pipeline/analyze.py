from dataclasses import dataclass

import numpy as np
from scipy.ndimage import laplace


@dataclass
class QualityMetrics:
    width: int
    height: int
    is_low_res: bool
    blur_score: float
    is_blurry: bool
    avg_brightness: float
    brightness_std: float
    dark_ratio: float
    bright_ratio: float
    is_under_exposed: bool
    is_over_exposed: bool
    is_low_quality: bool


def analyze_quality(grayscale: np.ndarray) -> QualityMetrics:
    height, width = grayscale.shape
    resolution = width * height
    is_low_res = resolution < 100000

    lap = laplace(grayscale)
    blur_score = float(np.var(lap))
    is_blurry = blur_score < 120

    avg_brightness = float(np.mean(grayscale))
    brightness_std = float(np.std(grayscale))

    histogram, _ = np.histogram(grayscale, bins=256, range=(0, 255))
    pixel_count = histogram.sum()
    dark_ratio = float(histogram[:16].sum() / max(1, pixel_count))
    bright_ratio = float(histogram[240:].sum() / max(1, pixel_count))

    is_under_exposed = avg_brightness < 45 or dark_ratio > 0.4
    is_over_exposed = avg_brightness > 210 or bright_ratio > 0.4

    is_low_quality = is_low_res or is_blurry or is_under_exposed or is_over_exposed

    return QualityMetrics(
        width=width,
        height=height,
        is_low_res=is_low_res,
        blur_score=blur_score,
        is_blurry=is_blurry,
        avg_brightness=avg_brightness,
        brightness_std=brightness_std,
        dark_ratio=dark_ratio,
        bright_ratio=bright_ratio,
        is_under_exposed=is_under_exposed,
        is_over_exposed=is_over_exposed,
        is_low_quality=is_low_quality,
    )
