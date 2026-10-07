import React, { useEffect, useState } from 'react';
import { RoyalLotus } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Track scroll while in or near the hero section
          if (currentY <= 1200) {
            setScrollY(currentY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax transform calculations (compositor-only)
  const imageTranslateY = scrollY * 0.34;
  const imageScale = 1 + scrollY * 0.0003;
  const contentOpacity = Math.max(0, 1 - scrollY / 650);
  const contentTranslateY = scrollY * 0.12;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end items-center px-5 pt-16 pb-12 overflow-hidden text-center bg-[#18050A]">
      {/* Background Photography with Scroll-Based Parallax & Depth */}
      <div
        className="absolute -top-16 -bottom-16 left-0 right-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${imageScale})`,
          willChange: 'transform',
        }}
      >
        <img
          src="/src/assets/images/couple_hero_portrait_1791359630853.jpg"
          alt="Aarav and Ananya in bespoke champagne gold royal attire"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_28%] scale-105"
        />

        {/* Multi-tier luxury scrim for text contrast and editorial mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140307] via-[#140307]/65 to-[#140307]/20" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#140307]/30 to-[#140307]/85" />

        {/* Subtle royal jaali pattern in dark opacity */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Decorative Golden Auspicious Invocation */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 transition-opacity"
        style={{ opacity: contentOpacity }}
      >
        <Reveal variant="fade-up" delay={150}>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#E7D39F]">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <div className="flex items-center gap-2 mt-2 opacity-80">
              <span className="w-10 h-[0.75px] bg-gradient-to-r from-transparent to-[#C5A059]" />
              <RoyalLotus className="w-3 h-2.5 text-[#C5A059]" />
              <span className="w-10 h-[0.75px] bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Hero Content Container with Multi-Plane Parallax Depth & Staggered Reveal */}
      <div
        className="relative z-10 max-w-md mx-auto w-full flex flex-col items-center"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
          willChange: 'transform, opacity',
        }}
      >
        {/* Editorial Invitation Prose */}
        <Reveal variant="fade-up" delay={250} duration={1000}>
          <div className="mb-4">
            <p className="font-serif-luxury text-base sm:text-lg text-[#F5EFEB]/90 italic tracking-wide max-w-xs leading-relaxed">
              Together with their families,
              <br />
              they invite you to celebrate
              <br />
              their wedding.
            </p>
          </div>
        </Reveal>

        {/* Ornamental Hairline Divider */}
        <Reveal variant="fade" delay={400} duration={800}>
          <div className="flex items-center gap-3 my-2.5 opacity-85">
            <span className="w-12 h-[0.75px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#E7D39F]" />
            <span className="w-12 h-[0.75px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
        </Reveal>

        {/* Grand Couple Names */}
        <Reveal variant="fade-up" delay={500} duration={1000}>
          <div className="my-2">
            <h1 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-[0.18em] uppercase text-[#FAF7F2] drop-shadow-md">
              AARAV & ANANYA
            </h1>
          </div>
        </Reveal>

        {/* Date & Destination */}
        <Reveal variant="fade-up" delay={650} duration={1000}>
          <div className="mt-3 flex flex-col items-center gap-1">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#E7D39F] uppercase font-semibold">
              15 DECEMBER 2026
            </p>
            <p className="font-serif-luxury text-xs sm:text-sm text-[#F5EFEB]/80 italic tracking-wider">
              The Oberoi Rajvilas · Jaipur, Rajasthan
            </p>
          </div>
        </Reveal>

        {/* Downward Scroll Indicator */}
        <Reveal variant="fade" delay={850} duration={1000}>
          <div className="mt-10 flex flex-col items-center gap-2 opacity-65 transition-opacity hover:opacity-100">
            <span className="font-cinzel text-[9px] tracking-[0.3em] text-[#F5EFEB]/80 uppercase font-medium">
              Scroll to Begin
            </span>
            <svg
              className="w-4 h-4 text-[#C5A059] animate-bounce duration-[2400ms]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
