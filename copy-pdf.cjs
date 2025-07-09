

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'Manav Resume with links.pdf');
const destDir = path.join(__dirname, 'dist');
const dest = path.join(destDir, 'Manav Resume with links.pdf');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

fs.copyFileSync(src, dest);
console.log('PDF copied to dist/');
