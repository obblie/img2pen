# Render Deployment Setup for OpenAI Backend

This guide will help you deploy the OpenAI proxy backend to Render, which will securely handle your OpenAI API key and provide a secure endpoint for image generation.

## Why Use Render?

- **Security**: Your OpenAI API key stays on the server, never exposed in frontend code
- **Free Tier**: Generous free tier for small projects
- **Auto-Deploy**: Automatic deployments from GitHub
- **HTTPS**: Automatic SSL certificates
- **Environment Variables**: Secure environment variable management

## Step 1: Prepare Your Repository

Make sure your backend code is committed to your GitHub repository:

```bash
git add .
git commit -m "Add OpenAI backend for Render deployment"
git push origin main
```

## Step 2: Create a Render Account

1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

## Step 3: Create a New Web Service

1. Click "New +" in your Render dashboard
2. Select "Web Service"
3. Connect your GitHub repository (`img2pen`)
4. Configure the service:

### Service Configuration:
- **Name**: `img2pen-openai-backend`
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Advanced Settings:
- **Auto-Deploy**: Yes (recommended)
- **Instance Type**: Free (for development)

## Step 4: Configure Environment Variables

In your Render service settings, add these environment variables:

### Required Variables:
```
OPENAI_API_KEY=sk-proj-your-actual-openai-api-key-here
PORT=10000
```

**Important**: 
- Get your OpenAI API key from: https://platform.openai.com/api-keys
- Render automatically sets PORT to 10000, but we include it for clarity
- Never commit your actual API key to GitHub!

## Step 5: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your service
   - Provide you with a URL like: `https://img2pen-openai-backend.onrender.com`

## Step 6: Update Frontend Configuration

Update your frontend to use the Render backend URL:

In `src/main.js`, find the `BACKEND_URL` constant and update it:

```javascript
// Update this line with your actual Render service URL
const BACKEND_URL = 'https://img2pen-openai-backend.onrender.com';
```

## Step 7: Test the Integration

1. Build and deploy your frontend:
   ```bash
   npm run build
   cp -r dist/* docs/
   git add .
   git commit -m "Update backend URL for Render deployment"
   git push origin main
   ```

2. Test the image generation feature in your app
3. Check the Render logs if there are any issues

## Monitoring and Logs

- **Logs**: View real-time logs in your Render dashboard
- **Metrics**: Monitor CPU, memory, and response times
- **Health Check**: Your service includes a `/health` endpoint

## Troubleshooting

### Common Issues:

1. **Service won't start**:
   - Check that `package.json` has correct start script
   - Verify all dependencies are listed
   - Check Render logs for specific errors

2. **API key not working**:
   - Verify the environment variable is set correctly
   - Check that your OpenAI account has credits
   - Test the API key directly with OpenAI's API

3. **CORS errors**:
   - The backend includes CORS middleware
   - Make sure your frontend URL is correct

4. **Timeout errors**:
   - Free tier services sleep after 15 minutes of inactivity
   - First request after sleep may be slow (cold start)
   - Consider upgrading to paid tier for production

### Health Check

Test your backend directly:
```bash
curl https://your-render-url.onrender.com/health
```

Should return:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "hasOpenAIKey": true
}
```

## Cost Considerations

- **Free Tier**: 750 hours/month (enough for development)
- **Paid Tier**: $7/month for always-on service
- **OpenAI Costs**: DALL-E 3 costs ~$0.04 per image

## Security Best Practices

✅ **Do**:
- Keep API keys in Render environment variables
- Use HTTPS endpoints only
- Monitor usage and costs
- Set up billing alerts in OpenAI dashboard

❌ **Don't**:
- Commit API keys to GitHub
- Use HTTP endpoints
- Share your API keys
- Ignore usage monitoring

## Next Steps

Once deployed, your app will have:
- Secure AI image generation
- No API keys exposed in frontend
- Automatic scaling
- Professional deployment setup

Your users can now generate images by typing prompts, and the images will be processed through the same cropping and pendant creation workflow as uploaded images! 