import React from 'react';
import { Crown, Sparkles, Building, Utensils, Shield, HeartHandshake, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ExperienceStory: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-ivory-100 text-midnight-950 relative overflow-hidden">
      {/* Decorative Subtle Background Stamp */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[280px] font-bold tracking-monumental text-midnight-950">
          GALLANI
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-b border-gold-600/40 mb-4">
            <Crown size={14} className="text-gold-600" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-700 font-semibold">
              The Gallani Signature
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-midnight-900 font-normal leading-tight tracking-wide mb-6">
            AN ELEVATED STAY, SHAPED AROUND COMFORT, DISCRETION &amp; EFFORTLESS SERVICE.
          </h2>

          <div className="gold-divider max-w-xs mx-auto mb-6" />

          <p className="text-base sm:text-lg text-taupe-700 font-light leading-relaxed">
            Nestled on the tranquil edge of prestigious Jericho GRA in Ibadan, Gallani Suites Hotel is a serene haven of warmth, contemporary African sophistication, and world-class hospitality.
          </p>
        </div>

        {/* Editorial 2-Column Story & Photography Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Asymmetrical Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm border border-gold-500/20">
              <img
                src="/assets/hotel/TOP-LOBBY-2.jpg"
                alt="Gallani Suites Grand Foyer"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-100">
                <span className="text-[10px] tracking-luxury uppercase text-gold-400 font-serif">The Foyer</span>
                <p className="font-serif text-lg">A Grand Welcome Into Understated Opulence</p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-64 z-20 shadow-2xl rounded-sm border-2 border-ivory-100 overflow-hidden">
              <img
                src="/assets/hotel/WALKWAY-2.jpg"
                alt="Gallani Suites Promenade"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Brand Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-luxury text-gold-700 font-bold">
                Jericho GRA, Ibadan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-midnight-900 leading-snug">
                Where Ibadan’s Elite, Discerning Travelers &amp; Heads of State Gather.
              </h3>
              <p className="text-sm sm:text-base text-midnight-900/80 leading-relaxed font-light">
                From the moment you arrive along Abel Awe Close, the bustle of the city dissolves into lush tranquility. Gallani Suites was conceived as a destination where royalty, modern architectural finesse, and gracious Nigerian warmth converge.
              </p>
              <p className="text-sm sm:text-base text-midnight-900/80 leading-relaxed font-light">
                Offering 103 impeccably designed suites and villas, the landmark 1,000-capacity Ashabi Hall, 600-capacity Abel Awe Hall, 24-hour gourmet dining, a tranquil day spa, crystal pool, and dedicated private resident services.
              </p>
            </div>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-taupe-400/40">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-midnight-900 text-gold-400 rounded-sm mt-0.5">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-midnight-900">Total Discretion &amp; Security</h4>
                  <p className="text-xs text-taupe-700 font-light mt-0.5">24/7 dedicated professional resident security detail.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-midnight-900 text-gold-400 rounded-sm mt-0.5">
                  <Building size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-midnight-900">Grand Event Facilities</h4>
                  <p className="text-xs text-taupe-700 font-light mt-0.5">Ashabi &amp; Abel Awe Halls hosting up to 1,000 guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-midnight-900 text-gold-400 rounded-sm mt-0.5">
                  <Utensils size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-midnight-900">24/7 Fine Dining</h4>
                  <p className="text-xs text-taupe-700 font-light mt-0.5">Authentic Nigerian delicacies and Continental gourmet.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-midnight-900 text-gold-400 rounded-sm mt-0.5">
                  <HeartHandshake size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-midnight-900">Personalized Butler Service</h4>
                  <p className="text-xs text-taupe-700 font-light mt-0.5">Tailor-made assistance for every stay and celebration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Highlights Counter Strip */}
        <div className="bg-midnight-950 text-ivory-100 rounded-sm p-8 sm:p-10 border border-gold-500/30 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold-400">103</p>
            <p className="text-xs uppercase tracking-luxury text-ivory-300 font-medium">Suites &amp; Villas</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold-400">1,000</p>
            <p className="text-xs uppercase tracking-luxury text-ivory-300 font-medium">Ashabi Hall Guests</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold-400">24/7</p>
            <p className="text-xs uppercase tracking-luxury text-ivory-300 font-medium">Dining &amp; Concierge</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold-400">5-Star</p>
            <p className="text-xs uppercase tracking-luxury text-ivory-300 font-medium">Hospitality Standard</p>
          </div>
        </div>
      </div>
    </section>
  );
};
