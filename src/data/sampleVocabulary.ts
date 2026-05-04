import type { VocabularyWord } from '../types/vocabulary';
import { italianWords } from './italian';
import { spanishWords } from './spanish';
import { frenchWords } from './french';
import { germanWords } from './german';
import { portugueseWords } from './portuguese';

export const sampleVocabulary: VocabularyWord[] = [
  ...italianWords,
  ...spanishWords,
  ...frenchWords,
  ...germanWords,
  ...portugueseWords,
];
