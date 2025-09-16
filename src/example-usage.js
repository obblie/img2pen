import { NewPendantIntegration } from './new-pendant-integration.js';
import { runRobustBooleanTests } from './test-robust-boolean.js';

/**
 * Example Usage of the New Robust Boolean Pendant System
 * 
 * This file demonstrates how to use the new system to create watertight pendants
 * with guaranteed quality and reliability.
 */

// Example 1: Basic Pendant Creation
async function createBasicPendant() {
    console.log('🎯 Example 1: Creating a basic pendant...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create a simple pendant without relief
    const pendant = await integration.createTestPendant();
    
    console.log('✅ Basic pendant created successfully!');
    console.log(`📊 Stats: ${pendant.userData.vertexCount} vertices, ${pendant.userData.faceCount} faces`);
    console.log(`🔒 Watertight: ${pendant.userData.watertight}`);
    
    return pendant;
}

// Example 2: Pendant with Relief Surface
async function createPendantWithRelief() {
    console.log('🎯 Example 2: Creating pendant with relief surface...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create a mock image for relief
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // Draw a simple pattern
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = '#404040';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Create pendant with relief
    const result = await integration.createPendantFromImage(canvas, {
        objectType: 'circular-pendant',
        diameter: 25,
        thickness: 2,
        borderThickness: 1,
        jumpringSize: 'small',
        metalType: 'gold-14k',
        finish: 'polished'
    });
    
    console.log('✅ Pendant with relief created successfully!');
    console.log(`📊 Stats: ${result.mesh.userData.vertexCount} vertices, ${result.mesh.userData.faceCount} faces`);
    console.log(`🔒 Watertight: ${result.mesh.userData.watertight}`);
    console.log(`✅ Manufacturing validation: ${result.validation.passed ? 'PASSED' : 'FAILED'}`);
    
    return result;
}

// Example 3: Boolean Operations
async function demonstrateBooleanOperations() {
    console.log('🎯 Example 3: Demonstrating boolean operations...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create test geometries
    const cubeA = new THREE.BoxGeometry(2, 2, 2);
    const sphereB = new THREE.SphereGeometry(1, 16, 16);
    sphereB.translate(1, 1, 1);
    
    // Perform boolean operations
    console.log('🔧 Performing union...');
    const unionResult = await integration.performBooleanOperation(cubeA, sphereB, 'union');
    
    console.log('🔧 Performing intersection...');
    const intersectionResult = await integration.performBooleanOperation(cubeA, sphereB, 'intersection');
    
    console.log('🔧 Performing difference...');
    const differenceResult = await integration.performBooleanOperation(cubeA, sphereB, 'difference');
    
    // Validate results
    const unionValid = integration.validateGeometry(unionResult);
    const intersectionValid = integration.validateGeometry(intersectionResult);
    const differenceValid = integration.validateGeometry(differenceResult);
    
    console.log('✅ Boolean operations completed!');
    console.log(`Union: ${unionValid.watertight ? '✅' : '❌'} watertight`);
    console.log(`Intersection: ${intersectionValid.watertight ? '✅' : '❌'} watertight`);
    console.log(`Difference: ${differenceValid.watertight ? '✅' : '❌'} watertight`);
    
    return { unionResult, intersectionResult, differenceResult };
}

// Example 4: Material Updates
async function demonstrateMaterialUpdates() {
    console.log('🎯 Example 4: Demonstrating material updates...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create a pendant
    const pendant = await integration.createTestPendant();
    
    // Update materials
    console.log('🔄 Updating to gold...');
    integration.updatePendantMaterial(pendant, 'gold-14k', 'polished');
    
    console.log('🔄 Updating to rose gold with brushed finish...');
    integration.updatePendantMaterial(pendant, 'rose-gold-14k', 'brushed');
    
    console.log('✅ Material updates completed!');
    
    return pendant;
}

// Example 5: STL Export
async function demonstrateSTLExport() {
    console.log('🎯 Example 5: Demonstrating STL export...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create a pendant
    const pendant = await integration.createTestPendant();
    
    // Export to STL
    console.log('📤 Exporting to STL...');
    const stlString = await integration.exportPendantToSTL(pendant);
    
    console.log('✅ STL export completed!');
    console.log(`📄 STL size: ${(stlString.length / 1024).toFixed(2)} KB`);
    
    // Create download link (in browser environment)
    if (typeof window !== 'undefined') {
        const blob = new Blob([stlString], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pendant.stl';
        a.click();
        URL.revokeObjectURL(url);
    }
    
    return stlString;
}

// Example 6: System Configuration
async function demonstrateConfiguration() {
    console.log('🎯 Example 6: Demonstrating system configuration...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Get current status
    const status = integration.getSystemStatus();
    console.log('📊 Current system status:', status);
    
    // Update configuration
    console.log('⚙️ Updating configuration...');
    integration.updateConfig({
        voxelResolution: 128,  // Lower resolution for faster processing
        tolerance: 0.002,      // Slightly higher tolerance
        defaultMetalType: 'rose-gold-14k'
    });
    
    // Get updated status
    const newStatus = integration.getSystemStatus();
    console.log('📊 Updated system status:', newStatus);
    
    return newStatus;
}

// Example 7: Performance Comparison
async function demonstratePerformance() {
    console.log('🎯 Example 7: Demonstrating performance comparison...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Create test image
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 100, 100);
    
    const imageData = integration.generateHeightfieldData(canvas);
    
    // Measure performance
    const startTime = performance.now();
    const result = await integration.createPendantFromImage(imageData);
    const endTime = performance.now();
    
    const duration = endTime - startTime;
    
    console.log('✅ Performance test completed!');
    console.log(`⏱️ Creation time: ${duration.toFixed(2)}ms`);
    console.log(`📊 Result: ${result.mesh.userData.vertexCount} vertices, ${result.mesh.userData.faceCount} faces`);
    console.log(`🔒 Watertight: ${result.mesh.userData.watertight}`);
    
    return { result, duration };
}

// Example 8: Migration from Old System
async function demonstrateMigration() {
    console.log('🎯 Example 8: Demonstrating migration from old system...');
    
    const integration = new NewPendantIntegration();
    await integration.initializeSystem();
    
    // Simulate old pendant (create with old-style configuration)
    const oldPendant = await integration.createTestPendant();
    oldPendant.userData = {
        type: 'old-pendant',
        objectType: 'circular-pendant',
        diameter: 25,
        thickness: 2,
        borderThickness: 1,
        metalType: 'sterling-silver',
        finish: 'polished'
    };
    
    // Migrate to new system
    console.log('🔄 Migrating old pendant to new system...');
    const newPendant = await integration.migrateOldPendant(oldPendant);
    
    console.log('✅ Migration completed!');
    console.log(`📊 Old pendant: ${oldPendant.userData.type}`);
    console.log(`📊 New pendant: ${newPendant.userData.type}`);
    console.log(`🔒 New pendant watertight: ${newPendant.userData.watertight}`);
    
    return { oldPendant, newPendant };
}

// Example 9: Running Tests
async function runTests() {
    console.log('🎯 Example 9: Running comprehensive tests...');
    
    try {
        const results = await runRobustBooleanTests();
        
        console.log('✅ Test suite completed!');
        console.log(`📊 Results: ${results.passed}/${results.total} tests passed`);
        console.log(`📈 Success rate: ${results.successRate.toFixed(1)}%`);
        
        if (results.successRate === 100) {
            console.log('🎉 All tests passed! The system is working perfectly.');
        } else {
            console.log('⚠️ Some tests failed. Please review the results.');
        }
        
        return results;
        
    } catch (error) {
        console.error('❌ Test suite failed:', error);
        throw error;
    }
}

// Main function to run all examples
async function runAllExamples() {
    console.log('🚀 Running all examples of the new robust boolean pendant system...\n');
    
    try {
        // Run examples
        await createBasicPendant();
        console.log('');
        
        await createPendantWithRelief();
        console.log('');
        
        await demonstrateBooleanOperations();
        console.log('');
        
        await demonstrateMaterialUpdates();
        console.log('');
        
        await demonstrateSTLExport();
        console.log('');
        
        await demonstrateConfiguration();
        console.log('');
        
        await demonstratePerformance();
        console.log('');
        
        await demonstrateMigration();
        console.log('');
        
        await runTests();
        console.log('');
        
        console.log('🎉 All examples completed successfully!');
        console.log('✅ The new robust boolean pendant system is ready for production use.');
        
    } catch (error) {
        console.error('❌ Example execution failed:', error);
        throw error;
    }
}

// Export functions for use in other modules
export {
    createBasicPendant,
    createPendantWithRelief,
    demonstrateBooleanOperations,
    demonstrateMaterialUpdates,
    demonstrateSTLExport,
    demonstrateConfiguration,
    demonstratePerformance,
    demonstrateMigration,
    runTests,
    runAllExamples
};

// Auto-run examples if this file is loaded directly
if (typeof window !== 'undefined' && window.location.href.includes('example-usage.js')) {
    runAllExamples().catch(console.error);
} 