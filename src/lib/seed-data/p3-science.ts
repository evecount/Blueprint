'use client';
import type { Resource } from '@/lib/types';

export const p3Science: Resource = {
  id: 'p3-science',
  name: 'Primary 3 Science',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is the first stage in the life cycle of a butterfly?',
      answers: ['Pupa', 'Egg', 'Caterpillar', 'Adult'],
      correctAnswerIndex: 1,
      rationale:
        'The life cycle of a butterfly begins with an egg, which then hatches into a larva (caterpillar).',
    },
    {
      question: 'Which part of a plant absorbs water and nutrients from the soil?',
      answers: ['Leaves', 'Stem', 'Flower', 'Roots'],
      correctAnswerIndex: 3,
      rationale:
        'The roots anchor the plant and are responsible for absorbing water and essential nutrients from the soil.',
    },
    {
      question: 'Which of these is NOT a living thing?',
      answers: ['A tree', 'A rock', 'A bird', 'A fish'],
      correctAnswerIndex: 1,
      rationale:
        'A rock does not grow, breathe, or reproduce, which are characteristics of living things.',
    },
    {
      question: 'Which of these materials is waterproof?',
      answers: ['Paper', 'Fabric', 'Plastic', 'Wood'],
      correctAnswerIndex: 2,
      rationale: 'Plastic does not allow water to pass through it, making it waterproof.',
    },
    {
      question: 'What do we call animals that only eat plants?',
      answers: ['Carnivores', 'Omnivores', 'Herbivores', 'Decomposers'],
      correctAnswerIndex: 2,
      rationale: 'Herbivores are animals whose primary food source is plant-based.',
    },
    {
      question: 'Magnets can attract which of the following materials?',
      answers: ['Glass', 'Iron', 'Wood', 'Plastic'],
      correctAnswerIndex: 1,
      rationale: 'Magnets attract ferromagnetic materials, such as iron.',
    },
  ],
};
