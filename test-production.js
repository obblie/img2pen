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

async function testProductionBackend() {
    console.log('🚀 Testing Production Backend on Render...\n');
    
    const baseUrl = 'https://img2pen-backend.onrender.com';
    
    // Test 1: Health Check
    console.log('1. Testing Backend Health...');
    try {
        const response = await makeRequest(`${baseUrl}/health`);
        if (response.status === 200) {
            console.log('✅ Backend is healthy:', response.data.status);
            console.log('   Config:', response.data.config);
            
            // Verify it's configured for models directory
            if (response.data.config && response.data.config.path === 'models') {
                console.log('✅ Backend is correctly configured to save to models directory');
            } else {
                console.log('❌ Backend is NOT configured to save to models directory');
                console.log('   Current path:', response.data.config?.path || 'unknown');
            }
        } else {
            console.log('❌ Backend health check failed with status:', response.status);
            console.log('   Response:', response.data);
        }
    } catch (error) {
        console.log('❌ Backend health check failed:', error.message);
        console.log('   This might mean the backend is still deploying...');
    }
    
    // Test 2: Submit Order Endpoint (GET should return method not allowed)
    console.log('\n2. Testing Submit Order Endpoint...');
    try {
        const response = await makeRequest(`${baseUrl}/api/submit-order`);
        if (response.status === 405) {
            console.log('✅ Submit order endpoint exists (returns 405 Method Not Allowed for GET)');
        } else {
            console.log('❌ Unexpected response from submit order endpoint:', response.status);
            console.log('   Response:', response.data);
        }
    } catch (error) {
        console.log('❌ Submit order endpoint test failed:', error.message);
    }
    
    // Test 3: Upload Image Endpoint (GET should return method not allowed)
    console.log('\n3. Testing Upload Image Endpoint...');
    try {
        const response = await makeRequest(`${baseUrl}/api/upload-image`);
        if (response.status === 405) {
            console.log('✅ Upload image endpoint exists (returns 405 Method Not Allowed for GET)');
        } else {
            console.log('❌ Unexpected response from upload image endpoint:', response.status);
            console.log('   Response:', response.data);
        }
    } catch (error) {
        console.log('❌ Upload image endpoint test failed:', error.message);
    }
    
    console.log('\n🎉 Production Backend Test Complete!');
    console.log('\n📋 Next Steps:');
    console.log('   1. If health check failed, wait for Render deployment to complete');
    console.log('   2. Test the frontend at your domain to ensure STL files save to models/');
    console.log('   3. Check GitHub repository to verify files are saved in models/ directory');
    console.log('\n🔧 Production Configuration:');
    console.log('   • Backend URL:', baseUrl);
    console.log('   • Expected STL save location: models/ directory');
    console.log('   • GitHub repository: obblie/img2pen');
}

// Run the test
testProductionBackend().catch(console.error); 