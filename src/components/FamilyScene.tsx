import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

interface FamilySceneProps {
  onNext: () => void;
}

export const FamilyScene: React.FC<FamilySceneProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center luxury-paper-texture overflow-hidden"
    >
      {/* Warm Golden Light Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full blur-3xl bg-gold/25 -z-10" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Family Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2 text-xs font-cormorant tracking-[0.3em] uppercase text-gold font-semibold"
        >
          <span className="w-8 h-[1px] bg-gold/50" />
          <span className="flex items-center space-x-1.5">
            <Heart className="w-3.5 h-3.5 text-rose fill-rose/30" />
            <span>AİLE VE HÜRMET</span>
          </span>
          <span className="w-8 h-[1px] bg-gold/50" />
        </motion.div>

        {/* First Phrase: "Erol Baba, Sude, Ilayda ve siz..." */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-botanical font-normal leading-tight"
        >
          “Erol Baba, Sude, <br />
          <span className="italic font-cormorant text-rose font-medium">Ilayda ve siz...</span>”
        </motion.h2>

        {/* Second Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-lora text-lg sm:text-xl text-warmText/90 font-light leading-relaxed max-w-xl"
        >
          Bir aileyi güzel yapan, yalnızca aynı çatı altında yaşamak değil; <br className="hidden sm:inline" />
          o çatının altında hissedilen sevgidir.
        </motion.p>

        {/* Delicate Golden Ornament Divider */}
        <div className="flex items-center justify-center space-x-3 text-gold/60">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-sm">✦</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Action Button: Next to Finale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="pt-2"
        >
          <button
            onClick={onNext}
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-botanical font-cormorant font-semibold text-lg tracking-wider shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/70"
          >
            <span>Doğum Günü Dileği</span>
            <ArrowRight className="w-4 h-4 text-botanical group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
