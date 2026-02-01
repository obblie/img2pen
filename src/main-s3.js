// S3 Upload Functions
const S3_BACKEND_URL = 'https://img2pen-s3-backend.onrender.com'; // Update this to your S3 backend URL

async function submitOrderWithS3(name, email, stlString) {
    try {
        showNotification('🔄 Preparing upload...', 'info');
        
        // Step 1: Get signed URL from backend
        console.log('📋 Requesting signed URL for STL upload...');
        const urlResponse = await fetch(`${S3_BACKEND_URL}/api/get-upload-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                fileType: 'application/octet-stream'
            })
        });

        if (!urlResponse.ok) {
            const error = await urlResponse.json();
            throw new Error(error.error || 'Failed to get upload URL');
        }

        const urlData = await urlResponse.json();
        console.log('✅ Signed URL received:', urlData.filename);
        
        showNotification('📤 Uploading STL file to S3...', 'info');

        // Step 2: Upload directly to S3 using signed URL
        const stlBlob = new Blob([stlString], { type: 'application/octet-stream' });
        console.log(`📊 STL file size: ${(stlBlob.size / (1024 * 1024)).toFixed(2)}MB`);

        const uploadResponse = await fetch(urlData.uploadUrl, {
            method: 'PUT',
            body: stlBlob,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        });

        if (!uploadResponse.ok) {
            throw new Error(`S3 upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`);
        }

        console.log('✅ STL uploaded to S3 successfully');
        
        showNotification('✅ Confirming upload...', 'info');

        // Step 3: Confirm upload with backend (optional)
        const confirmResponse = await fetch(`${S3_BACKEND_URL}/api/confirm-upload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename: urlData.filename,
                guid: urlData.guid
            })
        });

        if (confirmResponse.ok) {
            const confirmData = await confirmResponse.json();
            console.log('✅ Upload confirmed:', confirmData);
            
            showNotification(
                `<h3>🎉 Model uploaded successfully to S3!</h3>
                <p>Your STL file has been securely uploaded to Amazon S3.</p>
                <p><strong>Confirmation Number:</strong> <code style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:3px;">${urlData.guid}</code></p>
                <p><strong>File Size:</strong> ${confirmData.fileSize}</p>
                <p><strong>Filename:</strong> ${urlData.filename}</p>
                <p>Please save this confirmation number for your records.</p>`,
                'success'
            );
        } else {
            // Upload succeeded but confirmation failed - still show success
            console.warn('Upload succeeded but confirmation failed');
            showNotification(
                `<h3>🎉 Model uploaded successfully!</h3>
                <p>Your STL file has been uploaded to S3.</p>
                <p><strong>Confirmation Number:</strong> <code style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:3px;">${urlData.guid}</code></p>
                <p>Please save this confirmation number for your records.</p>`,
                'success'
            );
        }

        return {
            success: true,
            guid: urlData.guid,
            filename: urlData.filename
        };

    } catch (error) {
        console.error('❌ S3 upload error:', error);
        showNotification(`Failed to upload: ${error.message}`, 'error');
        throw error;
    }
}

async function uploadImageToS3(file) {
    try {
        console.log('📋 Requesting signed URL for image upload...');
        
        // Step 1: Get signed URL for image
        const urlResponse = await fetch(`${S3_BACKEND_URL}/api/get-image-upload-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileType: file.type
            })
        });

        if (!urlResponse.ok) {
            const error = await urlResponse.json();
            throw new Error(error.error || 'Failed to get image upload URL');
        }

        const urlData = await urlResponse.json();
        console.log('✅ Image signed URL received:', urlData.filename);

        // Step 2: Upload image directly to S3
        const uploadResponse = await fetch(urlData.uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type
            }
        });

        if (!uploadResponse.ok) {
            throw new Error(`S3 image upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`);
        }

        console.log('✅ Image uploaded to S3 successfully');
        
        return {
            success: true,
            filename: urlData.filename,
            guid: urlData.guid
        };

    } catch (error) {
        console.error('❌ S3 image upload error:', error);
        showNotification('Failed to upload image to S3', 'error');
        throw error;
    }
}

// Updated submit order button handler for S3
function setupS3SubmitOrder(viewer) {
    const submitOrderBtn = document.getElementById('export-stl');
    if (submitOrderBtn) {
        submitOrderBtn.textContent = 'Submit Order';
        submitOrderBtn.removeEventListener('click', viewer.exportSTL);
        submitOrderBtn.addEventListener('click', async () => {
            // Prompt for user info
            const name = prompt('Enter your name:');
            if (!name) return showNotification('Name is required.', 'error');
            const email = prompt('Enter your email:');
            if (!email) return showNotification('Email is required.', 'error');
            
            // Generate STL (jumpring excluded)
            const exporter = new STLExporter();
            const group = new THREE.Group();
            if (viewer.heightfield) group.add(viewer.heightfield.clone());
            // Jumpring excluded from export
            // if (viewer.jumpring) group.add(viewer.jumpring.clone());
            const stlString = exporter.parse(group);
            
            // Upload to S3
            await submitOrderWithS3(name, email, stlString);
        });
    }
}

// Export functions for use in main.js
window.submitOrderWithS3 = submitOrderWithS3;
window.uploadImageToS3 = uploadImageToS3;
window.setupS3SubmitOrder = setupS3SubmitOrder; 