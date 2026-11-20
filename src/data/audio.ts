import { AudioConfig } from '../types';

/**
 * Configurable Audio Settings for "When God Made You My Mother"
 * 
 * Adjust AUDIO_START_TIME and AUDIO_END_TIME to tune the playback range.
 * If AUDIO_END_TIME is undefined or 0, the audio plays until the end of the track.
 */
export const AUDIO_START_TIME = 0; // In seconds (configurable excerpt start)
export const AUDIO_END_TIME: number | undefined = undefined; // In seconds (undefined plays through track)

export const DEFAULT_AUDIO_CONFIG: AudioConfig = {
  src: '/assets/birthday-song.mp3',
  defaultVolume: 0.75,
  startTime: AUDIO_START_TIME,
  endTime: AUDIO_END_TIME,
  title: 'When God Made You My Mother',
  artist: 'Riley Roth',
};
