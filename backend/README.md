# img2pen Backend Services

This backend provides two main services for the img2pen application:

## Services

### 1. S3 File Upload Service (`s3-backend.js`)
- Handles secure file uploads to AWS S3
- Provides signed URLs for direct uploads
- Manages STL file storage and image uploads

### 2. OpenAI Proxy Service (`openai-proxy.js`)
- Securely proxies OpenAI DALL-E API calls
- Keeps API keys server-side for security
- Handles image generation requests from the frontend

## Deployment Options

### Option 1: Deploy OpenAI Proxy to Render (Recommended)

For the OpenAI service, deploy to Render for easy setup:

1. **Service Configuration:**
   - Name: `img2pen-openai-backend`
   - Environment: Node
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

2. **Environment Variables:**
   ```
   OPENAI_API_KEY=your-openai-api-key-here
   PORT=10000
   ```

3. **Update Frontend:**
   Replace the URL in `src/main.js`:
   ```javascript
   const OPENAI_BACKEND_URL = 'https://your-render-service-url.onrender.com';
   ```

### Option 2: Run Both Services

To run the S3 service instead:
```bash
npm run s3
```

## Environment Variables

Create a `.env` file with:

```env
# For OpenAI Service
OPENAI_API_KEY=sk-proj-your-openai-api-key-here

# For S3 Service (if using)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-bucket-name
```

## Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- The OpenAI proxy keeps API keys server-side only
- S3 uploads use signed URLs for security

## Development

```bash
# Install dependencies
npm install

# Run OpenAI proxy (default)
npm start

# Run S3 service
npm run s3

# Development mode
npm run dev
```

## Health Check

Both services provide health check endpoints:
- OpenAI: `GET /health`
- S3: `GET /health`

## Cost Considerations

- **Render Free Tier**: 750 hours/month
- **OpenAI DALL-E 3**: ~$0.04 per image
- **AWS S3**: Pay per storage and requests

See `RENDER_SETUP.md` in the root directory for detailed deployment instructions. 