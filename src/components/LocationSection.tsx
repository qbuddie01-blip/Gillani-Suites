import React from 'react';
import { MapPin, Navigation, Car, Compass, Clock, Phone, ExternalLink } from 'lucide-react';
import { HOTEL_INFO, NEARBY_LANDMARKS } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('No. 1 Abel Awe Close, off Oladele Ajao Street, Jericho GRA, Ibadan, Nigeria')}`;

  return (
    <section id="location" className="py-24 sm:py-32 bg-ivory-100 text-midnight-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-b border-gold-600/40 mb-4">
            <MapPin size={14} className="text-gold-600" />
            <span className="text-[11px] font-serif tracking-royal uppercase text-gold-700 font-semibold">
              The Jericho Enclave
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-midnight-900 font-normal leading-tight tracking-wide mb-4">
            IN THE HEART OF JERICHO GRA, IBADAN
          </h2>

          <div className="gold-divider max-w-xs mx-auto mb-5" />

          <p className="text-sm sm:text-base text-taupe-700 font-light max-w-xl mx-auto">
            Situated in Ibadan’s premier diplomatic and executive district, offering absolute serenity alongside immediate access to the city’s commercial and cultural hubs.
          </p>
        </div>

        {/* 2-Column Grid: Location Details & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Address, Airport Transfer, Nearby Landmarks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-taupe-400/40 p-6 sm:p-8 rounded-sm shadow-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-midnight-950 text-gold-400 rounded-sm mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-midnight-900">Hotel Address</h3>
                  <p className="text-xs sm:text-sm text-taupe-700 font-light leading-relaxed mt-1">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-taupe-300/40 flex items-center justify-between text-xs">
                <span className="text-taupe-600 font-light">Check-in: 2:00 PM</span>
                <span className="text-taupe-600 font-light">Check-out: 12:00 PM</span>
              </div>
            </div>

            {/* Chauffeur Service Highlight */}
            <div className="bg-midnight-950 text-ivory-100 p-6 rounded-sm border border-gold-500/30 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-gold-400">
                <Car size={16} />
                <span className="text-xs uppercase tracking-luxury font-bold">VIP Airport Chauffeur</span>
              </div>
              <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
                Executive chauffeur pick-up available from Ibadan Airport (Alakia) and Lagos Murtala Muhammed International Airport (LOS).
              </p>
              <a
                href={`tel:${HOTEL_INFO.phone1}`}
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold pt-1"
              >
                <span>Arrange Transfer with Concierge</span>
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Proximity Strip */}
            <div className="space-y-2">
              <span className="text-xs font-serif tracking-luxury text-gold-700 uppercase font-semibold block">
                Key Destinations &amp; Distances:
              </span>
              <div className="space-y-1.5">
                {NEARBY_LANDMARKS.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 px-3 bg-white border border-taupe-300/40 rounded-sm text-xs"
                  >
                    <div>
                      <span className="font-medium text-midnight-900">{landmark.name}</span>
                      <span className="text-[10px] text-taupe-500 block">{landmark.category}</span>
                    </div>
                    <span className="text-[11px] font-mono text-gold-700 font-semibold bg-ivory-200 px-2 py-0.5 rounded-sm">
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Card & Satellite Imagery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[380px] sm:h-[460px] rounded-sm overflow-hidden border border-taupe-400/50 shadow-2xl bg-midnight-950">
              <img
                src="/assets/hotel/DJI_0058.jpg"
                alt="Aerial View of Gallani Suites Jericho GRA"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/20 to-transparent" />

              {/* Pin Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-midnight-950/95 border border-gold-500/40 p-5 rounded-sm backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-ivory-100 shadow-2xl">
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-luxury">
                    <Compass size={14} />
                    <span>Jericho GRA Prestige</span>
                  </div>
                  <p className="font-serif text-lg text-ivory-100 mt-0.5">Gallani Suites Hotel &amp; Banquets</p>
                  <p className="text-[11px] text-taupe-400 font-light">Abel Awe Close, Jericho, Ibadan</p>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform whitespace-nowrap"
                >
                  <Navigation size={13} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
