import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { ExperienceStory } from './components/ExperienceStory';
import { RoomsSection } from './components/RoomsSection';
import { PresidentialHero } from './components/PresidentialHero';
import { DiningSection } from './components/DiningSection';
import { EventsSection } from './components/EventsSection';
import { WellnessSection } from './components/WellnessSection';
import { EditorialGallery } from './components/EditorialGallery';
import { LocationSection } from './components/LocationSection';
import { SocialProofSection } from './components/SocialProofSection';
import { Footer } from './components/Footer';
import { RoomDetailModal } from './components/RoomDetailModal';
import { BookingModal } from './components/BookingModal';
import { EventInquiryModal } from './components/EventInquiryModal';
import { LightboxModal } from './components/LightboxModal';
import { Currency, RoomSuite, GalleryItem } from './types';

export function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('NGN');
  
  // Modals state
  const [selectedRoomModal, setSelectedRoomModal] = useState<RoomSuite | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuiteId, setBookingSuiteId] = useState<string | undefined>(undefined);
  const [isEventInquiryOpen, setIsEventInquiryOpen] = useState(false);
  const [eventHallId, setEventHallId] = useState<string | undefined>(undefined);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Booking handlers
  const handleOpenBooking = (suiteId?: string) => {
    setBookingSuiteId(suiteId);
    setIsBookingOpen(true);
  };

  const handleOpenEventInquiry = (hallId?: string) => {
    setEventHallId(hallId);
    setIsEventInquiryOpen(true);
  };

  const handleSelectRoom = (room: RoomSuite) => {
    setSelectedRoomModal(room);
  };

  const handleBookingBarSubmit = (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
    suiteId: string;
  }) => {
    setBookingSuiteId(params.suiteId === 'all' ? undefined : params.suiteId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-midnight-950 font-sans selection:bg-gold-500 selection:text-midnight-950">
      {/* 1. Header Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={handleOpenBooking}
        activeSection="home"
      />

      <main>
        {/* 2. Full-Screen Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Floating Quick Booking Bar */}
        <BookingBar onCheckAvailability={handleBookingBarSubmit} />

        {/* 4. The Gallani Experience Editorial Story */}
        <ExperienceStory />

        {/* 5. The Accommodation Collection (10 Suites) */}
        <RoomsSection
          currentCurrency={currentCurrency}
          onSelectRoom={handleSelectRoom}
          onBookRoom={(id) => handleOpenBooking(id)}
        />

        {/* 6. The Art of Staying Royal: Presidential Showcase */}
        <PresidentialHero
          currentCurrency={currentCurrency}
          onOpenBooking={handleOpenBooking}
          onSelectRoom={handleSelectRoom}
        />

        {/* 7. Dine Beautifully: Restaurant, Lounge & Club */}
        <DiningSection onOpenDiningReservation={() => handleOpenBooking()} />

        {/* 8. Banquets & Events: Ashabi Hall (1,000) & Abel Awe Hall (600) */}
        <EventsSection onOpenEventInquiry={handleOpenEventInquiry} />

        {/* 9. Time, Well Spent: Spa, Gym, Oasis Pool & Salon */}
        <WellnessSection />

        {/* 10. Curated Editorial Visual Gallery */}
        <EditorialGallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 11. In the Heart of Jericho GRA, Ibadan */}
        <LocationSection />

        {/* 12. Voices From Our Guests & Social Proof */}
        <SocialProofSection />
      </main>

      {/* 13. Royal Midnight Navy & Champagne Gold Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenEventInquiry={() => handleOpenEventInquiry()}
      />

      {/* Modals */}
      <RoomDetailModal
        room={selectedRoomModal}
        currentCurrency={currentCurrency}
        onClose={() => setSelectedRoomModal(null)}
        onBookNow={(id) => handleOpenBooking(id)}
      />

      {isBookingOpen && (
        <BookingModal
          initialSuiteId={bookingSuiteId}
          currentCurrency={currentCurrency}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {isEventInquiryOpen && (
        <EventInquiryModal
          initialHallId={eventHallId}
          onClose={() => setIsEventInquiryOpen(false)}
        />
      )}

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onNavigate={(item) => setLightboxItem(item)}
      />
    </div>
  );
}

export default App;
