'use client';
import type { Resource } from '@/lib/types';

export const advScience: Resource = {
  id: 'adv-science',
  name: 'Just Science Stuff',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Why is the sky blue?',
      answers: [
        'Because the ocean is blue and reflects onto the sky.',
        'Because of a phenomenon called Rayleigh scattering.',
        'Because the sun emits blue light.',
        'Because of pollutants in the air.',
      ],
      correctAnswerIndex: 1,
      rationale:
        "The sky appears blue because of Rayleigh scattering. The Earth's atmosphere scatters shorter-wavelength blue light from the sun more effectively than longer-wavelength red light.",
    },
    {
      question: "What was the significance of Alexander Fleming's discovery of penicillin?",
      answers: [
        'It was the first form of plastic.',
        'It led to the development of the first atomic bomb.',
        "It was the world's first mass-produced antibiotic.",
        'It was a new type of fuel source.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The discovery of penicillin in 1928 revolutionized medicine by introducing the age of antibiotics, which are drugs that can kill or prevent the growth of bacteria, saving millions of lives.',
    },
    {
      question: 'How does the Global Positioning System (GPS) work?',
      answers: [
        'By using ground-based radio towers.',
        'By communicating with a network of orbiting satellites.',
        "By using magnetic fields from the Earth's core.",
        'By analyzing star positions.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'GPS works through a system called trilateration. A receiver on Earth measures the time it takes for signals to arrive from multiple satellites in orbit. By knowing the exact position of these satellites, the receiver can calculate its own location.',
    },
    {
      question: 'What is the "greenhouse effect"?',
      answers: [
        'The process plants use to create food.',
        'A phenomenon where certain gases in the atmosphere trap heat.',
        'The reflection of sunlight off polar ice caps.',
        'The staining of glass on old greenhouses.',
      ],
      correctAnswerIndex: 1,
      rationale:
        "The greenhouse effect is a natural process where gases like carbon dioxide and methane in the Earth's atmosphere trap some of the sun's energy, keeping the planet warm enough for life. However, human activities have increased the concentration of these gases, leading to global warming.",
    },
    {
      question: 'What is "dark matter" in cosmology?',
      answers: [
        'A type of black hole.',
        'Physical matter that does not have color.',
        'A type of anti-matter.',
        'A hypothetical form of matter that does not emit or reflect light.',
      ],
      correctAnswerIndex: 3,
      rationale:
        'Dark matter is a mysterious, non-luminous material that is believed to make up about 27% of the universe. It does not interact with light, making it invisible, but its existence is inferred from its gravitational effects on visible matter, such as galaxies.',
    },
    {
      question:
        'The microchips in your phone are made of semiconductors. What kind of engineer designs and fabricates these tiny components?',
      answers: ['Mechanical Engineer', 'Chemical Engineer', 'Electrical Engineer', 'Civil Engineer'],
      correctAnswerIndex: 2,
      rationale:
        'Electrical Engineers and Materials Scientists design and manufacture semiconductors, the foundation of all modern electronics.',
    },
    {
      question:
        'To help protect our planet, an environmental scientist might study ecosystems to develop new conservation policies. What is one career path this could lead to?',
      answers: ['Chef', 'Musician', 'Environmental Policy Advisor', 'Software Developer'],
      correctAnswerIndex: 2,
      rationale:
        'Environmental scientists provide the data and analysis that governments and organizations use to create effective policies for conservation, pollution control, and sustainable development.',
    },
    {
      question:
        'Biotechnology uses living organisms to create products like vaccines. What kind of job involves editing genes to develop new medicines?',
      answers: ['Architect', 'Geneticist', 'Accountant', 'Librarian'],
      correctAnswerIndex: 1,
      rationale:
        'Geneticists and Biotechnologists work at the genetic level, manipulating DNA and other cellular components to develop new medical treatments, more resilient crops, and biofuels.',
    },
    {
      question:
        "Aerospace engineers apply physics to design spacecraft. What is a major challenge they solve to launch a rocket into space?",
      answers: [
        'Choosing the best color',
        "Overcoming Earth's gravity",
        'Designing the logo',
        'Writing the user manual',
      ],
      correctAnswerIndex: 1,
      rationale:
        "A primary challenge for aerospace engineers is designing engines and structures powerful and light enough to overcome Earth's immense gravitational pull and escape the atmosphere.",
    },
    {
      question:
        'Data scientists analyze huge datasets from satellites to model climate change. How does their work influence global decisions?',
      answers: [
        'It helps them choose which movies to watch.',
        'It has no influence.',
        'It provides evidence for policy changes and predicts future impacts.',
        'It helps design better video games.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'By analyzing vast amounts of climate data, data scientists create models that show the effects of climate change. This scientific evidence is crucial for convincing governments and international bodies to take action.',
    },
  ],
};
