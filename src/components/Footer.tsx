import React, { useState } from 'react';
import { Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenEventInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenEventInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-midnight-950 text-ivory-100 border-t border-gold-500/30 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-400/80 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gold-500/20">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/branding/gallani-mark.png"
                alt="Gallani Suites Official Emblem"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-royal text-ivory-100 leading-tight">
                  GALLANI SUITES
                </h3>
                <p className="text-[10px] text-gold-400 tracking-widest uppercase font-sans font-light">
                  Hotels, Banquets &amp; Suites
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
              An oasis of royalty, tranquility, and bespoke Nigerian luxury in the heart of Jericho GRA, Ibadan. 103 suites &amp; villas, landmark event halls, and refined hospitality.
            </p>

            <div className="space-y-1 text-xs text-taupe-400">
              <p>Check-In: 2:00 PM • Check-Out: 12:00 PM</p>
              <p>Minimum Check-In Age: 18 Years</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOTEL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-midnight-900 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 rounded-sm border border-gold-500/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={HOTEL_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-midnight-900 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 rounded-sm border border-gold-500/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href={HOTEL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-midnight-900 hover:bg-gold-500 hover:text-midnight-950 text-gold-400 rounded-sm border border-gold-500/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-luxury uppercase text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/80 font-light">
              <li>
                <a href="#suites" className="hover:text-gold-400 transition-colors">
                  Rooms &amp; Suites (10)
                </a>
              </li>
              <li>
                <a href="#presidential" className="hover:text-gold-400 transition-colors">
                  Presidential Suite
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-400 transition-colors">
                  The Grand Restaurant
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-400 transition-colors">
                  Obsidian Lounge &amp; Club
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-gold-400 transition-colors">
                  Ashabi Grand Hall
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-gold-400 transition-colors">
                  Abel Awe Hall
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-gold-400 transition-colors">
                  Spa, Gym &amp; Pool
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">
                  Visual Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-luxury uppercase text-gold-400">
              Direct Contact &amp; Desk
            </h4>
            <div className="space-y-3 text-xs text-ivory-200/90 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href={`tel:${HOTEL_INFO.phone1}`} className="block hover:text-gold-400 font-mono">
                    {HOTEL_INFO.phone1} (Front Desk)
                  </a>
                  <a href={`tel:${HOTEL_INFO.phone2}`} className="block hover:text-gold-400 font-mono">
                    {HOTEL_INFO.phone2} (Banquets)
                  </a>
                  <a href={`tel:${HOTEL_INFO.phoneSpa}`} className="block hover:text-gold-400 font-mono">
                    {HOTEL_INFO.phoneSpa} (Spa &amp; Gym)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href={`mailto:${HOTEL_INFO.emailReservations}`} className="block hover:text-gold-400">
                    {HOTEL_INFO.emailReservations}
                  </a>
                  <a href={`mailto:${HOTEL_INFO.emailGeneral}`} className="block hover:text-gold-400">
                    {HOTEL_INFO.emailGeneral}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Direct Booking Action (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-luxury uppercase text-gold-400">
              Stay Tuned with Gallani
            </h4>
            <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
              Subscribe to receive private seasonal rates, culinary tasting invitations, and exclusive updates.
            </p>

            {subscribed ? (
              <div className="p-3 bg-gold-500/20 border border-gold-500/40 rounded-sm text-xs text-gold-300 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-400" />
                <span>Thank you for joining our private guest circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-midnight-900 border border-gold-500/30 text-ivory-100 px-3 py-2 text-xs rounded-sm focus:border-gold-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-gold-500 text-midnight-950 rounded-sm hover:bg-gold-400 transition-colors shrink-0"
                    aria-label="Subscribe"
                  >
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft hover:scale-[1.01] transition-transform"
              >
                Instant Suite Reservation
              </button>

              <button
                type="button"
                onClick={onOpenEventInquiry}
                className="w-full py-2 border border-gold-500/30 hover:border-gold-400 text-ivory-200 hover:text-gold-300 text-xs font-semibold tracking-luxury uppercase rounded-sm transition-colors"
              >
                Inquire for Banquets &amp; Halls
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-taupe-500 gap-4">
          <p>© {new Date().getFullYear()} GALLANI SUITES HOTEL, BANQUETS &amp; SUITES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck size={13} className="text-gold-400" />
            <span>Official 5-Star Luxury Destination in Jericho GRA, Ibadan, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
