import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { BoxGeometry, MeshBasicMaterial, Mesh, Scene as ThreeScene, PerspectiveCamera, WebGLRenderer, Raycaster, Vector2 } from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { CSG } from 'three/addons/objects/CSG.js';

// Constants for physical dimensions
const MAX_DEPTH = 0.6; // mm (adjusted so total with rim = 2mm)
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
    'gold-14k': {
        color: 0xE7C76E,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 1.0
    },
    'rose-gold-14k': {
        color: 0xE8B4A0,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 1.0
    },
    'stl': {
        color: 0xE8E8E8, // Use sterling silver color for STL preview
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
// Use local proxy for mobile devices to avoid CORS/network issues
const isMobileDevice = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
const isLocalDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('192.168.');

const BACKEND_URL = isLocalDevelopment
    ? window.location.origin  // Use local proxy for all local development
    : 'https://img2pen-s3-backend.onrender.com'; // Use direct URL for production

const OPENAI_BACKEND_URL = isLocalDevelopment
    ? window.location.origin  // Use local proxy for all local development
    : 'https://img2pen-openai-backend.onrender.com'; // Use direct URL for production

console.log('🔧 Backend URL configured:', {
    isMobile: isMobileDevice,
    isLocal: isLocalDevelopment,
    backendUrl: OPENAI_BACKEND_URL
});

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
    status.textContent = 'Processing image...';
    bar.style.width = '0%';
    // No delays - processing happens immediately
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
        this.camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.controls = null;
        this.heightfield = null;
        this.heightfieldData = null;
        this.originalImageDataUrl = null;
        this.jumpring = null;
        this.grid = null;
        this.redLayer = null;
        this.lights = {};
        this.isRotating = false;
        this.rotationSpeed = 0.01;
        this.currentObjectType = 'circular-pendant';
        this.pendantDiameter = 25;
        this.pendantWidth = 25;
        this.pendantHeight = 25;
        this.pendantThickness = 1.0; // Base thickness (total will be 2mm: 1mm base + 1mm above)
        this.borderThickness = 1.0;
        this.aspectLocked = true;
        this.jumpringOffset = { x: 0, y: 0, z: -15 };
        this.imageTransform = {
            offsetX: 0,
            offsetY: 0,
            scale: 1,
            rotation: 0
        };
        
        // Text box system
        this.textBoxes = [];
        this.textBoxCounter = 0;
        this.fontCache = {};
        this.defaultFontName = 'helvetiker';
        
        // Sprue text system
        this.sprueTextObjects = [];
        
        // Load default font
        this.loadEngravingFont(this.defaultFontName);
        
        this.init();
        this.initializeRulerOverlay();
        this.setupRulerToggle();
    }

    init() {
        // Setup renderer with improved quality settings
        const canvasContainer = document.getElementById('canvas-container');
        this.renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        this.renderer.setClearColor(0x333333);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        canvasContainer.appendChild(this.renderer.domElement);

        // Setup camera - angled view to show pendant standing upright on platform (20% closer)
        this.camera.position.set(26.4, 16, 37.6);
        this.camera.lookAt(0, 0, 0);
        
        // Store default camera position for reset functionality
        this.defaultCameraPosition = new THREE.Vector3(26.4, 16, 37.6);

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        
        // Lock the pendant in place - disable panning but allow rotation
        this.controls.enablePan = false;      // Disable panning (two-finger drag)
        this.controls.enableRotate = true;    // Enable rotation (single-finger drag)
        this.controls.enableZoom = false;     // Zoom locked - users cannot zoom in/out

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
        this.directionalLight.shadow.camera.near = 0.1;
        this.directionalLight.shadow.camera.far = 100;
        this.directionalLight.shadow.camera.left = -30;
        this.directionalLight.shadow.camera.right = 30;
        this.directionalLight.shadow.camera.top = 30;
        this.directionalLight.shadow.camera.bottom = -30;
        this.directionalLight.shadow.bias = -0.001;
        this.directionalLight.shadow.radius = 1.0;
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
        
        // Setup back to upload button
        const backButton = document.getElementById('back-to-upload');
        if (backButton) {
            backButton.addEventListener('click', () => {
                // Hide UI menu
                document.getElementById('ui-menu').style.display = 'none';
                // Scroll to upload container
                document.getElementById('upload-container').scrollIntoView({ behavior: 'smooth' });
                // Reset scene
                this.resetScene();
            });
        }

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
            console.log('File input change event triggered');
            const file = e.target.files[0];
            console.log('Selected file:', file);
            if (file) {
                console.log('File type:', file.type);
                // Start S3 upload in background (non-blocking)
                uploadImageToS3(file).then(uploadResult => {
                    console.log('✅ Background image upload completed:', uploadResult);
                }).catch(error => {
                    console.error('❌ Background image upload failed:', error);
                });
                
                // Immediately proceed with local processing
                const reader = new FileReader();
                reader.onload = (ev) => {
                    console.log('FileReader onload triggered');
                    this.originalImageDataUrl = ev.target.result;
                    console.log('About to show cropper modal');
                    showCropperModal(ev.target.result, (croppedBlob) => {
                        console.log('Cropper modal callback triggered');
                        this.processImage(croppedBlob);
                    }, null, this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' ? 'circle' : 'rect');
                };
                console.log('About to read file as data URL');
                reader.readAsDataURL(file);
            } else {
                console.log('No file selected');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            const canvasContainer = document.getElementById('canvas-container');
            if (canvasContainer && canvasContainer.style.display !== 'none') {
                // Use the full container dimensions for the 3D scene
                const containerWidth = canvasContainer.clientWidth;
                const containerHeight = canvasContainer.clientHeight;
                
                // Update camera and renderer with container dimensions
                this.camera.aspect = containerWidth / containerHeight;
            this.camera.updateProjectionMatrix();
                this.renderer.setSize(containerWidth, containerHeight);
            }
        });

        // Handle prompt submit for AI image generation
        const promptSubmitBtn = document.getElementById('prompt-submit');
        const promptInput = document.getElementById('prompt-input');
        console.log('🔧 Looking for AI generation elements:', {
            promptSubmitBtn: !!promptSubmitBtn,
            promptInput: !!promptInput,
            promptSubmitBtnElement: promptSubmitBtn,
            promptInputElement: promptInput
        });
        
        if (promptSubmitBtn && promptInput) {
            console.log('✅ Found AI generation elements, setting up event listeners');
            // Add mobile debugging info
            const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
            console.log('🔧 AI Generation Setup:', {
                isMobile,
                hasButton: !!promptSubmitBtn,
                hasInput: !!promptInput,
                openAiBackendUrl: OPENAI_BACKEND_URL,
                networkOnline: navigator.onLine
            });
            
            promptSubmitBtn.addEventListener('click', async () => {
                console.log('🔴 PROMPT SUBMIT BUTTON CLICKED!');
                const prompt = promptInput.value.trim();
                console.log('🎯 Generate button clicked:', { prompt, length: prompt.length });
                
                if (!prompt) {
                    console.log('❌ No prompt provided, showing notification');
                    showNotification('Please enter a prompt to generate an image', 'error');
                    return;
                }

                try {
                    console.log('🎨 Starting image generation with prompt:', prompt);
                    console.log('🎨 About to call generateImageWithOpenAI...');
                    const imageDataUrl = await generateImageWithOpenAI(prompt);
                    console.log('✅ Image generated, data URL length:', imageDataUrl ? imageDataUrl.length : 'null');
                    
                    if (imageDataUrl) {
                        // Convert data URL to blob for S3 upload in background (non-blocking)
                        fetch(imageDataUrl).then(response => response.blob()).then(imageBlob => {
                            uploadDalleImageToS3(imageBlob, prompt).then(uploadResult => {
                                console.log('✅ Background DALL-E image upload completed:', uploadResult);
                            }).catch(error => {
                                console.error('❌ Background DALL-E image upload failed:', error);
                            });
                        });
                        
                        // Use the data URL directly for cropper
                        console.log('📷 About to show cropper modal with image data');
                        this.originalImageDataUrl = imageDataUrl;
                        showCropperModal(imageDataUrl, (croppedBlob) => {
                            console.log('✂️ Cropper callback triggered with blob size:', croppedBlob.size);
                            this.processImage(croppedBlob);
                        }, null, this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' ? 'circle' : 'rect');
                        
                        // Clear the prompt input
                        promptInput.value = '';
                        showNotification('Image generated successfully! Please crop it to continue.', 'success');
                    } else {
                        console.error('❌ Image generation returned null/empty data URL');
                        showNotification('Failed to generate image. Please try again.', 'error');
                    }
                } catch (error) {
                    console.error('Error in prompt submit:', error);
                    showNotification('Failed to generate image. Please try again.', 'error');
                }
            });

            // Allow Enter key to submit
            promptInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    promptSubmitBtn.click();
                }
            });
        } else {
            console.error('❌ AI generation elements not found:', {
                promptSubmitBtn: !!promptSubmitBtn,
                promptInput: !!promptInput,
                allElementsWithPrompt: document.querySelectorAll('[id*="prompt"]'),
                allButtons: document.querySelectorAll('button')
            });
        }
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
        const objectType = document.getElementById('object-type');
        if (objectType) {
            objectType.addEventListener('change', (e) => {
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
        }

        // Camera controls
        const fov = document.getElementById('fov');
        if (fov) {
            fov.addEventListener('input', (e) => {
                this.camera.fov = parseFloat(e.target.value);
                this.camera.updateProjectionMatrix();
            });
        }

        const cameraDistance = document.getElementById('camera-distance');
        if (cameraDistance) {
            // Camera distance/zoom is locked - slider disabled
            cameraDistance.disabled = true;
            cameraDistance.style.opacity = '0.5';
            cameraDistance.style.cursor = 'not-allowed';
        }

        // Rotate toggle
        const rotateToggle = document.getElementById('rotate-toggle');
        this.isRotating = false;
        if (rotateToggle) {
            rotateToggle.addEventListener('change', (e) => {
                this.isRotating = rotateToggle.checked;
            });
        }

        // Scene settings
        const lightIntensity = document.getElementById('light-intensity');
        if (lightIntensity) {
            lightIntensity.addEventListener('input', (e) => {
                this.directionalLight.intensity = parseFloat(e.target.value);
            });
        }

        const materialColor = document.getElementById('material-color');
        if (materialColor) {
            materialColor.addEventListener('input', (e) => {
                if (this.heightfield) {
                    this.heightfield.material.color.set(e.target.value);
                }
            });
        }

        const materialShine = document.getElementById('material-shine');
        if (materialShine) {
            materialShine.addEventListener('input', (e) => {
                if (this.heightfield) {
                    this.heightfield.material.shininess = parseFloat(e.target.value);
                }
            });
        }

        // Image position controls
        const imageOffsetX = document.getElementById('image-offset-x');
        if (imageOffsetX) {
            imageOffsetX.addEventListener('input', (e) => {
                this.imageTransform.offsetX = parseFloat(e.target.value);
                this.updateImagePosition();
            });
        }

        const imageOffsetY = document.getElementById('image-offset-y');
        if (imageOffsetY) {
            imageOffsetY.addEventListener('input', (e) => {
                this.imageTransform.offsetY = parseFloat(e.target.value);
                this.updateImagePosition();
            });
        }

        const imageScale = document.getElementById('image-scale');
        if (imageScale) {
            imageScale.addEventListener('input', (e) => {
                this.imageTransform.scale = parseFloat(e.target.value);
                this.updateImagePosition();
            });
        }

        const imageRotation = document.getElementById('image-rotation');
        if (imageRotation) {
            imageRotation.addEventListener('input', (e) => {
                this.imageTransform.rotation = parseFloat(e.target.value);
                this.updateImagePosition();
            });
        }

        // Metal type controls
        const metalType = document.getElementById('metal-type');
        if (metalType) {
            metalType.addEventListener('change', (e) => {
                this.updateMetalMaterial(e.target.value);
            });
        }

        const metalFinish = document.getElementById('metal-finish');
        if (metalFinish) {
            metalFinish.addEventListener('change', (e) => {
                this.updateMetalFinish(e.target.value);
            });
        }

        // Jumpring controls
        const jumpringSize = document.getElementById('jumpring-size');
        if (jumpringSize) {
            jumpringSize.addEventListener('change', (e) => {
                this.updateJumpring(e.target.value);
            });
        }

        const jumpringPosition = document.getElementById('jumpring-position');
        if (jumpringPosition) {
            jumpringPosition.addEventListener('change', (e) => {
                this.updateJumpringPosition(e.target.value);
            });
        }

        // Lighting controls
        const ambientIntensity = document.getElementById('ambient-intensity');
        if (ambientIntensity) {
            ambientIntensity.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const valueElement = document.getElementById('ambient-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
                if (this.lights && this.lights.ambient) {
                    this.lights.ambient.intensity = value;
                }
            });
        }
        
        const directionalIntensity = document.getElementById('directional-intensity');
        if (directionalIntensity) {
            directionalIntensity.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const valueElement = document.getElementById('directional-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
                if (this.lights && this.lights.directional) {
                    this.lights.directional.intensity = value;
                }
            });
        }

        // Add controls for new lighting system with value updates
        const fillLightControl = document.getElementById('fill-light-intensity');
        if (fillLightControl) {
            fillLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const valueElement = document.getElementById('fill-light-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
                if (this.lights && this.lights.fill) {
                    this.lights.fill.intensity = value;
                }
            });
        }

        const rimLightControl = document.getElementById('rim-light-intensity');
        if (rimLightControl) {
            rimLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const valueElement = document.getElementById('rim-light-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
                if (this.lights && this.lights.rim) {
                    this.lights.rim.intensity = value;
                }
            });
        }

        const accentLightControl = document.getElementById('accent-light-intensity');
        if (accentLightControl) {
            accentLightControl.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                const valueElement = document.getElementById('accent-light-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
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
                const valueElement = document.getElementById('env-map-intensity-value');
                if (valueElement) {
                    valueElement.textContent = value.toFixed(2);
                }
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



        // Reset View button
        const resetView = document.getElementById('reset-view');
        if (resetView) {
            resetView.addEventListener('click', () => {
                this.camera.position.copy(this.defaultCameraPosition);
                this.camera.lookAt(0, 0, 0);
                this.controls.target.set(0, 0, 0);
                this.controls.update();
            });
        }
        
        // Screenshot button
        const screenshot = document.getElementById('screenshot');
        if (screenshot) {
            screenshot.addEventListener('click', () => {
                this.renderer.render(this.scene, this.camera);
                const dataURL = this.renderer.domElement.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = dataURL;
                a.download = 'pendant.png';
                a.click();
            });
        }

        // Replace File button
        const replaceFile = document.getElementById('replace-file');
        if (replaceFile) {
            replaceFile.addEventListener('click', () => {
                // Reset the scene to initial state
                this.resetScene();
                // Show the drop zone again
                const dropZone = document.getElementById('drop-zone');
                if (dropZone) {
                    dropZone.classList.remove('hidden');
                }
                // Clear the file input
                const fileInput = document.getElementById('file-input');
                if (fileInput) {
                    fileInput.value = '';
                }
                // Show notification
                showNotification('Ready for new image upload', 'info');
            });
        }



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

        // Debug Export STL button
        const debugExportStlBtn = document.getElementById('debug-export-stl-btn');
        if (debugExportStlBtn) {
            debugExportStlBtn.addEventListener('click', () => {
                console.log('Debug Export STL button clicked');
                
                // Generate STL with all objects including sprue text
                const exporter = new STLExporter();
                const group = new THREE.Group();
                
                // Add main pendant
                if (this.heightfield) {
                    console.log('Adding heightfield to STL export');
                    group.add(this.heightfield.clone());
                }
                
                // Add jumpring if it exists
                if (this.jumpring) {
                    console.log('Adding jumpring to STL export');
                    group.add(this.jumpring.clone());
                }
                
                // Add sprue text objects
                if (this.sprueTextObjects && this.sprueTextObjects.length > 0) {
                    console.log('Adding sprue text objects to STL export:', this.sprueTextObjects.length);
                    this.sprueTextObjects.forEach((textObj, index) => {
                        group.add(textObj.clone());
                    });
                }
                
                // Add platform/ground plane
                const groundPlane = this.scene.children.find(child => child.userData && child.userData.isGroundPlane);
                if (groundPlane) {
                    console.log('Adding ground plane to STL export');
                    group.add(groundPlane.clone());
                }
                
                console.log('Total objects in STL export:', group.children.length);
                
                try {
                    const stlString = exporter.parse(group);
                    
                    // Create download link
                    const blob = new Blob([stlString], { type: 'application/octet-stream' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `pendant-debug-${Date.now()}.stl`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    console.log('STL file exported successfully');
                    showNotification('STL file exported successfully!', 'success');
                } catch (error) {
                    console.error('Error exporting STL:', error);
                    showNotification('Error exporting STL file', 'error');
                }
            });
        }

        const highlightColorInput = document.getElementById('highlight-layer-color');
        if (highlightColorInput) {
            highlightColorInput.addEventListener('input', (e) => {
                if (this.redLayer) {
                    this.redLayer.material.color.set(e.target.value);
                }
            });
        }

        // Antiquing controls
        const antiquingSlider = document.getElementById('antiquing-amount');
        const antiquingValue = document.getElementById('antiquing-amount-value');
        if (antiquingSlider && antiquingValue) {
            antiquingSlider.addEventListener('input', (e) => {
                antiquingValue.textContent = e.target.value;
                if (this.heightfieldData) {
                    this.createHeightfieldMesh(this.heightfieldData);
                }
            });
        }

        // Text box controls
        const addTextBoxBtn = document.getElementById('add-text-box');
        if (addTextBoxBtn) {
            addTextBoxBtn.addEventListener('click', () => {
                this.addTextBox();
            });
        }
    }

    async processImage(file, autoCrop = false, showLoading = true, uploadToS3 = true) {
        // Store uploadToS3 flag for use in other functions
        this.shouldUploadToS3 = uploadToS3;
        
        if (showLoading) {
            showLoadingOverlay();
        }
        // Process immediately - no delay
        const image = await this.loadImage(file);
        
        // If auto-crop is enabled, crop slightly lower than the top portion
        if (autoCrop) {
            console.log('🖼️ Auto-cropping image (slightly lower)');
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Start crop from 10% down from the top, crop 50% of the image height
            const cropStartY = Math.floor(image.height * 0.1); // Start 10% down from top
            const cropHeight = Math.floor(image.height * 0.5); // Crop 50% of the height
            
            canvas.width = image.width;
            canvas.height = cropHeight;
            
            // Draw from slightly lower position
            ctx.drawImage(image, 0, cropStartY, image.width, cropHeight, 0, 0, canvas.width, canvas.height);
            
            // Convert back to image
            const croppedImage = new Image();
            croppedImage.src = canvas.toDataURL();
            await new Promise(resolve => {
                croppedImage.onload = resolve;
            });
            
            console.log('✅ Image auto-cropped to top portion');
            const heightfieldData = this.generateHeightfieldData(croppedImage);
            this.createHeightfieldMesh(heightfieldData);
        } else {
            const heightfieldData = this.generateHeightfieldData(image);
            this.createHeightfieldMesh(heightfieldData);
            
            // Hide demo message when user uploads their own image (not for initial load)
            if (!autoCrop) {
                const demoMessage = document.getElementById('demo-message');
                if (demoMessage) {
                    demoMessage.style.display = 'none';
                }
            }
        }
        // Show the canvas container when image is processed
        const canvasContainer = document.getElementById('canvas-container');
        
        // Use the full container dimensions for the 3D scene
        const containerWidth = canvasContainer.clientWidth;
        const containerHeight = canvasContainer.clientHeight;
        
        console.log('Container dimensions:', containerWidth, 'x', containerHeight);
        
        // Set explicit dimensions to ensure proper sizing
        const targetWidth = Math.max(containerWidth, 1200);
        const targetHeight = Math.max(containerHeight, 600);
        
        console.log('Target dimensions:', targetWidth, 'x', targetHeight);
        
        // Resize renderer to match canvas container dimensions
        const isMobileDevice = window.innerWidth <= 768;
        
        if (isMobileDevice) {
            // For mobile, use the mobile container dimensions
            const mobileContainer = document.getElementById('mobile-canvas-container');
            if (mobileContainer) {
                const mobileWidth = mobileContainer.clientWidth;
                const mobileHeight = mobileContainer.clientHeight;
                console.log('Mobile container dimensions:', mobileWidth, 'x', mobileHeight);
                
                // Ensure minimum dimensions
                const finalWidth = Math.max(mobileWidth, 300);
                const finalHeight = Math.max(mobileHeight, 300);
                
                this.renderer.setSize(finalWidth, finalHeight);
                this.renderer.domElement.style.width = '100%';
                this.renderer.domElement.style.height = '100%';
                this.renderer.domElement.style.display = 'block';
                this.camera.aspect = finalWidth / finalHeight;
                this.camera.updateProjectionMatrix();
                
                console.log('Mobile renderer resized to:', finalWidth, 'x', finalHeight);
            } else {
                console.error('Mobile container not found');
            }
        } else {
            // For desktop, use the original logic
            this.renderer.setSize(targetWidth, targetHeight);
            this.renderer.domElement.style.width = '100%';
            this.renderer.domElement.style.height = '100%';
            this.renderer.domElement.style.display = 'block';
            this.camera.aspect = containerWidth / containerHeight;
            this.camera.updateProjectionMatrix();
        }
        
        // Show the UI menu when canvas is visible (only on desktop)
        const isMobile = window.innerWidth <= 768;
        const uiMenu = document.getElementById('ui-menu');
        
        if (uiMenu) {
            if (!isMobile) {
                console.log('Positioning control panel in upper right corner...');
                // Force positioning to upper right corner with !important
                uiMenu.setAttribute('style', `
                    position: absolute !important;
                    top: 80px !important;
                    right: 80px !important;
                    left: auto !important;
                    width: 350px !important;
                    height: 80vh !important;
                    z-index: 1000 !important;
                    display: block !important;
                    background: rgba(255,255,255,0.95) !important;
                    padding: 20px !important;
                    overflow-y: auto !important;
                    cursor: move !important;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
                    border-radius: 12px !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                `);
                console.log('Control panel positioned! Current styles:', uiMenu.style.cssText);
                // Drag functionality is already initialized in DOMContentLoaded
            } else {
                console.log('Mobile detected - keeping UI menu hidden');
                // Ensure UI menu is hidden on mobile
                uiMenu.setAttribute('style', `
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    z-index: -1 !important;
                `);
            }
        } else {
            console.warn('UI menu element not found, skipping positioning');
        }
        // Scroll to the scene container
        document.getElementById('scene-container').scrollIntoView({ behavior: 'smooth' });
        
        // Hide loading overlay immediately after processing completes
        if (showLoading) {
            hideLoadingOverlay();
        }
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

    createBasePendantGeometry() {
        // Create a simple cylinder geometry for the base pendant
        const radius = this.pendantDiameter / 2;
        const height = this.pendantThickness;
        const segments = 32; // High resolution for smooth appearance
        
        const baseGeometry = new THREE.CylinderGeometry(radius, radius, height, segments);
        
        // Rotate to stand upright (Three.js cylinders are created along Y axis)
        baseGeometry.rotateX(Math.PI / 2);
        
        return baseGeometry;
    }

    createBooleanUnionWithJumpring(baseGeometry) {
        // For now, just return the original geometry
        // The jumpring will be created separately in the geometry creation process
        console.log('Boolean union with jumpring - returning original geometry');
        return baseGeometry;
    }

    validateMeshWatertight(geometry) {
        // Check for watertight mesh by analyzing edge connectivity
        const positions = geometry.attributes.position.array;
        const indices = geometry.index.array;
        
        // Create edge map to detect open edges
        const edgeMap = new Map();
        
        for (let i = 0; i < indices.length; i += 3) {
            const a = indices[i];
            const b = indices[i + 1];
            const c = indices[i + 2];
            
            // Check each edge of the triangle
            this.addEdgeToMap(edgeMap, a, b);
            this.addEdgeToMap(edgeMap, b, c);
            this.addEdgeToMap(edgeMap, c, a);
        }
        
        // Count open edges (edges that appear only once)
        let openEdges = 0;
        for (const [edge, count] of edgeMap) {
            if (count === 1) {
                openEdges++;
            }
        }
        
        console.log(`Mesh analysis: ${openEdges} open edges found`);
        
        if (openEdges > 0) {
            console.error(`❌ Mesh has ${openEdges} open edges - not watertight!`);
            return false;
        }
        
        return true;
    }
    
    addEdgeToMap(edgeMap, v1, v2) {
        // Create consistent edge key (smaller index first)
        const edgeKey = v1 < v2 ? `${v1}-${v2}` : `${v2}-${v1}`;
        edgeMap.set(edgeKey, (edgeMap.get(edgeKey) || 0) + 1);
    }

    fixMeshTopology(geometry) {
        console.log('🔧 Applying mesh topology fixes...');
        
        // Step 1: Merge duplicate vertices (vertex welding)
        const tolerance = 0.001; // 1mm tolerance for merging
        const mergedGeometry = this.mergeVertices(geometry, tolerance);
        
        // Step 2: Remove degenerate triangles
        const cleanGeometry = this.removeDegenerateTriangles(mergedGeometry);
        
        // Step 3: Fix face normals consistency
        cleanGeometry.computeVertexNormals();
        
        console.log('✅ Mesh topology fixes applied');
        return cleanGeometry;
    }

    mergeVertices(geometry, tolerance = 0.001) {
        // Create a map of unique vertices
        const vertices = [];
        const indices = [];
        const uvs = [];
        const colors = [];
        
        const positions = geometry.attributes.position.array;
        const originalIndices = geometry.index.array;
        const originalUVs = geometry.attributes.uv?.array;
        const originalColors = geometry.attributes.color?.array;
        
        const vertexMap = new Map();
        const newIndices = [];
        
        for (let i = 0; i < originalIndices.length; i++) {
            const oldIndex = originalIndices[i];
            const x = positions[oldIndex * 3];
            const y = positions[oldIndex * 3 + 1];
            const z = positions[oldIndex * 3 + 2];
            
            // Create a key for this vertex position
            const key = `${Math.round(x / tolerance)}_${Math.round(y / tolerance)}_${Math.round(z / tolerance)}`;
            
            if (vertexMap.has(key)) {
                // Reuse existing vertex
                newIndices.push(vertexMap.get(key));
            } else {
                // Add new unique vertex
                const newIndex = vertices.length / 3;
                vertices.push(x, y, z);
                
                if (originalUVs) {
                    uvs.push(originalUVs[oldIndex * 2], originalUVs[oldIndex * 2 + 1]);
                }
                
                if (originalColors) {
                    colors.push(originalColors[oldIndex * 3], originalColors[oldIndex * 3 + 1], originalColors[oldIndex * 3 + 2]);
                }
                
                vertexMap.set(key, newIndex);
                newIndices.push(newIndex);
            }
        }
        
        console.log(`Vertex welding: ${positions.length / 3} → ${vertices.length / 3} vertices`);
        
        // Create new geometry with merged vertices
        const newGeometry = new THREE.BufferGeometry();
        newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        newGeometry.setIndex(newIndices);
        
        if (uvs.length > 0) {
            newGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        }
        
        if (colors.length > 0) {
            newGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        }
        
        return newGeometry;
    }

    removeDegenerateTriangles(geometry) {
        const positions = geometry.attributes.position.array;
        const indices = geometry.index.array;
        const uvs = geometry.attributes.uv?.array;
        const colors = geometry.attributes.color?.array;
        
        const validIndices = [];
        let degenerateCount = 0;
        
        for (let i = 0; i < indices.length; i += 3) {
            const a = indices[i];
            const b = indices[i + 1];
            const c = indices[i + 2];
            
            // Check if triangle is degenerate (has duplicate vertices)
            if (a !== b && b !== c && c !== a) {
                validIndices.push(a, b, c);
            } else {
                degenerateCount++;
            }
        }
        
        console.log(`Removed ${degenerateCount} degenerate triangles`);
        
        // Create new geometry without degenerate triangles
        const newGeometry = new THREE.BufferGeometry();
        newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        newGeometry.setIndex(validIndices);
        
        if (uvs) {
            newGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        }
        
        if (colors) {
            newGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        }
        
        return newGeometry;
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


                const diameter = this.pendantDiameter;
                const effectiveRadius = (diameter / 2) - this.borderThickness; // Inner radius for design
                const outerRadius = diameter / 2; // Outer radius including border
                const radius = effectiveRadius; // For backward compatibility with existing code
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
                        const px = (x / widthSegments - 0.5) * (effectiveRadius * 2);
                        const py = (y / heightSegments - 0.5) * (effectiveRadius * 2);
                        const dist = Math.sqrt(px * px + py * py);
                        let z = 0;
                        let u = (px / effectiveRadius + 1) / 2;
                        let v = (py / effectiveRadius + 1) / 2;
                        if (dist <= effectiveRadius) {
                            const pixelX = Math.floor(u * (heightfieldData.width - 1));
                            const pixelY = heightfieldData.height - 1 - Math.floor(v * (heightfieldData.height - 1));
                            const pixelIndex = (pixelY * heightfieldData.width + pixelX) * 4;
                            const gray = (heightfieldData.data[pixelIndex] * 0.299 +
                                heightfieldData.data[pixelIndex + 1] * 0.587 +
                                heightfieldData.data[pixelIndex + 2] * 0.114) / 255;
                            z = gray * MAX_DEPTH;
                        }
                        grid.push({ px, py, z, u, v, inCircle: dist <= effectiveRadius });
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
                // 3. Side wall - connect relief edge to bottom edge
                // For each edge point, create wall vertices that will connect to existing geometry
                const wallTopStartIdx = allPositions.length / 3;
                
                // Add wall vertices - top edge matches relief edge points
                for (let i = 0; i < edgePoints.length; ++i) {
                    allPositions.push(edgePoints[i].x, edgePoints[i].y, edgePoints[i].z);
                    allUVs.push(0, 0);
                }
                
                // Create wall faces connecting to bottom disc edge
                for (let i = 0; i < edgePoints.length; ++i) {
                    const next = (i + 1) % edgePoints.length;
                    
                    const wallTopCurrent = wallTopStartIdx + i;
                    const wallTopNext = wallTopStartIdx + next;
                    const bottomCurrent = bottomStartIdx + 1 + i;  // +1 to skip center
                    const bottomNext = bottomStartIdx + 1 + next;
                    
                    // Create wall quad (two triangles)
                    allIndices.push(wallTopCurrent, bottomCurrent, wallTopNext);
                    allIndices.push(wallTopNext, bottomCurrent, bottomNext);
                }
                // 4. Border (rim) - extend to exactly outerRadius for 25mm total diameter
                const rimStartIdx = allPositions.length / 3;
                const border = this.borderThickness;
                // Find maxZ of the relief
                let maxZ = -Infinity;
                for (let i = 0; i < grid.length; ++i) {
                    if (grid[i].inCircle && grid[i].z > maxZ) maxZ = grid[i].z;
                }
                const rimTopZ = maxZ + 0.4; // Rim 0.4mm above relief for proper recess
                for (let i = 0; i < edgePoints.length; ++i) {
                    const next = (i + 1) % edgePoints.length;
                    // Outward normal
                    const dx = edgePoints[i].x;
                    const dy = edgePoints[i].y;
                    const len = Math.sqrt(dx * dx + dy * dy);
                    const nx = dx / len;
                    const ny = dy / len;
                    // Outer edge points - extend to exactly outerRadius for 25mm total diameter
                    const ox1 = nx * outerRadius;
                    const oy1 = ny * outerRadius;
                    const nx2 = edgePoints[next].x / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2);
                    const ny2 = edgePoints[next].y / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2);
                    const ox2 = nx2 * outerRadius;
                    const oy2 = ny2 * outerRadius;
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
                if (this.currentObjectType === 'circular-pendant') {
                    // For upright circular pendant, no rotation needed
                    redLayerMesh.rotation.x = 0;
                    redLayerMesh.position.y = this.pendantThickness / 2;
                } else {
                    // For other shapes, keep original flat rotation
                    redLayerMesh.rotation.x = -Math.PI / 2;
                }
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
                // Create jumpring with relief applied
                const jumpringRadius = 2;
                const jumpringWireThickness = 0.5;
                const jumpringSegments = 32;
                const jumpringTubularSegments = 64;
                
                // Create jumpring vertices with relief applied
                const jumpringStartIdx = allPositions.length / 3;
                const jumpringPositions = [];
                const jumpringUVs = [];
                const jumpringColors = [];
                
                for (let i = 0; i <= jumpringSegments; i++) {
                    const u = i / jumpringSegments * Math.PI * 2;
                    for (let j = 0; j <= jumpringTubularSegments; j++) {
                        const v = j / jumpringTubularSegments * Math.PI * 2;
                        
                        // Base jumpring position
                        const baseX = (jumpringRadius + jumpringWireThickness * Math.cos(v)) * Math.cos(u);
                        const baseY = (jumpringRadius + jumpringWireThickness * Math.cos(v)) * Math.sin(u) + this.pendantThickness / 2 + jumpringRadius + 11.45;
                        const baseZ = jumpringWireThickness * Math.sin(v);
                        
                        // Apply minimal, consistent relief to the jumpring to avoid kinks
                        const reliefZ = 0.05; // Small constant relief to maintain smooth shape
                        const finalX = baseX;
                        const finalY = baseY;
                        const finalZ = baseZ + reliefZ;
                        
                        jumpringPositions.push(finalX, finalY, finalZ);
                        jumpringUVs.push(i / jumpringSegments, j / jumpringTubularSegments);
                        jumpringColors.push(1.0, 1.0, 1.0); // White for jumpring
                    }
                }
                
                // Add jumpring vertices to existing arrays
                allPositions.push(...jumpringPositions);
                allUVs.push(...jumpringUVs);
                antiquingColorsCirc.push(...jumpringColors);
                
                // Create jumpring indices
                const jumpringIndices = [];
                for (let i = 0; i < jumpringSegments; i++) {
                    for (let j = 0; j < jumpringTubularSegments; j++) {
                        const a = jumpringStartIdx + i * (jumpringTubularSegments + 1) + j;
                        const b = jumpringStartIdx + (i + 1) * (jumpringTubularSegments + 1) + j;
                        const c = jumpringStartIdx + (i + 1) * (jumpringTubularSegments + 1) + j + 1;
                        const d = jumpringStartIdx + i * (jumpringTubularSegments + 1) + j + 1;
                        
                        jumpringIndices.push(a, b, c, a, c, d);
                    }
                }
                
                // Add jumpring indices to existing indices
                allIndices.push(...jumpringIndices);
                
                // SPRUE HIDDEN - Sprue creation code commented out
                /* Add sprue to the side of the pendant - TEST VERSION
                console.log('Adding sprue...');
                const sprueWidth = 6; // 6mm width - reduced by 25% from 8mm
                const sprueLength = 20; // 20mm extension - make it longer
                const sprueHeight = this.pendantThickness;
                
                // Sprue position - make it very visible
                const sprueStartX = effectiveRadius - 0; // Start 5mm inside pendant (moved right by 10 units)
                const sprueStartY = 0; // Center vertically
                const sprueStartZ = .5; // Raise it up 5mm
                
                const sprueStartIdx = allPositions.length / 3;
                console.log('Sprue start index:', sprueStartIdx);
                
                // Create solid box-like sprue (simpler approach)
                const sprueVertices = [
                    // Top face (4 corners)
                    sprueStartX, sprueStartY - sprueWidth/2, sprueStartZ, // 0: Top back-left
                    sprueStartX + sprueLength, sprueStartY - sprueWidth/2, sprueStartZ, // 1: Top front-left
                    sprueStartX + sprueLength, sprueStartY + sprueWidth/2, sprueStartZ, // 2: Top front-right
                    sprueStartX, sprueStartY + sprueWidth/2, sprueStartZ, // 3: Top back-right
                    
                    // Bottom face (4 corners)
                    sprueStartX, sprueStartY - sprueWidth/2, sprueStartZ - sprueHeight, // 4: Bottom back-left
                    sprueStartX + sprueLength, sprueStartY - sprueWidth/2, sprueStartZ - sprueHeight, // 5: Bottom front-left
                    sprueStartX + sprueLength, sprueStartY + sprueWidth/2, sprueStartZ - sprueHeight, // 6: Bottom front-right
                    sprueStartX, sprueStartY + sprueWidth/2, sprueStartZ - sprueHeight, // 7: Bottom back-right
                ];
                
                console.log('Sprue vertices:', sprueVertices);
                
                // Add sprue vertices
                allPositions.push(...sprueVertices);
                
                // Add UVs for sprue vertices
                const sprueUVs = [];
                for (let i = 0; i < sprueVertices.length / 3; i++) {
                    sprueUVs.push(0, 0);
                }
                allUVs.push(...sprueUVs);
                
                // Add colors for sprue - make it red to be very visible
                const sprueColors = [];
                for (let i = 0; i < sprueVertices.length / 3; i++) {
                    sprueColors.push(1.0, 0.0, 0.0); // Red for sprue to make it visible
                }
                antiquingColorsCirc.push(...sprueColors);
                
                // Create solid box indices (standard box geometry)
                const sprueIndices = [
                    // Top face
                    sprueStartIdx + 0, sprueStartIdx + 1, sprueStartIdx + 2,
                    sprueStartIdx + 0, sprueStartIdx + 2, sprueStartIdx + 3,
                    
                    // Bottom face
                    sprueStartIdx + 4, sprueStartIdx + 6, sprueStartIdx + 5,
                    sprueStartIdx + 4, sprueStartIdx + 7, sprueStartIdx + 6,
                    
                    // Front face
                    sprueStartIdx + 1, sprueStartIdx + 5, sprueStartIdx + 6,
                    sprueStartIdx + 1, sprueStartIdx + 6, sprueStartIdx + 2,
                    
                    // Back face
                    sprueStartIdx + 0, sprueStartIdx + 3, sprueStartIdx + 7,
                    sprueStartIdx + 0, sprueStartIdx + 7, sprueStartIdx + 4,
                    
                    // Left face
                    sprueStartIdx + 0, sprueStartIdx + 4, sprueStartIdx + 5,
                    sprueStartIdx + 0, sprueStartIdx + 5, sprueStartIdx + 1,
                    
                    // Right face
                    sprueStartIdx + 3, sprueStartIdx + 2, sprueStartIdx + 6,
                    sprueStartIdx + 3, sprueStartIdx + 6, sprueStartIdx + 7,
                ];
                
                console.log('Sprue indices:', sprueIndices);
                
                // Add sprue indices to existing indices
                allIndices.push(...sprueIndices);
                console.log('Sprue added successfully');
                
                // Add embossed text to sprue based on metal type
                const sprueMetalType = document.getElementById('metal-type')?.value || 'sterling-silver';
                let textContent = '';
                switch (sprueMetalType) {
                    case 'gold-14k':
                        textContent = '14KY';
                        break;
                    case 'rose-gold-14k':
                        textContent = '14KR';
                        break;
                    case 'stl':
                        textContent = 'STL';
                        break;
                    case 'sterling-silver':
                    default:
                        textContent = 'SS';
                        break;
                }
                
                // Create solid 3D text geometry for boolean union
                console.log('Creating solid text geometry for embossing:', textContent);
                
                // Create simple solid text shapes using basic geometry
                // Clear any existing sprue text objects
                this.clearSprueText();
                const textObjects = [];
                const charWidth = 1.2; // Width per character
                const charHeight = 1.8; // Height of characters  
                const charDepth = 0.5; // Depth for embossing
                const charSpacing = 1.4; // Spacing between characters
                
                // Calculate starting position to center the text
                const totalWidth = (textContent.length - 1) * charSpacing + charWidth;
                const startX = sprueStartX + sprueLength / 2 - totalWidth / 2;
                const textY = sprueStartY;
                const textZ = sprueStartZ + charDepth / 2; // Half depth above sprue surface
                
                // Create extruded text using TextGeometry (with font fallback)
                const loader = new FontLoader();
                
                // Try to load font, with fallback to simple shapes
                loader.load(
                    'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
                    (font) => {
                        // Success: create proper extruded text
                        console.log('Font loaded successfully, creating extruded text');
                        
                        const textGeometry = new TextGeometry(textContent, {
                            font: font,
                            size: 1.5, // 1.5mm tall font
                            height: 0.5, // 0.5mm extrusion depth
                            curveSegments: 12,
                            bevelEnabled: false
                        });
                        
                        const textMesh = new THREE.Mesh(textGeometry, new THREE.MeshStandardMaterial({
                            color: 0x00ff00, // Green for visibility
                            metalness: 1.0,
                            roughness: 0.1
                        }));
                        
                        // Center the text
                        textGeometry.computeBoundingBox();
                        const textBox = textGeometry.boundingBox;
                        const textWidth = textBox.max.x - textBox.min.x;
                        const textHeight = textBox.max.y - textBox.min.y;
                        
                        // Position text centered on sprue, embossed by 0.3mm
                        const textX = sprueStartX + sprueLength / 2 - textWidth / 2;
                        const textY = sprueStartY - textHeight / 2;
                        const textZ = sprueStartZ - 0.3; // Embossed 0.3mm below surface
                        
                        textMesh.position.set(textX, textY, textZ);
                        
                        // Scale if needed to fit sprue
                        const maxWidth = sprueLength * 0.8;
                        const maxHeight = sprueWidth * 0.8;
                        const scaleX = Math.min(1, maxWidth / textWidth);
                        const scaleY = Math.min(1, maxHeight / textHeight);
                        const scale = Math.min(scaleX, scaleY);
                        
                        if (scale < 1) {
                            textMesh.scale.set(scale, scale, 1);
                        }
                        
                        textObjects.push(textMesh);
                        this.sprueTextObjects.push(textMesh);
                        this.scene.add(textMesh);
                        console.log('Extruded text created:', textContent);
                        console.log('Final sprue text objects count:', this.sprueTextObjects.length);
                    },
                    (progress) => {
                        console.log('Font loading progress:', progress);
                    },
                    (error) => {
                        // Fallback: create simple text using basic shapes
                        console.log('Font loading failed, using fallback shapes');
                        
                        for (let i = 0; i < textContent.length; i++) {
                            const char = textContent[i];
                            const charBox = new THREE.BoxGeometry(charWidth * 0.8, charHeight, charDepth);
                            const charMesh = new THREE.Mesh(charBox, new THREE.MeshStandardMaterial({
                                color: 0x00ff00,
                                metalness: 1.0,
                                roughness: 0.1
                            }));
                            
                            const charX = startX + i * charSpacing;
                            charMesh.position.set(charX, textY, textZ);
                            
                            textObjects.push(charMesh);
                            this.sprueTextObjects.push(charMesh);
                            this.scene.add(charMesh);
                        }
                        console.log('Fallback text shapes created');
                        console.log('Final sprue text objects count:', this.sprueTextObjects.length);
                    }
                );
                
                // Note: Text objects are created asynchronously in the callback above
                // The actual count will be logged inside the callback
                console.log('Font loading initiated for text:', textContent);
                */ // END OF SPRUE CODE - HIDDEN
                
                // Build BufferGeometry
                geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
                geometry.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute(antiquingColorsCirc, 3));
                geometry.setIndex(allIndices);
                geometry.computeVertexNormals();
                
                // Fix mesh topology issues before validation
                console.log('🔧 Fixing mesh topology...');
                geometry = this.fixMeshTopology(geometry);
                
                // Validate mesh is watertight (non-blocking for debugging)
                // Validation runs silently - no warnings displayed
                this.validateMeshWatertight(geometry);
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
                
                // Enable shadow casting for the pendant
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                
                if (this.currentObjectType === 'circular-pendant') {
                    // For circular pendant, rotate to stand upright and position bottom edge at y=0
                    mesh.rotation.x = 0; // Remove the flat rotation
                    mesh.position.y = this.pendantThickness / 2;
                } else {
                    // Position so the bottom edge sits on the platform (y=0)
                    mesh.position.y = this.pendantThickness / 2;
                }
                
                this.scene.add(mesh);
                this.heightfield = mesh;
                
                // Create platform at the bottom edge of the pendant
                this.createPlatform();
                
                // Jumpring is now part of the same geometry, so no separate creation needed
                // this.createJumpring('small');
                // this.updateJumpringPosition();
                // Ensure the correct metal material is applied on first render
                const metalType = document.getElementById('metal-type')?.value || 'sterling-silver';
                this.updateMetalMaterial(metalType);
                console.log('Adding red layer');
                console.log('Scene children:', this.scene.children.length);
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
            case 'earrings': {
                // For earrings, create two complete watertight circular objects
                // Use exactly the same approach as the circular-pendant case above
                
                // Remove any previous pendant meshes
                if (this.heightfield) this.scene.remove(this.heightfield);
                if (this.bottomDisc) this.scene.remove(this.bottomDisc);
                if (this.sideWall) this.scene.remove(this.sideWall);
                this.heightfield = null;
                this.bottomDisc = null;
                this.sideWall = null;

                // Use the exact same watertight geometry creation as circular-pendant
                const diameter = this.pendantDiameter;
                const radius = diameter / 2;
                const widthSegments = heightfieldData.width - 1;
                const heightSegments = heightfieldData.height - 1;
                const thickness = this.pendantThickness;

                // Relief positions, normals, uvs (EXACT COPY from circular-pendant)
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
                // 4. Border (rim) - vertical wall offset outward by borderThickness
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
                
                // Build BufferGeometry (same as circular pendant)
                const earringGeometry = new THREE.BufferGeometry();
                earringGeometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
                earringGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
                earringGeometry.setAttribute('color', new THREE.Float32BufferAttribute(antiquingColorsCirc, 3));
                earringGeometry.setIndex(allIndices);
                earringGeometry.computeVertexNormals();
                
                // Single material for all (same as circular pendant)
                const earringMaterial = new THREE.MeshStandardMaterial({
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
                
                // Create two meshes for earrings
                const mesh1 = new THREE.Mesh(earringGeometry.clone(), earringMaterial.clone());
                const mesh2 = new THREE.Mesh(earringGeometry.clone(), earringMaterial.clone());
                
                // Position earrings side by side with some spacing
                const spacing = this.pendantDiameter * 1.2;
                mesh1.position.x = -spacing / 2;
                mesh1.position.y = this.pendantThickness / 2;
                mesh2.position.x = spacing / 2;
                mesh2.position.y = this.pendantThickness / 2;
                
                // Create jump rings for each earring
                const jumpringRadius = 2.5; // Made larger for visibility
                const jumpringWireThickness = 0.6; // Made thicker for visibility
                const jumpringGeometry = new THREE.TorusGeometry(jumpringRadius, jumpringWireThickness, 16, 32);
                const jumpringMaterial = new THREE.MeshStandardMaterial({
                    color: 0xFF0000, // Red color for debugging - make jump rings very visible
                    metalness: 0.5,
                    roughness: 0.3,
                    envMapIntensity: 1.0
                });
                
                // Create jump rings for each earring
                const jumpring1 = new THREE.Mesh(jumpringGeometry.clone(), jumpringMaterial.clone());
                const jumpring2 = new THREE.Mesh(jumpringGeometry.clone(), jumpringMaterial.clone());
                
                // Position jump rings at the top of each earring - made more visible
                const earringTopY = this.pendantThickness / 2 + 15.0; // Much higher above the earring for visibility
                jumpring1.position.set(-spacing / 2, earringTopY, 0);
                jumpring2.position.set(spacing / 2, earringTopY, 0);
                
                console.log('Created jump rings with radius:', jumpringRadius, 'at Y position:', earringTopY);
                console.log('Jump ring 1 position:', jumpring1.position);
                console.log('Jump ring 2 position:', jumpring2.position);
                
                // Create a group to hold both earrings and their jump rings
                const earringsGroup = new THREE.Group();
                earringsGroup.add(mesh1);
                earringsGroup.add(mesh2);
                earringsGroup.add(jumpring1);
                earringsGroup.add(jumpring2);
                
                this.scene.add(earringsGroup);
                this.heightfield = earringsGroup;
                
                console.log('Added earrings group to scene with', earringsGroup.children.length, 'children');
                console.log('Scene now has', this.scene.children.length, 'total children');
                
                // Store jump rings for material updates
                this.earringJumprings = [jumpring1, jumpring2];
                
                // Remove the main jumpring since we have individual ones for earrings
                if (this.jumpring) {
                    this.scene.remove(this.jumpring);
                    this.jumpring = null;
                }
                
                // Ensure the correct metal material is applied on first render
                const earringMetalType = document.getElementById('metal-type')?.value || 'sterling-silver';
                this.updateMetalMaterial(earringMetalType);
                
                // Fit camera to the earrings group to ensure jump rings are visible
                this.fitCameraToObject(earringsGroup);
                
                console.log('Created fully watertight earrings pair with complete geometry');
                return;
            }
        }

        if (!geometry) return;

        const positions = geometry.attributes.position.array;
        const uvs = geometry.attributes.uv.array;

        // Apply height data to vertices
        for (let i = 0; i < positions.length; i += 3) {
            let u, v;
            
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' || this.currentObjectType === 'earrings') {
                // For circular shapes, convert position to UV coordinates
            const x = positions[i];
            const y = positions[i + 1];
                const radius = (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'earrings') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
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

        // Generate a circular alphaMap for circular shapes
        if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'earrings') {
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

        // Create mesh and position it upright like jewelry sitting on a platform
        const mesh = new THREE.Mesh(geometry, material);
        
        // Enable shadow casting for the pendant
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        if (this.currentObjectType === 'circular-pendant') {
            // For circular pendant, rotate to stand upright and position bottom edge at y=0
            mesh.rotation.x = 0; // Remove the flat rotation
            mesh.position.y = this.pendantThickness / 2;
        } else {
            // Position so the bottom edge sits on the platform (y=0)
            mesh.position.y = this.pendantThickness / 2;
        }
        
        this.scene.add(mesh);
        this.heightfield = mesh;
        
        // Create platform at the bottom edge of the pendant
        this.createPlatform();
        
        this.createJumpring('small');
        this.updateJumpringPosition();
        // Ensure the correct metal material is applied on first render
        const metalType = document.getElementById('metal-type')?.value || 'sterling-silver';
        this.updateMetalMaterial(metalType);
        console.log('Adding red layer');
        console.log('Scene children:', this.scene.children.length);
        return;
    }

    updateObjectShape() {
        if (!this.heightfield) return;

        // Recreate the mesh with the new object type
        this.createHeightfieldMesh(this.heightfieldData);
        
        // Refresh all text boxes to use new positioning
        this.refreshAllTextBoxes();
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
        
        console.log('Fitted camera to object:', {
            objectBounds: { min: box.min, max: box.max },
            center: center,
            size: size,
            cameraPosition: this.camera.position,
            cameraTarget: this.controls.target
        });
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
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' || this.currentObjectType === 'earrings') {
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
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' || this.currentObjectType === 'earrings') {
                const radius = (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'earrings') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
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
            if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud' || this.currentObjectType === 'earrings') {
                const radius = (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'earrings') ? this.pendantDiameter / 2 : this.pendantDiameter / 4;
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

        console.log('Updating metal material to:', metalType);
        console.log('Available materials:', Object.keys(METAL_MATERIALS));

        const materialProps = METAL_MATERIALS[metalType];
        
        if (this.currentObjectType === 'earrings' && this.heightfield.isGroup) {
            // For earrings, update both meshes in the group
            this.heightfield.children.forEach(mesh => {
                if (mesh.material) {
                    mesh.material.color.set(materialProps.color);
                    mesh.material.metalness = materialProps.metalness;
                    mesh.material.roughness = materialProps.roughness;
                    mesh.material.envMapIntensity = materialProps.envMapIntensity;
                }
            });
            
            // Update earring jump rings if they exist
            if (this.earringJumprings) {
                this.earringJumprings.forEach(jumpring => {
                    if (jumpring.material) {
                        jumpring.material.color.set(materialProps.color);
                        jumpring.material.metalness = materialProps.metalness;
                        jumpring.material.roughness = materialProps.roughness;
                        jumpring.material.envMapIntensity = materialProps.envMapIntensity;
                    }
                });
            }
        } else {
            // For single pendant
            this.heightfield.material.color.set(materialProps.color);
            this.heightfield.material.metalness = materialProps.metalness;
            this.heightfield.material.roughness = materialProps.roughness;
            this.heightfield.material.envMapIntensity = materialProps.envMapIntensity;
        }

        if (this.jumpring) {
            this.jumpring.material.color.set(materialProps.color);
            this.jumpring.material.metalness = materialProps.metalness;
            this.jumpring.material.roughness = materialProps.roughness;
            this.jumpring.material.envMapIntensity = materialProps.envMapIntensity;
        }
        
        // Update sprue text when metal type changes
        console.log('Calling updateSprueText for metal type:', metalType);
        this.updateSprueText(metalType);
    }
    
    clearSprueText() {
        console.log('Clearing sprue text objects. Count:', this.sprueTextObjects.length);
        // Remove existing sprue text objects from scene
        this.sprueTextObjects.forEach(textObj => {
            this.scene.remove(textObj);
            if (textObj.geometry) textObj.geometry.dispose();
            if (textObj.material) textObj.material.dispose();
        });
        this.sprueTextObjects = [];
        console.log('Sprue text objects cleared');
    }
    
    updateSprueText(metalType) {
        // Only update if we have sprue text objects
        if (this.sprueTextObjects.length === 0) {
            console.log('No sprue text objects to update');
            return;
        }
        
        // Determine the correct text content based on metal type
        let textContent = '';
        switch (metalType) {
            case 'gold-14k':
                textContent = '14KY';
                break;
            case 'rose-gold-14k':
                textContent = '14KR';
                break;
            case 'stl':
                textContent = 'STL';
                break;
            case 'sterling-silver':
            default:
                textContent = 'SS';
                break;
        }
        
        console.log('Updating sprue text to:', textContent);
        console.log('Current sprue text objects count:', this.sprueTextObjects.length);
        
        // Store the current metal properties for the new text
        const materialProps = METAL_MATERIALS[metalType];
        
        // Get the position and scale from the first text object (they should all be positioned together)
        const firstTextObj = this.sprueTextObjects[0];
        const position = firstTextObj.position.clone();
        const scale = firstTextObj.scale.clone();
        
        // Calculate embossed position: 0.3mm below sprue surface
        // The sprue surface is at sprueStartZ, so embossed text should be at sprueStartZ - 0.3
        // We need to find sprueStartZ from the current position and adjust
        const sprueSurfaceZ = position.z + 0.3; // Reverse the embossment to find surface
        position.z = sprueSurfaceZ - 0.3; // Position 0.3mm below surface
        
        console.log('Stored position:', position);
        console.log('Stored scale:', scale);
        
        // Clear existing text objects
        this.clearSprueText();
        
        // Create new text objects with the correct content
        const loader = new FontLoader();
        
        loader.load(
            'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
            (font) => {
                // Success: create proper extruded text
                console.log('Font loaded successfully, creating new extruded text:', textContent);
                
                const textGeometry = new TextGeometry(textContent, {
                    font: font,
                    size: 1.5, // 1.5mm tall font
                    height: 0.5, // 0.5mm extrusion depth
                    curveSegments: 12,
                    bevelEnabled: false
                });
                
                const textMesh = new THREE.Mesh(textGeometry, new THREE.MeshStandardMaterial({
                    color: materialProps.color,
                    metalness: materialProps.metalness,
                    roughness: materialProps.roughness,
                    envMapIntensity: materialProps.envMapIntensity
                }));
                
                // Apply the stored position and scale
                textMesh.position.copy(position);
                textMesh.scale.copy(scale);
                
                this.sprueTextObjects.push(textMesh);
                this.scene.add(textMesh);
                console.log('New extruded text created:', textContent);
            },
            (progress) => {
                console.log('Font loading progress:', progress);
            },
            (error) => {
                // Fallback: create simple text using basic shapes
                console.log('Font loading failed, using fallback shapes for:', textContent);
                
                const charWidth = 1.2; // Width per character
                const charHeight = 1.8; // Height of characters  
                const charDepth = 0.5; // Depth for embossing
                const charSpacing = 1.4; // Spacing between characters
                
                // Calculate starting position to center the text
                const totalWidth = (textContent.length - 1) * charSpacing + charWidth;
                const startX = position.x - totalWidth / 2;
                const textY = position.y;
                const textZ = position.z;
                
                for (let i = 0; i < textContent.length; i++) {
                    const char = textContent[i];
                    const charBox = new THREE.BoxGeometry(charWidth * 0.8, charHeight, charDepth);
                    const charMesh = new THREE.Mesh(charBox, new THREE.MeshStandardMaterial({
                        color: materialProps.color,
                        metalness: materialProps.metalness,
                        roughness: materialProps.roughness,
                        envMapIntensity: materialProps.envMapIntensity
                    }));
                    
                    const charX = startX + i * charSpacing;
                    charMesh.position.set(charX, textY, textZ);
                    charMesh.scale.copy(scale);
                    
                    this.sprueTextObjects.push(charMesh);
                    this.scene.add(charMesh);
                }
                console.log('Fallback text shapes created for:', textContent);
            }
        );
    }

    updateMetalFinish(finish) {
        if (!this.heightfield) return;

        const finishProps = FINISH_PROPERTIES[finish];
        
        if (this.currentObjectType === 'earrings' && this.heightfield.isGroup) {
            // For earrings, update both meshes in the group
            this.heightfield.children.forEach(mesh => {
                if (mesh.material) {
                    mesh.material.roughness = finishProps.roughness;
                }
            });
            
            // Update earring jump rings if they exist
            if (this.earringJumprings) {
                this.earringJumprings.forEach(jumpring => {
                    if (jumpring.material) {
                        jumpring.material.roughness = finishProps.roughness;
                    }
                });
            }
        } else {
            // For single pendant
            this.heightfield.material.roughness = finishProps.roughness;
        }

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
        this.jumpring.castShadow = true;
        this.jumpring.receiveShadow = true;
        this.scene.add(this.jumpring);
        console.log('Creating jumpring');
    }


    updateJumpring(size) {
        this.createJumpring(size);
        this.updateJumpringPosition(); // Ensure jumpring stays at the top after size change
    }

    updateJumpringPosition() {
        if (!this.jumpring || !this.heightfield) return;
        const heightfieldBounds = new THREE.Box3().setFromObject(this.heightfield);
        const heightfieldSize = heightfieldBounds.getSize(new THREE.Vector3());
        const heightfieldCenter = heightfieldBounds.getCenter(new THREE.Vector3());
        
        // Position jumpring slightly above the top edge for minimal intersection
        let x = heightfieldCenter.x; // Use actual center X coordinate
        let y = heightfieldCenter.y + heightfieldSize.y / 2 + 1; // 1mm above the top edge for minimal intersection
        let z = heightfieldCenter.z; // Use actual center Z coordinate
        
        this.jumpring.position.set(x, y, z);
        // No rotation needed - jumpring naturally hangs down
        this.jumpring.rotation.set(0, 0, 0);
    }

    createPlatform() {
        // Remove existing platform if any
        if (this.platform) {
            this.scene.remove(this.platform);
        }
        
        // Create a platform that extends beyond the pendant
        let platformSize;
        if (this.currentObjectType === 'circular-pendant' || this.currentObjectType === 'circular-stud') {
            platformSize = this.pendantDiameter * 1.5; // Make platform larger than pendant
        } else if (this.currentObjectType === 'earrings') {
            const earringSpacing = this.pendantDiameter * 1.2;
            platformSize = earringSpacing * 1.5; // Make platform wide enough for both earrings
        } else {
            platformSize = Math.max(this.pendantWidth, this.pendantHeight) * 1.5;
        }
        
        const platformGeometry = new THREE.BoxGeometry(platformSize * 10, 2, platformSize * 10);
        const platformMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xf8f8f8, // Light gray color
            metalness: 0.0,
            roughness: 0.3,
            transparent: true,
            opacity: 0.4 // Semi-transparent (40% opacity)
        });
        
        this.platform = new THREE.Mesh(platformGeometry, platformMaterial);
        
        // Position platform at the bottom edge of the pendant (y=0)
        this.platform.position.y = -13; // 13 units below the pendant bottom edge
        
        // Enable shadow receiving
        this.platform.receiveShadow = true;
        
        this.scene.add(this.platform);
        console.log('Platform created and added to scene');
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
        } else if (this.currentObjectType === 'earrings') {
            // For earrings, make grid wide enough to accommodate both earrings with spacing
            const earringSpacing = this.pendantDiameter * 1.2;
            gridSize = Math.ceil(earringSpacing * 1.5); // Extra space for visual comfort
            divisions = gridSize;
        } else {
            gridSize = Math.ceil(Math.max(this.pendantWidth, this.pendantHeight) * 1.2);
            divisions = gridSize;
        }
        const gridHelper = new THREE.GridHelper(gridSize, divisions, 0xffffff, 0x888888);
        // Position grid horizontally like a platform - pendant will sit on top
        gridHelper.position.y = -this.pendantThickness / 2 - 0.5; // Just below the pendant bottom
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
        
        // Add earring jump rings if they exist
        if (this.earringJumprings) {
            this.earringJumprings.forEach(jumpring => {
                group.add(jumpring.clone());
            });
        }
        
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


    createCompletePendantGeometry(heightfieldData) {
        // Create a complete pendant geometry with relief, bottom disc, side walls, and border
        // This excludes only the jumpring, sprue, and red layer
        try {
            const { width, height, data } = heightfieldData;
            const MAX_DEPTH = 0.6; // mm
            
            // Create geometry based on the current object type
            let geometry;
            
            switch (this.currentObjectType) {
                case 'circular-pendant':
                    // Create circular pendant geometry with relief, bottom disc, side walls, and border
                    const diameter = this.pendantDiameter;
                    const effectiveRadius = (diameter / 2) - this.borderThickness; // Inner radius for design
                    const outerRadius = diameter / 2; // Outer radius including border
                    const widthSegments = width - 1;
                    const heightSegments = height - 1;
                    const thickness = this.pendantThickness;
                    
                    // Relief positions, normals, uvs
                    const reliefPositions = [];
                    const reliefUVs = [];
                    const gridIdx = (x, y) => y * (widthSegments + 1) + x;
                    const grid = [];
                    
                    // Generate vertices in a grid
                    for (let y = 0; y <= heightSegments; ++y) {
                        for (let x = 0; x <= widthSegments; ++x) {
                            const px = (x / widthSegments - 0.5) * (effectiveRadius * 2);
                            const py = (y / heightSegments - 0.5) * (effectiveRadius * 2);
                            const dist = Math.sqrt(px * px + py * py);
                            let z = 0;
                            let u = (px / effectiveRadius + 1) / 2;
                            let v = (py / effectiveRadius + 1) / 2;
                            
                            if (dist <= effectiveRadius) {
                                const pixelX = Math.floor(u * (width - 1));
                                const pixelY = height - 1 - Math.floor(v * (height - 1));
                                const pixelIndex = (pixelY * width + pixelX) * 4;
                                const gray = (data[pixelIndex] * 0.299 +
                                    data[pixelIndex + 1] * 0.587 +
                                    data[pixelIndex + 2] * 0.114) / 255;
                                z = gray * MAX_DEPTH;
                            }
                            
                            grid.push({ px, py, z, u, v, inCircle: dist <= effectiveRadius });
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
                        allUVs.push((edgePoints[i].x / effectiveRadius + 1) / 2, (edgePoints[i].y / effectiveRadius + 1) / 2);
                    }
                    for (let i = 1; i <= edgePoints.length; ++i) {
                        const a = bottomStartIdx;
                        const b = bottomStartIdx + i;
                        const c = bottomStartIdx + (i < edgePoints.length ? i + 1 : 1);
                        allIndices.push(a, b, c);
                    }
                    
                    // 3. Side wall - connect relief edge to bottom edge
                    const wallTopStartIdx = allPositions.length / 3;
                    
                    // Add wall vertices - top edge matches relief edge points
                    for (let i = 0; i < edgePoints.length; ++i) {
                        allPositions.push(edgePoints[i].x, edgePoints[i].y, edgePoints[i].z);
                        allUVs.push(0, 0);
                    }
                    
                    // Create wall faces connecting to bottom disc edge
                    for (let i = 0; i < edgePoints.length; ++i) {
                        const next = (i + 1) % edgePoints.length;
                        
                        const wallTopCurrent = wallTopStartIdx + i;
                        const wallTopNext = wallTopStartIdx + next;
                        const bottomCurrent = bottomStartIdx + 1 + i;  // +1 to skip center
                        const bottomNext = bottomStartIdx + 1 + next;
                        
                        // Create wall quad (two triangles)
                        allIndices.push(wallTopCurrent, bottomCurrent, wallTopNext);
                        allIndices.push(wallTopNext, bottomCurrent, bottomNext);
                    }
                    
                    // 4. Border (rim) - extend to exactly outerRadius for total diameter
                    const rimStartIdx = allPositions.length / 3;
                    const border = this.borderThickness;
                    
                    // Find maxZ of the relief
                    let maxZ = -Infinity;
                    for (let i = 0; i < grid.length; ++i) {
                        if (grid[i].inCircle && grid[i].z > maxZ) maxZ = grid[i].z;
                    }
                    const rimTopZ = maxZ + 0.4; // Rim 0.4mm above relief for proper recess
                    
                    for (let i = 0; i < edgePoints.length; ++i) {
                        const next = (i + 1) % edgePoints.length;
                        // Outward normal
                        const dx = edgePoints[i].x;
                        const dy = edgePoints[i].y;
                        const len = Math.sqrt(dx * dx + dy * dy);
                        const nx = dx / len;
                        const ny = dy / len;
                        // Outer edge points - extend to exactly outerRadius
                        const ox1 = nx * outerRadius;
                        const oy1 = ny * outerRadius;
                        const nx2 = edgePoints[next].x / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2);
                        const ny2 = edgePoints[next].y / Math.sqrt(edgePoints[next].x ** 2 + edgePoints[next].y ** 2);
                        const ox2 = nx2 * outerRadius;
                        const oy2 = ny2 * outerRadius;
                        
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
                    
                    geometry = new THREE.BufferGeometry();
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
                    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
                    geometry.setIndex(allIndices);
                    geometry.computeVertexNormals();
                    break;
                    
                default:
                    // For other object types, create a simple plane geometry
                    geometry = new THREE.PlaneGeometry(
                        this.pendantDiameter,
                        this.pendantDiameter,
                        width - 1,
                        height - 1
                    );
                    break;
            }
            
            return geometry;
        } catch (error) {
            console.error('Error creating complete pendant geometry:', error);
            return null;
        }
    }

    createCleanPendantGeometry(heightfieldData) {
        // Create a clean pendant geometry from the original heightfield data
        // This recreates just the pendant relief without any jumpring or sprue
        try {
            const { width, height, data } = heightfieldData;
            const MAX_DEPTH = 0.6; // mm
            
            // Create geometry based on the current object type
            let geometry;
            
            switch (this.currentObjectType) {
                case 'circular-pendant':
                    // Create circular pendant geometry
                    const diameter = this.pendantDiameter;
                    const radius = diameter / 2;
                    const widthSegments = width - 1;
                    const heightSegments = height - 1;
                    
                    // Create relief positions for circular pendant
                    const reliefPositions = [];
                    const reliefUVs = [];
                    const reliefIndices = [];
                    
                    // Generate vertices in a grid
                    for (let y = 0; y <= heightSegments; ++y) {
                        for (let x = 0; x <= widthSegments; ++x) {
                            const px = (x / widthSegments - 0.5) * diameter;
                            const py = (y / heightSegments - 0.5) * diameter;
                            const dist = Math.sqrt(px * px + py * py);
                            
                            let z = 0;
                            let u = (px / radius + 1) / 2;
                            let v = (py / radius + 1) / 2;
                            
                            if (dist <= radius) {
                                const pixelX = Math.floor(u * (width - 1));
                                const pixelY = height - 1 - Math.floor(v * (height - 1));
                                const pixelIndex = (pixelY * width + pixelX) * 4;
                                const gray = (data[pixelIndex] * 0.299 +
                                    data[pixelIndex + 1] * 0.587 +
                                    data[pixelIndex + 2] * 0.114) / 255;
                                z = gray * MAX_DEPTH;
                            }
                            
                            reliefPositions.push(px, py, z);
                            reliefUVs.push(u, v);
                        }
                    }
                    
                    // Generate indices for triangles
                    for (let y = 0; y < heightSegments; ++y) {
                        for (let x = 0; x < widthSegments; ++x) {
                            const a = y * (widthSegments + 1) + x;
                            const b = y * (widthSegments + 1) + x + 1;
                            const c = (y + 1) * (widthSegments + 1) + x;
                            const d = (y + 1) * (widthSegments + 1) + x + 1;
                            
                            reliefIndices.push(a, b, c);
                            reliefIndices.push(b, d, c);
                        }
                    }
                    
                    geometry = new THREE.BufferGeometry();
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(reliefPositions, 3));
                    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(reliefUVs, 2));
                    geometry.setIndex(reliefIndices);
                    geometry.computeVertexNormals();
                    break;
                    
                default:
                    // For other object types, create a simple plane geometry
                    geometry = new THREE.PlaneGeometry(
                        this.pendantDiameter,
                        this.pendantDiameter,
                        width - 1,
                        height - 1
                    );
                    break;
            }
            
            return geometry;
        } catch (error) {
            console.error('Error creating clean pendant geometry:', error);
            return null;
        }
    }

    loadEngravingFont(fontName, callback) {
        if (this.fontCache[fontName]) {
            this.engravingFont = this.fontCache[fontName];
            if (callback) callback();
            return;
        }
        const loader = new FontLoader();
        const fontUrl = ENGRAVING_FONTS[fontName];
        if (!fontUrl) {
            console.error(`Font ${fontName} not found in ENGRAVING_FONTS`);
            return;
        }
        loader.load(fontUrl, (font) => {
            this.fontCache[fontName] = font;
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
        if (this.currentObjectType === 'circular-pendant') {
            // For upright circular pendant, position text on the back face
            mesh.position.set(
                textBox.positionX,
                textBox.positionY,
                -this.pendantThickness / 2 - fontHeight - 1.0 + textBox.positionZ
            );
            
            // Rotate to face backward (like an engraving on the back)
            mesh.rotation.x = 0;
            mesh.rotation.y = Math.PI; // 180 degrees to face backward
            mesh.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        } else {
            // For other shapes, keep original positioning
            mesh.position.set(
                textBox.positionX,
                -this.pendantThickness - fontHeight * 0.2 + textBox.positionY,
                textBox.positionZ
            );
            
            // Apply rotations for flat layout
            mesh.rotation.x = -Math.PI / 2;
            mesh.rotation.y = Math.PI;
            mesh.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        }
        
        this.scene.add(mesh);
        this.engravingMesh = mesh;
        console.log('Engraving mesh created and positioned at back surface');
        console.log('Engraving mesh position:', mesh.position, 'rotation:', mesh.rotation);
    }

    // Text Box Management System
    addTextBox() {
        const textBoxId = ++this.textBoxCounter;
        const textBox = {
            id: textBoxId,
            text: '',
            font: this.defaultFontName,
            size: 5,
            bold: false,
            italic: false,
            justify: 'center',
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            isArched: false,
            archRadius: 10,
            archAngle: 180,
            archDirection: 1, // 1 for normal, -1 for inverted
            mesh: null
        };
        
        this.textBoxes.push(textBox);
        this.createTextBoxUI(textBox);
        this.updateNoTextBoxesMessage();
        
        return textBox;
    }

    removeTextBox(textBoxId) {
        const index = this.textBoxes.findIndex(tb => tb.id === textBoxId);
        if (index === -1) return;
        
        const textBox = this.textBoxes[index];
        
        // Remove mesh from scene
        if (textBox.mesh) {
            this.scene.remove(textBox.mesh);
            textBox.mesh.geometry.dispose();
            textBox.mesh.material.dispose();
        }
        
        // Remove from array
        this.textBoxes.splice(index, 1);
        
        // Remove UI element
        const uiElement = document.getElementById(`text-box-${textBoxId}`);
        if (uiElement) {
            uiElement.remove();
        }
        
        this.updateNoTextBoxesMessage();
    }

    createTextBoxUI(textBox) {
        const container = document.getElementById('text-boxes-container');
        const textBoxElement = document.createElement('div');
        textBoxElement.className = 'text-box-item';
        textBoxElement.id = `text-box-${textBox.id}`;
        
        textBoxElement.innerHTML = `
            <div class="text-box-header">
                <div class="text-box-title">Text Box ${textBox.id}</div>
                <div>
                    <button class="text-box-toggle">▼</button>
                    <button class="text-box-delete" onclick="viewer.removeTextBox(${textBox.id})">🗑️</button>
                </div>
            </div>
            <div class="text-box-controls active">
                <div class="control-row full-width">
                    <div>
                        <label>Text (max 50 characters)</label>
                        <textarea id="text-${textBox.id}" maxlength="50" rows="2" style="width:100%;resize:none;"></textarea>
                        <div class="char-counter">
                            <span id="char-count-${textBox.id}">0</span>/50
                        </div>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Font</label>
                        <select id="font-${textBox.id}">
                            <option value="helvetiker">Helvetiker</option>
                            <option value="optimer">Optimer</option>
                            <option value="gentilis">Gentilis</option>
                            <option value="droid_sans">Droid Sans</option>
                            <option value="droid_serif">Droid Serif</option>
                        </select>
                    </div>
                    <div>
                        <label>Size</label>
                        <input type="range" id="size-${textBox.id}" min="2" max="10" step="0.1" value="5">
                        <span class="slider-value" id="size-value-${textBox.id}">5</span>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label><input type="checkbox" id="bold-${textBox.id}"> Bold</label>
                        <label><input type="checkbox" id="italic-${textBox.id}"> Italic</label>
                    </div>
                    <div>
                        <label>Justify</label>
                        <select id="justify-${textBox.id}">
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Position X</label>
                        <input type="range" id="pos-x-${textBox.id}" min="-15" max="15" step="0.1" value="0">
                        <span class="slider-value" id="pos-x-value-${textBox.id}">0</span>
                    </div>
                    <div>
                        <label>Position Y</label>
                        <input type="range" id="pos-y-${textBox.id}" min="-15" max="15" step="0.1" value="0">
                        <span class="slider-value" id="pos-y-value-${textBox.id}">0</span>
                    </div>
                </div>
                
                <div class="control-row">
                    <div>
                        <label>Position Z</label>
                        <input type="range" id="pos-z-${textBox.id}" min="-5" max="5" step="0.1" value="0">
                        <span class="slider-value" id="pos-z-value-${textBox.id}">0</span>
                    </div>
                    <div>
                        <label>Rotation</label>
                        <input type="range" id="rotation-${textBox.id}" min="0" max="360" step="1" value="0">
                        <span class="slider-value" id="rotation-value-${textBox.id}">0°</span>
                    </div>
                </div>
                
                <div class="control-row full-width">
                    <div>
                        <label><input type="checkbox" id="arched-${textBox.id}"> Arched Text</label>
                    </div>
                </div>
                
                <div id="arch-controls-${textBox.id}" style="display: none;">
                    <div class="control-row">
                        <div>
                            <label>Arch Radius</label>
                            <input type="range" id="arch-radius-${textBox.id}" min="5" max="25" step="0.5" value="10">
                            <span class="slider-value" id="arch-radius-value-${textBox.id}">10</span>
                        </div>
                        <div>
                            <label>Arch Angle</label>
                            <input type="range" id="arch-angle-${textBox.id}" min="30" max="360" step="5" value="180">
                            <span class="slider-value" id="arch-angle-value-${textBox.id}">180°</span>
                        </div>
                    </div>
                    <div class="control-row">
                        <div>
                            <label>Direction</label>
                            <select id="arch-direction-${textBox.id}">
                                <option value="1">Normal</option>
                                <option value="-1">Inverted</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(textBoxElement);
        this.setupTextBoxEventListeners(textBox);
    }

    setupTextBoxEventListeners(textBox) {
        const id = textBox.id;
        
        // Toggle controls
        const header = document.querySelector(`#text-box-${id} .text-box-header`);
        const controls = document.querySelector(`#text-box-${id} .text-box-controls`);
        const toggleBtn = document.querySelector(`#text-box-${id} .text-box-toggle`);
        
        header.addEventListener('click', (e) => {
            if (e.target.classList.contains('text-box-delete')) return;
            controls.classList.toggle('active');
            toggleBtn.textContent = controls.classList.contains('active') ? '▼' : '▶';
        });
        
        // Text input
        const textInput = document.getElementById(`text-${id}`);
        const charCount = document.getElementById(`char-count-${id}`);
        textInput.addEventListener('input', (e) => {
            textBox.text = e.target.value;
            charCount.textContent = e.target.value.length;
            this.updateTextBoxMesh(textBox);
        });
        
        // Font selection
        document.getElementById(`font-${id}`).addEventListener('change', (e) => {
            textBox.font = e.target.value;
            this.loadEngravingFont(textBox.font, () => {
                this.updateTextBoxMesh(textBox);
            });
        });
        
        // Size control
        const sizeSlider = document.getElementById(`size-${id}`);
        const sizeValue = document.getElementById(`size-value-${id}`);
        sizeSlider.addEventListener('input', (e) => {
            textBox.size = parseFloat(e.target.value);
            sizeValue.textContent = e.target.value;
            this.updateTextBoxMesh(textBox);
        });
        
        // Style controls
        document.getElementById(`bold-${id}`).addEventListener('change', (e) => {
            textBox.bold = e.target.checked;
            this.updateTextBoxMesh(textBox);
        });
        
        document.getElementById(`italic-${id}`).addEventListener('change', (e) => {
            textBox.italic = e.target.checked;
            this.updateTextBoxMesh(textBox);
        });
        
        document.getElementById(`justify-${id}`).addEventListener('change', (e) => {
            textBox.justify = e.target.value;
            this.updateTextBoxMesh(textBox);
        });
        
        // Position controls
        this.setupSliderControl(`pos-x-${id}`, `pos-x-value-${id}`, (value) => {
            textBox.positionX = value;
            this.updateTextBoxMesh(textBox);
        });
        
        this.setupSliderControl(`pos-y-${id}`, `pos-y-value-${id}`, (value) => {
            textBox.positionY = value;
            this.updateTextBoxMesh(textBox);
        });
        
        this.setupSliderControl(`pos-z-${id}`, `pos-z-value-${id}`, (value) => {
            textBox.positionZ = value;
            this.updateTextBoxMesh(textBox);
        });
        
        this.setupSliderControl(`rotation-${id}`, `rotation-value-${id}`, (value) => {
            textBox.rotationZ = value;
            this.updateTextBoxMesh(textBox);
        }, '°');
        
        // Arched text controls
        const archedCheckbox = document.getElementById(`arched-${id}`);
        const archControls = document.getElementById(`arch-controls-${id}`);
        
        archedCheckbox.addEventListener('change', (e) => {
            textBox.isArched = e.target.checked;
            archControls.style.display = e.target.checked ? 'block' : 'none';
            this.updateTextBoxMesh(textBox);
        });
        
        this.setupSliderControl(`arch-radius-${id}`, `arch-radius-value-${id}`, (value) => {
            textBox.archRadius = value;
            this.updateTextBoxMesh(textBox);
        });
        
        this.setupSliderControl(`arch-angle-${id}`, `arch-angle-value-${id}`, (value) => {
            textBox.archAngle = value;
            this.updateTextBoxMesh(textBox);
        }, '°');
        
        document.getElementById(`arch-direction-${id}`).addEventListener('change', (e) => {
            textBox.archDirection = parseInt(e.target.value);
            this.updateTextBoxMesh(textBox);
        });
    }

    setupSliderControl(sliderId, valueId, callback, suffix = '') {
        const slider = document.getElementById(sliderId);
        const valueSpan = document.getElementById(valueId);
        
        slider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            valueSpan.textContent = value + suffix;
            callback(value);
        });
    }

    updateTextBoxMesh(textBox) {
        // Remove existing mesh
        if (textBox.mesh) {
            this.scene.remove(textBox.mesh);
            textBox.mesh.geometry.dispose();
            textBox.mesh.material.dispose();
            textBox.mesh = null;
        }
        
        if (!textBox.text.trim()) return;
        
        const font = this.fontCache[textBox.font];
        if (!font) {
            this.loadEngravingFont(textBox.font, () => {
                this.updateTextBoxMesh(textBox);
            });
            return;
        }
        
        if (textBox.isArched) {
            this.createArchedTextMesh(textBox, font);
        } else {
            this.createStraightTextMesh(textBox, font);
        }
    }

    createStraightTextMesh(textBox, font) {
        const fontHeight = textBox.bold ? 0.3 : 0.2;
        
        const geometry = new TextGeometry(textBox.text, {
            font: font,
            size: textBox.size,
            height: fontHeight,
            curveSegments: 8,
            bevelEnabled: false
        });
        
        geometry.computeBoundingBox();
        const bbox = geometry.boundingBox;
        
        // Apply justification
        let xOffset = 0;
        if (textBox.justify === 'center') {
            xOffset = -0.5 * (bbox.max.x - bbox.min.x);
        } else if (textBox.justify === 'right') {
            xOffset = -(bbox.max.x - bbox.min.x);
        }
        const yOffset = -0.5 * (bbox.max.y - bbox.min.y);
        geometry.translate(xOffset, yOffset, 0);
        
        // Apply italic effect
        if (textBox.italic) {
            const skew = 0.3;
            geometry.applyMatrix4(new THREE.Matrix4().set(
                1, skew, 0, 0,
                0,   1, 0, 0,
                0,   0, 1, 0,
                0,   0, 0, 1
            ));
        }
        
        const material = new THREE.MeshStandardMaterial({
            color: 0x222222,
            metalness: 0.1,
            roughness: 0.9,
            transparent: true,
            opacity: 0.8
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position the text
        if (this.currentObjectType === 'circular-pendant') {
            // For upright circular pendant, position text on the back face
            mesh.position.set(
                textBox.positionX,
                textBox.positionY,
                -this.pendantThickness / 2 - fontHeight - 1.0 + textBox.positionZ
            );
            
            // Rotate to face backward (like an engraving on the back)
            mesh.rotation.x = 0;
            mesh.rotation.y = Math.PI; // 180 degrees to face backward
            mesh.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        } else {
            // For other shapes, keep original positioning
            mesh.position.set(
                textBox.positionX,
                -this.pendantThickness - fontHeight * 0.2 + textBox.positionY,
                textBox.positionZ
            );
            
            // Apply rotations for flat layout
            mesh.rotation.x = -Math.PI / 2;
            mesh.rotation.y = Math.PI;
            mesh.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        }
        
        this.scene.add(mesh);
        textBox.mesh = mesh;
    }

    createArchedTextMesh(textBox, font) {
        const characters = textBox.text.split('');
        const group = new THREE.Group();
        
        const totalAngle = (textBox.archAngle * Math.PI) / 180;
        const angleStep = totalAngle / Math.max(1, characters.length - 1);
        const startAngle = -totalAngle / 2;
        
        characters.forEach((char, index) => {
            if (char === ' ') return; // Skip spaces
            
            const fontHeight = textBox.bold ? 0.3 : 0.2;
            
            const geometry = new TextGeometry(char, {
                font: font,
                size: textBox.size,
                height: fontHeight,
                curveSegments: 8,
                bevelEnabled: false
            });
            
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const charWidth = bbox.max.x - bbox.min.x;
            const charHeight = bbox.max.y - bbox.min.y;
            
            // Center the character
            geometry.translate(-charWidth / 2, -charHeight / 2, 0);
            
            // Apply italic effect
            if (textBox.italic) {
                const skew = 0.3;
                geometry.applyMatrix4(new THREE.Matrix4().set(
                    1, skew, 0, 0,
                    0,   1, 0, 0,
                    0,   0, 1, 0,
                    0,   0, 0, 1
                ));
            }
            
            const material = new THREE.MeshStandardMaterial({
                color: 0x222222,
                metalness: 0.1,
                roughness: 0.9,
                transparent: true,
                opacity: 0.8
            });
            
            const charMesh = new THREE.Mesh(geometry, material);
            
            // Calculate position on arc
            const angle = startAngle + (index * angleStep);
            const x = Math.cos(angle) * textBox.archRadius * textBox.archDirection;
            const y = Math.sin(angle) * textBox.archRadius * textBox.archDirection;
            
            charMesh.position.set(x, y, 0);
            
            // Keep letters horizontal - don't rotate them to follow the curve
            // charMesh.rotation.z = angle + (textBox.archDirection === -1 ? Math.PI : 0);
            
            group.add(charMesh);
        });
        
        // Position the entire group
        if (this.currentObjectType === 'circular-pendant') {
            // For upright circular pendant, position text on the back face
            group.position.set(
                textBox.positionX,
                textBox.positionY,
                -this.pendantThickness / 2 - 1.3 + textBox.positionZ
            );
            
            // Rotate to face backward (like an engraving on the back)
            group.rotation.x = 0;
            group.rotation.y = Math.PI; // 180 degrees to face backward
            group.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        } else {
            // For other shapes, keep original positioning
            group.position.set(
                textBox.positionX,
                -this.pendantThickness - 0.2 + textBox.positionY,
                textBox.positionZ
            );
            
            // Apply rotations to the group for flat layout
            group.rotation.x = -Math.PI / 2;
            group.rotation.y = Math.PI;
            group.rotation.z = (textBox.rotationZ * Math.PI) / 180;
        }
        
        this.scene.add(group);
        textBox.mesh = group;
    }

    updateNoTextBoxesMessage() {
        const noTextBoxesMsg = document.getElementById('no-text-boxes');
        const hasTextBoxes = this.textBoxes.length > 0;
        noTextBoxesMsg.style.display = hasTextBoxes ? 'none' : 'block';
    }

    resetScene() {
        // Remove heightfield
        if (this.heightfield) {
            this.scene.remove(this.heightfield);
            this.heightfield.geometry.dispose();
            this.heightfield.material.dispose();
            this.heightfield = null;
        }

        // Remove jumpring
        if (this.jumpring) {
            this.scene.remove(this.jumpring);
            this.jumpring.geometry.dispose();
            this.jumpring.material.dispose();
            this.jumpring = null;
        }

        // Remove earring jump rings
        if (this.earringJumprings) {
            this.earringJumprings.forEach(jumpring => {
                this.scene.remove(jumpring);
                jumpring.geometry.dispose();
                jumpring.material.dispose();
            });
            this.earringJumprings = null;
        }

        // Remove engraving
        if (this.engravingMesh) {
            this.scene.remove(this.engravingMesh);
            this.engravingMesh.geometry.dispose();
            this.engravingMesh.material.dispose();
            this.engravingMesh = null;
        }

        // Remove all text boxes
        this.textBoxes.forEach(textBox => {
            if (textBox.mesh) {
                this.scene.remove(textBox.mesh);
                if (textBox.mesh.geometry) {
                    textBox.mesh.geometry.dispose();
                }
                if (textBox.mesh.material) {
                    textBox.mesh.material.dispose();
                }
                // Handle groups (arched text)
                if (textBox.mesh.children) {
                    textBox.mesh.children.forEach(child => {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();
                    });
                }
            }
        });
        
        // Clear text boxes array and UI
        this.textBoxes = [];
        this.textBoxCounter = 0;
        const textBoxContainer = document.getElementById('text-boxes-container');
        if (textBoxContainer) {
            textBoxContainer.innerHTML = '';
        }
        this.updateNoTextBoxesMessage();

        // Remove red layer
        if (this.redLayer) {
            this.scene.remove(this.redLayer);
            this.redLayer.geometry.dispose();
            this.redLayer.material.dispose();
            this.redLayer = null;
        }

        // Remove grid
        if (this.grid) {
            this.scene.remove(this.grid);
            this.grid = null;
        }

        // Clear heightfield data
        this.heightfieldData = null;
        this.originalImageDataUrl = null;
        
        // Clear sprue text
        this.clearSprueText();

        // Reset camera to default position
        this.camera.position.copy(this.defaultCameraPosition);
        this.camera.lookAt(0, 0, 0);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        // Reset UI controls to default values
        document.getElementById('image-offset-x').value = 0;
        document.getElementById('image-offset-y').value = 0;
        document.getElementById('image-scale').value = 1;
        document.getElementById('image-rotation').value = 0;

        // Reset image transform
        this.imageTransform = {
            offsetX: 0,
            offsetY: 0,
            scale: 1,
            rotation: 0
        };
        
        // Hide demo message when scene is reset
        const demoMessage = document.getElementById('demo-message');
        if (demoMessage) {
            demoMessage.style.display = 'none';
        }
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
        
        if (this.earringJumprings) {
            this.earringJumprings.forEach(jumpring => {
                jumpring.geometry.dispose();
                jumpring.material.dispose();
            });
        }
        
        if (this.engravingMesh) {
            this.engravingMesh.geometry.dispose();
            this.engravingMesh.material.dispose();
        }
        
        // Clear sprue text
        this.clearSprueText();
        
        // Dispose of renderer
        if (this.renderer) {
            this.renderer.dispose();
        }
    }

    refreshAllTextBoxes() {
        // Force regeneration of all text box meshes
        this.textBoxes.forEach(textBox => {
            this.updateTextBoxMesh(textBox);
        });
    }

    // Ruler overlay system
    initializeRulerOverlay() {
        this.createRulerMarkings();
    }
    
    setupRulerToggle() {
        const rulerToggle = document.getElementById('ruler-toggle');
        const rulerOverlay = document.getElementById('ruler-overlay');
        
        if (!rulerToggle || !rulerOverlay) return;
        
        // Initially show the ruler
        rulerOverlay.style.display = 'flex';
        
        rulerToggle.addEventListener('click', () => {
            const isActive = rulerToggle.getAttribute('data-active') === 'true';
            
            if (isActive) {
                // Hide ruler
                rulerOverlay.style.display = 'none';
                rulerToggle.setAttribute('data-active', 'false');
                rulerToggle.querySelector('.toggle-text').textContent = 'Show Ruler';
            } else {
                // Show ruler
                rulerOverlay.style.display = 'flex';
                rulerToggle.setAttribute('data-active', 'true');
                rulerToggle.querySelector('.toggle-text').textContent = 'Hide Ruler';
            }
        });
    }
    
    createRulerMarkings() {
        const horizontalRuler = document.getElementById('horizontal-ruler');
        const verticalRuler = document.getElementById('vertical-ruler');
        
        // Check if ruler elements exist before proceeding
        if (!horizontalRuler || !verticalRuler) {
            console.log('⚠️ Ruler elements not found, skipping ruler initialization');
            return;
        }
        
        // Clear existing markings
        horizontalRuler.innerHTML = '';
        verticalRuler.innerHTML = '';
        
        // Create horizontal ruler markings (50mm range, center at 0)
        const horizontalRange = 50; // mm
        const horizontalSteps = 10; // 5mm steps
        
        for (let i = 0; i <= horizontalSteps; i++) {
            const mm = (i - horizontalSteps/2) * (horizontalRange / horizontalSteps);
            const position = (i / horizontalSteps) * 100; // percentage
            
            const mark = document.createElement('div');
            mark.style.cssText = `
                position: absolute;
                left: ${position}%;
                top: 0;
                width: 1px;
                height: ${i % 2 === 0 ? '100%' : '60%'};
                background: rgba(255,255,255,0.8);
                transform: translateX(-50%);
            `;
            
            // Add label for major marks (every 10mm)
            if (i % 2 === 0) {
                const label = document.createElement('div');
                label.style.cssText = `
                    position: absolute;
                    left: ${position}%;
                    bottom: -18px;
                    transform: translateX(-50%);
                    color: rgba(255,255,255,0.8);
                    font-size: 10px;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                `;
                label.textContent = `${mm}mm`;
                horizontalRuler.appendChild(label);
            }
            
            horizontalRuler.appendChild(mark);
        }
        
        // Create vertical ruler markings  
        const verticalRange = 50; // mm
        const verticalSteps = 10; // 5mm steps
        
        for (let i = 0; i <= verticalSteps; i++) {
            const mm = (verticalSteps/2 - i) * (verticalRange / verticalSteps);
            const position = (i / verticalSteps) * 100; // percentage
            
            const mark = document.createElement('div');
            mark.style.cssText = `
                position: absolute;
                top: ${position}%;
                left: 0;
                height: 1px;
                width: ${i % 2 === 0 ? '100%' : '60%'};
                background: rgba(255,255,255,0.8);
                transform: translateY(-50%);
            `;
            
            // Add label for major marks (every 10mm)
            if (i % 2 === 0) {
                const label = document.createElement('div');
                label.style.cssText = `
                    position: absolute;
                    top: ${position}%;
                    left: -30px;
                    transform: translateY(-50%);
                    color: rgba(255,255,255,0.8);
                    font-size: 10px;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                    writing-mode: vertical-rl;
                `;
                label.textContent = `${mm}mm`;
                verticalRuler.appendChild(label);
            }
            
            verticalRuler.appendChild(mark);
        }
    }
    

}

// Initialize the viewer
console.log('🔧 About to create HeightfieldViewer...');
try {
    window.viewer = new HeightfieldViewer(); 
    console.log('✅ HeightfieldViewer created successfully:', window.viewer);
} catch (error) {
    console.error('❌ Failed to create HeightfieldViewer:', error);
    throw error;
}

// Add OpenAI functions to viewer object for modal access
window.viewer.generateImageWithOpenAI = generateImageWithOpenAI;
window.viewer.uploadDalleImageToS3 = uploadDalleImageToS3;

// Load default image (pet.png) on page load - no delay
if (window.viewer) {
    console.log('🖼️ Loading default image: pet.png');
    
    // Fetch the pet.png image
    fetch('/pet.png')
        .then(response => response.blob())
        .then(blob => {
            // Create a file object from the blob
            const file = new File([blob], 'pet.png', { type: 'image/png' });
            
            // Process the image with auto-crop (top portion) and no loading screen
            window.viewer.processImage(file, true, false, false); // true for auto-crop, false for no loading screen, false for no S3 upload
            
            // Show demo message for initial load
            const demoMessage = document.getElementById('demo-message');
            if (demoMessage) {
                demoMessage.style.display = 'block';
            }
            
            console.log('✅ Default image loaded successfully');
        })
        .catch(error => {
            console.error('❌ Failed to load default image:', error);
        });
} else {
    // If viewer not ready, wait for it (but only if absolutely necessary)
    const checkViewer = setInterval(() => {
        if (window.viewer) {
            clearInterval(checkViewer);
            console.log('🖼️ Loading default image: pet.png');
            
            fetch('/pet.png')
                .then(response => response.blob())
                .then(blob => {
                    const file = new File([blob], 'pet.png', { type: 'image/png' });
                    window.viewer.processImage(file, true, false, false);
                    const demoMessage = document.getElementById('demo-message');
                    if (demoMessage) {
                        demoMessage.style.display = 'block';
                    }
                    console.log('✅ Default image loaded successfully');
                })
                .catch(error => {
                    console.error('❌ Failed to load default image:', error);
                });
        }
    }, 10); // Check every 10ms instead of waiting 1 second
}

// Show deployment GUID in lower left
fetch('./version.json')
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById('deployment-guid');
    if (el) {
      el.textContent = `Deployment GUID: ${data.guid}\n${data.date}`;
    }
  })
  .catch(() => {
    const el = document.getElementById('deployment-guid');
    if (el) el.textContent = 'Deployment version: unknown';
  });

// Mobile debugging function
function showMobileDebug(info, isError = false) {
    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
    if (!isMobile) return;
    
    const debugPanel = document.getElementById('mobile-debug');
    const debugContent = document.getElementById('debug-content');
    
    if (debugPanel && debugContent) {
        debugContent.innerHTML = typeof info === 'object' ? JSON.stringify(info, null, 2) : info;
        debugPanel.style.display = 'block';
        debugPanel.style.background = isError ? 'rgba(255,0,0,0.9)' : 'rgba(0,150,0,0.9)';
        
        // Auto-hide after 10 seconds unless it's an error
        if (!isError) {
            setTimeout(() => {
                debugPanel.style.display = 'none';
            }, 10000);
        }
    }
}

// Function to generate image using backend OpenAI proxy
async function generateImageWithOpenAI(prompt) {
    console.log('🚀 generateImageWithOpenAI called with prompt:', prompt);
    try {
        const deviceInfo = {
            userAgent: navigator.userAgent,
            isMobile: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent),
            networkType: navigator.connection?.effectiveType || 'unknown',
            onLine: navigator.onLine,
            backendUrl: OPENAI_BACKEND_URL
        };
        
        console.log('📱 Device info:', deviceInfo);
        showMobileDebug(`Starting AI generation...\n${JSON.stringify(deviceInfo, null, 2)}`);
        
        // Test connectivity to backend first
        console.log('🔗 Testing backend connectivity...');
        console.log('🔗 Backend URL:', OPENAI_BACKEND_URL);
        try {
            const healthCheck = await fetch(`${OPENAI_BACKEND_URL}/health`, {
                method: 'GET',
                timeout: 10000
            });
            console.log('✅ Backend health check:', healthCheck.status);
            showMobileDebug(`Backend reachable: ${healthCheck.status}`);
        } catch (healthError) {
            console.error('❌ Backend health check failed:', healthError);
            showMobileDebug(`Backend unreachable: ${healthError.message}`, true);
            throw new Error(`Backend unreachable: ${healthError.message}`);
        }
        
        console.log('🌐 Making request to:', `${OPENAI_BACKEND_URL}/api/generate-image`);
        console.log('⏱️ Request started at:', new Date().toISOString());
        console.log('📝 Prompt length:', prompt.length);
        
        showLoadingOverlay();
        document.getElementById('loading-status').textContent = 'Generating image with AI...';
        
        // Check network connectivity
        if (!navigator.onLine) {
            console.error('❌ No internet connection');
            throw new Error('No internet connection detected');
        }
        
        // Add timeout to the fetch request - shorter for mobile
        const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
        const timeoutDuration = isMobile ? 45000 : 60000; // 45s mobile, 60s desktop
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            console.log(`⏰ Request timeout after ${timeoutDuration/1000} seconds (mobile: ${isMobile})`);
            controller.abort();
        }, timeoutDuration);
        
        console.log('📤 Sending request to OpenAI backend...');
        console.log('📤 Request body:', JSON.stringify({ prompt: prompt }));
        
        const response = await fetch(`${OPENAI_BACKEND_URL}/api/generate-image`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        console.log('📡 Response received at:', new Date().toISOString());
        console.log('📡 Response status:', response.status, response.statusText);
        console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
            console.error('❌ Response error data:', errorData);
            
            // Provide user-friendly error messages based on status code
            let userMessage = 'Failed to generate image';
            if (response.status === 429) {
                userMessage = 'Rate limit exceeded. Please wait a few minutes before trying again.';
            } else if (response.status === 400) {
                if (errorData.error && errorData.error.includes('billing')) {
                    userMessage = 'Billing issue detected. Please check your OpenAI account credits.';
                } else if (errorData.error && errorData.error.includes('content')) {
                    userMessage = 'Content policy violation. Please try a different prompt.';
                } else {
                    userMessage = 'Invalid request. Please try a different prompt.';
                }
            } else if (response.status === 401) {
                userMessage = 'Authentication failed. Please contact support.';
            } else if (response.status >= 500) {
                userMessage = 'Server error. Please try again later.';
            }
            
            throw new Error(userMessage);
        }

        console.log('📥 Parsing response data...');
        const data = await response.json();
        console.log('✅ Full response data:', JSON.stringify(data, null, 2));
        console.log('✅ Response data received, imageData type:', typeof data.imageData, 'length:', data.imageData ? data.imageData.length : 'null');
        
        document.getElementById('loading-status').textContent = 'Processing generated image...';
        
        // Enhanced image data validation
        if (!data.imageData) {
            console.error('❌ No image data in response');
            throw new Error('No image data received from AI generation');
        }
        
        if (typeof data.imageData !== 'string') {
            console.error('❌ Image data is not a string:', typeof data.imageData);
            throw new Error('Invalid image data format received');
        }
        
        if (data.imageData.length === 0) {
            console.error('❌ Image data is empty string');
            throw new Error('Empty image data received');
        }
        
        if (data.imageData.length < 100) {
            console.error('❌ Image data too short:', data.imageData.length, 'content:', data.imageData);
            throw new Error('Image data appears to be invalid (too short)');
        }
        
        console.log('✅ Image data validation passed:', {
            type: typeof data.imageData,
            length: data.imageData.length,
            firstChars: data.imageData.substring(0, 50),
            lastChars: data.imageData.substring(data.imageData.length - 50)
        });

        // Check if imageData is already a data URL or needs conversion
        let dataUrl;
        if (data.imageData.startsWith('data:')) {
            // Already a data URL
            dataUrl = data.imageData;
            console.log('✅ Image data is already a data URL, length:', dataUrl.length);
        } else {
            // Convert base64 to data URL
            dataUrl = `data:image/png;base64,${data.imageData}`;
            console.log('✅ Converted base64 to data URL, length:', dataUrl.length);
        }
        console.log('✅ Data URL preview:', dataUrl.substring(0, 100) + '...');
        
        // Test if the data URL is valid by creating an image
        const testImage = new Image();
        const imageLoadPromise = new Promise((resolve, reject) => {
            testImage.onload = () => {
                console.log('✅ Data URL is valid image:', testImage.width, 'x', testImage.height);
                resolve(true);
            };
            testImage.onerror = (error) => {
                console.error('❌ Data URL is invalid image:', error);
                reject(new Error('Generated image data is corrupted or invalid'));
            };
        });
        
        testImage.src = dataUrl;
        
        // Wait for image validation (with reduced timeout for faster processing)
        try {
            await Promise.race([
                imageLoadPromise,
                new Promise((_, reject) => setTimeout(() => reject(new Error('Image validation timeout')), 1000))
            ]);
        } catch (validationError) {
            console.error('❌ Image validation failed:', validationError);
            throw validationError;
        }
        
        hideLoadingOverlay();
        console.log('✅ generateImageWithOpenAI completed successfully');
        return dataUrl;
        
    } catch (error) {
        console.error('❌ Error in generateImageWithOpenAI:', error);
        console.error('❌ Error stack:', error.stack);
        hideLoadingOverlay();
        throw error;
    }
}

// Functions will be made globally available at the end of the file

// Function to upload DALL-E generated image to S3
async function uploadDalleImageToS3(imageBlob, prompt) {
    try {
        console.log('📋 Requesting signed URL for DALL-E image upload...');
        
        // Get signed upload URL for DALL-E images
        const uploadUrlResponse = await fetch(`${BACKEND_URL}/api/get-dalle-upload-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileType: imageBlob.type,
                prompt: prompt
            })
        });

        if (!uploadUrlResponse.ok) {
            const errorText = await uploadUrlResponse.text();
            throw new Error(`Failed to get upload URL: ${uploadUrlResponse.status} - ${errorText}`);
        }

        const uploadData = await uploadUrlResponse.json();
        console.log('✅ Got signed URL for DALL-E image:', uploadData.filename);

        // Upload the image to S3
        console.log('📤 Uploading DALL-E image to S3...');
        const uploadResponse = await fetch(uploadData.uploadUrl, {
            method: 'PUT',
            body: imageBlob,
            headers: {
                'Content-Type': imageBlob.type
            }
        });

        if (!uploadResponse.ok) {
            throw new Error(`S3 upload failed: ${uploadResponse.status}`);
        }

        console.log('✅ DALL-E image uploaded successfully to S3:', uploadData.filename);
        return {
            success: true,
            filename: uploadData.filename,
            guid: uploadData.guid,
            s3Key: uploadData.filename
        };

    } catch (error) {
        console.error('❌ DALL-E S3 image upload error:', error);
        throw error;
    }
}

// Add watermark functionality after scene setup
function addWatermark() {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('./assets/foreverAndEverJewelry.png', function(texture) {
        // Create watermark material with transparency
        const watermarkMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.3, // Semi-transparent
            alphaTest: 0.1,
            side: THREE.DoubleSide
        });
        
        // Create plane geometry for the watermark
        const watermarkGeometry = new THREE.PlaneGeometry(8, 4); // Adjust size as needed
        const watermarkMesh = new THREE.Mesh(watermarkGeometry, watermarkMaterial);
        
        // Position watermark in bottom-right corner
        watermarkMesh.position.set(15, -10, 5); // Adjust position as needed
        watermarkMesh.name = 'watermark';
        
        // Add to scene
        scene.add(watermarkMesh);
        
        console.log('Watermark loaded and added to scene');
    }, undefined, function(error) {
        console.error('Error loading watermark:', error);
    });
}

// Call addWatermark after scene is initialized
// ... existing code ...

// Add this call after scene initialization
if (typeof scene !== 'undefined') {
    addWatermark();
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const uiMenu = document.getElementById('ui-menu');
    
    // Prevent multiple initializations
    if (window.mobileMenuInitialized) {
        console.log('Mobile menu already initialized, skipping...');
        return;
    }
    
    let isMenuOpen = false;

    // Check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Toggle menu function
    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        if (!isMobile()) return;
        
        console.log('Toggle menu clicked, current state:', isMenuOpen);
        
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            uiMenu.classList.add('mobile-open');
            uiMenu.style.transform = 'translateY(0)';
            mobileToggle.style.transform = 'rotate(45deg)';
            mobileToggle.innerHTML = '✕';
            console.log('Menu opened');
        } else {
            uiMenu.classList.remove('mobile-open');
            uiMenu.style.transform = 'translateY(100%)';
            mobileToggle.style.transform = 'rotate(0deg)';
            mobileToggle.innerHTML = '⚙️';
            console.log('Menu closed');
        }
    }

    // Close menu when clicking outside
    function handleOutsideClick(event) {
        console.log('handleOutsideClick triggered on:', event.target);
        console.log('isMobile():', isMobile());
        console.log('isMenuOpen:', isMenuOpen);
        
        if (!isMobile() || !isMenuOpen) {
            console.log('handleOutsideClick returning early');
            return;
        }
        
        const isClickInsideMenu = uiMenu && uiMenu.contains(event.target);
        const isClickOnToggle = mobileToggle && mobileToggle.contains(event.target);
        
        console.log('isClickInsideMenu:', isClickInsideMenu);
        console.log('isClickOnToggle:', isClickOnToggle);
        
        if (!isClickInsideMenu && !isClickOnToggle) {
            console.log('Outside click detected, closing menu');
            toggleMenu();
        }
    }

    // Handle window resize
    function handleResize() {
        if (!isMobile() && isMenuOpen) {
            // Reset menu state when switching to desktop
            uiMenu.classList.remove('mobile-open');
            uiMenu.style.transform = 'translateY(100%)';
            mobileToggle.style.transform = 'rotate(0deg)';
            mobileToggle.innerHTML = '⚙️';
            isMenuOpen = false;
            console.log('Menu reset due to window resize');
        }
    }

    // Add event listeners with proper error handling
    if (mobileToggle) {
        // Remove any existing listeners first
        mobileToggle.removeEventListener('click', toggleMenu);
        mobileToggle.addEventListener('click', toggleMenu);
        console.log('Mobile toggle button listener added');
    } else {
        console.warn('Mobile toggle button not found');
    }
    
    if (uiMenu) {
        console.log('UI menu found, adding outside click listener');
    } else {
        console.warn('UI menu not found');
    }
    
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    // Touch support for menu drag
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    function handleTouchStart(event) {
        if (!isMobile()) return;
        startY = event.touches[0].clientY;
        isDragging = true;
        uiMenu.style.transition = 'none';
    }

    function handleTouchMove(event) {
        if (!isMobile() || !isDragging) return;
        
        currentY = event.touches[0].clientY;
        const deltaY = currentY - startY;
        
        // Only allow downward drag when menu is open
        if (isMenuOpen && deltaY > 0) {
            const translateY = Math.min(deltaY, window.innerHeight * 0.6);
            uiMenu.style.transform = `translateY(${translateY}px)`;
        }
    }

    function handleTouchEnd() {
        if (!isMobile() || !isDragging) return;
        
        isDragging = false;
        uiMenu.style.transition = 'transform 0.3s ease';
        
        const deltaY = currentY - startY;
        
        // Close menu if dragged down more than 100px
        if (isMenuOpen && deltaY > 100) {
            console.log('Menu closed by drag gesture');
            toggleMenu();
        } else {
            // Snap back to position
            uiMenu.style.transform = isMenuOpen ? 'translateY(0)' : 'translateY(100%)';
        }
    }

    // Add touch event listeners to menu
    if (uiMenu) {
        uiMenu.addEventListener('touchstart', handleTouchStart, { passive: true });
        uiMenu.addEventListener('touchmove', handleTouchMove, { passive: true });
        uiMenu.addEventListener('touchend', handleTouchEnd, { passive: true });
        console.log('Touch event listeners added to menu');
    }

    // Mark as initialized
    window.mobileMenuInitialized = true;
    console.log('✅ Mobile menu functionality initialized');
}

// Test backend connectivity function
async function testBackendConnectivity() {
    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
    console.log('🧪 Testing backend connectivity...');
    
    try {
        showMobileDebug('Testing backend connection...');
        const response = await fetch(`${OPENAI_BACKEND_URL}/health`);
        const data = await response.json();
        
        const result = {
            status: response.status,
            statusText: response.statusText,
            data: data,
            timestamp: new Date().toISOString()
        };
        
        console.log('✅ Backend test result:', result);
        showMobileDebug(`Backend test successful:\n${JSON.stringify(result, null, 2)}`);
        return true;
    } catch (error) {
        console.error('❌ Backend test failed:', error);
        showMobileDebug(`Backend test failed:\n${error.message}\n\nThis means AI generation won't work.`, true);
        return false;
    }
}

// Add backend test button for mobile debugging
if (/Mobile|Android|iPhone|iPad/.test(navigator.userAgent)) {
    window.testBackend = testBackendConnectivity;
    console.log('📱 Mobile detected. You can test backend by calling: testBackend()');
}

// Enhanced mobile cropper experience
function enhanceMobileCropping() {
    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
    if (!isMobile) return;
    
    console.log('📱 Enhancing mobile cropping experience...');
    
    // Function to improve cropper for mobile when modal opens
    function setupMobileCropper() {
        const cropperModal = document.getElementById('cropper-modal');
        const cropperImage = document.getElementById('cropper-image');
        
        if (!cropperModal || !cropperImage) return;
        
        // Add mobile-specific event listeners
        cropperImage.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
        }, { passive: false });
        
        cropperImage.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scrolling while cropping
        }, { passive: false });
        
        // Add double-tap to zoom
        let lastTap = 0;
        cropperImage.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 500 && tapLength > 0) {
                // Double tap detected - zoom to fit
                if (window.cropper) {
                    window.cropper.reset();
                }
            }
            lastTap = currentTime;
        });
        
        // Observe when cropper modal is shown
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const isVisible = cropperModal.style.display !== 'none';
                    if (isVisible) {
                        setTimeout(() => {
                            // Add mobile-friendly cropper styles when shown
                            const cropBox = document.querySelector('.cropper-crop-box');
                            const points = document.querySelectorAll('.cropper-point');
                            const lines = document.querySelectorAll('.cropper-line');
                            
                            if (cropBox) {
                                cropBox.style.border = '3px solid #39f';
                                cropBox.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.5)';
                            }
                            
                            points.forEach(point => {
                                point.style.width = '24px';
                                point.style.height = '24px';
                                point.style.background = '#39f';
                                point.style.border = '2px solid white';
                                point.style.borderRadius = '50%';
                            });
                            
                            lines.forEach(line => {
                                line.style.background = 'rgba(57, 255, 255, 0.3)';
                            });
                            
                                                         // Show mobile instructions
                             const mobileInstructions = document.getElementById('mobile-crop-instructions');
                             if (mobileInstructions) {
                                 mobileInstructions.style.display = 'block';
                                 // Hide instructions after 3 seconds
                                 setTimeout(() => {
                                     mobileInstructions.style.display = 'none';
                                 }, 3000);
                             }
                             
                             console.log('✅ Mobile cropper styles applied');
                         }, 100);
                    }
                }
            });
        });
        
        observer.observe(cropperModal, { attributes: true });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupMobileCropper);
    } else {
        setupMobileCropper();
    }
}

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileMenu);
} else {
    initializeMobileMenu();
}

// Initialize mobile cropping enhancements
enhanceMobileCropping();

// Draggable control panel functionality
// Control panel is fixed - no drag functionality needed

// Control panel is fixed - no drag initialization needed

// Simple draggable control panel
let dragInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - setting up control panel...');
    

    
        // Control panel is fixed in position - no drag functionality
    console.log('Control panel is fixed in position');
});

// Make functions globally available at the end of the file
// This ensures all functions are defined before being assigned to window
if (typeof generateImageWithOpenAI === 'function') {
    window.generateImageWithOpenAI = generateImageWithOpenAI;
    console.log('✅ generateImageWithOpenAI assigned to window');
} else {
    console.error('❌ generateImageWithOpenAI not defined');
}

if (typeof uploadDalleImageToS3 === 'function') {
    window.uploadDalleImageToS3 = uploadDalleImageToS3;
    console.log('✅ uploadDalleImageToS3 assigned to window');
} else {
    console.error('❌ uploadDalleImageToS3 not defined');
}

