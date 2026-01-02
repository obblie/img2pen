/**
 * Relief Engine V2 - Main Entry Point
 * 
 * This is a completely separate, modular relief generation engine
 * that uses advanced image understanding and form+features architecture.
 */

import { PhaseA_UnderstandImage } from './phase-a-understand.js';
import { PhaseB_CreateHeightModel } from './phase-b-height-model.js';
import { PhaseC_ManufacturingConstraints } from './phase-c-manufacturing.js';

export class ReliefEngineV2 {
    constructor(options = {}) {
        this.options = {
            // Default relief mode parameters
            modes: {
                portrait: { w_form: 0.75, w_feat: 0.25, symmetry: true },
                object: { w_form: 0.6, w_feat: 0.4, symmetry: false },
                organic: { w_form: 0.55, w_feat: 0.45, symmetry: false },
                scene: { w_form: 0.85, w_feat: 0.15, symmetry: false },
                graphic: { w_form: 0.0, w_feat: 1.0, symmetry: false }
            },
            // Output variants
            generateVariants: true, // Classic, Detail, Bold
            // Manufacturing constraints
            maxDepth: 0.6, // mm
            baseThickness: 1.4, // mm (will be adjusted to keep total constant)
            minFeatureSize: 0.15, // mm
            slopeClamp: true,
            ...options
        };
        
        this.phaseA = new PhaseA_UnderstandImage();
        this.phaseB = new PhaseB_CreateHeightModel(this.options);
        this.phaseC = new PhaseC_ManufacturingConstraints(this.options);
    }

    /**
     * Main processing function
     * @param {ImageData|HTMLImageElement|HTMLCanvasElement} image - Input image
     * @param {Object} userOptions - User overrides (mode, variant, etc.)
     * @returns {Promise<Object>} Result with heightfield data and metadata
     */
    async processImage(image, userOptions = {}) {
        console.log('🚀 Relief Engine V2: Starting processing...');
        
        try {
            // Phase A: Understand the image
            console.log('📊 Phase A: Understanding image...');
            const understanding = await this.phaseA.analyze(image);
            console.log('✅ Phase A complete:', understanding);
            
            // Determine relief mode (user override or auto-detect)
            const mode = userOptions.mode || this._determineMode(understanding);
            console.log(`🎯 Selected mode: ${mode}`);
            
            // Phase B: Create height model
            console.log('🏔️ Phase B: Creating height model...');
            const heightModel = await this.phaseB.createHeightModel(image, understanding, mode);
            console.log('✅ Phase B complete');
            
            // Generate variants if requested
            let variants = {};
            if (this.options.generateVariants && !userOptions.variant) {
                console.log('🎨 Generating variants (Classic, Detail, Bold)...');
                variants = await this._generateVariants(image, understanding, mode, heightModel);
            } else {
                // Single variant based on user selection or default
                const variantType = userOptions.variant || 'classic';
                variants[variantType] = heightModel;
            }
            
            // Phase C: Apply manufacturing constraints and create STL-ready geometry
            console.log('🏭 Phase C: Applying manufacturing constraints...');
            const results = {};
            
            for (const [variantName, variantHeightModel] of Object.entries(variants)) {
                const constrained = await this.phaseC.applyConstraints(variantHeightModel, mode);
                results[variantName] = constrained;
            }
            
            console.log('✅ Relief Engine V2: Processing complete');
            
            return {
                understanding,
                mode,
                variants: results,
                metadata: {
                    engine: 'v2',
                    timestamp: Date.now(),
                    imageSize: understanding.imageSize
                }
            };
            
        } catch (error) {
            console.error('❌ Relief Engine V2: Error during processing:', error);
            throw error;
        }
    }

    /**
     * Auto-determine relief mode based on understanding
     */
    _determineMode(understanding) {
        const { classification, quality } = understanding;
        const scores = classification.scores || classification;
        
        // Decision logic from requirements
        if (scores.graphic > 0.7) {
            return 'graphic';
        }
        if (classification.faceDetected || scores.portrait > 0.6) {
            return 'portrait';
        }
        if (scores.scene > 0.6 && understanding.segmentation.subjectArea < 0.35) {
            return 'scene';
        }
        if (scores.organic > 0.6) {
            return 'organic';
        }
        
        // Default to single object
        return 'object';
    }

    /**
     * Generate three variants: Classic, Detail, Bold
     */
    async _generateVariants(image, understanding, mode, baseHeightModel) {
        const variants = {};
        
        // Classic: Safe smoothing, coin-like
        variants.classic = await this.phaseB.createHeightModel(
            image, 
            understanding, 
            mode,
            { smoothing: 'high', featureStrength: 0.8 }
        );
        
        // Detail: More features
        variants.detail = await this.phaseB.createHeightModel(
            image,
            understanding,
            mode,
            { smoothing: 'low', featureStrength: 1.2 }
        );
        
        // Bold: Stronger depth curve, higher contrast
        variants.bold = await this.phaseB.createHeightModel(
            image,
            understanding,
            mode,
            { smoothing: 'medium', featureStrength: 1.5, depthCurve: 'strong' }
        );
        
        return variants;
    }
}
