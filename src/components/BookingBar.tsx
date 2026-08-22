import React, { useState } from 'react';
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

interface BookingBarProps {
  onCheckAvailability: (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
    suiteId: string;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckAvailability }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [suiteId, setSuiteId] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({ checkIn, checkOut, guests, rooms, suiteId });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mt-12 sm:-mt-16">
      <div className="bg-midnight-950/95 border border-gold-500/30 rounded-sm shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold flex items-center gap-1.5">
              <Calendar size={13} className="text-gold-400" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-midnight-900 border border-gold-500/20 text-ivory-100 px-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-gold-400 transition-colors"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold flex items-center gap-1.5">
              <Calendar size={13} className="text-gold-400" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-midnight-900 border border-gold-500/20 text-ivory-100 px-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-gold-400 transition-colors"
              required
            />
          </div>

          {/* Accommodation Selection */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold flex items-center gap-1.5">
              <BedDouble size={13} className="text-gold-400" />
              Suite Preference
            </label>
            <select
              value={suiteId}
              onChange={(e) => setSuiteId(e.target.value)}
              className="w-full bg-midnight-900 border border-gold-500/20 text-ivory-100 px-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-gold-400 transition-colors"
            >
              <option value="all">All Suites &amp; Rooms</option>
              {ROOMS_DATA.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.title} (From ₦{room.priceNGN.toLocaleString()})
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold flex items-center gap-1.5">
              <Users size={13} className="text-gold-400" />
              Guests &amp; Rooms
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-midnight-900 border border-gold-500/20 text-ivory-100 px-2 py-2.5 rounded-sm text-xs focus:outline-none focus:border-gold-400 transition-colors"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
              </select>
              <select
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full bg-midnight-900 border border-gold-500/20 text-ivory-100 px-2 py-2.5 rounded-sm text-xs focus:outline-none focus:border-gold-400 transition-colors"
              >
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3 Rooms</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft hover:shadow-gold-intense hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Check Availability</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>

        {/* Guarantees Bar */}
        <div className="mt-4 pt-3 border-t border-gold-500/10 flex flex-wrap items-center justify-between text-[11px] text-taupe-400 gap-3">
          <div className="flex items-center gap-1.5 text-gold-400/90 font-medium">
            <ShieldCheck size={13} className="text-gold-400" />
            <span>Direct Reservations Desk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles size={12} className="text-gold-400" />
            <span>Complimentary Daily Breakfast Included</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Clock size={12} className="text-gold-400" />
            <span>2:00 PM Check-In • 12:00 PM Check-Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};
