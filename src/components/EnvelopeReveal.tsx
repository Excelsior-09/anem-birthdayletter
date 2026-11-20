import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface EnvelopeRevealProps {
  onLetterRevealed: () => void;
}

export const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({ onLetterRevealed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Golden dust celebration
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D6B574', '#F4C9D4', '#FFF8F0', '#E8B8C5'],
        disableForReducedMotion: true,
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      onLetterRevealed();
    }, 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 luxury-paper-texture overflow-hidden"
    >
      <div className="relative z-10 max-w-lg w-full mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {/* Subtle Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="text-xs font-cormorant tracking-[0.3em] uppercase text-gold font-semibold">
            ÖZEL BİR MEKTUP
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl text-botanical font-normal">
            Kalpten Yazılan Satırlar
          </h2>
        </motion.div>

        {/* 3D Envelope Container */}
        <div className="relative w-full max-w-md aspect-[1.45/1] perspective-1000 mt-4 cursor-pointer" onClick={handleOpen}>
          {/* Main Envelope Body */}
          <div className="relative w-full h-full bg-[#FAF2E8] rounded-xl border border-gold/40 shadow-2xl shadow-gold/20 flex flex-col justify-between overflow-hidden">
            {/* Textured Paper Shadow Lining */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-black/5 pointer-events-none" />

            {/* Bottom triangular folds illustration */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 400 280"
              preserveAspectRatio="none"
            >
              {/* Bottom fold */}
              <polygon
                points="0,280 200,150 400,280"
                fill="#F4E9DC"
                stroke="#D6B574"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* Left fold */}
              <polygon
                points="0,0 0,280 200,150"
                fill="#F7EDE0"
                stroke="#D6B574"
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
              {/* Right fold */}
              <polygon
                points="400,0 400,280 200,150"
                fill="#F5EADE"
                stroke="#D6B574"
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
            </svg>

            {/* Inscription on the envelope front */}
            <div className="absolute bottom-6 left-0 right-0 z-20 text-center pointer-events-none">
              <span className="font-allura text-3xl sm:text-4xl text-botanical/85 tracking-wide drop-shadow-sm">
                Canım Anem'e
              </span>
            </div>

            {/* Letter Sheet that slides up when opened */}
            <motion.div
              className="absolute left-6 right-6 bottom-4 h-48 bg-[#FFFDF9] rounded-t-lg border-t-2 border-l border-r border-gold/40 shadow-md p-4 text-left z-0"
              animate={isOpen ? { y: -160, opacity: 1, scale: 1.02 } : { y: 0, opacity: 0.95 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-[1px] bg-gold/50 mb-3" />
              <div className="font-allura text-xl text-gold mb-2">Canım Anem...</div>
              <div className="space-y-1.5 opacity-60">
                <div className="w-full h-2 bg-warmText/20 rounded-full" />
                <div className="w-4/5 h-2 bg-warmText/20 rounded-full" />
                <div className="w-3/4 h-2 bg-warmText/20 rounded-full" />
              </div>
            </motion.div>

            {/* Top Flap with 3D Flip */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 origin-top z-30"
              style={{ transformStyle: 'preserve-3d' }}
              animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <svg
                className="w-full h-full drop-shadow-md"
                viewBox="0 0 400 140"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 400,0 200,140"
                  fill="#F2E4D2"
                  stroke="#D6B574"
                  strokeWidth="0.8"
                  strokeOpacity="0.5"
                />
              </svg>
            </motion.div>

            {/* Wax Seal placed on the point of the flap */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <motion.button
                type="button"
                onClick={handleOpen}
                animate={
                  isOpen
                    ? { scale: [1, 1.2, 0], opacity: [1, 0.8, 0] }
                    : { scale: [1, 1.05, 1] }
                }
                transition={
                  isOpen
                    ? { duration: 0.5 }
                    : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full wax-seal flex items-center justify-center cursor-pointer border-2 border-[#f7e0a8]/80 shadow-xl group hover:brightness-110 active:scale-95 transition-all"
                title="Mührü Aç"
                aria-label="Mühre dokunarak mektubu açın"
              >
                {/* Engraved Sakura Flower on the seal */}
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#573d12] opacity-80 group-hover:opacity-95 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13 5 15 6 18 6C15 8 15 11 17 14C14 13 12 15 12 18C12 15 10 13 7 14C9 11 9 8 6 6C9 6 11 5 12 2Z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Action Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-lora text-xs sm:text-sm text-warmText/70 tracking-wide flex items-center space-x-1.5"
        >
          <span>✨</span>
          <span>Mühre dokunarak mektubunuzu açın</span>
          <span>✨</span>
        </motion.p>
      </div>
    </motion.div>
  );
};
