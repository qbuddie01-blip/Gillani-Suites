const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Logo and Branding');
const destDir = path.join(__dirname, 'public', 'assets', 'branding');
fs.mkdirSync(destDir, { recursive: true });

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const f of files) {
    fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
    console.log(`Copied ${f} to public/assets/branding/`);
  }
}
