# SSL Certificate Fix - Step by Step Solution

## Current Problem
Render is alternating between "issued", "pending", and "not possible" - this indicates a DNS configuration conflict.

## Root Cause
Your DNS has a **mixed configuration**:
- Root domain (`momenza.io`) uses **A records** pointing to Render IPs
- `www.momenza.io` uses **CNAME** pointing to `img2pen.onrender.com`
- Traffic is going through Cloudflare CDN which may interfere with SSL provisioning

## Solution: Use CNAME for Root Domain (Recommended)

Render static sites work best with CNAME records. Here's how to fix it:

### Step 1: Check Your Render Service Name

1. Go to Render dashboard
2. Find your static site service
3. Note the exact service name (e.g., `img2pen-frontend` or `img2pen`)
4. The service URL will be: `[service-name].onrender.com`

### Step 2: Update DNS Records

**Option A: If Your DNS Provider Supports CNAME on Root Domain**

1. **Remove A Records**:
   - Delete the A records pointing to `216.24.57.251` and `216.24.57.7`

2. **Add CNAME Record**:
   - Type: `CNAME`
   - Name: `@` (or `momenza.io` or leave blank - depends on your DNS provider)
   - Value: `img2pen.onrender.com` (or your actual Render service URL)
   - TTL: 3600

**Option B: If CNAME on Root Domain is NOT Supported**

Many DNS providers (like GoDaddy, Namecheap) don't allow CNAME on root domain. In this case:

1. **Keep A Records** (they're already correct)
2. **Use www Subdomain Instead**:
   - In Render dashboard, remove `momenza.io`
   - Add `www.momenza.io` as custom domain
   - Configure DNS: CNAME `www` → `img2pen.onrender.com`
   - Set up redirect: `momenza.io` → `www.momenza.io`

### Step 3: Remove Cloudflare (If Applicable)

If your domain is using Cloudflare:

1. **Temporary Solution**: 
   - Go to Cloudflare dashboard
   - Set DNS to "DNS Only" (gray cloud) instead of "Proxied" (orange cloud)
   - This disables Cloudflare proxy which can interfere with SSL

2. **Or Remove from Cloudflare**:
   - Remove the domain from Cloudflare
   - Point DNS directly to your DNS provider

### Step 4: Clean Up in Render

1. **Remove the domain** from Render custom domains
2. **Wait 5 minutes**
3. **Re-add the domain**:
   - If using root domain: Add `momenza.io`
   - If using www: Add `www.momenza.io`
4. **Wait up to 1 hour** for SSL provisioning

### Step 5: Verify DNS is Clean

After making changes, verify:

```bash
# Should show CNAME or A records pointing to Render
dig momenza.io +short

# Should NOT show Cloudflare IPs (104.x.x.x or 172.x.x.x ranges)
# Should show Render IPs (216.24.57.x) or CNAME to onrender.com
```

## Alternative: Contact Render Support

If the above doesn't work, contact Render support with:

**Subject**: SSL Certificate Not Provisioning - DNS Configuration Issue

**Message**:
```
Service: [your-service-name]
Domain: momenza.io
Issue: SSL certificate alternates between "issued", "pending", and "not possible"

Current DNS:
- Root domain: A records pointing to 216.24.57.251, 216.24.57.7
- www: CNAME to img2pen.onrender.com
- CAA: 0 issue "letsencrypt.org" ✓

Error: ERR_SSL_VERSION_OR_CIPHER_MISMATCH
HTTP works (301 redirect to HTTPS), but HTTPS fails with SSL handshake error.

Please advise on correct DNS configuration for static site SSL provisioning.
```

## Quick Test: Use www Subdomain

As a quick test to verify SSL works:

1. **In Render**: Add `www.momenza.io` (not root domain)
2. **In DNS**: Ensure CNAME `www` → `img2pen.onrender.com`
3. **Test**: Visit `https://www.momenza.io`
4. **If this works**: The issue is specifically with root domain CNAME/A record configuration

If `www.momenza.io` works with SSL, you can:
- Use www as your primary domain
- Set up redirect from root to www
- Or work with Render support to fix root domain SSL

## Most Likely Fix

Based on your setup, try this:

1. **Remove domain from Render** (wait 5 min)
2. **In DNS**: Keep A records as they are (they're correct)
3. **Remove Cloudflare proxy** if enabled (set to DNS only)
4. **Re-add `momenza.io` in Render**
5. **Wait 1 hour** for SSL provisioning

The alternating status suggests Render is trying to provision but hitting a conflict. Cleaning up the DNS configuration (removing Cloudflare proxy if present) usually resolves this.

