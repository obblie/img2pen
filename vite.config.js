import { defineConfig } from 'vite';

export default defineConfig({
  base: '/img2pen/',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep assets in the assets folder
          if (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.jpeg')) {
            return 'assets/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  }
}); 