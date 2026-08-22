import React, { useState } from 'react';
import { X, BedDouble, Users, Maximize2, Sparkles, Check, ArrowRight, ShieldCheck, Coffee, Wifi, Tv, Wind, Eye } from 'lucide-react';
import { RoomSuite, Currency } from '../types';
import { EXCHANGE_RATES } from '../data/hotelData';

interface RoomDetailModalProps {
  room: RoomSuite | null;
  currentCurrency: Currency;
  onClose: () => void;
  onBookNow: (suiteId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  currentCurrency,
  onClose,
  onBookNow
}) => {
  if (!room) return null;

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const formatPrice = (priceNGN: number) => {
    const { symbol, rate, prefix } = EXCHANGE_RATES[currentCurrency];
    const converted = Math.round(priceNGN * rate);
    const formatted = converted.toLocaleString();
    return prefix ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
  };

  const images = room.galleryImages.length > 0 ? room.galleryImages : [room.heroImage];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in-slow">
      <div className="relative w-full max-w-4xl bg-ivory-100 border border-gold-500/30 rounded-sm shadow-2xl overflow-hidden my-8 text-midnight-950 flex flex-col max-h-[90vh]">
        {/* Modal Header Bar */}
        <div className="bg-midnight-950 text-ivory-100 px-6 py-4 border-b border-gold-500/30 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif block">
              {room.category} Suite
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-gold-gradient">
              {room.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ivory-300 hover:text-gold-400 rounded-sm hover:bg-midnight-900 transition-colors"
            aria-label="Close Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main Photo & Thumbnail Gallery */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-96 rounded-sm overflow-hidden bg-midnight-950 border border-taupe-400/40 shadow-md">
              <img
                src={images[activePhotoIdx] || room.heroImage}
                alt={room.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory-100">
                <span className="text-xs font-mono bg-midnight-950/80 px-2.5 py-1 rounded-sm border border-white/10">
                  Photo {activePhotoIdx + 1} of {images.length}
                </span>

                <div className="text-right bg-midnight-950/80 px-3 py-1 rounded-sm border border-gold-500/30">
                  <span className="font-serif text-lg font-semibold text-gold-300">
                    {formatPrice(room.priceNGN)}
                  </span>
                  <span className="text-[11px] text-ivory-300/80 ml-1">/ Night</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-16 w-24 shrink-0 rounded-sm overflow-hidden border transition-all ${
                      activePhotoIdx === idx
                        ? 'border-gold-500 ring-2 ring-gold-500/40 opacity-100'
                        : 'border-taupe-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-ivory-200/80 p-4 rounded-sm border border-taupe-400/40 text-xs">
            <div>
              <span className="text-[10px] text-taupe-600 uppercase tracking-wider block">Dimensions</span>
              <span className="font-serif text-base font-semibold text-midnight-900">{room.sizeSqM} m²</span>
            </div>
            <div>
              <span className="text-[10px] text-taupe-600 uppercase tracking-wider block">Max Guests</span>
              <span className="font-serif text-base font-semibold text-midnight-900">{room.maxGuests} Persons</span>
            </div>
            <div>
              <span className="text-[10px] text-taupe-600 uppercase tracking-wider block">Bed Setup</span>
              <span className="font-serif text-base font-semibold text-midnight-900">{room.bedType.split(' ')[0]}</span>
            </div>
            <div>
              <span className="text-[10px] text-taupe-600 uppercase tracking-wider block">View Outlook</span>
              <span className="font-serif text-sm font-semibold text-midnight-900 truncate block">{room.view}</span>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-midnight-900 font-semibold border-b border-taupe-300 pb-2">
              About This Suite
            </h4>
            <p className="text-xs sm:text-sm text-midnight-900/85 font-light leading-relaxed">
              {room.longDescription || room.description}
            </p>
          </div>

          {/* Comprehensive Amenities Checklist */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-midnight-900 font-semibold border-b border-taupe-300 pb-2">
              Suite Amenities &amp; Conveniences
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-midnight-900/80 font-light">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check size={13} className="text-gold-600 shrink-0 mt-0.5" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Perks */}
          {room.vipPerks && room.vipPerks.length > 0 && (
            <div className="bg-midnight-950 text-ivory-100 p-5 rounded-sm border border-gold-500/30 space-y-2">
              <span className="text-[11px] font-serif tracking-luxury text-gold-400 uppercase font-semibold flex items-center gap-1.5">
                <Sparkles size={12} className="text-gold-400" />
                VIP Perks &amp; Sovereign Privileges
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ivory-200/90 font-light">
                {room.vipPerks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-ivory-200 px-6 py-4 border-t border-taupe-400/40 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[10px] text-taupe-600 uppercase tracking-wider block">Nightly Rate</span>
            <span className="font-serif text-2xl font-bold text-midnight-950">
              {formatPrice(room.priceNGN)}
            </span>
            <span className="text-xs text-taupe-600 ml-1">including tax &amp; gourmet breakfast</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-3 border border-taupe-400 text-midnight-900 text-xs font-semibold tracking-luxury uppercase rounded-sm hover:bg-ivory-300 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(room.id);
              }}
              className="w-1/2 sm:w-auto px-8 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft hover:shadow-gold-intense transition-all flex items-center justify-center gap-2"
            >
              <span>Reserve This Suite</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
