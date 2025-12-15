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
app.use(cors({
    origin: [
        'https://obblie.github.io',      // GitHub Pages domain
        'https://img2pen.onrender.com',  // Render frontend domain
        'http://localhost:5173',         // For local development
        'http://localhost:3000'          // For local development
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
}));
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
        const { name, email, orderId, fileType = 'application/octet-stream' } = req.body;
        
        if (!name || !email) {
            console.log('[UPLOAD-URL] Missing required fields:', { name: !!name, email: !!email });
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Generate unique filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();
        const orderSlug = orderId
            ? String(orderId).replace(/[^a-zA-Z0-9-_]/g, '').slice(0, 64)
            : 'no-order-id';
        const filename = `models/${orderSlug}-${timestamp}-${guid}.stl`;

        console.log(`[UPLOAD-URL] Generating signed URL for: ${filename}`);
        console.log(`[UPLOAD-URL] User: ${name} <${email}>`);
        console.log(`[UPLOAD-URL] Order ID: ${orderId || 'N/A'}`);

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

        // Get both models and images
        const [modelsResult, imagesResult] = await Promise.all([
            s3.listObjectsV2({
                Bucket: BUCKET_NAME,
                Prefix: 'models/',
                MaxKeys: Math.ceil(limit / 2)
            }).promise(),
            s3.listObjectsV2({
                Bucket: BUCKET_NAME,
                Prefix: 'images/',
                MaxKeys: Math.ceil(limit / 2)
            }).promise()
        ]);

        // Combine and sort by last modified date
        const allFiles = [
            ...(modelsResult.Contents || []),
            ...(imagesResult.Contents || [])
        ].map(obj => ({
            filename: obj.Key,
            size: `${(obj.Size / (1024 * 1024)).toFixed(2)}MB`,
            lastModified: obj.LastModified,
            etag: obj.ETag,
            type: obj.Key.startsWith('models/') ? 'model' : 'image'
        })).sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
          .slice(0, limit);

        console.log(`[LIST] ✅ Found ${allFiles.length} files (${modelsResult.Contents?.length || 0} models, ${imagesResult.Contents?.length || 0} images)`);

        res.json({
            success: true,
            files: allFiles,
            count: allFiles.length,
            breakdown: {
                models: modelsResult.Contents?.length || 0,
                images: imagesResult.Contents?.length || 0
            }
        });

    } catch (error) {
        console.error('[LIST] ❌ Error listing uploads:', error);
        res.status(500).json({ error: 'Failed to list uploads' });
    }
});

// Generate signed URL for image upload
app.post('/api/get-image-upload-url', async (req, res) => {
    try {
        const { fileType = 'image/jpeg', directory = 'images', customFilename } = req.body;

        console.log(`[IMAGE-URL] Request received:`, { fileType, directory, customFilename: customFilename || 'not provided' });

        // Generate timestamp and guid for response (always needed)
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();

        let filename;
        if (customFilename) {
            // Use custom filename if provided
            const extension = fileType.split('/')[1] || 'jpg';
            filename = `${directory}/${customFilename}.${extension}`;
            console.log(`[IMAGE-URL] Using custom filename: ${filename}`);
        } else {
            // Generate unique filename for image
            const extension = fileType.split('/')[1] || 'jpg';
            filename = `${directory}/${timestamp}-${guid}.${extension}`;
        }

        console.log(`[IMAGE-URL] Generating signed URL for image: ${filename}`);

        // Generate pre-signed URL for PUT operation (without metadata to avoid signature issues)
        const signedUrl = s3.getSignedUrl('putObject', {
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: fileType,
            Expires: 300, // 5 minutes for images
            // Note: Removed Metadata to avoid 403 signature issues
        });

        console.log(`[IMAGE-URL] ✅ Signed URL generated for ${filename}`);
        
        res.json({
            success: true,
            uploadUrl: signedUrl,
            filename: filename,
            guid: guid,
            timestamp: timestamp,
            expiresIn: 300, // 5 minutes
            metadata: {
                'upload-timestamp': timestamp,
                'file-type': 'user-image'
            }
        });

    } catch (error) {
        console.error('[IMAGE-URL] ❌ Error generating image upload URL:', error);
        res.status(500).json({ error: 'Failed to generate image upload URL' });
    }
});

// Generate signed URL for DALL-E generated image upload
app.post('/api/get-dalle-upload-url', async (req, res) => {
    try {
        const { fileType = 'image/png', prompt, customFilename, directory } = req.body;

        console.log(`[DALLE-URL] Request received:`, { fileType, directory: directory || 'not provided', customFilename: customFilename || 'not provided' });

        // Generate timestamp and guid for response (always needed)
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();

        let filename;
        if (customFilename) {
            // Use custom filename if provided
            const extension = fileType.split('/')[1] || 'png';
            const dir = directory || 'dalleGenerations';  // Use provided directory or default
            filename = `${dir}/${customFilename}.${extension}`;
            console.log(`[DALLE-URL] Using custom filename: ${filename}`);
        } else {
            // Generate unique filename for DALL-E image
            const extension = fileType.split('/')[1] || 'png';
            filename = `dalleGenerations/${timestamp}-${guid}.${extension}`;
        }

        console.log(`[DALLE-URL] Generating signed URL for DALL-E image: ${filename}`);
        console.log(`[DALLE-URL] Prompt: ${prompt?.substring(0, 100)}...`);

        // Generate pre-signed URL for PUT operation (without metadata to avoid signature issues)
        const signedUrl = s3.getSignedUrl('putObject', {
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: fileType,
            Expires: 300, // 5 minutes for images
            // Note: Removed Metadata to avoid 403 signature issues
            // Metadata can be added via a separate tagging operation if needed
        });

        console.log(`[DALLE-URL] ✅ Signed URL generated for ${filename}`);
        
        res.json({
            success: true,
            uploadUrl: signedUrl,
            filename: filename,
            guid: guid,
            timestamp: timestamp,
            expiresIn: 300, // 5 minutes
            metadata: {
                'upload-timestamp': timestamp,
                'file-type': 'dalle-generated',
                'prompt': prompt?.substring(0, 1000) || 'no-prompt'
            }
        });

    } catch (error) {
        console.error('[DALLE-URL] ❌ Error generating DALL-E upload URL:', error);
        res.status(500).json({ error: 'Failed to generate DALL-E upload URL' });
    }
});

// Generate signed URL for cropped image upload
app.post('/api/get-cropped-image-upload-url', async (req, res) => {
    try {
        const { fileType = 'image/jpeg' } = req.body;

        // Generate unique filename for cropped image
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const guid = uuidv4();
        const extension = fileType.split('/')[1] || 'jpg';
        const filename = `croppedImages/${timestamp}-${guid}.${extension}`;

        console.log(`[CROPPED-URL] Generating signed URL for cropped image: ${filename}`);

        // Generate pre-signed URL for PUT operation (without metadata to avoid signature issues)
        const signedUrl = s3.getSignedUrl('putObject', {
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: fileType,
            Expires: 300, // 5 minutes for images
            // Note: Removed Metadata to avoid 403 signature issues
        });

        console.log(`[CROPPED-URL] ✅ Signed URL generated for ${filename}`);
        
        res.json({
            success: true,
            uploadUrl: signedUrl,
            filename: filename,
            guid: guid,
            timestamp: timestamp,
            expiresIn: 300, // 5 minutes
            metadata: {
                'upload-timestamp': timestamp,
                'file-type': 'cropped-image'
            }
        });

    } catch (error) {
        console.error('[CROPPED-URL] ❌ Error generating cropped image upload URL:', error);
        res.status(500).json({ error: 'Failed to generate cropped image upload URL' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 S3 Backend server running on port ${PORT}`);
    console.log(`📦 S3 Bucket: ${BUCKET_NAME}`);
    console.log(`🌍 AWS Region: ${process.env.AWS_REGION || 'us-east-1'}`);
    console.log(`✅ Health check: http://localhost:${PORT}/health`);
}); 