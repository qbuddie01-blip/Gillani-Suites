export type Currency = 'NGN' | 'USD' | 'GBP' | 'EUR';

export interface RoomSuite {
  id: string;
  slug: string;
  title: string;
  category: 'Presidential' | 'Diplomatic' | 'Royal' | 'Queen' | 'King' | 'Cabana' | 'Executive' | 'Master' | 'Deluxe' | 'Standard';
  tagline: string;
  priceNGN: number;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  bathroomType: string;
  view: string;
  hasBalcony: boolean;
  hasLivingRoom: boolean;
  breakfastIncluded: boolean;
  featured?: boolean;
  isPresidential?: boolean;
  description: string;
  longDescription: string;
  amenities: string[];
  vipPerks: string[];
  heroImage: string;
  galleryImages: string[];
}

export interface DiningVenue {
  id: string;
  title: string;
  category: 'Fine Dining' | 'Lounge & Spirits' | 'Night Club' | 'Private Dining';
  tagline: string;
  description: string;
  atmosphere: string;
  hours: string;
  dressCode: string;
  heroImage: string;
  galleryImages: string[];
  menuHighlights: {
    category: string;
    items: { name: string; description: string; priceNGN?: number; tag?: string }[];
  }[];
}

export interface EventHall {
  id: string;
  title: string;
  capacity: number;
  standingCapacity?: number;
  squareMeters: number;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  configurations: {
    layout: 'Banquet' | 'Theatre' | 'Classroom' | 'Cocktail' | 'U-Shape';
    capacity: number;
  }[];
  idealFor: string[];
}

export interface WellnessService {
  id: string;
  title: string;
  category: 'Spa Rituals' | 'Body & Massage' | 'Male Grooming' | 'Fitness & Pool';
  duration: string;
  priceNGN?: number;
  description: string;
  heroImage: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hotel' | 'suites' | 'dining' | 'events' | 'wellness' | 'moments';
  image: string;
  subtitle?: string;
  aspect?: 'wide' | 'tall' | 'square';
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestTitle?: string;
  guestOrigin: string;
  quote: string;
  rating: number;
  source: 'TripAdvisor' | 'Google Reviews' | 'Verified Guest';
  date: string;
  suiteType: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  selectedSuiteId: string;
  currency: Currency;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  selectedAddOns: string[];
}
