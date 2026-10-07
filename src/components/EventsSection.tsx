import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { GoldHairlineDivider, RoyalLotus } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const EventsSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-[#F5EFEB] text-[#24060E] overflow-hidden border-t border-b border-[#C5A059]/25">
      {/* Background Indian jaali texture */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#8C6D2B 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-md mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER II · THE CELEBRATIONS
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              Wedding Itinerary
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={250}>
            <GoldHairlineDivider className="my-4" variant="lotus" />
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="font-serif-luxury text-sm text-[#7A6455] italic">
              We request the honor of your presence and warm blessings
            </p>
          </Reveal>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-4 before:bottom-8 before:w-[1px] before:bg-gradient-to-b before:from-[#C5A059] before:via-[#B8860B] before:to-[#C5A059]/30">
          {WEDDING_EVENTS.map((event, idx) => (
            <div key={event.id} className="relative mb-12 last:mb-0 group">
              {/* Timeline Gold Lotus Node */}
              <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#C5A059] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <RoyalLotus className="w-3.5 h-3 text-[#68132A]" />
              </div>

              {/* Event Content Container with Staggered Slide-in-up */}
              <Reveal variant={idx % 2 === 0 ? 'slide-left' : 'slide-right'} delay={150} duration={950}>
                <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#C5A059]/35 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#C5A059]/70">
                  {/* Event Header */}
                  <div className="mb-3.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-cinzel text-xs text-[#8C6D2B] font-semibold tracking-widest">
                          0{idx + 1}.
                        </span>
                        <h3 className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wider text-[#4A0E1C]">
                          {event.name}
                        </h3>
                      </div>

                      <span className="font-cinzel text-[10px] font-semibold tracking-widest uppercase text-[#8C6D2B] px-2.5 py-0.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/25">
                        {event.date.split(',')[0]}
                      </span>
                    </div>

                    <p className="font-serif-luxury text-sm text-[#7A6455] italic mt-1 leading-snug">
                      {event.tagline}
                    </p>
                  </div>

                  {/* Event Details Grid */}
                  <div className="space-y-2 text-sm my-4 border-t border-b border-[#C5A059]/20 py-3.5">
                    <div className="flex items-center gap-2.5 text-[#3D2C22]">
                      <Calendar className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                      <span className="font-sans-clean font-medium text-xs sm:text-sm">
                        {event.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#3D2C22]">
                      <Clock className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                      <span className="font-sans-clean font-medium text-xs sm:text-sm">
                        {event.time}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#3D2C22]">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6D2B] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-cinzel text-xs font-semibold text-[#4A0E1C] tracking-wide">
                          {event.venue}
                        </p>
                        <p className="font-serif-luxury text-xs text-[#7A6455] italic">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Attire Guide & Action Button */}
                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-cinzel text-[11px] font-semibold text-[#68132A] uppercase tracking-wider">
                            {event.attire}
                          </p>
                          <div className="flex items-center gap-1" title="Recommended attire palette">
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                              style={{ backgroundColor: event.accentColor }}
                            />
                            <span className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs bg-[#E7D39F]" />
                          </div>
                        </div>
                        <p className="font-sans-clean text-[11px] text-[#7A6455] leading-tight mt-0.5">
                          {event.attireDescription}
                        </p>
                      </div>
                    </div>

                    <a
                      href={event.calendarGoogleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center self-start sm:self-auto px-4 py-1.5 rounded-full border border-[#C5A059]/60 bg-[#FFFDF9] text-[#4A0E1C] text-[11px] font-cinzel font-semibold tracking-wider hover:bg-[#68132A] hover:text-[#FAF7F2] transition-colors whitespace-nowrap active:scale-95 shadow-xs"
                    >
                      + Add to Calendar
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
