import React, { useState } from 'react';
import { X, Calendar, Users, BedDouble, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail, Car, Wine, Utensils, Heart, Info } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO, EXCHANGE_RATES } from '../data/hotelData';
import { Currency, RoomSuite } from '../types';

interface BookingModalProps {
  initialSuiteId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialRooms?: number;
  currentCurrency: Currency;
  onClose: () => void;
}

interface AddOnOption {
  id: string;
  title: string;
  priceNGN: number;
  icon: any;
  desc: string;
}

const ADD_ONS: AddOnOption[] = [
  { id: 'chauffeur', title: 'Airport Chauffeur Transfer', priceNGN: 35000, icon: Car, desc: 'Dedicated executive car pick-up from Ibadan Airport' },
  { id: 'champagne', title: 'Welcome Chilled Champagne on Ice', priceNGN: 65000, icon: Wine, desc: 'Served in-suite on arrival with gourmet treats' },
  { id: 'dinner', title: 'Chef’s Candlelit Dinner for Two', priceNGN: 45000, icon: Utensils, desc: 'Private dining reservation at The Grand Jericho' },
  { id: 'spa', title: '60-Min Restorative Spa Massage', priceNGN: 35000, icon: Heart, desc: 'Relaxing botanical massage session at Gallani Spa' }
];

export const BookingModal: React.FC<BookingModalProps> = ({
  initialSuiteId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialRooms = 1,
  currentCurrency,
  onClose
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [selectedSuiteId, setSelectedSuiteId] = useState(initialSuiteId || 'presidential-suite');
  const [checkIn, setCheckIn] = useState(initialCheckIn || today);
  const [checkOut, setCheckOut] = useState(initialCheckOut || tomorrow);
  const [guests, setGuests] = useState(initialGuests);
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  
  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedSuiteId) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Calculate pricing
  const roomTotalNGN = selectedRoom.priceNGN * nights * rooms;
  const addOnsTotalNGN = selectedAddOns.reduce((sum, id) => {
    const found = ADD_ONS.find((a) => a.id === id);
    return sum + (found ? found.priceNGN : 0);
  }, 0);
  const grandTotalNGN = roomTotalNGN + addOnsTotalNGN;

  const formatPrice = (priceNGN: number) => {
    const { symbol, rate, prefix } = EXCHANGE_RATES[currentCurrency];
    const converted = Math.round(priceNGN * rate);
    const formatted = converted.toLocaleString();
    return prefix ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
  };

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((x) => x !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const generateRef = () => {
    const chars = '0123456789';
    let res = 'GS-';
    for (let i = 0; i < 6; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  };

  const handleWhatsAppBooking = () => {
    const ref = generateRef();
    setBookingRef(ref);

    const addOnTitles = selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)?.title).filter(Boolean);

    const message = `GALLANI SUITES — RESERVATION REQUEST
----------------------------------------
Reservation Reference: ${ref}
Guest Name: ${guestName || 'Guest'}
Phone: ${guestPhone || 'Not provided'}
Email: ${guestEmail || 'Not provided'}
Suite: ${selectedRoom.title} (${selectedRoom.category})
Check-In: ${checkIn} (from 2:00 PM)
Check-Out: ${checkOut} (by 12:00 PM)
Nights: ${nights}
Guests: ${guests} | Rooms: ${rooms}
Estimated Room Total: ₦${roomTotalNGN.toLocaleString()}
Additional Services: ${addOnTitles.length > 0 ? addOnTitles.join(', ') : 'None'}
Estimated Total: ₦${grandTotalNGN.toLocaleString()} (${formatPrice(grandTotalNGN)})
Special Requests: ${specialRequests || 'None'}

Please confirm availability and reservation details.`;

    const url = `https://wa.me/2347055567775?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const handleEmailBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRef();
    setBookingRef(ref);

    const addOnTitles = selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)?.title).filter(Boolean);

    const subject = `GALLANI SUITES — Reservation Request [Ref: ${ref}]`;
    const body = `GALLANI SUITES — RESERVATION REQUEST
----------------------------------------
Reservation Reference: ${ref}
Guest Name: ${guestName}
Phone: ${guestPhone}
Email: ${guestEmail}
Suite: ${selectedRoom.title} (${selectedRoom.category})
Check-In: ${checkIn} (from 2:00 PM)
Check-Out: ${checkOut} (by 12:00 PM)
Nights: ${nights}
Guests: ${guests} | Rooms: ${rooms}
Estimated Room Total: ₦${roomTotalNGN.toLocaleString()}
Additional Services: ${addOnTitles.length > 0 ? addOnTitles.join(', ') : 'None'}
Estimated Total: ₦${grandTotalNGN.toLocaleString()}
Special Requests: ${specialRequests || 'None'}

Please confirm room availability and reservation details.

Kind regards,
${guestName}`;

    window.location.href = `mailto:${HOTEL_INFO.emailReservations}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in-slow"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-ivory-100 border border-gold-500/30 rounded-sm shadow-2xl overflow-hidden my-6 text-midnight-950 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-midnight-950 text-ivory-100 px-6 py-4 border-b border-gold-500/30 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif block">
              Reservation Inquiry
            </span>
            <h3 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-light text-gold-gradient">
              REQUEST TO RESERVE AT GALLANI SUITES
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ivory-300 hover:text-gold-400 rounded-sm hover:bg-midnight-900 transition-colors"
            aria-label="Close Reservation Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6 flex-1 overflow-y-auto">
            <div className="w-16 h-16 bg-gold-500/20 text-gold-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-luxury text-gold-700 font-bold">
                Inquiry Successfully Transmitted
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-midnight-900">
                Thank You, {guestName || 'Valued Guest'}
              </h4>
              <p className="text-xs sm:text-sm text-taupe-700 font-light max-w-md mx-auto">
                Your reservation request for <strong className="font-semibold text-midnight-950">{selectedRoom.title}</strong> has been generated with reference code:
              </p>
              <div className="inline-block bg-midnight-950 text-gold-400 font-mono text-lg px-5 py-2 rounded-sm my-2 border border-gold-500/40">
                {bookingRef}
              </div>
              <p className="text-xs text-taupe-600 font-light max-w-md mx-auto">
                Our Front Desk and Reservations Team at Gallani Suites will confirm your stay availability and prepare your arrival details.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 bg-midnight-950 text-gold-400 hover:bg-gold-500 hover:text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            <div className="bg-ivory-200/80 p-3 rounded-sm border border-taupe-400/40 text-xs text-taupe-700 flex items-start gap-2">
              <Info size={15} className="text-gold-700 shrink-0 mt-0.5" />
              <span>
                <strong>Direct Reservation Inquiry:</strong> No advance credit card charge is required today. This request is sent directly to Gallani Suites Reservations to confirm room availability and special arrangements.
              </span>
            </div>

            <form onSubmit={handleEmailBooking} className="space-y-8">
              {/* Step 1: Dates & Suite */}
              <div className="space-y-4">
                <h4 className="font-serif text-base text-midnight-900 font-semibold border-b border-taupe-300 pb-2 flex items-center justify-between">
                  <span>1. Stay Duration &amp; Suite Selection</span>
                  <span className="text-xs text-gold-700 font-sans font-normal">
                    {nights} Night{nights > 1 ? 's' : ''} Duration
                  </span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      min={today}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm focus:border-gold-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || today}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm focus:border-gold-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Rooms
                    </label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(Number(e.target.value))}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                    >
                      <option value={1}>1 Room</option>
                      <option value={2}>2 Rooms</option>
                      <option value={3}>3 Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Suite Category Dropdown */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Select Accommodation Category
                  </label>
                  <select
                    value={selectedSuiteId}
                    onChange={(e) => setSelectedSuiteId(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm font-medium"
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.title} — {formatPrice(r.priceNGN)} / night ({r.sizeSqM} m²)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Optional Add-Ons */}
              <div className="space-y-4">
                <h4 className="font-serif text-base text-midnight-900 font-semibold border-b border-taupe-300 pb-2">
                  2. Optional In-Suite Enhancements
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADD_ONS.map((addon) => {
                    const IconComp = addon.icon;
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                          isChecked
                            ? 'bg-midnight-950 text-ivory-100 border-gold-500'
                            : 'bg-white text-midnight-950 border-taupe-300 hover:border-gold-500'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`p-1.5 rounded-sm mt-0.5 ${isChecked ? 'bg-gold-500 text-midnight-950' : 'bg-ivory-200 text-gold-700'}`}>
                            <IconComp size={15} />
                          </div>
                          <div>
                            <span className="font-serif text-sm font-semibold block">{addon.title}</span>
                            <span className={`text-[11px] block mt-0.5 ${isChecked ? 'text-taupe-300' : 'text-taupe-600'}`}>
                              {addon.desc}
                            </span>
                          </div>
                        </div>

                        <span className={`font-mono text-xs font-semibold shrink-0 ${isChecked ? 'text-gold-400' : 'text-gold-700'}`}>
                          +{formatPrice(addon.priceNGN)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Guest Details Form */}
              <div className="space-y-4">
                <h4 className="font-serif text-base text-midnight-900 font-semibold border-b border-taupe-300 pb-2">
                  3. Guest Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Adeleke"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 801 234 5678"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm focus:border-gold-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Special In-Suite Requests / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Late check-in arrival around 8:00 PM, quiet high-floor preference..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm text-xs focus:border-gold-600"
                  />
                </div>
              </div>

              {/* Price Breakdown Card */}
              <div className="bg-midnight-950 text-ivory-100 p-5 rounded-sm border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-luxury text-gold-400 block font-serif">
                    Estimated Total ({nights} Night{nights > 1 ? 's' : ''})
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl text-gold-300 font-bold">
                    {formatPrice(grandTotalNGN)}
                  </div>
                  <span className="text-[11px] text-taupe-400 font-light">
                    Includes all taxes, Wi-Fi &amp; daily breakfast • Payment settled upon confirmation
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-ivory-100 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles size={14} className="text-gold-300" />
                    <span>WhatsApp VIP Desk</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft hover:shadow-gold-intense transition-all flex items-center justify-center gap-2"
                  >
                    <Mail size={14} />
                    <span>Send Email Request</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
