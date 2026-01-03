# Deployment Notes

## S3 Backend CORS Fix

The S3 backend CORS configuration has been updated to properly handle preflight requests from `https://momenza.io`.

**Action Required**: The S3 backend needs to be redeployed for the CORS fix to take effect.

### Changes Made:
- Added explicit OPTIONS handler for preflight requests
- Added PUT method to allowed methods (for S3 uploads)
- Enhanced CORS configuration with better preflight handling

### Backend to Redeploy:
- `backend/s3-backend.js` - S3 upload service on Render

## Shopify Cart API CORS Limitation

Shopify blocks cross-origin Cart API calls (`/cart/add.js`) from custom domains due to CORS policy. This is expected behavior.

**Current Solution**: 
- When Cart API fails (due to CORS), the code falls back to using the cart permalink
- The cart permalink (`/cart/VARIANT_ID:QUANTITY`) adds the item when visited
- User sees the cart page and can proceed to checkout from there

**Note**: This is the most reliable method when Cart API is blocked by CORS. The user will see the cart page briefly before proceeding to checkout.

