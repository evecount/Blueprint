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
      rationale: 'To show there is more than one, we usually add an "s" to the end. One apple, two apples.',
    },
    {
      question: 'Choose the correct word: The dog ___ running.',
      answers: ['are', 'is', 'am', 'be'],
      correctAnswerIndex: 1,
      rationale: 'Because there is only one dog, we use the word "is". For more than one, we would use "are".',
    },
    {
      question: 'Which of these is an action word?',
      answers: ['Happy', 'Table', 'Jump', 'Green'],
      correctAnswerIndex: 2,
      rationale:
        '"Jump" is something you can do, so it is an action word (a verb). The other words are used to describe things.',
    },
    {
      question: 'What is the opposite of "hot"?',
      answers: ['Warm', 'Cold', 'Spicy', 'Sunny'],
      correctAnswerIndex: 1,
      rationale: 'The opposite of "hot" is "cold". They are two different feelings of temperature.',
    },
    {
      question: 'Which punctuation mark do you use at the end of a question?',
      answers: ['. (Period)', ', (Comma)', '! (Exclamation Mark)', '? (Question Mark)'],
      correctAnswerIndex: 3,
      rationale: 'A question mark (?) is always used at the end when you are asking something.',
    },
    {
        question: 'I have ___ red ball.',
        answers: ['a', 'an', 'the', 'some'],
        correctAnswerIndex: 0,
        rationale: 'We use "a" before words that do not start with a vowel sound (a, e, i, o, u). The word "red" starts with an "r" sound.'
    },
    {
        question: 'Which of these is a naming word for a thing?',
        answers: ['Run', 'Big', 'Book', 'Quickly'],
        correctAnswerIndex: 2,
        rationale: 'A "book" is the name of a thing. "Run" is an action, and "big" is a describing word.'
    },
    {
        question: 'The birds ___ flying in the sky.',
        answers: ['is', 'am', 'are', 'was'],
        correctAnswerIndex: 2,
        rationale: 'Because there is more than one bird ("birds"), we use the word "are". If there was only one bird, we would use "is".'
    },
    {
        question: 'Which letter comes after "G" in the alphabet?',
        answers: ['F', 'E', 'H', 'I'],
        correctAnswerIndex: 2,
        rationale: 'If you say the alphabet, the part that goes F, G, H, I shows that H comes right after G.'
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
        rationale: 'We use the word "on" to show that the cat is on top of the mat.'
    },
    {
        question: 'What do you say when you meet someone in the morning?',
        answers: ['Good night', 'Good evening', 'Goodbye', 'Good morning'],
        correctAnswerIndex: 3,
        rationale: '"Good morning" is what we say to greet people in the morning time.'
    },
    {
        question: 'Which word means "to look at something"?',
        answers: ['Sing', 'Eat', 'See', 'Sleep'],
        correctAnswerIndex: 2,
        rationale: 'The word "see" is the action of using your eyes to look at things.'
    },
    {
        question: 'A baby dog is called a ___',
        answers: ['kitten', 'puppy', 'cub', 'chick'],
        correctAnswerIndex: 1,
        rationale: 'A young dog is called a puppy. A "kitten" is a baby cat.'
    },
    {
        question: 'Which of these is a color?',
        answers: ['Circle', 'Soft', 'Blue', 'Jump'],
        correctAnswerIndex: 2,
        rationale: '"Blue" is a color, like the color of the sky. The other words are a shape, a feeling, and an action.'
    },
    {
        question: 'How do you spell the number 3?',
        answers: ['Tree', 'Three', 'Thre', 'Free'],
        correctAnswerIndex: 1,
        rationale: 'The correct way to write the number 3 in words is T-H-R-E-E.'
    },
    {
        question: 'He ___ to school every day.',
        answers: ['go', 'goes', 'went', 'going'],
        correctAnswerIndex: 1,
        rationale: 'When we talk about one person like "he" doing something now or every day, we often add an -s or -es. So, we say "he goes".'
    },
    {
        question: 'What do you use to write on a paper?',
        answers: ['A spoon', 'A fork', 'A pencil', 'A plate'],
        correctAnswerIndex: 2,
        rationale: 'A pencil is a tool we use for writing and drawing on paper.'
    },
    {
        question: 'The sun is very ___.',
        answers: ['cold', 'dark', 'bright', 'wet'],
        correctAnswerIndex: 2,
        rationale: 'The sun gives off a lot of light, so we say it is "bright".'
    },
    {
        question: 'A ___ has four legs and says "meow".',
        answers: ['dog', 'cat', 'bird', 'fish'],
        correctAnswerIndex: 1,
        rationale: 'A cat is a common pet that is known for making a "meow" sound.'
    },
    {
        question: "Which sentence sounds correct when you say it?",
        answers: ['I like to playing.', 'I like playing.', 'I likes to play.', 'I am liking to play.'],
        correctAnswerIndex: 1,
        rationale: 'After the word "like", we can use a word that ends in "-ing". The sentence "I like playing" sounds the most correct.'
    },
    {
        question: 'The opposite of "fast" is ___',
        answers: ['quick', 'run', 'slow', 'stop'],
        correctAnswerIndex: 2,
        rationale: '"Slow" means the opposite of moving fast. A turtle is slow, but a cheetah is fast.'
    },
    {
        question: 'We use our ___ to hear sound.',
        answers: ['eyes', 'nose', 'hands', 'ears'],
        correctAnswerIndex: 3,
        rationale: 'Our ears are the parts of our body that let us hear all the sounds around us.'
    },
    {
        question: 'What is the last letter of the alphabet?',
        answers: ['A', 'X', 'Y', 'Z'],
        correctAnswerIndex: 3,
        rationale: 'The English alphabet starts with A and the very last letter is Z.'
    },
  ],
};
