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
      },
       {
        question: 'The microchips in your phone are made of semiconductors. What kind of engineer designs and fabricates these tiny components?',
        answers: ['Mechanical Engineer', 'Chemical Engineer', 'Electrical Engineer', 'Civil Engineer'],
        correctAnswerIndex: 2,
        rationale: 'Electrical Engineers and Materials Scientists design and manufacture semiconductors, the foundation of all modern electronics.'
      },
      {
        question: 'To help protect our planet, an environmental scientist might study ecosystems to develop new conservation policies. What is one career path this could lead to?',
        answers: ['Chef', 'Musician', 'Environmental Policy Advisor', 'Software Developer'],
        correctAnswerIndex: 2,
        rationale: 'Environmental scientists provide the data and analysis that governments and organizations use to create effective policies for conservation, pollution control, and sustainable development.'
      },
      {
        question: 'Biotechnology uses living organisms to create products like vaccines. What kind of job involves editing genes to develop new medicines?',
        answers: ['Architect', 'Geneticist', 'Accountant', 'Librarian'],
        correctAnswerIndex: 1,
        rationale: 'Geneticists and Biotechnologists work at the genetic level, manipulating DNA and other cellular components to develop new medical treatments, more resilient crops, and biofuels.'
      },
      {
        question: 'Aerospace engineers apply physics to design spacecraft. What is a major challenge they solve to launch a rocket into space?',
        answers: ['Choosing the best color', 'Overcoming Earth\'s gravity', 'Designing the logo', 'Writing the user manual'],
        correctAnswerIndex: 1,
        rationale: 'A primary challenge for aerospace engineers is designing engines and structures powerful and light enough to overcome Earth\'s immense gravitational pull and escape the atmosphere.'
      },
      {
        question: 'Data scientists analyze huge datasets from satellites to model climate change. How does their work influence global decisions?',
        answers: ['It helps them choose which movies to watch.', 'It has no influence.', 'It provides evidence for policy changes and predicts future impacts.', 'It helps design better video games.'],
        correctAnswerIndex: 2,
        rationale: 'By analyzing vast amounts of climate data, data scientists create models that show the effects of climate change. This scientific evidence is crucial for convincing governments and international bodies to take action.'
      }
    ]
  },
  {
    id: 'adv-finance',
    name: 'Just Finance Stuff',
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
  },
  {
    id: 'adv-math',
    name: 'Just Math Stuff',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Logarithms help measure earthquakes on the Richter scale. What job might use logarithms daily to analyze data that spans a huge range of values?',
        answers: ['Chef', 'Seismologist', 'Gardener', 'Librarian'],
        correctAnswerIndex: 1,
        rationale: 'Seismologists study earthquakes and use the logarithmic Richter scale to measure their magnitude. Data scientists also use logarithms to handle data with wide-ranging values.'
      },
      {
        question: 'Calculus (dy/dx) is all about the rate of change. Which career path uses this to model things like rocket trajectories or stock market trends?',
        answers: ['Historian', 'Aerospace Engineer', 'Artist', 'Journalist'],
        correctAnswerIndex: 1,
        rationale: 'Aerospace engineers and financial analysts use calculus to model and predict how things change over time, from the path of a spacecraft to the price of a stock.'
      },
      {
        question: 'Matrices are grids of numbers used to create 3D graphics in video games and movies. What job involves using matrices to render and manipulate images?',
        answers: ['Farmer', 'Doctor', 'Game Developer', 'Lawyer'],
        correctAnswerIndex: 2,
        rationale: 'Game developers and CGI artists use matrices for almost everything in 3D graphics, including rotating, scaling, and positioning objects in a virtual world.'
      },
      {
        question: 'Statistics helps companies like Netflix recommend movies you might like. What role uses data to predict customer behavior?',
        answers: ['Data Scientist', 'Plumber', 'Firefighter', 'Musician'],
        correctAnswerIndex: 0,
        rationale: 'Data scientists and market research analysts use statistical models to analyze user data and predict what products, movies, or services a person is likely to enjoy.'
      },
      {
        question: 'Trigonometry is essential for building bridges and creating GPS systems. Which profession relies on precise angle calculations to create maps?',
        answers: ['Writer', 'Surveyor', 'Baker', 'Dancer'],
        correctAnswerIndex: 1,
        rationale: 'Surveyors use trigonometry and GPS technology to measure large areas of land with incredible precision, forming the basis for maps and construction projects.'
      },
      {
        question: 'Algebra is the language of logic used in computer programming. What career involves writing the code that makes your favorite apps work?',
        answers: ['Software Developer', 'Teacher', 'Politician', 'Athlete'],
        correctAnswerIndex: 0,
        rationale: 'Software and app developers use algebraic thinking to create logical instructions (algorithms) that tell computers and phones what to do.'
      },
      {
        question: 'Geometry is used by architects to design beautiful and safe buildings. What field requires a deep understanding of shapes and spaces?',
        answers: ['Biologist', 'Architect', 'Psychologist', 'Chef'],
        correctAnswerIndex: 1,
        rationale: 'Architects and urban planners use geometry every day to design buildings, public spaces, and even entire cities that are both functional and aesthetically pleasing.'
      },
      {
        question: 'Probability helps insurance companies calculate the risk of an accident to set their prices. What job uses math to assess financial risk?',
        answers: ['Artist', 'Actuary', 'Historian', 'Philosopher'],
        correctAnswerIndex: 1,
        rationale: 'Actuaries are professionals who specialize in using mathematics, statistics, and financial theory to analyze the financial consequences of risk.'
      },
      {
        question: 'Airlines use a type of math called linear programming to schedule flights efficiently. What field focuses on optimizing complex systems?',
        answers: ['Linguistics', 'Operations Research', 'Poetry', 'Sculpture'],
        correctAnswerIndex: 1,
        rationale: 'Operations Research is a field of applied mathematics that uses advanced analytical methods to help make better decisions in complex systems, like airline scheduling or supply chain management.'
      },
      {
        question: 'Number theory is the foundation of modern cryptography that keeps your data safe online. What career involves creating these secure systems?',
        answers: ['Marine Biologist', 'Cryptographer', 'Geologist', 'Astronomer'],
        correctAnswerIndex: 1,
        rationale: 'Cryptographers use principles from number theory to design the complex algorithms that secure everything from your bank account to private messages.'
      },
    ]
  },
   {
    id: 'adv-art',
    name: 'Just Art Stuff',
    createdAt: new Date().toISOString(),
    questions: [
      {
        question: 'Philosophy teaches you to analyze arguments and think critically. How does this skill help a lawyer make a better case?',
        answers: ['It helps them run faster.', 'It helps them build stronger, more logical arguments.', 'It helps them paint better pictures.', 'It has no use.'],
        correctAnswerIndex: 1,
        rationale: 'The study of philosophy trains the mind in logic and critical thinking, which are essential skills for a lawyer to construct persuasive arguments and deconstruct weak ones.'
      },
      {
        question: 'Art historians understand the context behind art. What job involves selecting and arranging art for a museum exhibit?',
        answers: ['Engineer', 'Museum Curator', 'Accountant', 'Scientist'],
        correctAnswerIndex: 1,
        rationale: 'Museum curators use their deep knowledge of art history and theory to select artworks and present them in a compelling and educational way for the public.'
      },
      {
        question: 'Design thinking, a process from art, is used by companies like Apple to create user-friendly products. What career focuses on making technology easier to use?',
        answers: ['UX/UI Designer', 'Botanist', 'Geographer', 'Astrologer'],
        correctAnswerIndex: 0,
        rationale: 'User Experience (UX) and User Interface (UI) designers apply principles of design thinking to create products that are intuitive, effective, and enjoyable for people to use.'
      },
      {
        question: 'Graphic designers use color and typography to communicate ideas for brands. What field combines art with marketing?',
        answers: ['Medicine', 'Brand Strategy', 'Construction', 'Farming'],
        correctAnswerIndex: 1,
        rationale: 'Graphic designers and brand strategists work together to create a cohesive visual identity for a company, using art to communicate its values and attract customers.'
      },
      {
        question: 'Filmmakers use visual storytelling to create emotional impact. What role is responsible for the overall artistic look and feel of a movie?',
        answers: ['The Caterer', 'The Film Director', 'The Accountant', 'The Driver'],
        correctAnswerIndex: 1,
        rationale: 'The film director is responsible for overseeing the artistic and dramatic aspects of a film, turning the script into a finished visual and auditory experience.'
      },
      {
        question: 'The principles of aesthetics help create products that are both functional and beautiful. What career blends engineering with art to design things like cars and phones?',
        answers: ['Industrial Designer', 'Sociologist', 'Poet', 'Dramatist'],
        correctAnswerIndex: 0,
        rationale: 'Industrial designers are responsible for the conceptual design and development of manufactured products, combining art, business, and engineering to make products that people use every day.'
      },
      {
        question: 'Public art can transform a city space and reflect its culture. What job involves integrating art into public environments?',
        answers: ['Veterinarian', 'Urban Planner', 'Pharmacist', 'Dentist'],
        correctAnswerIndex: 1,
        rationale: 'Urban planners design the layout of cities and towns. A key part of their work is deciding how to incorporate public spaces, parks, and art to create vibrant and livable communities.'
      },
      {
        question: 'Creative writing skills are essential for crafting compelling stories in advertising. What career uses storytelling to sell products?',
        answers: ['Copywriter', 'Mathematician', 'Physicist', 'Chemist'],
        correctAnswerIndex: 0,
        rationale: 'Copywriters are professional writers who craft the text (or "copy") for advertisements, websites, and marketing materials, using storytelling to connect with consumers.'
      },
      {
        question: 'Music theory is used to compose soundtracks for video games that adapt to a player\'s actions. What job creates the audio experience for games?',
        answers: ['Judge', 'Police Officer', 'Game Audio Designer', 'Pilot'],
        correctAnswerIndex: 2,
        rationale: 'Game audio designers and composers create all the sound for a video game, including the music, sound effects, and dialogue, to make the experience more immersive.'
      },
      {
        question: 'Ethics, a branch of philosophy, guides the development of artificial intelligence to ensure it is fair. What emerging field combines humanities with technology?',
        answers: ['AI Ethicist', 'Chef', 'Mechanic', 'Athlete'],
        correctAnswerIndex: 0,
        rationale: 'AI Ethicists are specialists who help guide the design and deployment of artificial intelligence systems to ensure they are safe, unbiased, and beneficial for society.'
      }
    ]
  }
];
