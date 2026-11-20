import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUDIO_START_TIME, AUDIO_END_TIME } from '../data/audio';

export interface AudioPlayerRef {
  startAudio: () => Promise<void>;
  restartAudio: () => void;
  pauseAudio: () => void;
  playAudio: () => void;
  isPlaying: boolean;
}

interface AudioPlayerProps {
  className?: string;
}

export const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(({ className = '' }, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Expose imperative methods to parent (e.g., scene buttons)
  useImperativeHandle(ref, () => ({
    startAudio: async () => {
      if (!audioRef.current) return;
      try {
        if (audioRef.current.preload !== 'auto') {
          audioRef.current.preload = 'auto';
        }
        if (AUDIO_START_TIME > 0 && audioRef.current.currentTime < AUDIO_START_TIME) {
          audioRef.current.currentTime = AUDIO_START_TIME;
        }
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay prevented or audio unavailable:', err);
      }
    },
    restartAudio: () => {
      if (!audioRef.current) return;
      audioRef.current.currentTime = AUDIO_START_TIME;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    },
    pauseAudio: () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      setIsPlaying(false);
    },
    playAudio: () => {
      if (!audioRef.current) return;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    },
    isPlaying,
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      // Check excerpt end boundary if set
      if (AUDIO_END_TIME && audio.currentTime >= AUDIO_END_TIME) {
        audio.pause();
        audio.currentTime = AUDIO_START_TIME;
        setIsPlaying(false);
      }
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      if (AUDIO_START_TIME > 0 && audio.currentTime < AUDIO_START_TIME) {
        audio.currentTime = AUDIO_START_TIME;
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      console.warn('Audio could not be loaded from /assets/birthday-song.mp3');
      setHasError(true);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.warn('Audio play error:', e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // If audio fails completely, keep UI graceful and quiet
  if (hasError) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/birthday-song.mp3"
        preload="none"
        loop={!AUDIO_END_TIME}
      />

      <div className={`fixed bottom-5 right-5 z-40 ${className}`}>
        <motion.div
          layout
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-ivory/95 backdrop-blur-md border border-gold/40 rounded-2xl shadow-xl shadow-gold/10 p-2.5 sm:p-3 text-warmText transition-all duration-300"
        >
          {/* Header row: Mini player */}
          <div className="flex items-center space-x-3">
            {/* Visualizer & Play Icon */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold to-gold-light text-ivory flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
              title={isPlaying ? 'Müziği Duraklat' : 'Müziği Çal'}
              aria-label={isPlaying ? 'Müziği Duraklat' : 'Müziği Çal'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-ivory text-ivory" />
              ) : (
                <Play className="w-4 h-4 fill-ivory text-ivory ml-0.5" />
              )}
            </button>

            {/* Title & Visualizer */}
            <div className="flex flex-col cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-cormorant font-semibold tracking-wider text-botanical uppercase">
                  Doğum Günü Melodisi
                </span>
                {/* Soundwave equalizer */}
                <div className="flex items-end space-x-0.5 h-3">
                  {[40, 90, 60, 100, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-gold rounded-full"
                      animate={{
                        height: isPlaying ? [`${height * 0.2}%`, `${height}%`, `${height * 0.4}%`] : '20%',
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8 + i * 0.15,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-lora text-warmText/75 truncate max-w-[150px] sm:max-w-[200px]">
                When God Made You My Mother
              </span>
            </div>

            {/* Expand / Details toggle */}
            <div className="flex items-center space-x-1 pl-1">
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full hover:bg-gold/15 text-warmText/80 transition-colors"
                title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                aria-label={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-warmText/60" />
                ) : (
                  <Volume2 className="w-4 h-4 text-botanical" />
                )}
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-full hover:bg-gold/15 text-warmText/80 transition-colors"
                title={isExpanded ? 'Gizle' : 'Detaylı Kontroller'}
                aria-label={isExpanded ? 'Gizle' : 'Detaylı Kontroller'}
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-warmText/70" />
                ) : (
                  <ChevronUp className="w-4 h-4 text-warmText/70" />
                )}
              </button>
            </div>
          </div>

          {/* Expanded Panel: Scrubber, duration, volume slider */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="pt-3 border-t border-gold/20 mt-2.5 flex flex-col space-y-2.5"
              >
                {/* Progress bar */}
                <div className="space-y-1">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-gold/25 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-[10px] text-warmText/70 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Volume slider */}
                <div className="flex items-center space-x-2 pt-1">
                  <Volume2 className="w-3.5 h-3.5 text-warmText/60" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-gold/20 rounded appearance-none cursor-pointer accent-botanical"
                  />
                  <span className="text-[10px] text-warmText/70 font-mono w-7 text-right">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
});
