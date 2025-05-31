import express from 'express';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

dotenv.config();

const app = express();

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1'
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

// Add CORS middleware
app.use(cors());
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path} - ${req.ip}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        config: {
            bucket: BUCKET_NAME,
            region: process.env.AWS_REGION || 'us-east-1',
            hasCredentials: !!(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY)
        }
    });
});

// Generate signed URL for STL file upload
app.post('/api/get-upload-url', async (req, res) => {
    try {
        const { name, email, fileType = 'application/octet-stream' } = req.body;
        
        if (!name || !email) {
            console.log('[UPLOAD-URL] Missing required fields:', { name: !!name, email: !!email });
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Generate unique filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();
        const filename = `models/${timestamp}-${guid}.stl`;

        console.log(`[UPLOAD-URL] Generating signed URL for: ${filename}`);
        console.log(`[UPLOAD-URL] User: ${name} <${email}>`);

        // Generate pre-signed URL for PUT operation
        const signedUrl = s3.getSignedUrl('putObject', {
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: fileType,
            Expires: 900, // 15 minutes
            Metadata: {
                'user-name': name,
                'user-email': email,
                'upload-timestamp': timestamp
            }
        });

        console.log(`[UPLOAD-URL] ✅ Signed URL generated for ${filename}`);
        
        res.json({
            success: true,
            uploadUrl: signedUrl,
            filename: filename,
            guid: guid,
            timestamp: timestamp,
            expiresIn: 900 // 15 minutes
        });

    } catch (error) {
        console.error('[UPLOAD-URL] ❌ Error generating signed URL:', error);
        res.status(500).json({ error: 'Failed to generate upload URL' });
    }
});

// Confirm upload completion (optional)
app.post('/api/confirm-upload', async (req, res) => {
    try {
        const { filename, guid } = req.body;
        
        if (!filename || !guid) {
            return res.status(400).json({ error: 'Filename and GUID are required' });
        }

        console.log(`[CONFIRM] Confirming upload: ${filename}`);

        // Check if file exists in S3
        try {
            const headResult = await s3.headObject({
                Bucket: BUCKET_NAME,
                Key: filename
            }).promise();

            console.log(`[CONFIRM] ✅ File confirmed in S3: ${filename}`);
            console.log(`[CONFIRM] File size: ${headResult.ContentLength} bytes`);
            console.log(`[CONFIRM] Last modified: ${headResult.LastModified}`);

            res.json({
                success: true,
                filename: filename,
                guid: guid,
                fileSize: `${(headResult.ContentLength / (1024 * 1024)).toFixed(2)}MB`,
                uploadedAt: headResult.LastModified,
                metadata: headResult.Metadata
            });

        } catch (s3Error) {
            if (s3Error.code === 'NotFound') {
                console.log(`[CONFIRM] ❌ File not found in S3: ${filename}`);
                return res.status(404).json({ error: 'File not found in S3' });
            }
            throw s3Error;
        }

    } catch (error) {
        console.error('[CONFIRM] ❌ Error confirming upload:', error);
        res.status(500).json({ error: 'Failed to confirm upload' });
    }
});

// List recent uploads (optional - for admin/debugging)
app.get('/api/list-uploads', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        
        console.log(`[LIST] Listing recent uploads (limit: ${limit})`);

        const listResult = await s3.listObjectsV2({
            Bucket: BUCKET_NAME,
            Prefix: 'models/',
            MaxKeys: limit
        }).promise();

        const files = listResult.Contents.map(obj => ({
            filename: obj.Key,
            size: `${(obj.Size / (1024 * 1024)).toFixed(2)}MB`,
            lastModified: obj.LastModified,
            etag: obj.ETag
        }));

        console.log(`[LIST] ✅ Found ${files.length} files`);

        res.json({
            success: true,
            files: files,
            count: files.length
        });

    } catch (error) {
        console.error('[LIST] ❌ Error listing uploads:', error);
        res.status(500).json({ error: 'Failed to list uploads' });
    }
});

// Generate signed URL for image upload
app.post('/api/get-image-upload-url', async (req, res) => {
    try {
        const { fileType = 'image/jpeg' } = req.body;

        // Generate unique filename for image
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();
        const extension = fileType.split('/')[1] || 'jpg';
        const filename = `images/${timestamp}-${guid}.${extension}`;

        console.log(`[IMAGE-URL] Generating signed URL for image: ${filename}`);

        // Generate pre-signed URL for PUT operation
        const signedUrl = s3.getSignedUrl('putObject', {
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: fileType,
            Expires: 300, // 5 minutes for images
            Metadata: {
                'upload-timestamp': timestamp,
                'file-type': 'user-image'
            }
        });

        console.log(`[IMAGE-URL] ✅ Signed URL generated for ${filename}`);
        
        res.json({
            success: true,
            uploadUrl: signedUrl,
            filename: filename,
            guid: guid,
            timestamp: timestamp,
            expiresIn: 300 // 5 minutes
        });

    } catch (error) {
        console.error('[IMAGE-URL] ❌ Error generating image upload URL:', error);
        res.status(500).json({ error: 'Failed to generate image upload URL' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 S3 Backend server running on port ${PORT}`);
    console.log(`📦 S3 Bucket: ${BUCKET_NAME}`);
    console.log(`🌍 AWS Region: ${process.env.AWS_REGION || 'us-east-1'}`);
    console.log(`✅ Health check: http://localhost:${PORT}/health`);
}); 