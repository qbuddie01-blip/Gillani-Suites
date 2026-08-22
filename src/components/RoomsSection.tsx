import React, { useState } from 'react';
import { BedDouble, Users, Sparkles, Check, ArrowRight, Eye, Info } from 'lucide-react';
import { ROOMS_DATA, EXCHANGE_RATES } from '../data/hotelData';
import { RoomSuite, Currency } from '../types';

interface RoomsSectionProps {
  currentCurrency: Currency;
  onSelectRoom: (room: RoomSuite) => void;
  onBookRoom: (suiteId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currentCurrency,
  onSelectRoom,
  onBookRoom
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'royal' | 'terrace' | 'executive' | 'standard'>('all');

  const formatPrice = (priceNGN: number) => {
    const { symbol, rate, prefix } = EXCHANGE_RATES[currentCurrency];
    const converted = Math.round(priceNGN * rate);
    const formatted = converted.toLocaleString();
    return prefix ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
  };

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'royal') return room.category === 'Presidential' || room.category === 'Royal';
    if (activeFilter === 'terrace') return room.category === 'King' || room.category === 'Queen' || room.category === 'Cabana';
    if (activeFilter === 'executive') return room.category === 'Diplomatic' || room.category === 'Executive';
    if (activeFilter === 'standard') return room.category === 'Master' || room.category === 'Deluxe' || room.category === 'Standard';
    return true;
  });

  const filterTabs = [
    { id: 'all', label: 'All Suites & Rooms (10)' },
    { id: 'royal', label: 'Presidential & Royal' },
    { id: 'terrace', label: 'Private Terrace Suites' },
    { id: 'executive', label: 'Diplomatic & Executive' },
    { id: 'standard', label: 'Deluxe & Master' },
  ];

  return (
    <section id="suites" className="py-24 sm:py-32 bg-ivory-200/60 text-midnight-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-serif tracking-monumental text-gold-700 uppercase font-semibold">
            The Accommodation Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-midnight-900 font-normal leading-tight tracking-wide mt-2 mb-4">
            SANCTUARIES OF CALM, ELEGANCE &amp; UNRIVALED COMFORT
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-5" />
          <p className="text-sm sm:text-base text-taupe-700 font-light max-w-xl mx-auto">
            103 curated suites and rooms appointed with bespoke furnishings, Italian linens, and modern amenities in the heart of Jericho GRA.
          </p>
          <p className="text-[11px] text-taupe-500 font-light mt-2 flex items-center justify-center gap-1">
            <Info size={12} className="text-gold-700" />
            <span>Rates shown are baseline starting prices per night. Final rates depend on stay dates and occupancy.</span>
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-sm text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-midnight-950 text-gold-400 border border-gold-500/50 shadow-gold-soft'
                  : 'bg-ivory-100 text-midnight-900/70 border border-taupe-400/40 hover:bg-midnight-950/10 hover:text-midnight-950'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-ivory-100 border border-taupe-400/40 rounded-sm overflow-hidden shadow-luxury-card hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container with Hover Zoom & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-midnight-950">
                <img
                  src={room.heroImage}
                  alt={`Gallani Suites ${room.title} interior and layout`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  {room.isPresidential ? (
                    <span className="px-3 py-1 bg-gold-500 text-midnight-950 text-[10px] font-bold tracking-luxury uppercase rounded-sm shadow-gold-soft">
                      Presidential Collection
                    </span>
                  ) : room.hasBalcony ? (
                    <span className="px-3 py-1 bg-midnight-900/90 text-gold-400 border border-gold-500/30 text-[10px] font-semibold tracking-luxury uppercase rounded-sm backdrop-blur-md">
                      Private Terrace / Balcony
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-midnight-900/90 text-ivory-200 border border-white/10 text-[10px] font-semibold tracking-luxury uppercase rounded-sm backdrop-blur-md">
                      {room.category}
                    </span>
                  )}

                  <span className="text-[11px] text-ivory-200 font-mono bg-midnight-950/70 px-2 py-0.5 rounded-sm">
                    {room.sizeSqM} m²
                  </span>
                </div>

                {/* Price Display on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-ivory-100">
                  <div>
                    <span className="text-[10px] text-ivory-300 uppercase tracking-wider block font-sans">From</span>
                    <span className="text-xl sm:text-2xl font-serif text-gold-300 font-semibold">
                      {formatPrice(room.priceNGN)}
                    </span>
                    <span className="text-[11px] text-ivory-300/80 font-light ml-1">/ Night</span>
                  </div>

                  <button
                    onClick={() => onSelectRoom(room)}
                    className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1 font-medium bg-midnight-950/60 px-2.5 py-1 rounded-sm border border-gold-500/20"
                    aria-label={`View photos of ${room.title}`}
                  >
                    <Eye size={13} />
                    <span>View Gallery</span>
                  </button>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-midnight-900 font-normal group-hover:text-gold-700 transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-xs text-gold-700 font-serif italic mt-0.5">
                    {room.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-taupe-700 font-light leading-relaxed mt-3 line-clamp-2">
                    {room.description}
                  </p>
                </div>

                {/* Specs Pill Strip */}
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-taupe-400/30 text-xs text-midnight-900/80">
                  <div className="flex items-center gap-1.5">
                    <Users size={13} className="text-gold-600" />
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BedDouble size={13} className="text-gold-600" />
                    <span className="truncate">{room.bedType.split(' ')[0]} Bed</span>
                  </div>
                </div>

                {/* Micro Amenities List */}
                <div className="space-y-1.5">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-taupe-700 font-light">
                      <Check size={12} className="text-gold-600 shrink-0" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectRoom(room)}
                    className="w-full py-2.5 border border-midnight-950/30 hover:border-gold-600 text-midnight-900 hover:text-gold-700 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors text-center"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookRoom(room.id)}
                    className="w-full py-2.5 bg-midnight-950 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-sm transition-all duration-300 text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
