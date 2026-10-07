import React, { useState } from 'react';
import { royalAudioPlayer } from '../utils/audioPlayer';
import { RoyalLotus, CornerOrnament } from './OrnamentalMotifs';
import { CelebrationBurst } from './CelebrationBurst';

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [burstOrigin, setBurstOrigin] = useState<{ x: number; y: number } | null>(null);

  const triggerCelebration = (e: React.MouseEvent) => {
    if (isOpening) return;

    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    setBurstOrigin({ x, y });

    setIsOpening(true);
    // Play celebratory pop & chime chord
    royalAudioPlayer.playCelebrationPop();

    if (soundEnabled) {
      setTimeout(() => {
        royalAudioPlayer.startMusic();
      }, 700);
    }

    setTimeout(() => {
      onOpen();
    }, 1450);
  };

  return (
    <>
      {/* Tap Effect: Celebratory Party Bomb Flower & Gold Spark Burst */}
      {burstOrigin && (
        <CelebrationBurst originX={burstOrigin.x} originY={burstOrigin.y} />
      )}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#1A050B] ${
          isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        {/* Background Royal Heritage Ambience */}
        <div className="absolute inset-0 bg-radial-gradient from-[#3D0A16] via-[#24060E] to-[#120206] overflow-hidden">
          {/* Subtle royal jaali pattern overlay */}
          <div
            className="absolute inset-0 opacity-12 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Ambient warm champagne glow behind envelope */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-[#C5A059]/12 blur-3xl pointer-events-none animate-pulse duration-[7000ms]" />

          {/* Delicate floating gold dust particles */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(231,211,159,0.15),transparent_70%)]" />
        </div>

        {/* Royal Invitation Folio / Hand-Pressed Box */}
        <div className="relative w-full max-w-[390px] mx-auto bg-[#FAF7F2] rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#C5A059]/40 text-center overflow-hidden transition-all duration-700">
          {/* Four Rajasthani Corner Filigrees */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Inner double hairline border - bespoke stationery mat */}
          <div className="absolute inset-3 border border-[#C5A059]/30 rounded-2xl pointer-events-none" />
          <div className="absolute inset-[15px] border border-[#C5A059]/15 rounded-[13px] pointer-events-none" />

          {/* Auspicious Vedic Invocation */}
          <div className="flex flex-col items-center justify-center pt-2 mb-4">
            <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.35em] text-[#8C6D2B] uppercase font-semibold">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <div className="flex items-center gap-2 mt-1.5 opacity-80">
              <span className="w-8 h-[0.75px] bg-gradient-to-r from-transparent to-[#C5A059]" />
              <RoyalLotus className="w-3.5 h-3 text-[#C5A059]" />
              <span className="w-8 h-[0.75px] bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </div>

          {/* Lead Kicker */}
          <p className="font-cinzel text-[11px] tracking-[0.36em] uppercase text-[#68132A] font-semibold mb-5">
            THE WEDDING OF
          </p>

          {/* Couple Names in Exquisite Roman & Script Pair */}
          <div className="my-5 flex flex-col items-center">
            <h1 className="font-cinzel text-3xl sm:text-4xl tracking-[0.18em] text-[#24060E] font-medium leading-none">
              AARAV
            </h1>
            <div className="my-2 flex items-center justify-center gap-3">
              <span className="w-10 h-[0.75px] bg-gradient-to-r from-transparent to-[#C5A059]/70" />
              <span className="font-script text-3xl sm:text-4xl text-[#C5A059] leading-none select-none">
                &
              </span>
              <span className="w-10 h-[0.75px] bg-gradient-to-l from-transparent to-[#C5A059]/70" />
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl tracking-[0.18em] text-[#24060E] font-medium leading-none">
              ANANYA
            </h1>
          </div>

          {/* Date & Destination */}
          <div className="my-5 pt-1 pb-1">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#8C6D2B] font-semibold uppercase">
              15 DECEMBER 2026
            </p>
            <p className="font-serif-luxury text-sm tracking-widest text-[#7A6455] italic mt-1">
              Jaipur · Rajasthan
            </p>
          </div>

          {/* Royal Wax Seal Medallion with A&A Monogram (Also clickable for tap effect) */}
          <div className="my-4 flex justify-center">
            <button
              type="button"
              onClick={triggerCelebration}
              disabled={isOpening}
              aria-label="Tap to open invitation with royal celebration burst"
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7A162B] via-[#5C0D1E] to-[#36050F] border-2 border-[#E7D39F] shadow-lg flex items-center justify-center p-1 group cursor-pointer active:scale-95 transition-transform"
            >
              {/* Wax texture concentric rings */}
              <div className="w-full h-full rounded-full border border-[#E7D39F]/50 flex items-center justify-center bg-radial-gradient from-[#7A162B]/80 to-[#36050F] group-hover:scale-105 transition-transform">
                <span className="font-cinzel text-xs font-bold text-[#F3E5AB] tracking-[0.2em] translate-x-[1px]">
                  A&A
                </span>
              </div>
              {/* Wax rim highlight */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-30 pointer-events-none" />
              {/* Subtle pulsing gold ring */}
              <div className="absolute -inset-1 rounded-full border border-[#C5A059]/40 animate-ping opacity-30 pointer-events-none" />
            </button>
          </div>

          {/* Open Invitation Button with Celebratory Tap Bomb Effect */}
          <div className="mt-6 flex flex-col items-center gap-3.5">
            <button
              onClick={triggerCelebration}
              disabled={isOpening}
              className="group relative w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] bg-gradient-to-r from-[#5C0D1E] via-[#7A162B] to-[#5C0D1E] text-[#FAF7F2] border border-[#C5A059] cursor-pointer"
            >
              <span className="relative z-10 font-cinzel text-xs tracking-[0.24em] font-semibold uppercase text-[#FBF8F2] group-hover:text-[#F3E5AB] transition-colors">
                {isOpening ? 'CELEBRATING...' : 'OPEN INVITATION'}
              </span>
              <div className="absolute inset-0 bg-[#C5A059]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Sound preference option */}
            <label className="flex items-center gap-2 cursor-pointer select-none text-[11px] text-[#7A6455]">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                className="accent-[#68132A] rounded cursor-pointer w-3.5 h-3.5"
              />
              <span className="font-sans-clean font-medium text-[11px] tracking-wide">
                Play royal ambient soundtrack on entry
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
