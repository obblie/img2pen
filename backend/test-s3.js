import https from 'https';
import http from 'http';

const S3_BACKEND_URL = process.env.S3_BACKEND_URL || 'http://localhost:3000';

// Test data
const testSTLContent = `solid test
facet normal 0 0 1
  outer loop
    vertex 0 0 0
    vertex 1 0 0
    vertex 0 1 0
  endloop
endfacet
endsolid test`;

async function makeRequest(url, options, data = null) {
    return new Promise((resolve, reject) => {
        const isHttps = url.startsWith('https');
        const client = isHttps ? https : http;
        
        const req = client.request(url, options, (res) => {
            let responseData = '';
            
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(responseData);
                    resolve({ status: res.statusCode, data: parsed });
                } catch (error) {
                    resolve({ status: res.statusCode, data: responseData });
                }
            });
        });

        req.on('error', reject);
        
        if (data) {
            req.write(data);
        }
        
        req.end();
    });
}

async function testS3Backend() {
    console.log('🚀 Testing S3 Backend...');
    console.log(`🌐 Backend URL: ${S3_BACKEND_URL}`);
    
    try {
        // Test 1: Health Check
        console.log('\n1. Testing Health Check...');
        const healthResponse = await makeRequest(`${S3_BACKEND_URL}/health`, {
            method: 'GET'
        });
        
        if (healthResponse.status === 200) {
            console.log('✅ Health check passed');
            console.log('📊 Config:', healthResponse.data.config);
        } else {
            console.log('❌ Health check failed:', healthResponse.status);
            return;
        }

        // Test 2: Get Upload URL
        console.log('\n2. Testing Get Upload URL...');
        const uploadUrlResponse = await makeRequest(`${S3_BACKEND_URL}/api/get-upload-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }, JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            fileType: 'application/octet-stream'
        }));

        if (uploadUrlResponse.status === 200) {
            console.log('✅ Upload URL generated successfully');
            console.log('📋 Response:', {
                filename: uploadUrlResponse.data.filename,
                guid: uploadUrlResponse.data.guid,
                expiresIn: uploadUrlResponse.data.expiresIn
            });
            
            // Test 3: Upload to S3 (if we have a real signed URL)
            if (uploadUrlResponse.data.uploadUrl) {
                console.log('\n3. Testing S3 Upload...');
                console.log('📤 Uploading test STL to S3...');
                
                const uploadResponse = await makeRequest(uploadUrlResponse.data.uploadUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    }
                }, testSTLContent);

                if (uploadResponse.status === 200 || uploadResponse.status === 204) {
                    console.log('✅ S3 upload successful');
                    
                    // Test 4: Confirm Upload
                    console.log('\n4. Testing Upload Confirmation...');
                    const confirmResponse = await makeRequest(`${S3_BACKEND_URL}/api/confirm-upload`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }, JSON.stringify({
                        filename: uploadUrlResponse.data.filename,
                        guid: uploadUrlResponse.data.guid
                    }));

                    if (confirmResponse.status === 200) {
                        console.log('✅ Upload confirmation successful');
                        console.log('📊 File info:', confirmResponse.data);
                    } else {
                        console.log('❌ Upload confirmation failed:', confirmResponse.status);
                    }
                } else {
                    console.log('❌ S3 upload failed:', uploadResponse.status);
                }
            }
        } else {
            console.log('❌ Failed to get upload URL:', uploadUrlResponse.status);
            console.log('📄 Response:', uploadUrlResponse.data);
        }

        // Test 5: List Uploads
        console.log('\n5. Testing List Uploads...');
        const listResponse = await makeRequest(`${S3_BACKEND_URL}/api/list-uploads?limit=5`, {
            method: 'GET'
        });

        if (listResponse.status === 200) {
            console.log('✅ List uploads successful');
            console.log(`📊 Found ${listResponse.data.count} files`);
            if (listResponse.data.files.length > 0) {
                console.log('📁 Recent files:', listResponse.data.files.slice(0, 3));
            }
        } else {
            console.log('❌ List uploads failed:', listResponse.status);
        }

        console.log('\n🎉 S3 Backend test completed!');

    } catch (error) {
        console.error('\n💥 Test failed with error:', error.message);
    }
}

// Run the test
testS3Backend(); 