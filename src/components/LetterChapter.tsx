import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LetterChapterData } from '../types';
import { Heart, Palmtree, Compass, Sparkles, UtensilsCrossed } from 'lucide-react';

interface LetterChapterProps {
  chapter: LetterChapterData;
}

export const LetterChapter: React.FC<LetterChapterProps> = ({ chapter }) => {
  const isChapter2 = chapter.id === 'personality';
  const isChapter3 = chapter.id === 'life';
  const isChapter4 = chapter.id === 'ilayda';

  const [imageError, setImageError] = useState(false);

  const getBadgeIcon = () => {
    if (isChapter4) return <Heart className="w-4 h-4 text-rose fill-rose/25" />;
    if (isChapter3) return <Compass className="w-4 h-4 text-turquoise-dark" />;
    if (isChapter2) return <Sparkles className="w-4 h-4 text-gold" />;
    return <span className="text-sm">🌸</span>;
  };

  return (
    <motion.section
      id={chapter.id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative max-w-2xl mx-auto py-12 sm:py-16 px-6 sm:px-10 my-10 rounded-3xl transition-all duration-700 ${
        isChapter4
          ? 'bg-gradient-to-b from-[#FFF5F8]/95 via-[#FFF9F3]/95 to-[#FFF2E8]/95 border-2 border-gold/40 shadow-2xl shadow-rose/15'
          : isChapter3
          ? 'bg-gradient-to-b from-white/70 via-[#FFF8F0]/80 to-[#F2FBF9]/70 border border-gold/30 shadow-md'
          : isChapter2
          ? 'bg-white/60 backdrop-blur-sm border border-gold/25 shadow-sm'
          : 'bg-white/50 backdrop-blur-sm border border-gold/30 shadow-sm'
      }`}
    >
      {/* Chapter Number & Decorative Header */}
      <div className="flex flex-col items-center text-center space-y-2.5 mb-8">
        <div className="flex items-center space-x-3 text-gold">
          <span className="w-8 h-[1px] bg-gold/40" />
          <div className="flex items-center space-x-1.5 font-cormorant text-xs tracking-[0.25em] uppercase text-gold font-semibold">
            {getBadgeIcon()}
            <span>Bölüm {chapter.number}</span>
          </div>
          <span className="w-8 h-[1px] bg-gold/40" />
        </div>

        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight ${
            isChapter4
              ? 'font-playfair text-botanical'
              : 'font-cormorant text-botanical'
          }`}
        >
          {chapter.title}
        </h3>

        {chapter.subtitle && (
          <p className="font-allura text-xl sm:text-2xl text-rose font-normal">
            {chapter.subtitle}
          </p>
        )}
      </div>

      {/* =========================================================================
          CHAPTER 04: ILAYDA'S CINEMATIC PORTRAIT REVEAL & ROMANTIC ODYSSEY
         ========================================================================= */}
      {isChapter4 && (
        <div className="space-y-8 my-6">
          {/* Cinematic Photograph Reveal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1.0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-[460px] w-full p-2.5 sm:p-3 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold/40 shadow-2xl shadow-rose/20 overflow-hidden"
          >
            {/* Soft Ambient Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl bg-rose/25 pointer-events-none -z-10" />

            {/* Subtle Golden Shimmer Light Sweep Effect */}
            <motion.div
              initial={{ x: '-150%' }}
              whileInView={{ x: '150%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-20"
            />

            {/* Elegant Corner Filigree Accents */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/60 rounded-tl-sm pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/60 rounded-tr-sm pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/60 rounded-bl-sm pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/60 rounded-br-sm pointer-events-none z-20" />

            {/* Ilayda's Photograph */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-inner border border-gold/25 aspect-[2/3] max-h-[580px]">
              <picture className="w-full h-full block">
                <source type="image/webp" srcSet="/assets/ilayda.webp" />
                <img
                  src={imageError ? "/assets/ilayda.jpg" : "/assets/ilayda.jpeg"}
                  onError={() => {
                    if (!imageError) setImageError(true);
                  }}
                  alt="Ilayda portresi"
                  width={460}
                  height={690}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
                />
              </picture>
              {/* Gentle Editorial Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-botanical/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Sub-caption below photograph */}
            <div className="text-center pt-3 pb-1">
              <span className="font-allura text-2xl sm:text-3xl text-botanical/90 block">
                Ilayda... Kalbimin En Güzel Hikâyesi
              </span>
              <span className="text-[11px] font-cormorant tracking-[0.25em] uppercase text-gold font-semibold">
                ÖMRÜMÜN EN GÜZEL ANLAMI
              </span>
            </div>
          </motion.div>

          {/* Opening Paragraph after photograph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light"
          >
            <p className="text-justify sm:text-left">{chapter.paragraphs[0]}</p>
          </motion.div>

          {/* HIGHLIGHT QUOTE (The Most Important Sentence — Two-Stage Reveal) */}
          {chapter.highlightQuote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="my-8 sm:my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/95 via-[#FFF9F3] to-[#FDF1F5] border-l-4 border-gold shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                {/* Stage 1 */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="font-playfair text-lg sm:text-xl text-warmText leading-relaxed"
                >
                  “{chapter.highlightQuote.part1}”
                </motion.p>

                {/* Stage 2 (Gold-accented prominent statement after pause) */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                  className="font-cormorant italic text-xl sm:text-2xl text-botanical font-semibold leading-relaxed pt-2 border-t border-gold/30"
                >
                  <span className="text-gold pr-1.5">✨</span>
                  {chapter.highlightQuote.part2}
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* Remaining Paragraphs of Chapter 4 */}
          <div className="space-y-6 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
            {chapter.paragraphs.slice(1).map((paragraph, idx) => (
              <motion.p
                key={idx + 1}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="text-justify sm:text-left"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          CHAPTER 03: TRAVEL (JAPAN & BALI) → KITCHEN → FAMILY & BLESSINGS
         ========================================================================= */}
      {isChapter3 && (
        <div className="space-y-8 my-8">
          {/* 1. Travel & Japan Section */}
          <div className="space-y-4 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
            <p className="text-justify sm:text-left">{chapter.paragraphs[0]}</p>
          </div>

          {/* Japan Dream Vignette Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden p-6 text-center border border-gold/30 shadow-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, #FFF5ED 0%, #FAEDF1 60%, #F5E0E8 100%)',
            }}
          >
            <div className="absolute top-2 right-3 text-xl opacity-30">🌸</div>
            <span className="text-[11px] font-cormorant tracking-[0.25em] uppercase text-gold font-semibold block mb-1">
              JAPONYA HAYALİ
            </span>
            <p className="font-playfair text-lg sm:text-xl text-botanical italic">
              “Belki bir gün, Japonya'nın kiraz çiçekleri altında...”
            </p>
            <p className="font-lora text-xs sm:text-sm text-warmText/75 mt-1 font-light">
              Sabahın ilk ışıkları, dökülen sakura yaprakları ve dingin bir huzur...
            </p>
          </motion.div>

          {/* 2. Bali Section */}
          <div className="space-y-4 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
            <p className="text-justify sm:text-left">{chapter.paragraphs[1]}</p>
          </div>

          {/* Bali Dream Vignette Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden p-6 text-center border border-turquoise/40 shadow-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 60%, #FFF8F0 0%, #E8F7F5 45%, #D4F2ED 100%)',
            }}
          >
            <div className="flex justify-center mb-1 text-turquoise-dark">
              <Palmtree className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-cormorant tracking-[0.25em] uppercase text-turquoise-dark font-semibold block mb-1">
              BALİ RÜYASI
            </span>
            <p className="font-playfair text-lg sm:text-xl text-botanical italic">
              “Ve belki başka bir gün, Bali'nin masmavi sularına karşı...”
            </p>
            <p className="font-lora text-xs sm:text-sm text-warmText/75 mt-1 font-light">
              Turkuaz dalgalar, altın gün batımı ve hafif bir okyanus esintisi...
            </p>
          </motion.div>

          {/* =========================================================================
              3. NEW SUBSECTION: "Bir de mutfağınız var..."
                 Immediately after travel, immediately before family gathering
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF9F2] to-[#FAF3E8] border border-gold/40 shadow-lg shadow-gold/10 overflow-hidden"
          >
            {/* Soft Ambient Warm Light Effect */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl bg-gold/20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full blur-3xl bg-rose/15 pointer-events-none" />

            {/* Delicate Champagne-Gold Ornamental Divider (Top) */}
            <div className="flex items-center justify-center space-x-3 mb-6 text-gold/70">
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
              <div className="flex items-center space-x-1.5 text-xs font-cormorant tracking-[0.25em] uppercase text-gold font-semibold">
                <UtensilsCrossed className="w-3.5 h-3.5 text-gold" />
                <span>BİR ANNE SOFRASI</span>
              </div>
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            {/* Subsection Heading */}
            <div className="text-center mb-6">
              <h4 className="font-playfair text-2xl sm:text-3xl text-botanical font-normal">
                Bir de mutfağınız var...
              </h4>
            </div>

            {/* Delicate vector line art: Warm family dining table */}
            <div className="flex justify-center my-4 opacity-40 text-gold pointer-events-none">
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Minimalist candlelight & dining plate motif */}
                <ellipse cx="30" cy="14" rx="16" ry="4" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="30" cy="14" rx="10" ry="2.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M30 6V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="30" cy="4" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-justify sm:text-left"
              >
                {chapter.paragraphs[2]}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-justify sm:text-left"
              >
                {chapter.paragraphs[3]}
              </motion.p>

              {/* Final paragraph with subtle emphasis on "Orada sevgi vardır." */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="pt-2"
              >
                <p className="text-justify sm:text-left">
                  Belki de bu yüzden hiçbir restoranın yemeği, bir annenin ellerinden çıkan yemeğin tadına tam olarak ulaşamaz. Çünkü o sofrada yalnızca yemek yoktur.{' '}
                  <span className="italic font-cormorant font-semibold text-botanical text-xl sm:text-2xl pl-1 inline-block">
                    <span className="text-gold pr-1">✨</span>
                    Orada sevgi vardır.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Delicate Champagne-Gold Ornamental Divider (Bottom) */}
            <div className="flex items-center justify-center space-x-3 mt-8 text-gold/50">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-xs">❦</span>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </motion.div>

          {/* =========================================================================
              4. Family Gathering & Birthday Blessings (After Kitchen)
             ========================================================================= */}
          <div className="space-y-6 pt-2 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8 }}
              className="text-justify sm:text-left"
            >
              {chapter.paragraphs[5]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-justify sm:text-left"
            >
              {chapter.paragraphs[6]}
            </motion.p>
          </div>
        </div>
      )}

      {/* =========================================================================
          STANDARD PARAGRAPHS FOR CHAPTERS 1 AND 2
         ========================================================================= */}
      {!isChapter3 && !isChapter4 && (
        <div className="space-y-6 text-warmText font-lora text-base sm:text-lg leading-[1.85] font-light">
          {chapter.paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="text-justify sm:text-left"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      )}

      {/* Subtle Chapter Footer Floral Divider */}
      <div className="flex items-center justify-center space-x-3 mt-10 text-gold/50">
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
        <span className="text-xs">❦</span>
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
      </div>
    </motion.section>
  );
};
