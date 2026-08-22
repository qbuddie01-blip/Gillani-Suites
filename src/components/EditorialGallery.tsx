import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

interface EditorialGalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Chronicles (18)' },
    { id: 'hotel', label: 'The Hotel' },
    { id: 'suites', label: 'The Suites' },
    { id: 'dining', label: 'Dining & Spirits' },
    { id: 'events', label: 'Events & Halls' },
    { id: 'wellness', label: 'Wellness & Oasis' },
    { id: 'moments', label: 'Moments' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory-200/50 text-midnight-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-b border-gold-600/40 mb-4">
            <Camera size={14} className="text-gold-600" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-700 font-semibold">
              Visual Chronicles
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-midnight-900 font-normal leading-tight tracking-wide mb-4">
            AN IMMERSIVE GLIMPSE INTO GALLANI SUITES
          </h2>

          <div className="gold-divider max-w-xs mx-auto mb-5" />

          <p className="text-sm sm:text-base text-taupe-700 font-light max-w-xl mx-auto">
            Discover the textures of royalty, the scale of our grand halls, and the tranquil moments captured across our Jericho property.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-sm text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-midnight-950 text-gold-400 border border-gold-500 shadow-md'
                  : 'bg-ivory-100 text-midnight-900/70 border border-taupe-400/40 hover:bg-midnight-950/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical / Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className={`group relative rounded-sm overflow-hidden bg-midnight-950 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-taupe-400/40 ${
                item.aspect === 'tall' ? 'sm:row-span-2 h-[420px] sm:h-[540px]' : 'h-64 sm:h-72'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Icon & Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-ivory-100">
                <div className="flex justify-end">
                  <div className="p-2 bg-midnight-950/70 border border-gold-500/30 rounded-full text-gold-400 group-hover:bg-gold-500 group-hover:text-midnight-950 transition-colors">
                    <Maximize2 size={13} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-ivory-100 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-taupe-400 font-light mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
