import { RoomSuite, DiningVenue, EventHall, WellnessService, GalleryItem, Testimonial } from '../types';

export const HOTEL_INFO = {
  name: 'GALLANI SUITES',
  descriptor: 'Hotels, Banquets & Suites',
  tagline: 'A World of Elegance, Awaits You',
  shortDesc: 'Nestled in the tranquil enclave of Jericho GRA in Ibadan, Gallani Suites offers an elevated stay shaped around comfort, discretion, contemporary architecture, and warm hospitality.',
  address: 'No. 1 Abel Awe Close, off Oladele Ajao Street, Jericho GRA, Ibadan, Oyo State, Nigeria',
  phone1: '+234 705 556 7775',
  phone2: '+234 708 000 2022',
  phoneSpa: '+234 701 120 8309',
  emailGeneral: 'info@gallanisuites.com',
  emailReservations: 'reservations@gallanisuites.com',
  emailEvents: 'events@gallanisuites.com',
  emailDining: 'restaurant@gallanisuites.com',
  emailWellness: 'wellness@gallanisuites.com',
  checkIn: '2:00 PM',
  checkOut: '12:00 PM',
  minCheckInAge: 18,
  totalSuites: 103,
  locationCoordinates: {
    lat: 7.3912,
    lng: 3.8645
  },
  socials: {
    instagram: 'https://instagram.com/gallanisuites',
    facebook: 'https://facebook.com/gallanisuites',
    twitter: 'https://twitter.com/gallanisuites'
  }
};

export const EXCHANGE_RATES: Record<string, { symbol: string; rate: number; prefix: boolean; note: string }> = {
  NGN: { symbol: '₦', rate: 1, prefix: true, note: 'Official billing currency' },
  USD: { symbol: '$', rate: 0.00067, prefix: true, note: 'Indicative conversion' },
  GBP: { symbol: '£', rate: 0.00052, prefix: true, note: 'Indicative conversion' },
  EUR: { symbol: '€', rate: 0.00061, prefix: true, note: 'Indicative conversion' }
};

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'presidential-suite',
    slug: 'presidential-suite',
    title: 'Presidential Suite',
    category: 'Presidential',
    tagline: 'The Ultimate Sovereign Experience in Jericho',
    priceNGN: 250000,
    sizeSqM: 110,
    maxGuests: 4,
    bedType: 'Super King-Size Royal Bed',
    bathroomType: 'Marble En-Suite with Jacuzzi & Rain Shower',
    view: 'Panoramic Cityscape & Jericho Garden Vistas',
    hasBalcony: true,
    hasLivingRoom: true,
    breakfastIncluded: true,
    featured: true,
    isPresidential: true,
    description: 'The pinnacle of luxury in Ibadan. A palatial haven featuring a master bedroom with bespoke royal furnishings, an expansive separate lounge, executive study, dining area, and dedicated resident service.',
    longDescription: 'Designed for heads of state, dignitaries, and guests seeking unmatched privacy. The Presidential Suite at Gallani Suites delivers an uncompromising sanctuary of quiet luxury. Featuring custom hardwood finishes, ambient Italian lighting fixtures, a deep soaking Jacuzzi, walk-in dressing quarters, and private terrace views overlooking the tree-lined avenues of Jericho GRA.',
    amenities: [
      '24/7 Dedicated Resident Butler & Concierge Support',
      'Complimentary Gourmet Champagne & Fresh Fruit Platter',
      'Expansive Separate Living Room & Executive Study',
      'Marble Bathroom with Jacuzzi Jet Bath & Rain Shower',
      'Two 65" 4K Smart Ultra-HD TVs with Satellite Channels',
      'High-Speed Wi-Fi Dedicated Bandwidth',
      'Chef-Prepared Breakfast for In-House Guests',
      'In-Suite Nespresso Bar & Curated Beverage Selection',
      'Plush Cotton Robes & Premium Toiletries',
      'Climate-Controlled Multi-Zone Air Conditioning',
      'Executive Working Desk & Digital Safe Box'
    ],
    vipPerks: [
      'Priority Check-in & Late Check-out (Subject to Availability)',
      'Access to Private Executive Lounge',
      'Evening Turn-down Service with Artisanal Treats'
    ],
    heroImage: '/assets/hotel/pres-2-780x519.jpg',
    galleryImages: [
      '/assets/hotel/pres-2-780x519.jpg',
      '/assets/hotel/pres-3-780x519.jpg',
      '/assets/hotel/pres-4-780x519.jpg',
      '/assets/hotel/pres-5-780x519.jpg',
      '/assets/hotel/pres-6-780x519.jpg',
      '/assets/hotel/pres-7-780x519.jpg',
      '/assets/hotel/pres-8-780x519.jpg'
    ]
  },
  {
    id: 'king-suites',
    slug: 'king-suites',
    title: 'King Suites (Terrace Suite II)',
    category: 'King',
    tagline: 'Elevated Retreat with Expansive Private Terrace',
    priceNGN: 220000,
    sizeSqM: 85,
    maxGuests: 2,
    bedType: 'Custom King-Size Luxury Bed',
    bathroomType: 'Designer Bathroom with Soaking Tub',
    view: 'Private Terrace & Jericho Skyline',
    hasBalcony: true,
    hasLivingRoom: true,
    breakfastIncluded: true,
    featured: true,
    description: 'An expansive royal residence offering a spacious separate living room, plush king-size bed, private outdoor terrace, and meticulous modern appointments.',
    longDescription: 'Immerse yourself in elevated luxury with our King Suite (Terrace Suite II). Step out onto your private balcony for serene morning coffee while overlooking the Jericho landscape. Featuring a separate designer living area, spa-inspired en-suite bathroom with hairdryer, bathrobes, complimentary high-speed Wi-Fi, and climate control.',
    amenities: [
      'Private Outdoor Terrace with Lounge Seating',
      'Spacious Separate Designer Living Room',
      'Plush King-Size Mattress with Fine Linens',
      'En-Suite Bathroom with Soaking Tub & Power Shower',
      '55" 4K Smart TV with Streaming Capabilities',
      'High-Speed Complimentary Wi-Fi',
      'Complimentary Daily Gourmet Breakfast',
      'In-Room Espresso & Tea Station',
      'Mini Bar & Refrigerator',
      'Daily Housekeeping & Evening Turn-Down Service'
    ],
    vipPerks: [
      'Priority Table Reservation at Gallani Dining',
      'Welcome Refreshment on Arrival'
    ],
    heroImage: '/assets/hotel/DT-II-1-780x520.jpg',
    galleryImages: [
      '/assets/hotel/DT-II-1-780x520.jpg',
      '/assets/hotel/DT-II-2-780x520.jpg',
      '/assets/hotel/DT-II-3-780x520.jpg',
      '/assets/hotel/DT-II-4-780x520.jpg',
      '/assets/hotel/DT-II-5-780x520.jpg'
    ]
  },
  {
    id: 'queen-suites',
    slug: 'queen-suites',
    title: 'Queen Suites (Terrace Suite I)',
    category: 'Queen',
    tagline: 'Refined Living with Private Balcony Serenity',
    priceNGN: 200000,
    sizeSqM: 75,
    maxGuests: 2,
    bedType: 'King-Size Opulent Bed',
    bathroomType: 'Modern Marble Bathroom',
    view: 'Lush Courtyard & Jericho Vistas',
    hasBalcony: true,
    hasLivingRoom: true,
    breakfastIncluded: true,
    featured: true,
    description: 'Unwind in a spacious suite featuring a separate living salon, private balcony, marble bathroom, and state-of-the-art climate control.',
    longDescription: 'Indulge in comfort with our Terrace Suite I at Gallani Suites Hotel. Unwind in a spacious, separate living area, and step out onto your private balcony for fresh air. The exquisite bathroom, complete with hairdryer and premium toiletries, ensures an elevated stay.',
    amenities: [
      'Private Balcony with Panoramic Garden Outlook',
      'Independent Living Salon with Sofa Suite',
      'Grand King Bed with Hypoallergenic Pillows',
      'Exquisite En-Suite Bathroom with Hairdryer',
      'Smart TV with Streaming & Satellite Channels',
      'Free High-Speed Wi-Fi Access',
      'Complimentary Breakfast Buffet or Room Service',
      'Individual Climate Control & Digital Safe',
      'Access to Fitness Studio & Pool'
    ],
    vipPerks: [
      'Welcome Drink & Cold Towel Service',
      'Access to Resident Wellness Facilities'
    ],
    heroImage: '/assets/hotel/DTI-1-780x519.jpg',
    galleryImages: [
      '/assets/hotel/DTI-1-780x519.jpg',
      '/assets/hotel/DTI-3-780x519.jpg',
      '/assets/hotel/DTI-4-780x519.jpg',
      '/assets/hotel/DT1-780x519.jpg',
      '/assets/hotel/DTI-7-780x519.jpg',
      '/assets/hotel/DTI-6-780x519.jpg'
    ]
  },
  {
    id: 'cabana-suite',
    slug: 'cabana-suite',
    title: 'Cabana Suite',
    category: 'Cabana',
    tagline: 'Exclusive Private Enclave of Calm',
    priceNGN: 200000,
    sizeSqM: 70,
    maxGuests: 2,
    bedType: 'King-Size Plush Bed',
    bathroomType: 'Walk-In Rain Shower En-Suite',
    view: 'Private Poolside & Garden View',
    hasBalcony: true,
    hasLivingRoom: true,
    breakfastIncluded: true,
    description: 'Escape to a private enclave with contemporary architecture, natural lush surroundings, seamless indoor-outdoor feel, and modern luxury amenities.',
    longDescription: 'The Cabana Suite offers a secluded sanctuary for guests seeking privacy and relaxed luxury. Situated with direct visual access to the lush outdoor oasis and pool, this suite combines contemporary organic textures with sophisticated comfort.',
    amenities: [
      'Direct Outdoor Oasis Atmosphere',
      'Private Terrace Seating Area',
      'Opulent King Bed with Luxury Bedding',
      'Designer Bathroom with Glass Rain Shower',
      'Smart 4K TV & Streaming Entertainment',
      'Free High-Speed Internet',
      'Complimentary Daily Breakfast for Two',
      '24/7 Room Service & Concierge'
    ],
    vipPerks: [
      'Poolside Reserved Sun Lounger',
      'Complimentary Refreshment on Arrival'
    ],
    heroImage: '/assets/hotel/20240417_153154.jpg',
    galleryImages: [
      '/assets/hotel/20240417_153154.jpg',
      '/assets/hotel/20240417_153422.jpg',
      '/assets/hotel/20240417_153428.jpg',
      '/assets/hotel/20240417_153438.jpg',
      '/assets/hotel/20240417_153515.jpg',
      '/assets/hotel/20240417_153547.jpg'
    ]
  },
  {
    id: 'diplomatic-suites',
    slug: 'diplomatic-suites',
    title: 'Diplomatic Suites',
    category: 'Diplomatic',
    tagline: 'Commanding Style, Discretion & Prestige',
    priceNGN: 180000,
    sizeSqM: 68,
    maxGuests: 2,
    bedType: 'King-Size Royal Mattress',
    bathroomType: 'Marble Bathroom with Vanity',
    view: 'Jericho Estate View',
    hasBalcony: false,
    hasLivingRoom: true,
    breakfastIncluded: true,
    featured: true,
    description: 'Tailored for corporate leaders and diplomats. Features a dedicated living room, executive desk, king-size bed, and lavish appointments.',
    longDescription: 'Experience refined elegance in our Diplomatic Suite at Gallani Suites. Immerse yourself in a beautifully furnished interior that combines sophistication with comfort. Drift into a restful sleep on our king-size beds, stay connected with complimentary Wi-Fi, and enjoy the perfect climate with multi-zone air conditioning.',
    amenities: [
      'Dedicated Living Area with Executive Seating',
      'King-Size Premium Bedding',
      'Exquisite En-Suite Bathroom with Hairdryer & Robes',
      'Executive Workstation with Ergonomic Chair',
      'Smart TV & High-Speed Wi-Fi',
      'Complimentary Breakfast',
      'Daily Laundry Service Access',
      'Complimentary Access to Gym & Swimming Pool'
    ],
    vipPerks: [
      'Express Resident Registration'
    ],
    heroImage: '/assets/hotel/DS-1-780x519.jpg',
    galleryImages: [
      '/assets/hotel/DS-1-780x519.jpg',
      '/assets/hotel/DS-2.jpg',
      '/assets/hotel/DS-3.jpg',
      '/assets/hotel/DS-4.jpg',
      '/assets/hotel/DS-5.jpg',
      '/assets/hotel/DS-6-780x519.jpg'
    ]
  },
  {
    id: 'royal-suites',
    slug: 'royal-suites',
    title: 'Royal Suites',
    category: 'Royal',
    tagline: 'Lavish Comfort with Warm African Elegance',
    priceNGN: 135000,
    sizeSqM: 60,
    maxGuests: 2,
    bedType: 'King-Size Bed',
    bathroomType: 'En-Suite Bathroom with Walk-In Shower',
    view: 'Courtyard & City View',
    hasBalcony: false,
    hasLivingRoom: true,
    breakfastIncluded: true,
    featured: false,
    description: 'Embark on a journey of luxury with tastefully appointed interiors, a generous living area, king-size bed, and full hospitality services.',
    longDescription: 'This lavish retreat exudes sophistication with its tastefully appointed interiors and exclusive amenities. Indulge in the grandeur of a king-size bed, a spacious living area, and serene ambiance for a restorative stay.',
    amenities: [
      'Spacious Living Area with Contemporary Lounge',
      'Plush King-Size Bed with Premium Linens',
      'En-Suite Bathroom with Luxury Toiletries',
      'Smart TV with High-Definition Channels',
      'Complimentary High-Speed Wi-Fi',
      'Free Daily Breakfast for In-House Guests',
      'In-Room Climate Control & Refrigerator'
    ],
    vipPerks: [
      'Complimentary Coffee & Tea Replenishment'
    ],
    heroImage: '/assets/hotel/RS-1.jpg',
    galleryImages: [
      '/assets/hotel/RS-1.jpg',
      '/assets/hotel/RS-3.jpg',
      '/assets/hotel/RS-5-780x520.jpg',
      '/assets/hotel/20240417_151313-780x585.jpg',
      '/assets/hotel/20240417_151407.jpg',
      '/assets/hotel/20240417_151132.jpg'
    ]
  },
  {
    id: 'superior-master',
    slug: 'superior-master',
    title: 'Superior Master Room',
    category: 'Master',
    tagline: 'Sophisticated Urban Retreat for Modern Travelers',
    priceNGN: 120000,
    sizeSqM: 48,
    maxGuests: 2,
    bedType: 'Queen-Size Luxury Bed',
    bathroomType: 'Modern Glass En-Suite',
    view: 'Jericho Garden View',
    hasBalcony: false,
    hasLivingRoom: false,
    breakfastIncluded: true,
    description: 'Experience modern charm with a queen-size bed, ambient lighting, work desk, and sophisticated appointments in the heart of Jericho.',
    longDescription: 'Designed for individual travelers and couples seeking contemporary elegance. The Superior Master Room features comfortable bedding, pristine en-suite bathroom, high-speed Wi-Fi, smart television, and thoughtful conveniences.',
    amenities: [
      'Queen-Size Bed with Plush Topper',
      'Modern Bathroom with Rain Shower',
      'Smart TV with Digital Cable',
      'Free High-Speed Wi-Fi',
      'Complimentary Breakfast Buffet',
      'Air Conditioning & Mini Refrigerator',
      '24/7 Room Service Access'
    ],
    vipPerks: [
      'Complimentary Bottled Water Daily'
    ],
    heroImage: '/assets/hotel/KS-1.jpg',
    galleryImages: [
      '/assets/hotel/KS-1.jpg',
      '/assets/hotel/KS-2.jpg',
      '/assets/hotel/KS-4.jpg',
      '/assets/hotel/KS-5.jpg',
      '/assets/hotel/KS-6.jpg'
    ]
  },
  {
    id: 'executive-suites',
    slug: 'executive-suites',
    title: 'Executive Suites',
    category: 'Executive',
    tagline: 'Smart Comfort with Dual Queen Configuration',
    priceNGN: 110000,
    sizeSqM: 52,
    maxGuests: 2,
    bedType: '2 Queen Beds / Grand Bed Setup',
    bathroomType: 'En-Suite Bathroom with Power Shower',
    view: 'Jericho Skyline',
    hasBalcony: false,
    hasLivingRoom: false,
    breakfastIncluded: true,
    description: 'Thoughtfully designed with modern amenities, cozy beds, and ample workspace for business executives and leisure travelers alike.',
    longDescription: 'Experience comfort and convenience in our Executive Suite. Thoughtfully curated with modern aesthetic finishes, dual Queen bed options, dedicated desk space, and high-speed internet to keep you productive and relaxed.',
    amenities: [
      'Two Comfortable Queen Beds or Single Grand Setup',
      'En-Suite Bathroom with Fresh Towels & Amenities',
      'Smart TV & Fast Wi-Fi Access',
      'Work Desk & Chair',
      'Complimentary Daily Breakfast',
      'Individual Air Conditioning'
    ],
    vipPerks: [
      'Express Checkout Option'
    ],
    heroImage: '/assets/hotel/20240417_154113-780x585.jpg',
    galleryImages: [
      '/assets/hotel/20240417_154113.jpg',
      '/assets/hotel/20240417_154059.jpg',
      '/assets/hotel/20240417_154310.jpg',
      '/assets/hotel/20240417_154138.jpg',
      '/assets/hotel/20240417_154234.jpg'
    ]
  },
  {
    id: 'deluxe-room',
    slug: 'deluxe-room',
    title: 'Deluxe Room',
    category: 'Deluxe',
    tagline: 'Warm Hospitality and Classic Comfort',
    priceNGN: 85000,
    sizeSqM: 40,
    maxGuests: 2,
    bedType: 'Queen-Size Plush Bed',
    bathroomType: 'Private En-Suite Bathroom',
    view: 'Inner Courtyard',
    hasBalcony: false,
    hasLivingRoom: false,
    breakfastIncluded: true,
    description: 'Enjoy spacious elegance, a comfortable queen-size bed, and modern hospitality amenities for a serene and restful stay.',
    longDescription: 'The Deluxe Room balances accessibility with premium hospitality standards. Featuring soft neutral tones, fresh linen, air conditioning, en-suite shower, and 24-hour room service.',
    amenities: [
      'Queen-Size Bed with Fresh Linens',
      'Private Bathroom with Shower',
      'Smart TV & Free Wi-Fi',
      'Complimentary Daily Breakfast',
      'Air Conditioning & Work Desk',
      'Room Service & Housekeeping'
    ],
    vipPerks: [
      'Complimentary Hot Beverages Tray'
    ],
    heroImage: '/assets/hotel/20240417_145601.jpg',
    galleryImages: [
      '/assets/hotel/20240417_145601.jpg',
      '/assets/hotel/rs-new-1.jpg',
      '/assets/hotel/20240417_145758.jpg',
      '/assets/hotel/20240417_150137.jpg'
    ]
  },
  {
    id: 'standard-room',
    slug: 'standard-room',
    title: 'Standard Room',
    category: 'Standard',
    tagline: 'Pristine Simplicity & Essential Luxury',
    priceNGN: 75000,
    sizeSqM: 35,
    maxGuests: 2,
    bedType: 'Comfortable Queen Bed',
    bathroomType: 'En-Suite Bathroom',
    view: 'Quiet Residential View',
    hasBalcony: false,
    hasLivingRoom: false,
    breakfastIncluded: true,
    description: 'Designed with classic elegance, providing a cozy and quiet retreat in the tranquil neighborhood of Jericho GRA.',
    longDescription: 'An accessible gateway into Gallani Suites hospitality. Offers comfortable queen bedding, high-speed Wi-Fi, air conditioning, smart television, and complimentary breakfast.',
    amenities: [
      'Queen-Size Bed with Soft Bedding',
      'En-Suite Bathroom with Shower',
      'Smart TV with Cable Channels',
      'Free High-Speed Wi-Fi',
      'Complimentary Breakfast',
      'Climate Control Air Conditioning'
    ],
    vipPerks: [
      '24/7 Security & Front Desk Support'
    ],
    heroImage: '/assets/hotel/20240417_150552.jpg',
    galleryImages: [
      '/assets/hotel/20240417_150552.jpg',
      '/assets/hotel/20240417_150803.jpg',
      '/assets/hotel/20240417_150628.jpg',
      '/assets/hotel/20240417_150256.jpg',
      '/assets/hotel/MC-4.jpg'
    ]
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'gallani-dining',
    title: 'The Grand Jericho Restaurant',
    category: 'Fine Dining',
    tagline: 'A Symphony of Flavors & Sophisticated Cuisine',
    description: 'Our flagship 24-hour restaurant offers an exquisite culinary journey celebrating authentic Nigerian delicacies alongside contemporary Continental gourmet masterpieces prepared by skilled master chefs.',
    atmosphere: 'Sophisticated evening ambiance with warm finishes, elegant table settings, and discreet attentive service.',
    hours: 'Open 24 Hours Daily (Breakfast: 6:30 AM - 10:30 AM, All-Day Dining thereafter)',
    dressCode: 'Smart Casual / Elegant',
    heroImage: '/assets/hotel/REST-3.jpg',
    galleryImages: [
      '/assets/hotel/REST-3.jpg',
      '/assets/hotel/REST-3-1.jpg',
      '/assets/hotel/rest-new-1.jpg',
      '/assets/hotel/rest-new.jpg',
      '/assets/hotel/rest-new-3.jpg'
    ],
    menuHighlights: [
      {
        category: 'Chef’s Signature Entrées',
        items: [
          { name: 'Pan-Seared Jumbo Prawns with Jollof Risotto', description: 'Fresh succulent prawns flambéed in herb butter, served over smoky Nigerian firewood-style risotto.', priceNGN: 22000, tag: 'Signature' },
          { name: 'Slow-Braised Royal Oxtail in Rich Peppercorn Jus', description: 'Tender braised oxtail with root vegetables and steamed fragrant basmati rice.', priceNGN: 24000, tag: 'Favorite' },
          { name: 'Grilled Norwegian Salmon Fillet', description: 'Crisp skin salmon over crushed garlic potatoes with lemon caper reduction.', priceNGN: 28000 },
          { name: 'Traditional Fisherman Soup Gallani Style', description: 'Fresh catfish, crab claws, and periwinkles in a spicy aromatic broth with pounded yam.', priceNGN: 21000, tag: 'Heritage' }
        ]
      },
      {
        category: 'Artisanal Starters & Small Plates',
        items: [
          { name: 'Spiced Suya Beef Carpaccio', description: 'Thinly sliced aged beef tenderloin seasoned with yaji spice, shaved parmesan and olive oil.', priceNGN: 14000, tag: 'Signature' },
          { name: 'Crispy Calamari with Sweet Chili Glaze', description: 'Tender calamari rings in spiced tempura batter with citrus dip.', priceNGN: 12500 },
          { name: 'Goat Meat Pepper Soup in Earthen Pot', description: 'Traditional herb infusion with tender cutlets of mountain goat.', priceNGN: 11000 }
        ]
      }
    ]
  },
  {
    id: 'obsidian-lounge',
    title: 'The Obsidian Cocktail Lounge & Spirits',
    category: 'Lounge & Spirits',
    tagline: 'Expert Mixology & Rare Vintage Spirits',
    description: 'An intimate rendezvous spot for connoisseurs. Featuring signature cocktail concoctions, aged whiskeys, champagne by the flute, and ambient mood lighting.',
    atmosphere: 'Intimate, moody, brushed brass accents, low-lit chandeliers, and soft lounge music.',
    hours: '4:00 PM – 2:00 AM Daily',
    dressCode: 'Evening Sophisticated',
    heroImage: '/assets/hotel/bar-1.jpg',
    galleryImages: [
      '/assets/hotel/bar-1.jpg',
      '/assets/hotel/bar-2.jpg',
      '/assets/hotel/bar-3.jpg'
    ],
    menuHighlights: [
      {
        category: 'Signature Mixology',
        items: [
          { name: 'The Jericho Gold Rush', description: 'Aged Bourbon, fresh lemon juice, wild blossom honey, topped with aromatic bitters.', priceNGN: 14000, tag: 'House Special' },
          { name: 'Gallani Royal Spritz', description: 'Sparkling wine, elderflower liqueur, soda water, fresh mint and seasonal berries.', priceNGN: 16000, tag: 'Popular' },
          { name: 'Smoked Hibiscus Mezcalita', description: 'Mezcal, infused zobo reduction, lime juice, rimmed with smoked chili salt.', priceNGN: 13500 }
        ]
      }
    ]
  },
  {
    id: 'club-gallani',
    title: 'Club Gallani & Nightlife',
    category: 'Night Club',
    tagline: 'Electrifying Energy, VIP Booths & World-Class Beats',
    description: 'Experience the premier nightlife destination in Ibadan. Acoustic sound engineering, dynamic lighting, top resident DJs, and dedicated VIP bottle service.',
    atmosphere: 'High-energy, pulsating soundscapes, premium champagne service, exclusive VIP private booths.',
    hours: 'Thursdays – Sundays: 10:00 PM – Dawn',
    dressCode: 'Glamorous & High Fashion',
    heroImage: '/assets/hotel/CLUB-1.jpg',
    galleryImages: [
      '/assets/hotel/CLUB-1.jpg',
      '/assets/hotel/CLUB-1-600x400.jpg'
    ],
    menuHighlights: [
      {
        category: 'VIP Bottle Service',
        items: [
          { name: 'Dom Pérignon Vintage Champagne', description: 'Served chilled with VIP bottle service.', tag: 'VIP Exclusive' },
          { name: 'Hennessy XO Cognac', description: 'Served with signature glassware and gourmet mixers.' }
        ]
      }
    ]
  }
];

export const EVENT_HALLS: EventHall[] = [
  {
    id: 'ashabi-hall',
    title: 'Ashabi Grand Hall',
    capacity: 1000,
    standingCapacity: 1200,
    squareMeters: 950,
    tagline: 'Up to 1,000 Guests. One Extraordinary Occasion.',
    description: 'The crown jewel of event venues in Ibadan. Ashabi Hall is a pillarless grand convention and banquet hall equipped with an elevated mezzanine gallery, concert-grade stage, automated lighting, and modular banquet layout configurations.',
    heroImage: '/assets/hotel/ASBHALL-1.jpg',
    galleryImages: [
      '/assets/hotel/ASBHALL-1.jpg',
      '/assets/hotel/ASBHALL-2-1.jpg',
      '/assets/hotel/ASBHALL-2-600x400.jpg'
    ],
    features: [
      'Up to 1,000 Banquet Seating / 1,200 Theatre Style',
      'Mezzanine VIP Gallery with Private Viewing Angles',
      'Full High-Definition Dual Projection Screens & LED Displays',
      'State-of-the-Art Programmable Stage & Theatrical Lighting',
      'Industrial-Grade Multi-Zone Central Air Conditioning',
      'Dedicated Bridal / VIP Green Room with Private Restroom',
      'Full In-House Banquet Catering & Bar Setup',
      '24/7 Dedicated Power Generators & On-Site Security'
    ],
    configurations: [
      { layout: 'Banquet', capacity: 1000 },
      { layout: 'Theatre', capacity: 1200 },
      { layout: 'Cocktail', capacity: 1400 },
      { layout: 'Classroom', capacity: 650 }
    ],
    idealFor: [
      'Royal Wedding Receptions & Banquets',
      'International Conferences & Summits',
      'State Dinners & Corporate Galas',
      'High-Profile Product Launches & Concerts'
    ]
  },
  {
    id: 'abel-awe-hall',
    title: 'Abel Awe Hall',
    capacity: 600,
    standingCapacity: 750,
    squareMeters: 550,
    tagline: 'Where Elegance Meets Capacity',
    description: 'Premier indoor event venue offering sophisticated acoustic treatment, impeccable architectural lighting, and versatile staging. Ideal for medium-to-large high-end weddings, corporate general meetings, seminars, and celebratory banquets.',
    heroImage: '/assets/hotel/ASBHALL-2-1.jpg',
    galleryImages: [
      '/assets/hotel/ASBHALL-2-1.jpg',
      '/assets/hotel/ASBHALL-1.jpg'
    ],
    features: [
      'Up to 600 Banquet Seating / 750 Theatre Style',
      'Fully Air-Conditioned with Climate Control',
      'Integrated High-Fidelity Audio Sound System',
      'Stage with Ambient Backlighting and Presentation Lectern',
      'Dedicated Catering Service Prep Kitchen',
      'Spacious Pre-Function Cocktail Foyer'
    ],
    configurations: [
      { layout: 'Banquet', capacity: 600 },
      { layout: 'Theatre', capacity: 750 },
      { layout: 'Cocktail', capacity: 800 },
      { layout: 'Classroom', capacity: 400 }
    ],
    idealFor: [
      'Weddings & Anniversaries',
      'Corporate Seminars & Annual General Meetings',
      'Birthday Celebrations & Milestone Dinners',
      'Award Ceremonies & Civic Banquets'
    ]
  }
];

export const WELLNESS_SERVICES: WellnessService[] = [
  {
    id: 'spa-treatments',
    title: 'Gallani Spa & Rejuvenation',
    category: 'Spa Rituals',
    duration: '60 – 120 Mins',
    priceNGN: 35000,
    description: 'A serene sanctuary featuring a full menu of restorative massages, deep tissue therapy, herbal body scrubs, organic wraps, and bespoke facials using African botanical oils.',
    heroImage: '/assets/hotel/spa-africa.jpg',
    highlights: [
      'Deep Tissue & Swedish Relaxing Massages',
      'Organic Cocoa & Shea Butter Body Polish',
      'Revitalizing Hydration Botanical Facial',
      'Private Treatment Suites Available'
    ]
  },
  {
    id: 'fitness-center',
    title: 'Cutting-Edge Fitness Studio',
    category: 'Fitness & Pool',
    duration: 'Open 6:00 AM – 10:00 PM',
    description: 'State-of-the-art gym equipped with cardiovascular machines, free weights, resistance equipment, and fitness support.',
    heroImage: '/assets/hotel/gym-2.jpg',
    highlights: [
      'Full Range of Modern Cardio & Weight Equipment',
      'Towel & Mineral Water Station',
      'Complimentary for All In-House Suite Guests'
    ]
  },
  {
    id: 'oasis-pool',
    title: 'Outdoor Oasis Swimming Pool',
    category: 'Fitness & Pool',
    duration: 'Open 7:00 AM – 8:00 PM',
    description: 'Pristine crystal-blue outdoor swimming pool set in a lush garden enclave. Relax on sun loungers while enjoying refreshments from the bar.',
    heroImage: '/assets/hotel/pool.jpg',
    highlights: [
      'Crystal-Clear Filtered Water Pool',
      'Private Cabanas & Sun Loungers',
      'Poolside Beverage & Light Bites Service'
    ]
  },
  {
    id: 'grooming-salon',
    title: 'Executive Barbing & Hair Salon',
    category: 'Male Grooming',
    duration: '10:00 AM – 7:00 PM',
    priceNGN: 12000,
    description: 'Tailored male grooming and styling by skilled barbers in an upscale, air-conditioned executive salon.',
    heroImage: '/assets/hotel/barber.jpg',
    highlights: [
      'Precision Haircuts & Beard Sculpting',
      'Hot Towel Facial Steam & Scrub',
      'Scalp & Hair Conditioning Treatments'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'The Grand Promenade Walkway', category: 'hotel', image: '/assets/hotel/WALKWAY.jpg', aspect: 'wide', subtitle: 'Architectural Elegance in Jericho GRA' },
  { id: 'g2', title: 'Presidential Suite Master Sanctuary', category: 'suites', image: '/assets/hotel/pres-2-780x519.jpg', aspect: 'wide', subtitle: 'Super King-Size Sovereign Luxury' },
  { id: 'g3', title: 'Presidential Living Salon', category: 'suites', image: '/assets/hotel/pres-4-780x519.jpg', aspect: 'tall', subtitle: 'Custom Hardwood & Ambient Fixtures' },
  { id: 'g4', title: 'The Grand Jericho Dining Room', category: 'dining', image: '/assets/hotel/REST-3.jpg', aspect: 'wide', subtitle: '24-Hour Fine Dining' },
  { id: 'g5', title: 'Ashabi Grand Banquet Hall', category: 'events', image: '/assets/hotel/ASBHALL-1.jpg', aspect: 'wide', subtitle: 'Up to 1,000 Capacity Grand Hall' },
  { id: 'g6', title: 'Terrace Suite II Private Balcony View', category: 'suites', image: '/assets/hotel/DT-II-1-780x520.jpg', aspect: 'wide', subtitle: 'Private Terrace Outlook' },
  { id: 'g7', title: 'The Obsidian Cocktail Lounge', category: 'dining', image: '/assets/hotel/bar-1.jpg', aspect: 'tall', subtitle: 'Mixology & Fine Spirits' },
  { id: 'g8', title: 'Gallani Spa Sanctuary', category: 'wellness', image: '/assets/hotel/spa-africa.jpg', aspect: 'wide', subtitle: 'Holistic Body Therapy' },
  { id: 'g9', title: 'Outdoor Oasis Swimming Pool', category: 'wellness', image: '/assets/hotel/pool.jpg', aspect: 'wide', subtitle: 'Tranquil Pool Enclave' },
  { id: 'g10', title: 'Executive Barbing Lounge', category: 'wellness', image: '/assets/hotel/barber.jpg', aspect: 'tall', subtitle: 'Distinguished Grooming' },
  { id: 'g11', title: 'Diplomatic Suite Executive Lounge', category: 'suites', image: '/assets/hotel/DS-1-780x519.jpg', aspect: 'wide', subtitle: 'Executive Comfort' },
  { id: 'g12', title: 'Grand Reception & Lobby', category: 'hotel', image: '/assets/hotel/TOP-LOBBY.jpg', aspect: 'wide', subtitle: 'Welcoming Foyer' },
  { id: 'g13', title: 'Aerial Property Perspective', category: 'hotel', image: '/assets/hotel/DJI_0058.jpg', aspect: 'wide', subtitle: 'Jericho GRA Location' },
  { id: 'g14', title: 'Club Gallani Nightlife', category: 'dining', image: '/assets/hotel/CLUB-1.jpg', aspect: 'tall', subtitle: 'Vibrant Evening Ambiance' },
  { id: 'g15', title: 'Ashabi Hall Banquet Setting', category: 'events', image: '/assets/hotel/ASBHALL-2-1.jpg', aspect: 'wide', subtitle: 'Bespoke Event Configuration' },
  { id: 'g16', title: 'Cabana Enclave Suite', category: 'suites', image: '/assets/hotel/20240417_153154.jpg', aspect: 'wide', subtitle: 'Secluded Poolside Living' },
  { id: 'g17', title: 'Front Desk Hospitality', category: 'moments', image: '/assets/hotel/FRNTDSK-4.jpg', aspect: 'tall', subtitle: '24/7 Dedicated Care' },
  { id: 'g18', title: 'Gourmet Evening Ambiance', category: 'moments', image: '/assets/hotel/rest-new-1.jpg', aspect: 'wide', subtitle: 'Fine Dining Moments' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    guestName: 'Aina Williams',
    guestOrigin: 'Verified Guest',
    guestTitle: 'TripAdvisor Review',
    quote: 'Everything here was great: the staff, the room layout, the property amenities with indoor pool, and the quality of the food. But the high point is the view from the terrace.',
    rating: 5,
    source: 'TripAdvisor',
    date: 'Verified Review',
    suiteType: 'Gallani Suites'
  },
  {
    id: 't2',
    guestName: 'The Gallani Experience',
    guestOrigin: 'Jericho GRA, Ibadan',
    guestTitle: 'Hospitality Promise',
    quote: 'An elevated stay, shaped around comfort, discretion, and effortless service. Discover an urban sanctuary where contemporary architecture meets genuine Nigerian warmth.',
    rating: 5,
    source: 'Verified Guest',
    date: 'Brand Standard',
    suiteType: 'Suites & Banquets'
  },
  {
    id: 't3',
    guestName: 'Milestone Events & Banquets',
    guestOrigin: 'Ashabi Hall',
    guestTitle: 'Event Venue',
    quote: 'Grand banquet configurations accommodating up to 1,000 guests, equipped with state-of-the-art staging, theatrical lighting, and dedicated banquet coordination in Ibadan.',
    rating: 5,
    source: 'Verified Guest',
    date: 'Event Excellence',
    suiteType: 'Ashabi Grand Hall'
  }
];

export const NEARBY_LANDMARKS = [
  { name: 'Ibadan Golf Club', distance: '5 mins drive', category: 'Sport & Leisure' },
  { name: 'Heritage Mall & Dugbe CBD', distance: '7 mins drive', category: 'Shopping & Business' },
  { name: 'Agodi Botanical Gardens', distance: '12 mins drive', category: 'Nature & Parks' },
  { name: 'University of Ibadan', distance: '18 mins drive', category: 'Academic & Culture' },
  { name: 'Ibadan Airport (Alakia)', distance: '30 mins drive', category: 'Transport' }
];
