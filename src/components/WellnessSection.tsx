import React from 'react';
import { Sparkles, Heart, Activity, Waves, Scissors, Phone, Mail, Clock, Check } from 'lucide-react';
import { WELLNESS_SERVICES, HOTEL_INFO } from '../data/hotelData';

export const WellnessSection: React.FC = () => {
  return (
    <section id="wellness" className="py-24 sm:py-32 bg-emerald-950 text-ivory-100 relative overflow-hidden">
      {/* Subtle Emerald & Gold Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-900/60 mb-4">
            <Heart size={13} className="text-emerald-300" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-300 font-semibold">
              Sanctuary of Restoration
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-light leading-tight tracking-wide uppercase">
            TIME, WELL SPENT.
          </h2>

          <div className="gold-divider max-w-xs mx-auto my-5" />

          <p className="text-sm sm:text-base text-ivory-200/80 font-light max-w-xl mx-auto">
            Surrender to tranquil rejuvenation at Gallani Spa, recharge in our high-performance gym, unwind by the oasis pool, and experience precision executive grooming.
          </p>
        </div>

        {/* 4 Sanctuary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WELLNESS_SERVICES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-emerald-900/40 border border-emerald-500/20 rounded-sm overflow-hidden shadow-xl hover:border-gold-400/40 hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-midnight-950">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-midnight-950/80 border border-gold-500/30 text-[9px] font-semibold tracking-luxury uppercase text-gold-300 rounded-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg text-ivory-100 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-taupe-400 font-mono mt-1">
                    <Clock size={11} className="text-gold-400" />
                    <span>{item.duration}</span>
                  </div>
                  <p className="text-xs text-ivory-200/80 font-light leading-relaxed mt-2.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-emerald-500/20 text-[11px] text-ivory-200/90 font-light">
                  {item.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check size={11} className="text-gold-400 shrink-0 mt-0.5" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spa Appointment Banner */}
        <div className="bg-midnight-950/90 border border-gold-500/30 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-luxury text-gold-400 font-semibold block">
              Private Appointments &amp; Spa Concierge
            </span>
            <p className="font-serif text-xl sm:text-2xl text-ivory-100 mt-0.5">
              Reserve your restorative spa journey or private groom session
            </p>
            <p className="text-xs text-taupe-400 font-light mt-1">
              Direct Desk: +234 701 120 8309 • Email: wellness@gallanisuites.com
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+2347011208309"
              className="px-6 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Phone size={13} />
              <span>Call Spa Desk</span>
            </a>
            <a
              href="mailto:wellness@gallanisuites.com?subject=Spa%20Appointment%20Inquiry"
              className="px-5 py-3 border border-gold-500/40 text-ivory-200 hover:text-gold-300 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={13} />
              <span>Email Booking</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
