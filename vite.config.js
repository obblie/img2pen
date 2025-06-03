import { execSync } from 'child_process';
import { randomUUID } from 'crypto';

const getVersionGUID = () => {
  try {
    // Try to get git commit hash first
    const gitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    return `v${gitHash}-${Date.now().toString(36)}`;
  } catch (error) {
    // Fallback to random GUID
    return `v${randomUUID().split('-')[0]}-${Date.now().toString(36)}`;
  }
};

export default {
  base: '/img2pen/',
  define: {
    '__VERSION_GUID__': JSON.stringify(getVersionGUID())
  },
  build: {
    minify: false
  }
}; 