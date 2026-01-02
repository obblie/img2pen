/**
 * Phase C: Manufacturing Constraints → STL
 * 
 * Apply constraints that make it printable and cameo-like:
 * - Clamp depth range to 0-0.6mm
 * - Clamp slopes (avoid "cliffs")
 * - Remove micro-islands (min feature size)
 * - Add base thickness
 * - Make mesh watertight
 */

export class PhaseC_ManufacturingConstraints {
    constructor(options) {
        this.options = {
            maxDepth: options.maxDepth || 0.6, // mm
            baseThickness: options.baseThickness || 1.4, // mm
            minFeatureSize: options.minFeatureSize || 0.15, // mm
            diameterMm: options.diameterMm || 25, // mm
            slopeClamp: options.slopeClamp !== false,
            ...options
        };
    }

    /**
     * Apply all manufacturing constraints
     * @param {Object} heightModel - Height model from Phase B
     * @param {String} mode - Relief mode
     * @returns {Promise<Object>} Constrained heightfield ready for STL generation
     */
    async applyConstraints(heightModel, mode) {
        console.log('🏭 Phase C: Applying manufacturing constraints...');
        
        let processed = heightModel.combined;
        const width = heightModel.width || Math.sqrt(processed.length);
        const height = heightModel.height || width;
        
        // 1. Clamp depth to 0-0.6mm (already normalized to 0-1, scale to 0-0.6)
        processed = this._clampDepth(processed);
        
        // 2. Clamp slopes
        if (this.options.slopeClamp) {
            processed = this._clampSlopes(processed, width, height, mode);
        }
        
        // 3. Remove micro-islands
        processed = this._removeMicroIslands(processed, width, height);
        
        // 4. Create heightfield data structure compatible with existing system
        const heightfieldData = this._createHeightfieldData(processed, width, height);
        
        return {
            heightfield: heightfieldData,
            metadata: {
                maxDepth: this.options.maxDepth,
                baseThickness: this.options.baseThickness,
                totalThickness: this.options.baseThickness + this.options.maxDepth,
                mode
            }
        };
    }

    /**
     * Clamp depth to 0-0.6mm range
     */
    _clampDepth(heightMap) {
        const result = new Float32Array(heightMap.length);
        const maxDepth = this.options.maxDepth;
        
        for (let i = 0; i < heightMap.length; i++) {
            // Height map is 0-1, scale to 0-maxDepth
            result[i] = Math.max(0, Math.min(maxDepth, heightMap[i] * maxDepth));
        }
        
        return result;
    }

    /**
     * Clamp slopes to prevent printing issues
     */
    _clampSlopes(heightMap, width, height, mode) {
        const result = new Float32Array(heightMap);
        const maxSlope = this._getMaxSlope(mode);
        
        // Iterative smoothing where slope exceeds threshold
        for (let iteration = 0; iteration < 3; iteration++) {
            for (let y = 1; y < height - 1; y++) {
                for (let x = 1; x < width - 1; x++) {
                    const idx = y * width + x;
                    const center = result[idx];
                    
                    const right = result[y * width + (x + 1)];
                    const bottom = result[(y + 1) * width + x];
                    
                    const slopeX = Math.abs(right - center);
                    const slopeY = Math.abs(bottom - center);
                    const maxLocalSlope = Math.max(slopeX, slopeY);
                    
                    if (maxLocalSlope > maxSlope) {
                        // Smooth this point
                        const neighbors = [
                            result[(y - 1) * width + x],
                            result[y * width + (x - 1)],
                            right,
                            bottom
                        ];
                        const avg = neighbors.reduce((sum, val) => sum + val, 0) / neighbors.length;
                        result[idx] = center * 0.7 + avg * 0.3; // Blend with neighbors
                    }
                }
            }
        }
        
        return result;
    }

    /**
     * Get max allowed slope based on mode
     */
    _getMaxSlope(mode) {
        // Portraits need gentler slopes
        const slopes = {
            portrait: 0.15, // mm per pixel
            object: 0.2,
            organic: 0.18,
            scene: 0.12,
            graphic: 0.25
        };
        
        return slopes[mode] || 0.2;
    }

    /**
     * Remove micro-islands (features smaller than min size)
     */
    _removeMicroIslands(heightMap, width, height) {
        const result = new Float32Array(heightMap);
        const minSize = this.options.minFeatureSize;
        const pixelSize = this.options.diameterMm / width;
        const minPixels = Math.max(1, Math.ceil(minSize / pixelSize));
        const threshold = this.options.maxDepth * 0.08;
        const visited = new Uint8Array(heightMap.length);
        const stack = [];

        for (let i = 0; i < heightMap.length; i++) {
            if (visited[i] || heightMap[i] < threshold) {
                continue;
            }
            const component = [];
            stack.push(i);
            visited[i] = 1;

            while (stack.length) {
                const idx = stack.pop();
                component.push(idx);
                const x = idx % width;
                const y = Math.floor(idx / width);
                const neighbors = [
                    idx - 1,
                    idx + 1,
                    idx - width,
                    idx + width
                ];
                for (const n of neighbors) {
                    if (n < 0 || n >= heightMap.length) {
                        continue;
                    }
                    const nx = n % width;
                    const ny = Math.floor(n / width);
                    if (Math.abs(nx - x) + Math.abs(ny - y) !== 1) {
                        continue;
                    }
                    if (visited[n] || heightMap[n] < threshold) {
                        continue;
                    }
                    visited[n] = 1;
                    stack.push(n);
                }
            }

            if (component.length < minPixels) {
                for (const idx of component) {
                    result[idx] = 0;
                }
            }
        }

        return result;
    }

    /**
     * Create heightfield data structure compatible with existing system
     */
    _createHeightfieldData(heightMap, width, height) {
        // Convert Float32Array height map to ImageData-like structure
        // The existing system expects RGBA ImageData
        const data = new Uint8ClampedArray(width * height * 4);
        
        for (let i = 0; i < heightMap.length; i++) {
            // Convert height (0-0.6mm) to grayscale (0-255)
            // Normalize to 0-1 first, then scale
            const normalized = heightMap[i] / this.options.maxDepth;
            const gray = Math.round(normalized * 255);
            
            const idx = i * 4;
            data[idx] = gray;     // R
            data[idx + 1] = gray; // G
            data[idx + 2] = gray; // B
            data[idx + 3] = 255;  // A
        }
        
        return {
            width,
            height,
            data,
            aspectRatio: width / height
        };
    }
}
