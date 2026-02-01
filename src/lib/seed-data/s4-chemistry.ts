'use client';
import type { Resource } from '@/lib/types';

export const s4Chemistry: Resource = {
  id: 's4-chemistry',
  name: 'Secondary 4 Chemistry',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is the chemical symbol for gold?',
      answers: ['Ag', 'Go', 'Gd', 'Au'],
      correctAnswerIndex: 3,
      rationale: 'The chemical symbol for gold is Au, which comes from its Latin name, "aurum".',
    },
    {
      question: 'What is the pH of a neutral substance, like pure water?',
      answers: ['0', '7', '14', '1'],
      correctAnswerIndex: 1,
      rationale:
        'The pH scale ranges from 0 to 14. A pH of 7 is neutral. A pH less than 7 is acidic, and a pH greater than 7 is basic (alkaline).',
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      correctAnswerIndex: 2,
      rationale:
        "Nitrogen makes up about 78% of the Earth's atmosphere, making it the most abundant gas. Oxygen is second, at about 21%.",
    },
    {
      question: 'What is the process of a solid turning directly into a gas, skipping the liquid phase?',
      answers: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'],
      correctAnswerIndex: 3,
      rationale:
        'Sublimation is the phase transition of a substance directly from the solid to the gas state, without passing through the liquid state. Dry ice (solid CO2) is a common example.',
    },
    {
      question: 'In a chemical equation, what does the arrow (→) represent?',
      answers: ['Equals', 'Yields or Produces', 'Is greater than', 'Is in equilibrium with'],
      correctAnswerIndex: 1,
      rationale:
        'The arrow in a chemical equation separates the reactants (on the left) from the products (on the right) and indicates the direction of the reaction.',
    },
    {
      question: 'What are isotopes?',
      answers: [
        'Atoms of the same element with different numbers of protons.',
        'Atoms of different elements with the same number of neutrons.',
        'Atoms of the same element with different numbers of neutrons.',
        'Atoms that have gained or lost electrons.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'Isotopes are variants of a particular chemical element which differ in neutron number, and consequently in nucleon number (mass number). All isotopes of a given element have the same number of protons in each atom.',
    },
  ],
};
