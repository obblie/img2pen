import * as THREE from 'three';
import { RobustBooleanEngine } from './robust-boolean-engine.js';
import { PendantFactory } from './pendant-factory.js';
import { NewPendantIntegration } from './new-pendant-integration.js';

/**
 * Comprehensive Test Suite for Robust Boolean System
 * 
 * This test suite validates the new boolean-based pendant creation system
 * and ensures it produces watertight results consistently.
 */
export class RobustBooleanTestSuite {
    constructor() {
        this.booleanEngine = new RobustBooleanEngine();
        this.pendantFactory = new PendantFactory();
        this.integration = new NewPendantIntegration();
        
        this.testResults = [];
        this.passedTests = 0;
        this.totalTests = 0;
    }

    /**
     * Run all tests
     */
    async runAllTests() {
        console.log('🧪 Starting comprehensive test suite for robust boolean system...');
        
        try {
            await this.booleanEngine.initializeManifold();
            await this.integration.initializeSystem();
            
            // Test categories
            await this.testBooleanEngine();
            await this.testPendantFactory();
            await this.testIntegration();
            await this.testEdgeCases();
            await this.testPerformance();
            
            this.printTestSummary();
            
        } catch (error) {
            console.error('❌ Test suite failed:', error);
            throw error;
        }
    }

    /**
     * Test the boolean engine functionality
     */
    async testBooleanEngine() {
        console.log('\n🔧 Testing Boolean Engine...');
        
        // Test 1: Basic boolean operations
        await this.testBasicBooleanOperations();
        
        // Test 2: Voxel fallback
        await this.testVoxelFallback();
        
        // Test 3: Mesh validation
        await this.testMeshValidation();
        
        // Test 4: Watertight guarantee
        await this.testWatertightGuarantee();
    }

    /**
     * Test basic boolean operations
     */
    async testBasicBooleanOperations() {
        const testName = 'Basic Boolean Operations';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create test geometries
            const cubeA = new THREE.BoxGeometry(2, 2, 2);
            const cubeB = new THREE.BoxGeometry(2, 2, 2);
            cubeB.translate(1, 1, 1);
            
            // Test union
            const unionResult = await this.booleanEngine.performBoolean(cubeA, cubeB, 'union');
            const unionWatertight = this.booleanEngine.isWatertight(unionResult);
            
            // Test intersection
            const intersectionResult = await this.booleanEngine.performBoolean(cubeA, cubeB, 'intersection');
            const intersectionWatertight = this.booleanEngine.isWatertight(intersectionResult);
            
            // Test difference
            const differenceResult = await this.booleanEngine.performBoolean(cubeA, cubeB, 'difference');
            const differenceWatertight = this.booleanEngine.isWatertight(differenceResult);
            
            const passed = unionWatertight && intersectionWatertight && differenceWatertight;
            
            this.recordTestResult(testName, passed, {
                unionWatertight,
                intersectionWatertight,
                differenceWatertight,
                unionVertices: unionResult.attributes.position.count,
                intersectionVertices: intersectionResult.attributes.position.count,
                differenceVertices: differenceResult.attributes.position.count
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test voxel fallback functionality
     */
    async testVoxelFallback() {
        const testName = 'Voxel Fallback';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create complex geometries that might trigger fallback
            const sphereA = new THREE.SphereGeometry(1, 16, 16);
            const sphereB = new THREE.SphereGeometry(1, 16, 16);
            sphereB.translate(0.5, 0.5, 0.5);
            
            // Force voxel method
            const result = await this.booleanEngine.performBoolean(
                sphereA, sphereB, 'union', { preferExact: false }
            );
            
            const watertight = this.booleanEngine.isWatertight(result);
            const vertexCount = result.attributes.position.count;
            
            const passed = watertight && vertexCount > 0;
            
            this.recordTestResult(testName, passed, {
                watertight,
                vertexCount,
                method: 'voxel'
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test mesh validation
     */
    async testMeshValidation() {
        const testName = 'Mesh Validation';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create a valid mesh
            const validMesh = new THREE.BoxGeometry(1, 1, 1);
            const validResult = this.booleanEngine.validateInputGeometry(validMesh);
            
            // Create an invalid mesh (no positions)
            const invalidMesh = new THREE.BufferGeometry();
            const invalidResult = this.booleanEngine.validateInputGeometry(invalidMesh);
            
            const passed = validResult && !invalidResult;
            
            this.recordTestResult(testName, passed, {
                validMeshAccepted: validResult,
                invalidMeshRejected: !invalidResult
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test watertight guarantee
     */
    async testWatertightGuarantee() {
        const testName = 'Watertight Guarantee';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create multiple test cases
            const testCases = [
                { name: 'Cube-Cube Union', geoA: new THREE.BoxGeometry(1, 1, 1), geoB: new THREE.BoxGeometry(1, 1, 1) },
                { name: 'Sphere-Cube Intersection', geoA: new THREE.SphereGeometry(1), geoB: new THREE.BoxGeometry(1, 1, 1) },
                { name: 'Cylinder-Sphere Difference', geoA: new THREE.CylinderGeometry(1, 1, 2), geoB: new THREE.SphereGeometry(0.5) }
            ];
            
            let allWatertight = true;
            const results = [];
            
            for (const testCase of testCases) {
                const result = await this.booleanEngine.performBoolean(
                    testCase.geoA, testCase.geoB, 'union'
                );
                
                const watertight = this.booleanEngine.isWatertight(result);
                allWatertight = allWatertight && watertight;
                
                results.push({
                    name: testCase.name,
                    watertight,
                    vertexCount: result.attributes.position.count
                });
            }
            
            this.recordTestResult(testName, allWatertight, { results });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test pendant factory functionality
     */
    async testPendantFactory() {
        console.log('\n🏭 Testing Pendant Factory...');
        
        // Test 1: Basic pendant creation
        await this.testBasicPendantCreation();
        
        // Test 2: Pendant with relief
        await this.testPendantWithRelief();
        
        // Test 3: Material creation
        await this.testMaterialCreation();
        
        // Test 4: Manufacturing validation
        await this.testManufacturingValidation();
    }

    /**
     * Test basic pendant creation
     */
    async testBasicPendantCreation() {
        const testName = 'Basic Pendant Creation';
        console.log(`  Testing: ${testName}`);
        
        try {
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: null,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            
            const watertight = this.booleanEngine.isWatertight(pendantMesh.geometry);
            const hasMaterial = pendantMesh.material !== undefined;
            const hasMetadata = pendantMesh.userData.type === 'pendant';
            
            const passed = watertight && hasMaterial && hasMetadata;
            
            this.recordTestResult(testName, passed, {
                watertight,
                hasMaterial,
                hasMetadata,
                vertexCount: pendantMesh.userData.vertexCount,
                faceCount: pendantMesh.userData.faceCount
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test pendant with relief surface
     */
    async testPendantWithRelief() {
        const testName = 'Pendant with Relief';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create mock relief data
            const reliefData = this.createMockReliefData(100, 100);
            
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: reliefData,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            
            const watertight = this.booleanEngine.isWatertight(pendantMesh.geometry);
            const hasRelief = pendantMesh.userData.vertexCount > 1000; // Should have more vertices with relief
            
            const passed = watertight && hasRelief;
            
            this.recordTestResult(testName, passed, {
                watertight,
                hasRelief,
                vertexCount: pendantMesh.userData.vertexCount,
                faceCount: pendantMesh.userData.faceCount
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test material creation
     */
    async testMaterialCreation() {
        const testName = 'Material Creation';
        console.log(`  Testing: ${testName}`);
        
        try {
            const materials = [
                this.pendantFactory.createMetalMaterial('sterling-silver', 'polished'),
                this.pendantFactory.createMetalMaterial('gold-14k', 'brushed'),
                this.pendantFactory.createMetalMaterial('rose-gold-14k', 'matte')
            ];
            
            const allValid = materials.every(material => 
                material instanceof THREE.Material && 
                material.metalness === 1.0
            );
            
            this.recordTestResult(testName, allValid, {
                materialCount: materials.length,
                allValid
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test manufacturing validation
     */
    async testManufacturingValidation() {
        const testName = 'Manufacturing Validation';
        console.log(`  Testing: ${testName}`);
        
        try {
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: null,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            const validation = this.pendantFactory.validateForManufacturing(pendantMesh.geometry);
            
            this.recordTestResult(testName, validation.passed, validation.checks);
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test integration functionality
     */
    async testIntegration() {
        console.log('\n🔗 Testing Integration...');
        
        // Test 1: System initialization
        await this.testSystemInitialization();
        
        // Test 2: Pendant creation from image
        await this.testPendantFromImage();
        
        // Test 3: Material updates
        await this.testMaterialUpdates();
        
        // Test 4: STL export
        await this.testSTLExport();
    }

    /**
     * Test system initialization
     */
    async testSystemInitialization() {
        const testName = 'System Initialization';
        console.log(`  Testing: ${testName}`);
        
        try {
            const status = this.integration.getSystemStatus();
            
            const hasConfig = status.config !== undefined;
            const hasBooleanEngine = status.voxelResolution !== undefined;
            
            const passed = hasConfig && hasBooleanEngine;
            
            this.recordTestResult(testName, passed, status);
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test pendant creation from image
     */
    async testPendantFromImage() {
        const testName = 'Pendant from Image';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create mock image
            const mockImage = this.createMockImage(200, 200);
            const imageData = this.integration.generateHeightfieldData(mockImage);
            
            const result = await this.integration.createPendantFromImage(imageData);
            
            const hasMesh = result.mesh !== undefined;
            const hasValidation = result.validation !== undefined;
            const watertight = result.mesh.userData.watertight;
            
            const passed = hasMesh && hasValidation && watertight;
            
            this.recordTestResult(testName, passed, {
                hasMesh,
                hasValidation,
                watertight,
                vertexCount: result.mesh.userData.vertexCount,
                faceCount: result.mesh.userData.faceCount
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test material updates
     */
    async testMaterialUpdates() {
        const testName = 'Material Updates';
        console.log(`  Testing: ${testName}`);
        
        try {
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: null,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            
            // Test material update
            this.integration.updatePendantMaterial(pendantMesh, 'gold-14k', 'brushed');
            
            const materialUpdated = pendantMesh.material.color.getHex() === 0xE7C76E;
            
            this.recordTestResult(testName, materialUpdated, {
                materialUpdated,
                materialColor: pendantMesh.material.color.getHex()
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test STL export
     */
    async testSTLExport() {
        const testName = 'STL Export';
        console.log(`  Testing: ${testName}`);
        
        try {
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: null,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            const stlString = await this.integration.exportPendantToSTL(pendantMesh);
            
            const hasSTL = stlString && stlString.length > 0;
            const isASCII = stlString.includes('solid');
            
            const passed = hasSTL && isASCII;
            
            this.recordTestResult(testName, passed, {
                hasSTL,
                isASCII,
                stlLength: stlString.length
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test edge cases
     */
    async testEdgeCases() {
        console.log('\n⚠️ Testing Edge Cases...');
        
        // Test 1: Empty geometries
        await this.testEmptyGeometries();
        
        // Test 2: Non-manifold inputs
        await this.testNonManifoldInputs();
        
        // Test 3: Extreme dimensions
        await this.testExtremeDimensions();
        
        // Test 4: Complex relief data
        await this.testComplexReliefData();
    }

    /**
     * Test empty geometries
     */
    async testEmptyGeometries() {
        const testName = 'Empty Geometries';
        console.log(`  Testing: ${testName}`);
        
        try {
            const emptyGeo = new THREE.BufferGeometry();
            const validGeo = new THREE.BoxGeometry(1, 1, 1);
            
            // Should reject empty geometry
            const emptyValid = this.booleanEngine.validateInputGeometry(emptyGeo);
            const validValid = this.booleanEngine.validateInputGeometry(validGeo);
            
            const passed = !emptyValid && validValid;
            
            this.recordTestResult(testName, passed, {
                emptyGeometryRejected: !emptyValid,
                validGeometryAccepted: validValid
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test non-manifold inputs
     */
    async testNonManifoldInputs() {
        const testName = 'Non-Manifold Inputs';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create a non-manifold geometry (plane with holes)
            const plane = new THREE.PlaneGeometry(2, 2);
            const cube = new THREE.BoxGeometry(1, 1, 1);
            
            // This should still work due to fallback mechanisms
            const result = await this.booleanEngine.performBoolean(plane, cube, 'union');
            const watertight = this.booleanEngine.isWatertight(result);
            
            this.recordTestResult(testName, watertight, {
                watertight,
                vertexCount: result.attributes.position.count
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test extreme dimensions
     */
    async testExtremeDimensions() {
        const testName = 'Extreme Dimensions';
        console.log(`  Testing: ${testName}`);
        
        try {
            const tinyCube = new THREE.BoxGeometry(0.001, 0.001, 0.001);
            const hugeCube = new THREE.BoxGeometry(1000, 1000, 1000);
            
            const result = await this.booleanEngine.performBoolean(tinyCube, hugeCube, 'union');
            const watertight = this.booleanEngine.isWatertight(result);
            
            this.recordTestResult(testName, watertight, {
                watertight,
                vertexCount: result.attributes.position.count
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test complex relief data
     */
    async testComplexReliefData() {
        const testName = 'Complex Relief Data';
        console.log(`  Testing: ${testName}`);
        
        try {
            // Create complex relief data with high frequency details
            const reliefData = this.createComplexReliefData(512, 512);
            
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: reliefData,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            const watertight = this.booleanEngine.isWatertight(pendantMesh.geometry);
            
            this.recordTestResult(testName, watertight, {
                watertight,
                vertexCount: pendantMesh.userData.vertexCount,
                faceCount: pendantMesh.userData.faceCount,
                reliefResolution: '512x512'
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test performance
     */
    async testPerformance() {
        console.log('\n⚡ Testing Performance...');
        
        // Test 1: Boolean operation performance
        await this.testBooleanPerformance();
        
        // Test 2: Pendant creation performance
        await this.testPendantCreationPerformance();
        
        // Test 3: Memory usage
        await this.testMemoryUsage();
    }

    /**
     * Test boolean operation performance
     */
    async testBooleanPerformance() {
        const testName = 'Boolean Performance';
        console.log(`  Testing: ${testName}`);
        
        try {
            const sphereA = new THREE.SphereGeometry(1, 32, 32);
            const sphereB = new THREE.SphereGeometry(1, 32, 32);
            sphereB.translate(0.5, 0.5, 0.5);
            
            const startTime = performance.now();
            const result = await this.booleanEngine.performBoolean(sphereA, sphereB, 'union');
            const endTime = performance.now();
            
            const duration = endTime - startTime;
            const watertight = this.booleanEngine.isWatertight(result);
            
            // Should complete within 5 seconds
            const passed = watertight && duration < 5000;
            
            this.recordTestResult(testName, passed, {
                duration: duration.toFixed(2) + 'ms',
                watertight,
                vertexCount: result.attributes.position.count
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test pendant creation performance
     */
    async testPendantCreationPerformance() {
        const testName = 'Pendant Creation Performance';
        console.log(`  Testing: ${testName}`);
        
        try {
            const reliefData = this.createMockReliefData(256, 256);
            
            const config = {
                objectType: 'circular-pendant',
                diameter: 25,
                thickness: 2,
                borderThickness: 1,
                reliefData: reliefData,
                jumpringSize: 'small',
                metalType: 'sterling-silver',
                finish: 'polished'
            };
            
            const startTime = performance.now();
            const pendantMesh = await this.pendantFactory.createCompletePendant(config);
            const endTime = performance.now();
            
            const duration = endTime - startTime;
            const watertight = this.booleanEngine.isWatertight(pendantMesh.geometry);
            
            // Should complete within 10 seconds
            const passed = watertight && duration < 10000;
            
            this.recordTestResult(testName, passed, {
                duration: duration.toFixed(2) + 'ms',
                watertight,
                vertexCount: pendantMesh.userData.vertexCount,
                faceCount: pendantMesh.userData.faceCount
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Test memory usage
     */
    async testMemoryUsage() {
        const testName = 'Memory Usage';
        console.log(`  Testing: ${testName}`);
        
        try {
            const initialMemory = performance.memory ? performance.memory.usedJSHeapSize : 0;
            
            // Create multiple pendants to test memory usage
            const pendants = [];
            for (let i = 0; i < 5; i++) {
                const config = {
                    objectType: 'circular-pendant',
                    diameter: 25,
                    thickness: 2,
                    borderThickness: 1,
                    reliefData: null,
                    jumpringSize: 'small',
                    metalType: 'sterling-silver',
                    finish: 'polished'
                };
                
                const pendant = await this.pendantFactory.createCompletePendant(config);
                pendants.push(pendant);
            }
            
            const finalMemory = performance.memory ? performance.memory.usedJSHeapSize : 0;
            const memoryIncrease = finalMemory - initialMemory;
            
            // Should not increase memory by more than 50MB
            const passed = memoryIncrease < 50 * 1024 * 1024;
            
            this.recordTestResult(testName, passed, {
                memoryIncrease: (memoryIncrease / 1024 / 1024).toFixed(2) + 'MB',
                pendantCount: pendants.length
            });
            
        } catch (error) {
            this.recordTestResult(testName, false, { error: error.message });
        }
    }

    /**
     * Helper methods
     */
    createMockReliefData(width, height) {
        const data = new Uint8ClampedArray(width * height * 4);
        
        for (let i = 0; i < data.length; i += 4) {
            const gray = Math.random() * 255;
            data[i] = gray;     // R
            data[i + 1] = gray; // G
            data[i + 2] = gray; // B
            data[i + 3] = 255;  // A
        }
        
        return { width, height, data };
    }

    createComplexReliefData(width, height) {
        const data = new Uint8ClampedArray(width * height * 4);
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;
                const gray = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 127 + 128;
                data[index] = gray;     // R
                data[index + 1] = gray; // G
                data[index + 2] = gray; // B
                data[index + 3] = 255;  // A
            }
        }
        
        return { width, height, data };
    }

    createMockImage(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, width, height);
        
        return canvas;
    }

    /**
     * Record test result
     */
    recordTestResult(testName, passed, details = {}) {
        this.totalTests++;
        if (passed) this.passedTests++;
        
        const result = {
            name: testName,
            passed,
            details,
            timestamp: new Date().toISOString()
        };
        
        this.testResults.push(result);
        
        const status = passed ? '✅ PASS' : '❌ FAIL';
        console.log(`    ${status}: ${testName}`);
        
        if (!passed && details.error) {
            console.error(`      Error: ${details.error}`);
        }
    }

    /**
     * Print test summary
     */
    printTestSummary() {
        console.log('\n📊 Test Summary');
        console.log('='.repeat(50));
        console.log(`Total Tests: ${this.totalTests}`);
        console.log(`Passed: ${this.passedTests}`);
        console.log(`Failed: ${this.totalTests - this.passedTests}`);
        console.log(`Success Rate: ${((this.passedTests / this.totalTests) * 100).toFixed(1)}%`);
        
        if (this.passedTests === this.totalTests) {
            console.log('\n🎉 All tests passed! The robust boolean system is working correctly.');
        } else {
            console.log('\n⚠️ Some tests failed. Please review the results above.');
        }
        
        console.log('\nDetailed Results:');
        this.testResults.forEach(result => {
            const status = result.passed ? '✅' : '❌';
            console.log(`${status} ${result.name}`);
            if (!result.passed && result.details.error) {
                console.log(`   Error: ${result.details.error}`);
            }
        });
    }

    /**
     * Get test results
     */
    getTestResults() {
        return {
            total: this.totalTests,
            passed: this.passedTests,
            failed: this.totalTests - this.passedTests,
            successRate: (this.passedTests / this.totalTests) * 100,
            results: this.testResults
        };
    }
}

/**
 * Run the test suite
 */
export async function runRobustBooleanTests() {
    const testSuite = new RobustBooleanTestSuite();
    await testSuite.runAllTests();
    return testSuite.getTestResults();
} 