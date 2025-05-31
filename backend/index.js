import express from 'express';
import multer from 'multer';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

dotenv.config();

const app = express();
const upload = multer();

// Configure axios with timeout
axios.defaults.timeout = 30000; // 30 second timeout
axios.defaults.headers.common['User-Agent'] = 'img2pen-backend/1.0';

// Add CORS middleware
app.use(cors());
app.use(express.json());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_PATH = process.env.GITHUB_PATH || 'models';

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
            repo: GITHUB_REPO,
            branch: GITHUB_BRANCH,
            path: GITHUB_PATH,
            hasToken: !!GITHUB_TOKEN
        }
    });
});

// Helper function to upload file to GitHub with timeout handling
async function uploadToGitHub(fileBuffer, filename, commitMessage) {
    console.log(`[UPLOAD] Starting upload: ${filename} (${fileBuffer.length} bytes)`);
    
    // Check file size limit (GitHub has a 100MB limit, but we'll set a lower limit for safety)
    const maxFileSize = 50 * 1024 * 1024; // 50MB
    if (fileBuffer.length > maxFileSize) {
        throw new Error(`File too large. Maximum size is ${maxFileSize / (1024 * 1024)}MB`);
    }

    const repoApi = `https://api.github.com/repos/${GITHUB_REPO}`;
    const headers = { 
        Authorization: `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };
    
    try {
        // Get current commit SHA and tree SHA with timeout
        console.log(`[UPLOAD] Getting latest commit for ${GITHUB_REPO}/${GITHUB_BRANCH}`);
        const refResponse = await Promise.race([
            axios.get(`${repoApi}/git/ref/heads/${GITHUB_BRANCH}`, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout getting ref')), 15000))
        ]);
        const latestCommitSha = refResponse.data.object.sha;
        console.log(`[UPLOAD] Latest commit SHA: ${latestCommitSha}`);
        
        const commitResponse = await Promise.race([
            axios.get(`${repoApi}/git/commits/${latestCommitSha}`, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout getting commit')), 15000))
        ]);
        const treeSha = commitResponse.data.tree.sha;
        console.log(`[UPLOAD] Tree SHA: ${treeSha}`);
        
        // Create a new blob for the file with timeout
        console.log(`[UPLOAD] Creating blob for ${filename}`);
        const blobResponse = await Promise.race([
            axios.post(`${repoApi}/git/blobs`, {
                content: fileBuffer.toString('base64'),
                encoding: 'base64'
            }, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout creating blob')), 20000))
        ]);
        console.log(`[UPLOAD] Blob created: ${blobResponse.data.sha}`);
        
        // Create a new tree with timeout
        console.log(`[UPLOAD] Creating new tree with file: ${filename}`);
        const treeResponse = await Promise.race([
            axios.post(`${repoApi}/git/trees`, {
                base_tree: treeSha,
                tree: [
                    {
                        path: filename,
                        mode: '100644',
                        type: 'blob',
                        sha: blobResponse.data.sha
                    }
                ]
            }, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout creating tree')), 15000))
        ]);
        console.log(`[UPLOAD] New tree created: ${treeResponse.data.sha}`);
        
        // Create a new commit with timeout
        console.log(`[UPLOAD] Creating commit: ${commitMessage}`);
        const commitCreateResponse = await Promise.race([
            axios.post(`${repoApi}/git/commits`, {
                message: commitMessage,
                tree: treeResponse.data.sha,
                parents: [latestCommitSha]
            }, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout creating commit')), 15000))
        ]);
        console.log(`[UPLOAD] Commit created: ${commitCreateResponse.data.sha}`);
        
        // Update the branch reference with timeout
        console.log(`[UPLOAD] Updating branch reference`);
        await Promise.race([
            axios.patch(`${repoApi}/git/refs/heads/${GITHUB_BRANCH}`, {
                sha: commitCreateResponse.data.sha
            }, { headers }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout updating ref')), 15000))
        ]);
        
        console.log(`[UPLOAD] ✅ Successfully uploaded ${filename} to ${GITHUB_REPO}`);
        return { success: true, commitSha: commitCreateResponse.data.sha, filename };
        
    } catch (error) {
        console.error(`[UPLOAD] ❌ Failed to upload ${filename}:`, error.response?.data || error.message);
        throw error;
    }
}

// New endpoint for image uploads
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            console.log('[IMAGE] No image file provided');
            return res.status(400).json({ error: 'No image file provided' });
        }
        
        console.log(`[IMAGE] Processing image upload: ${file.originalname} (${file.size} bytes)`);
        
        // Check file size
        const maxImageSize = 10 * 1024 * 1024; // 10MB for images
        if (file.size > maxImageSize) {
            console.log(`[IMAGE] Image too large: ${file.size} bytes`);
            return res.status(400).json({ 
                error: `Image too large. Maximum size is ${maxImageSize / (1024 * 1024)}MB` 
            });
        }
        
        // Create timestamp-based filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileExtension = path.extname(file.originalname);
        const filename = `user images/${timestamp}${fileExtension}`;
        
        // Upload to GitHub
        const result = await uploadToGitHub(
            file.buffer, 
            filename, 
            `User uploaded image: ${timestamp}`
        );
        
        console.log(`[IMAGE] ✅ Image upload successful: ${filename}`);
        res.json({ 
            success: true, 
            filename: filename,
            timestamp: timestamp,
            commitSha: result.commitSha
        });
    } catch (err) {
        console.error('[IMAGE] ❌ Image upload error:', err.response?.data || err.message);
        res.status(500).json({ error: err.message || 'Failed to upload image' });
    }
});

// Updated submit-order endpoint
app.post('/api/submit-order', upload.single('file'), async (req, res) => {
    try {
        const { name, email } = req.body;
        const file = req.file;
        if (!name || !email || !file) {
            console.log('[ORDER] Missing required fields:', { name: !!name, email: !!email, file: !!file });
            return res.status(400).json({ error: 'Missing fields' });
        }
        
        console.log(`[ORDER] Processing order from ${name} <${email}> - File: ${file.originalname} (${file.size} bytes)`);
        
        // Check file size
        const maxModelSize = 50 * 1024 * 1024; // 50MB for STL files
        if (file.size > maxModelSize) {
            console.log(`[ORDER] STL file too large: ${file.size} bytes`);
            return res.status(400).json({ 
                error: `File too large. Maximum size is ${maxModelSize / (1024 * 1024)}MB` 
            });
        }
        
        // Generate GUID and timestamp
        const guid = uuidv4();
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        // Use GITHUB_PATH environment variable consistently
        const filename = `${GITHUB_PATH}/${timestamp}-${guid}.stl`;
        
        console.log(`[ORDER] Generated filename: ${filename}, GUID: ${guid}`);
        
        // Upload to GitHub
        const result = await uploadToGitHub(
            file.buffer,
            filename,
            `Order from ${name} <${email}> at ${new Date().toISOString()} - GUID: ${guid}`
        );
        
        console.log(`[ORDER] ✅ Order submission successful: ${guid}`);
        res.json({ 
            success: true, 
            guid: guid,
            filename: filename,
            timestamp: timestamp,
            commitSha: result.commitSha
        });
    } catch (err) {
        console.error('[ORDER] ❌ Order submission error:', err.response?.data || err.message);
        res.status(500).json({ error: err.message || 'Failed to submit order' });
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Backend listening on port ${process.env.PORT || 3001}`);
    console.log(`Configuration:`);
    console.log(`  - GitHub Repo: ${GITHUB_REPO}`);
    console.log(`  - GitHub Branch: ${GITHUB_BRANCH}`);
    console.log(`  - GitHub Path: ${GITHUB_PATH}`);
    console.log(`  - GitHub Token: ${GITHUB_TOKEN ? 'Set' : 'Missing'}`);
}); 