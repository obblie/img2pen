import { PendantFactory } from './pendant-factory.js';
import { RobustBooleanEngine } from './robust-boolean-engine.js';

/**
 * New Pendant Integration - Demonstrates the robust boolean-based approach
 * 
 * This module shows how to integrate the new pendant factory into your existing application.
 * It provides a clean interface that replaces the manual geometry construction with
 * systematic boolean operations for guaranteed watertight results.
 */
export class NewPendantIntegration {
    constructor() {
        this.factory = new PendantFactory();
        this.booleanEngine = this.factory.booleanEngine;
        
        // Configuration for the new system
        this.config = {
            // Boolean engine settings
            voxelResolution: 256,
            tolerance: 0.001,
            
            // Pendant defaults
            defaultDiameter: 25,
            defaultThickness: 2,
            defaultBorderThickness: 1,
            defaultJumpringSize: 'small',
            defaultMetalType: 'sterling-silver',
            defaultFinish: 'polished'
        };
        
        // Don't call initializeSystem here - it will be called explicitly
        console.log('🔧 NewPendantIntegration constructed');
    }

    /**
     * Initialize the new pendant system
     */
    async initializeSystem() {
        console.log('🚀 Initializing new pendant creation system...');
        
        try {
            // Configure boolean engine
            this.factory.setBooleanEngineParameters({
                voxelResolution: this.config.voxelResolution,
                tolerance: this.config.tolerance
            });
            
            console.log('✅ New pendant system initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize new pendant system:', error);
            throw error;
        }
    }

    /**
     * Create a pendant using the new robust boolean system
     * This replaces the old createHeightfieldMesh method
     */
    async createPendantFromImage(imageData, options = {}) {
        console.log('🖼️ Creating pendant from image using new boolean system...');
        
        try {
            console.log('📊 Processing image data...');
            
            // Generate heightfield data from image
            const reliefData = this.generateHeightfieldData(imageData);
            console.log('✅ Heightfield data generated');
            
            // Merge options with defaults
            const config = {
                objectType: options.objectType || 'circular-pendant',
                diameter: options.diameter || this.config.defaultDiameter,
                width: options.width || this.config.defaultDiameter,
                height: options.height || this.config.defaultDiameter,
                thickness: options.thickness || this.config.defaultThickness,
                borderThickness: options.borderThickness || this.config.defaultBorderThickness,
                reliefData: reliefData,
                jumpringSize: options.jumpringSize || this.config.defaultJumpringSize,
                metalType: options.metalType || this.config.defaultMetalType,
                finish: options.finish || this.config.defaultFinish
            };
            
            console.log('📋 Config prepared:', config);
            console.log('📊 Relief data in config:', {
                hasReliefData: !!config.reliefData,
                reliefDataWidth: config.reliefData?.width,
                reliefDataHeight: config.reliefData?.height,
                reliefDataHasData: !!config.reliefData?.data
            });
            
            // Create the pendant using the factory with timeout
            console.log('🏭 Calling factory to create pendant...');
            const factoryPromise = this.factory.createCompletePendant(config);
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Factory timeout after 10 seconds')), 10000);
            });
            
            const pendantMesh = await Promise.race([factoryPromise, timeoutPromise]);
            console.log('✅ Factory returned pendant mesh');
            
            // Validate for manufacturing
            console.log('🔍 Validating pendant...');
            const validation = this.factory.validateForManufacturing(pendantMesh.geometry);
            
            if (!validation.passed) {
                console.warn('⚠️ Pendant validation failed:', validation.checks);
            }
            
            console.log('✅ Pendant created successfully with new boolean system');
            return {
                mesh: pendantMesh,
                validation: validation,
                config: config
            };
            
        } catch (error) {
            console.error('❌ Failed to create pendant:', error);
            console.error('🔍 Pendant integration error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            throw error;
        }
    }

    /**
     * Generate heightfield data from image (compatible with existing system)
     */
    generateHeightfieldData(image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size to image size
        canvas.width = image.width;
        canvas.height = image.height;
        
        // Draw image to canvas
        ctx.drawImage(image, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        return {
            width: canvas.width,
            height: canvas.height,
            data: imageData.data,
            aspectRatio: canvas.width / canvas.height
        };
    }

    /**
     * Update pendant material (replaces updateMetalMaterial)
     */
    updatePendantMaterial(pendantMesh, metalType, finish) {
        if (!pendantMesh || !pendantMesh.material) {
            console.warn('⚠️ No pendant mesh to update material');
            return;
        }
        
        const newMaterial = this.factory.createMetalMaterial(metalType, finish);
        pendantMesh.material = newMaterial;
        
        console.log(`✅ Updated pendant material to ${metalType} with ${finish} finish`);
    }

    /**
     * Export pendant to STL (replaces exportSTL)
     */
    async exportPendantToSTL(pendantMesh) {
        if (!pendantMesh || !pendantMesh.geometry) {
            throw new Error('No pendant geometry to export');
        }
        
        console.log('📤 Exporting pendant to STL...');
        
        // Ensure geometry is optimized for export
        const exportGeometry = this.factory.exportToSTL(pendantMesh.geometry);
        
        // Use existing STL exporter
        const { STLExporter } = await import('three/examples/jsm/exporters/STLExporter.js');
        const exporter = new STLExporter();
        
        const stlString = exporter.parse(exportGeometry, {
            binary: false
        });
        
        console.log('✅ STL export completed');
        return stlString;
    }

    /**
     * Perform boolean operations on existing geometries
     * This provides a direct interface to the boolean engine
     */
    async performBooleanOperation(geometryA, geometryB, operation, options = {}) {
        console.log(`🔧 Performing ${operation} boolean operation...`);
        
        try {
            const result = await this.booleanEngine.performBoolean(
                geometryA, geometryB, operation, options
            );
            
            console.log(`✅ Boolean ${operation} completed successfully`);
            return result;
            
        } catch (error) {
            console.error(`❌ Boolean ${operation} failed:`, error);
            throw error;
        }
    }

    /**
     * Create a simple test pendant for validation
     */
    async createTestPendant() {
        console.log('🧪 Creating test pendant...');
        
        const config = {
            objectType: 'circular-pendant',
            diameter: 25,
            thickness: 2,
            borderThickness: 1,
            reliefData: null, // No relief for test
            jumpringSize: 'small',
            metalType: 'sterling-silver',
            finish: 'polished'
        };
        
        const pendantMesh = await this.factory.createCompletePendant(config);
        
        console.log('✅ Test pendant created successfully');
        return pendantMesh;
    }

    /**
     * Validate geometry watertightness
     */
    validateGeometry(geometry) {
        const isWatertight = this.booleanEngine.isWatertight(geometry);
        const vertexCount = geometry.attributes.position.count;
        const faceCount = geometry.index ? geometry.index.count / 3 : 0;
        
        return {
            watertight: isWatertight,
            vertexCount: vertexCount,
            faceCount: faceCount,
            valid: isWatertight && vertexCount > 0 && faceCount > 0
        };
    }

    /**
     * Get system status and capabilities
     */
    getSystemStatus() {
        return {
            manifoldAvailable: this.booleanEngine.manifoldAvailable,
            voxelResolution: this.booleanEngine.voxelResolution,
            tolerance: this.booleanEngine.tolerance,
            config: this.config
        };
    }

    /**
     * Update system configuration
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        
        // Update boolean engine parameters
        this.factory.setBooleanEngineParameters({
            voxelResolution: this.config.voxelResolution,
            tolerance: this.config.tolerance
        });
        
        console.log('✅ System configuration updated:', this.config);
    }

    /**
     * Migration helper: Convert old pendant to new system
     */
    async migrateOldPendant(oldPendantMesh) {
        console.log('🔄 Migrating old pendant to new system...');
        
        if (!oldPendantMesh || !oldPendantMesh.geometry) {
            throw new Error('Invalid old pendant mesh');
        }
        
        // Extract configuration from old pendant
        const oldConfig = oldPendantMesh.userData || {};
        
        // Create new pendant with same configuration
        const newConfig = {
            objectType: oldConfig.objectType || 'circular-pendant',
            diameter: oldConfig.diameter || this.config.defaultDiameter,
            thickness: oldConfig.thickness || this.config.defaultThickness,
            borderThickness: oldConfig.borderThickness || this.config.defaultBorderThickness,
            reliefData: oldConfig.reliefData || null,
            jumpringSize: oldConfig.jumpringSize || this.config.defaultJumpringSize,
            metalType: oldConfig.metalType || this.config.defaultMetalType,
            finish: oldConfig.finish || this.config.defaultFinish
        };
        
        // Create new pendant
        const newPendantMesh = await this.factory.createCompletePendant(newConfig);
        
        console.log('✅ Pendant migration completed');
        return newPendantMesh;
    }
}

/**
 * Integration example: How to use the new system in your existing code
 */
export function integrateNewPendantSystem() {
    console.log('🔗 Integrating new pendant system...');
    
    const integration = new NewPendantIntegration();
    
    // Example usage:
    // 1. Initialize the system
    integration.initializeSystem().then(() => {
        console.log('✅ Integration ready');
        
        // 2. Create a test pendant
        integration.createTestPendant().then(testPendant => {
            console.log('✅ Test pendant created:', testPendant);
            
            // 3. Validate the result
            const validation = integration.validateGeometry(testPendant.geometry);
            console.log('🔍 Validation result:', validation);
        });
    });
    
    return integration;
}

/**
 * Performance comparison: Old vs New system
 */
export async function comparePerformance() {
    console.log('⚡ Running performance comparison...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Test data
    const testImage = new Image();
    testImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
    
    await new Promise(resolve => {
        testImage.onload = resolve;
    });
    
    const imageData = integration.generateHeightfieldData(testImage);
    
    // Test new system
    const newStart = performance.now();
    const newPendant = await integration.createPendantFromImage(imageData);
    const newTime = performance.now() - newStart;
    
    console.log(`⏱️ New system performance: ${newTime.toFixed(2)}ms`);
    console.log(`📊 New pendant stats: ${newPendant.mesh.userData.vertexCount} vertices, ${newPendant.mesh.userData.faceCount} faces`);
    console.log(`🔒 Watertight: ${newPendant.mesh.userData.watertight}`);
    
    return {
        newSystem: {
            time: newTime,
            vertexCount: newPendant.mesh.userData.vertexCount,
            faceCount: newPendant.mesh.userData.faceCount,
            watertight: newPendant.mesh.userData.watertight
        }
    };
} 