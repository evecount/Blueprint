'use client';
import type { Resource } from '@/lib/types';

export const advArt: Resource = {
  id: 'adv-art',
  name: 'Art & Your Career',
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
    {
      question:
        'Which art movement is characterized by its attempt to portray the subjective emotions and responses that objects and events arouse in the artist?',
      answers: ['Impressionism', 'Expressionism', 'Cubism', 'Surrealism'],
      correctAnswerIndex: 1,
      rationale:
        'Expressionism is a modernist movement where the artist seeks to express emotional experience rather than objective reality. Famous expressionists include Edvard Munch and Wassily Kandinsky.',
    },
    {
      question:
        'What is the term for a type of printmaking where the image is incised into a surface and the incised line or sunken area holds the ink?',
      answers: ['Relief printing', 'Intaglio', 'Planography', 'Stencil'],
      correctAnswerIndex: 1,
      rationale:
        'Intaglio includes techniques like etching and engraving. It is the opposite of relief printing, where the ink is on the raised surfaces.',
    },
    {
      question: 'Who painted the famous artwork "The Starry Night"?',
      answers: ['Claude Monet', 'Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci'],
      correctAnswerIndex: 2,
      rationale:
        'Vincent van Gogh, a Dutch Post-Impressionist painter, created "The Starry Night" in 1889. It is one of the most recognized paintings in the history of Western culture.',
    },
    {
      question: 'In photography, what does the term "aperture" refer to?',
      answers: [
        'The speed at which the shutter closes',
        'The sensitivity of the sensor to light',
        'The opening in the lens through which light passes',
        'The distance between the lens and the subject',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The aperture is the opening within a lens that controls the amount of light that reaches the camera sensor. It is expressed in f-numbers, like f/1.8 or f/8.',
    },
    {
      question: 'Which of these is considered a "primary color" in subtractive color models (like paint)?',
      answers: ['Green', 'Orange', 'Yellow', 'Violet'],
      correctAnswerIndex: 2,
      rationale: 'In the traditional RYB (Red, Yellow, Blue) color model, yellow is a primary color. Green and orange are secondary colors, made by mixing primary colors.',
    },
    {
      question: 'The architectural style characterized by pointed arches, ribbed vaults, and flying buttresses is known as:',
      answers: ['Romanesque', 'Baroque', 'Gothic', 'Neoclassical'],
      correctAnswerIndex: 2,
      rationale:
        'Gothic architecture flourished in Europe during the High and Late Middle Ages. It is best known for its grand cathedrals, such as Notre-Dame de Paris.',
    },
    {
      question: 'What is a "maquette"?',
      answers: [
        'A large-scale finished sculpture',
        'A type of paintbrush',
        'A small-scale model or rough draft of an unfinished sculpture',
        'A style of painting',
      ],
      correctAnswerIndex: 2,
      rationale:
        'A maquette is a small preliminary model used by sculptors to visualize and test ideas for a larger piece without incurring the cost and effort of producing the full-scale work.',
    },
    {
      question:
        'The concept of "form follows function" is a principle associated with which design movement?',
      answers: ['Art Nouveau', 'Bauhaus', 'Art Deco', 'Postmodernism'],
      correctAnswerIndex: 1,
      rationale:
        'The Bauhaus school in Germany promoted a style that sought to unify mass production with individual artistic vision, emphasizing function and simplicity.',
    },
    {
      question: 'In visual art, what is "chiaroscuro"?',
      answers: [
        'A type of clay used for sculpting',
        'The use of strong contrasts between light and dark',
        'A method of painting with watercolors',
        'A style of abstract art',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Chiaroscuro is an artistic technique that uses bold contrasts of light and shadow to model three-dimensional forms, often for dramatic effect. It was widely used by artists like Caravaggio and Rembrandt.',
    },
    {
      question: 'Which contemporary artist is famous for their large-scale "Infinity Mirror Rooms"?',
      answers: ['Banksy', 'Jeff Koons', 'Yayoi Kusama', 'Ai Weiwei'],
      correctAnswerIndex: 2,
      rationale:
        'Yayoi Kusama is a Japanese contemporary artist whose immersive installations, the "Infinity Mirror Rooms," use mirrors to create the illusion of endless, glittering space.',
    },
    {
      question:
        'What career involves restoring damaged or aged artworks to their former condition?',
      answers: ['Art Critic', 'Art Conservator', 'Art Dealer', 'Auctioneer'],
      correctAnswerIndex: 1,
      rationale:
        'Art conservators are highly skilled professionals who use a combination of art history knowledge, chemistry, and hands-on skill to preserve and repair artworks.',
    },
    {
      question:
        'The study of symbols and their interpretation in art is called:',
      answers: ['Aesthetics', 'Iconography', 'Formalism', 'Perspective'],
      correctAnswerIndex: 1,
      rationale:
        'Iconography is a branch of art history that focuses on identifying, describing, and interpreting the content of images and the symbolic meanings of the subjects depicted.',
    },
    {
      question: 'Which digital tool is most commonly used by professionals for photo editing and manipulation?',
      answers: ['Microsoft Word', 'Adobe Photoshop', 'Autodesk AutoCAD', 'Google Sheets'],
      correctAnswerIndex: 1,
      rationale:
        'Adobe Photoshop is the industry-standard software for raster graphics editing, used by photographers, graphic designers, and digital artists worldwide.',
    },
    {
      question:
        'The use of perspective in painting creates the illusion of what?',
      answers: ['Bright colors', 'Flatness', 'Three-dimensional depth', 'Abstract shapes'],
      correctAnswerIndex: 2,
      rationale:
        'Linear perspective is a system developed during the Renaissance that allows artists to represent three-dimensional space on a two-dimensional surface.',
    },
    {
      question: 'A career in "Art Therapy" uses the creative process of making art to:',
      answers: [
        'Sell paintings for a high price',
        'Decorate hospitals',
        'Improve a person\'s physical, mental, and emotional well-being',
        'Teach art history',
      ],
      correctAnswerIndex: 2,
      rationale:
        'Art therapists are trained professionals who use art-making as a therapeutic tool to help clients explore their feelings, reconcile emotional conflicts, and reduce anxiety.',
    },
  ],
};
