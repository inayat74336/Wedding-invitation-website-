import React, { useState } from 'react';
import { ArrowUp, Share2, Check } from 'lucide-react';
import { RoyalLotus } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

interface FinalSectionProps {
  onReopenEnvelope?: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onReopenEnvelope }) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'The Wedding of Aarav & Ananya',
      text: 'You are cordially invited to celebrate the royal wedding of Aarav & Ananya in Jaipur on 15 December 2026.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // clipboard unavailable
      }
    }
  };

  return (
    <footer className="relative py-28 px-4 bg-[#140207] text-[#FAF7F2] overflow-hidden text-center border-t border-[#C5A059]/30">
      {/* Background Indian jaali texture & radial glow */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C5A059]/12 blur-3xl pointer-events-none" />

      {/* Content Container with Granular Staggered Reveal */}
      <div className="relative max-w-md mx-auto z-10 flex flex-col items-center">
        {/* Sacred Lotus Icon */}
        <Reveal variant="fade-up" delay={50}>
          <div className="w-12 h-12 rounded-full border border-[#C5A059]/50 flex items-center justify-center mb-6 bg-white/5">
            <RoyalLotus className="w-6 h-5 text-[#E7D39F]" />
          </div>
        </Reveal>

        {/* Script Kicker */}
        <Reveal variant="fade-up" delay={150}>
          <p className="font-serif-luxury text-2xl sm:text-3xl text-[#E7D39F] italic tracking-wide mb-3">
            &ldquo;A new chapter begins...&rdquo;
          </p>
        </Reveal>

        {/* Grand Couple Names */}
        <Reveal variant="fade-up" delay={250}>
          <h2 className="font-cinzel text-3xl sm:text-4xl tracking-[0.2em] font-medium uppercase text-[#FAF7F2] my-2 drop-shadow-sm">
            AARAV & ANANYA
          </h2>
        </Reveal>

        {/* Date with Dots */}
        <Reveal variant="fade-up" delay={350}>
          <p className="font-cinzel text-lg sm:text-xl tracking-[0.38em] text-[#E7D39F] font-semibold my-4">
            15 • 12 • 2026
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={450}>
          <p className="font-serif-luxury text-sm text-[#F5EFEB]/75 italic max-w-xs mt-1 mb-8 leading-relaxed">
            We eagerly anticipate welcoming you and celebrating our happiest vows together.
          </p>
        </Reveal>

        {/* Action Buttons: View Royal Cover, Share, Back to Top */}
        <Reveal variant="fade-up" delay={550}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onReopenEnvelope && (
              <button
                onClick={onReopenEnvelope}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5C0D1E] to-[#7A162B] hover:from-[#7A162B] hover:to-[#8C1B2F] text-[#F5EFEB] border border-[#C5A059] text-xs font-cinzel tracking-wider uppercase transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                <span>View Royal Cover</span>
              </button>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F5EFEB] border border-[#C5A059]/50 text-xs font-cinzel tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#E7D39F]" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#E7D39F]" />
                  <span>Share Invitation</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of invitation"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 text-[#E7D39F] border border-[#C5A059]/50 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        {/* Quiet Editorial Signoff */}
        <Reveal variant="fade" delay={650}>
          <div className="mt-14 pt-6 border-t border-[#C5A059]/20 w-full text-center">
            <p className="font-sans-clean text-[11px] text-[#F5EFEB]/60 tracking-wider">
              With eternal gratitude · The Singhania & Sharma Families
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
