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

// OpenAI API configuration
// AI image generation is handled through the backend proxy for security
// No API key needed in frontend - it's handled securely on the server

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
const BACKEND_URL = 'https://img2pen-s3-backend.onrender.com'; // S3 backend for file uploads
const OPENAI_BACKEND_URL = 'https://img2pen-openai-backend.onrender.com'; // Replace with your actual Render service URL

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
        // Clamp rx/ry to minimum 1
        const rx = Math.max(w/2 - 3, 1);
        const ry = Math.max(h/2 - 3, 1);
        // White outline
        const ellipseOutline = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipseOutline.setAttribute('cx', w/2);
        ellipseOutline.setAttribute('cy', h/2);
        ellipseOutline.setAttribute('rx', rx);
        ellipseOutline.setAttribute('ry', ry);
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
        ellipse.setAttribute('rx', rx);
        ellipse.setAttribute('ry', ry);
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
    console.log('🖼️ showCropperModal called with:', { imageSrc: imageSrc ? imageSrc.substring(0, 50) + '...' : 'null', cropShape });
    
    const modal = document.getElementById('cropper-modal');
    const img = document.getElementById('cropper-image');
    const confirmBtn = document.getElementById('cropper-confirm');
    const cancelBtn = document.getElementById('cropper-cancel');
    
    console.log('🎯 Modal elements found:', { modal: !!modal, img: !!img, confirmBtn: !!confirmBtn, cancelBtn: !!cancelBtn });
    
    // Toolbar controls
    const aspectSelect = document.getElementById('cropper-aspect');
    const rotateLeftBtn = document.getElementById('cropper-rotate-left');
    const rotateRightBtn = document.getElementById('cropper-rotate-right');
    const flipHBtn = document.getElementById('cropper-flip-h');
    const flipVBtn = document.getElementById('cropper-flip-v');
    const zoomInBtn = document.getElementById('cropper-zoom-in');
    const zoomOutBtn = document.getElementById('cropper-zoom-out');
    const resetBtn = document.getElementById('cropper-reset');
    const fitBtn = document.getElementById('cropper-fit');
    const centerBtn = document.getElementById('cropper-center');
    // Pixel controls
    const xInput = document.getElementById('cropper-x');
    const yInput = document.getElementById('cropper-y');
    const wInput = document.getElementById('cropper-w');
    const hInput = document.getElementById('cropper-h');
    const zoomDisplay = document.getElementById('cropper-zoom');
    const rotDisplay = document.getElementById('cropper-rotation');
    // Live preview
    const previewCanvas = document.getElementById('cropper-preview');
    const previewCtx = previewCanvas.getContext('2d');
    let scaleX = 1, scaleY = 1;

    img.src = imageSrc;
    console.log('🎭 Setting modal display to flex');
    modal.style.display = 'flex';
    if (cropper) { cropper.destroy(); cropper = null; }
    cropper = new Cropper(img, {
        viewMode: 1,
        aspectRatio: (cropShape === 'circle') ? 1 : NaN,
        autoCropArea: 1,
        movable: true,
        zoomable: true,
        scalable: true,
        rotatable: true,
        ready() {
            if (cropShape === 'circle') addCircleOverlay(cropper);
            updatePixelInputs();
            updatePreview();
            updateZoomRotDisplay();
        },
        crop() {
            updatePixelInputs();
            updatePreview();
        },
        zoom() {
            updateZoomRotDisplay();
        },
        rotate() {
            updateZoomRotDisplay();
        }
    });

    // Aspect ratio change
    aspectSelect.onchange = function() {
        let val = aspectSelect.value;
        if (val === 'free') cropper.setAspectRatio(NaN);
        else cropper.setAspectRatio(eval(val));
    };
    // Rotate
    rotateLeftBtn.onclick = function() { cropper.rotate(-90); };
    rotateRightBtn.onclick = function() { cropper.rotate(90); };
    // Flip
    flipHBtn.onclick = function() { scaleX = -scaleX; cropper.scaleX(scaleX); };
    flipVBtn.onclick = function() { scaleY = -scaleY; cropper.scaleY(scaleY); };
    // Zoom
    zoomInBtn.onclick = function() { cropper.zoom(0.1); };
    zoomOutBtn.onclick = function() { cropper.zoom(-0.1); };
    // Reset
    resetBtn.onclick = function() { cropper.reset(); scaleX = 1; scaleY = 1; };
    // Fit
    fitBtn.onclick = function() { cropper.setCropBoxData({left:0,top:0,width:cropper.getImageData().naturalWidth,height:cropper.getImageData().naturalHeight}); };
    // Center
    centerBtn.onclick = function() {
        const imgData = cropper.getImageData();
        const cropData = cropper.getCropBoxData();
        cropper.setCropBoxData({
            left: imgData.left + (imgData.width - cropData.width) / 2,
            top: imgData.top + (imgData.height - cropData.height) / 2,
            width: cropData.width,
            height: cropData.height
        });
    };
    // Pixel-precise controls
    function updatePixelInputs() {
        const data = cropper.getData(true);
        xInput.value = Math.round(data.x);
        yInput.value = Math.round(data.y);
        wInput.value = Math.round(data.width);
        hInput.value = Math.round(data.height);
    }
    function setCropBoxFromInputs() {
        cropper.setData({
            x: parseInt(xInput.value),
            y: parseInt(yInput.value),
            width: parseInt(wInput.value),
            height: parseInt(hInput.value)
        });
    }
    xInput.onchange = yInput.onchange = wInput.onchange = hInput.onchange = setCropBoxFromInputs;
    // Live preview
    function updatePreview() {
        if (!previewCanvas) return;
        const canvas = cropper.getCroppedCanvas({width:250,height:250});
        previewCtx.clearRect(0,0,250,250);
        if (canvas && canvas.width > 0 && canvas.height > 0) previewCtx.drawImage(canvas,0,0,250,250);
    }
    // Zoom/rotation display
    function updateZoomRotDisplay() {
        const imgData = cropper.getImageData();
        const rot = cropper.getData().rotate || 0;
        zoomDisplay.textContent = Math.round(imgData.scaleX * 100) + '%';
        rotDisplay.textContent = Math.round(rot) + '°';
    }

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
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.controls = null;
        this.heightfield = null;
        this.lights = {};
        this.currentObjectType = 'circular-pendant';
        this.aspectLocked = true;
        this.imageTexture = null;
        this.originalImageDataUrl = null;
        
        // Initialize missing properties
        this.heightfieldData = null;
        this.jumpring = null;
        this.grid = null;
        this.redLayer = null;
        this.isRotating = false;
        this.rotationSpeed = 0.01;
        this.pendantDiameter = 25;
        this.pendantWidth = 25;
        this.pendantHeight = 25;
        this.pendantThickness = 2;
        this.borderThickness = 1.0;
        this.jumpringOffset = { x: 0, y: 0, z: -15 };
        this.imageTransform = {
            offsetX: 0,
            offsetY: 0,
            scale: 1,
            rotation: 0
        };
        
        // Text box system
        this.textBoxes = [];
        this.nextTextBoxId = 1;
        this.textBoxCounter = 0;
        this.font = null;
        this.engravingFont = null;
        this.fontCache = {};
        this.defaultFontName = 'helvetiker';
        
        // Enhanced lighting properties
        this.envMapLoaded = false;
        
        // Webcam experimental feature
        this.webcamActive = false;
        this.webcamStream = null;
        this.webcamVideo = null;
        this.webcamCanvas = null;
        this.webcamContext = null;
        this.webcamAnimationFrame = null;
        this.webcamProcessingInterval = null;
        
        this.init();
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

        // Setup camera - angled view to show pendant standing upright on platform
        this.camera.position.set(25, 15, 35);
        this.camera.lookAt(0, 0, 0);
        
        // Store default camera position for reset functionality
        this.defaultCameraPosition = new THREE.Vector3(25, 15, 35);

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

        // Setup event listeners and UI controls
        this.setupEventListeners();
        this.setupUIControls();

        // Start animation loop
        this.animate();

        // Add watermark functionality after scene setup
        this.addWatermark();
    }

    // Add watermark functionality as a class method
    addWatermark() {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('./foreverAndEverJewelry.png', (texture) => {
            console.log('Watermark texture loaded successfully');
            
            // Create watermark material with transparency
            const watermarkMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                    transparent: true,
                opacity: 0.4, // Semi-transparent
                alphaTest: 0.1,
                    side: THREE.DoubleSide,
                depthWrite: false, // Prevent depth issues
                depthTest: false   // Always render on top
            });
            
            // Create plane geometry for the watermark
            const watermarkGeometry = new THREE.PlaneGeometry(6, 3); // Smaller size
            const watermarkMesh = new THREE.Mesh(watermarkGeometry, watermarkMaterial);
            
            // Position watermark in bottom-right corner of the view
            watermarkMesh.position.set(12, -8, 10); // Adjusted position
            watermarkMesh.name = 'watermark';
            watermarkMesh.renderOrder = 999; // Render last
            
            // Add to scene
            this.scene.add(watermarkMesh);
            console.log('Watermark added to scene');
        }, undefined, (err) => {
            console.error('Error loading watermark:', err);
        });
    }
}