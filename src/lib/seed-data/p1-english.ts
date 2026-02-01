'use client';
import type { Resource } from '@/lib/types';

export const p1English: Resource = {
  id: 'p1-english',
  name: 'Primary 1 English',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Which word rhymes with "cat"?',
      answers: ['Dog', 'Sun', 'Hat', 'Pin'],
      correctAnswerIndex: 2,
      rationale:
        'Words that rhyme have the same ending sound. "Cat" and "hat" both end with the "-at" sound.',
    },
    {
      question: 'What is the plural of "apple"?',
      answers: ['Apples', 'Apple', 'Appless', 'An apple'],
      correctAnswerIndex: 0,
      rationale: 'To make most nouns plural, we add an "s" to the end. One apple, two apples.',
    },
    {
      question: 'Choose the correct sentence: The dog ___ running.',
      answers: ['are', 'is', 'am', 'be'],
      correctAnswerIndex: 1,
      rationale: 'Since "dog" is a singular noun, we use the singular verb "is".',
    },
    {
      question: 'Which of these is a verb (action word)?',
      answers: ['Happy', 'Table', 'Jump', 'Green'],
      correctAnswerIndex: 2,
      rationale:
        '"Jump" is an action word, or a verb. "Happy" and "green" are adjectives, and "table" is a noun.',
    },
    {
      question: 'What is the opposite of "hot"?',
      answers: ['Warm', 'Cold', 'Spicy', 'Sunny'],
      correctAnswerIndex: 1,
      rationale: 'The opposite of "hot" is "cold". They are contrasting temperatures.',
    },
    {
      question: 'Which punctuation mark do you use at the end of a question?',
      answers: ['. (Period)', ', (Comma)', '! (Exclamation Mark)', '? (Question Mark)'],
      correctAnswerIndex: 3,
      rationale: 'A question mark (?) is used to indicate a direct question.',
    },
    {
        question: 'I have ___ red ball.',
        answers: ['a', 'an', 'the', 'some'],
        correctAnswerIndex: 0,
        rationale: 'We use "a" before words that start with a consonant sound. "Red" starts with the /r/ sound.'
    },
    {
        question: 'Which of these is a noun (naming word)?',
        answers: ['Run', 'Big', 'Book', 'Quickly'],
        correctAnswerIndex: 2,
        rationale: 'A noun is a word that names a person, place, or thing. "Book" is a thing.'
    },
    {
        question: 'The birds ___ flying in the sky.',
        answers: ['is', 'am', 'are', 'was'],
        correctAnswerIndex: 2,
        rationale: 'Since "birds" is a plural noun (more than one), we use the plural verb "are".'
    },
    {
        question: 'Which letter comes after "G" in the alphabet?',
        answers: ['F', 'E', 'H', 'I'],
        correctAnswerIndex: 2,
        rationale: 'The order of the alphabet is F, G, H, I. So, H comes after G.'
    },
    {
        question: 'What is the small word for "not big"?',
        answers: ['Large', 'Small', 'Tiny', 'Huge'],
        correctAnswerIndex: 1,
        rationale: 'The word "small" is the direct opposite of "big".'
    },
    {
        question: 'The cat is sitting ___ the mat.',
        answers: ['in', 'on', 'under', 'with'],
        correctAnswerIndex: 1,
        rationale: '"On" is a preposition that means something is in a position that is physically touching, covering, or attached to something else.'
    },
    {
        question: 'What do you say when you meet someone in the morning?',
        answers: ['Good night', 'Good evening', 'Goodbye', 'Good morning'],
        correctAnswerIndex: 3,
        rationale: '"Good morning" is the standard greeting used from sunrise until noon.'
    },
    {
        question: 'Which word means "to look at something"?',
        answers: ['Sing', 'Eat', 'See', 'Sleep'],
        correctAnswerIndex: 2,
        rationale: 'The verb "see" means to perceive with the eyes.'
    },
    {
        question: 'A baby dog is called a ___',
        answers: ['kitten', 'puppy', 'cub', 'chick'],
        correctAnswerIndex: 1,
        rationale: 'A young dog is called a puppy. A kitten is a young cat.'
    },
    {
        question: 'Which of these is a color?',
        answers: ['Circle', 'Soft', 'Blue', 'Jump'],
        correctAnswerIndex: 2,
        rationale: '"Blue" is a color. The others are a shape, an adjective, and a verb.'
    },
    {
        question: 'How do you spell the number 3?',
        answers: ['Tree', 'Three', 'Thre', 'Free'],
        correctAnswerIndex: 1,
        rationale: 'The correct spelling for the number 3 is T-H-R-E-E.'
    },
    {
        question: 'He ___ to school every day.',
        answers: ['go', 'goes', 'went', 'going'],
        correctAnswerIndex: 1,
        rationale: 'For a singular subject like "he" in the present tense, we add "-es" to the verb "go", making it "goes".'
    },
    {
        question: 'What do you use to write on a paper?',
        answers: ['A spoon', 'A fork', 'A pencil', 'A plate'],
        correctAnswerIndex: 2,
        rationale: 'A pencil is a common writing utensil used on paper.'
    },
    {
        question: 'The sun is very ___.',
        answers: ['cold', 'dark', 'bright', 'wet'],
        correctAnswerIndex: 2,
        rationale: 'The sun gives off a lot of light, so we describe it as "bright".'
    },
    {
        question: 'A ___ has four legs and says "meow".',
        answers: ['dog', 'cat', 'bird', 'fish'],
        correctAnswerIndex: 1,
        rationale: 'A cat is a common pet known for having four legs and making a "meow" sound.'
    },
    {
        question: 'Which sentence is correct?',
        answers: ['I like to playing.', 'I like playing.', 'I likes to play.', 'I am liking to play.'],
        correctAnswerIndex: 1,
        rationale: 'After the verb "like", we can use the "-ing" form of the next verb. So, "I like playing" is correct.'
    },
    {
        question: 'The opposite of "fast" is ___',
        answers: ['quick', 'run', 'slow', 'stop'],
        correctAnswerIndex: 2,
        rationale: '"Slow" is the antonym for "fast". They describe opposite speeds.'
    },
    {
        question: 'We use our ___ to hear.',
        answers: ['eyes', 'nose', 'hands', 'ears'],
        correctAnswerIndex: 3,
        rationale: 'Ears are the sense organs responsible for hearing.'
    },
    {
        question: 'What is the last letter of the alphabet?',
        answers: ['A', 'X', 'Y', 'Z'],
        correctAnswerIndex: 3,
        rationale: 'The English alphabet ends with the letter Z.'
    },
  ],
};
