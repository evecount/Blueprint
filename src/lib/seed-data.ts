'use client';
import type { Resource } from '@/lib/types';

export const seedResources: Resource[] = [
  {
    id: 'p4-science',
    name: 'Primary 4 Science',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'What are the three states of matter?',
        answers: ['Solid, Liquid, Gas', 'Solid, Water, Air', 'Hard, Soft, Wet', 'Rock, Water, Steam'],
        correctAnswerIndex: 0,
        rationale: 'The three fundamental states of matter taught in primary science are solid, liquid, and gas.'
      },
      {
        question: 'Which part of a plant absorbs water and nutrients from the soil?',
        answers: ['Leaves', 'Stem', 'Roots', 'Flower'],
        correctAnswerIndex: 2,
        rationale: 'The roots anchor the plant and are responsible for absorbing water and dissolved nutrients from the soil.'
      },
      {
        question: 'Why does an ice cube melt when left on a table at room temperature?',
        answers: ['It loses heat to the air.', 'It gains heat from the warmer surroundings.', 'It gets tired of being solid.', 'The light makes it melt.'],
        correctAnswerIndex: 1,
        rationale: 'Heat flows from a warmer area to a cooler area. The ice cube is colder than the room, so it absorbs heat from the surroundings, causing its temperature to rise and change its state from solid to liquid.'
      }
    ]
  },
  {
    id: 'p6-math',
    name: 'Primary 6 Mathematics',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'A rectangle has a length of 12 cm and a width of 5 cm. What is its area?',
        answers: ['17 cm²', '34 cm²', '60 cm²', '50 cm²'],
        correctAnswerIndex: 2,
        rationale: 'The area of a rectangle is calculated by multiplying its length by its width. Area = 12 cm * 5 cm = 60 cm².'
      },
      {
        question: 'Express 75% as a fraction in its simplest form.',
        answers: ['75/100', '3/4', '7/5', '1/4'],
        correctAnswerIndex: 1,
        rationale: '75% means 75 out of 100, or 75/100. This fraction can be simplified by dividing both the numerator and the denominator by their greatest common divisor, which is 25. 75 ÷ 25 = 3 and 100 ÷ 25 = 4. So, the simplest form is 3/4.'
      },
      {
        question: 'If a pen costs $0.80, how much do 5 pens cost?',
        answers: ['$3.50', '$4.00', '$4.50', '$5.00'],
        correctAnswerIndex: 1,
        rationale: 'To find the total cost, multiply the cost of one pen by the number of pens. Total cost = $0.80 * 5 = $4.00.'
      }
    ]
  },
  {
    id: 's2-history',
    name: 'Secondary 2 History',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Who was the founder of modern Singapore?',
        answers: ['Lee Kuan Yew', 'Sang Nila Utama', 'Stamford Raffles', 'William Farquhar'],
        correctAnswerIndex: 2,
        rationale: 'Sir Thomas Stamford Raffles, an official of the British East India Company, established a trading post in Singapore in 1819, which is widely considered the founding of modern Singapore.'
      },
      {
        question: 'The Japanese Occupation of Singapore during World War II occurred in which period?',
        answers: ['1931-1935', '1942-1945', '1950-1953', '1965-1968'],
        correctAnswerIndex: 1,
        rationale: 'The Japanese forces captured Singapore on 15 February 1942, and the occupation lasted until the surrender of Japan in September 1945.'
      },
      {
        question: "What does the name 'Singapura' mean in Sanskrit?",
        answers: ['Lion City', 'Garden City', 'Fish City', 'Trading Hub'],
        correctAnswerIndex: 0,
        rationale: "According to the 'Sejarah Melayu' (Malay Annals), Sang Nila Utama, a prince from Palembang, saw a creature he identified as a lion and named the island 'Singapura', which means 'Lion City' in Sanskrit."
      }
    ]
  },
  {
    id: 's4-english',
    name: 'Secondary 4 English',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Choose the word that best completes the sentence: "Despite the heavy rain, the students were _______ to go on the field trip."',
        answers: ['reluctant', 'determined', 'ambivalent', 'indifferent'],
        correctAnswerIndex: 1,
        rationale: "The word 'determined' shows a strong resolve to do something despite obstacles, which fits the context of wanting to go on the trip even with the bad weather. 'Reluctant' means the opposite."
      },
      {
        question: 'In the phrase "a blessing in disguise," what does the idiom mean?',
        answers: ['Something that is obviously good.', 'A good thing that seemed bad at first.', 'A bad situation that gets worse.', 'A religious ceremony.'],
        correctAnswerIndex: 1,
        rationale: "A 'blessing in disguise' is an idiom referring to something that appears to be a misfortune at first but ultimately results in something good happening."
      },
      {
        question: 'Which of the following sentences uses the passive voice correctly?',
        answers: ['The ball was threw by the boy.', 'The boy the ball was thrown by.', 'The ball was thrown by the boy.', 'The boy was thrown the ball.'],
        correctAnswerIndex: 2,
        rationale: "In the passive voice, the object of the active sentence ('the ball') becomes the subject. The correct structure is 'Object + was/were + past participle + by + Subject'. 'Thrown' is the past participle of 'throw'."
      }
    ]
  }
];
