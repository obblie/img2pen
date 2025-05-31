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

async function testFrontendSubmission() {
    console.log('🧪 Testing frontend-style order submission...');
    
    const form = new FormData();
    form.append('name', 'Frontend Test User');
    form.append('email', 'frontend-test@example.com');
    form.append('file', Buffer.from(testSTLContent), {
        filename: 'pendant.stl',
        contentType: 'text/plain'
    });

    const options = {
        hostname: 'img2pen-backend.onrender.com',
        port: 443,
        path: '/api/submit-order',
        method: 'POST',
        headers: form.getHeaders()
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            
            console.log(`Status: ${res.statusCode}`);
            console.log(`Headers:`, res.headers);
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    console.log('✅ Success! Response:', response);
                    resolve(response);
                } catch (error) {
                    console.log('❌ Failed to parse response:', data);
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            console.log('❌ Request error:', error);
            reject(error);
        });

        form.pipe(req);
    });
}

// Run the test
testFrontendSubmission()
    .then(() => {
        console.log('\n🎉 Frontend-style submission test completed successfully!');
    })
    .catch((error) => {
        console.error('\n💥 Frontend-style submission test failed:', error);
    }); 