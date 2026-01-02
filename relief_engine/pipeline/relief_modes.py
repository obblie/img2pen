from dataclasses import dataclass

from relief_engine.config import CONFIG


MODE_WEIGHTS = {
    "portrait": {"w_form": 0.75, "w_feat": 0.25},
    "object": {"w_form": 0.6, "w_feat": 0.4},
    "organic": {"w_form": 0.55, "w_feat": 0.45},
    "scene": {"w_form": 0.85, "w_feat": 0.15},
    "graphic": {"w_form": 0.0, "w_feat": 1.0},
}


@dataclass
class ModeSelection:
    mode: str
    reason: str


def select_mode(classification, segmentation, quality) -> ModeSelection:
    scores = classification.scores

    if scores.get("graphic", 0) > 0.7:
        return ModeSelection("graphic", "graphic-score")
    if classification.face_detected or scores.get("portrait", 0) > 0.6:
        return ModeSelection("portrait", "portrait-score")
    if scores.get("scene", 0) > 0.6 and segmentation.subject_area < 0.35:
        return ModeSelection("scene", "scene-score")
    if scores.get("organic", 0) > 0.6:
        return ModeSelection("organic", "organic-score")

    return ModeSelection("object", "default")


def smoothing_sigma_px(mode: str, width: int) -> float:
    base = {
        "portrait": CONFIG.smoothing_portrait,
        "object": CONFIG.smoothing_object,
        "organic": CONFIG.smoothing_organic,
        "scene": CONFIG.smoothing_scene,
        "graphic": 0.0,
    }
    fraction = base.get(mode, 0.04)
    return max(0.0, width * fraction)
