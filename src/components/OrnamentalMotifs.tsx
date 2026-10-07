import React from 'react';

export const RoyalLotus: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#C5A059]' }) => (
  <svg viewBox="0 0 40 32" fill="none" className={className} aria-hidden="true">
    {/* Center petal */}
    <path
      d="M20 2 C18 9, 15 17, 20 26 C25 17, 22 9, 20 2 Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    {/* Left inner petal */}
    <path
      d="M17 6 C12 11, 10 18, 17 25 C19 18, 19 12, 17 6 Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    {/* Right inner petal */}
    <path
      d="M23 6 C28 11, 30 18, 23 25 C21 18, 21 12, 23 6 Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    {/* Left outer petal */}
    <path
      d="M13 12 C6 16, 4 23, 14 26 C16 21, 15 16, 13 12 Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
    {/* Right outer petal */}
    <path
      d="M27 12 C34 16, 36 23, 26 26 C24 21, 25 16, 27 12 Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
    {/* Base pod */}
    <path
      d="M12 26 C16 29, 24 29, 28 26 C25 25, 15 25, 12 26 Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
  </svg>
);

export const GoldHairlineDivider: React.FC<{
  className?: string;
  variant?: 'simple' | 'lotus' | 'diamond';
}> = ({ className = 'my-6', variant = 'lotus' }) => (
  <div className={`flex items-center justify-center gap-3.5 max-w-xs mx-auto ${className}`} aria-hidden="true">
    <span className="flex-1 h-[0.75px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#C5A059]" />
    {variant === 'lotus' ? (
      <RoyalLotus className="w-5 h-4 text-[#C5A059] shrink-0" />
    ) : variant === 'diamond' ? (
      <div className="flex items-center gap-1 shrink-0">
        <span className="w-1 h-1 rounded-full bg-[#C5A059]/60" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#FAF7F2]" />
        <span className="w-1 h-1 rounded-full bg-[#C5A059]/60" />
      </div>
    ) : (
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A059] shrink-0" />
    )}
    <span className="flex-1 h-[0.75px] bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#C5A059]" />
  </div>
);

export const CornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ position }) => {
  const rotationClass = {
    'top-left': 'top-2.5 left-2.5',
    'top-right': 'top-2.5 right-2.5 rotate-90',
    'bottom-left': 'bottom-2.5 left-2.5 -rotate-90',
    'bottom-right': 'bottom-2.5 right-2.5 rotate-180',
  }[position];

  return (
    <div className={`absolute ${rotationClass} pointer-events-none opacity-70`} aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M1 21V6C1 3.23858 3.23858 1 6 1H21" stroke="#C5A059" strokeWidth="0.8" />
        <path d="M5 21V8C5 6.34315 6.34315 5 8 5H21" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.6" />
        <circle cx="6" cy="6" r="1.5" fill="#C5A059" />
      </svg>
    </div>
  );
};

export const CuspedArchTop: React.FC<{ className?: string }> = ({ className = 'w-full h-8 text-[#FAF7F2]' }) => (
  <svg viewBox="0 0 320 32" preserveAspectRatio="none" className={className} fill="currentColor">
    <path d="M0,32 L0,0 C60,0 100,18 160,2 C220,18 260,0 320,0 L320,32 Z" />
  </svg>
);
