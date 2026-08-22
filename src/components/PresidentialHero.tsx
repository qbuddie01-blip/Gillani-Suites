import React, { useState } from 'react';
import { Crown, Sparkles, Check, ArrowRight, Eye, Shield, Award } from 'lucide-react';
import { ROOMS_DATA, EXCHANGE_RATES } from '../data/hotelData';
import { Currency, RoomSuite } from '../types';

interface PresidentialHeroProps {
  currentCurrency: Currency;
  onOpenBooking: (suiteId?: string) => void;
  onSelectRoom: (room: RoomSuite) => void;
}

export const PresidentialHero: React.FC<PresidentialHeroProps> = ({
  currentCurrency,
  onOpenBooking,
  onSelectRoom
}) => {
  const presidentialRoom = ROOMS_DATA.find((r) => r.id === 'presidential-suite') || ROOMS_DATA[0];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const formatPrice = (priceNGN: number) => {
    const { symbol, rate, prefix } = EXCHANGE_RATES[currentCurrency];
    const converted = Math.round(priceNGN * rate);
    const formatted = converted.toLocaleString();
    return prefix ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
  };

  const presidentialPhotos = [
    { src: '/assets/hotel/pres-2-780x519.jpg', label: 'Master Bedroom Sanctuary' },
    { src: '/assets/hotel/pres-4-780x519.jpg', label: 'Grand Living Salon' },
    { src: '/assets/hotel/pres-6-780x519.jpg', label: 'Executive Dining & Lounge' },
    { src: '/assets/hotel/pres-3-780x519.jpg', label: 'Marble En-Suite & Jacuzzi' },
  ];

  return (
    <section id="presidential" className="py-24 sm:py-32 bg-obsidian-900 text-ivory-100 relative overflow-hidden">
      {/* Ambient Gold Glow Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-burgundy-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Presidential Section Label */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-obsidian-800/80 backdrop-blur-md mb-4 shadow-gold-soft">
            <Crown size={14} className="text-gold-400" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-300 font-semibold">
              The Sovereign Collection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-light leading-tight tracking-wide uppercase">
            THE ART OF STAYING ROYAL
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-sm sm:text-base text-ivory-300/80 font-light max-w-xl mx-auto">
            A bespoke private residence created for dignitaries and guests seeking quiet grandeur and complete privacy in Jericho GRA.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Visual Image & Photo Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[380px] sm:h-[480px] rounded-sm overflow-hidden border border-gold-500/30 shadow-2xl bg-midnight-950">
              <img
                src={presidentialPhotos[activePhotoIdx].src}
                alt={`Gallani Suites Presidential Suite - ${presidentialPhotos[activePhotoIdx].label}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />

              {/* Photo Caption */}
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-ivory-100">
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif">Presidential Suite</span>
                  <p className="font-serif text-lg text-ivory-100">{presidentialPhotos[activePhotoIdx].label}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRoom(presidentialRoom)}
                  className="px-3 py-1.5 bg-obsidian-950/80 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 text-xs tracking-luxury uppercase border border-gold-500/30 rounded-sm transition-colors flex items-center gap-1.5"
                  aria-label="View all Presidential Suite details"
                >
                  <Eye size={13} />
                  <span>Full Suite Tour</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="grid grid-cols-4 gap-3">
              {presidentialPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`h-20 sm:h-24 rounded-sm overflow-hidden border transition-all duration-300 relative ${
                    activePhotoIdx === idx
                      ? 'border-gold-400 ring-2 ring-gold-400/40 opacity-100 scale-100'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-gold-500/50'
                  }`}
                  aria-label={`View ${photo.label}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Specifications & Inclusions */}
          <div className="lg:col-span-5 space-y-6 bg-obsidian-850/80 border border-gold-500/20 p-8 sm:p-10 rounded-sm shadow-2xl backdrop-blur-xl">
            <div className="border-b border-gold-500/20 pb-6">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-normal">
                  Presidential Suite
                </h3>
                <div className="text-right">
                  <span className="text-[10px] text-taupe-400 uppercase tracking-wider block">From</span>
                  <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-semibold">
                    {formatPrice(presidentialRoom.priceNGN)}
                  </span>
                  <span className="text-xs text-ivory-300/70 block">/ Night</span>
                </div>
              </div>
              <p className="text-xs text-gold-400/90 font-serif italic">
                110 m² • Super King Royal Bed • Private Study • En-Suite Jacuzzi
              </p>
            </div>

            {/* Inclusions Checklist */}
            <div className="space-y-3">
              <p className="text-xs font-serif tracking-luxury text-gold-400 uppercase font-semibold">
                Presidential Suite Amenities &amp; Services:
              </p>
              {presidentialRoom.vipPerks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-ivory-200 font-light">
                  <div className="p-1 bg-gold-500/20 text-gold-400 rounded-full mt-0.5 shrink-0">
                    <Sparkles size={11} />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-xs text-ivory-200 font-light">
                <div className="p-1 bg-gold-500/20 text-gold-400 rounded-full mt-0.5 shrink-0">
                  <Shield size={11} />
                </div>
                <span>Discreet 24/7 Security &amp; Resident Services Team</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => onOpenBooking(presidentialRoom.id)}
                className="w-full py-3.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-royal uppercase rounded-sm shadow-gold-soft hover:shadow-gold-intense hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Request Presidential Reservation</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => onSelectRoom(presidentialRoom)}
                className="w-full py-2.5 border border-gold-500/30 hover:border-gold-400 text-ivory-200 hover:text-gold-300 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors text-center"
              >
                View Full Room Specifications &amp; Amenities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
