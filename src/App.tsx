/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FloatingPetals } from './components/FloatingPetals';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { WeddingStory } from './components/WeddingStory';
import { EventsSection } from './components/EventsSection';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { FamilySection } from './components/FamilySection';
import { FinalSection } from './components/FinalSection';
import { AudioToggle } from './components/AudioToggle';

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#1F070E] sm:bg-[#140207] text-[#24060E] relative flex flex-col items-center justify-start selection:bg-[#C5A059]/20 selection:text-[#4A0E1C] overflow-x-hidden">
      {/* Background Indian jaali texture for desktop frame */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* 1. Opening Screen / Envelope Modal */}
      {!isInvitationOpened && (
        <OpeningEnvelope onOpen={handleOpenInvitation} />
      )}

      {/* Floating Indian Floral Petals */}
      <FloatingPetals />

      {/* Audio soundtrack toggle */}
      {isInvitationOpened && <AudioToggle />}

      {/* Mobile-First 9:16 Container (Full-bleed on mobile, luxury phone folio on desktop) */}
      <div className="w-full max-w-[430px] bg-[#FAF7F2] sm:my-6 sm:rounded-[36px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:border sm:border-[#C5A059]/40 overflow-hidden relative min-h-screen flex flex-col">
        {/* Luxury Top App Bar (Visible after opening) */}
        {isInvitationOpened && (
          <header className="sticky top-0 z-30 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#C5A059]/25 transition-all">
            <div className="px-4 h-14 flex items-center justify-between">
              {/* Zone 1: Brand Wordmark */}
              <a
                href="#hero"
                className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#4A0E1C] hover:text-[#68132A] transition-colors truncate"
              >
                Aarav & Ananya
              </a>

              {/* Zone 2: Navigation Links */}
              <nav className="flex items-center gap-3 sm:gap-4 text-[11px] font-cinzel tracking-wider text-[#6B5A4B]">
                <a href="#events" className="hover:text-[#4A0E1C] transition-colors">
                  Itinerary
                </a>
                <a href="#gallery" className="hover:text-[#4A0E1C] transition-colors">
                  Gallery
                </a>
                <a href="#venue" className="hover:text-[#4A0E1C] transition-colors">
                  Venue
                </a>
              </nav>

              {/* Zone 3: Primary Action */}
              <a
                href="#rsvp"
                className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#5C0D1E] to-[#7A162B] text-[#FAF7F2] text-[10px] font-cinzel font-semibold tracking-widest uppercase transition-all shadow-xs border border-[#C5A059]/50 active:scale-95"
              >
                RSVP
              </a>
            </div>
          </header>
        )}

        {/* Main Content Sections */}
        <main className="flex-1 w-full bg-[#FAF7F2] relative">
          {/* 2. Hero Section */}
          <div id="hero">
            <HeroSection />
          </div>

          {/* 3. Countdown Section */}
          <div id="countdown">
            <CountdownSection />
          </div>

          {/* 4. Wedding Story */}
          <div id="story">
            <WeddingStory />
          </div>

          {/* 5. Events Section */}
          <div id="events">
            <EventsSection />
          </div>

          {/* 6. Photo Gallery */}
          <div id="gallery">
            <PhotoGallery />
          </div>

          {/* 7. Venue Section */}
          <div id="venue">
            <VenueSection />
          </div>

          {/* 8. RSVP Section */}
          <div id="rsvp">
            <RSVPSection />
          </div>

          {/* 9. Family Section */}
          <div id="family">
            <FamilySection />
          </div>

          {/* 10. Final Section */}
          <FinalSection onReopenEnvelope={() => setIsInvitationOpened(false)} />
        </main>
      </div>
    </div>
  );
}
