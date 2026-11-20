import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SceneId } from './types';
import { SakuraParticles } from './components/SakuraParticles';
import { CustomCursor } from './components/CustomCursor';
import { AudioPlayer, AudioPlayerRef } from './components/AudioPlayer';
import { ReadingProgress } from './components/ReadingProgress';
import { OpeningScene } from './components/OpeningScene';
import { PortraitScene } from './components/PortraitScene';
import { EnvelopeReveal } from './components/EnvelopeReveal';
import { LetterExperience } from './components/LetterExperience';
import { FinalBirthdayScene } from './components/FinalBirthdayScene';

export const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<SceneId>('opening');
  const audioPlayerRef = useRef<AudioPlayerRef | null>(null);

  // Scroll to top whenever scene changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScene]);

  const handleStart = async () => {
    // 1. Play audio immediately on user interaction
    if (audioPlayerRef.current) {
      await audioPlayerRef.current.startAudio();
    }
    // 2. Transition to Her Portrait
    setCurrentScene('portrait');
  };

  const handleOpenEnvelope = () => {
    setCurrentScene('envelope');
  };

  const handleLetterRevealed = () => {
    setCurrentScene('letter');
  };

  const handleContinueToFinale = () => {
    setCurrentScene('finale');
  };

  const handleReReadLetter = () => {
    setCurrentScene('letter');
  };

  const handleReplayMusic = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.restartAudio();
    }
  };

  const handleRestart = () => {
    setCurrentScene('opening');
  };

  return (
    <div className="relative min-h-screen w-full bg-ivory text-warmText font-lora selection:bg-sakura selection:text-botanical overflow-x-hidden">
      {/* Gentle Floating Sakura Petals Engine */}
      <SakuraParticles
        density={currentScene === 'opening' || currentScene === 'finale' ? 45 : 30}
        speed={0.9}
      />

      {/* Subtle Desktop Interactive Sparkle Cursor */}
      <CustomCursor />

      {/* Discreet Reading Progress & Story Navigation */}
      <ReadingProgress
        currentScene={currentScene}
        onSelectScene={setCurrentScene}
        onRestart={handleRestart}
      />

      {/* Main Cinematic Scene Presentation */}
      <main className="relative z-20 min-h-screen w-full">
        <AnimatePresence mode="wait">
          {currentScene === 'opening' && (
            <OpeningScene key="opening" onStart={handleStart} />
          )}

          {currentScene === 'portrait' && (
            <PortraitScene key="portrait" onOpenEnvelope={handleOpenEnvelope} />
          )}

          {currentScene === 'envelope' && (
            <EnvelopeReveal key="envelope" onLetterRevealed={handleLetterRevealed} />
          )}

          {currentScene === 'letter' && (
            <LetterExperience
              key="letter"
              onContinueToFinale={handleContinueToFinale}
            />
          )}

          {currentScene === 'finale' && (
            <FinalBirthdayScene
              key="finale"
              onReReadLetter={handleReReadLetter}
              onReplayMusic={handleReplayMusic}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Floating Central Audio Controller */}
      <AudioPlayer ref={audioPlayerRef} />
    </div>
  );
};

export default App;
