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
      }
    }
  }
}; 