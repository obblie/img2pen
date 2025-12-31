# Render Custom Domain DNS Setup Guide

This guide will help you fix DNS configuration issues preventing SSL certificate issuance on Render.

## Common Error
"We are unable to issue a certificate for this site. Please see custom domain documentation and verify your DNS records are correct."

## Step 1: Get Your Render DNS Target

1. Go to your Render dashboard: https://dashboard.render.com
2. Select your static site service (`img2pen-frontend`)
3. Go to **Settings** → **Custom Domains**
4. Add your domain `momenza.io` (if not already added)
5. Render will show you the DNS records you need to configure

### For Static Sites on Render:
- **Type**: CNAME
- **Name**: `@` or `momenza.io` (or leave blank for root domain)
- **Value**: Your Render service URL (e.g., `img2pen-frontend.onrender.com`)

**OR** if CNAME is not supported for root domain:
- **Type**: A Record
- **Name**: `@` or `momenza.io`
- **Value**: Render's IP addresses (check Render docs for current IPs)

## Step 2: Configure DNS at Your Domain Registrar

### Option A: Using CNAME (Recommended for subdomains)

If you're using a subdomain (e.g., `www.momenza.io`):
```
Type: CNAME
Name: www
Value: img2pen-frontend.onrender.com
TTL: 3600 (or default)
```

### Option B: Using A Records (Required for root domain)

For the root domain `momenza.io`, you may need A records. Check Render's current documentation for their IP addresses, or use:
```
Type: A
Name: @ (or momenza.io)
Value: [Render's IP address - check Render dashboard]
TTL: 3600
```

**Note**: Render's IP addresses may change. Check their documentation for the most current values.

## Step 3: Fix CAA Records (Critical for SSL)

CAA (Certificate Authority Authorization) records can block SSL certificate issuance. You need to allow Let's Encrypt to issue certificates.

### Add/Update CAA Records:

Add these CAA records at your DNS provider:

```
Type: CAA
Name: @ (or momenza.io)
Value: 0 issue "letsencrypt.org"
TTL: 3600
```

Or if you want to allow multiple CAs:
```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
Value: 0 issuewild "letsencrypt.org"
```

### How to Add CAA Records:

**GoDaddy:**
1. DNS Management → Add Record
2. Type: CAA
3. Name: @
4. Value: `0 issue "letsencrypt.org"`

**Cloudflare:**
1. DNS → Add record
2. Type: CAA
3. Name: @
4. Content: `0 issue "letsencrypt.org"`

**Namecheap:**
1. Advanced DNS → Add New Record
2. Type: CAA Record
3. Host: @
4. Value: `0 issue "letsencrypt.org"`

**Other Providers:**
- Look for "CAA Record" or "Certificate Authority Authorization" in DNS settings
- Add record with value: `0 issue "letsencrypt.org"`

## Step 4: Remove Conflicting DNS Records

Make sure you don't have conflicting records:

1. **Remove old A/CNAME records** pointing to other services (GitHub Pages, old hosting, etc.)
2. **Remove any conflicting CAA records** that might block Let's Encrypt
3. **Check for DNSSEC** - if enabled and misconfigured, it can cause issues

## Step 5: Verify DNS Configuration

### Check DNS Propagation:

1. Use https://dnschecker.org to verify your DNS records are propagated globally
2. Enter your domain: `momenza.io`
3. Check that CNAME/A records point to Render
4. Verify CAA records are present

### Test DNS Records:

```bash
# Check CNAME/A records
dig momenza.io
nslookup momenza.io

# Check CAA records
dig momenza.io CAA
```

Expected output should show:
- CNAME pointing to your Render service, OR
- A records pointing to Render's IPs
- CAA record allowing Let's Encrypt

## Step 6: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to fully propagate
- CAA records may take longer (up to 24-48 hours)
- Be patient and check periodically

## Step 7: Retry SSL Certificate in Render

After DNS is configured correctly:

1. Go to Render dashboard → Your service → Settings → Custom Domains
2. If domain is already added, try **removing and re-adding** it
3. Wait 5-15 minutes for Render to attempt certificate issuance
4. Check the status - it should show "Active" or "Provisioned"

## Step 8: Troubleshooting Checklist

✅ **DNS Records Point to Render**
- CNAME or A records correctly configured
- No conflicting records pointing elsewhere

✅ **CAA Records Allow Let's Encrypt**
- CAA record exists: `0 issue "letsencrypt.org"`
- No CAA records blocking certificate issuance

✅ **DNS Fully Propagated**
- Checked with dnschecker.org
- All DNS servers show correct records

✅ **No DNSSEC Conflicts**
- DNSSEC is properly configured OR disabled
- No validation errors

✅ **Domain Not Blocked**
- Domain is not on any blacklists
- Domain registrar allows SSL certificates

## Common Issues and Solutions

### Issue: "DNS records not found"
**Solution**: Wait longer for DNS propagation, or verify records are saved correctly at your DNS provider

### Issue: "CAA record blocking certificate"
**Solution**: Add CAA record allowing Let's Encrypt: `0 issue "letsencrypt.org"`

### Issue: "Domain pointing to wrong service"
**Solution**: Remove old DNS records pointing to GitHub Pages or other services

### Issue: "DNSSEC validation failed"
**Solution**: Temporarily disable DNSSEC or ensure it's properly configured

## Still Having Issues?

1. **Contact Your Domain Registrar**: They can help verify DNS configuration
2. **Check Render Status**: https://status.render.com - check for any service issues
3. **Render Support**: Contact Render support with your domain and service details
4. **DNS Provider Support**: Contact your DNS provider if CAA records aren't working

## Alternative: Use Render's Subdomain

If you continue having issues with the root domain, consider:
1. Using `www.momenza.io` instead (easier CNAME setup)
2. Setting up a redirect from `momenza.io` → `www.momenza.io`

## Quick Reference: DNS Records Needed

```
# Root domain (momenza.io) - Option 1: CNAME (if supported)
Type: CNAME
Name: @
Value: img2pen-frontend.onrender.com

# Root domain (momenza.io) - Option 2: A Records (if CNAME not supported)
Type: A
Name: @
Value: [Render's current IP - check dashboard]

# CAA Record (REQUIRED for SSL)
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
```

## Verification Commands

After configuring DNS, verify with:

```bash
# Check A/CNAME records
dig momenza.io +short

# Check CAA records
dig momenza.io CAA +short

# Full DNS lookup
dig momenza.io ANY
```

Expected CAA output:
```
0 issue "letsencrypt.org"
```

Once DNS is correct and propagated, Render should be able to issue your SSL certificate automatically! 🔒

