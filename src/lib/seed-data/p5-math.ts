'use client';
import type { Resource } from '@/lib/types';

export const p5Math: Resource = {
  id: 'p5-math',
  name: 'Primary 5 Maths',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is 3/5 expressed as a decimal?',
      answers: ['0.35', '0.6', '0.53', '3.5'],
      correctAnswerIndex: 1,
      rationale:
        'To convert a fraction to a decimal, you divide the numerator by the denominator. 3 ÷ 5 = 0.6.',
    },
    {
      question: 'A rectangle has a length of 8cm and a width of 5cm. What is its area?',
      answers: ['13 cm²', '26 cm²', '40 cm²', '32 cm²'],
      correctAnswerIndex: 2,
      rationale:
        'The area of a rectangle is calculated by multiplying its length by its width. 8 cm * 5 cm = 40 cm².',
    },
    {
      question: 'Find the value of 20 - (5 x 2) + 3.',
      answers: ['13', '33', '7', '17'],
      correctAnswerIndex: 0,
      rationale:
        'According to the order of operations (BODMAS/PEMDAS), you must do the multiplication first: 5 x 2 = 10. Then, 20 - 10 = 10. Finally, 10 + 3 = 13.',
    },
    {
      question: 'What is 25% of 80?',
      answers: ['10', '15', '20', '25'],
      correctAnswerIndex: 2,
      rationale: '25% is equivalent to 1/4. So, 1/4 of 80 is 80 ÷ 4 = 20.',
    },
    {
      question: 'An angle that is greater than 90 degrees but less than 180 degrees is called...',
      answers: ['An acute angle', 'An obtuse angle', 'A right angle', 'A reflex angle'],
      correctAnswerIndex: 1,
      rationale:
        'An obtuse angle is defined as an angle with a measure greater than 90° and less than 180°.',
    },
    {
      question:
        'The average of three numbers is 10. If two of the numbers are 8 and 12, what is the third number?',
      answers: ['10', '15', '20', '30'],
      correctAnswerIndex: 0,
      rationale:
        'If the average of three numbers is 10, their total sum is 3 x 10 = 30. The sum of the two given numbers is 8 + 12 = 20. Therefore, the third number is 30 - 20 = 10.',
    },
  ],
};
