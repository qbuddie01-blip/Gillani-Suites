const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://gallanisuites.com/',
  'https://gallanisuites.com/rooms-suites/',
  'https://gallanisuites.com/about-the-hotel/',
  'https://gallanisuites.com/restaurants-bars/',
  'https://gallanisuites.com/events-meetings/',
  'https://gallanisuites.com/spa-wellness/',
  'https://gallanisuites.com/our-gallery/',
  'https://gallanisuites.com/contact/',
  'https://gallanisuites.com/room/executive-suites/',
  'https://gallanisuites.com/room/diplomatic-suites/',
  'https://gallanisuites.com/room/royal-suites/',
  'https://gallanisuites.com/room/queen-suites/',
  'https://gallanisuites.com/room/superior-master/',
  'https://gallanisuites.com/room/standard-room/',
  'https://gallanisuites.com/room/deluxe-room/',
  'https://gallanisuites.com/room/king-suites/',
  'https://gallanisuites.com/room/cabana-suite/',
  'https://gallanisuites.com/room/presidential-suite/'
];

fs.mkdirSync('scraped_data', { recursive: true });
fs.mkdirSync('public/assets/real_hotel', { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function run() {
  const siteData = {};
  const allImages = new Set();
  const rawRoomDetails = {};

  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`);
      const html = await fetchUrl(url);
      
      let pageSlug = url.replace(/\/$/, '').split('/').pop();
      if (!pageSlug || pageSlug.includes('gallanisuites.com')) pageSlug = 'home';
      
      fs.writeFileSync(`scraped_data/${pageSlug}.html`, html, 'utf-8');

      // extract images
      const imgRegex = /(?:src|srcset|href)=["'](https:\/\/gallanisuites\.com\/wp-content\/uploads\/[^"'\s,]+)/gi;
      let match;
      const pageImages = new Set();
      while ((match = imgRegex.exec(html)) !== null) {
        let imgUrl = match[1];
        if (/\.(jpg|jpeg|png|webp|svg)$/i.test(imgUrl)) {
          pageImages.add(imgUrl);
          allImages.add(imgUrl);
        }
      }

      // extract headings
      const hRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
      const headings = [];
      while ((match = hRegex.exec(html)) !== null) {
        const text = match[1].replace(/<[^>]+>/g, '').trim();
        if (text) headings.push(text);
      }

      siteData[url] = {
        title: (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
        slug: pageSlug,
        headings,
        images: Array.from(pageImages)
      };
      console.log(`Done ${pageSlug}: ${pageImages.size} images`);
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }

  siteData.all_unique_images = Array.from(allImages);
  fs.writeFileSync('scraped_data/manifest.json', JSON.stringify(siteData, null, 2), 'utf-8');
  console.log(`\nDiscovered ${allImages.size} unique images total!`);
}

run();
