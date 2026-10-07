import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shape: 'petal' | 'confetti' | 'goldSpark';
  opacity: number;
  decay: number;
  wobble: number;
  wobbleSpeed: number;
}

interface CelebrationBurstProps {
  originX?: number; // 0 to 1 relative to viewport or client pixels
  originY?: number;
  onComplete?: () => void;
}

export const CelebrationBurst: React.FC<CelebrationBurstProps> = ({
  originX,
  originY,
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const startX = originX !== undefined ? originX : width / 2;
    const startY = originY !== undefined ? originY : height / 2;

    const colors = [
      '#C5A059', // Champagne Gold
      '#E7D39F', // Bright Gold
      '#B8860B', // Dark Gold
      '#C94A5B', // Royal Rose Pink
      '#8C1B2F', // Deep Maroon Red
      '#E89A38', // Golden Marigold
      '#F4B942', // Auspicious Turmeric Yellow
      '#FFF4D2', // Shimmering Ivory Gold
    ];

    const particleCount = 140; // Rich party bomb celebration burst
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // 360 degree radial blast with bias slightly upwards
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 14;
      const upwardBias = -2.5 - Math.random() * 3.5;

      const shapeTypes: ('petal' | 'confetti' | 'goldSpark')[] = [
        'petal',
        'petal',
        'confetti',
        'goldSpark',
      ];
      const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + upwardBias,
        size: shape === 'petal' ? 8 + Math.random() * 8 : shape === 'confetti' ? 5 + Math.random() * 5 : 3 + Math.random() * 3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape,
        opacity: 1,
        decay: 0.007 + Math.random() * 0.008,
        wobble: Math.random() * Math.PI,
        wobbleSpeed: 0.08 + Math.random() * 0.08,
      });
    }

    const startTime = performance.now();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let aliveCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.opacity <= 0.01) continue;

        aliveCount++;

        // Physics updates
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28; // Gravity
        p.vx *= 0.965; // Air drag
        p.vy *= 0.97;
        p.rotation += p.rotationSpeed;
        p.wobble += p.wobbleSpeed;
        p.opacity -= p.decay;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'petal') {
          // Curved rose / marigold petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size, Math.sin(p.wobble) * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'confetti') {
          // Rectangular gold foil ribbon
          const ribbonW = p.size * 1.6;
          const ribbonH = p.size * 0.5 * Math.sin(p.wobble);
          ctx.fillRect(-ribbonW / 2, -ribbonH / 2, ribbonW, Math.max(1, Math.abs(ribbonH)));
        } else {
          // Four-pointed golden spark
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // Continue animation if particles remain and within 2.5s
      const elapsed = performance.now() - startTime;
      if (aliveCount > 0 && elapsed < 2600) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [originX, originY, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
