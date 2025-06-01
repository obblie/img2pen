import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-2'
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

async function testBucketAccess() {
    console.log('🔍 Testing S3 Bucket Access...');
    console.log(`📦 Bucket: ${BUCKET_NAME}`);
    console.log(`🌍 Region: ${process.env.AWS_REGION}`);
    
    try {
        // Test 1: Check if bucket exists and we have access
        console.log('\n1. Testing bucket access...');
        const headResult = await s3.headBucket({ Bucket: BUCKET_NAME }).promise();
        console.log('✅ Bucket access successful');
        
        // Test 2: Check bucket location
        console.log('\n2. Getting bucket location...');
        const locationResult = await s3.getBucketLocation({ Bucket: BUCKET_NAME }).promise();
        console.log(`📍 Bucket location: ${locationResult.LocationConstraint || 'us-east-1'}`);
        
        // Test 3: Check CORS configuration
        console.log('\n3. Checking CORS configuration...');
        try {
            const corsResult = await s3.getBucketCors({ Bucket: BUCKET_NAME }).promise();
            console.log('✅ CORS configuration found:');
            console.log(JSON.stringify(corsResult.CORSRules, null, 2));
        } catch (corsError) {
            if (corsError.code === 'NoSuchCORSConfiguration') {
                console.log('⚠️  No CORS configuration found - this might cause upload issues');
                console.log('💡 You may need to add CORS configuration to your bucket');
            } else {
                console.log('❌ Error checking CORS:', corsError.message);
            }
        }
        
        // Test 4: Test simple put operation
        console.log('\n4. Testing put operation...');
        const testKey = 'test/connection-test.txt';
        const testContent = 'Connection test - ' + new Date().toISOString();
        
        await s3.putObject({
            Bucket: BUCKET_NAME,
            Key: testKey,
            Body: testContent,
            ContentType: 'text/plain'
        }).promise();
        
        console.log('✅ Put operation successful');
        
        // Test 5: Verify the file was uploaded
        console.log('\n5. Verifying upload...');
        const getResult = await s3.getObject({
            Bucket: BUCKET_NAME,
            Key: testKey
        }).promise();
        
        console.log('✅ File verification successful');
        console.log(`📄 Content: ${getResult.Body.toString()}`);
        
        // Clean up test file
        await s3.deleteObject({
            Bucket: BUCKET_NAME,
            Key: testKey
        }).promise();
        
        console.log('🧹 Test file cleaned up');
        
        console.log('\n🎉 All bucket access tests passed!');
        
    } catch (error) {
        console.error('\n💥 Bucket access test failed:', error.message);
        console.error('🔧 Error details:', {
            code: error.code,
            statusCode: error.statusCode,
            region: error.region
        });
    }
}

testBucketAccess(); 