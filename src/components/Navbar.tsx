import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { HOTEL_INFO, EXCHANGE_RATES } from '../data/hotelData';
import { Currency } from '../types';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: (suiteId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Suites & Rooms', href: '#suites' },
    { name: 'Presidential', href: '#presidential' },
    { name: 'Dining', href: '#dining' },
    { name: 'Banquets', href: '#events' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Jericho GRA', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-midnight-950/95 backdrop-blur-md border-b border-gold-500/20 py-2.5 sm:py-3 shadow-navy-deep'
            : 'bg-gradient-to-b from-midnight-950/95 via-midnight-950/60 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* 1. Official Gallani Logo — Crisp & Proportionate */}
            <a
              href="#"
              className="flex items-center shrink-0 mr-2 sm:mr-4 lg:mr-6 group focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Gallani Suites Home"
            >
              <img
                src="/assets/branding/gallani-logo-full-hd.png"
                alt="Gallani Suites — Hotels, Banquets & Suites"
                className="h-10 sm:h-11 md:h-12 lg:h-13 xl:h-14 w-auto object-contain drop-shadow-md transition-all duration-300"
              />
            </a>

            {/* 2. Desktop Navigation Links (Centered, balanced spacing within viewpoint) */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4.5 2xl:gap-5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-luxury text-ivory-200 hover:text-gold-400 transition-colors relative py-1 font-medium group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* 3. Action Group (Currency + Phone Icon — Clean & Minimal) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] xl:text-xs text-ivory-200 hover:text-gold-400 border border-gold-500/30 rounded-sm bg-midnight-900/60 transition-colors"
                  aria-label="Select Currency for price conversion"
                  aria-expanded={currencyDropdownOpen}
                >
                  <span className="text-gold-400 font-semibold">
                    {EXCHANGE_RATES[currentCurrency].symbol}
                  </span>
                  <span>{currentCurrency}</span>
                  <ChevronDown size={11} className="text-gold-400" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-midnight-950 border border-gold-500/30 rounded-sm shadow-2xl py-1 z-50">
                    <div className="px-3 py-1 text-[9px] text-taupe-400 border-b border-white/5 uppercase tracking-wider">
                      Indicative Currency
                    </div>
                    {(Object.keys(EXCHANGE_RATES) as Currency[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          onCurrencyChange(c);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                          currentCurrency === c
                            ? 'bg-gold-500/20 text-gold-400 font-semibold'
                            : 'text-ivory-300 hover:bg-midnight-850 hover:text-gold-300'
                        }`}
                      >
                        <span>{c}</span>
                        <span className="text-gold-400 font-mono text-[11px]">
                          {EXCHANGE_RATES[c].symbol}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Concierge Call Button */}
              <a
                href={`tel:${HOTEL_INFO.phone1}`}
                className="p-2 text-gold-400 hover:text-midnight-950 hover:bg-gold-500 border border-gold-500/30 rounded-sm bg-midnight-900/70 transition-all duration-300 shrink-0"
                title={`Call Gallani Front Desk: ${HOTEL_INFO.phone1}`}
                aria-label={`Call Front Desk at ${HOTEL_INFO.phone1}`}
              >
                <Phone size={13} />
              </a>
            </div>

            {/* 4. Mobile Menu Actions (Phone + Right-Sided Menu Trigger) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={`tel:${HOTEL_INFO.phone1}`}
                className="p-1.5 text-gold-400 border border-gold-500/30 rounded-sm bg-midnight-900/80"
                aria-label="Call Gallani Front Desk"
              >
                <Phone size={14} />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-midnight-900/90 border border-gold-500/30 text-ivory-100 hover:text-gold-400 rounded-sm focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
              >
                <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-bold">MENU</span>
                <Menu size={16} className="text-gold-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Mobile Right-Sided Off-Canvas Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in-slow">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-midnight-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Right Sided Vertical Stack Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[310px] sm:w-[360px] max-w-[88vw] bg-midnight-950 border-l border-gold-500/30 shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto transform transition-transform duration-300 ease-out">
            {/* Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
                <img
                  src="/assets/branding/gallani-logo-full-hd.png"
                  alt="Gallani Suites"
                  className="h-10 w-auto object-contain"
                />

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-ivory-300 hover:text-gold-400 rounded-sm hover:bg-midnight-900 border border-gold-500/20 transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Currency Selector Pill Strip */}
              <div className="bg-midnight-900/80 border border-gold-500/20 p-2 rounded-sm flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-taupe-400 font-medium">Currency:</span>
                <div className="flex items-center gap-1">
                  {(Object.keys(EXCHANGE_RATES) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`px-2 py-1 text-[10px] font-semibold rounded-sm transition-colors ${
                        currentCurrency === c
                          ? 'bg-gold-500 text-midnight-950 shadow-sm'
                          : 'text-ivory-300 hover:text-gold-400'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vertical Navigation Stack */}
              <nav className="space-y-1" aria-label="Mobile Drawer Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-sm text-sm uppercase tracking-royal text-ivory-200 hover:text-gold-400 hover:bg-midnight-900/60 border-b border-white/5 transition-all font-medium group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={13} className="text-gold-500/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="mt-8 space-y-3.5 pt-4 border-t border-gold-500/20">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-royal uppercase rounded-sm shadow-gold-soft flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                Reserve Your Stay
              </button>

              <div className="grid grid-cols-2 gap-2.5 text-center text-xs">
                <a
                  href={`tel:${HOTEL_INFO.phone1}`}
                  className="py-2 border border-gold-500/30 text-gold-400 rounded-sm flex items-center justify-center gap-1.5 hover:bg-midnight-900 text-[11px]"
                >
                  <Phone size={12} />
                  Call Desk
                </a>
                <a
                  href={`https://wa.me/2347055567775?text=${encodeURIComponent('Hello Gallani Suites, I would like to make a reservation inquiry.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 bg-emerald-800/60 border border-emerald-500/40 text-ivory-100 rounded-sm flex items-center justify-center gap-1.5 hover:bg-emerald-700/60 text-[11px]"
                >
                  <Sparkles size={12} className="text-gold-400" />
                  WhatsApp VIP
                </a>
              </div>

              <p className="text-[10px] text-center text-taupe-500 font-light pt-1">
                Jericho GRA, Ibadan, Oyo State, Nigeria
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
