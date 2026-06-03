
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  PRACTICE = 'PRACTICE',
  RESULT = 'RESULT',
  SETTINGS = 'SETTINGS',
  IM_SOFTWORKS = 'IM_SOFTWORKS',
  CONTACT = 'CONTACT'
}

export enum TypingMode {
  TIME = 'TIME',
  WORDS = 'WORDS'
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
