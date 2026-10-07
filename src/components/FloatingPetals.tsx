import React, { useMemo } from 'react';

interface PetalConfig {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: number;
  rotation: number;
  color: string;
  type: 'rose' | 'marigold';
}

export const FloatingPetals: React.FC = () => {
  // Generate a set of realistic gentle petals
  const petals = useMemo<PetalConfig[]>(() => {
    const list: PetalConfig[] = [];
    const colors = [
      '#C94A5B', // Soft Rose Pink
      '#B02E42', // Deep Rose Red
      '#E89A38', // Golden Marigold
      '#F4B942', // Warm Marigold Yellow
      '#A8233C', // Royal Crimson
    ];

    for (let i = 0; i < 16; i++) {
      list.push({
        id: i,
        left: `${(i * 6.2 + Math.random() * 4).toFixed(1)}%`,
        duration: `${(14 + (i % 6) * 2.5).toFixed(1)}s`,
        delay: `${(i * 1.1).toFixed(1)}s`,
        size: 14 + (i % 5) * 4,
        rotation: (i * 45) % 360,
        color: colors[i % colors.length],
        type: i % 2 === 0 ? 'rose' : 'marigold',
      });
    }
    return list;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
      style={{ contain: 'strict' }}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: petal.left,
            top: '-5%',
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          {petal.type === 'rose' ? (
            <svg
              width={petal.size}
              height={petal.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.06))' }}
            >
              <path
                d="M12 2C6 8 2 16 2 24C2 28.5 6.5 31 12 31C17.5 31 22 28.5 22 24C22 16 18 8 12 2Z"
                fill={petal.color}
                fillOpacity="0.75"
              />
              <path
                d="M12 4C9 10 7 16 8 24"
                stroke="#FAD0C4"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.06))' }}
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill={petal.color}
                fillOpacity="0.8"
                transform="rotate(25 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="4"
                ry="8"
                fill="#FFD269"
                fillOpacity="0.4"
                transform="rotate(15 12 12)"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
