import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant = 'fade-up' | 'slide-left' | 'slide-right' | 'fade' | 'zoom-in';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 900,
  className = '',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Initial hidden states
  const getHiddenClasses = () => {
    switch (variant) {
      case 'fade-up':
        return 'opacity-0 translate-y-7';
      case 'slide-left':
        return 'opacity-0 -translate-x-7';
      case 'slide-right':
        return 'opacity-0 translate-x-7';
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  const visibleClasses = 'opacity-100 translate-x-0 translate-y-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
        isVisible ? visibleClasses : getHiddenClasses()
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
