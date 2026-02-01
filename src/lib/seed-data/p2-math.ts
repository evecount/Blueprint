'use client';
import type { Resource } from '@/lib/types';

export const p2Math: Resource = {
  id: 'p2-math',
  name: 'Primary 2 Maths',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is 25 + 15?',
      answers: ['30', '35', '40', '45'],
      correctAnswerIndex: 2,
      rationale:
        'To add 25 and 15, you can add the tens (20 + 10 = 30) and the ones (5 + 5 = 10). Then, add the results: 30 + 10 = 40.',
    },
    {
      question: 'If you have 3 bags with 5 sweets in each, how many sweets do you have in total?',
      answers: ['8', '15', '12', '20'],
      correctAnswerIndex: 1,
      rationale:
        'This is a multiplication problem. 3 bags multiplied by 5 sweets per bag equals 15 sweets (3 x 5 = 15).',
    },
    {
      question: 'What is 50 - 12?',
      answers: ['48', '40', '38', '32'],
      correctAnswerIndex: 2,
      rationale: 'You can subtract 10 from 50 to get 40, and then subtract the remaining 2 to get 38.',
    },
    {
      question: 'Which shape has 3 sides?',
      answers: ['Square', 'Circle', 'Triangle', 'Rectangle'],
      correctAnswerIndex: 2,
      rationale: 'A triangle is a polygon with three edges and three vertices.',
    },
    {
      question: 'How many cents are there in one dollar?',
      answers: ['10', '50', '100', '1000'],
      correctAnswerIndex: 2,
      rationale: 'There are 100 cents in one Singapore dollar.',
    },
    {
      question: 'What is the next even number after 18?',
      answers: ['19', '20', '21', '22'],
      correctAnswerIndex: 1,
      rationale: 'Even numbers are numbers that can be divided by 2. The next even number after 18 is 20.',
    },
  ],
};
