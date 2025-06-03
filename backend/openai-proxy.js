import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configure CORS to allow GitHub Pages
const corsOptions = {
    origin: [
        'https://obblie.github.io',
        'http://localhost:5173', // For local development
        'http://localhost:3000'  // For local development
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
};

app.use(cors(corsOptions));
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path} from ${req.get('origin') || 'unknown'}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        hasOpenAIKey: !!OPENAI_API_KEY
    });
});

// Proxy endpoint for OpenAI image generation
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        
        if (!OPENAI_API_KEY) {
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        console.log('Generating image for prompt:', prompt);
        
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: "1024x1024",
                quality: "standard",
                response_format: "url"
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API error:', errorData);
            return res.status(response.status).json({ 
                error: errorData.error?.message || 'Failed to generate image' 
            });
        }

        const data = await response.json();
        console.log('Image generated successfully');
        
        res.json({
            success: true,
            imageUrl: data.data[0].url
        });
        
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`OpenAI proxy server listening on port ${PORT}`);
    console.log(`OpenAI API Key: ${OPENAI_API_KEY ? 'Configured' : 'Missing'}`);
}); 