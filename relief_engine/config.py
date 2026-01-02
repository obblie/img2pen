import os


def _get_env_float(name, default):
    value = os.getenv(name)
    if value is None or value == "":
        return default
    try:
        return float(value)
    except ValueError:
        return default


def _get_env_int(name, default):
    value = os.getenv(name)
    if value is None or value == "":
        return default
    try:
        return int(value)
    except ValueError:
        return default


def _get_env_bool(name, default=False):
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


class Config:
    def __init__(self):
        self.max_depth_mm = _get_env_float("RELIEF_MAX_DEPTH_MM", 0.6)
        self.base_thickness_mm = _get_env_float("RELIEF_BASE_THICKNESS_MM", 1.6)
        self.min_feature_mm = _get_env_float("RELIEF_MIN_FEATURE_MM", 0.18)
        self.default_mode = os.getenv("RELIEF_DEFAULT_MODE", "auto")
        self.default_variant = os.getenv("RELIEF_DEFAULT_VARIANT", "classic")
        self.generate_variants = _get_env_bool("RELIEF_GENERATE_VARIANTS", True)
        self.diameter_mm = _get_env_float("RELIEF_DIAMETER_MM", 25.0)
        self.heightmap_size = _get_env_int("RELIEF_HEIGHTMAP_SIZE", 512)
        self.clip_to_circle = _get_env_bool("RELIEF_CLIP_TO_CIRCLE", False)

        self.smoothing_portrait = _get_env_float("RELIEF_SMOOTHING_PORTRAIT", 0.08)
        self.smoothing_object = _get_env_float("RELIEF_SMOOTHING_OBJECT", 0.04)
        self.smoothing_organic = _get_env_float("RELIEF_SMOOTHING_ORGANIC", 0.05)
        self.smoothing_scene = _get_env_float("RELIEF_SMOOTHING_SCENE", 0.1)
        self.symmetry_blend_portrait = _get_env_float("SYMMETRY_BLEND_PORTRAIT", 0.3)

        self.segment_endpoint = os.getenv("MODEL_ENDPOINT_SAM", "").strip()
        self.depth_endpoint = os.getenv("MODEL_ENDPOINT_DEPTH", "").strip()
        self.classifier_endpoint = os.getenv("MODEL_ENDPOINT_CLIP", "").strip()
        self.segment_model = os.getenv("SEGMENTATION_MODEL", "sam2")
        self.depth_model = os.getenv("DEPTH_MODEL", "depth_anything")
        self.classifier_model = os.getenv("CLASSIFIER_MODEL", "clip")

        self.request_timeout_sec = _get_env_float("MODEL_REQUEST_TIMEOUT_SEC", 15.0)


CONFIG = Config()
