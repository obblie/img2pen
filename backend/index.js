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

// Add CORS middleware
app.use(cors());
app.use(express.json());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_PATH = process.env.GITHUB_PATH || 'orders';

// Helper function to upload file to GitHub
async function uploadToGitHub(fileBuffer, filename, commitMessage) {
    const repoApi = `https://api.github.com/repos/${GITHUB_REPO}`;
    
    // Get current commit SHA and tree SHA
    const { data: refData } = await axios.get(`${repoApi}/git/ref/heads/${GITHUB_BRANCH}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    const latestCommitSha = refData.object.sha;
    
    const { data: commitData } = await axios.get(`${repoApi}/git/commits/${latestCommitSha}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    const treeSha = commitData.tree.sha;
    
    // Create a new blob for the file
    const { data: blobData } = await axios.post(`${repoApi}/git/blobs`, {
        content: fileBuffer.toString('base64'),
        encoding: 'base64'
    }, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    
    // Create a new tree
    const { data: newTree } = await axios.post(`${repoApi}/git/trees`, {
        base_tree: treeSha,
        tree: [
            {
                path: filename,
                mode: '100644',
                type: 'blob',
                sha: blobData.sha
            }
        ]
    }, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    
    // Create a new commit
    const { data: newCommit } = await axios.post(`${repoApi}/git/commits`, {
        message: commitMessage,
        tree: newTree.sha,
        parents: [latestCommitSha]
    }, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    
    // Update the branch reference
    await axios.patch(`${repoApi}/git/refs/heads/${GITHUB_BRANCH}`, {
        sha: newCommit.sha
    }, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
}

// New endpoint for image uploads
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No image file provided' });
        }
        
        // Create timestamp-based filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileExtension = path.extname(file.originalname);
        const filename = `user images/${timestamp}${fileExtension}`;
        
        // Upload to GitHub
        await uploadToGitHub(
            file.buffer, 
            filename, 
            `User uploaded image: ${timestamp}`
        );
        
        res.json({ 
            success: true, 
            filename: filename,
            timestamp: timestamp 
        });
    } catch (err) {
        console.error('Image upload error:', err.response?.data || err);
        res.status(500).json({ error: 'Failed to upload image' });
    }
});

// Updated submit-order endpoint
app.post('/api/submit-order', upload.single('file'), async (req, res) => {
    try {
        const { name, email } = req.body;
        const file = req.file;
        if (!name || !email || !file) {
            return res.status(400).json({ error: 'Missing fields' });
        }
        
        // Generate GUID and timestamp
        const guid = uuidv4();
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `models/${timestamp}-${guid}.stl`;
        
        // Upload to GitHub
        await uploadToGitHub(
            file.buffer,
            filename,
            `Order from ${name} <${email}> at ${new Date().toISOString()} - GUID: ${guid}`
        );
        
        res.json({ 
            success: true, 
            guid: guid,
            filename: filename,
            timestamp: timestamp
        });
    } catch (err) {
        console.error('Order submission error:', err.response?.data || err);
        res.status(500).json({ error: 'Failed to submit order' });
    }
});

app.listen(3001, () => {
    console.log('Backend listening on port 3001');
}); 