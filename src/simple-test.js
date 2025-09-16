import { RobustBooleanEngine } from './robust-boolean-engine.js';
import * as THREE from 'three';

/**
 * Simple test to verify the robust boolean engine works
 */
export async function simpleTest() {
    console.log('🧪 Running simple robust boolean engine test...');
    
    try {
        // Create the engine
        const engine = new RobustBooleanEngine();
        console.log('✅ Engine created successfully');
        
        // Create two simple geometries
        const geometryA = new THREE.BoxGeometry(2, 2, 2);
        const geometryB = new THREE.SphereGeometry(1, 16, 16);
        
        console.log('✅ Test geometries created');
        
        // Test boolean operation
        const result = await engine.performBoolean(geometryA, geometryB, 'union');
        
        console.log('✅ Boolean operation completed successfully');
        console.log('📊 Result geometry:', {
            vertexCount: result.attributes.position.count,
            hasIndex: !!result.index,
            indexCount: result.index ? result.index.count : 0
        });
        
        // Test watertight check
        const isWatertight = engine.isWatertight(result);
        console.log('🔒 Watertight check:', isWatertight);
        
        return true;
        
    } catch (error) {
        console.error('❌ Simple test failed:', error);
        return false;
    }
}

// Make it available globally
if (typeof window !== 'undefined') {
    window.simpleTest = simpleTest;
    console.log('🧪 Simple test available at window.simpleTest()');
} 