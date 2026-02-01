'use client';
import type { Resource } from '@/lib/types';

export const advMath: Resource = {
  id: 'adv-math',
  name: 'Just Math Stuff',
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
  ],
};
