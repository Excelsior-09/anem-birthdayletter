import React, { useEffect, useRef } from 'react';

interface SakuraParticlesProps {
  density?: number;
  speed?: number;
  className?: string;
  interactive?: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  depth: number;
}

export const SakuraParticles: React.FC<SakuraParticlesProps> = ({
  density = 30,
  speed = 1,
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0 });

  useEffect(() => {
    // Respect prefers-reduced-motion: exit without running loop
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mousePos.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Adaptive Petal Count (optimized for mobile battery & GPU)
    const isMobile = width < 640;
    const maxAllowed = isMobile ? 18 : 32;
    const count = Math.min(density, maxAllowed);

    const petals: Petal[] = [];
    for (let i = 0; i < count; i++) {
      const depth = Math.random();
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: depth * 8 + 6, // 6px to 14px
        speedY: (depth * 0.7 + 0.5) * speed,
        speedX: (Math.random() * 0.6 - 0.3) * speed,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: Math.random() * 0.02 - 0.01,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
        opacity: depth * 0.45 + 0.35,
        depth,
      });
    }

    const drawPetal = (p: Petal, c: CanvasRenderingContext2D) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.angle);
      c.scale(1, Math.cos(p.flip));

      // Delicate Sakura petal shape
      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(
        -p.size * 0.7,
        -p.size * 0.4,
        -p.size * 0.9,
        -p.size * 1.2,
        0,
        -p.size * 1.5
      );
      c.bezierCurveTo(
        p.size * 0.9,
        -p.size * 1.2,
        p.size * 0.7,
        -p.size * 0.4,
        0,
        0
      );

      // Gradient for organic petal translucency
      const grad = c.createRadialGradient(
        0,
        -p.size * 0.75,
        1,
        0,
        -p.size * 0.75,
        p.size
      );
      grad.addColorStop(0, `rgba(255, 240, 245, ${p.opacity})`);
      grad.addColorStop(0.6, `rgba(244, 201, 212, ${p.opacity})`);
      grad.addColorStop(1, `rgba(232, 165, 183, ${p.opacity * 0.8})`);

      c.fillStyle = grad;
      c.fill();

      // Delicate center vein
      c.beginPath();
      c.moveTo(0, -p.size * 0.2);
      c.lineTo(0, -p.size * 1.1);
      c.strokeStyle = `rgba(214, 181, 116, ${p.opacity * 0.35})`;
      c.lineWidth = 0.6;
      c.stroke();

      c.restore();
    };

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse wind effect
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.04;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + mousePos.current.x * 0.6;
        p.angle += p.angularSpeed;
        p.flip += p.flipSpeed;

        // Wrap around boundaries
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p, ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-10 ${className}`}
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};
