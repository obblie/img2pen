/**
 * Phase B: Create Form + Features Height Model
 * 
 * Creates two maps and combines them:
 * - Form (low frequency): 3D volume from depth
 * - Features (mid frequency): edges/ridges from albedo/normals
 * 
 * Then: H = Normalize(w_form * Form + w_feat * Features)
 */

export class PhaseB_CreateHeightModel {
    constructor(options) {
        this.options = options;
        this.depthEstimator = null; // Depth Anything / ZoeDepth
        this.featureExtractor = null; // De-light + edge detection
    }

    /**
     * Create the combined height model
     * @param {ImageData|HTMLImageElement} image
     * @param {Object} understanding - Results from Phase A
     * @param {String} mode - Relief mode (portrait, object, organic, scene, graphic)
     * @param {Object} variantOptions - Options for variant generation
     * @returns {Promise<Object>} Height model with form and features maps
     */
    async createHeightModel(image, understanding, mode, variantOptions = {}) {
        console.log(`🏔️ Phase B: Creating height model (mode: ${mode})...`);
        
        const imageData = await this._prepareImageData(image);
        const modeParams = this.options.modes[mode] || this.options.modes.object;
        const adjustedOptions = this._applyQualityAdjustments(variantOptions, understanding);
        
        // Get form map (from depth)
        const formMap = await this._createFormMap(imageData, understanding, mode, adjustedOptions);
        
        // Get features map (from edges/normals)
        const featuresMap = await this._createFeaturesMap(imageData, understanding, mode, adjustedOptions);
        
        // Combine with weights
        const combined = this._combineMaps(formMap, featuresMap, modeParams, adjustedOptions);
        
        // Apply mode-specific processing
        const processed = await this._applyModeProcessing(combined, understanding, mode, adjustedOptions);
        
        return {
            width: imageData.width,
            height: imageData.height,
            formMap,
            featuresMap,
            combined: processed,
            mode,
            modeParams
        };
    }

    /**
     * Create form map from depth estimation
     */
    async _createFormMap(imageData, understanding, mode, variantOptions) {
        // TODO: Integrate depth estimation model (Depth Anything / ZoeDepth)
        
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;

        if (mode === 'graphic') {
            return new Float32Array(width * height);
        }

        // Placeholder: create depth from grayscale (simple approximation)
        const depthMap = new Float32Array(width * height);
        
        for (let i = 0; i < width * height; i++) {
            const idx = i * 4;
            const gray = (data[idx] + data[idx + 1] + data[idx + 2]) / 3 / 255;
            depthMap[i] = gray;
        }
        
        // Apply low-pass filter based on mode
        const sigma = this._getFormSmoothingSigma(width, mode, variantOptions, understanding);
        const smoothed = this._gaussianBlur(depthMap, width, height, sigma);
        
        // Apply symmetry for portraits if face detected
        if (mode === 'portrait' && understanding.classification.faceDetected) {
            return this._applySymmetry(smoothed, width, height, 0.3); // 30% blend
        }
        
        return smoothed;
    }

    /**
     * Create features map from edges/normals
     */
    async _createFeaturesMap(imageData, understanding, mode, variantOptions) {
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;

        const grayscale = new Float32Array(width * height);
        for (let i = 0; i < width * height; i++) {
            const idx = i * 4;
            grayscale[i] = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        }

        const featuresMap = new Float32Array(width * height);

        if (mode === 'graphic') {
            const threshold = this._otsuThreshold(grayscale);
            for (let i = 0; i < grayscale.length; i++) {
                featuresMap[i] = grayscale[i] < threshold ? 1 : 0;
            }
            return this._gaussianBlur(featuresMap, width, height, 0.8);
        }

        const delit = this._delight(grayscale, width, height);
        const edgeMap = this._edgeDetect(delit, width, height);
        const ridgeMap = mode === 'organic' ? this._ridgeEnhance(delit, width, height) : null;

        for (let i = 0; i < featuresMap.length; i++) {
            const edgeVal = edgeMap[i];
            const ridgeVal = ridgeMap ? ridgeMap[i] * 0.8 : 0;
            featuresMap[i] = Math.min(1, edgeVal + ridgeVal);
        }

        // Apply feature strength multiplier based on variant
        const featureStrength = variantOptions.featureStrength || 1.0;
        for (let i = 0; i < featuresMap.length; i++) {
            featuresMap[i] *= featureStrength;
        }
        
        return featuresMap;
    }

    /**
     * Combine form and features maps with weights
     */
    _combineMaps(formMap, featuresMap, modeParams, variantOptions) {
        const { w_form, w_feat } = modeParams;
        const combined = new Float32Array(formMap.length);
        
        for (let i = 0; i < formMap.length; i++) {
            combined[i] = w_form * formMap[i] + w_feat * featuresMap[i];
        }
        
        // Normalize to 0-1 range
        return this._normalize(combined);
    }

    /**
     * Apply mode-specific processing
     */
    async _applyModeProcessing(combined, understanding, mode, variantOptions) {
        // Apply depth curve (nonlinear remapping) based on mode
        const depthCurve = variantOptions.depthCurve || (mode === 'portrait' ? 'portrait' : 'default');
        const processed = this._applyDepthCurve(combined, mode, depthCurve);
        
        return processed;
    }

    /**
     * Apply depth curve (nonlinear remapping)
     */
    _applyDepthCurve(heightMap, mode, curveType) {
        const result = new Float32Array(heightMap.length);
        
        for (let i = 0; i < heightMap.length; i++) {
            let value = heightMap[i];
            
            switch (curveType) {
                case 'strong':
                    // Stronger curve for bold variant
                    value = Math.pow(value, 0.7);
                    break;
                case 'portrait':
                    // Compress highlights for portraits
                    value = value < 0.5 ? value * 1.2 : 0.6 + (value - 0.5) * 0.8;
                    break;
                default:
                    // Linear or slight gamma
                    value = Math.pow(value, 0.9);
            }
            
            result[i] = Math.max(0, Math.min(1, value));
        }
        
        return result;
    }

    /**
     * Get smoothing sigma for form map based on mode
     */
    _getFormSmoothingSigma(width, mode, variantOptions, understanding) {
        const baseSigma = {
            portrait: width * 0.05, // 5% of image width
            object: width * 0.03,
            organic: width * 0.04,
            scene: width * 0.06,
            graphic: 0 // No smoothing for graphics
        };
        
        const sigma = baseSigma[mode] || width * 0.04;
        
        // Adjust based on variant
        const smoothing = variantOptions.smoothing || 'medium';
        const multiplier = {
            high: 1.5,
            medium: 1.0,
            low: 0.7
        }[smoothing] || 1.0;

        const qualityBoost = understanding?.quality?.isLowQuality ? 1.3 : 1.0;
        return sigma * multiplier * qualityBoost;
    }

    /**
     * Apply symmetry assist for portraits
     */
    _applySymmetry(depthMap, width, height, blendFactor) {
        const result = new Float32Array(depthMap);
        const centerX = width / 2;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < centerX; x++) {
                const leftIdx = y * width + x;
                const rightIdx = y * width + (width - 1 - x);
                
                const left = depthMap[leftIdx];
                const right = depthMap[rightIdx];
                const blended = left * (1 - blendFactor) + right * blendFactor;
                
                result[leftIdx] = blended;
                result[rightIdx] = blended;
            }
        }
        
        return result;
    }

    /**
     * Gaussian blur
     */
    _gaussianBlur(data, width, height, sigma) {
        // Simplified Gaussian blur implementation
        // In production, use a proper separable Gaussian blur
        if (sigma <= 0) {
            return new Float32Array(data);
        }
        const result = new Float32Array(data);
        const radius = Math.ceil(sigma * 3);
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let sum = 0;
                let weightSum = 0;
                
                for (let dy = -radius; dy <= radius; dy++) {
                    for (let dx = -radius; dx <= radius; dx++) {
                        const nx = x + dx;
                        const ny = y + dy;
                        
                        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            const weight = Math.exp(-(dist * dist) / (2 * sigma * sigma));
                            sum += data[ny * width + nx] * weight;
                            weightSum += weight;
                        }
                    }
                }
                
                result[y * width + x] = sum / weightSum;
            }
        }
        
        return result;
    }

    /**
     * Normalize array to 0-1 range
     */
    _normalize(array) {
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < array.length; i++) {
            const val = array[i];
            if (val < min) {
                min = val;
            }
            if (val > max) {
                max = val;
            }
        }
        const range = max - min || 1;
        const result = new Float32Array(array.length);
        for (let i = 0; i < array.length; i++) {
            result[i] = (array[i] - min) / range;
        }
        return result;
    }

    /**
     * Prepare ImageData
     */
    async _prepareImageData(image) {
        if (image instanceof ImageData) {
            return image;
        }
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (image instanceof HTMLImageElement || image instanceof HTMLCanvasElement) {
            canvas.width = image.width || image.naturalWidth;
            canvas.height = image.height || image.naturalHeight;
            ctx.drawImage(image, 0, 0);
            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
        
        throw new Error('Unsupported image type');
    }

    _applyQualityAdjustments(variantOptions, understanding) {
        if (!understanding?.quality?.isLowQuality && !understanding?.useConservativeMode) {
            return { ...variantOptions };
        }
        return {
            ...variantOptions,
            smoothing: variantOptions.smoothing || 'high',
            featureStrength: (variantOptions.featureStrength || 1.0) * 0.6,
            depthCurve: variantOptions.depthCurve || 'default'
        };
    }

    _delight(grayscale, width, height) {
        const sigma = Math.max(2, Math.round(Math.min(width, height) * 0.02));
        const blurred = this._gaussianBlur(grayscale, width, height, sigma);
        const delit = new Float32Array(grayscale.length);
        for (let i = 0; i < grayscale.length; i++) {
            const light = blurred[i] || 1;
            delit[i] = (grayscale[i] - light * 0.7) / Math.max(1, light);
        }
        return delit;
    }

    _edgeDetect(grayscale, width, height) {
        const edges = new Float32Array(width * height);
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = y * width + x;
                const center = grayscale[idx];
                const right = grayscale[idx + 1];
                const bottom = grayscale[idx + width];
                const gx = right - center;
                const gy = bottom - center;
                edges[idx] = Math.min(1, Math.sqrt(gx * gx + gy * gy) / 60);
            }
        }
        return edges;
    }

    _ridgeEnhance(grayscale, width, height) {
        const small = this._gaussianBlur(grayscale, width, height, 1.0);
        const large = this._gaussianBlur(grayscale, width, height, 3.0);
        const ridge = new Float32Array(grayscale.length);
        for (let i = 0; i < grayscale.length; i++) {
            ridge[i] = Math.max(0, (small[i] - large[i]) / 40);
        }
        return ridge;
    }

    _otsuThreshold(grayscale) {
        const histogram = new Uint32Array(256);
        for (let i = 0; i < grayscale.length; i++) {
            const val = Math.max(0, Math.min(255, Math.round(grayscale[i])));
            histogram[val] += 1;
        }
        const total = grayscale.length;
        let sum = 0;
        for (let i = 0; i < 256; i++) {
            sum += i * histogram[i];
        }
        let sumB = 0;
        let wB = 0;
        let maximum = 0;
        let threshold = 128;
        for (let i = 0; i < 256; i++) {
            wB += histogram[i];
            if (wB === 0) {
                continue;
            }
            const wF = total - wB;
            if (wF === 0) {
                break;
            }
            sumB += i * histogram[i];
            const mB = sumB / wB;
            const mF = (sum - sumB) / wF;
            const between = wB * wF * (mB - mF) * (mB - mF);
            if (between > maximum) {
                maximum = between;
                threshold = i;
            }
        }
        return threshold;
    }
}
