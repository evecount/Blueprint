'use client';
import type { Resource } from '@/lib/types';

export const advArt: Resource = {
  id: 'adv-art',
  name: 'Just Art Stuff',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question:
        'Philosophy teaches you to analyze arguments and think critically. How does this skill help a lawyer make a better case?',
      answers: [
        'It helps them run faster.',
        'It helps them build stronger, more logical arguments.',
        'It helps them paint better pictures.',
        'It has no use.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'The study of philosophy trains the mind in logic and critical thinking, which are essential skills for a lawyer to construct persuasive arguments and deconstruct weak ones.',
    },
    {
      question:
        'Art historians understand the context behind art. What job involves selecting and arranging art for a museum exhibit?',
      answers: ['Engineer', 'Museum Curator', 'Accountant', 'Scientist'],
      correctAnswerIndex: 1,
      rationale:
        'Museum curators use their deep knowledge of art history and theory to select artworks and present them in a compelling and educational way for the public.',
    },
    {
      question:
        'Design thinking, a process from art, is used by companies like Apple to create user-friendly products. What career focuses on making technology easier to use?',
      answers: ['UX/UI Designer', 'Botanist', 'Geographer', 'Astrologer'],
      correctAnswerIndex: 0,
      rationale:
        'User Experience (UX) and User Interface (UI) designers apply principles of design thinking to create products that are intuitive, effective, and enjoyable for people to use.',
    },
    {
      question: 'Graphic designers use color and typography to communicate ideas for brands. What field combines art with marketing?',
      answers: ['Medicine', 'Brand Strategy', 'Construction', 'Farming'],
      correctAnswerIndex: 1,
      rationale:
        'Graphic designers and brand strategists work together to create a cohesive visual identity for a company, using art to communicate its values and attract customers.',
    },
    {
      question: 'Filmmakers use visual storytelling to create emotional impact. What role is responsible for the overall artistic look and feel of a movie?',
      answers: ['The Caterer', 'The Film Director', 'The Accountant', 'The Driver'],
      correctAnswerIndex: 1,
      rationale:
        'The film director is responsible for overseeing the artistic and dramatic aspects of a film, turning the script into a finished visual and auditory experience.',
    },
    {
      question:
        'The principles of aesthetics help create products that are both functional and beautiful. What career blends engineering with art to design things like cars and phones?',
      answers: ['Industrial Designer', 'Sociologist', 'Poet', 'Dramatist'],
      correctAnswerIndex: 0,
      rationale:
        'Industrial designers are responsible for the conceptual design and development of manufactured products, combining art, business, and engineering to make products that people use every day.',
    },
    {
      question: 'Public art can transform a city space and reflect its culture. What job involves integrating art into public environments?',
      answers: ['Veterinarian', 'Urban Planner', 'Pharmacist', 'Dentist'],
      correctAnswerIndex: 1,
      rationale:
        'Urban planners design the layout of cities and towns. A key part of their work is deciding how to incorporate public spaces, parks, and art to create vibrant and livable communities.',
    },
    {
      question:
        'Creative writing skills are essential for crafting compelling stories in advertising. What career uses storytelling to sell products?',
      answers: ['Copywriter', 'Mathematician', 'Physicist', 'Chemist'],
      correctAnswerIndex: 0,
      rationale:
        'Copywriters are professional writers who craft the text (or "copy") for advertisements, websites, and marketing materials, using storytelling to connect with consumers.',
    },
    {
      question:
        "Music theory is used to compose soundtracks for video games that adapt to a player's actions. What job creates the audio experience for games?",
      answers: ['Judge', 'Police Officer', 'Game Audio Designer', 'Pilot'],
      correctAnswerIndex: 2,
      rationale:
        'Game audio designers and composers create all the sound for a video game, including the music, sound effects, and dialogue, to make the experience more immersive.',
    },
    {
      question:
        'Ethics, a branch of philosophy, guides the development of artificial intelligence to ensure it is fair. What emerging field combines humanities with technology?',
      answers: ['AI Ethicist', 'Chef', 'Mechanic', 'Athlete'],
      correctAnswerIndex: 0,
      rationale:
        'AI Ethicists are specialists who help guide the design and deployment of artificial intelligence systems to ensure they are safe, unbiased, and beneficial for society.',
    },
  ],
};
