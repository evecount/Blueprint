'use client';
import type { Resource } from '@/lib/types';

export const p1English: Resource = {
  id: 'p1-english',
  name: 'Primary 1 English',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Which word rhymes with "cat"?',
      answers: ['Dog', 'Sun', 'Hat', 'Pin'],
      correctAnswerIndex: 2,
      rationale:
        'Words that rhyme have the same ending sound. "Cat" and "hat" both end with the "-at" sound.',
    },
    {
      question: 'What is the plural of "apple"?',
      answers: ['Apples', 'Apple', 'Appless', 'An apple'],
      correctAnswerIndex: 0,
      rationale: 'To make most nouns plural, we add an "s" to the end. One apple, two apples.',
    },
    {
      question: 'Choose the correct sentence: The dog ___ running.',
      answers: ['are', 'is', 'am', 'be'],
      correctAnswerIndex: 1,
      rationale: 'Since "dog" is a singular noun, we use the singular verb "is".',
    },
    {
      question: 'Which of these is a verb (action word)?',
      answers: ['Happy', 'Table', 'Jump', 'Green'],
      correctAnswerIndex: 2,
      rationale:
        '"Jump" is an action word, or a verb. "Happy" and "green" are adjectives, and "table" is a noun.',
    },
    {
      question: 'What is the opposite of "hot"?',
      answers: ['Warm', 'Cold', 'Spicy', 'Sunny'],
      correctAnswerIndex: 1,
      rationale: 'The opposite of "hot" is "cold". They are contrasting temperatures.',
    },
    {
      question: 'Which punctuation mark do you use at the end of a question?',
      answers: ['. (Period)', ', (Comma)', '! (Exclamation Mark)', '? (Question Mark)'],
      correctAnswerIndex: 3,
      rationale: 'A question mark (?) is used to indicate a direct question.',
    },
  ],
};
