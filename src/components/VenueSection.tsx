import React from 'react';
import { MapPin, Navigation, Calendar, Clock, Sparkles } from 'lucide-react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { GoldHairlineDivider, CornerOrnament } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const VenueSection: React.FC = () => {
  const { weddingVenue } = WEDDING_COUPLE;

  return (
    <section className="relative py-20 px-4 bg-[#FAF7F2] text-[#24060E] overflow-hidden border-t border-[#C5A059]/20">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER IV · THE DESTINATION
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              The Royal Setting
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={250}>
            <GoldHairlineDivider className="my-4" variant="lotus" />
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="font-serif-luxury text-sm text-[#7A6455] italic">
              Under the starlit skies of the Pink City
            </p>
          </Reveal>
        </div>

        {/* Venue Card with Slide-in Effect */}
        <Reveal variant="fade-up" delay={350} duration={1000}>
          <div className="relative rounded-3xl overflow-hidden bg-[#FFFDF9] border border-[#C5A059]/40 shadow-lg">
            <CornerOrnament position="bottom-left" />
            <CornerOrnament position="bottom-right" />

            {/* Arched Venue Photography */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src="/src/assets/images/indian_wedding_venue_1791359654880.jpg"
                alt="The Oberoi Rajvilas wedding venue in Jaipur"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              />
              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A050B]/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#FAF7F2]">
                <span className="font-cinzel text-xs tracking-widest text-[#E7D39F] uppercase font-semibold">
                  Jaipur · Rajasthan
                </span>
                <span className="font-serif-luxury text-xs text-[#FAF7F2]/80 italic">
                  Heritage Destination
                </span>
              </div>
            </div>

            {/* Details Content */}
            <div className="p-6 sm:p-7 space-y-4">
              <Reveal variant="fade-up" delay={100}>
                <div>
                  <h3 className="font-cinzel text-2xl font-semibold text-[#4A0E1C] tracking-wide">
                    {weddingVenue.name}
                  </h3>
                  <p className="font-serif-luxury text-base text-[#8C6D2B] italic mt-0.5">
                    {weddingVenue.hall}
                  </p>
                </div>
              </Reveal>

              <Reveal variant="slide-left" delay={200}>
                <div className="space-y-3 text-sm border-t border-b border-[#C5A059]/20 py-4">
                  <div className="flex items-start gap-3 text-[#3D2C22]">
                    <MapPin className="w-4 h-4 text-[#8C6D2B] mt-0.5 shrink-0" />
                    <p className="font-sans-clean text-xs sm:text-sm text-[#3D2C22] leading-relaxed">
                      {weddingVenue.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[#3D2C22]">
                    <Calendar className="w-4 h-4 text-[#8C6D2B] shrink-0" />
                    <p className="font-sans-clean text-xs sm:text-sm text-[#3D2C22]">
                      Tuesday, 15 December 2026
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[#3D2C22]">
                    <Clock className="w-4 h-4 text-[#8C6D2B] shrink-0" />
                    <p className="font-sans-clean text-xs sm:text-sm text-[#3D2C22]">
                      Baraat: 05:00 PM · Pheras: 07:00 PM onwards
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Hospitality Note */}
              <Reveal variant="fade-up" delay={300}>
                <div className="flex items-start gap-2 bg-[#FAF7F2] p-3 rounded-xl border border-[#C5A059]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                  <p className="font-serif-luxury text-xs text-[#7A6455] italic leading-tight">
                    Traditional Rajasthani ceremonial welcome and chauffeured valet assistance upon arrival at the Royal Gates.
                  </p>
                </div>
              </Reveal>

              {/* Get Directions Button */}
              <Reveal variant="fade-up" delay={400}>
                <div className="pt-2">
                  <a
                    href={weddingVenue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#5C0D1E] via-[#7A162B] to-[#5C0D1E] hover:from-[#7A162B] hover:to-[#8C1B2F] active:scale-[0.98] text-[#FAF7F2] font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all shadow-md hover:shadow-lg border border-[#C5A059]"
                  >
                    <Navigation className="w-4 h-4 text-[#E7D39F]" />
                    <span>GET DIRECTIONS</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
