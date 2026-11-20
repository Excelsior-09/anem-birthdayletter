import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Use a ref to avoid re-attaching listeners when isVisible changes
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps — listeners attach once, refs handle state

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer ring */}
      <motion.div
        className="fixed rounded-full border border-gold/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isPointer ? 20 : 14),
          y: mousePosition.y - (isPointer ? 20 : 14),
          width: isPointer ? 40 : 28,
          height: isPointer ? 40 : 28,
          backgroundColor: isPointer ? 'rgba(214, 181, 116, 0.12)' : 'transparent',
          borderColor: isPointer ? 'rgba(214, 181, 116, 0.85)' : 'rgba(214, 181, 116, 0.45)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-rose pointer-events-none shadow-sm"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 600, mass: 0.2 }}
      />
    </div>
  );
};
