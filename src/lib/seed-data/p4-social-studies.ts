'use client';
import type { Resource } from '@/lib/types';

export const p4SocialStudies: Resource = {
  id: 'p4-social-studies',
  name: 'Primary 4 Social Studies',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: "What is the name of Singapore's national flower?",
      answers: ['Rose', 'Hibiscus', 'Vanda Miss Joaquim', 'Tulip'],
      correctAnswerIndex: 2,
      rationale:
        'The Vanda Miss Joaquim, a hybrid orchid, was named Singapore\'s national flower in 1981 for its vibrancy and hardiness.',
    },
    {
      question: 'Who was the first Prime Minister of Singapore?',
      answers: ['Goh Chok Tong', 'Lee Kuan Yew', 'Yusof Ishak', 'Lee Hsien Loong'],
      correctAnswerIndex: 1,
      rationale:
        'Lee Kuan Yew was a key figure in Singapore\'s independence and served as its first Prime Minister from 1959 to 1990.',
    },
    {
      question: 'The Merlion is a mythical creature with the head of a lion and the body of a...',
      answers: ['Fish', 'Dragon', 'Bird', 'Horse'],
      correctAnswerIndex: 0,
      rationale:
        'The Merlion is the national symbol of Singapore, representing its origins as a fishing village (the fish body) and its original name, Singapura or "lion city" (the lion head).',
    },
    {
      question: 'Which of these is NOT one of Singapore\'s four official languages?',
      answers: ['English', 'Japanese', 'Malay', 'Tamil'],
      correctAnswerIndex: 1,
      rationale:
        'The four official languages of Singapore are English, Malay, Mandarin Chinese, and Tamil. Japanese is not an official language.',
    },
    {
      question: 'What is the main purpose of the "Total Defence" concept in Singapore?',
      answers: [
        'To encourage tourism',
        'To ensure everyone plays a part in defending the nation',
        'To promote a single religion',
        'To build more shopping malls',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Total Defence is Singapore\'s national defence concept, which involves all citizens in a comprehensive, all-round defence of the country.',
    },
    {
      question: 'What body of water surrounds the island of Singapore?',
      answers: ['Pacific Ocean', 'Indian Ocean', 'Singapore Strait', 'South China Sea'],
      correctAnswerIndex: 2,
      rationale:
        'Singapore is an island city-state located at the southern tip of the Malay Peninsula, bordered by the Singapore Strait.',
    },
  ],
};
