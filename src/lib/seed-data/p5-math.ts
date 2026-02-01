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
    {
        question: 'What is the volume of a cube with a side length of 4 cm?',
        answers: ['12 cm³', '16 cm³', '32 cm³', '64 cm³'],
        correctAnswerIndex: 3,
        rationale: 'The volume of a cube is calculated by cubing its side length (side x side x side). So, 4 x 4 x 4 = 64 cm³.'
    },
    {
        question: 'Simplify the ratio 15:25.',
        answers: ['1:2', '3:5', '5:3', '15:25'],
        correctAnswerIndex: 1,
        rationale: 'To simplify a ratio, you divide both numbers by their greatest common divisor. The greatest common divisor of 15 and 25 is 5. So, 15÷5 : 25÷5 = 3:5.'
    },
    {
        question: 'A bag contains 5 red balls and 3 blue balls. What is the ratio of blue balls to the total number of balls?',
        answers: ['3:5', '5:8', '3:8', '8:3'],
        correctAnswerIndex: 2,
        rationale: 'There are 3 blue balls. The total number of balls is 5 + 3 = 8. So the ratio of blue balls to total balls is 3:8.'
    },
    {
        question: 'What is 1.25 as a fraction in its simplest form?',
        answers: ['1 1/4', '1 2/5', '125/100', '5/4'],
        correctAnswerIndex: 0,
        rationale: '1.25 is one and twenty-five hundredths (1 and 25/100). 25/100 can be simplified to 1/4. So, 1.25 is equal to 1 1/4. 5/4 is also correct, but 1 1/4 is the mixed number form.'
    },
    {
        question: 'If a T-shirt costs $20 and is on a 10% discount, what is the discount amount?',
        answers: ['$1', '$2', '$5', '$10'],
        correctAnswerIndex: 1,
        rationale: 'To find 10% of $20, you can multiply 20 by 0.10. 20 * 0.10 = $2. The discount is $2.'
    },
    {
        question: 'What is the next number in the sequence: 1, 4, 9, 16, ___?',
        answers: ['20', '25', '30', '36'],
        correctAnswerIndex: 1,
        rationale: 'This sequence consists of square numbers: 1²=1, 2²=4, 3²=9, 4²=16. The next number is 5², which is 25.'
    },
    {
        question: 'Find the area of a triangle with a base of 10 cm and a height of 6 cm.',
        answers: ['16 cm²', '30 cm²', '60 cm²', '15 cm²'],
        correctAnswerIndex: 1,
        rationale: 'The area of a triangle is calculated as (1/2) * base * height. So, (1/2) * 10 cm * 6 cm = 30 cm².'
    },
    {
        question: 'How many millilitres (ml) are in 2.5 litres (L)?',
        answers: ['25 ml', '250 ml', '2500 ml', '25000 ml'],
        correctAnswerIndex: 2,
        rationale: 'There are 1000 millilitres in 1 litre. To convert litres to millilitres, you multiply by 1000. So, 2.5 * 1000 = 2500 ml.'
    },
    {
        question: 'A bus left at 9:45 a.m. and arrived at its destination at 11:15 a.m. How long was the journey?',
        answers: ['1 hour 15 minutes', '1 hour 30 minutes', '1 hour 45 minutes', '2 hours'],
        correctAnswerIndex: 1,
        rationale: 'From 9:45 a.m. to 10:45 a.m. is 1 hour. From 10:45 a.m. to 11:15 a.m. is 30 minutes. Total journey time is 1 hour and 30 minutes.'
    },
    {
        question: 'Express 7/2 as a mixed number.',
        answers: ['2 1/2', '3 1/2', '7.2', '2 3/2'],
        correctAnswerIndex: 1,
        rationale: 'To convert an improper fraction to a mixed number, divide the numerator by the denominator. 7 ÷ 2 = 3 with a remainder of 1. So, the mixed number is 3 1/2.'
    },
    {
        question: 'The sum of angles in a triangle is always:',
        answers: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
        correctAnswerIndex: 1,
        rationale: 'A fundamental property of all triangles is that the sum of their three interior angles is always 180 degrees.'
    },
    {
        question: 'John has $50. He spends $12.50 on a book and $5.25 on lunch. How much money does he have left?',
        answers: ['$32.25', '$37.50', '$42.75', '$32.75'],
        correctAnswerIndex: 0,
        rationale: 'First, find the total amount spent: $12.50 + $5.25 = $17.75. Then, subtract this from the initial amount: $50 - $17.75 = $32.25.'
    },
    {
        question: 'What is 5.6 x 100?',
        answers: ['56', '560', '0.056', '5600'],
        correctAnswerIndex: 1,
        rationale: 'When multiplying a decimal by 100, you move the decimal point two places to the right. So, 5.6 becomes 560.'
    },
    {
        question: 'The angles in a quadrilateral add up to:',
        answers: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
        correctAnswerIndex: 3,
        rationale: 'A quadrilateral is a four-sided polygon. The sum of the interior angles of any simple quadrilateral is 360 degrees.'
    },
    {
        question: 'If 4 identical pens cost $6, how much would 10 pens cost?',
        answers: ['$10', '$12', '$15', '$24'],
        correctAnswerIndex: 2,
        rationale: 'First, find the cost of one pen: $6 ÷ 4 = $1.50. Then, multiply the cost of one pen by 10: $1.50 x 10 = $15.'
    },
    {
        question: 'What is 40% of 200?',
        answers: ['40', '60', '80', '100'],
        correctAnswerIndex: 2,
        rationale: '40% can be written as 0.40. To find the percentage, multiply 200 by 0.40. 200 * 0.40 = 80.'
    },
    {
        question: 'A right-angled triangle has one angle of 90 degrees and another of 30 degrees. What is the third angle?',
        answers: ['30 degrees', '60 degrees', '90 degrees', '120 degrees'],
        correctAnswerIndex: 1,
        rationale: 'The sum of angles in a triangle is 180 degrees. So, the third angle is 180 - 90 - 30 = 60 degrees.'
    },
    {
        question: 'What is 3/4 + 1/8?',
        answers: ['4/12', '1/2', '7/8', '1'],
        correctAnswerIndex: 2,
        rationale: 'To add fractions, you need a common denominator. The common denominator for 4 and 8 is 8. Convert 3/4 to 6/8. Then, 6/8 + 1/8 = 7/8.'
    },
    {
        question: 'A cuboid has a length of 5m, a width of 2m, and a height of 3m. What is its volume?',
        answers: ['10 m³', '15 m³', '30 m³', '25 m³'],
        correctAnswerIndex: 2,
        rationale: 'The volume of a cuboid is calculated by multiplying length × width × height. So, 5m × 2m × 3m = 30 m³.'
    }
  ],
};
