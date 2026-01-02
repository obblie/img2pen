import base64
import io
from typing import Tuple

import numpy as np
from PIL import Image


def load_image(file_bytes: bytes, target_size: int) -> Image.Image:
    image = Image.open(io.BytesIO(file_bytes)).convert("RGB")
    if target_size and max(image.size) != target_size:
        image = image.resize(_fit_size(image.size, target_size), Image.Resampling.LANCZOS)
    return image


def image_to_array(image: Image.Image) -> np.ndarray:
    return np.array(image, dtype=np.float32)


def to_grayscale(image_array: np.ndarray) -> np.ndarray:
    return np.dot(image_array[..., :3], np.array([0.299, 0.587, 0.114], dtype=np.float32))


def _fit_size(size: Tuple[int, int], max_dim: int) -> Tuple[int, int]:
    width, height = size
    if width >= height:
        ratio = max_dim / float(width)
    else:
        ratio = max_dim / float(height)
    return max(1, int(width * ratio)), max(1, int(height * ratio))


def encode_png_base64(image: Image.Image) -> str:
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    return base64.b64encode(buffer.getvalue()).decode("ascii")


def encode_bytes_base64(data: bytes) -> str:
    return base64.b64encode(data).decode("ascii")


def decode_base64_image(data_url_or_base64: str) -> Image.Image:
    if data_url_or_base64.startswith("data:"):
        base64_data = data_url_or_base64.split(",", 1)[1]
    else:
        base64_data = data_url_or_base64
    raw = base64.b64decode(base64_data)
    return Image.open(io.BytesIO(raw)).convert("RGB")
