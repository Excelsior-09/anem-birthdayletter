import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palmtree } from 'lucide-react';

interface BaliDreamProps {
  onNext: () => void;
}

export const BaliDream: React.FC<BaliDreamProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 65%, #FFF8F0 0%, #E8F7F5 45%, #CEEFEA 100%)',
      }}
    >
      {/* Tropical Bali Ocean & Sunset Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Golden Sunset Halo on Ocean Horizon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full blur-3xl bg-gold/30 -z-10" />

        {/* Gentle Turquoise Water Wave Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-turquoise/35 via-turquoise/10 to-transparent -z-10" />

        {/* Tropical Palm Fronds Silhouette (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.35, x: 0 }}
          transition={{ duration: 1.6 }}
          className="absolute -top-12 -left-12 sm:-left-6 w-64 sm:w-80 md:w-96 text-botanical pointer-events-none"
        >
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M0 0C60 40 120 70 170 120C140 110 100 115 70 140C110 135 150 145 180 170C150 170 120 185 100 210C140 195 180 200 220 220C170 230 140 260 120 300C160 260 210 240 260 230C230 250 210 280 200 300" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Tropical Palm Fronds Silhouette (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="absolute -bottom-16 -right-12 sm:-right-8 w-64 sm:w-80 md:w-96 text-botanical pointer-events-none"
        >
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M300 300C240 260 180 230 130 180C160 190 200 185 230 160C190 165 150 155 120 130C150 130 180 115 200 90C160 105 120 100 80 80C130 70 160 40 180 0C140 40 90 60 40 70C70 50 90 20 100 0" opacity="0.6" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2 text-xs font-cormorant tracking-[0.3em] uppercase text-turquoise-dark font-semibold"
        >
          <span className="w-8 h-[1px] bg-turquoise/60" />
          <span className="flex items-center space-x-1">
            <Palmtree className="w-3.5 h-3.5 text-turquoise-dark" />
            <span>TROPİK BİR RÜYA</span>
          </span>
          <span className="w-8 h-[1px] bg-turquoise/60" />
        </motion.div>

        {/* First Phrase */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-botanical font-normal leading-tight"
        >
          “Ve belki başka bir gün, Bali'nin <br />
          <span className="italic font-cormorant text-turquoise-dark font-medium">masmavi sularına karşı...</span>”
        </motion.h2>

        {/* Second Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-lora text-lg sm:text-xl text-warmText/85 font-light leading-relaxed max-w-lg"
        >
          Birlikte gerçekleştirilen hayaller, ömür boyu hatırlanan en güzel anılara dönüşür.
        </motion.p>

        {/* Action Button: Next to Family */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="pt-4"
        >
          <button
            onClick={onNext}
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-botanical font-cormorant font-semibold text-lg tracking-wider shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/70"
          >
            <span>Ailemize ve Sevgiye</span>
            <ArrowRight className="w-4 h-4 text-botanical group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
