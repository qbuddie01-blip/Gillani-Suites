const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scraped_data').filter(f => f.endsWith('.html'));

const parsedData = {
  rooms: [],
  pages: {}
};

function stripTags(html) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
             .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
             .replace(/<[^>]+>/g, ' ')
             .replace(/\s+/g, ' ')
             .trim();
}

for (const file of files) {
  const pageName = file.replace('.html', '');
  const html = fs.readFileSync(path.join('scraped_data', file), 'utf-8');

  // Extract all text content
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
  
  // Extract images
  const imgMatches = html.match(/(?:src|href)=["'](https:\/\/gallanisuites\.com\/wp-content\/uploads\/[^"'\s]+?\.(?:jpg|jpeg|png|webp))/gi) || [];
  const images = Array.from(new Set(imgMatches.map(m => m.replace(/^(?:src|href)=["']/, ''))));

  if (file.startsWith('executive-') || file.startsWith('diplomatic-') || file.startsWith('royal-') || 
      file.startsWith('queen-') || file.startsWith('superior-') || file.startsWith('standard-') || 
      file.startsWith('deluxe-') || file.startsWith('king-') || file.startsWith('cabana-') || 
      file.startsWith('presidential-')) {
    
    // Extract room price if any
    const priceMatch = html.match(/(?:₦|NGN|&#8358;|from|Price)\s*([\d,]+)/i) || html.match(/([\d,]+)\s*(?:\/|\s*per)\s*night/i);
    const price = priceMatch ? priceMatch[1] : '';

    // Extract amenities
    const amenities = [];
    const amenityMatches = html.match(/<li[^>]*>(.*?)<\/li>/gi) || [];
    for (const am of amenityMatches) {
      const txt = stripTags(am);
      if (txt && txt.length < 50 && !txt.includes('http') && !txt.includes('Copyright')) {
        amenities.push(txt);
      }
    }

    // Extract description paragraphs
    const paragraphs = [];
    const pMatches = html.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
    for (const p of pMatches) {
      const txt = stripTags(p);
      if (txt.length > 25 && !txt.includes('Copyright') && !txt.includes('JavaScript')) {
        paragraphs.push(txt);
      }
    }

    parsedData.rooms.push({
      slug: pageName,
      title: title.split('-')[0].trim(),
      price,
      paragraphs,
      amenities: Array.from(new Set(amenities)),
      images
    });
  } else {
    parsedData.pages[pageName] = {
      title,
      images,
      textSnippet: stripTags(html).substring(0, 3000)
    };
  }
}

fs.writeFileSync('scraped_data/parsed_site_data.json', JSON.stringify(parsedData, null, 2), 'utf-8');
console.log(`Parsed ${parsedData.rooms.length} rooms and ${Object.keys(parsedData.pages).length} pages.`);
