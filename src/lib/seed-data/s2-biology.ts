'use client';
import type { Resource } from '@/lib/types';

export const s2Biology: Resource = {
  id: 's2-biology',
  name: 'Secondary 2 Biology',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is the function of the mitochondria in a cell?',
      answers: [
        'To store water',
        'To control cell activities',
        'To generate energy (ATP)',
        'To provide structural support',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The mitochondrion is known as the powerhouse of the cell. It generates most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.',
    },
    {
      question: 'Which system in the human body is responsible for pumping blood?',
      answers: ['Respiratory System', 'Nervous System', 'Digestive System', 'Circulatory System'],
      correctAnswerIndex: 3,
      rationale:
        'The circulatory system, which includes the heart, blood, and blood vessels, is responsible for pumping and circulating blood throughout the body.',
    },
    {
      question: 'Which of these is a key difference between a plant cell and an animal cell?',
      answers: [
        'Animal cells have a nucleus, but plant cells do not.',
        'Plant cells have a cell wall, but animal cells do not.',
        'Animal cells have mitochondria, but plant cells do not.',
        'Plant cells are always smaller than animal cells.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Plant cells have a rigid cell wall outside the cell membrane, which provides structural support. Animal cells lack this feature.',
    },
    {
      question:
        'What is the process by which organisms better adapted to their environment tend to survive and produce more offspring?',
      answers: ['Genetics', 'Evolution', 'Natural Selection', 'Adaptation'],
      correctAnswerIndex: 2,
      rationale:
        'Natural selection is the main mechanism of evolution, where traits that enhance survival and reproduction become more common in successive generations.',
    },
    {
      question: 'Which gas do humans exhale during respiration?',
      answers: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswerIndex: 2,
      rationale: 'During respiration, humans take in oxygen and release carbon dioxide as a waste product.',
    },
    {
      question: 'What is a gene?',
      answers: [
        'A type of cell',
        'A segment of DNA that codes for a specific trait',
        'A protein',
        'An entire chromosome',
      ],
      correctAnswerIndex: 1,
      rationale:
        'A gene is the basic physical and functional unit of heredity. Genes are made up of DNA and act as instructions to make molecules called proteins.',
    },
  ],
};
