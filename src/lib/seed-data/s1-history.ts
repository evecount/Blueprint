'use client';
import type { Resource } from '@/lib/types';

export const s1History: Resource = {
  id: 's1-history',
  name: 'Secondary 1 History',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Where did the ancient Olympic Games originate?',
      answers: ['Rome', 'Egypt', 'Greece', 'China'],
      correctAnswerIndex: 2,
      rationale:
        'The ancient Olympic Games were held in Olympia, Greece, from the 8th century BC to the 4th century AD.',
    },
    {
      question: 'Which ancient civilization is famous for its pyramids?',
      answers: ['Ancient Rome', 'Ancient Greece', 'Ancient Egypt', 'Mesopotamia'],
      correctAnswerIndex: 2,
      rationale:
        'The ancient Egyptians built massive pyramids as tombs for their pharaohs and queens. The most famous are the Pyramids of Giza.',
    },
    {
      question: 'The historical period characterized by the use of stone tools is known as the...',
      answers: ['Iron Age', 'Bronze Age', 'Stone Age', 'Information Age'],
      correctAnswerIndex: 2,
      rationale:
        'The Stone Age is a broad prehistoric period during which stone was widely used to make tools with an edge, a point, or a percussion surface.',
    },
    {
      question: 'What was the main purpose of the Great Wall of China?',
      answers: [
        'To be a tourist attraction',
        'To mark a border',
        'To protect against invasions from northern nomadic groups',
        'To serve as a major road',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The Great Wall was built over centuries primarily as a defensive barrier to protect Chinese states and empires against raids and invasions from various nomadic groups of the Eurasian Steppe.',
    },
    {
      question: 'Who was the founder of the Mongol Empire, one of the largest empires in history?',
      answers: ['Kublai Khan', 'Marco Polo', 'Genghis Khan', 'Attila the Hun'],
      correctAnswerIndex: 2,
      rationale:
        'Genghis Khan, born Temüjin, was the founder and first Great Khan of the Mongol Empire.',
    },
    {
      question: 'The Renaissance was a period of "rebirth" in Europe. In which country did it begin?',
      answers: ['France', 'England', 'Spain', 'Italy'],
      correctAnswerIndex: 3,
      rationale:
        'The Renaissance began in Florence, Italy, a place with a rich cultural history where wealthy citizens could afford to support budding artists.',
    },
  ],
};
