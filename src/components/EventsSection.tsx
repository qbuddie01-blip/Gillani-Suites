import React, { useState } from 'react';
import { Users, Award, Sparkles, Building2, CheckCircle2, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { EVENT_HALLS, HOTEL_INFO } from '../data/hotelData';
import { EventHall } from '../types';

interface EventsSectionProps {
  onOpenEventInquiry: (hallId?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenEventInquiry }) => {
  const [selectedHallIdx, setSelectedHallIdx] = useState(0);
  const currentHall = EVENT_HALLS[selectedHallIdx];

  return (
    <section id="events" className="py-24 sm:py-32 bg-ivory-100 text-midnight-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-b border-gold-600/40 mb-4">
            <Building2 size={14} className="text-gold-600" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-700 font-semibold">
              Banquets, Summits &amp; Weddings
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-midnight-900 font-normal leading-tight tracking-wide mb-4">
            WHERE GREAT MOMENTS BECOME MEMORIES.
          </h2>

          <div className="gold-divider max-w-xs mx-auto mb-5" />

          <p className="text-sm sm:text-base text-taupe-700 font-light max-w-xl mx-auto">
            Host landmark celebrations and state conferences in Ibadan’s premier venues, backed by 5-star catering and flawless event coordination.
          </p>
        </div>

        {/* Hall Selection Buttons */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-12">
          {EVENT_HALLS.map((hall, idx) => (
            <button
              key={hall.id}
              onClick={() => setSelectedHallIdx(idx)}
              className={`px-6 sm:px-10 py-3.5 rounded-sm text-xs sm:text-sm font-serif tracking-luxury uppercase transition-all duration-300 ${
                selectedHallIdx === idx
                  ? 'bg-midnight-950 text-gold-400 border border-gold-500 shadow-xl scale-[1.02]'
                  : 'bg-ivory-200 text-midnight-900/70 border border-taupe-400/40 hover:bg-midnight-950/10'
              }`}
            >
              <span className="font-semibold block">{hall.title}</span>
              <span className="text-[10px] text-taupe-500 lowercase tracking-normal font-sans block mt-0.5">
                Up to {hall.capacity.toLocaleString()} guests
              </span>
            </button>
          ))}
        </div>

        {/* Active Hall Card */}
        <div className="bg-white border border-taupe-400/50 rounded-sm p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: Hall Hero & Imagery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-96 rounded-sm overflow-hidden border border-taupe-400/40 shadow-xl bg-midnight-950">
                <img
                  src={currentHall.heroImage}
                  alt={currentHall.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-ivory-100">
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif">
                    {currentHall.squareMeters} m² Event Space
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-ivory-100">{currentHall.tagline}</p>
                </div>
              </div>

              {/* Layout Capacities Pill Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                {currentHall.configurations.map((c, idx) => (
                  <div key={idx} className="bg-ivory-100 p-2.5 rounded-sm border border-taupe-400/30">
                    <span className="text-[10px] uppercase tracking-wider text-taupe-600 block">{c.layout}</span>
                    <span className="font-serif text-base font-semibold text-midnight-900">{c.capacity}</span>
                    <span className="text-[9px] text-taupe-500 block">seats</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hall Specifications & Inquiries */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-luxury text-gold-700 font-bold">
                  Premier Event Venue in Jericho
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-midnight-900 font-normal mt-1">
                  {currentHall.title}
                </h3>
                <p className="text-xs sm:text-sm text-midnight-900/80 font-light leading-relaxed mt-3">
                  {currentHall.description}
                </p>
              </div>

              {/* Key Amenities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-serif tracking-luxury uppercase text-midnight-900 font-semibold">
                  Venue Features &amp; Infrastructure:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-taupe-700 font-light">
                  {currentHall.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-gold-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Events */}
              <div className="bg-ivory-100 p-4 rounded-sm border border-taupe-400/30">
                <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-bold block mb-1.5">
                  Ideal For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentHall.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white text-midnight-950 text-[11px] font-medium border border-taupe-400/30 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEventInquiry(currentHall.id)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-midnight-950 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Request Event Proposal</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phone2}`}
                  className="w-full sm:w-auto px-5 py-3.5 border border-midnight-950/30 hover:border-gold-600 text-midnight-900 hover:text-gold-700 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={13} />
                  <span>Call Events Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
