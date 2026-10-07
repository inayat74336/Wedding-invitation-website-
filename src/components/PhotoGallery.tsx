import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/weddingData';
import { GoldHairlineDivider, CornerOrnament } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const PhotoGallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveImageIndex(null);
    document.body.style.overflow = '';
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleCloseLightbox, handleNext, handlePrev]);

  // Touch swipe support for smartphone viewport
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative py-20 px-4 bg-[#FAF7F2] text-[#24060E] overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER III · MEMORIES
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              Moments in Time
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={250}>
            <GoldHairlineDivider className="my-4" variant="lotus" />
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="font-serif-luxury text-sm text-[#7A6455] italic">
              Portraits of love, tradition, and quiet promises
            </p>
          </Reveal>
        </div>

        {/* Editorial Masonry Grid with Staggered Fade-in-up */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, idx) => {
            const isFullWidth = idx === 0 || idx === 2;
            return (
              <div
                key={img.id}
                className={isFullWidth ? 'col-span-2' : 'col-span-1'}
              >
                <Reveal variant="fade-up" delay={100 + (idx % 3) * 120} duration={900}>
                  <div
                    onClick={() => handleOpenLightbox(idx)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#FFFDF9] p-2 border border-[#C5A059]/35 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[#C5A059]"
                  >
                    <div
                      className={`relative rounded-xl overflow-hidden w-full ${
                        isFullWidth ? 'aspect-[16/10]' : 'aspect-[3/4]'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Subtle warm champagne tint & hover plaque */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A050B]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                        <div className="flex items-center justify-between text-[#FAF7F2]">
                          <p className="font-serif-luxury text-xs italic tracking-wide line-clamp-1">
                            {img.caption}
                          </p>
                          <Maximize2 className="w-3.5 h-3.5 text-[#E7D39F] shrink-0 ml-1.5" />
                        </div>
                      </div>

                      {/* Inner hairline */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none" />
                    </div>

                    <p className="font-serif-luxury text-[11px] text-[#7A6455] italic text-center mt-2 mb-0.5 line-clamp-1">
                      {img.caption}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleCloseLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-[#120206]/96 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-fade-in"
        >
          {/* Top Bar with counter & close button */}
          <div className="w-full max-w-2xl flex items-center justify-between text-[#FAF7F2] py-2 z-10">
            <span className="font-cinzel text-xs tracking-widest text-[#E7D39F] uppercase">
              {activeImageIndex + 1} of {GALLERY_IMAGES.length}
            </span>

            <button
              onClick={handleCloseLightbox}
              aria-label="Close image lightbox"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image Container */}
          <div
            className="relative flex-1 w-full max-w-2xl flex items-center justify-center py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-2 rounded-2xl bg-[#FFFDF9]/10 border border-[#C5A059]/40 shadow-2xl max-h-[75vh]">
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <img
                src={GALLERY_IMAGES[activeImageIndex].src}
                alt={GALLERY_IMAGES[activeImageIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Left Prev Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous photograph"
              className="absolute left-1 sm:left-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-[#FAF7F2] border border-white/20 backdrop-blur-sm transition-transform active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next photograph"
              className="absolute right-1 sm:right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-[#FAF7F2] border border-white/20 backdrop-blur-sm transition-transform active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-md text-center pb-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif-luxury text-base text-[#FAF7F2] italic tracking-wide">
              {GALLERY_IMAGES[activeImageIndex].caption}
            </p>
            <p className="font-cinzel text-[10px] text-[#C5A059] tracking-widest uppercase mt-1">
              Aarav & Ananya Wedding Collection
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
