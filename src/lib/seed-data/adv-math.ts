'use client';
import type { Resource } from '@/lib/types';

export const advMath: Resource = {
  id: 'adv-math',
  name: 'Math & Your Career',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question:
        'Logarithms help measure earthquakes on the Richter scale. What job might use logarithms daily to analyze data that spans a huge range of values?',
      answers: ['Chef', 'Seismologist', 'Gardener', 'Librarian'],
      correctAnswerIndex: 1,
      rationale:
        'Seismologists study earthquakes and use the logarithmic Richter scale to measure their magnitude. Data scientists also use logarithms to handle data with wide-ranging values.',
    },
    {
      question:
        'Calculus (dy/dx) is all about the rate of change. Which career path uses this to model things like rocket trajectories or stock market trends?',
      answers: ['Historian', 'Aerospace Engineer', 'Artist', 'Journalist'],
      correctAnswerIndex: 1,
      rationale:
        'Aerospace engineers and financial analysts use calculus to model and predict how things change over time, from the path of a spacecraft to the price of a stock.',
    },
    {
      question:
        'Matrices are grids of numbers used to create 3D graphics in video games and movies. What job involves using matrices to render and manipulate images?',
      answers: ['Farmer', 'Doctor', 'Game Developer', 'Lawyer'],
      correctAnswerIndex: 2,
      rationale:
        'Game developers and CGI artists use matrices for almost everything in 3D graphics, including rotating, scaling, and positioning objects in a virtual world.',
    },
    {
      question:
        'Statistics helps companies like Netflix recommend movies you might like. What role uses data to predict customer behavior?',
      answers: ['Data Scientist', 'Plumber', 'Firefighter', 'Musician'],
      correctAnswerIndex: 0,
      rationale:
        'Data scientists and market research analysts use statistical models to analyze user data and predict what products, movies, or services a person is likely to enjoy.',
    },
    {
      question:
        'Trigonometry is essential for building bridges and creating GPS systems. Which profession relies on precise angle calculations to create maps?',
      answers: ['Writer', 'Surveyor', 'Baker', 'Dancer'],
      correctAnswerIndex: 1,
      rationale:
        'Surveyors use trigonometry and GPS technology to measure large areas of land with incredible precision, forming the basis for maps and construction projects.',
    },
    {
      question:
        'Algebra is the language of logic used in computer programming. What career involves writing the code that makes your favorite apps work?',
      answers: ['Software Developer', 'Teacher', 'Politician', 'Athlete'],
      correctAnswerIndex: 0,
      rationale:
        'Software and app developers use algebraic thinking to create logical instructions (algorithms) that tell computers and phones what to do.',
    },
    {
      question:
        'Geometry is used by architects to design beautiful and safe buildings. What field requires a deep understanding of shapes and spaces?',
      answers: ['Biologist', 'Architect', 'Psychologist', 'Chef'],
      correctAnswerIndex: 1,
      rationale:
        'Architects and urban planners use geometry every day to design buildings, public spaces, and even entire cities that are both functional and aesthetically pleasing.',
    },
    {
      question:
        'Probability helps insurance companies calculate the risk of an accident to set their prices. What job uses math to assess financial risk?',
      answers: ['Artist', 'Actuary', 'Historian', 'Philosopher'],
      correctAnswerIndex: 1,
      rationale:
        'Actuaries are professionals who specialize in using mathematics, statistics, and financial theory to analyze the financial consequences of risk.',
    },
    {
      question:
        'Airlines use a type of math called linear programming to schedule flights efficiently. What field focuses on optimizing complex systems?',
      answers: ['Linguistics', 'Operations Research', 'Poetry', 'Sculpture'],
      correctAnswerIndex: 1,
      rationale:
        'Operations Research is a field of applied mathematics that uses advanced analytical methods to help make better decisions in complex systems, like airline scheduling or supply chain management.',
    },
    {
      question:
        'Number theory is the foundation of modern cryptography that keeps your data safe online. What career involves creating these secure systems?',
      answers: ['Marine Biologist', 'Cryptographer', 'Geologist', 'Astronomer'],
      correctAnswerIndex: 1,
      rationale:
        'Cryptographers use principles from number theory to design the complex algorithms that secure everything from your bank account to private messages.',
    },
    {
        question:
          'Fourier analysis breaks down complex signals into simple sine waves. Which profession uses this to process sound and images?',
        answers: ['Audio Engineer', 'Novelist', 'Historian', 'Chef'],
        correctAnswerIndex: 0,
        rationale:
          'Audio engineers and signal processing specialists use Fourier analysis to clean up audio recordings, compress images (like in JPEGs), and analyze all kinds of wave-based data.',
    },
    {
        question:
          'Game theory models strategic decision-making. Which field uses it to understand competition and cooperation between businesses?',
        answers: ['Botany', 'Economics', 'Geology', 'Astrology'],
        correctAnswerIndex: 1,
        rationale:
          'Economists use game theory to analyze how companies set prices, how countries negotiate trade deals, and how individuals make decisions in strategic situations.',
    },
    {
        question:
          'Differential equations describe how a system changes over time. What career uses them to model the spread of diseases?',
        answers: ['Epidemiologist', 'Fashion Designer', 'Mechanic', 'Sommelier'],
        correctAnswerIndex: 0,
        rationale:
          'Epidemiologists create mathematical models using differential equations to predict how diseases will spread through a population and to evaluate the effectiveness of interventions like vaccinations.',
    },
    {
        question:
          'Boolean algebra deals with true/false logic. What career is fundamentally based on designing circuits using these principles?',
        answers: ['Librarian', 'Poet', 'Computer Hardware Engineer', 'Sociologist'],
        correctAnswerIndex: 2,
        rationale:
          'Computer hardware engineers design processors and logic gates, the physical components of a computer, which operate based on the principles of Boolean algebra (AND, OR, NOT).',
    },
    {
        question:
          'Graph theory studies networks of connected points. Which tech giant uses it to map social connections and recommend friends?',
        answers: ['A car manufacturer', 'A farming company', 'Facebook (Meta)', 'A clothing brand'],
        correctAnswerIndex: 2,
        rationale:
          'Social media companies like Facebook use graph theory to model their entire user base as a massive network, allowing them to analyze connections, find communities, and suggest new friends.',
    },
    {
        question:
          'Fractal geometry describes repeating patterns found in nature, like snowflakes and coastlines. What career might use this to create realistic natural scenery in movies?',
        answers: ['Accountant', 'CGI Artist', 'Lawyer', 'Nurse'],
        correctAnswerIndex: 1,
        rationale:
          'Computer-Generated Imagery (CGI) artists use fractal algorithms to generate complex, natural-looking textures and landscapes like mountains, clouds, and trees for films and video games.',
    },
    {
        question:
          'Statistical analysis is key to ensuring a new drug is safe and effective. What job involves designing and interpreting these clinical trials?',
        answers: ['Biostatistician', 'Chef', 'Historian', 'Musician'],
        correctAnswerIndex: 0,
        rationale:
          'Biostatisticians are essential in medical research. They design experiments, analyze the data, and determine whether the results of a clinical trial are statistically significant.',
    },
    {
        question:
          'Control theory is a branch of mathematics used to keep systems stable, like a plane on autopilot. What career focuses on creating these automated systems?',
        answers: ['Philosopher', 'Control Systems Engineer', 'Dancer', 'Writer'],
        correctAnswerIndex: 1,
        rationale:
          'Control systems engineers design and implement algorithms that automatically manage and regulate devices and systems, from thermostats in a building to the flight controls of a drone.',
    },
    {
        question:
          'Vector calculus is used to model fluid dynamics. What kind of engineer would use this to design more aerodynamic cars?',
        answers: ['Mechanical Engineer', 'Librarian', 'Social Worker', 'Chef'],
        correctAnswerIndex: 0,
        rationale:
          'Mechanical and aerospace engineers use computational fluid dynamics (CFD), which is based on vector calculus, to simulate airflow over vehicles and optimize their shape for better performance and fuel efficiency.',
    },
    {
        question:
          'What mathematical concept allows for secure online transactions using public and private keys?',
        answers: ['Geometry', 'Calculus', 'Public-Key Cryptography', 'Algebra'],
        correctAnswerIndex: 2,
        rationale:
          'Public-key cryptography, which relies heavily on number theory (especially prime numbers), is the foundation of modern internet security, enabling things like secure e-commerce and encrypted messaging.',
    },
    {
        question:
          'Machine learning algorithms are based on advanced math like linear algebra. What career is all about building AI that can learn from data?',
        answers: ['Machine Learning Engineer', 'Gardener', 'Historian', 'Baker'],
        correctAnswerIndex: 0,
        rationale:
          'Machine Learning Engineers are specialized software engineers who use mathematical and statistical principles to design and build artificial intelligence models that can find patterns and make predictions from data.',
    },
    {
        question:
          'Topology is the mathematical study of shapes and spaces. Which field uses it to understand the structure of the universe?',
        answers: ['Cosmology', 'Culinary Arts', 'Fashion Design', 'Journalism'],
        correctAnswerIndex: 0,
        rationale:
          'Cosmologists and theoretical physicists use advanced mathematical concepts like topology to theorize about the overall shape, structure, and fate of the universe.',
    },
    {
        question:
          'Actuaries use compound interest formulas to make long-term financial projections. What industry relies heavily on this for pricing their products?',
        answers: ['The music industry', 'The film industry', 'The insurance and pension industry', 'The restaurant industry'],
        correctAnswerIndex: 2,
        rationale:
          'The insurance and pension industries are built on long-term financial calculations. Actuaries use formulas for compound interest and probability to calculate premiums and ensure the long-term solvency of funds.',
    },
    {
        question:
          'What mathematical field is used by animators at studios like Pixar to model the movement and behavior of hair and cloth?',
        answers: ['Physics-based simulation (using differential equations)', 'Basic arithmetic', 'Geometry', 'Number theory'],
        correctAnswerIndex: 0,
        rationale:
          'Animators and technical directors use complex physics simulations, which are governed by differential equations, to make the movement of things like cloth, hair, and water look realistic.',
    },
    {
        question:
          'To determine the optimal placement of cell towers for best coverage, telecommunication companies use what kind of mathematical optimization?',
        answers: ['Network optimization algorithms', 'Guessing and checking', 'Basic addition', 'Historical analysis'],
        correctAnswerIndex: 0,
        rationale:
          'Engineers use network optimization algorithms, a part of operations research, to solve complex problems like finding the best locations for cell towers to maximize coverage while minimizing cost.',
    },
  ],
};
