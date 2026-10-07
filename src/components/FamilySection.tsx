import React from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { GoldHairlineDivider, CornerOrnament, RoyalLotus } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const FamilySection: React.FC = () => {
  const { groom, bride } = WEDDING_COUPLE;

  return (
    <section className="relative py-20 px-4 bg-[#FAF7F2] text-[#24060E] overflow-hidden">
      {/* Background Indian jaali texture */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-md mx-auto z-10 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER VI · LINEAGE & BLESSINGS
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              With the Blessings of Our Families
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={250}>
            <GoldHairlineDivider className="my-4" variant="lotus" />
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="font-serif-luxury text-sm text-[#7A6455] italic">
              Two noble households united in timeless harmony
            </p>
          </Reveal>
        </div>

        {/* 2 Family Pedestals with Slide-in-left and Slide-in-right */}
        <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 text-center">
          {/* Groom's Family */}
          <Reveal variant="slide-left" delay={250} duration={950}>
            <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#C5A059]/35 shadow-sm">
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />

              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#C5A059]/60 mx-auto flex items-center justify-center mb-3">
                <span className="font-cinzel text-xs font-semibold text-[#68132A] tracking-wider">
                  AS
                </span>
              </div>

              <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6D2B] uppercase font-semibold">
                GROOM&apos;S LINEAGE
              </p>

              <h3 className="font-cinzel text-xl font-semibold text-[#4A0E1C] my-1">
                {groom.fullName}
              </h3>

              <div className="mt-4 pt-3 border-t border-[#C5A059]/20 space-y-2">
                <p className="font-serif-luxury text-base text-[#3D2C22] leading-snug">
                  {groom.parents}
                </p>
                <p className="font-serif-luxury text-xs text-[#7A6455] italic">
                  {groom.grandparents}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bride's Family */}
          <Reveal variant="slide-right" delay={350} duration={950}>
            <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#C5A059]/35 shadow-sm">
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />

              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#C5A059]/60 mx-auto flex items-center justify-center mb-3">
                <span className="font-cinzel text-xs font-semibold text-[#68132A] tracking-wider">
                  AS
                </span>
              </div>

              <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6D2B] uppercase font-semibold">
                BRIDE&apos;S LINEAGE
              </p>

              <h3 className="font-cinzel text-xl font-semibold text-[#4A0E1C] my-1">
                {bride.fullName}
              </h3>

              <div className="mt-4 pt-3 border-t border-[#C5A059]/20 space-y-2">
                <p className="font-serif-luxury text-base text-[#3D2C22] leading-snug">
                  {bride.parents}
                </p>
                <p className="font-serif-luxury text-xs text-[#7A6455] italic">
                  {bride.grandparents}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Traditional Vedic Shloka */}
        <Reveal variant="fade-up" delay={450}>
          <div className="mt-12 pt-6 border-t border-[#C5A059]/20 flex flex-col items-center">
            <RoyalLotus className="w-5 h-4 text-[#C5A059] mb-2" />
            <p className="font-cinzel text-xs tracking-[0.25em] text-[#8C6D2B] uppercase">
              ॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥
            </p>
            <p className="font-serif-luxury text-xs text-[#7A6455] italic mt-1 max-w-xs">
              May auspiciousness, prosperity, and divine grace illuminate their lifelong journey
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
