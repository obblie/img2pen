# Backend CORS Update for Custom Domain

## Issue
CORS errors when accessing backends from `https://momenza.io`:
- S3 backend: `img2pen-s3-backend.onrender.com`
- OpenAI backend: `img2pen-openai-backend.onrender.com`

## Fix Applied
Updated CORS configuration in both backend services to include:
- `https://momenza.io`
- `https://www.momenza.io`

## Files Updated
- `backend/s3-backend.js` - Added custom domain to CORS origins
- `backend/openai-proxy.js` - Added custom domain to CORS origins

## Next Steps - Deploy Backend Services

### Option 1: Auto-Deploy (If Enabled)
If auto-deploy is enabled on Render, the changes will deploy automatically when you push to the repository.

### Option 2: Manual Deploy
1. Go to Render dashboard: https://dashboard.render.com
2. Find your backend services:
   - `img2pen-s3-backend`
   - `img2pen-openai-backend`
3. Click "Manual Deploy" → "Deploy latest commit"
4. Wait for deployment to complete (usually 2-5 minutes)

### Option 3: Push to Trigger Deploy
If auto-deploy is enabled, just push these changes:
```bash
git add backend/s3-backend.js backend/openai-proxy.js
git commit -m "Add momenza.io to CORS allowed origins"
git push
```

## Verify Fix
After deployment, test:
1. **S3 Upload**: Try uploading an image - should work without CORS errors
2. **AI Generation**: Try generating an AI image - should work without CORS errors

## Expected Behavior
- ✅ No more CORS errors in browser console
- ✅ Image uploads work from `https://www.momenza.io`
- ✅ AI image generation works from `https://www.momenza.io`

## If Issues Persist
1. Check Render deployment logs for any errors
2. Verify the backend services are running
3. Check that the CORS configuration was applied correctly
4. Clear browser cache and try again

