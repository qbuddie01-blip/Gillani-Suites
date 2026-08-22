const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const manifest = JSON.parse(fs.readFileSync('scraped_data/manifest.json', 'utf-8'));
const images = manifest.all_unique_images || [];

const targetDir = path.join(__dirname, 'public', 'assets', 'hotel');
fs.mkdirSync(targetDir, { recursive: true });

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 500) {
      return resolve(true);
    }
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 20000
    }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });
        fileStream.on('error', () => resolve(false));
      } else {
        resolve(false);
      }
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

async function downloadAll() {
  console.log(`Starting download of ${images.length} assets...`);
  let count = 0;
  const urlMap = {};

  for (const imgUrl of images) {
    const filename = path.basename(imgUrl.split('?')[0]);
    if (!filename || filename.length < 3) continue;
    const dest = path.join(targetDir, filename);
    const success = await downloadImage(imgUrl, dest);
    if (success) {
      count++;
      urlMap[imgUrl] = `/assets/hotel/${filename}`;
    } else {
      urlMap[imgUrl] = imgUrl; // fallback
    }
    if (count % 10 === 0) {
      console.log(`Downloaded ${count}/${images.length}...`);
    }
  }

  fs.writeFileSync('scraped_data/image_url_map.json', JSON.stringify(urlMap, null, 2), 'utf-8');
  console.log(`Completed asset download: ${count} saved locally to public/assets/hotel/`);
}

downloadAll();
