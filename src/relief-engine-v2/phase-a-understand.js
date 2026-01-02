/**
 * Phase A: Understand the Image
 * 
 * - Quality & intent checks (resolution, blur, exposure)
 * - Segmentation (primary subject mask, background)
 * - Classification (portrait, object, organic, scene, graphic)
 */

export class PhaseA_UnderstandImage {
    constructor() {
        // These will be initialized with actual model implementations
        this.segmenter = null; // SAM 2 or equivalent
        this.classifier = null; // CLIP-like vision-language model
        this.qualityAnalyzer = null; // Custom quality checks
    }

    /**
     * Main analysis function
     * @param {ImageData|HTMLImageElement|HTMLCanvasElement} image
     * @returns {Promise<Object>} Understanding results
     */
    async analyze(image) {
        console.log('🔍 Phase A: Analyzing image...');
        
        // Convert to ImageData if needed
        const imageData = await this._prepareImageData(image);
        
        // Run all analyses in parallel where possible
        const [quality, segmentation, classification] = await Promise.all([
            this._analyzeQuality(imageData),
            this._performSegmentation(imageData),
            this._classifyImage(imageData)
        ]);
        
        // Determine if we should use conservative mode
        const useConservativeMode = quality.isLowQuality || 
                                   segmentation.subjectArea < 0.1 ||
                                   classification.confidence < 0.5;
        
        return {
            quality,
            segmentation,
            classification,
            useConservativeMode,
            imageSize: {
                width: imageData.width,
                height: imageData.height
            },
            // Derived metrics
            subjectArea: segmentation.subjectArea,
            estimatedSubjectCount: segmentation.estimatedSubjectCount
        };
    }

    /**
     * Quality & intent checks
     */
    async _analyzeQuality(imageData) {
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;
        
        // Simple resolution check
        const resolution = width * height;
        const isLowRes = resolution < 100000; // < 316x316
        
        // Simple blur estimation (Laplacian variance)
        let variance = 0;
        const samples = Math.min(5000, resolution);
        const stride = Math.max(1, Math.floor(resolution / samples));

        for (let i = 0; i < resolution; i += stride) {
            const x = i % width;
            const y = Math.floor(i / width);
            if (x >= width - 1 || y >= height - 1) {
                continue;
            }
            const idx = (y * width + x) * 4;
            const gray = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
            const right = (data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3;
            const bottom = (data[idx + width * 4] + data[idx + width * 4 + 1] + data[idx + width * 4 + 2]) / 3;
            const laplacian = Math.abs(2 * gray - right - bottom);
            variance += laplacian * laplacian;
        }
        const blurScore = variance / Math.max(1, Math.floor(resolution / stride));
        const isBlurry = blurScore < 120; // Tunable threshold
        
        // Exposure check (histogram-based)
        const histogram = new Uint32Array(256);
        let totalBrightness = 0;
        let totalBrightnessSq = 0;
        for (let i = 0; i < data.length; i += 4) {
            const gray = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);
            histogram[gray] += 1;
            totalBrightness += gray;
            totalBrightnessSq += gray * gray;
        }
        const pixelCount = data.length / 4;
        const avgBrightness = totalBrightness / pixelCount;
        const varianceBrightness = totalBrightnessSq / pixelCount - avgBrightness * avgBrightness;
        const brightnessStd = Math.sqrt(Math.max(0, varianceBrightness));
        const darkPixels = histogram.slice(0, 16).reduce((sum, val) => sum + val, 0);
        const brightPixels = histogram.slice(240).reduce((sum, val) => sum + val, 0);
        const darkRatio = darkPixels / pixelCount;
        const brightRatio = brightPixels / pixelCount;
        const isUnderExposed = avgBrightness < 45 || darkRatio > 0.4;
        const isOverExposed = avgBrightness > 210 || brightRatio > 0.4;
        
        const isLowQuality = isLowRes || isBlurry || isUnderExposed || isOverExposed;
        
        return {
            resolution: { width, height, pixels: resolution },
            isLowRes,
            blurScore,
            isBlurry,
            avgBrightness,
            brightnessStd,
            darkRatio,
            brightRatio,
            isUnderExposed,
            isOverExposed,
            isLowQuality
        };
    }

    /**
     * Segmentation - get primary subject mask
     */
    async _performSegmentation(imageData) {
        const width = imageData.width;
        const height = imageData.height;

        const luminance = new Float32Array(width * height);
        const data = imageData.data;
        for (let i = 0; i < width * height; i++) {
            const idx = i * 4;
            luminance[i] = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        }

        // Simple saliency: edge magnitude + center weighting
        const saliency = new Float32Array(width * height);
        const centerX = width / 2;
        const centerY = height / 2;
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = y * width + x;
                const gx = luminance[idx + 1] - luminance[idx - 1];
                const gy = luminance[idx + width] - luminance[idx - width];
                const grad = Math.sqrt(gx * gx + gy * gy);
                const dx = x - centerX;
                const dy = y - centerY;
                const centerWeight = 1 - Math.min(1, Math.sqrt(dx * dx + dy * dy) / maxDist);
                saliency[idx] = grad * (0.5 + 0.5 * centerWeight);
            }
        }

        const threshold = this._percentile(saliency, 0.8);
        const mask = new Uint8Array(width * height);
        for (let i = 0; i < saliency.length; i++) {
            mask[i] = saliency[i] >= threshold ? 255 : 0;
        }

        const { largestMask, componentCount } = this._extractLargestComponent(mask, width, height);
        const subjectPixels = largestMask.reduce((sum, val) => sum + (val > 0 ? 1 : 0), 0);
        const subjectArea = subjectPixels / (width * height);
        
        return {
            primaryMask: largestMask,
            backgroundMask: null,
            subjectArea,
            estimatedSubjectCount: componentCount
        };
    }

    /**
     * Classification - determine relief mode
     */
    async _classifyImage(imageData) {
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;
        const pixelCount = width * height;

        let edgeCount = 0;
        let colorVariance = 0;
        let brightnessSum = 0;
        let brightnessSq = 0;
        let saturationSum = 0;
        let skinToneCount = 0;

        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = (y * width + x) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                const gray = (r + g + b) / 3;
                brightnessSum += gray;
                brightnessSq += gray * gray;

                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                const sat = max === 0 ? 0 : (max - min) / max;
                saturationSum += sat;

                const right = (data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3;
                const bottom = (data[idx + width * 4] + data[idx + width * 4 + 1] + data[idx + width * 4 + 2]) / 3;
                const gx = right - gray;
                const gy = bottom - gray;
                const mag = Math.sqrt(gx * gx + gy * gy);
                if (mag > 25) {
                    edgeCount += 1;
                }

                const isSkin = r > 95 && g > 40 && b > 20 && r > g && g > b && (r - b) > 15;
                if (isSkin) {
                    skinToneCount += 1;
                }
            }
        }

        const avgBrightness = brightnessSum / pixelCount;
        const variance = brightnessSq / pixelCount - avgBrightness * avgBrightness;
        const brightnessStd = Math.sqrt(Math.max(0, variance));
        const edgeDensity = edgeCount / pixelCount;
        const avgSaturation = saturationSum / pixelCount;
        const skinToneRatio = skinToneCount / pixelCount;

        const graphicScore = Math.min(1, edgeDensity * 6) * (1 - Math.min(1, avgSaturation * 2));
        const sceneScore = Math.min(1, brightnessStd / 70) * 0.6 + Math.max(0, 0.4 - edgeDensity) * 0.4;
        const organicScore = Math.min(1, avgSaturation * 1.8) * Math.min(1, brightnessStd / 80);
        const portraitScore = Math.min(1, skinToneRatio * 8);
        const animalScore = Math.min(1, (edgeDensity + avgSaturation) * 0.8);
        const productScore = Math.max(0.2, 1 - (graphicScore + sceneScore + organicScore + portraitScore) * 0.5);

        const scores = {
            portrait: portraitScore,
            animal: animalScore,
            product: productScore,
            organic: organicScore,
            scene: sceneScore,
            graphic: graphicScore
        };

        const topScore = Math.max(...Object.values(scores));
        const topCategory = Object.keys(scores).find(key => scores[key] === topScore);
        const faceDetected = skinToneRatio > 0.12;
        
        return {
            scores,
            topCategory,
            confidence: topScore,
            faceDetected,
            portrait: scores.portrait,
            animal: scores.animal,
            product: scores.product,
            organic: scores.organic,
            scene: scores.scene,
            graphic: scores.graphic
        };
    }

    /**
     * Prepare ImageData from various input types
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

    _percentile(values, percentile) {
        const copy = Array.from(values);
        copy.sort((a, b) => a - b);
        const idx = Math.floor((copy.length - 1) * percentile);
        return copy[idx] || 0;
    }

    _extractLargestComponent(mask, width, height) {
        const visited = new Uint8Array(mask.length);
        const componentId = new Int32Array(mask.length);
        componentId.fill(-1);
        let componentCount = 0;
        let largestComponent = -1;
        let largestSize = 0;

        const stack = [];
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === 0 || visited[i]) {
                continue;
            }
            let size = 0;
            stack.push(i);
            visited[i] = 1;
            componentId[i] = componentCount;

            while (stack.length) {
                const idx = stack.pop();
                size += 1;
                const x = idx % width;
                const y = Math.floor(idx / width);
                const neighbors = [
                    idx - 1,
                    idx + 1,
                    idx - width,
                    idx + width
                ];
                for (const n of neighbors) {
                    if (n < 0 || n >= mask.length) {
                        continue;
                    }
                    if (mask[n] === 0 || visited[n]) {
                        continue;
                    }
                    const nx = n % width;
                    const ny = Math.floor(n / width);
                    if (Math.abs(nx - x) + Math.abs(ny - y) !== 1) {
                        continue;
                    }
                    visited[n] = 1;
                    componentId[n] = componentCount;
                    stack.push(n);
                }
            }

            if (size > largestSize) {
                largestSize = size;
                largestComponent = componentCount;
            }
            componentCount += 1;
        }

        const largestMask = new Uint8Array(mask.length);
        if (largestComponent >= 0) {
            for (let i = 0; i < componentId.length; i++) {
                if (componentId[i] === largestComponent) {
                    largestMask[i] = 255;
                }
            }
        }

        return {
            largestMask,
            componentCount
        };
    }
}
