'use client';
import type { Resource } from '@/lib/types';

export const s3Physics: Resource = {
  id: 's3-physics',
  name: 'Secondary 3 Physics',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question:
        "According to Newton's Second Law of Motion, what is the relationship between force (F), mass (m), and acceleration (a)?",
      answers: ['F = m / a', 'F = a / m', 'F = m * a', 'F = m + a'],
      correctAnswerIndex: 2,
      rationale:
        "Newton's Second Law states that the force acting on an object is equal to the mass of that object times its acceleration (F = ma). This fundamental principle connects force, mass, and motion.",
    },
    {
      question: 'What is the unit of electrical resistance?',
      answers: ['Volt', 'Ampere', 'Watt', 'Ohm'],
      correctAnswerIndex: 3,
      rationale:
        'The Ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Simon Ohm.',
    },
    {
      question: 'Which type of energy is stored in a stretched rubber band?',
      answers: ['Kinetic Energy', 'Thermal Energy', 'Potential Energy', 'Chemical Energy'],
      correctAnswerIndex: 2,
      rationale:
        'Potential energy is stored energy. In a stretched rubber band, it is specifically elastic potential energy, stored as a result of applying a force to deform an elastic object.',
    },
    {
      question:
        "The principle that for every action, there is an equal and opposite reaction is which of Newton's Laws?",
      answers: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
      correctAnswerIndex: 2,
      rationale:
        "Newton's Third Law of Motion describes the interaction between two objects. It states that all forces between two objects exist in equal magnitude and opposite direction.",
    },
    {
      question: 'What is density?',
      answers: [
        'The amount of space an object takes up.',
        'The amount of matter in an object.',
        'The mass of an object per unit volume.',
        'The weight of an object.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'Density is a measure of how much mass is contained in a given unit volume (density = mass/volume). It describes how "compact" a substance is.',
    },
    {
      question: 'Sound waves travel fastest through which medium?',
      answers: ['Solids', 'Liquids', 'Gases', 'Vacuum'],
      correctAnswerIndex: 0,
      rationale:
        'Sound travels as vibrations through a medium. Because the particles in a solid are packed much more closely together than in liquids or gases, sound waves can travel through them more quickly.',
    },
  ],
};
