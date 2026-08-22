import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/hotelData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNavigate
}) => {
  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[prevIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNavigate]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-midnight-950/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in-slow"
    >
      {/* Top Action Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-ivory-100">
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif block">
            Gallani Chronicles ({currentIndex + 1} / {GALLERY_ITEMS.length})
          </span>
          <p className="font-serif text-lg sm:text-xl text-ivory-100">{item.title}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 bg-midnight-900/80 hover:bg-gold-500 hover:text-midnight-950 text-ivory-200 rounded-full border border-gold-500/30 transition-colors"
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-midnight-900/80 hover:bg-gold-500 hover:text-midnight-950 text-ivory-100 rounded-full border border-gold-500/30 transition-colors z-20"
        aria-label="Previous Photo"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Navigation Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-midnight-900/80 hover:bg-gold-500 hover:text-midnight-950 text-ivory-100 rounded-full border border-gold-500/30 transition-colors z-20"
        aria-label="Next Photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main High-Res Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[75vh] sm:max-h-[82vh] rounded-sm overflow-hidden border border-gold-500/40 shadow-2xl bg-midnight-950 flex items-center justify-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-w-full max-h-[75vh] sm:max-h-[82vh] object-contain"
        />

        {item.subtitle && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-midnight-950 via-midnight-950/70 to-transparent p-4 sm:p-6 text-center text-ivory-100">
            <p className="font-serif text-sm sm:text-base text-gold-300 font-light italic">
              {item.subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
