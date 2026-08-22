import urllib.request
import re
import json
import os

urls = [
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
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

os.makedirs('scraped_data', exist_ok=True)

site_data = {}
all_images = set()

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=25) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            page_slug = url.strip('/').split('/')[-1]
            if not page_slug or 'gallanisuites.com' in page_slug:
                page_slug = 'home'
            with open(f'scraped_data/{page_slug}.html', 'w', encoding='utf-8') as f:
                f.write(html)
                
            imgs = re.findall(r'src=["\'](https://gallanisuites\.com/wp-content/uploads/[^"\']+)["\']', html)
            imgs += re.findall(r'srcset=["\'](https://gallanisuites\.com/wp-content/uploads/[^"\']+)["\']', html)
            imgs += re.findall(r'href=["\'](https://gallanisuites\.com/wp-content/uploads/[^"\']+\.(?:jpg|jpeg|png|webp))["\']', html)
            
            clean_imgs = []
            for img in imgs:
                for part in img.split(','):
                    url_clean = part.strip().split(' ')[0]
                    if 'wp-content/uploads' in url_clean:
                        clean_imgs.append(url_clean)
                        all_images.add(url_clean)
                        
            title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
            title = title_match.group(1) if title_match else ''
            
            headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.IGNORECASE | re.DOTALL)
            clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if h.strip()]
            
            site_data[url] = {
                'title': title,
                'slug': page_slug,
                'headings': clean_headings,
                'images': list(set(clean_imgs))
            }
            print(f"Scraped {url}: {len(clean_imgs)} images found")
    except Exception as e:
        print(f"Error scraping {url}: {e}")

site_data['all_images_list'] = sorted(list(all_images))
with open('scraped_data/site_manifest.json', 'w', encoding='utf-8') as f:
    json.dump(site_data, f, indent=2)

print(f"\nTotal unique images discovered: {len(all_images)}")
