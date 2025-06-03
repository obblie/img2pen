import { execSync } from 'child_process';

const getGitTimestamp = () => {
  try {
    return execSync('git log -1 --format=%cd --date=iso', { encoding: 'utf8' }).trim();
  } catch (error) {
    return new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  }
};

export default {
  base: '/img2pen/',
  define: {
    '__GIT_TIMESTAMP__': JSON.stringify(getGitTimestamp())
  },
  build: {
    minify: false
  }
}; 