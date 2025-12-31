import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configure CORS to allow both GitHub Pages and Render deployments
const corsOptions = {
    origin: [
        'https://obblie.github.io',      // GitHub Pages domain
        'https://img2pen.onrender.com',  // Render frontend domain
        'https://momenza.io',            // Custom domain
        'https://www.momenza.io',        // Custom domain with www
        'http://localhost:5173',         // For local development
        'http://localhost:3000'          // For local development
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

// Test OpenAI API key endpoint
app.get('/test-openai', async (req, res) => {
    try {
        if (!OPENAI_API_KEY) {
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        // Test with a simple API call to check if the key is valid
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API key test failed:', errorData);
            return res.status(response.status).json({ 
                error: 'OpenAI API key test failed',
                details: errorData
            });
        }

        const data = await response.json();
        const hasDALLE3 = data.data.some(model => model.id === 'dall-e-3');
        
        res.json({
            success: true,
            keyValid: true,
            hasDALLE3: hasDALLE3,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error testing OpenAI API key:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message
        });
    }
});

// Proxy endpoint for OpenAI image generation
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        console.log('Received request body:', JSON.stringify(req.body));
        console.log('Extracted prompt:', prompt);
        
        if (!prompt) {
            console.log('Error: No prompt provided');
            return res.status(400).json({ error: 'Prompt is required' });
        }
        
        if (!OPENAI_API_KEY) {
            console.log('Error: OpenAI API key not configured');
            return res.status(500).json({ error: 'OpenAI API key not configured' });
        }

        console.log('Generating image for prompt:', prompt);
        
        const requestBody = {
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            quality: "standard",
            response_format: "url"
        };
        
        console.log('OpenAI request body:', JSON.stringify(requestBody));
        
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        console.log('OpenAI response status:', response.status);
        console.log('OpenAI response headers:', JSON.stringify([...response.headers.entries()]));

        // Get response text first to debug
        const responseText = await response.text();
        console.log('OpenAI raw response:', responseText);
        
        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse OpenAI response as JSON:', parseError);
            console.error('Raw response was:', responseText);
            return res.status(500).json({ 
                error: 'Invalid response from OpenAI API',
                details: { rawResponse: responseText }
            });
        }

        if (!response.ok) {
            console.error('OpenAI API error details:', JSON.stringify(responseData, null, 2));
            return res.status(response.status).json({ 
                error: responseData.error?.message || 'Failed to generate image',
                details: responseData
            });
        }

        console.log('OpenAI response data:', JSON.stringify(responseData, null, 2));
        console.log('Image generated successfully');
        
        // Download the image from OpenAI and convert to base64
        const imageUrl = responseData.data[0].url;
        console.log('Downloading image from:', imageUrl);
        
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
            console.error('Failed to download image from OpenAI');
            return res.status(500).json({ error: 'Failed to download generated image' });
        }
        
        const imageBuffer = await imageResponse.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');
        
        console.log('Image downloaded and converted to base64, size:', base64Image.length);
        
        res.json({
            success: true,
            imageData: `data:image/png;base64,${base64Image}`
        });
        
    } catch (error) {
        console.error('Unexpected error generating image:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message
        });
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`OpenAI proxy server listening on port ${PORT}`);
    console.log(`OpenAI API Key: ${OPENAI_API_KEY ? 'Configured' : 'Missing'}`);
}); 