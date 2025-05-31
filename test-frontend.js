const http = require('http');
const https = require('https');

function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const client = urlObj.protocol === 'https:' ? https : http;
        
        const req = client.request({
            hostname: urlObj.hostname,
            port: urlObj.port,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const result = {
                        status: res.statusCode,
                        headers: res.headers,
                        data: res.headers['content-type']?.includes('application/json') ? JSON.parse(data) : data
                    };
                    resolve(result);
                } catch (e) {
                    resolve({ status: res.statusCode, headers: res.headers, data });
                }
            });
        });
        
        req.on('error', reject);
        
        if (options.body) {
            req.write(options.body);
        }
        
        req.end();
    });
}

async function testFrontendBackendIntegration() {
    console.log('🧪 Testing Frontend-Backend Integration...\n');
    
    // Test 1: Health Check
    console.log('1. Testing Backend Health...');
    try {
        const response = await makeRequest('http://localhost:3001/health');
        if (response.status === 200) {
            console.log('✅ Backend is healthy:', response.data.status);
            console.log('   Config:', response.data.config);
        } else {
            console.log('❌ Backend health check failed with status:', response.status);
            return;
        }
    } catch (error) {
        console.log('❌ Backend health check failed:', error.message);
        return;
    }
    
    // Test 2: Frontend Server
    console.log('\n2. Testing Frontend Server...');
    try {
        const response = await makeRequest('http://localhost:8080');
        if (response.status === 200) {
            console.log('✅ Frontend server is running');
        } else {
            console.log('❌ Frontend server returned status:', response.status);
        }
    } catch (error) {
        console.log('❌ Frontend server check failed:', error.message);
        return;
    }
    
    // Test 3: Image Upload Endpoint
    console.log('\n3. Testing Image Upload Endpoint...');
    try {
        // Create a simple test image (1x1 pixel PNG)
        const testImageBuffer = Buffer.from([
            0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
            0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
            0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
            0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00,
            0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0xE2, 0x21, 0xBC, 0x33,
            0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
        ]);
        
        const formData = new FormData();
        formData.append('image', testImageBuffer, {
            filename: 'test.png',
            contentType: 'image/png'
        });
        
        const uploadResponse = await fetch('http://localhost:3001/api/upload-image', {
            method: 'POST',
            body: formData
        });
        
        if (uploadResponse.ok) {
            const uploadResult = await uploadResponse.json();
            console.log('✅ Image upload successful');
            console.log('   Filename:', uploadResult.filename);
            console.log('   URL:', uploadResult.url);
        } else {
            const error = await uploadResponse.text();
            console.log('❌ Image upload failed:', error);
        }
    } catch (error) {
        console.log('❌ Image upload test failed:', error.message);
    }
    
    // Test 4: STL Submission Endpoint
    console.log('\n4. Testing STL Submission Endpoint...');
    try {
        const testSTL = `solid test
facet normal 0 0 1
  outer loop
    vertex 0 0 0
    vertex 1 0 0
    vertex 0 1 0
  endloop
endfacet
endsolid test`;
        
        const formData = new FormData();
        formData.append('name', 'Frontend Test User');
        formData.append('email', 'frontend-test@example.com');
        formData.append('file', Buffer.from(testSTL), {
            filename: 'frontend-test.stl',
            contentType: 'text/plain'
        });
        
        const submitResponse = await fetch('http://localhost:3001/api/submit-order', {
            method: 'POST',
            body: formData
        });
        
        if (submitResponse.ok) {
            const submitResult = await submitResponse.json();
            console.log('✅ STL submission successful');
            console.log('   GUID:', submitResult.guid);
            console.log('   Message:', submitResult.message);
        } else {
            const error = await submitResponse.text();
            console.log('❌ STL submission failed:', error);
        }
    } catch (error) {
        console.log('❌ STL submission test failed:', error.message);
    }
    
    console.log('\n🎉 Frontend-Backend Integration Test Complete!');
    console.log('\n📋 Manual Testing Steps:');
    console.log('   1. Open http://localhost:8080 in your browser');
    console.log('   2. Upload an image and test the full workflow');
    console.log('   3. Check that STL files are saved to the models/ directory');
    console.log('   4. Verify commits are made to the GitHub repository');
    console.log('\n🔧 Backend Configuration:');
    console.log('   • Backend URL: http://localhost:3001');
    console.log('   • Frontend URL: http://localhost:8080');
    console.log('   • STL files will be saved to: models/ directory');
    console.log('   • GitHub repository: obblie/img2pen');
}

// Run the test
testFrontendBackendIntegration().catch(console.error); 