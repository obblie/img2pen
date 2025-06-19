# Render Frontend Deployment Guide

This guide will help you deploy your img2pen frontend to Render as a static site.

## Why Move to Render?

- **Custom Domain**: Easy custom domain setup
- **Automatic Builds**: Deploy from GitHub automatically
- **Better Performance**: Global CDN and optimized delivery
- **No Subpath**: Your app runs on the root domain (no `/img2pen/` path)
- **Free Tier**: Generous free tier for static sites
- **HTTPS**: Automatic SSL certificates

## Step 1: Prepare Your Repository

Your repository is already set up with the necessary configuration files:
- `render.yaml` - Render service configuration
- `deploy-render.sh` - Render-specific deployment script
- Updated `vite.config.js` - Root path configuration

## Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

## Step 3: Create Static Site Service

1. In your Render dashboard, click "New +"
2. Select "Static Site"
3. Connect your GitHub repository (`img2pen`)
4. Configure the service:

### Service Configuration:
- **Name**: `img2pen-frontend`
- **Branch**: `main`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

### Advanced Settings:
- **Auto-Deploy**: Yes (recommended)
- **Pull Request Previews**: Yes (optional)

## Step 4: Configure Build Settings

Render will automatically detect your Node.js project and use these settings:
- **Node Version**: 18 (specified in render.yaml)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

## Step 5: Deploy

1. Click "Create Static Site"
2. Render will automatically:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy the `dist` folder
   - Provide you with a URL like: `https://img2pen-frontend.onrender.com`

## Step 6: Custom Domain (Optional)

1. In your Render service settings, go to "Settings" → "Custom Domains"
2. Add your custom domain (e.g., `yourdomain.com`)
3. Update your domain's DNS settings as instructed by Render
4. Render will automatically provision SSL certificates

## Step 7: Update DNS and Redirects

If you want to redirect from your old GitHub Pages site:

1. **GitHub Pages**: You can add a redirect in your `docs/index.html`
2. **Domain**: Update your domain to point to Render instead of GitHub Pages

## Step 8: Test Your Deployment

1. Visit your new Render URL
2. Test all functionality:
   - Image upload and cropping
   - 3D model generation
   - Metal type selection
   - Text engraving
   - AI image generation (if backend is set up)
   - Export features

## Deployment Workflow

### For Future Updates:

1. **Automatic**: Just push to main branch
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
   Render will automatically rebuild and deploy.

2. **Using the script**: 
   ```bash
   npm run deploy:render
   ```
   This will commit changes and push, triggering auto-deployment.

## Monitoring and Logs

- **Build Logs**: View real-time build logs in Render dashboard
- **Deploy History**: See all previous deployments
- **Performance**: Monitor site performance and usage

## Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check build logs in Render dashboard
   - Verify `package.json` dependencies
   - Ensure Node version compatibility

2. **Assets Not Loading**:
   - Check that `base: '/'` is set in `vite.config.js`
   - Verify build output in `dist` folder

3. **404 Errors on Refresh**:
   - The `render.yaml` includes SPA routing configuration
   - All routes redirect to `index.html`

4. **Old GitHub Pages Still Active**:
   - Disable GitHub Pages in repository settings
   - Or add redirect to new Render URL

## Comparison: GitHub Pages vs Render

| Feature | GitHub Pages | Render |
|---------|-------------|---------|
| **Cost** | Free | Free tier available |
| **Custom Domain** | Yes | Yes (easier setup) |
| **Build Process** | Manual/Actions | Automatic |
| **Performance** | Good | Better (global CDN) |
| **Subpath** | `/repo-name/` | Root domain `/` |
| **SSL** | Yes | Yes (automatic) |
| **Deploy Speed** | Medium | Fast |

## Benefits of the Migration

✅ **Cleaner URLs**: No more `/img2pen/` in the path  
✅ **Faster Builds**: Automatic builds on every push  
✅ **Better Performance**: Global CDN delivery  
✅ **Professional Setup**: Production-ready hosting  
✅ **Easy Scaling**: Can upgrade to paid plans if needed  

## Next Steps

Once deployed on Render:
1. Update any bookmarks or links to the new URL
2. Consider setting up a custom domain
3. Monitor performance and usage
4. Enjoy the improved deployment workflow!

Your img2pen app will now have professional-grade hosting with automatic deployments! 🚀 