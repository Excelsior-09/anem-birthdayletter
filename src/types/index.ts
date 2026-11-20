export type SceneId =
  | 'opening'         // Scene 1: The First Moment
  | 'portrait'        // Scene 2: Her Portrait
  | 'envelope'        // Scene 3: The Digital Envelope
  | 'letter'          // Scene 4: The 4 Complete Chapters
  | 'finale';         // Scene 5: The Final Birthday Moment & Closing

export interface LetterChapterData {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  highlightQuote?: {
    part1: string;
    part2: string;
  };
  decorIcon?: 'sakura' | 'tropical' | 'heart' | 'star' | 'sun';
}

export interface AudioConfig {
  src: string;
  defaultVolume: number;
  startTime: number;
  endTime?: number;
  title: string;
  artist: string;
}
