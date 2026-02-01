'use client';
import type { Resource } from '@/lib/types';

export const p6Science: Resource = {
  id: 'p6-science',
  name: 'Primary 6 Science',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Which of the following is a source of renewable energy?',
      answers: ['Coal', 'Natural Gas', 'Solar Power', 'Petroleum'],
      correctAnswerIndex: 2,
      rationale:
        'Renewable energy sources are naturally replenished. Solar power, derived from the sun, is a key example. Coal, natural gas, and petroleum are fossil fuels and are non-renewable.',
    },
    {
      question: 'What process do plants use to make their own food?',
      answers: ['Respiration', 'Photosynthesis', 'Transpiration', 'Decomposition'],
      correctAnswerIndex: 1,
      rationale:
        'Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide to create their own food and release oxygen.',
    },
    {
      question: 'How does heat travel from the Sun to the Earth?',
      answers: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
      correctAnswerIndex: 2,
      rationale:
        'Heat travels through the vacuum of space from the Sun to Earth primarily through electromagnetic waves, a process called radiation. Conduction and convection require a medium.',
    },
    {
      question: 'Which force pulls objects towards the center of the Earth?',
      answers: ['Magnetism', 'Friction', 'Tension', 'Gravity'],
      correctAnswerIndex: 3,
      rationale:
        'Gravity is the force of attraction between two objects with mass. On Earth, it is what pulls everything towards the planet\'s center.',
    },
    {
      question: 'In the water cycle, what is the process of water turning into water vapor called?',
      answers: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
      correctAnswerIndex: 2,
      rationale:
        'Evaporation is the process where a liquid, in this case water, turns into a gas (water vapor) when it is heated.',
    },
    {
      question: 'What is the main function of the human skeletal system?',
      answers: [
        'To pump blood',
        'To digest food',
        'To provide support and structure',
        'To send signals to the brain',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The skeletal system provides a framework for the body, giving it structure, protecting internal organs, and allowing movement.',
    },
  ],
};
