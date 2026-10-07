import React, { useState, useEffect } from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { GoldHairlineDivider } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_COUPLE.weddingDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 px-4 bg-[#FAF7F2] text-[#24060E] overflow-hidden border-b border-[#C5A059]/20">
      {/* Background Indian jaali texture */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-md mx-auto text-center z-10">
        {/* Section Kicker */}
        <Reveal variant="fade-up" delay={50}>
          <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
            THE AUSPICIOUS MOMENT
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={150}>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A0D17] italic font-normal mt-1 mb-2">
            Until We Take Our Seven Vows
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={250}>
          <GoldHairlineDivider className="my-5" variant="lotus" />
        </Reveal>

        {/* Refined Editorial Unboxed Countdown with Slide-in Effect */}
        <Reveal variant="slide-left" delay={300} duration={950}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 my-6">
            {timeUnits.map((unit, idx) => (
              <React.Fragment key={unit.label}>
                <div className="flex flex-col items-center justify-center min-w-[62px] sm:min-w-[76px] py-2">
                  <span className="font-cinzel text-3xl sm:text-4xl font-normal text-[#4A0E1C] tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C6D2B] font-semibold mt-1">
                    {unit.label}
                  </span>
                </div>
                {idx < timeUnits.length - 1 && (
                  <span className="font-cinzel text-lg text-[#C5A059]/60 pb-4 select-none">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={400}>
          <p className="font-serif-luxury text-xs sm:text-sm text-[#7A6455] italic max-w-xs mx-auto">
            Tuesday, 15 December 2026 · Jaipur, Rajasthan
          </p>
        </Reveal>
      </div>
    </section>
  );
};
