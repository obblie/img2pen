import base64
import io
from typing import Optional

import numpy as np
import requests
from PIL import Image
from scipy.ndimage import gaussian_filter

from relief_engine.config import CONFIG


def estimate_depth(image_array: np.ndarray, mode: str, endpoint: Optional[str] = None, sigma_px: float = 3.0) -> np.ndarray:
    if endpoint:
        depth = _depth_via_endpoint(image_array, endpoint)
        if depth is not None:
            return depth

    grayscale = np.dot(image_array[..., :3], np.array([0.299, 0.587, 0.114], dtype=np.float32))
    depth = grayscale / 255.0
    if sigma_px > 0:
        depth = gaussian_filter(depth, sigma=sigma_px)
    return depth


def _depth_via_endpoint(image_array: np.ndarray, endpoint: str) -> Optional[np.ndarray]:
    try:
        image = Image.fromarray(image_array.astype(np.uint8))
        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        payload = {
            "image_base64": base64.b64encode(buffer.getvalue()).decode("ascii"),
            "model": CONFIG.depth_model,
        }
        response = requests.post(endpoint, json=payload, timeout=CONFIG.request_timeout_sec)
        if response.status_code != 200:
            return None
        data = response.json()
        depth = np.array(data.get("depth"), dtype=np.float32)
        if depth.ndim != 2:
            return None
        depth_min = depth.min()
        depth_max = depth.max()
        if depth_max > depth_min:
            depth = (depth - depth_min) / (depth_max - depth_min)
        return depth
    except Exception:
        return None
