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
  // Advanced
  {
    id: 'adv-science',
    name: 'Just Science Stuff',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Why is the sky blue?',
        answers: ['Because the ocean is blue and reflects onto the sky.', 'Because of a phenomenon called Rayleigh scattering.', 'Because the sun emits blue light.', 'Because of pollutants in the air.'],
        correctAnswerIndex: 1,
        rationale: 'The sky appears blue because of Rayleigh scattering. The Earth\'s atmosphere scatters shorter-wavelength blue light from the sun more effectively than longer-wavelength red light.'
      },
      {
        question: 'What was the significance of Alexander Fleming\'s discovery of penicillin?',
        answers: ['It was the first form of plastic.', 'It led to the development of the first atomic bomb.', 'It was the world\'s first mass-produced antibiotic.', 'It was a new type of fuel source.'],
        correctAnswerIndex: 2,
        rationale: 'The discovery of penicillin in 1928 revolutionized medicine by introducing the age of antibiotics, which are drugs that can kill or prevent the growth of bacteria, saving millions of lives.'
      },
      {
        question: 'How does the Global Positioning System (GPS) work?',
        answers: ['By using ground-based radio towers.', 'By communicating with a network of orbiting satellites.', 'By using magnetic fields from the Earth\'s core.', 'By analyzing star positions.'],
        correctAnswerIndex: 1,
        rationale: 'GPS works through a system called trilateration. A receiver on Earth measures the time it takes for signals to arrive from multiple satellites in orbit. By knowing the exact position of these satellites, the receiver can calculate its own location.'
      },
      {
        question: 'What is the "greenhouse effect"?',
        answers: ['The process plants use to create food.', 'A phenomenon where certain gases in the atmosphere trap heat.', 'The reflection of sunlight off polar ice caps.', 'The staining of glass on old greenhouses.'],
        correctAnswerIndex: 1,
        rationale: 'The greenhouse effect is a natural process where gases like carbon dioxide and methane in the Earth\'s atmosphere trap some of the sun\'s energy, keeping the planet warm enough for life. However, human activities have increased the concentration of these gases, leading to global warming.'
      },
      {
        question: 'What is "dark matter" in cosmology?',
        answers: ['A type of black hole.', 'Physical matter that does not have color.', 'A type of anti-matter.', 'A hypothetical form of matter that does not emit or reflect light.'],
        correctAnswerIndex: 3,
        rationale: 'Dark matter is a mysterious, non-luminous material that is believed to make up about 27% of the universe. It does not interact with light, making it invisible, but its existence is inferred from its gravitational effects on visible matter, such as galaxies.'
      }
    ]
  },
  {
    id: 'adv-finance',
    name: 'Financial Literacy',
    createdAt: new Date().toISOString(),
    questions: [
        {
            "question": "What is dollar-cost averaging?",
            "answers": [
              "An investment strategy where you try to time the market to buy low and sell high.",
              "Investing a fixed amount of money at regular intervals, regardless of market fluctuations.",
              "A method for calculating the average cost of all your investments.",
              "A strategy to only invest in US dollar-denominated assets."
            ],
            "correctAnswerIndex": 1,
            "rationale": "Dollar-cost averaging is an investment strategy that involves investing a fixed sum of money at regular intervals. This approach can help reduce the impact of market volatility by averaging out the purchase price over time. It is the opposite of market timing (a)."
        },
        {
            "question": "What does NAV stand for in the context of a unit trust?",
            "answers": [
              "Net Asset Value",
              "New Asset Valuation",
              "Nominal Asset Value",
              "Net-Associated Value"
            ],
            "correctAnswerIndex": 0,
            "rationale": "NAV stands for Net Asset Value. It represents the per-unit market value of the fund, calculated by taking the total value of the fund's assets and subtracting its liabilities, then dividing by the number of units outstanding."
        },
        {
            "question": "What is \"diversification\"?",
            "answers": [
              "A strategy of concentrating investments in a single asset class.",
              "A risk management strategy that mixes a wide variety of investments within a portfolio.",
              "A method of timing the market to maximize returns.",
              "A way to guarantee that an investment will not lose money."
            ],
            "correctAnswerIndex": 1,
            "rationale": "Diversification is the principle of \"not putting all your eggs in one basket.\" It involves spreading investments across various assets, industries, and geographic locations to reduce unsystematic (specific) risk. (a) is the opposite of diversification."
        },
        {
            "question": "The \"Sharpe Ratio\" is used to measure:",
            "answers": [
              "The total return of a fund.",
              "The risk-adjusted return of an investment.",
              "The level of diversification in a portfolio.",
              "The amount of leverage used by a fund."
            ],
            "correctAnswerIndex": 1,
            "rationale": "The Sharpe Ratio measures the average return earned in excess of the risk-free rate per unit of volatility or total risk. A higher Sharpe Ratio indicates better performance on a risk-adjusted basis."
        },
        {
            "question": "What is the primary purpose of a \"prospectus\" for a unit trust?",
            "answers": [
              "To provide a summary of the fund's past performance.",
              "To serve as a marketing brochure to attract investors.",
              "To provide detailed information about the fund, including its investment objectives, strategies, risks, and fees.",
              "To list the names of all the current unitholders."
            ],
            "correctAnswerIndex": 2,
            "rationale": "A prospectus is a mandatory legal document that provides investors with all the material information about an investment offering, helping them make an informed decision. While it contains performance data (a), it is much more than a marketing brochure (b) or a list of unitholders (d)."
        },
        {
            "question": "A \"balanced fund\" typically invests in:",
            "answers": [
              "Only equities.",
              "Only bonds.",
              "A mix of equities and bonds.",
              "Only money market instruments."
            ],
            "correctAnswerIndex": 2,
            "rationale": "Balanced funds aim to provide a \"balance\" of growth (from equities) and income (from bonds). They hold a mix of both asset classes to moderate risk compared to a pure equity fund."
        }
    ]
  }
];
