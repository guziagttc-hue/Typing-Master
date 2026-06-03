
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  PRACTICE = 'PRACTICE',
  RESULT = 'RESULT',
  SETTINGS = 'SETTINGS',
  IM_SOFTWORKS = 'IM_SOFTWORKS',
  CONTACT = 'CONTACT',
  SPONSORED_LINK = 'SPONSORED_LINK'
}

export enum Language {
  ENGLISH = 'English',
  BENGALI = 'Bengali',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German',
  ITALIAN = 'Italian',
  PORTUGUESE = 'Portuguese',
  HINDI = 'Hindi',
  RUSSIAN = 'Russian',
  JAPANESE = 'Japanese'
}

export enum TypingMode {
  TIME = 'TIME',
  WORDS = 'WORDS'
}

export enum PracticeCategory {
  STORIES = 'Stories',
  LETTERS = 'Letters',
  NUMBERS = 'Numbers'
}

export interface SessionStats {
  id: string;
  wpm: number;
  accuracy: number;
  date: string;
  duration: number; // in seconds
  mistakes: Record<string, number>;
}

export interface UserProfile {
  name: string;
  dailyGoalMinutes: number;
  targetWpm: number;
  streak: number;
  lastActive: string;
  history: SessionStats[];
  bestWpm: number;
  theme: 'light' | 'dark';
  correctColor: string;
  incorrectColor: string;
}
