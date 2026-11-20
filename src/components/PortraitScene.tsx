import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';

interface PortraitSceneProps {
  onOpenEnvelope: () => void;
}

export const PortraitScene: React.FC<PortraitSceneProps> = ({ onOpenEnvelope }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 luxury-paper-texture overflow-hidden"
    >
      {/* Background Floral Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-3xl bg-sakura/30 -z-10" />
      </div>

      <div className="relative z-10 max-w-xl w-full mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-10">
        {/* Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center space-x-2 text-xs font-cormorant tracking-[0.25em] uppercase text-gold"
        >
          <span className="w-6 h-[1px] bg-gold/50" />
          <span>CANIM ANEM</span>
          <span className="w-6 h-[1px] bg-gold/50" />
        </motion.div>

        {/* Large Elegant Portrait with Thin Champagne-Gold Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative group p-3 sm:p-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-gold/40 shadow-2xl shadow-gold/20"
        >
          {/* Decorative Corner Filigrees */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/70 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/70 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/70 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/70 rounded-br-sm pointer-events-none" />

          {/* Portrait Image Container with Slow Cinematic Drift */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-gold/30">
            <motion.picture
              className="w-full h-full block"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 16,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <source type="image/webp" srcSet="/assets/anem-photo.webp" />
              <img
                src="/assets/anem-photo.jpg"
                alt="Canım Anem portresi"
                width={320}
                height={420}
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </motion.picture>
            {/* Subtle Warm Editorial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-botanical/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Emotional Text Section */}
        <div className="space-y-4 max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="font-playfair text-xl sm:text-2xl md:text-3xl text-botanical font-normal leading-relaxed"
          >
            “Bazı insanlar hayatımıza yalnızca girmez; <br />
            <span className="italic font-cormorant text-gold font-medium">
              geldikleri yeri güzelleştirirler.
            </span>”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="font-allura text-2xl sm:text-3xl text-rose"
          >
            Bu satırlar sizin için...
          </motion.p>
        </div>

        {/* Button: "Mektubunuzu açın" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <button
            onClick={onOpenEnvelope}
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-botanical font-cormorant font-semibold text-lg tracking-wider shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/70"
          >
            <Mail className="w-5 h-5 text-botanical group-hover:scale-110 transition-transform duration-300" />
            <span>Mektubunuzu açın</span>
            <Sparkles className="w-4 h-4 text-botanical/70 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
