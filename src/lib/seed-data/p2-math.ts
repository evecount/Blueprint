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
    {
      question: 'What is 4 multiplied by 6?',
      answers: ['10', '20', '24', '28'],
      correctAnswerIndex: 2,
      rationale: '4 multiplied by 6 means adding 4 six times, or 6 four times. 4 x 6 = 24.',
    },
    {
        question: 'Which number is the biggest: 89, 98, 101, 99?',
        answers: ['89', '98', '101', '99'],
        correctAnswerIndex: 2,
        rationale: '101 is a three-digit number, while the others are two-digit numbers, making it the largest.'
    },
    {
        question: 'Mary has 34 stickers. She gives 12 to her friend. How many stickers does she have left?',
        answers: ['22', '46', '20', '12'],
        correctAnswerIndex: 0,
        rationale: 'This is a subtraction problem. 34 - 12 = 22. She has 22 stickers left.'
    },
    {
        question: 'What time is shown on the clock if the long hand points to 12 and the short hand points to 3?',
        answers: ['12:15', '3:00', '12:03', '3:12'],
        correctAnswerIndex: 1,
        rationale: 'When the long hand (minute hand) points to 12, it is the start of the hour ("o\'clock"). The short hand (hour hand) pointing to 3 indicates the hour is 3.'
    },
    {
        question: 'What is the missing number in the sequence: 5, 10, 15, __, 25?',
        answers: ['16', '18', '20', '22'],
        correctAnswerIndex: 2,
        rationale: 'This sequence is counting up by 5s. The number after 15 is 20.'
    },
    {
        question: 'A pencil costs 50 cents. A ruler costs 30 cents. How much do they cost altogether?',
        answers: ['20 cents', '70 cents', '80 cents', '1 dollar'],
        correctAnswerIndex: 2,
        rationale: 'To find the total cost, you add the two prices together: 50 cents + 30 cents = 80 cents.'
    },
    {
        question: 'How many sides does a rectangle have?',
        answers: ['3', '4', '5', '6'],
        correctAnswerIndex: 1,
        rationale: 'A rectangle is a four-sided shape with four right angles.'
    },
    {
        question: 'What is 100 - 40?',
        answers: ['50', '60', '70', '80'],
        correctAnswerIndex: 1,
        rationale: 'Subtracting 40 from 100 leaves you with 60.'
    },
    {
        question: 'If you share 12 cookies equally among 4 friends, how many cookies does each friend get?',
        answers: ['2', '3', '4', '6'],
        correctAnswerIndex: 1,
        rationale: 'This is a division problem. 12 divided by 4 is 3. Each friend gets 3 cookies.'
    },
    {
        question: 'Which of these is the longest?',
        answers: ['1 meter', '1 centimeter', '1 kilometer', '1 millimeter'],
        correctAnswerIndex: 2,
        rationale: 'A kilometer is the largest unit of length among the options. 1 kilometer = 1000 meters.'
    },
    {
        question: 'What is 9 + 9 + 9?',
        answers: ['18', '27', '36', '24'],
        correctAnswerIndex: 1,
        rationale: 'This is the same as 3 x 9. 9 + 9 = 18, and 18 + 9 = 27.'
    },
    {
        question: 'Which fraction is the biggest: 1/2, 1/4, 1/3?',
        answers: ['1/2', '1/4', '1/3', 'They are equal'],
        correctAnswerIndex: 0,
        rationale: 'When the numerator is 1, the fraction with the smallest denominator is the largest. Imagine cutting a cake into 2 pieces versus 4 pieces; the half-pieces are bigger.'
    },
    {
        question: 'There are 7 days in a week. How many days are there in 3 weeks?',
        answers: ['10', '14', '21', '28'],
        correctAnswerIndex: 2,
        rationale: 'To find the total number of days, you multiply the number of days in a week by the number of weeks: 7 x 3 = 21 days.'
    },
    {
        question: 'What is the value of the digit 5 in the number 57?',
        answers: ['5', '7', '50', '57'],
        correctAnswerIndex: 2,
        rationale: 'In the number 57, the digit 5 is in the tens place, so its value is 50.'
    },
    {
        question: 'Which shape has no corners?',
        answers: ['Square', 'Triangle', 'Circle', 'Star'],
        correctAnswerIndex: 2,
        rationale: 'A circle is a continuous loop without any corners or vertices.'
    },
    {
        question: 'Ben is 120 cm tall. Sam is 10 cm shorter than Ben. How tall is Sam?',
        answers: ['110 cm', '130 cm', '100 cm', '120 cm'],
        correctAnswerIndex: 0,
        rationale: 'If Sam is 10 cm shorter, you subtract 10 from Ben\'s height: 120 - 10 = 110 cm.'
    },
    {
        question: 'What is half of 20?',
        answers: ['5', '10', '15', '20'],
        correctAnswerIndex: 1,
        rationale: 'Half of a number is the same as dividing it by 2. 20 / 2 = 10.'
    },
    {
        question: 'Arrange these numbers from smallest to largest: 45, 23, 65, 32',
        answers: ['23, 32, 45, 65', '65, 45, 32, 23', '23, 45, 32, 65', '32, 23, 65, 45'],
        correctAnswerIndex: 0,
        rationale: 'Comparing the tens digits first, 23 is the smallest, then 32, then 45, and finally 65 is the largest.'
    },
    {
        question: 'A movie starts at 2:00 PM and lasts for 2 hours. What time does it end?',
        answers: ['3:00 PM', '4:00 PM', '5:00 PM', '2:02 PM'],
        correctAnswerIndex: 1,
        rationale: 'Adding 2 hours to 2:00 PM brings the time to 4:00 PM.'
    }
  ],
};
