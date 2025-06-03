const fs = require('fs');
const path = require('path');

function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const guid = generateGUID();
const versionInfo = { guid, date: new Date().toISOString() };

const outPath = path.join(__dirname, 'public', 'version.json');
fs.writeFileSync(outPath, JSON.stringify(versionInfo, null, 2));
console.log('Deployment GUID:', guid); 