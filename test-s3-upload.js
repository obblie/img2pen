const https = require('https');

const S3_BACKEND_URL = 'https://img2pen-s3-backend.onrender.com';

function makeRequest(url, options, data = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                console.log(`📊 Response Status: ${res.statusCode}`);
                console.log(`📊 Response Headers:`, res.headers);
                console.log(`📊 Response Body:`, body);
                
                try {
                    const parsed = JSON.parse(body);
                    resolve({ status: res.statusCode, data: parsed, headers: res.headers });
                } catch (e) {
                    resolve({ status: res.statusCode, data: body, headers: res.headers });
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

async function testS3Upload() {
    try {
        console.log('🧪 Testing S3 Upload Process...\n');
        
        // Step 1: Get signed URL
        console.log('📋 Step 1: Requesting signed URL...');
        const urlRequestData = JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            fileType: 'application/octet-stream'
        });
        
        const urlOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(urlRequestData)
            }
        };
        
        const urlResponse = await makeRequest(`${S3_BACKEND_URL}/api/get-upload-url`, urlOptions, urlRequestData);
        
        if (urlResponse.status !== 200) {
            throw new Error(`Failed to get upload URL: ${urlResponse.status} - ${JSON.stringify(urlResponse.data)}`);
        }
        
        console.log('✅ Signed URL received successfully');
        console.log(`📁 Filename: ${urlResponse.data.filename}`);
        console.log(`🔑 GUID: ${urlResponse.data.guid}`);
        console.log(`🔗 Upload URL: ${urlResponse.data.uploadUrl.substring(0, 100)}...`);
        
        // Step 2: Create test STL content
        console.log('\n📋 Step 2: Creating test STL content...');
        const testSTLContent = `solid test
  facet normal 0 0 1
    outer loop
      vertex 0 0 0
      vertex 1 0 0
      vertex 0 1 0
    endloop
  endfacet
endsolid test`;
        
        console.log(`📊 STL Content Size: ${testSTLContent.length} bytes`);
        
        // Step 3: Upload to S3
        console.log('\n📋 Step 3: Uploading to S3...');
        const uploadUrl = new URL(urlResponse.data.uploadUrl);
        
        const uploadOptions = {
            hostname: uploadUrl.hostname,
            path: uploadUrl.pathname + uploadUrl.search,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Length': Buffer.byteLength(testSTLContent)
            }
        };
        
        console.log(`🎯 Uploading to: ${uploadUrl.hostname}${uploadUrl.pathname}`);
        
        const uploadResponse = await makeRequest(`https://${uploadUrl.hostname}${uploadUrl.pathname}${uploadUrl.search}`, uploadOptions, testSTLContent);
        
        if (uploadResponse.status !== 200) {
            throw new Error(`S3 upload failed: ${uploadResponse.status} - ${uploadResponse.data}`);
        }
        
        console.log('✅ File uploaded to S3 successfully');
        
        // Step 4: Confirm upload
        console.log('\n📋 Step 4: Confirming upload...');
        const confirmData = JSON.stringify({
            filename: urlResponse.data.filename,
            guid: urlResponse.data.guid
        });
        
        const confirmOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(confirmData)
            }
        };
        
        const confirmResponse = await makeRequest(`${S3_BACKEND_URL}/api/confirm-upload`, confirmOptions, confirmData);
        
        if (confirmResponse.status === 200) {
            console.log('✅ Upload confirmed successfully');
            console.log(`📊 File details:`, confirmResponse.data);
        } else {
            console.log('⚠️ Upload confirmation failed, but file may still be uploaded');
            console.log(`📊 Confirm response:`, confirmResponse.data);
        }
        
        // Step 5: List recent uploads
        console.log('\n📋 Step 5: Checking recent uploads...');
        const listResponse = await makeRequest(`${S3_BACKEND_URL}/api/list-uploads`, { method: 'GET' });
        
        if (listResponse.status === 200) {
            console.log('📋 Recent uploads:');
            console.log('📊 Full response:', JSON.stringify(listResponse.data, null, 2));
            
            if (listResponse.data.files && listResponse.data.files.length > 0) {
                listResponse.data.files.forEach((upload, index) => {
                    console.log(`  ${index + 1}. ${upload.filename} (${upload.size}) - ${upload.lastModified}`);
                });
            } else {
                console.log('  No files found in recent uploads');
            }
        } else {
            console.log('⚠️ Failed to list uploads:', listResponse.data);
        }
        
        console.log('\n🎉 Test completed successfully!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.error('📊 Full error:', error);
    }
}

testS3Upload(); 