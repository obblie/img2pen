export default {
  base: '/',
  server: {
    proxy: {
      '/api/generate-image': {
        target: 'https://img2pen-openai-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      },
      '/health': {
        target: 'https://img2pen-openai-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      },
      '/api/get-upload-url': {
        target: 'https://img2pen-s3-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      },
      '/api/get-dalle-upload-url': {
        target: 'https://img2pen-s3-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      },
      '/api/get-image-upload-url': {
        target: 'https://img2pen-s3-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      }
    }
  }
}; 