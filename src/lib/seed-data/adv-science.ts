'use client';
import type { Resource } from '@/lib/types';

export const advScience: Resource = {
  id: 'adv-science',
  name: 'Science & Your Career',
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
    {
        question: 'What is CRISPR-Cas9?',
        answers: [
          'A type of telescope',
          'A gene-editing tool that allows scientists to alter DNA sequences',
          'A subatomic particle',
          'A newly discovered planet',
        ],
        correctAnswerIndex: 1,
        rationale: 'CRISPR-Cas9 is a revolutionary technology that has made gene editing faster, cheaper, and more accurate. It has vast potential in medicine and biology.',
    },
    {
        question: 'According to Einstein\'s theory of special relativity, what happens to time as you approach the speed of light?',
        answers: [
          'Time speeds up',
          'Time stops completely',
          'Time slows down relative to a stationary observer',
          'Time reverses',
        ],
        correctAnswerIndex: 2,
        rationale: 'This phenomenon is known as time dilation. The faster you move through space, the slower you move through time. It\'s a core concept of modern physics.',
    },
    {
        question: 'What is the primary function of the Large Hadron Collider (LHC)?',
        answers: [
          'To generate electricity for Switzerland and France',
          'To search for extraterrestrial life',
          'To smash particles together at near-light speeds to study the fundamental components of matter',
          'To launch satellites into orbit',
        ],
        correctAnswerIndex: 2,
        rationale: 'The LHC at CERN is the world\'s largest and most powerful particle accelerator. It has been used to discover the Higgs boson and study other fundamental particles.',
    },
    {
        question: 'What is quantum entanglement?',
        answers: [
          'A type of chemical bond',
          'A phenomenon where two or more quantum particles become linked in such a way that their fates are intertwined, no matter how far apart they are',
          'The process of nuclear fusion',
          'A state of matter found only in black holes',
        ],
        correctAnswerIndex: 1,
        rationale: 'Einstein famously called it "spooky action at a distance." If you measure a property of one entangled particle, you instantly know the same property of the other, even if it\'s light-years away.',
    },
    {
        question: 'What is the "Heisenberg Uncertainty Principle"?',
        answers: [
          'The principle that energy cannot be created or destroyed',
          'A law stating that the universe is constantly expanding',
          'The principle that one cannot simultaneously know the exact position and the exact momentum of a particle',
          'A theory about the formation of black holes',
        ],
        correctAnswerIndex: 2,
        rationale: 'This is a fundamental concept in quantum mechanics. The more precisely you know a particle\'s position, the less precisely you can know its momentum, and vice-versa.',
    },
    {
        question: 'What career involves using principles of physics and materials science to design and build structures like bridges and skyscrapers?',
        answers: [
          'Marine Biologist',
          'Civil Engineer',
          'Archaeologist',
          'Chef',
        ],
        correctAnswerIndex: 1,
        rationale: 'Civil engineers are responsible for designing, building, and maintaining the infrastructure of our modern world, from roads and dams to tunnels and airports.',
    },
    {
        question: 'What role uses chemistry to develop new drugs and medical treatments?',
        answers: [
          'Medicinal Chemist',
          'Geologist',
          'Astronomer',
          'Historian',
        ],
        correctAnswerIndex: 0,
        rationale: 'Medicinal chemists work in the pharmaceutical industry to design, synthesize, and test new compounds that can be used to treat diseases.',
    },
    {
        question: 'How do mRNA vaccines (like some COVID-19 vaccines) work?',
        answers: [
          'They inject a weakened form of the virus into the body',
          'They use a harmless virus to deliver DNA instructions',
          'They provide our cells with instructions (mRNA) to make a harmless piece of the virus, triggering an immune response',
          'They use antibodies from people who have recovered from the disease',
        ],
        correctAnswerIndex: 2,
        rationale: 'mRNA vaccines teach our cells how to make a protein that triggers an immune response. This response produces antibodies, protecting us from getting infected if the real virus enters our bodies.',
    },
    {
        question: 'What is a "superconductor"?',
        answers: [
          'A material that is extremely strong',
          'A material that can conduct electricity with zero resistance, usually at very low temperatures',
          'A material that is a perfect insulator',
          'A material that is both a conductor and an insulator',
        ],
        correctAnswerIndex: 1,
        rationale: 'Superconductors are materials that have no electrical resistance when cooled below a certain critical temperature. They have potential applications in MRI machines, maglev trains, and power transmission.',
    },
    {
        question: 'What is the primary role of a forensic scientist?',
        answers: [
          'To predict the weather',
          'To study ancient fossils',
          'To collect and analyze scientific evidence during the course of a criminal investigation',
          'To design new computer chips',
        ],
        correctAnswerIndex: 2,
        rationale: 'Forensic scientists apply scientific principles and techniques to analyze physical evidence from crime scenes, helping to solve crimes and provide evidence for legal proceedings.',
    },
    {
        question: 'What is the "Doppler Effect"?',
        answers: [
          'The bending of light as it passes through a medium',
          'The change in frequency of a wave in relation to an observer who is moving relative to the wave source',
          'The process of splitting an atom',
          'The force that keeps planets in orbit',
        ],
        correctAnswerIndex: 1,
        rationale: 'The Doppler Effect is why the pitch of a siren seems to get higher as it approaches you and lower as it moves away. It applies to both sound and light waves.',
    },
    {
        question: 'A materials scientist might work to create a new alloy for what purpose?',
        answers: [
          'To write a novel',
          'To make a lighter, stronger material for airplane wings',
          'To cook a gourmet meal',
          'To compose a symphony',
        ],
        correctAnswerIndex: 1,
        rationale: 'Materials scientists study the properties of materials and how they can be modified or combined to create new materials with enhanced performance, for applications ranging from aerospace to electronics.',
    },
    {
        question: 'What process powers the Sun and other stars?',
        answers: [
          'Nuclear Fission',
          'Chemical combustion (burning)',
          'Nuclear Fusion',
          'Geothermal energy',
        ],
        correctAnswerIndex: 2,
        rationale: 'Nuclear fusion is a reaction where two or more atomic nuclei are combined to form one or more different atomic nuclei and subatomic particles. This process releases a massive amount of energy.',
    },
    {
        question: 'In computer science, what is an "algorithm"?',
        answers: [
          'A type of hardware',
          'A computer virus',
          'A step-by-step procedure or formula for solving a problem or accomplishing a task',
          'A programming language',
        ],
        correctAnswerIndex: 2,
        rationale: 'Algorithms are the foundation of computer programming. They are the logical instructions that tell a computer how to perform a task, from sorting a list to recommending a product.',
    },
    {
        question: 'What is the significance of the discovery of gravitational waves?',
        answers: [
          'It proved that the Earth is flat',
          'It allows us to travel through time',
          'It confirmed a major prediction of Einstein\'s theory of general relativity and opened a new way to observe the universe',
          'It led to the invention of the internet',
        ],
        correctAnswerIndex: 2,
        rationale: 'First detected in 2015, gravitational waves are "ripples" in spacetime caused by cataclysmic cosmic events, like the merging of black holes. They provide a completely new way to "see" the universe.',
    },
  ],
};
