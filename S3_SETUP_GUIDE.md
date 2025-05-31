# 🚀 Amazon S3 Setup Guide for img2pen

This guide will help you switch from GitHub storage to Amazon S3 with signed URLs for handling large STL files.

## 🎯 Benefits of S3 Implementation

✅ **Direct uploads to S3** - No bandwidth usage on your Render backend  
✅ **Handles large files** - No 100MB GitHub limit  
✅ **Scalable** - Handles any file size  
✅ **Secure** - Pre-signed URLs with expiration  
✅ **Fast** - Direct upload to AWS infrastructure  

## 📋 Prerequisites

1. AWS Account
2. Render account (for backend hosting)
3. Basic knowledge of environment variables

## 🔧 Step 1: Create AWS S3 Bucket

### 1.1 Create S3 Bucket
```bash
# Using AWS CLI (optional)
aws s3 mb s3://your-img2pen-bucket --region us-east-1
```

Or use AWS Console:
1. Go to [AWS S3 Console](https://console.aws.amazon.com/s3/)
2. Click "Create bucket"
3. Bucket name: `your-img2pen-bucket` (must be globally unique)
4. Region: `us-east-1` (or your preferred region)
5. **Block Public Access**: Keep enabled (we'll use signed URLs)
6. Click "Create bucket"

### 1.2 Configure CORS (Important!)
Add this CORS configuration to your bucket:

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["PUT", "POST", "GET"],
        "AllowedOrigins": [
            "https://obblie.github.io",
            "http://localhost:3000",
            "http://127.0.0.1:3000"
        ],
        "ExposeHeaders": ["ETag"]
    }
]
```

## 🔑 Step 2: Create AWS IAM User

### 2.1 Create IAM User
1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click "Users" → "Create user"
3. Username: `img2pen-s3-user`
4. Select "Programmatic access"

### 2.2 Create IAM Policy
Create a custom policy with these permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::your-img2pen-bucket",
                "arn:aws:s3:::your-img2pen-bucket/*"
            ]
        }
    ]
}
```

### 2.3 Attach Policy to User
1. Attach the policy to your `img2pen-s3-user`
2. **Save the Access Key ID and Secret Access Key** - you'll need these!

## 🚀 Step 3: Deploy S3 Backend to Render

### 3.1 Create New Render Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Service name: `img2pen-s3-backend`
5. Build command: `cd backend && npm install`
6. Start command: `cd backend && node s3-backend.js`

### 3.2 Set Environment Variables in Render
Add these environment variables in Render:

```
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-2
S3_BUCKET_NAME=your-img2pen-bucket
PORT=10000
NODE_ENV=production
```

## 📁 Step 4: Update Your Codebase

### 4.1 Backend Files
Copy these files to your repository:

```
backend/
├── s3-backend.js          # New S3 backend
├── package-s3.json        # Dependencies for S3
├── test-s3.js            # Test script
└── env-s3-example.txt    # Environment template
```

### 4.2 Frontend Files
```
src/
└── main-s3.js            # S3 upload functions
```

### 4.3 Install Dependencies
```bash
cd backend
cp package-s3.json package.json
npm install
```

## 🔄 Step 5: Update Frontend Integration

### 5.1 Include S3 Script
Add to your HTML:
```html
<script src="src/main-s3.js"></script>
```

### 5.2 Update main.js
Replace the submit order setup in your `HeightfieldViewer` class:

```javascript
// In setupUIControls() method, replace the submit order section:
setupS3SubmitOrder(this);
```

### 5.3 Update Backend URL
In `src/main-s3.js`, update the backend URL:
```javascript
const S3_BACKEND_URL = 'https://your-s3-backend.onrender.com';
```

## 🧪 Step 6: Test the Implementation

### 6.1 Test Backend Locally
```bash
cd backend
cp env-s3-example.txt .env
# Edit .env with your AWS credentials
node s3-backend.js
```

### 6.2 Run Test Script
```bash
node test-s3.js
```

### 6.3 Test Production
```bash
S3_BACKEND_URL=https://your-s3-backend.onrender.com node test-s3.js
```

## 📊 Step 7: Monitor and Verify

### 7.1 Check S3 Bucket
- Files should appear in `models/` folder
- Check file sizes and metadata

### 7.2 Check Render Logs
- Monitor backend logs for errors
- Verify signed URL generation

### 7.3 Test Large Files
- Upload STL files > 100MB
- Verify upload speed and success

## 🔧 Troubleshooting

### Common Issues:

**CORS Errors:**
- Verify CORS configuration in S3 bucket
- Check allowed origins include your domain

**Access Denied:**
- Verify IAM policy permissions
- Check AWS credentials in environment variables

**Signed URL Expired:**
- URLs expire in 15 minutes for STL, 5 minutes for images
- Generate new URL if expired

**Upload Fails:**
- Check file size limits
- Verify Content-Type headers

## 💰 Cost Estimation

**S3 Costs (us-east-1):**
- Storage: $0.023 per GB/month
- PUT requests: $0.0005 per 1,000 requests
- GET requests: $0.0004 per 1,000 requests

**Example for 1000 uploads/month (18MB each):**
- Storage: ~18GB × $0.023 = $0.41/month
- Requests: ~1000 × $0.0005 = $0.50/month
- **Total: ~$1/month**

## 🎉 Benefits Achieved

✅ **No file size limits** - Upload 500MB+ files  
✅ **Fast uploads** - Direct to S3, no backend bottleneck  
✅ **Scalable** - Handles thousands of uploads  
✅ **Secure** - Pre-signed URLs with expiration  
✅ **Cost effective** - Pay only for what you use  
✅ **Reliable** - AWS 99.999999999% durability  

## 📞 Support

If you encounter issues:
1. Check Render logs for backend errors
2. Verify AWS credentials and permissions
3. Test with the provided test script
4. Check S3 bucket CORS configuration

Your STL files will now be stored securely in S3 with no size limitations! 