# Relief Engine V2 - Integration Guide

## Overview

Relief Engine V2 is a completely separate, modular relief generation system that uses advanced image understanding and a form+features architecture. It's designed to be kept completely separate from the original engine (V1) and can be toggled via UI.

## Architecture

The engine follows a 3-phase architecture:

### Phase A: Understand the Image
- **Quality Analysis**: Resolution, blur, exposure checks
- **Segmentation**: Primary subject mask extraction (SAM 2)
- **Classification**: Mode detection (portrait, object, organic, scene, graphic)

### Phase B: Create Height Model
- **Form Map**: Low-frequency 3D volume from depth estimation
- **Features Map**: Mid-frequency edges/ridges from de-lit image
- **Combination**: Weighted combination based on mode

### Phase C: Manufacturing Constraints
- Depth clamping (0-0.6mm)
- Slope clamping
- Micro-island removal
- Base thickness addition
- Watertight mesh generation

## Current Status

The architecture is in place with placeholder implementations. The following need to be integrated:

### Required Model Integrations

1. **Segmentation (Phase A)**
   - [ ] Integrate SAM 2 or equivalent segmentation model
   - [ ] Implement "largest salient object" detection
   - [ ] Add UI override for manual subject selection

2. **Classification (Phase A)**
   - [ ] Integrate CLIP-like vision-language model
   - [ ] Score prompts: "portrait photo", "animal", "product photo", "flower/plant", "landscape", "logo/text"
   - [ ] Implement face detection

3. **Depth Estimation (Phase B)**
   - [ ] Integrate Depth Anything / ZoeDepth model
   - [ ] Implement low-pass filtering with mode-specific sigma
   - [ ] Add symmetry assist for portraits

4. **Feature Extraction (Phase B)**
   - [ ] Implement de-lighting (bilateral filter + local contrast normalization)
   - [ ] Add edge detection (Canny/DoG)
   - [ ] Implement ridge extraction for organic modes

5. **Quality Analysis (Phase A)**
   - [ ] Improve blur detection (Laplacian variance)
   - [ ] Add exposure analysis (histogram-based)
   - [ ] Implement resolution checks

## Usage

### Toggle Between Engines

Use the UI toggle in the top-left corner of the 3D viewer:
- **Unchecked**: Uses original V1 engine
- **Checked**: Uses new V2 engine

### Programmatic Usage

```javascript
// Switch to V2 engine
window.viewer.reliefEngine = 'v2';

// Process an image
const result = await window.viewer.processImage(imageBlob);
```

### Relief Modes

The engine automatically selects a mode based on image analysis:
- **Portrait/Animal**: w_form=0.75, w_feat=0.25, symmetry assist
- **Single Object/Product**: w_form=0.6, w_feat=0.4
- **Organic**: w_form=0.55, w_feat=0.45
- **Scene/Landscape**: w_form=0.85, w_feat=0.15
- **Graphic/Text/Logo**: w_form=0.0, w_feat=1.0

### Output Variants

The engine generates 3 variants (when enabled):
- **Classic**: Safe smoothing, coin-like
- **Detail**: More features
- **Bold**: Stronger depth curve, higher contrast

Currently defaults to "classic" variant. UI for variant selection coming soon.

## File Structure

```
src/relief-engine-v2/
├── index.js                    # Main entry point
├── phase-a-understand.js       # Image understanding
├── phase-b-height-model.js     # Form + features height model
├── phase-c-manufacturing.js    # Manufacturing constraints
├── README.md                   # Overview
└── INTEGRATION_GUIDE.md        # This file
```

## Development Notes

- All placeholder implementations are clearly marked with `// TODO:` comments
- The engine gracefully falls back to V1 if V2 fails
- All processing is async and can be cancelled
- The engine is lazy-loaded (only loaded when V2 is first used)

## Next Steps

1. Integrate actual ML models (SAM 2, CLIP, Depth Anything)
2. Implement proper de-lighting algorithm
3. Add variant selection UI
4. Add mode override UI
5. Performance optimization
6. Add unit tests for each phase

