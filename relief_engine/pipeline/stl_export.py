from dataclasses import dataclass
from typing import Tuple

import numpy as np
import trimesh


@dataclass
class STLResult:
    stl_bytes: bytes
    vertex_count: int
    face_count: int


def build_heightfield_mesh(
    height_map_mm: np.ndarray,
    diameter_mm: float,
    base_thickness_mm: float,
) -> trimesh.Trimesh:
    height, width = height_map_mm.shape
    dx = diameter_mm / max(1, width - 1)
    dy = diameter_mm / max(1, height - 1)

    xs = np.linspace(-diameter_mm / 2, diameter_mm / 2, width)
    ys = np.linspace(-diameter_mm / 2, diameter_mm / 2, height)
    xx, yy = np.meshgrid(xs, ys)

    top_z = base_thickness_mm + height_map_mm
    bottom_z = np.zeros_like(top_z)

    top_vertices = np.column_stack((xx.ravel(), yy.ravel(), top_z.ravel()))
    bottom_vertices = np.column_stack((xx.ravel(), yy.ravel(), bottom_z.ravel()))

    vertices = np.vstack((top_vertices, bottom_vertices))
    faces = []

    def idx(i, j):
        return i * width + j

    for i in range(height - 1):
        for j in range(width - 1):
            v0 = idx(i, j)
            v1 = idx(i, j + 1)
            v2 = idx(i + 1, j)
            v3 = idx(i + 1, j + 1)

            faces.append([v0, v1, v2])
            faces.append([v2, v1, v3])

            b0 = v0 + height * width
            b1 = v1 + height * width
            b2 = v2 + height * width
            b3 = v3 + height * width

            faces.append([b2, b1, b0])
            faces.append([b3, b1, b2])

    for i in range(height - 1):
        v_top_left = idx(i, 0)
        v_top_right = idx(i, width - 1)
        v_top_left_next = idx(i + 1, 0)
        v_top_right_next = idx(i + 1, width - 1)

        b_top_left = v_top_left + height * width
        b_top_right = v_top_right + height * width
        b_top_left_next = v_top_left_next + height * width
        b_top_right_next = v_top_right_next + height * width

        faces.append([v_top_left, v_top_left_next, b_top_left])
        faces.append([b_top_left, v_top_left_next, b_top_left_next])

        faces.append([v_top_right_next, v_top_right, b_top_right])
        faces.append([b_top_right_next, v_top_right_next, b_top_right])

    for j in range(width - 1):
        v_top_bottom = idx(0, j)
        v_top_bottom_next = idx(0, j + 1)
        v_top_top = idx(height - 1, j)
        v_top_top_next = idx(height - 1, j + 1)

        b_top_bottom = v_top_bottom + height * width
        b_top_bottom_next = v_top_bottom_next + height * width
        b_top_top = v_top_top + height * width
        b_top_top_next = v_top_top_next + height * width

        faces.append([v_top_bottom_next, v_top_bottom, b_top_bottom])
        faces.append([b_top_bottom_next, v_top_bottom_next, b_top_bottom])

        faces.append([v_top_top, v_top_top_next, b_top_top])
        faces.append([b_top_top, v_top_top_next, b_top_top_next])

    mesh = trimesh.Trimesh(vertices=vertices, faces=np.array(faces), process=False)
    return mesh


def export_stl(height_map_mm: np.ndarray, diameter_mm: float, base_thickness_mm: float) -> STLResult:
    mesh = build_heightfield_mesh(height_map_mm, diameter_mm, base_thickness_mm)
    stl_bytes = mesh.export(file_type="stl")
    return STLResult(
        stl_bytes=stl_bytes,
        vertex_count=len(mesh.vertices),
        face_count=len(mesh.faces),
    )
