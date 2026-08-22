import React from 'react';
import { Star, Award, ShieldCheck, CheckCircle2, Building, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/hotelData';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-midnight-950 text-ivory-100 relative overflow-hidden">
      {/* Background Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/40 bg-midnight-900 mb-4">
            <Award size={13} className="text-gold-400" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-300 font-semibold">
              The Gallani Benchmark
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-light leading-tight tracking-wide uppercase">
            VOICES FROM OUR GUESTS
          </h2>

          <div className="gold-divider max-w-xs mx-auto my-5" />

          <p className="text-sm sm:text-base text-ivory-200/80 font-light max-w-xl mx-auto">
            Discover what sets Gallani Suites apart — serene Jericho GRA surroundings, genuine Nigerian warmth, and grand milestone venues.
          </p>
        </div>

        {/* 3 Editorial Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-obsidian-900/90 border border-gold-500/20 p-8 rounded-sm shadow-xl flex flex-col justify-between space-y-6 hover:border-gold-400/40 transition-colors"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF5A" stroke="#D4AF5A" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400/90 font-mono bg-midnight-950 px-2 py-0.5 rounded-sm border border-gold-500/20">
                    {t.source}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg text-ivory-100/95 font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Profile & Location */}
              <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-ivory-100">{t.guestName}</h4>
                  <p className="text-[11px] text-taupe-400 font-light">
                    {t.guestTitle} • {t.guestOrigin}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-gold-400 font-serif block">{t.suiteType}</span>
                  <span className="text-[9px] text-taupe-500 block">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Property Commitments Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gold-500/20 text-center text-xs text-ivory-300">
          <div className="space-y-1">
            <span className="text-gold-400 font-bold block text-sm">103 Suites</span>
            <span className="text-taupe-400 text-[11px]">Curated Accommodations</span>
          </div>
          <div className="space-y-1">
            <span className="text-gold-400 font-bold block text-sm">Ashabi Hall</span>
            <span className="text-taupe-400 text-[11px]">1,000 Capacity Grand Hall</span>
          </div>
          <div className="space-y-1">
            <span className="text-gold-400 font-bold block text-sm">24-Hour Dining</span>
            <span className="text-taupe-400 text-[11px]">Authentic &amp; Continental Menu</span>
          </div>
          <div className="space-y-1">
            <span className="text-gold-400 font-bold block text-sm">Jericho GRA</span>
            <span className="text-taupe-400 text-[11px]">Prime Diplomatic Location</span>
          </div>
        </div>
      </div>
    </section>
  );
};
