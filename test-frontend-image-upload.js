const https = require('https');
const fs = require('fs');

const S3_BACKEND_URL = 'https://img2pen-s3-backend.onrender.com';

function makeRequest(url, options, data = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                console.log(`📊 Response Status: ${res.statusCode}`);
                console.log(`📊 Response Headers:`, res.headers);
                console.log(`📊 Response Body:`, body.substring(0, 500) + (body.length > 500 ? '...' : ''));
                
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

async function testFrontendImageUpload() {
    try {
        console.log('🖼️ Testing Frontend Image Upload Process...\n');
        
        // Step 1: Create a test image file (simulate a small PNG)
        console.log('📋 Step 1: Creating test image data...');
        
        // Create a minimal PNG file data (1x1 pixel black PNG)
        const pngData = Buffer.from([
            0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
            0x00, 0x00, 0x00, 0x0D, // IHDR chunk length
            0x49, 0x48, 0x44, 0x52, // IHDR
            0x00, 0x00, 0x00, 0x01, // width: 1
            0x00, 0x00, 0x00, 0x01, // height: 1
            0x08, 0x02, 0x00, 0x00, 0x00, // bit depth, color type, compression, filter, interlace
            0x90, 0x77, 0x53, 0xDE, // CRC
            0x00, 0x00, 0x00, 0x0C, // IDAT chunk length
            0x49, 0x44, 0x41, 0x54, // IDAT
            0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01,
            0xE2, 0x21, 0xBC, 0x33, // CRC
            0x00, 0x00, 0x00, 0x00, // IEND chunk length
            0x49, 0x45, 0x4E, 0x44, // IEND
            0xAE, 0x42, 0x60, 0x82  // CRC
        ]);
        
        console.log(`📊 Test image size: ${pngData.length} bytes`);
        console.log(`📊 Image type: image/png`);
        
        // Step 2: Request signed URL for image upload (simulating frontend)
        console.log('\n📋 Step 2: Requesting signed URL for image upload...');
        const urlRequestData = JSON.stringify({
            fileType: 'image/png'
        });
        
        const urlOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(urlRequestData)
            }
        };
        
        const urlResponse = await makeRequest(`${S3_BACKEND_URL}/api/get-image-upload-url`, urlOptions, urlRequestData);
        
        if (urlResponse.status !== 200) {
            throw new Error(`Failed to get image upload URL: ${urlResponse.status} - ${JSON.stringify(urlResponse.data)}`);
        }
        
        console.log('✅ Image signed URL received successfully');
        console.log(`📁 Filename: ${urlResponse.data.filename}`);
        console.log(`🔑 GUID: ${urlResponse.data.guid}`);
        console.log(`🔗 Upload URL: ${urlResponse.data.uploadUrl.substring(0, 100)}...`);
        
        // Step 3: Upload image to S3 (simulating frontend)
        console.log('\n📋 Step 3: Uploading image to S3...');
        const uploadUrl = new URL(urlResponse.data.uploadUrl);
        
        const uploadOptions = {
            hostname: uploadUrl.hostname,
            path: uploadUrl.pathname + uploadUrl.search,
            method: 'PUT',
            headers: {
                'Content-Type': 'image/png',
                'Content-Length': pngData.length
            }
        };
        
        console.log(`🎯 Uploading ${pngData.length} bytes to: ${uploadUrl.hostname}${uploadUrl.pathname}`);
        
        const uploadResponse = await makeRequest(`https://${uploadUrl.hostname}${uploadUrl.pathname}${uploadUrl.search}`, uploadOptions, pngData);
        
        if (uploadResponse.status !== 200) {
            throw new Error(`S3 image upload failed: ${uploadResponse.status} - ${uploadResponse.data}`);
        }
        
        console.log('✅ Image uploaded to S3 successfully');
        console.log(`📊 S3 Response ETag: ${uploadResponse.headers.etag}`);
        
        // Step 4: List recent uploads to verify the image is there
        console.log('\n📋 Step 4: Checking if image appears in recent uploads...');
        const listResponse = await makeRequest(`${S3_BACKEND_URL}/api/list-uploads?limit=20`, { method: 'GET' });
        
        if (listResponse.status === 200) {
            console.log('📋 Recent uploads:');
            const imageFiles = listResponse.data.files.filter(file => file.filename.startsWith('images/'));
            
            if (imageFiles.length > 0) {
                console.log(`✅ Found ${imageFiles.length} image files:`);
                imageFiles.forEach((file, index) => {
                    console.log(`  ${index + 1}. ${file.filename}`);
                    console.log(`     Size: ${file.size}`);
                    console.log(`     Modified: ${file.lastModified}`);
                    console.log('');
                });
            } else {
                console.log('⚠️ No image files found in recent uploads');
            }
            
            // Check if our specific file is there
            const ourFile = listResponse.data.files.find(file => file.filename === urlResponse.data.filename);
            if (ourFile) {
                console.log(`✅ Our uploaded image found: ${ourFile.filename} (${ourFile.size})`);
            } else {
                console.log(`❌ Our uploaded image NOT found: ${urlResponse.data.filename}`);
            }
        } else {
            console.log('⚠️ Failed to list uploads:', listResponse.data);
        }
        
        console.log('\n🎉 Frontend image upload test completed!');
        
    } catch (error) {
        console.error('❌ Frontend image upload test failed:', error.message);
        console.error('📊 Full error:', error);
    }
}

testFrontendImageUpload(); 