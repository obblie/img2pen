import { NewPendantIntegration } from './new-pendant-integration.js';

/**
 * Simple test to verify the new robust boolean system
 */
export async function testNewSystem() {
    console.log('🧪 Testing new robust boolean system...');
    
    try {
        // Initialize the system
        const integration = new NewPendantIntegration();
        await integration.initializeSystem();
        
        console.log('✅ System initialized successfully');
        
        // Test system status
        const status = integration.getSystemStatus();
        console.log('📊 System status:', status);
        
        // Test creating a simple pendant
        console.log('🔨 Creating test pendant...');
        const testImage = new Image();
        testImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='; // 1x1 pixel
        
        const result = await integration.createPendantFromImage(testImage, {
            objectType: 'circular',
            diameter: 30,
            thickness: 2,
            borderThickness: 1,
            jumpringSize: 'small',
            metalType: 'sterling-silver',
            finish: 'polished'
        });
        
        console.log('✅ Test pendant created successfully!');
        console.log('📊 Pendant stats:', {
            vertexCount: result.mesh.userData.vertexCount,
            faceCount: result.mesh.userData.faceCount,
            watertight: result.mesh.userData.watertight
        });
        
        return true;
        
    } catch (error) {
        console.error('❌ Test failed:', error);
        return false;
    }
}

// Auto-run test if this module is loaded directly
if (typeof window !== 'undefined') {
    window.testNewSystem = testNewSystem;
    console.log('🧪 New system test available at window.testNewSystem()');
} 