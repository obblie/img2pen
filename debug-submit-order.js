const https = require('https');
const FormData = require('form-data');

// Test data that mimics what the frontend sends
const testSTLContent = `solid test
facet normal 0 0 1
  outer loop
    vertex 0 0 0
    vertex 1 0 0
    vertex 0 1 0
  endloop
endfacet
endsolid test`;

async function debugSubmitOrder() {
    console.log('🔍 Debugging submit-order endpoint...');
    console.log('📊 Test STL size:', Buffer.from(testSTLContent).length, 'bytes');
    
    const form = new FormData();
    form.append('name', 'Debug Test User');
    form.append('email', 'debug-test@example.com');
    form.append('file', Buffer.from(testSTLContent), {
        filename: 'pendant.stl',
        contentType: 'text/plain'
    });

    console.log('📤 Sending request to backend...');
    console.log('🌐 URL: https://img2pen-backend.onrender.com/api/submit-order');
    console.log('📋 Headers:', form.getHeaders());

    const options = {
        hostname: 'img2pen-backend.onrender.com',
        port: 443,
        path: '/api/submit-order',
        method: 'POST',
        headers: form.getHeaders(),
        timeout: 180000 // 3 minutes
    };

    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        const req = https.request(options, (res) => {
            const responseTime = Date.now() - startTime;
            let data = '';
            
            console.log(`⏱️  Response received after ${responseTime}ms`);
            console.log(`📊 Status: ${res.statusCode}`);
            console.log(`📋 Response Headers:`, res.headers);
            
            res.on('data', (chunk) => {
                data += chunk;
                console.log(`📥 Received chunk: ${chunk.length} bytes`);
            });
            
            res.on('end', () => {
                const totalTime = Date.now() - startTime;
                console.log(`⏱️  Total time: ${totalTime}ms`);
                console.log(`📄 Raw response: ${data}`);
                
                try {
                    const response = JSON.parse(data);
                    console.log('✅ Parsed response:', response);
                    resolve(response);
                } catch (error) {
                    console.log('❌ Failed to parse JSON response');
                    console.log('📄 Raw data:', data);
                    reject(new Error(`Invalid JSON: ${data}`));
                }
            });
        });

        req.on('error', (error) => {
            const errorTime = Date.now() - startTime;
            console.log(`❌ Request error after ${errorTime}ms:`, error);
            reject(error);
        });

        req.on('timeout', () => {
            const timeoutTime = Date.now() - startTime;
            console.log(`⏰ Request timeout after ${timeoutTime}ms`);
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.setTimeout(180000); // 3 minutes

        console.log('📤 Piping form data...');
        form.pipe(req);
    });
}

// Run the debug test
console.log('🚀 Starting submit-order debug test...');
debugSubmitOrder()
    .then((result) => {
        console.log('\n🎉 Submit-order debug test completed successfully!');
        console.log('📊 Final result:', result);
    })
    .catch((error) => {
        console.error('\n💥 Submit-order debug test failed:');
        console.error('❌ Error:', error.message);
        console.error('📊 Full error:', error);
    }); 