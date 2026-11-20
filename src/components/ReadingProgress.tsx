import React, { useState } from 'react';
import { SceneId } from '../types';
import { SCENES } from '../data/scenes';
import { LETTER_CHAPTERS } from '../data/letter';
import { RotateCcw, ChevronDown } from 'lucide-react';

interface ReadingProgressProps {
  currentScene: SceneId;
  onSelectScene: (id: SceneId) => void;
  onRestart: () => void;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({
  currentScene,
  onSelectScene,
  onRestart,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // If still on the very first opening moment, keep it purely clean
  if (currentScene === 'opening') return null;

  const currentIndex = SCENES.findIndex(s => s.id === currentScene);
  const activeScene = SCENES[currentIndex] || SCENES[0];
  const progressPercent = ((currentIndex + 1) / SCENES.length) * 100;

  const scrollToChapter = (chapterId: string) => {
    if (currentScene !== 'letter') {
      onSelectScene('letter');
      setTimeout(() => {
        const el = document.getElementById(chapterId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      const el = document.getElementById(chapterId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      {/* Top subtle golden progress line */}
      <div className="w-full h-1 bg-gold/15">
        <div
          className="h-full bg-gradient-to-r from-sakura via-gold to-botanical transition-all duration-700 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating discreet header bar */}
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between text-xs relative">
        {/* Story progress label with optional discreet scene & chapter selector */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="pointer-events-auto flex items-center space-x-2 bg-ivory/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 shadow-sm text-warmText/80 hover:border-gold transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-sakura animate-pulse" />
            <span className="font-cormorant font-semibold tracking-wider text-[13px] text-botanical">
              {activeScene.title}
            </span>
            <span className="text-[11px] text-warmText/50">
              {currentIndex + 1} / {SCENES.length}
            </span>
            <ChevronDown className="w-3 h-3 text-warmText/50 ml-0.5" />
          </button>

          {/* Discreet drop menu */}
          {showDropdown && (
            <div className="pointer-events-auto absolute top-full left-0 mt-2 w-64 bg-ivory/98 backdrop-blur-lg border border-gold/40 rounded-2xl shadow-xl p-2.5 z-50 flex flex-col space-y-1.5 max-h-[80vh] overflow-y-auto">
              <span className="text-[10px] uppercase tracking-widest text-gold font-cormorant font-bold px-2 pt-1">
                Ana Sahneler
              </span>
              {SCENES.map(scene => (
                <button
                  key={scene.id}
                  onClick={() => {
                    onSelectScene(scene.id);
                    setShowDropdown(false);
                  }}
                  className={`text-left px-3 py-1.5 rounded-xl text-xs transition-colors font-lora flex items-center justify-between ${
                    scene.id === currentScene
                      ? 'bg-gold/20 text-botanical font-medium'
                      : 'text-warmText/80 hover:bg-gold/10 hover:text-botanical'
                  }`}
                >
                  <span>{scene.title}</span>
                  <span className="text-[10px] text-warmText/40">{scene.index}</span>
                </button>
              ))}

              <div className="w-full h-[1px] bg-gold/20 my-1" />

              <span className="text-[10px] uppercase tracking-widest text-gold font-cormorant font-bold px-2 pt-0.5">
                Mektup Bölümleri (4 Bölüm)
              </span>
              {LETTER_CHAPTERS.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className="text-left px-3 py-1.5 rounded-xl text-xs text-warmText/80 hover:bg-rose/15 hover:text-botanical transition-colors font-lora truncate"
                >
                  <span className="text-gold font-semibold mr-1.5">Bölüm {ch.number}:</span>
                  <span>{ch.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Discreet restart / beginning action */}
        <button
          onClick={onRestart}
          className="pointer-events-auto group flex items-center space-x-1.5 bg-ivory/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 shadow-sm text-warmText/70 hover:text-botanical hover:border-gold/60 transition-all text-xs"
          title="Başa Dön"
        >
          <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform duration-300" />
          <span className="font-lora text-[11px] hidden sm:inline">Baştan Başla</span>
        </button>
      </div>
    </div>
  );
};
