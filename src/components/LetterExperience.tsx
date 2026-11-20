import React from 'react';
import { motion } from 'framer-motion';
import { LETTER_CHAPTERS } from '../data/letter';
import { LetterChapter } from './LetterChapter';
import { ArrowRight, Heart } from 'lucide-react';

interface LetterExperienceProps {
  onContinueToFinale: () => void;
}

export const LetterExperience: React.FC<LetterExperienceProps> = ({
  onContinueToFinale,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen luxury-paper-texture pt-16 pb-28 px-4 sm:px-6"
    >
      {/* Decorative Editorial Watermark */}
      <div className="absolute top-20 right-10 pointer-events-none opacity-[0.04] text-botanical font-cormorant text-9xl select-none hidden lg:block">
        ANEM
      </div>

      {/* Letter Header Presentation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl mx-auto text-center pt-8 pb-12 space-y-4"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-cormorant tracking-[0.3em] uppercase text-gold">
          <span className="w-10 h-[1px] bg-gold/50" />
          <span>DOĞUM GÜNÜ HATIRASI</span>
          <span className="w-10 h-[1px] bg-gold/50" />
        </div>

        <h2 className="font-playfair text-3xl sm:text-5xl text-botanical font-normal">
          Canım Anem...
        </h2>

        <p className="font-allura text-2xl sm:text-3xl text-rose">
          Sevgiyle, hürmetle ve kalpten dökülen satırlar...
        </p>

        <div className="flex justify-center pt-2">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>
      </motion.div>

      {/* Chapters Continuous Feed (4 Chapters) */}
      <div className="space-y-4">
        {LETTER_CHAPTERS.map(chapter => (
          <LetterChapter
            key={chapter.id}
            chapter={chapter}
          />
        ))}
      </div>

      {/* Transition to the Final Birthday Moment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto text-center pt-16 flex flex-col items-center space-y-4"
      >
        <p className="font-cormorant italic text-lg sm:text-xl text-warmText/80">
          “İyi ki bu dünyaya gelmişsiniz Canım Anem...”
        </p>

        <button
          onClick={onContinueToFinale}
          className="group relative inline-flex items-center space-x-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-botanical font-cormorant font-semibold text-lg tracking-wider shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-white/70"
        >
          <Heart className="w-5 h-5 text-botanical fill-botanical/20 group-hover:scale-110 transition-transform duration-300" />
          <span>Doğum Günü Dileğine İlerleyin</span>
          <ArrowRight className="w-4 h-4 text-botanical/70 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </motion.div>
  );
};
