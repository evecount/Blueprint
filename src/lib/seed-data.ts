'use client';
import type { Resource } from '@/lib/types';

export const seedResources: Resource[] = [
  // Primary School
  {
    id: 'p1-english',
    name: 'Primary 1 English',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Which word rhymes with "cat"?',
        answers: ['Dog', 'Sun', 'Hat', 'Pin'],
        correctAnswerIndex: 2,
        rationale: 'Words that rhyme have the same ending sound. "Cat" and "hat" both end with the "-at" sound.'
      },
    ]
  },
  {
    id: 'p2-math',
    name: 'Primary 2 Maths',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'What is 25 + 15?',
        answers: ['30', '35', '40', '45'],
        correctAnswerIndex: 2,
        rationale: 'To add 25 and 15, you can add the tens (20 + 10 = 30) and the ones (5 + 5 = 10). Then, add the results: 30 + 10 = 40.'
      },
    ]
  },
  {
    id: 'p3-science',
    name: 'Primary 3 Science',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'What is the first stage in the life cycle of a butterfly?',
        answers: ['Pupa', 'Egg', 'Caterpillar', 'Adult'],
        correctAnswerIndex: 1,
        rationale: 'The life cycle of a butterfly begins with an egg, which then hatches into a larva (caterpillar).'
      },
    ]
  },
  {
    id: 'p4-social-studies',
    name: 'Primary 4 Social Studies',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: "What is the name of Singapore's national flower?",
        answers: ['Rose', 'Hibiscus', 'Vanda Miss Joaquim', 'Tulip'],
        correctAnswerIndex: 2,
        rationale: 'The Vanda Miss Joaquim, a hybrid orchid, was named Singapore\'s national flower in 1981 for its vibrancy and hardiness.'
      },
    ]
  },
  {
    id: 'p5-math',
    name: 'Primary 5 Maths',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'What is 3/5 expressed as a decimal?',
        answers: ['0.35', '0.6', '0.53', '3.5'],
        correctAnswerIndex: 1,
        rationale: 'To convert a fraction to a decimal, you divide the numerator by the denominator. 3 ÷ 5 = 0.6.'
      },
    ]
  },
  {
    id: 'p6-science',
    name: 'Primary 6 Science',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Which of the following is a source of renewable energy?',
        answers: ['Coal', 'Natural Gas', 'Solar Power', 'Petroleum'],
        correctAnswerIndex: 2,
        rationale: 'Renewable energy sources are naturally replenished. Solar power, derived from the sun, is a key example. Coal, natural gas, and petroleum are fossil fuels and are non-renewable.'
      },
    ]
  },
  // Secondary School
  {
    id: 's1-history',
    name: 'Secondary 1 History',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Where did the ancient Olympic Games originate?',
        answers: ['Rome', 'Egypt', 'Greece', 'China'],
        correctAnswerIndex: 2,
        rationale: 'The ancient Olympic Games were held in Olympia, Greece, from the 8th century BC to the 4th century AD.'
      },
    ]
  },
  {
    id: 's2-geography',
    name: 'Secondary 2 Geography',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'The movement of tectonic plates can cause which natural disaster?',
        answers: ['Hurricanes', 'Tornadoes', 'Earthquakes', 'Floods'],
        correctAnswerIndex: 2,
        rationale: 'Earthquakes are caused by the sudden movement of tectonic plates along fault lines in the Earth\'s crust.'
      },
    ]
  },
  {
    id: 's3-literature',
    name: 'Secondary 3 Literature',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'In Shakespeare\'s "Romeo and Juliet," which family does Juliet belong to?',
        answers: ['Montague', 'Capulet', 'Verona', 'Escalus'],
        correctAnswerIndex: 1,
        rationale: 'The play revolves around the feud between two prominent families: the Montagues (Romeo\'s family) and the Capulets (Juliet\'s family).'
      },
    ]
  },
  {
    id: 's4-chemistry',
    name: 'Secondary 4 Chemistry',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'What is the chemical symbol for gold?',
        answers: ['Ag', 'Go', 'Gd', 'Au'],
        correctAnswerIndex: 3,
        rationale: 'The chemical symbol for gold is Au, which comes from its Latin name, "aurum".'
      },
    ]
  },
    {
    id: 'm8-cis',
    name: 'M8 Collective Investment Schemes',
    createdAt: new Date().toISOString(),
    questions: [
        {
        "question": "Which of the following best describes a unit trust?",
        "answers": [
          "A high-risk investment product that guarantees returns.",
          "A collective investment scheme where investors pool their money to invest in a diversified portfolio.",
          "A type of savings account with a fixed interest rate.",
          "A direct investment in a single company's stock."
        ],
        "correctAnswerIndex": 1,
        "rationale": "A unit trust is a form of collective investment where multiple investors' money is pooled together. This pool of money is then used to invest in a wide range of assets (a diversified portfolio), which helps to spread risk. (a) is incorrect because no investment guarantees returns. (c) describes a bank account. (d) describes direct stock ownership, not a pooled fund."
      }
    ]
  },
  {
    id: 'm8a-rules',
    name: 'M8A Rules & Regulations',
    createdAt: new Date().toISOString(),
    questions: [
      {
        "question": "Under the Securities and Futures Act (SFA), what is the primary purpose of the licensing regime for capital markets intermediaries?",
        "answers": [
          "To generate revenue for the Monetary Authority of Singapore (MAS).",
          "To ensure intermediaries are fit and proper, and to protect the investing public.",
          "To limit the number of participants operating in the capital markets.",
          "To provide employment for compliance officers."
        ],
        "correctAnswerIndex": 1,
        "rationale": "The SFA's licensing requirements are designed to ensure that firms and individuals operating in the capital markets meet high standards of competence and integrity, thereby protecting the interests and trust of the public."
      }
    ]
  },
    {
    id: 'just-math-stuff',
    name: 'Just Math Stuff',
    createdAt: new Date().toISOString(),
    questions: [
        {
        "question": "A bond's Coupon Rate is 7%. Its Current Yield is 8%. Is the bond trading at a premium, discount, or par?",
        "answers": [
          "Premium (above par)",
          "Discount (below par)",
          "Par",
          "Cannot be determined"
        ],
        "correctAnswerIndex": 1,
        "rationale": "If the Current Yield (which is based on the market price) is higher than the fixed Coupon Rate (which is based on par value), it means the market price must be lower than the par value. Therefore, the bond is trading at a discount."
      }
    ]
  }
];
