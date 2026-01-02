# Relief Engine Service

Python microservice for ML-based relief generation.

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn relief_engine.app:app --host 0.0.0.0 --port 8001
```

## API

- `GET /health`
- `POST /relief` (multipart form)
  - `image` (file)
  - `diameter_mm` (float, optional)
  - `relief_depth_mm` (float, optional)
  - `mode` (auto/portrait/object/organic/scene/graphic)

## Environment

Set values in the repo `.env` for model endpoints and relief tuning.
