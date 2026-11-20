import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface JapanDreamProps {
  onNext: () => void;
}

export const JapanDream: React.FC<JapanDreamProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #FFF5ED 0%, #FAEDF1 60%, #F5E0E8 100%)',
      }}
    >
      {/* Cinematic Japanese Garden Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Morning Sun */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full blur-3xl bg-sakura/40 -z-10" />

        {/* Japanese Pagoda & Garden Silhouette Vector */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none"
        >
          <svg
            className="w-full max-w-4xl h-56 sm:h-72 text-botanical opacity-25"
            viewBox="0 0 1000 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft rolling hills */}
            <path
              d="M0 300C200 240 350 260 500 230C650 200 800 250 1000 300H0Z"
              fill="currentColor"
            />
            {/* Traditional Japanese Torii / Pagoda lines */}
            <path
              d="M480 230V150H520V230M460 160H540M450 145C480 135 520 135 550 145"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Destination Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2 text-xs font-cormorant tracking-[0.3em] uppercase text-gold"
        >
          <span className="w-8 h-[1px] bg-gold/50" />
          <span>BİR GÜN, BİRLİKTE</span>
          <span className="w-8 h-[1px] bg-gold/50" />
        </motion.div>

        {/* First Phrase */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-botanical font-normal leading-tight"
        >
          “Belki bir gün, Japonya'nın <br />
          <span className="italic font-cormorant text-rose font-medium">kiraz çiçekleri altında...</span>”
        </motion.h2>

        {/* Second Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-lora text-lg sm:text-xl text-warmText/85 font-light leading-relaxed max-w-lg"
        >
          Bazı hayaller, sevdiğimiz insanlarla paylaşıldığında daha da güzelleşir.
        </motion.p>

        {/* Action Button: Next to Bali */}
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
            <span>Bali Rüyasına Devam Edin</span>
            <ArrowRight className="w-4 h-4 text-botanical group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
