# Relief Engine V2 - Advanced Form + Features Architecture

This is a completely separate, modular relief generation engine that uses a 3-phase approach:

## Architecture

### Phase A: Understand the Image
- Quality & intent checks (resolution, blur, exposure)
- Segmentation (primary subject mask, background)
- Classification (portrait, object, organic, scene, graphic)

### Phase B: Create Form + Features Height Model
- Form map (low frequency, from depth)
- Features map (mid frequency, from edges/normals)
- Combine with weights: `H = Normalize(w_form * Form + w_feat * Features)`
- Compress to 0.6mm

### Phase B: Manufacturing Constraints → STL
- Clamp depth to 0-0.6mm
- Clamp slopes
- Remove micro-islands
- Add base thickness
- Make watertight mesh

## Relief Modes

1. **Portrait/Animal**: w_form=0.75, w_feat=0.25, symmetry assist
2. **Single Object/Product**: w_form=0.6, w_feat=0.4
3. **Organic**: w_form=0.55, w_feat=0.45
4. **Scene/Landscape**: w_form=0.85, w_feat=0.15
5. **Graphic/Text/Logo**: w_form=0.0, w_feat=1.0

## Output Variants

Always generate 3 variants:
- **Classic**: Safe smoothing, coin-like
- **Detail**: More features
- **Bold**: Stronger depth curve, higher contrast

