const https = require('https');

function checkDeployment() {
    const url = 'https://img2pen-backend.onrender.com/health';
    
    https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            try {
                const response = JSON.parse(data);
                const timestamp = new Date().toISOString();
                console.log(`[${timestamp}] Status: ${response.status}, Path: ${response.config.path}`);
                
                if (response.config.path === 'models') {
                    console.log('✅ Deployment complete! Backend is now configured to save to models directory.');
                    process.exit(0);
                } else {
                    console.log('⏳ Still waiting for deployment... (current path: orders)');
                }
            } catch (error) {
                console.log(`[${new Date().toISOString()}] Error parsing response:`, error.message);
            }
        });
    }).on('error', (error) => {
        console.log(`[${new Date().toISOString()}] Request error:`, error.message);
    });
}

console.log('🔍 Monitoring deployment status...');
console.log('Checking every 30 seconds for GITHUB_PATH to change from "orders" to "models"');
console.log('Press Ctrl+C to stop monitoring\n');

// Check immediately
checkDeployment();

// Then check every 30 seconds
const interval = setInterval(checkDeployment, 30000);

// Stop after 10 minutes (20 checks)
setTimeout(() => {
    clearInterval(interval);
    console.log('\n⏰ Monitoring timeout reached (10 minutes). Deployment may still be in progress.');
    console.log('You can manually check: curl -s https://img2pen-backend.onrender.com/health');
    process.exit(1);
}, 600000); 