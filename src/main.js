import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { BoxGeometry, MeshBasicMaterial, Mesh, Scene as ThreeScene, PerspectiveCamera, WebGLRenderer, Raycaster, Vector2 } from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Constants for physical dimensions
const MAX_DEPTH = 0.8; // mm (reduced from 1.3mm)
const FIXED_WIDTH = 25; // mm
const RESOLUTION = 1000; // Number of segments in X direction (restored to original resolution for 18MB files)

// Metal material properties
const METAL_MATERIALS = {
    'sterling-silver': {
        color: 0xE8E8E8,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 1.0
    },
    'gold-18k': {
        color: 0xFFD700,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 1.0
    }
};

// Finish properties
const FINISH_PROPERTIES = {
    'polished': { roughness: 0.1 },
    'brushed': { roughness: 0.3 },
    'matte': { roughness: 0.7 }
};

let cropper = null;

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const content = document.getElementById('notification-content');
    const closeBtn = document.getElementById('notification-close');
    
    content.innerHTML = message;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#4CAF50';
            break;
        case 'error':
            notification.style.background = '#f44336';
            break;
        case 'info':
            notification.style.background = '#2196F3';
            break;
        default:
            notification.style.background = '#4CAF50';
    }
    
    notification.style.display = 'block';
    
    // Auto-hide after different times based on type
    let autoHideTime;
    switch(type) {
        case 'success':
            autoHideTime = 10000;
            break;
        case 'error':
            autoHideTime = 8000;
            break;
        case 'info':
            autoHideTime = 3000; // Shorter for info messages
            break;
        default:
            autoHideTime = 5000;
    }
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, autoHideTime);
    
    // Close button functionality
    closeBtn.onclick = () => {
        notification.style.display = 'none';
    };
}

// Configuration
const BACKEND_URL = 'https://img2pen-s3-backend.onrender.com'; // Updated to S3 backend

// Function to upload image to S3 (updated from GitHub)
async function uploadImageToGitHub(file) {
    try {
        console.log('📋 Requesting signed URL for image upload...');
        
        // Step 1: Get signed URL for image
        const urlResponse = await fetch(`${BACKEND_URL}/api/get-image-upload-url`, {
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
        console.error('Error uploading image:', error);
        showNotification('Failed to upload image to S3', 'error');
        return null;
    }
}

// S3 Upload Functions
async function submitOrderWithS3(name, email, stlString) {
    try {
        // Step 1: Get signed URL from backend
        console.log('📋 Requesting signed URL for STL upload...');
        const urlResponse = await fetch(`${BACKEND_URL}/api/get-upload-url`, {
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

        // Step 3: Confirm upload with backend (optional)
        const confirmResponse = await fetch(`${BACKEND_URL}/api/confirm-upload`, {
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
        const urlResponse = await fetch(`${BACKEND_URL}/api/get-image-upload-url`, {
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
        throw error;
    }
}

// Helper to add a circle overlay to the cropper for circular crops
function addCircleOverlay(cropper) {
    let observer = null;
    function updateEllipse() {
        const cropBox = cropper.cropper.querySelector('.cropper-crop-box');
        if (!cropBox) return;
        let overlay = cropBox.querySelector('.circle-crop-overlay');
        if (overlay) overlay.remove();
        const w = cropBox.offsetWidth;
        const h = cropBox.offsetHeight;
        overlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        overlay.classList.add('circle-crop-overlay');
        overlay.setAttribute('width', w);
        overlay.setAttribute('height', h);
        overlay.style.position = 'absolute';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '20';
        // White outline
        const ellipseOutline = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipseOutline.setAttribute('cx', w/2);
        ellipseOutline.setAttribute('cy', h/2);
        ellipseOutline.setAttribute('rx', w/2 - 3);
        ellipseOutline.setAttribute('ry', h/2 - 3);
        ellipseOutline.setAttribute('fill', 'none');
        ellipseOutline.setAttribute('stroke', 'white');
        ellipseOutline.setAttribute('stroke-width', '7');
        ellipseOutline.setAttribute('stroke-dasharray', '0');
        ellipseOutline.setAttribute('opacity', '0.8');
        overlay.appendChild(ellipseOutline);
        // Blue dashed
        const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipse.setAttribute('cx', w/2);
        ellipse.setAttribute('cy', h/2);
        ellipse.setAttribute('rx', w/2 - 3);
        ellipse.setAttribute('ry', h/2 - 3);
        ellipse.setAttribute('fill', 'none');
        ellipse.setAttribute('stroke', '#4af');
        ellipse.setAttribute('stroke-width', '5');
        ellipse.setAttribute('stroke-dasharray', '10,8');
        ellipse.setAttribute('opacity', '1');
        overlay.appendChild(ellipse);
        cropBox.appendChild(overlay);
    }
    // Initial draw
    updateEllipse();
    // Listen for crop events using addEventListener
    const cropperElem = cropper.cropper;
    cropperElem.addEventListener('crop', updateEllipse);
    cropperElem.addEventListener('cropmove', updateEllipse);
    cropperElem.addEventListener('cropend', updateEllipse);
    // Store listeners for cleanup
    cropperElem._ellipseUpdateEllipse = updateEllipse;
    // MutationObserver for crop box size/position
    const cropBox = cropper.cropper.querySelector('.cropper-crop-box');
    if (cropBox) {
        observer = new MutationObserver(() => { updateEllipse(); });
        observer.observe(cropBox, { attributes: true, attributeFilter: ['style', 'class'] });
        cropBox._ellipseObserver = observer;
    }
}

function removeCircleOverlay(cropper) {
    const cropperElem = cropper.cropper;
    const cropBox = cropperElem.querySelector('.cropper-crop-box');
    if (cropBox) {
        const overlay = cropBox.querySelector('.circle-crop-overlay');
        if (overlay) overlay.remove();
        if (cropBox._ellipseObserver) {
            cropBox._ellipseObserver.disconnect();
            cropBox._ellipseObserver = null;
        }
    }
    // Remove event listeners
    if (cropperElem._ellipseUpdateEllipse) {
        cropperElem.removeEventListener('crop', cropperElem._ellipseUpdateEllipse);
        cropperElem.removeEventListener('cropmove', cropperElem._ellipseUpdateEllipse);
        cropperElem.removeEventListener('cropend', cropperElem._ellipseUpdateEllipse);
        cropperElem._ellipseUpdateEllipse = null;
    }
}

// Enhanced showCropperModal to support circle overlay
function showCropperModal(imageSrc, onCrop, onCancel, cropShape) {
    const modal = document.getElementById('cropper-modal');
    const img = document.getElementById('cropper-image');
    const confirmBtn = document.getElementById('cropper-confirm');
    const cancelBtn = document.getElementById('cropper-cancel');
    img.src = imageSrc;
    modal.style.display = 'flex';
    if (cropper) { cropper.destroy(); cropper = null; }
    cropper = new Cropper(img, {
        viewMode: 1,
        aspectRatio: (cropShape === 'circle') ? 1 : NaN,
        autoCropArea: 1,
        movable: true,
        zoomable: true,
        scalable: true,
        rotatable: false,
        ready() {
            if (cropShape === 'circle') addCircleOverlay(cropper);
        }
    });
    confirmBtn.onclick = () => {
        // For circle, mask the square crop to a circle
        if (cropShape === 'circle') {
            const canvas = cropper.getCroppedCanvas();
            const size = Math.min(canvas.width, canvas.height);
            const circleCanvas = document.createElement('canvas');
            circleCanvas.width = size;
            circleCanvas.height = size;
            const ctx = circleCanvas.getContext('2d');
            ctx.save();
            ctx.beginPath();
            ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(canvas, 0, 0, size, size, 0, 0, size, size);
            ctx.restore();
            circleCanvas.toBlob(blob => {
                modal.style.display = 'none';
                cropper.destroy(); cropper = null;
                onCrop(blob);
            });
        } else {
            cropper.getCroppedCanvas().toBlob(blob => {
                modal.style.display = 'none';
                cropper.destroy(); cropper = null;
                onCrop(blob);
            });
        }
    };
    cancelBtn.onclick = () => {
        modal.style.display = 'none';
        cropper.destroy(); cropper = null;
        if (onCancel) onCancel();
    };
}

function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    const status = document.getElementById('loading-status');
    const bar = document.getElementById('loading-progress-bar');
    overlay.style.display = 'flex';
    status.textContent = 'Analyzing image...';
    bar.style.width = '0%';
    let steps = [
        { t: 0, text: 'Analyzing image...', pct: 10 },
        { t: 1200, text: 'Detecting features...', pct: 30 },
        { t: 2500, text: 'Processing image...', pct: 55 },
        { t: 4000, text: 'Generating 3D Geometries...', pct: 80 },
        { t: 6000, text: 'Finalizing model...', pct: 100 }
    ];
    steps.forEach(step => {
        setTimeout(() => {
            status.textContent = step.text;
            bar.style.width = step.pct + '%';
        }, step.t);
    });
}
function hideLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Add font URLs for all options
const ENGRAVING_FONTS = {
    helvetiker: 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/helvetiker_regular.typeface.json',
    optimer: 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/optimer_regular.typeface.json',
    gentilis: 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/gentilis_regular.typeface.json',
    droid_sans: 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_sans_regular.typeface.json',
    droid_serif: 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/fonts/droid_serif_regular.typeface.json',
};

class HeightfieldViewer {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.heightfield = null;
        this.jumpring = null;
        this.directionalLight = null;
        this.currentObjectType = 'circular-pendant';
        this.imageTransform = {
            offsetX: 0,
            offsetY: 0,
            scale: 1,
            rotation: 0
        };
        this.pendantDiameter = 25;
        this.pendantWidth = 25;
        this.pendantHeight = 25;
        this.aspectLocked = true;
        this.grid = null;
        this.envMapLoaded = false;
        this.defaultCameraPosition = new THREE.Vector3(0, 50, 0); // Changed to top view
        this.jumpringOffset = { x: 0, y: -3.5, z: -15 };
        this.pendantThickness = 1.0; // mm, default thickness for solid pendant (reduced from 1.5mm)
        this.borderThickness = 1.0;
        this.engravingMesh = null;
        this.engravingFont = null;
        this.engravingFontName = 'helvetiker';
        this.engravingFontCache = {};
        
        this.init();
        this.setupEventListeners();
        this.setupUIControls();
        this.addViewCube();
        this.loadEngravingFont(this.engravingFontName);
    }

    init() {
        // Setup renderer with improved quality settings
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x333333);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);

        // Setup camera - changed to top view
        this.camera.position.set(0, 50, 0);
        this.camera.lookAt(0, 0, 0);

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Use Poly Haven HDRI for environment map
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.environment = texture;
            this.scene.background = texture;
            this.scene.backgroundBlurriness = 0.8;
            this.envMapLoaded = true;
            if (this.heightfield) {
                this.heightfield.material.metalness = 1.0;
                this.heightfield.material.roughness = 0.1;
                this.heightfield.material.envMapIntensity = 1.5;
            }
        }, undefined, (err) => {
            this.envMapLoaded = false;
            if (this.heightfield) {
                this.heightfield.material.metalness = 0.2;
                this.heightfield.material.roughness = 0.7;
                this.heightfield.material.envMapIntensity = 0.0;
            }
            console.warn('HDRI environment map failed to load. Falling back to non-metallic material.');
        });

        // Enhanced lighting setup for showcasing shine
        // Main ambient light - softer for better contrast
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        // Primary directional light (key light) - from top-right
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        this.directionalLight.position.set(2, 3, 2);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.directionalLight.shadow.camera.near = 0.5;
        this.directionalLight.shadow.camera.far = 50;
        this.scene.add(this.directionalLight);

        // Secondary directional light (fill light) - from left
        this.fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
        this.fillLight.position.set(-2, 1, 1);
        this.scene.add(this.fillLight);

        // Rim light - from behind to create edge highlights
        this.rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
        this.rimLight.position.set(0, 1, -3);
        this.scene.add(this.rimLight);

        // Accent lights for extra sparkle
        this.accentLight1 = new THREE.PointLight(0xffffff, 0.5, 30);
        this.accentLight1.position.set(3, 2, 3);
        this.scene.add(this.accentLight1);

        this.accentLight2 = new THREE.PointLight(0xffffff, 0.4, 25);
        this.accentLight2.position.set(-2, 3, 2);
        this.scene.add(this.accentLight2);

        // Store all lights for easy control
        this.lights = {
            ambient: ambientLight,
            directional: this.directionalLight,
            fill: this.fillLight,
            rim: this.rimLight,
            accent1: this.accentLight1,
            accent2: this.accentLight2
        };

        // Start animation loop
        this.animate();
    }

    setupEventListeners() {
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');

        // Handle drag and drop
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', async (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                // Start S3 upload in background (non-blocking)
                uploadImageToS3(file).then(uploadResult => {
                    console.log('✅ Background image upload completed:', uploadResult);
                }).catch(error => {
                    console.error('❌ Background image upload failed:', error);
                });
                
                // Immediately proceed with local processing
                const reader = new FileReader();
                reader.onload = (ev) => {
                    this.originalImageDataUrl = ev.target.result;
                    showCropperModal(ev.target.result, (croppedBlob) => {
                        this.processImage(croppedBlob);
                    }, null, this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' ? 'circle' : 'rect');
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle file input
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                // Start S3 upload in background (non-blocking)
                uploadImageToS3(file).then(uploadResult => {
                    console.log('✅ Background image upload completed:', uploadResult);
                }).catch(error => {
                    console.error('❌ Background image upload failed:', error);
                });
                
                // Immediately proceed with local processing
                const reader = new FileReader();
                reader.onload = (ev) => {
                    this.originalImageDataUrl = ev.target.result;
                    showCropperModal(ev.target.result, (croppedBlob) => {
                        this.processImage(croppedBlob);
                    }, null, this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' ? 'circle' : 'rect');
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    setupUIControls() {
        // Setup menu toggles
        document.querySelectorAll('.menu-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                content.classList.toggle('active');
                const button = header.querySelector('.toggle-button');
                button.textContent = content.classList.contains('active') ? '▼' : '▶';
            });
        });

        // Object type selection
        document.getElementById('object-type').addEventListener('change', (e) => {
            this.currentObjectType = e.target.value;
            if (this.originalImageDataUrl) {
                showCropperModal(
                    this.originalImageDataUrl,
                    (croppedBlob) => {
                        this.processImage(croppedBlob);
                    },
                    null,
                    this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' ? 'circle' : 'rect'
                );
            } else if (this.heightfield) {
                this.updateObjectShape();
            }
        });

        // Camera controls
        document.getElementById('fov').addEventListener('input', (e) => {
            this.camera.fov = parseFloat(e.target.value);
            this.camera.updateProjectionMatrix();
        });

        document.getElementById('camera-distance').addEventListener('input', (e) => {
            const distance = parseFloat(e.target.value);
            const direction = new THREE.Vector3();
            this.camera.getWorldDirection(direction);
            this.camera.position.copy(this.controls.target).add(direction.multiplyScalar(-distance));
        });

        // Rotate toggle
        const rotateToggle = document.getElementById('rotate-toggle');
        this.isRotating = false;
        if (rotateToggle) {
            rotateToggle.addEventListener('change', (e) => {
                this.isRotating = rotateToggle.checked;
            });
        }

        // Scene settings
        document.getElementById('light-intensity').addEventListener('input', (e) => {
            this.directionalLight.intensity = parseFloat(e.target.value);
        });

        document.getElementById('material-color').addEventListener('input', (e) => {
            if (this.heightfield) {
                this.heightfield.material.color.set(e.target.value);
            }
        });

        document.getElementById('material-shine').addEventListener('input', (e) => {
            if (this.heightfield) {
                this.heightfield.material.shininess = parseFloat(e.target.value);
            }
        });

        // Image position controls
        document.getElementById('image-offset-x').addEventListener('input', (e) => {
            this.imageTransform.offsetX = parseFloat(e.target.value);
            this.updateImagePosition();
        });

        document.getElementById('image-offset-y').addEventListener('input', (e) => {
            this.imageTransform.offsetY = parseFloat(e.target.value);
            this.updateImagePosition();
        });

        document.getElementById('image-scale').addEventListener('input', (e) => {
            this.imageTransform.scale = parseFloat(e.target.value);
            this.updateImagePosition();
        });

        document.getElementById('image-rotation').addEventListener('input', (e) => {
            this.imageTransform.rotation = parseFloat(e.target.value);
            this.updateImagePosition();
        });

        // Metal type controls
        document.getElementById('metal-type').addEventListener('change', (e) => {
            this.updateMetalMaterial(e.target.value);
        });

        document.getElementById('metal-finish').addEventListener('change', (e) => {
            this.updateMetalFinish(e.target.value);
        });

        // Jumpring controls
        document.getElementById('jumpring-size').addEventListener('change', (e) => {
            this.updateJumpring(e.target.value);
        });

        document.getElementById('jumpring-position').addEventListener('change', (e) => {
            this.updateJumpringPosition(e.target.value);
        });

        // Lighting controls
        document.getElementById('ambient-intensity').addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            document.getElementById('ambient-intensity-value').textContent = value.toFixed(2);
            if (this.lights && this.lights.ambient) {
                this.lights.ambient.intensity = value;
            }
        });
        
        document.getElementById('directional-intensity').addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            document.getElementById('directional-intensity-value').textContent = value.toFixed(2);
            if (this.lights && this.lights.directional) {
                this.lights.directional.intensity = value;
            }
        });

        // Add controls for new lighting system with value updates
        const fillLightControl = document.getElementById('fill-light-intensity');
        if (fillLightControl) {
            fillLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                document.getElementById('fill-light-intensity-value').textContent = value.toFixed(2);
                if (this.lights && this.lights.fill) {
                    this.lights.fill.intensity = value;
                }
            });
        }

        const rimLightControl = document.getElementById('rim-light-intensity');
        if (rimLightControl) {
            rimLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                document.getElementById('rim-light-intensity-value').textContent = value.toFixed(2);
                if (this.lights && this.lights.rim) {
                    this.lights.rim.intensity = value;
                }
            });
        }

        const accentLightControl = document.getElementById('accent-light-intensity');
        if (accentLightControl) {
            accentLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                document.getElementById('accent-light-intensity-value').textContent = value.toFixed(2);
                if (this.lights && this.lights.accent1) {
                    this.lights.accent1.intensity = value;
                }
                if (this.lights && this.lights.accent2) {
                    this.lights.accent2.intensity = value * 0.8; // Slightly dimmer second accent
                }
            });
        }

        const envMapIntensityControl = document.getElementById('env-map-intensity');
        if (envMapIntensityControl) {
            envMapIntensityControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                document.getElementById('env-map-intensity-value').textContent = value.toFixed(2);
                if (this.heightfield) {
                    this.heightfield.material.envMapIntensity = value;
                }
                if (this.jumpring) {
                    this.jumpring.material.envMapIntensity = value;
                }
                if (this.redLayer) {
                    this.redLayer.material.envMapIntensity = value;
                }
            });
        }

        // Pendant size controls
        const diameterSlider = document.getElementById('pendant-diameter');
        const widthSlider = document.getElementById('pendant-width');
        const heightSlider = document.getElementById('pendant-height');
        const aspectLockBtn = document.getElementById('aspect-lock');
        const aspectLockIcon = document.getElementById('aspect-lock-icon');
        const diameterValue = document.getElementById('pendant-diameter-value');
        const widthValue = document.getElementById('pendant-width-value');
        const heightValue = document.getElementById('pendant-height-value');
        const updateSliderLabels = () => {
            diameterValue.textContent = diameterSlider.value + ' mm';
            widthValue.textContent = widthSlider.value + ' mm';
            heightValue.textContent = heightSlider.value + ' mm';
        };
        diameterSlider.addEventListener('input', (e) => {
            this.pendantDiameter = parseFloat(e.target.value);
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
                // Update jumpring Z slider to new default
                const newDefaultZ = -0.6 * this.pendantDiameter;
                document.getElementById('jumpring-z').value = newDefaultZ;
                document.getElementById('jumpring-z-value').textContent = newDefaultZ;
                this.jumpringOffset.z = newDefaultZ;
                this.createHeightfieldMesh(this.heightfieldData);
            }
            updateSliderLabels();
        });
        widthSlider.addEventListener('input', updateSliderLabels);
        heightSlider.addEventListener('input', updateSliderLabels);
        updateSliderLabels();
        aspectLockBtn.addEventListener('click', () => {
            this.aspectLocked = !this.aspectLocked;
            aspectLockIcon.textContent = this.aspectLocked ? '🔒' : '🔓';
        });

        // Reset View button
        document.getElementById('reset-view').addEventListener('click', () => {
            this.camera.position.copy(this.defaultCameraPosition);
            this.camera.lookAt(0, 0, 0);
            this.controls.target.set(0, 0, 0);
            this.controls.update();
        });
        // Screenshot button
        document.getElementById('screenshot').addEventListener('click', () => {
            this.renderer.render(this.scene, this.camera);
            const dataURL = this.renderer.domElement.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = dataURL;
            a.download = 'pendant.png';
            a.click();
        });

        // Border thickness slider
        const borderSlider = document.getElementById('border-thickness');
        const borderValue = document.getElementById('border-thickness-value');
        const updateBorderLabel = () => { borderValue.textContent = borderSlider.value; };
        borderSlider.addEventListener('input', (e) => {
            this.borderThickness = parseFloat(e.target.value);
            updateBorderLabel();
            if (this.heightfieldData && this.currentObjectType === 'circular-pendant') {
                this.createHeightfieldMesh(this.heightfieldData);
            }
        });
        updateBorderLabel();

        // Change Export STL button to Submit Order
        const submitOrderBtn = document.getElementById('export-stl');
        if (submitOrderBtn) {
            submitOrderBtn.textContent = 'Submit Order';
            submitOrderBtn.removeEventListener('click', this.exportSTL);
            submitOrderBtn.addEventListener('click', async () => {
                // Prompt for user info
                const name = prompt('Enter your name:');
                if (!name) return showNotification('Name is required.', 'error');
                const email = prompt('Enter your email:');
                if (!email) return showNotification('Email is required.', 'error');
                
                // Generate STL
                const exporter = new STLExporter();
                const group = new THREE.Group();
                if (this.heightfield) group.add(this.heightfield.clone());
                if (this.jumpring) group.add(this.jumpring.clone());
                const stlString = exporter.parse(group);
                
                // Upload to S3
                await submitOrderWithS3(name, email, stlString);
            });
        }

        const highlightColorInput = document.getElementById('highlight-layer-color');
        highlightColorInput.addEventListener('input', (e) => {
            if (this.redLayer) {
                this.redLayer.material.color.set(e.target.value);
            }
        });

        const antiquingSlider = document.getElementById('antiquing-amount');
        const antiquingValue = document.getElementById('antiquing-amount-value');
        antiquingSlider.addEventListener('input', (e) => {
            antiquingValue.textContent = e.target.value;
            if (this.heightfieldData) {
                this.createHeightfieldMesh(this.heightfieldData);
            }
        });

        const engravingText = document.getElementById('engraving-text');
        const engravingCharCount = document.getElementById('engraving-char-count');
        engravingText.addEventListener('input', (e) => {
            engravingCharCount.textContent = e.target.value.length;
            this.updateEngraving(e.target.value);
        });

        // Engraving options
        const engravingFont = document.getElementById('engraving-font');
        const engravingSize = document.getElementById('engraving-size');
        const engravingSizeValue = document.getElementById('engraving-size-value');
        const engravingBold = document.getElementById('engraving-bold');
        const engravingItalic = document.getElementById('engraving-italic');
        const engravingJustify = document.getElementById('engraving-justify');

        engravingFont.addEventListener('change', (e) => {
            this.engravingFontName = e.target.value;
            this.loadEngravingFont(this.engravingFontName, () => {
                this.updateEngraving(engravingText.value);
            });
        });
        engravingSize.addEventListener('input', (e) => {
            engravingSizeValue.textContent = e.target.value;
            this.updateEngraving(engravingText.value);
        });
        engravingBold.addEventListener('change', () => this.updateEngraving(engravingText.value));
        engravingItalic.addEventListener('change', () => this.updateEngraving(engravingText.value));
        engravingJustify.addEventListener('change', () => this.updateEngraving(engravingText.value));
    }

    async processImage(file) {
        showLoadingOverlay();
        setTimeout(async () => {
            const image = await this.loadImage(file);
            const heightfieldData = this.generateHeightfieldData(image);
            this.createHeightfieldMesh(heightfieldData);
            document.getElementById('drop-zone').classList.add('hidden');
            hideLoadingOverlay();
        }, 7000);
    }

    loadImage(fileOrBlob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = e.target.result;
            };
            reader.readAsDataURL(fileOrBlob);
        });
    }

    generateHeightfieldData(image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate dimensions maintaining aspect ratio
        const aspectRatio = image.height / image.width;
        const width = RESOLUTION; // Using the higher resolution constant
        const height = Math.round(width * aspectRatio);
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and get image data
        ctx.drawImage(image, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        
        return {
            width,
            height,
            data: imageData.data,
            aspectRatio
        };
    }

    createHeightfieldMesh(heightfieldData) {
        let alphaMap = null;
        let geometry = null;
        // Always remove the previous red layer at the start
        if (this.redLayer) {
            console.log('Removing red layer');
            this.scene.remove(this.redLayer);
            this.redLayer.geometry.dispose();
            this.redLayer.material.dispose();
            this.redLayer = null;
        }
        // Store heightfield data for shape updates
        this.heightfieldData = heightfieldData;

        // Remove existing heightfield if any
        if (this.heightfield) {
            this.scene.remove(this.heightfield);
        }

        if (this.grid) {
            this.scene.remove(this.grid);
        }

        let aspectRatio = heightfieldData.aspectRatio;

        // Create appropriate geometry based on object type
        switch (this.currentObjectType) {
            case 'circular-pendant':
                // Remove any previous pendant meshes
                if (this.heightfield) this.scene.remove(this.heightfield);
                if (this.bottomDisc) this.scene.remove(this.bottomDisc);
                if (this.sideWall) this.scene.remove(this.sideWall);
                this.heightfield = null;
                this.bottomDisc = null;
                this.sideWall = null;

                // Relief (top)
                const diameter = this.pendantDiameter;
                const radius = diameter / 2;
                const widthSegments = heightfieldData.width - 1;
                const heightSegments = heightfieldData.height - 1;
                const thickness = this.pendantThickness;

                // Relief positions, normals, uvs
                const reliefPositions = [];
                const reliefUVs = [];
                const gridIdx = (x, y) => y * (widthSegments + 1) + x;
                const grid = [];
                for (let y = 0; y <= heightSegments; ++y) {
                    for (let x = 0; x <= widthSegments; ++x) {
                        const px = (x / widthSegments - 0.5) * diameter;
                        const py = (y / heightSegments - 0.5) * diameter;
                        const dist = Math.sqrt(px * px + py * py);
                        let z = 0;
                        let u = (px / radius + 1) / 2;
                        let v = (py / radius + 1) / 2;
                        if (dist <= radius) {
                            const pixelX = Math.floor(u * (heightfieldData.width - 1));
                            const pixelY = heightfieldData.height - 1 - Math.floor(v * (heightfieldData.height - 1));
                            const pixelIndex = (pixelY * heightfieldData.width + pixelX) * 4;
                            const gray = (heightfieldData.data[pixelIndex] * 0.299 +
                                heightfieldData.data[pixelIndex + 1] * 0.587 +
                                heightfieldData.data[pixelIndex + 2] * 0.114) / 255;
                            z = gray * MAX_DEPTH;
                        }
                        grid.push({ px, py, z, u, v, inCircle: dist <= radius });
                    }
                }
                // Build positions/uvs for only in-circle vertices, and map old grid index to new
                const idxMap = new Array(grid.length).fill(-1);
                let idxCounter = 0;
                for (let i = 0; i < grid.length; ++i) {
                    if (grid[i].inCircle) {
                        reliefPositions.push(grid[i].px, grid[i].py, grid[i].z);
                        reliefUVs.push(grid[i].u, grid[i].v);
                        idxMap[i] = idxCounter++;
                    }
                }
                // Build indices for triangles fully inside the circle
                const reliefIndices = [];
                for (let y = 0; y < heightSegments; ++y) {
                    for (let x = 0; x < widthSegments; ++x) {
                        const a = gridIdx(x, y);
                        const b = gridIdx(x + 1, y);
                        const c = gridIdx(x, y + 1);
                        const d = gridIdx(x + 1, y + 1);
                        if (grid[a].inCircle && grid[b].inCircle && grid[c].inCircle)
                            reliefIndices.push(idxMap[a], idxMap[b], idxMap[c]);
                        if (grid[b].inCircle && grid[d].inCircle && grid[c].inCircle)
                            reliefIndices.push(idxMap[b], idxMap[d], idxMap[c]);
                    }
                }
                // Find edge points of the relief (for bottom disc and side wall)
                const edgePoints = [];
                for (let y = 0; y <= heightSegments; ++y) {
                    for (let x = 0; x <= widthSegments; ++x) {
                        const idx = y * (widthSegments + 1) + x;
                        if (grid[idx].inCircle) {
                            // Is this an edge? (at least one neighbor is out of circle)
                            const neighbors = [
                                gridIdx(x - 1, y), gridIdx(x + 1, y),
                                gridIdx(x, y - 1), gridIdx(x, y + 1)
                            ];
                            if (neighbors.some(n => n < 0 || n >= grid.length || !grid[n] || !grid[n].inCircle)) {
                                edgePoints.push({ x: grid[idx].px, y: grid[idx].py, z: grid[idx].z });
                            }
                        }
                    }
                }
                // Sort edge points by angle from center for a clean bottom disc
                edgePoints.sort((a, b) => {
                    const angleA = Math.atan2(a.y, a.x);
                    const angleB = Math.atan2(b.y, b.x);
                    return angleA - angleB;
                });
                // --- Merge all into a single geometry ---
                // 1. Relief (top)
                const allPositions = [...reliefPositions];
                const allUVs = [...reliefUVs];
                const allIndices = [...reliefIndices];
                // 2. Bottom disc (fan from center to edge points)
                const bottomStartIdx = allPositions.length / 3;
                allPositions.push(0, 0, -thickness); // center
                allUVs.push(0.5, 0.5);
                for (let i = 0; i < edgePoints.length; ++i) {
                    allPositions.push(edgePoints[i].x, edgePoints[i].y, -thickness);
                    allUVs.push((edgePoints[i].x / radius + 1) / 2, (edgePoints[i].y / radius + 1) / 2);
                }
                for (let i = 1; i <= edgePoints.length; ++i) {
                    const a = bottomStartIdx;
                    const b = bottomStartIdx + i;
                    const c = bottomStartIdx + (i < edgePoints.length ? i + 1 : 1);
                    allIndices.push(a, b, c);
                }
                // 3. Side wall (quads between edge of relief and bottom disc)
                const wallStartIdx = allPositions.length / 3;
                for (let i = 0; i < edgePoints.length; ++i) {
                    // Top edge
                    const x1 = edgePoints[i].x, y1 = edgePoints[i].y, z1 = edgePoints[i].z;
                    const x2 = edgePoints[(i + 1) % edgePoints.length].x, y2 = edgePoints[(i + 1) % edgePoints.length].y, z2 = edgePoints[(i + 1) % edgePoints.length].z;
                    // Bottom edge
                    const x1b = x1, y1b = y1, z1b = -thickness;
                    const x2b = x2, y2b = y2, z2b = -thickness;
                    // Add wall vertices
                    allPositions.push(x1, y1, z1); // 0 top current
                    allPositions.push(x2, y2, z2); // 1 top next
                    allPositions.push(x1b, y1b, z1b); // 2 bottom current
                    allPositions.push(x2b, y2b, z2b); // 3 bottom next
                    allUVs.push(0, 0, 0, 0, 0, 0, 0, 0); // dummy UVs
                    const base = wallStartIdx + i * 4;
                    allIndices.push(base, base + 2, base + 1);
                    allIndices.push(base + 1, base + 2, base + 3);
                }
                // 4. Border (rim) - vertical wall offset outward by borderThickness, total height 2.1mm
                const rimStartIdx = allPositions.length / 3;
                const border = this.borderThickness;
                // Find maxZ of the relief
                let maxZ = -Infinity;
                for (let i = 0; i < grid.length; ++i) {
                    if (grid[i].inCircle && grid[i].z > maxZ) maxZ = grid[i].z;
                }
                const rimTopZ = maxZ + 0.4; // reduced from 0.6mm to 0.4mm
                for (let i = 0; i < edgePoints.length; ++i) {
                    const next = (i + 1) % edgePoints.length;
                    // Outward normal
                    const dx = edgePoints[i].x;
                    const dy = edgePoints[i].y;
                    const len = Math.sqrt(dx * dx + dy * dy);
                    const nx = dx / len;
                    const ny = dy / len;
                    // Outer edge points
                    const ox1 = edgePoints[i].x + nx * border;
                    const oy1 = edgePoints[i].y + ny * border;
                    const ox2 = edgePoints[next].x + (edgePoints[next].x / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2)) * border;
                    const oy2 = edgePoints[next].y + (edgePoints[next].y / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2)) * border;
                    // Top and bottom (rim top always at rimTopZ)
                    allPositions.push(edgePoints[i].x, edgePoints[i].y, rimTopZ); // 0 inner top
                    allPositions.push(edgePoints[next].x, edgePoints[next].y, rimTopZ); // 1 inner top next
                    allPositions.push(ox1, oy1, rimTopZ); // 2 outer top
                    allPositions.push(ox2, oy2, rimTopZ); // 3 outer top next
                    allPositions.push(edgePoints[i].x, edgePoints[i].y, -thickness); // 4 inner bottom
                    allPositions.push(edgePoints[next].x, edgePoints[next].y, -thickness); // 5 inner bottom next
                    allPositions.push(ox1, oy1, -thickness); // 6 outer bottom
                    allPositions.push(ox2, oy2, -thickness); // 7 outer bottom next
                    allUVs.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); // dummy UVs
                    const b = rimStartIdx + i * 8;
                    // Top rim quad
                    allIndices.push(b+2, b+3, b+0);
                    allIndices.push(b+3, b+1, b+0);
                    // Bottom rim quad
                    allIndices.push(b+4, b+6, b+5);
                    allIndices.push(b+5, b+6, b+7);
                    // Outer wall
                    allIndices.push(b+2, b+6, b+3);
                    allIndices.push(b+3, b+6, b+7);
                    // Inner wall
                    allIndices.push(b+0, b+1, b+4);
                    allIndices.push(b+1, b+5, b+4);
                }
                // Add a transparent red-tinted layer from the top of the relief up to the rim
                const redLayerPositions = [];
                const redLayerIndices = [];
                for (let i = 0; i < edgePoints.length; ++i) {
                    const next = (i + 1) % edgePoints.length;
                    // Top edge (relief)
                    const x1 = edgePoints[i].x, y1 = edgePoints[i].y, z1 = edgePoints[i].z;
                    const x2 = edgePoints[next].x, y2 = edgePoints[next].y, z2 = edgePoints[next].z;
                    // Rim edge
                    const x1r = x1, y1r = y1, z1r = rimTopZ;
                    const x2r = x2, y2r = y2, z2r = rimTopZ;
                    // Add quad (two triangles)
                    const base = redLayerPositions.length / 3;
                    redLayerPositions.push(x1, y1, z1, x2, y2, z2, x1r, y1r, z1r, x2r, y2r, z2r);
                    redLayerIndices.push(base, base+1, base+2, base+1, base+3, base+2);
                }
                // Add a top cap at rimTopZ
                const capStartIdx = redLayerPositions.length / 3;
                // Center point
                redLayerPositions.push(0, 0, rimTopZ);
                for (let i = 0; i < edgePoints.length; ++i) {
                    redLayerPositions.push(edgePoints[i].x, edgePoints[i].y, rimTopZ);
                }
                for (let i = 1; i <= edgePoints.length; ++i) {
                    const a = capStartIdx;
                    const b = capStartIdx + i;
                    const c = capStartIdx + (i < edgePoints.length ? i + 1 : 1);
                    redLayerIndices.push(a, b, c);
                }
                const redLayerGeometry = new THREE.BufferGeometry();
                redLayerGeometry.setAttribute('position', new THREE.Float32BufferAttribute(redLayerPositions, 3));
                redLayerGeometry.setIndex(redLayerIndices);
                redLayerGeometry.computeVertexNormals();
                const highlightColor = document.getElementById('highlight-layer-color')?.value || '#ffffff';
                const redLayerMaterial = new THREE.MeshStandardMaterial({
                    color: highlightColor,
                    transparent: true,
                    opacity: 0.15,
                    metalness: 0.9,
                    roughness: 0.05,
                    envMapIntensity: 2.0,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });
                const redLayerMesh = new THREE.Mesh(redLayerGeometry, redLayerMaterial);
                redLayerMesh.rotation.x = -Math.PI / 2;
                this.scene.add(redLayerMesh);
                this.redLayer = redLayerMesh;
                // Compute antiquing vertex colors based on Z height
                let minZCirc = Infinity, maxZCirc = -Infinity;
                let antiquingColorsCirc = [];
                for (let i = 2; i < allPositions.length; i += 3) {
                    if (allPositions[i] < minZCirc) minZCirc = allPositions[i];
                    if (allPositions[i] > maxZCirc) maxZCirc = allPositions[i];
                }
                const antiquingAmount = parseFloat(document.getElementById('antiquing-amount')?.value || 0.5);
                for (let i = 2; i < allPositions.length; i += 3) {
                    const z = allPositions[i];
                    const t = (z - minZCirc) / (maxZCirc - minZCirc + 1e-6);
                    const antiqued = 0.15 + (1 - 0.15) * ((1 - antiquingAmount) * t + antiquingAmount * (1 - t));
                    antiquingColorsCirc.push(antiqued, antiqued, antiqued);
                }
                // Build BufferGeometry
                geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
                geometry.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute(antiquingColorsCirc, 3));
                geometry.setIndex(allIndices);
                geometry.computeVertexNormals();
                // Single material for all
                const material = new THREE.MeshStandardMaterial({
                    color: METAL_MATERIALS['sterling-silver'].color,
                    metalness: this.envMapLoaded ? 1.0 : 0.2,
                    roughness: this.envMapLoaded ? 0.1 : 0.7,
                    side: THREE.DoubleSide,
                    envMapIntensity: this.envMapLoaded ? 1.0 : 0.0,
                    transparent: !!alphaMap,
                    alphaMap: alphaMap,
                    alphaTest: alphaMap ? 0.5 : 0,
                    vertexColors: true
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.x = -Math.PI / 2;
                this.scene.add(mesh);
                this.heightfield = mesh;
                this.createJumpring('small');
                this.updateJumpringPosition();
                // Ensure the correct metal material is applied on first render
                const metalType = document.getElementById('metal-type')?.value || 'sterling-silver';
                this.updateMetalMaterial(metalType);
                console.log('Adding red layer');
                console.log('Scene children:', this.scene.children.length);
                const engravingTextValue = document.getElementById('engraving-text')?.value || '';
                this.updateEngraving(engravingTextValue);
                return;
            case 'rectangular-pendant':
                geometry = new THREE.PlaneGeometry(
                    this.pendantWidth,
                    this.pendantHeight,
                    heightfieldData.width - 1,
                    heightfieldData.height - 1
                );
                break;
            case 'circular-stud':
                geometry = new THREE.PlaneGeometry(
                    this.pendantDiameter / 2,
                    this.pendantDiameter / 2,
                    heightfieldData.width - 1,
                    heightfieldData.height - 1
                );
                break;
            case 'bracelet':
                geometry = new THREE.PlaneGeometry(
                    this.pendantWidth * 0.8,
                    this.pendantHeight,
                    heightfieldData.width - 1,
                    heightfieldData.height - 1
                );
                break;
        }

        if (!geometry) return;

        const positions = geometry.attributes.position.array;
        const uvs = geometry.attributes.uv.array;

        // Apply height data to vertices
        for (let i = 0; i < positions.length; i += 3) {
            let u, v;
            
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
                // For circular shapes, convert position to UV coordinates
                const x = positions[i];
                const y = positions[i + 1];
                const radius = (this.currentObjectType === 'circular-pendant') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
                u = (x / (this.pendantDiameter / 2) + 1) / 2;
                v = (y / (this.pendantDiameter / 2) + 1) / 2;
                // Mask out vertices outside the circle
                const dist = Math.sqrt(x * x + y * y);
                if (dist > radius) {
                    positions[i + 2] = 0;
                    continue;
                }
            } else {
                // For rectangular shapes, use existing UVs
                u = uvs[i / 3 * 2];
                v = uvs[i / 3 * 2 + 1];
            }

            // Sample image data
            const pixelX = Math.floor(u * (heightfieldData.width - 1));
            const pixelY = heightfieldData.height - 1 - Math.floor(v * (heightfieldData.height - 1));
            const pixelIndex = (pixelY * heightfieldData.width + pixelX) * 4;

            // Convert RGB to grayscale
            const gray = (heightfieldData.data[pixelIndex] * 0.299 +
                         heightfieldData.data[pixelIndex + 1] * 0.587 +
                         heightfieldData.data[pixelIndex + 2] * 0.114) / 255;

            // Apply height
            positions[i + 2] = gray * MAX_DEPTH;
        }

        // IMPORTANT: Recompute normals after modifying vertices for correct lighting/reflections
        geometry.computeVertexNormals();

        // Generate a circular alphaMap for the circular pendant
        if (this.currentObjectType === 'circular-pendant') {
            const size = 512;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, size, size);
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
            alphaMap = new THREE.CanvasTexture(canvas);
        }

        // Use unique names to avoid redeclaration
        let minZRect = Infinity, maxZRect = -Infinity;
        let antiquingColorsRect = [];
        for (let i = 2; i < positions.length; i += 3) {
            if (positions[i] < minZRect) minZRect = positions[i];
            if (positions[i] > maxZRect) maxZRect = positions[i];
        }
        const antiquingAmount = parseFloat(document.getElementById('antiquing-amount')?.value || 0.5);
        for (let i = 2; i < positions.length; i += 3) {
            const z = positions[i];
            const t = (z - minZRect) / (maxZRect - minZRect + 1e-6);
            const antiqued = 0.15 + (1 - 0.15) * ((1 - antiquingAmount) * t + antiquingAmount * (1 - t));
            antiquingColorsRect.push(antiqued, antiqued, antiqued);
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(antiquingColorsRect, 3));

        // Use the same MeshStandardMaterial settings as the jumpring, with envMapIntensity
        const material = new THREE.MeshStandardMaterial({
            color: METAL_MATERIALS['sterling-silver'].color,
            metalness: this.envMapLoaded ? 1.0 : 0.2,
            roughness: this.envMapLoaded ? 0.1 : 0.7,
            side: THREE.DoubleSide,
            envMapIntensity: this.envMapLoaded ? 1.0 : 0.0,
            transparent: !!alphaMap,
            alphaMap: alphaMap,
            alphaTest: alphaMap ? 0.5 : 0,
            vertexColors: true
        });

        // Create mesh
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        this.scene.add(mesh);
        this.heightfield = mesh;
        this.createJumpring('small');
        this.updateJumpringPosition();
        // Ensure the correct metal material is applied on first render
        const metalType = document.getElementById('metal-type')?.value || 'sterling-silver';
        this.updateMetalMaterial(metalType);
        console.log('Adding red layer');
        console.log('Scene children:', this.scene.children.length);
        const engravingTextValue = document.getElementById('engraving-text')?.value || '';
        this.updateEngraving(engravingTextValue);
        return;
    }

    updateObjectShape() {
        if (!this.heightfield) return;

        // Recreate the mesh with the new object type
        this.createHeightfieldMesh(this.heightfieldData);
    }

    fitCameraToObject(object) {
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
        
        this.camera.position.set(center.x, center.y, center.z + cameraZ * 1.5);
        this.camera.lookAt(center);
        
        this.controls.target.copy(center);
        this.controls.update();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Slowly rotate the main directional light for dynamic reflections
        if (this.directionalLight) {
            const time = Date.now() * 0.0005; // Slow rotation speed
            const radius = 5;
            this.directionalLight.position.x = Math.cos(time) * radius;
            this.directionalLight.position.z = Math.sin(time) * radius;
            this.directionalLight.position.y = 3; // Keep height constant
        }
        
        if (this.isRotating && this.heightfield) {
            // Find the bottom edge Y (for circular/rectangular, it's -diameter/2 or -height/2)
            let pivotY = 0;
            let pivotZ = 0;
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
                pivotY = -this.pendantDiameter / 2;
                pivotZ = 0;
            } else {
                pivotY = -this.pendantHeight / 2;
                pivotZ = 0;
            }
            // Rotate around Y axis at the bottom edge
            const angle = 0.01; // radians per frame
            // Move pivot to origin
            this.heightfield.position.y = -pivotY;
            this.heightfield.position.z = -pivotZ;
            // Apply rotation to heightfield
            this.heightfield.rotateY(angle);
            // Move back
            this.heightfield.position.y = 0;
            this.heightfield.position.z = 0;
            // Set jumpring, engravingMesh, and redLayer rotation to match heightfield
            if (this.jumpring) {
                this.jumpring.position.y -= pivotY;
                this.jumpring.position.z -= pivotZ;
                this.jumpring.rotation.y = this.heightfield.rotation.y;
                this.jumpring.position.y += pivotY;
                this.jumpring.position.z += pivotZ;
            }
            if (this.engravingMesh) {
                this.engravingMesh.position.y -= pivotY;
                this.engravingMesh.position.z -= pivotZ;
                this.engravingMesh.rotation.y = this.heightfield.rotation.y;
                this.engravingMesh.position.y += pivotY;
                this.engravingMesh.position.z += pivotZ;
            }
            if (this.redLayer) {
                this.redLayer.position.y = 0;
                this.redLayer.position.z = 0;
                this.redLayer.rotation.y = this.heightfield.rotation.y;
            }
        }
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        // Sync view cube orientation with main camera, only if cube is defined
        if (this.cube && this.cubeRenderer && this.cubeScene && this.cubeCamera) {
            this.cube.quaternion.copy(this.camera.quaternion);
            this.cubeRenderer.render(this.cubeScene, this.cubeCamera);
        }
    }

    updateImagePosition() {
        if (!this.heightfield) return;

        const geometry = this.heightfield.geometry;
        const positions = geometry.attributes.position.array;
        const uvs = geometry.attributes.uv.array;
        const aspectRatio = this.heightfieldData.aspectRatio;

        for (let i = 0; i < positions.length; i += 3) {
            let x = positions[i];
            let y = positions[i + 1];

            // Apply transformations
            const angle = this.imageTransform.rotation * Math.PI / 180;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);

            // Scale
            x *= this.imageTransform.scale;
            y *= this.imageTransform.scale;

            // Rotate
            const xRot = x * cos - y * sin;
            const yRot = x * sin + y * cos;
            x = xRot;
            y = yRot;

            // Offset
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
                const radius = (this.currentObjectType === 'circular-pendant') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
                x += this.imageTransform.offsetX * radius;
                y += this.imageTransform.offsetY * radius;
            } else {
                x += this.imageTransform.offsetX * this.pendantWidth;
                y += this.imageTransform.offsetY * this.pendantHeight;
            }

            // Update position
            positions[i] = x;
            positions[i + 1] = y;

            // Update UVs for proper texture mapping
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
                const radius = (this.currentObjectType === 'circular-pendant') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
                uvs[i / 3 * 2] = (x / radius + 1) / 2;
                uvs[i / 3 * 2 + 1] = (y / radius + 1) / 2;
            }
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.uv.needsUpdate = true;
        geometry.computeVertexNormals();
    }

    updateMetalMaterial(metalType) {
        if (!this.heightfield) return;

        const materialProps = METAL_MATERIALS[metalType];
        this.heightfield.material.color.set(materialProps.color);
        this.heightfield.material.metalness = materialProps.metalness;
        this.heightfield.material.roughness = materialProps.roughness;
        this.heightfield.material.envMapIntensity = materialProps.envMapIntensity;

        if (this.jumpring) {
            this.jumpring.material.color.set(materialProps.color);
            this.jumpring.material.metalness = materialProps.metalness;
            this.jumpring.material.roughness = materialProps.roughness;
            this.jumpring.material.envMapIntensity = materialProps.envMapIntensity;
        }
    }

    updateMetalFinish(finish) {
        if (!this.heightfield) return;

        const finishProps = FINISH_PROPERTIES[finish];
        this.heightfield.material.roughness = finishProps.roughness;

        if (this.jumpring) {
            this.jumpring.material.roughness = finishProps.roughness;
        }
    }

    createJumpring(size) {
        if (this.jumpring) {
            this.scene.remove(this.jumpring);
        }
        const ringRadius = {
            'small': 2,
            'medium': 3,
            'large': 4
        }[size];
        const ringGeometry = new THREE.TorusGeometry(ringRadius, 0.5, 16, 32);
        const ringMaterial = new THREE.MeshStandardMaterial({
            color: METAL_MATERIALS['sterling-silver'].color,
            metalness: 1.0,
            roughness: 0.1,
            envMapIntensity: 1.0
        });
        this.jumpring = new THREE.Mesh(ringGeometry, ringMaterial);
        this.scene.add(this.jumpring);
        console.log('Creating jumpring');
    }

    updateJumpring(size) {
        this.createJumpring(size);
    }

    updateJumpringPosition() {
        if (!this.jumpring || !this.heightfield) return;
        const heightfieldBounds = new THREE.Box3().setFromObject(this.heightfield);
        const heightfieldSize = heightfieldBounds.getSize(new THREE.Vector3());
        const heightfieldCenter = heightfieldBounds.getCenter(new THREE.Vector3());
        // Place jumpring just above the rim
        let x = heightfieldCenter.x;
        let y = heightfieldCenter.y + heightfieldSize.y / 2 + 2 - 3.5; // adjust as needed
        let z = heightfieldCenter.z + (-0.6 * this.pendantDiameter);
        this.jumpring.position.set(x, y, z);
        this.jumpring.rotation.set(Math.PI / 2, 0, 0);
    }

    addScaleGrid() {
        // Remove previous grid if any
        if (this.grid) {
            this.scene.remove(this.grid);
        }
        // 1mm per block
        let gridSize = 60;
        let divisions = 60;
        if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
            gridSize = Math.ceil(this.pendantDiameter * 1.2);
            divisions = gridSize;
        } else {
            gridSize = Math.ceil(Math.max(this.pendantWidth, this.pendantHeight) * 1.2);
            divisions = gridSize;
        }
        const gridHelper = new THREE.GridHelper(gridSize, divisions, 0xffffff, 0x888888);
        gridHelper.position.y = -0.7; // Slightly below the pendant
        gridHelper.material.opacity = 0.5;
        gridHelper.material.transparent = true;
        this.grid = gridHelper;
        this.scene.add(this.grid);
    }

    // updateEnvMapStatus() {
    //     const bar = document.getElementById('envmap-status');
    //     if (!bar) return;
    //     if (this.envMapLoaded) {
    //         bar.textContent = 'Environment map loaded: metals will look realistic.';
    //         bar.style.background = 'rgba(40,180,40,0.9)';
    //     } else {
    //         bar.textContent = 'Environment map missing: metals will look dull. Place px.jpg, nx.jpg, ... in /public.';
    //         bar.style.background = 'rgba(200,60,60,0.9)';
    //     }
    //     bar.style.display = 'block';
    // }

    addViewCube() {
        // Create a small scene for the view cube
        this.cubeScene = new THREE.Scene();
        this.cubeCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
        this.cubeCamera.position.set(2, 2, 2);
        this.cubeCamera.lookAt(0, 0, 0);
        
        // Create the cube with labeled faces
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        
        // Create materials with labels and better colors
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: 0.8 }), // right (X+) - blue
            new THREE.MeshBasicMaterial({ color: 0xe24a4a, transparent: true, opacity: 0.8 }), // left (X-) - red  
            new THREE.MeshBasicMaterial({ color: 0x4ae24a, transparent: true, opacity: 0.8 }), // top (Y+) - green
            new THREE.MeshBasicMaterial({ color: 0xe2e24a, transparent: true, opacity: 0.8 }), // bottom (Y-) - yellow
            new THREE.MeshBasicMaterial({ color: 0xe24ae2, transparent: true, opacity: 0.8 }), // front (Z+) - magenta
            new THREE.MeshBasicMaterial({ color: 0x4ae2e2, transparent: true, opacity: 0.8 })  // back (Z-) - cyan
        ];
        
        this.cube = new THREE.Mesh(cubeGeometry, materials);
        this.cubeScene.add(this.cube);
        
        // Add text labels to each face
        this.addCubeLabels();
        
        // Add wireframe outline
        const wireframe = new THREE.WireframeGeometry(cubeGeometry);
        const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
        const wireframeMesh = new THREE.LineSegments(wireframe, wireframeMaterial);
        this.cube.add(wireframeMesh);
        
        // Overlay renderer
        this.cubeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.cubeRenderer.setSize(120, 120);
        this.cubeRenderer.setClearColor(0x000000, 0);
        this.cubeRenderer.domElement.style.position = 'absolute';
        this.cubeRenderer.domElement.style.top = '20px';
        this.cubeRenderer.domElement.style.left = '20px'; // Changed from right to left
        this.cubeRenderer.domElement.style.zIndex = '2001';
        this.cubeRenderer.domElement.style.border = '2px solid rgba(255,255,255,0.3)';
        this.cubeRenderer.domElement.style.borderRadius = '8px';
        this.cubeRenderer.domElement.style.cursor = 'pointer';
        this.cubeRenderer.domElement.style.background = 'rgba(0,0,0,0.2)';
        document.body.appendChild(this.cubeRenderer.domElement);
        
        // Raycaster for picking
        this.cubeRaycaster = new THREE.Raycaster();
        this.cubePointer = new THREE.Vector2();
        this.hoveredFace = -1;
        
        // Mouse events for interaction
        this.cubeRenderer.domElement.addEventListener('pointerdown', (event) => {
            const rect = this.cubeRenderer.domElement.getBoundingClientRect();
            this.cubePointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            this.cubePointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            this.cubeRaycaster.setFromCamera(this.cubePointer, this.cubeCamera);
            const intersects = this.cubeRaycaster.intersectObject(this.cube, true);
            if (intersects.length > 0) {
                const faceIndex = Math.floor(intersects[0].faceIndex / 2);
                this.setCameraToCubeFace(faceIndex);
            }
        });
        
        // Hover effects
        this.cubeRenderer.domElement.addEventListener('pointermove', (event) => {
            const rect = this.cubeRenderer.domElement.getBoundingClientRect();
            this.cubePointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            this.cubePointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            this.cubeRaycaster.setFromCamera(this.cubePointer, this.cubeCamera);
            const intersects = this.cubeRaycaster.intersectObject(this.cube, true);
            
            const newHoveredFace = intersects.length > 0 ? Math.floor(intersects[0].faceIndex / 2) : -1;
            
            if (newHoveredFace !== this.hoveredFace) {
                // Reset previous face
                if (this.hoveredFace >= 0) {
                    this.cube.material[this.hoveredFace].opacity = 0.8;
                }
                
                // Highlight new face
                this.hoveredFace = newHoveredFace;
                if (this.hoveredFace >= 0) {
                    this.cube.material[this.hoveredFace].opacity = 1.0;
                }
            }
        });
        
        this.cubeRenderer.domElement.addEventListener('pointerleave', () => {
            // Reset all face opacities when leaving the cube
            if (this.hoveredFace >= 0) {
                this.cube.material[this.hoveredFace].opacity = 0.8;
                this.hoveredFace = -1;
            }
        });
        
        // Add view preset buttons
        this.addViewPresetButtons();
    }
    
    addCubeLabels() {
        // Create text labels for each face
        const labels = ['R', 'L', 'T', 'B', 'F', 'K']; // Right, Left, Top, Bottom, Front, bacK
        const positions = [
            [0.51, 0, 0],    // Right
            [-0.51, 0, 0],   // Left  
            [0, 0.51, 0],    // Top
            [0, -0.51, 0],   // Bottom
            [0, 0, 0.51],    // Front
            [0, 0, -0.51]    // Back
        ];
        
        // Create canvas for text texture
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        
        labels.forEach((label, index) => {
            // Clear canvas
            context.clearRect(0, 0, 64, 64);
            
            // Draw text
            context.fillStyle = 'white';
            context.font = 'bold 32px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(label, 32, 32);
            
            // Create texture
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            
            // Create sprite
            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true,
                alphaTest: 0.1
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(0.3, 0.3, 1);
            sprite.position.set(...positions[index]);
            
            this.cube.add(sprite);
        });
    }
    
    addViewPresetButtons() {
        // Create a container for view preset buttons
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '150px';
        container.style.left = '20px'; // Changed from right to left
        container.style.zIndex = '2001';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '5px';
        
        const presets = [
            { name: 'ISO', position: [35, 35, 35], icon: '⬚' },
            { name: 'Front', position: [0, 0, 50], icon: '⬜' },
            { name: 'Back', position: [0, 0, -50], icon: '⬛' },
            { name: 'Left', position: [-50, 0, 0], icon: '◀' },
            { name: 'Right', position: [50, 0, 0], icon: '▶' },
            { name: 'Top', position: [0, 50, 0], icon: '▲' },
            { name: 'Bottom', position: [0, -50, 0], icon: '▼' }
        ];
        
        presets.forEach(preset => {
            const button = document.createElement('button');
            button.textContent = `${preset.icon} ${preset.name}`;
            button.style.cssText = `
                background: rgba(0,0,0,0.7);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 4px;
                padding: 4px 8px;
                font-size: 11px;
                cursor: pointer;
                transition: all 0.2s;
                white-space: nowrap;
            `;
            
            button.addEventListener('mouseenter', () => {
                button.style.background = 'rgba(255,255,255,0.2)';
                button.style.borderColor = 'rgba(255,255,255,0.6)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = 'rgba(0,0,0,0.7)';
                button.style.borderColor = 'rgba(255,255,255,0.3)';
            });
            
            button.addEventListener('click', () => {
                this.camera.position.set(...preset.position);
                this.camera.lookAt(0, 0, 0);
                this.controls.target.set(0, 0, 0);
                this.controls.update();
            });
            
            container.appendChild(button);
        });
        
        document.body.appendChild(container);
        this.viewPresetContainer = container;
    }

    setCameraToCubeFace(faceIndex) {
        // Enhanced camera positioning with smooth transitions
        const dist = 50;
        let pos = { x: 0, y: 0, z: 0 };
        let name = '';
        
        switch (faceIndex) {
            case 0: // Right
                pos = { x: dist, y: 0, z: 0 };
                name = 'Right View';
                break;
            case 1: // Left
                pos = { x: -dist, y: 0, z: 0 };
                name = 'Left View';
                break;
            case 2: // Top
                pos = { x: 0, y: dist, z: 0 };
                name = 'Top View';
                break;
            case 3: // Bottom
                pos = { x: 0, y: -dist, z: 0 };
                name = 'Bottom View';
                break;
            case 4: // Front
                pos = { x: 0, y: 0, z: dist };
                name = 'Front View';
                break;
            case 5: // Back
                pos = { x: 0, y: 0, z: -dist };
                name = 'Back View';
                break;
            default:
                pos = { x: dist, y: dist, z: dist };
                name = 'Isometric View';
                break;
        }
        
        // Smooth camera transition
        this.animateCameraTo(pos.x, pos.y, pos.z);
        
        // Show view name notification
        showNotification(`Switched to ${name}`, 'info');
    }
    
    animateCameraTo(targetX, targetY, targetZ) {
        // Smooth camera animation using TWEEN or simple interpolation
        const startPos = this.camera.position.clone();
        const targetPos = new THREE.Vector3(targetX, targetY, targetZ);
        const duration = 500; // milliseconds
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const eased = 1 - Math.pow(1 - progress, 3);
            
            this.camera.position.lerpVectors(startPos, targetPos, eased);
            this.camera.lookAt(0, 0, 0);
            this.controls.target.set(0, 0, 0);
            this.controls.update();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }

    exportSTL() {
        const exporter = new STLExporter();
        // Create a group to export both pendant and jumpring
        const group = new THREE.Group();
        if (this.heightfield) group.add(this.heightfield.clone());
        if (this.jumpring) group.add(this.jumpring.clone());
        const stlString = exporter.parse(group);
        const blob = new Blob([stlString], { type: 'text/plain' });
        const link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.href = URL.createObjectURL(blob);
        link.download = 'pendant.stl';
        link.click();
        document.body.removeChild(link);
    }

    loadEngravingFont(fontName, callback) {
        if (this.engravingFontCache[fontName]) {
            this.engravingFont = this.engravingFontCache[fontName];
            if (callback) callback();
            return;
        }
        const loader = new FontLoader();
        loader.load(ENGRAVING_FONTS[fontName], (font) => {
            this.engravingFontCache[fontName] = font;
            this.engravingFont = font;
            if (callback) callback();
        });
    }

    updateEngraving(text) {
        if (this.engravingMesh) {
            this.scene.remove(this.engravingMesh);
            this.engravingMesh.geometry.dispose();
            this.engravingMesh.material.dispose();
            this.engravingMesh = null;
        }
        if (!this.engravingFont || !text.trim()) return;
        // Get options
        const size = parseFloat(document.getElementById('engraving-size')?.value || 5);
        const isBold = document.getElementById('engraving-bold')?.checked;
        const isItalic = document.getElementById('engraving-italic')?.checked;
        const justify = document.getElementById('engraving-justify')?.value || 'center';
        // Simulate bold by increasing height (not true bold)
        const fontHeight = isBold ? 0.3 : 0.2; // Reduced height for engraving effect
        // Simulate italic by skewing geometry after creation
        const geometry = new TextGeometry(text, {
            font: this.engravingFont,
            size: size,
            height: fontHeight,
            curveSegments: 8,
            bevelEnabled: false
        });
        geometry.computeBoundingBox();
        // Center/justify
        const bbox = geometry.boundingBox;
        let xOffset = 0;
        if (justify === 'center') {
            xOffset = -0.5 * (bbox.max.x - bbox.min.x);
        } else if (justify === 'right') {
            xOffset = -(bbox.max.x - bbox.min.x);
        } // left = 0
        const yOffset = -0.5 * (bbox.max.y - bbox.min.y);
        geometry.translate(xOffset, yOffset, 0);
        // Italic: skew geometry
        if (isItalic) {
            const skew = 0.3; // adjust for more/less italic
            geometry.applyMatrix4(new THREE.Matrix4().set(
                1, skew, 0, 0,
                0,   1, 0, 0,
                0,   0, 1, 0,
                0,   0, 0, 1
            ));
        }
        // Create material for engraved text - darker and more matte
        const material = new THREE.MeshStandardMaterial({
            color: 0x222222,
            metalness: 0.1,
            roughness: 0.9,
            transparent: true,
            opacity: 0.8
        });
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position at the back surface of the pendant
        // The pendant is rotated -90 degrees around X, so Z becomes Y in world space
        // Position the engraving on the back surface (negative Y after rotation)
        mesh.position.set(0, -this.pendantThickness - fontHeight * 0.2, 0);
        mesh.rotation.x = Math.PI;  // 180 degrees around X to flip vertically
        mesh.rotation.y = Math.PI;  // 180 degrees around Y to flip horizontally
        mesh.rotation.z = 0;        // No Z rotation needed
        
        this.scene.add(mesh);
        this.engravingMesh = mesh;
        console.log('Engraving mesh created and positioned at back surface');
        console.log('Engraving mesh position:', mesh.position, 'rotation:', mesh.rotation);
    }
    
    // Cleanup method for proper disposal
    dispose() {
        // Remove view preset container
        if (this.viewPresetContainer && this.viewPresetContainer.parentNode) {
            this.viewPresetContainer.parentNode.removeChild(this.viewPresetContainer);
        }
        
        // Remove cube renderer
        if (this.cubeRenderer && this.cubeRenderer.domElement && this.cubeRenderer.domElement.parentNode) {
            this.cubeRenderer.domElement.parentNode.removeChild(this.cubeRenderer.domElement);
            this.cubeRenderer.dispose();
        }
        
        // Dispose of geometries and materials
        if (this.heightfield) {
            this.heightfield.geometry.dispose();
            this.heightfield.material.dispose();
        }
        
        if (this.jumpring) {
            this.jumpring.geometry.dispose();
            this.jumpring.material.dispose();
        }
        
        if (this.engravingMesh) {
            this.engravingMesh.geometry.dispose();
            this.engravingMesh.material.dispose();
        }
        
        // Dispose of renderer
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// Initialize the viewer
new HeightfieldViewer(); 