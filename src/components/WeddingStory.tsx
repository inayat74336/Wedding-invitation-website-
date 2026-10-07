import React from 'react';
import { GoldHairlineDivider, CornerOrnament } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const WeddingStory: React.FC = () => {
  return (
    <section className="relative py-20 px-5 bg-[#FAF7F2] text-[#24060E] overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Editorial Section Kicker */}
        <div className="text-center mb-2">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER I · OUR STORY
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              When Two Souls Intertwined
            </h2>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={250}>
          <GoldHairlineDivider className="my-5" variant="lotus" />
        </Reveal>

        {/* Regal Arched Photography Presentation with Zoom-in Reveal */}
        <div className="relative my-7 mx-auto max-w-sm">
          <Reveal variant="zoom-in" delay={300} duration={1000}>
            <div className="relative rounded-t-[100px] rounded-b-2xl overflow-hidden p-2.5 bg-[#FFFDF9] border border-[#C5A059]/40 shadow-lg">
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <div className="relative rounded-t-[90px] rounded-b-xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src="/src/assets/images/couple_wedding_story_1791359643564.jpg"
                  alt="Aarav and Ananya shared moment under royal palace archways"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#C5A059]/5 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[90px] rounded-b-xl pointer-events-none" />
              </div>

              <p className="font-serif-luxury text-xs text-center text-[#7A6455] italic mt-3 mb-1">
                &ldquo;In the quiet corridors of Rajasthan, forever began.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        {/* Editorial Prose with Staggered Fade-in-up */}
        <div className="space-y-4 text-center px-2 mt-6">
          <Reveal variant="fade-up" delay={400} duration={900}>
            <p className="font-serif-luxury text-lg text-[#3D2C22] leading-relaxed">
              What commenced as an unassuming afternoon over masala chai in Jaipur blossomed into an enduring devotion. Through seasons of quiet understanding, shared wanderlust, and heartfelt aspirations, our lives wove together with grace and intention.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={500} duration={900}>
            <p className="font-serif-luxury text-lg text-[#3D2C22] leading-relaxed">
              In Aarav, Ananya found her unwavering anchor; in Ananya, Aarav discovered his brightest joy. With the profound love of our parents and elders, we gather in the City of Palaces to bind our destinies in sacred companionship.
            </p>
          </Reveal>

          {/* Script Signature */}
          <Reveal variant="fade-up" delay={600} duration={900}>
            <div className="pt-4 flex flex-col items-center">
              <span className="font-script text-4xl text-[#C5A059] tracking-wide select-none">
                Aarav & Ananya
              </span>
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6D2B] uppercase mt-1">
                DECEMBER 2026
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
