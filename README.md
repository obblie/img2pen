# Image to 3D Relief Viewer

A web application that converts 2D images into 3D heightfield meshes for previewing relief models. The application allows users to drag and drop images or select them through a file picker, and generates a 3D preview with the following specifications:

- Maximum depth (Z-height): 0.7mm
- Fixed width (X-axis): 25mm
- Height (Y-axis): Automatically scaled to maintain image aspect ratio

## Features

- Drag and drop image upload
- File picker for image selection
- Real-time 3D preview with OrbitControls
- Automatic scaling to physical dimensions
- Responsive design
- Support for common image formats (JPG, PNG, BMP)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

1. Open the application in your web browser
2. Drag and drop an image file onto the drop zone, or click to select a file
3. The application will automatically generate a 3D heightfield mesh from the image
4. Use the following controls to interact with the 3D view:
   - Left mouse button: Rotate
   - Right mouse button: Pan
   - Mouse wheel: Zoom
   - Middle mouse button: Pan

## Technical Details

The application uses:
- Three.js for 3D rendering
- Vite for development and building
- HTML5 Canvas for image processing
- Modern JavaScript (ES6+) features

## License

MIT 