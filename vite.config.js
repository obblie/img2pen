// Determine if we're in local development
// Set VITE_USE_LOCAL_BACKEND=true to use localhost backend, otherwise use online backend
const isLocalDev = process.env.VITE_USE_LOCAL_BACKEND === 'true';

// Backend URLs - default to online backends unless explicitly set to use local
const S3_BACKEND_URL = isLocalDev ? 'http://localhost:3000' : 'https://img2pen-s3-backend.onrender.com';
const OPENAI_BACKEND_URL = isLocalDev ? 'http://localhost:3000' : 'https://img2pen-openai-backend.onrender.com';

export default {
  base: '/',
  server: {
    proxy: {
      '/api/generate-image': {
        target: OPENAI_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      },
      '/health': {
        target: OPENAI_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      },
      '/api/get-upload-url': {
        target: S3_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      },
      '/api/get-dalle-upload-url': {
        target: S3_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      },
      '/api/get-image-upload-url': {
        target: S3_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      },
      '/api/get-cropped-image-upload-url': {
        target: S3_BACKEND_URL,
        changeOrigin: true,
        secure: !isLocalDev,
        rewrite: (path) => path
      }
    }
  }
}; 