import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: '/assets/hotel/TOP-LOBBY.jpg',
    badge: 'Jericho GRA, Ibadan',
    title: 'A WORLD OF ELEGANCE, AWAITS YOU.',
    subtitle: 'Where timeless royalty meets modern Nigerian luxury and bespoke hospitality.'
  },
  {
    image: '/assets/hotel/WALKWAY.jpg',
    badge: '103 Suites & Villas',
    title: 'THE ART OF QUIET OPULENCE.',
    subtitle: 'Step into an oasis of calm, architectural beauty, and discreet personalized care.'
  },
  {
    image: '/assets/hotel/pres-2-780x519.jpg',
    badge: 'Presidential Sanctuary',
    title: 'ROYAL RESIDENCES DESIGNED FOR DISTINCTION.',
    subtitle: 'Super king suites, expansive living salons, and private panoramic terraces.'
  },
  {
    image: '/assets/hotel/REST-3.jpg',
    badge: 'Gourmet & Spirits',
    title: 'DINE BEAUTIFULLY IN JERICHO.',
    subtitle: 'Symphonies of authentic Nigerian flavours and contemporary international cuisine.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-midnight-950 overflow-hidden pt-20 pb-24"
      aria-label="Welcome to Gallani Suites"
    >
      {/* Background Photography Carousel with Smooth Fade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={idx === 0 ? 'high' : 'auto'}
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer luxury dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/75 to-midnight-950/65" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-midnight-950/30 to-midnight-950/80" />
        </div>
      ))}

      {/* Decorative Gold Border Lines */}
      <div className="absolute top-24 left-8 right-8 hidden lg:flex justify-between items-center pointer-events-none opacity-40">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
        <span className="text-[10px] tracking-monumental text-gold-400 uppercase font-serif">
          HOTELS • BANQUETS • SUITES
        </span>
        <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-ivory-100 mt-6 sm:mt-10">
        {/* Prestige Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/40 bg-midnight-900/80 backdrop-blur-md mb-6 shadow-gold-soft animate-fade-in-slow">
          <Sparkles size={13} className="text-gold-400" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-royal text-gold-300 uppercase">
            {HERO_SLIDES[currentSlide].badge}
          </span>
        </div>

        {/* Main Royal Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-ivory-100 leading-[1.12] mb-6 uppercase text-gold-gradient drop-shadow-md">
          {HERO_SLIDES[currentSlide].title}
        </h1>

        {/* Supporting Luxury Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ivory-200/90 font-light leading-relaxed mb-8 tracking-wide">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Dual Primary Call-To-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-royal uppercase rounded-sm shadow-gold-soft hover:shadow-gold-intense hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Reserve Your Stay</span>
            <ArrowRight size={15} />
          </button>

          <a
            href="#suites"
            className="w-full sm:w-auto px-7 py-3.5 border border-gold-400/50 text-ivory-100 hover:bg-gold-500/10 hover:border-gold-400 font-semibold text-xs tracking-royal uppercase rounded-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore 103 Suites</span>
            <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Slide Indicators & Quick Property Badges */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === idx ? 'w-8 bg-gold-400 shadow-gold-soft' : 'w-2 bg-ivory-100/30 hover:bg-ivory-100/60'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Downward Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gold-400/80 pointer-events-none">
        <span className="text-[9px] uppercase tracking-royal font-light">Discover</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
