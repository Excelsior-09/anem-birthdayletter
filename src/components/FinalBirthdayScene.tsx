import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Volume2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalBirthdaySceneProps {
  onReReadLetter: () => void;
  onReplayMusic: () => void;
}

export const FinalBirthdayScene: React.FC<FinalBirthdaySceneProps> = ({
  onReReadLetter,
  onReplayMusic,
}) => {
  useEffect(() => {
    // Elegant golden and soft rose celebratory dust
    const timer = setTimeout(() => {
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#D6B574', '#F4C9D4', '#FFF8F0', '#E8B8C5', '#75C9C2'],
          disableForReducedMotion: true,
        });
      } catch {
        // Fallback
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #FFF3E6 0%, #FDF0F3 50%, #F8E2E8 100%)',
      }}
    >
      {/* Dreamy Sunset Sakura Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] rounded-full blur-3xl bg-gold/25 -z-10" />
      </div>

      <div className="relative z-10 max-w-xl w-full mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Anem's Portrait Return in Heirloom Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-2 rounded-full bg-white/70 border-2 border-gold/50 shadow-2xl shadow-gold/20"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border border-gold/30">
            <picture className="w-full h-full block">
              <source type="image/webp" srcSet="/assets/anem-photo.webp" />
              <img
                src="/assets/anem-photo.jpg"
                alt="Canım Anem hatıra portresi"
                width={176}
                height={176}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </div>
          <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-ivory border border-gold/40 shadow-sm text-rose">
            <Heart className="w-4 h-4 fill-rose" />
          </div>
        </motion.div>

        {/* Sequential Line Reveals */}
        <div className="space-y-4 max-w-lg">
          {/* Line 1: "İyi ki bu dünyaya gelmişsiniz Anem." */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="font-playfair text-xl sm:text-2xl text-botanical font-normal"
          >
            İyi ki bu dünyaya gelmişsiniz Anem.
          </motion.p>

          {/* Line 2: "İyi ki Erol Baba'nın hayatına, Sude'nin ve Ilayda'nın dünyasına dokunmuşsunuz." */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.4 }}
            className="font-playfair text-lg sm:text-xl text-warmText font-normal leading-relaxed"
          >
            İyi ki Erol Baba'nın hayatına, Sude'nin ve Ilayda'nın dünyasına dokunmuşsunuz.
          </motion.p>

          {/* Line 3: "İyi ki bir gün yollarımız kesişmiş." */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 2.3 }}
            className="font-playfair text-lg sm:text-xl text-rose font-normal"
          >
            İyi ki bir gün yollarımız kesişmiş.
          </motion.p>
        </div>

        {/* Grand Final Birthday Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 3.2 }}
          className="pt-4 pb-2 space-y-3"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-botanical font-semibold tracking-tight">
            Doğum gününüz kutlu olsun, <br />
            <span className="gold-gradient-text italic font-cormorant font-bold">
              Canım Anem.
            </span>{' '}
            ❤️
          </h1>
        </motion.div>

        {/* Signature Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 4.2 }}
          className="space-y-1 text-center"
        >
          <p className="font-cormorant italic text-sm sm:text-base text-warmText/75">
            Sevgi ve saygılarımla,
          </p>
          {/* Delicate Handwritten Signature */}
          <div className="font-allura text-3xl sm:text-4xl text-botanical font-normal tracking-wide drop-shadow-sm">
            Anas
          </div>
        </motion.div>

        {/* Discreet Action Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.0 }}
          className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs"
        >
          <button
            onClick={onReReadLetter}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-ivory/80 hover:bg-white border border-gold/40 text-warmText/80 hover:text-botanical shadow-sm transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-gold" />
            <span className="font-lora">Mektubu yeniden okuyun</span>
          </button>

          <button
            onClick={onReplayMusic}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-ivory/80 hover:bg-white border border-gold/40 text-warmText/80 hover:text-botanical shadow-sm transition-all"
          >
            <Volume2 className="w-3.5 h-3.5 text-botanical" />
            <span className="font-lora">Müziği tekrar dinleyin</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
