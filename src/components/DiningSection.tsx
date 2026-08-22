import React, { useState } from 'react';
import { Utensils, GlassWater, Moon, Clock, Sparkles, Phone, Mail, Check, ArrowRight } from 'lucide-react';
import { DINING_VENUES, HOTEL_INFO } from '../data/hotelData';

interface DiningSectionProps {
  onOpenDiningReservation?: (venueTitle: string) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenDiningReservation }) => {
  const [activeVenueIdx, setActiveVenueIdx] = useState(0);
  const currentVenue = DINING_VENUES[activeVenueIdx];

  return (
    <section id="dining" className="py-24 sm:py-32 bg-midnight-950 text-ivory-100 relative overflow-hidden">
      {/* Background Burgundy/Obsidian Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/40 bg-midnight-900/80 mb-4">
            <Utensils size={13} className="text-gold-400" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-300 font-semibold">
              Dining &amp; Spirits
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-light leading-tight tracking-wide uppercase">
            DINE BEAUTIFULLY.
          </h2>

          <div className="gold-divider max-w-xs mx-auto my-5" />

          <p className="text-sm sm:text-base text-ivory-200/80 font-light max-w-2xl mx-auto">
            From candlelit dinners in our 24-hour grand restaurant to intimate cocktails at Obsidian Lounge and electrifying beats at Club Gallani.
          </p>
        </div>

        {/* Venue Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {DINING_VENUES.map((venue, idx) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenueIdx(idx)}
              className={`px-5 sm:px-8 py-3 rounded-sm text-xs tracking-luxury uppercase font-medium transition-all duration-300 flex items-center gap-2 ${
                activeVenueIdx === idx
                  ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold shadow-gold-soft'
                  : 'bg-midnight-900/90 text-ivory-200 border border-gold-500/20 hover:border-gold-400 hover:text-gold-300'
              }`}
            >
              {idx === 0 && <Utensils size={14} />}
              {idx === 1 && <GlassWater size={14} />}
              {idx === 2 && <Moon size={14} />}
              <span>{venue.title}</span>
            </button>
          ))}
        </div>

        {/* Active Venue Editorial Display */}
        <div className="bg-obsidian-900/90 border border-gold-500/30 rounded-sm p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: Photography Presentation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-96 rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl">
                <img
                  src={currentVenue.heroImage}
                  alt={currentVenue.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif">{currentVenue.category}</span>
                  <p className="font-serif text-lg text-ivory-100">{currentVenue.tagline}</p>
                </div>
              </div>

              {/* Mini Gallery Strip */}
              <div className="grid grid-cols-3 gap-3">
                {currentVenue.galleryImages.slice(1, 4).map((img, idx) => (
                  <div key={idx} className="h-20 sm:h-24 rounded-sm overflow-hidden border border-white/10">
                    <img src={img} alt="Dining Ambiance" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Venue Story & Menu Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-luxury text-gold-400 font-semibold">{currentVenue.category}</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-normal mt-1">
                  {currentVenue.title}
                </h3>
                <p className="text-xs text-taupe-400 font-serif italic mt-0.5">
                  {currentVenue.atmosphere}
                </p>
                <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed mt-3">
                  {currentVenue.description}
                </p>
              </div>

              {/* Hours & Dress Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-gold-500/20 text-xs">
                <div className="flex items-center gap-2 text-ivory-200">
                  <Clock size={14} className="text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-taupe-400 uppercase tracking-wider block">Hours</span>
                    <span className="font-medium">{currentVenue.hours}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-ivory-200">
                  <Sparkles size={14} className="text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-taupe-400 uppercase tracking-wider block">Dress Code</span>
                    <span className="font-medium">{currentVenue.dressCode}</span>
                  </div>
                </div>
              </div>

              {/* Curated Menu Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-serif tracking-luxury uppercase text-gold-400 font-semibold">
                  Featured Selections &amp; Specialities:
                </h4>
                <div className="space-y-2.5">
                  {currentVenue.menuHighlights[0]?.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="bg-midnight-950/60 p-3 rounded-sm border border-gold-500/10 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-medium text-ivory-100">{item.name}</span>
                          {item.tag && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-burgundy-900/80 text-gold-300 font-semibold rounded-sm">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-taupe-400 font-light mt-0.5">{item.description}</p>
                      </div>
                      {item.priceNGN && (
                        <span className="font-mono text-xs text-gold-400 font-medium whitespace-nowrap">
                          ₦{item.priceNGN.toLocaleString()}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Table Reservation Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone1}`}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <Phone size={13} />
                  <span>Reserve Table (+234 705 556 7775)</span>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.emailDining}?subject=${encodeURIComponent(`Table Reservation - ${currentVenue.title}`)}`}
                  className="w-full sm:w-auto px-5 py-3 border border-gold-500/40 text-ivory-200 hover:text-gold-300 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={13} />
                  <span>Email Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
