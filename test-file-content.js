const https = require('https');

const S3_BACKEND_URL = 'https://img2pen-s3-backend.onrender.com';

function makeRequest(url, options, data = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
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

async function testFileContent() {
    try {
        console.log('🔍 Testing file content in S3...\n');
        
        // First, let's create a larger test file
        console.log('📋 Step 1: Creating a larger test STL file...');
        const largerSTLContent = `solid TestModel
facet normal 0.0 0.0 1.0
  outer loop
    vertex 0.0 0.0 0.0
    vertex 1.0 0.0 0.0
    vertex 0.5 1.0 0.0
  endloop
endfacet
facet normal 0.0 0.0 1.0
  outer loop
    vertex 1.0 0.0 0.0
    vertex 1.0 1.0 0.0
    vertex 0.5 1.0 0.0
  endloop
endfacet
facet normal 0.0 0.0 -1.0
  outer loop
    vertex 0.0 0.0 0.0
    vertex 0.5 1.0 0.0
    vertex 1.0 0.0 0.0
  endloop
endfacet
facet normal 0.0 0.0 -1.0
  outer loop
    vertex 1.0 0.0 0.0
    vertex 0.5 1.0 0.0
    vertex 1.0 1.0 0.0
  endloop
endfacet
endsolid TestModel`;
        
        console.log(`📊 STL Content Size: ${largerSTLContent.length} bytes`);
        console.log(`📊 STL Content Preview: ${largerSTLContent.substring(0, 100)}...`);
        
        // Step 1: Get signed URL
        console.log('\n📋 Step 2: Requesting signed URL...');
        const urlRequestData = JSON.stringify({
            name: 'Content Test User',
            email: 'contenttest@example.com',
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
            throw new Error(`Failed to get upload URL: ${urlResponse.status}`);
        }
        
        console.log('✅ Signed URL received');
        console.log(`📁 Filename: ${urlResponse.data.filename}`);
        
        // Step 2: Upload to S3 with proper content
        console.log('\n📋 Step 3: Uploading larger file to S3...');
        const uploadUrl = new URL(urlResponse.data.uploadUrl);
        
        const uploadOptions = {
            hostname: uploadUrl.hostname,
            path: uploadUrl.pathname + uploadUrl.search,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Length': Buffer.byteLength(largerSTLContent)
            }
        };
        
        console.log(`🎯 Uploading ${largerSTLContent.length} bytes to S3...`);
        
        const uploadResponse = await makeRequest(`https://${uploadUrl.hostname}${uploadUrl.pathname}${uploadUrl.search}`, uploadOptions, largerSTLContent);
        
        if (uploadResponse.status !== 200) {
            throw new Error(`S3 upload failed: ${uploadResponse.status}`);
        }
        
        console.log('✅ File uploaded to S3 successfully');
        console.log(`📊 S3 Response ETag: ${uploadResponse.headers.etag}`);
        
        // Step 3: Confirm upload and check size
        console.log('\n📋 Step 4: Confirming upload and checking file size...');
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
            console.log(`📊 File size reported by backend: ${confirmResponse.data.fileSize}`);
            console.log(`📊 File metadata:`, confirmResponse.data.metadata);
        }
        
        // Step 4: List all uploads to see the size difference
        console.log('\n📋 Step 5: Listing all uploads to compare sizes...');
        const listResponse = await makeRequest(`${S3_BACKEND_URL}/api/list-uploads?limit=20`, { method: 'GET' });
        
        if (listResponse.status === 200) {
            console.log('📋 All recent uploads:');
            listResponse.data.files.forEach((file, index) => {
                console.log(`  ${index + 1}. ${file.filename}`);
                console.log(`     Size: ${file.size}`);
                console.log(`     Modified: ${file.lastModified}`);
                console.log(`     ETag: ${file.etag}`);
                console.log('');
            });
        }
        
        console.log('\n🎉 Content test completed!');
        
    } catch (error) {
        console.error('❌ Content test failed:', error.message);
        console.error('📊 Full error:', error);
    }
}

testFileContent(); 