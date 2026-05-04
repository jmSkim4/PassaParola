export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type Language = 'italian' | 'spanish' | 'french' | 'german' | 'portuguese';

export type WordStatus = 'new' | 'learning' | 'known' | 'mastered';

export interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  language: Language;
  cefrLevel: CEFRLevel;
  topic: string;
  exampleSentence: string;
  notes?: string;
}

export interface UserWordProgress {
  wordId: string;
  status: WordStatus;
  timesSeen: number;
  timesCorrect: number;
  timesIncorrect: number;
  lastSeen: string | null;
  nextReview: string | null;
}

export interface UserProfile {
  language: Language;
  cefrLevel: CEFRLevel;
}

export interface DailyLearningSession {
  date: string;
  wordIds: string[];
}

export interface PracticeResult {
  wordId: string;
  correct: boolean;
  timestamp: string;
}
