# SSL Certificate Issue - Immediate Fix Steps

## Current Status
✅ DNS is pointing to Render (IPs: 216.24.57.251, 216.24.57.7)  
✅ CAA records are correct (allows Let's Encrypt)  
❌ SSL certificate is NOT being served

## The Problem
Your domain is pointing to Render, but Render isn't serving an SSL certificate. This usually means:
1. The domain isn't properly configured in Render's dashboard
2. Render is trying to serve HTTP but your browser expects HTTPS
3. The SSL certificate provisioning failed silently

## Immediate Actions Required

### Step 1: Check Your Render Dashboard

1. Go to https://dashboard.render.com
2. Find your static site service (likely named `img2pen-frontend` or similar)
3. Go to **Settings** → **Custom Domains**
4. Check if `momenza.io` is listed there

**If the domain is NOT listed:**
- Click "Add Custom Domain"
- Enter `momenza.io`
- Render will show you the DNS records needed
- **IMPORTANT**: For static sites on Render, you should use **CNAME**, not A records

### Step 2: Switch from A Records to CNAME (Recommended for Static Sites)

Render static sites work better with CNAME records. Here's what to do:

1. **In your DNS provider** (GoDaddy, Namecheap, Cloudflare, etc.):
   - **Remove** the A records pointing to `216.24.57.251` and `216.24.57.7`
   - **Add** a CNAME record:
     - Type: `CNAME`
     - Name: `@` (or `momenza.io` or leave blank for root)
     - Value: `img2pen-frontend.onrender.com` (or whatever your Render service URL is)
     - TTL: 3600

   **Note**: Some DNS providers don't allow CNAME on root domain (@). If yours doesn't:
   - Use a subdomain like `www.momenza.io` with CNAME
   - Or keep A records but ensure the domain is properly added in Render

2. **Wait 15-30 minutes** for DNS to propagate

3. **In Render Dashboard**:
   - Remove `momenza.io` from custom domains
   - Re-add `momenza.io`
   - Wait 5-15 minutes for SSL certificate provisioning

### Step 3: Verify Your Render Service URL Works

First, test if your Render service URL works:
- Go to: `https://img2pen-frontend.onrender.com` (or your actual Render URL)
- If this works with HTTPS, the issue is only with the custom domain
- If this doesn't work, there's a problem with your Render service itself

### Step 4: Alternative - Use www Subdomain

If CNAME on root domain isn't supported by your DNS provider:

1. **Add www subdomain in Render**:
   - In Render dashboard → Custom Domains
   - Add `www.momenza.io`

2. **Configure DNS**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `img2pen-frontend.onrender.com`

3. **Set up redirect** (optional):
   - Configure `momenza.io` to redirect to `www.momenza.io`
   - Or use Render's redirect feature

## Why This Happens

Render static sites are served through a CDN. For proper SSL certificate provisioning:
- The domain must be added in Render's dashboard
- DNS must point to Render (CNAME preferred for static sites)
- Render needs to verify domain ownership via DNS
- SSL certificate provisioning can take 5-15 minutes after DNS is correct

## Quick Diagnostic Commands

Run these to check current status:

```bash
# Check DNS
dig momenza.io +short

# Check CAA
dig momenza.io CAA +short

# Test HTTP (should work)
curl -I http://momenza.io

# Test HTTPS (currently failing)
curl -I https://momenza.io
```

## If Still Not Working After 24 Hours

1. **Contact Render Support**:
   - Go to Render dashboard
   - Click "Support" or "Help"
   - Explain: "Custom domain momenza.io is added but SSL certificate not provisioning"
   - Include: Your service name, domain, and that DNS/CAA are correct

2. **Check Render Status**:
   - Visit https://status.render.com
   - Check for any ongoing SSL/certificate issues

3. **Temporary Workaround**:
   - Use the Render URL directly: `https://img2pen-frontend.onrender.com`
   - Or set up a redirect from your domain to the Render URL

## Most Likely Solution

Based on your setup, you probably need to:
1. **Remove A records** from DNS
2. **Add CNAME record** pointing to your Render service URL
3. **Re-add domain in Render** dashboard
4. **Wait 15-30 minutes** for DNS + SSL provisioning

The fact that you're getting an SSL handshake failure (not a DNS error) means the domain IS reaching Render, but Render isn't serving a certificate. This usually means the domain isn't properly registered in Render's system for SSL provisioning.

