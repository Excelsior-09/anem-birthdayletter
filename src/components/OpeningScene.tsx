import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface OpeningSceneProps {
  onStart: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onStart }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onStart();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 text-center transition-transform duration-1000 ${
        isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #FFF5EA 0%, #FFF8F0 50%, #FBEBEF 100%)',
      }}
    >
      {/* Cinematic Morning Sunlight & Atmospheric Mist */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Morning Sun */}
        <div
          className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(214, 181, 116, 0.45) 0%, rgba(244, 201, 212, 0.25) 50%, transparent 80%)',
          }}
        />

        {/* Morning Sun Rays */}
        <div
          className="absolute top-0 left-0 right-0 h-full opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(65deg, transparent, transparent 40px, rgba(214, 181, 116, 0.08) 40px, rgba(214, 181, 116, 0.08) 80px)',
          }}
        />

        {/* Delicate Sakura Tree Silhouette Illustration in Background */}
        <svg
          className="absolute -top-10 -right-16 w-80 sm:w-96 md:w-[480px] opacity-25 text-rose pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 0C400 60 350 120 300 220C280 260 250 290 200 320"
            stroke="#D6B574"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M380 90C320 100 280 130 240 180"
            stroke="#D6B574"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="280" cy="200" r="14" fill="#F4C9D4" opacity="0.7" />
          <circle cx="295" cy="185" r="10" fill="#E8B8C5" opacity="0.8" />
          <circle cx="340" cy="140" r="16" fill="#F4C9D4" opacity="0.75" />
          <circle cx="230" cy="170" r="12" fill="#F4C9D4" opacity="0.65" />
          <circle cx="190" cy="315" r="15" fill="#E8B8C5" opacity="0.7" />
        </svg>

        {/* Left Japanese garden branch silhouette */}
        <svg
          className="absolute -bottom-10 -left-16 w-72 sm:w-80 md:w-[420px] opacity-20 text-sage pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 500C120 420 180 360 220 280C240 240 280 220 340 200"
            stroke="#A9BFA2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="210" cy="290" r="14" fill="#A9BFA2" opacity="0.6" />
          <circle cx="230" cy="270" r="11" fill="#75C9C2" opacity="0.5" />
          <circle cx="290" cy="225" r="15" fill="#A9BFA2" opacity="0.6" />
        </svg>
      </div>

      {/* Main Content Presentation */}
      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-10">
        {/* Japanese Garden Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-2 text-xs font-cormorant tracking-[0.3em] uppercase text-gold"
        >
          <span className="w-8 h-[1px] bg-gold/50" />
          <span>CANIM ANEM</span>
          <span className="w-8 h-[1px] bg-gold/50" />
        </motion.div>

        {/* Text 1: "Bugün, dünyaya güzel bir kalbin geldiği günü kutluyoruz..." */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-botanical font-normal leading-tight tracking-tight">
            Bugün, dünyaya <br />
            <span className="italic font-cormorant text-rose font-medium">güzel bir kalbin</span> geldiği gün.
          </h1>
          <p className="font-lora text-base sm:text-lg md:text-xl text-warmText/80 max-w-xl mx-auto font-light leading-relaxed">
            Bugün, dünyaya güzel bir kalbin geldiği günü kutluyoruz...
          </p>
        </motion.div>

        {/* Text 2 (After short pause): "Bu küçük sürpriz, çok özel bir insana..." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-allura text-2xl sm:text-3xl md:text-4xl text-botanical/90 max-w-lg mx-auto"
        >
          Bu küçük sürpriz, çok özel bir insana...
        </motion.p>

        {/* Champagne Gold Button: "Kalbiniz için küçük bir sürpriz" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4"
        >
          <button
            onClick={handleClick}
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#D6B574] via-[#E2C78E] to-[#D6B574] text-botanical font-cormorant font-semibold text-lg sm:text-xl tracking-wider shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-500 overflow-hidden border border-white/60"
          >
            {/* Shimmer sweep effect */}
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
            />
            <Heart className="w-5 h-5 text-botanical fill-botanical/20 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Kalbiniz için küçük bir sürpriz</span>
            <Sparkles className="w-4 h-4 text-botanical/80 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Subtle Bottom Ambient Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3.0, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-lora text-warmText/50 tracking-wider flex items-center space-x-2"
      >
        <span>🌸</span>
        <span>Dokunun ve hikâyeye adım atın</span>
        <span>🌸</span>
      </motion.div>
    </motion.div>
  );
};
