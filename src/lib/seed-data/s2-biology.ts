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
    {
        question: 'Which of these best describes a tissue in a multicellular organism?',
        answers: ['A single cell', 'A group of different organs working together', 'A group of similar cells performing a specific function', 'A complete living being'],
        correctAnswerIndex: 2,
        rationale: 'The hierarchy of biological organization is cells -> tissues -> organs -> organ systems -> organism. For example, muscle tissue is made of many muscle cells.'
    },
    {
        question: 'What is the primary function of red blood cells?',
        answers: ['To fight infections', 'To transport oxygen', 'To help blood clot', 'To digest nutrients'],
        correctAnswerIndex: 1,
        rationale: 'Red blood cells contain a protein called haemoglobin, which binds to oxygen in the lungs and carries it to all other parts of the body.'
    },
    {
        question: 'What is the main role of the roots of a plant?',
        answers: ['To produce flowers', 'To make food through photosynthesis', 'To absorb water and anchor the plant', 'To release oxygen'],
        correctAnswerIndex: 2,
        rationale: 'The roots have two main functions: to anchor the plant firmly in the ground and to absorb water and mineral salts from the soil.'
    },
    {
        question: 'In the food chain: Grass -> Rabbit -> Fox, what is the rabbit?',
        answers: ['Producer', 'Primary consumer', 'Secondary consumer', 'Decomposer'],
        correctAnswerIndex: 1,
        rationale: 'The grass is the producer. The rabbit eats the grass, making it the primary consumer (a herbivore). The fox eats the rabbit, making it the secondary consumer.'
    },
    {
        question: 'The process of breaking down food into smaller molecules that can be absorbed by the body is called:',
        answers: ['Respiration', 'Circulation', 'Digestion', 'Excretion'],
        correctAnswerIndex: 2,
        rationale: 'Digestion is the process that occurs in the digestive system (e.g., stomach, intestines) to break down complex food substances into simple, soluble molecules.'
    },
    {
        question: 'Which part of the flower develops into a fruit after fertilisation?',
        answers: ['Petal', 'Sepal', 'Stamen', 'Ovary'],
        correctAnswerIndex: 3,
        rationale: 'After fertilisation, the ovules inside the ovary develop into seeds, and the ovary wall develops into the fruit, which protects the seeds.'
    },
    {
        question: 'What is a habitat?',
        answers: ['The role an organism plays in its community.', 'A group of organisms of the same species.', 'The natural home or environment of an animal, plant, or other organism.', 'A community of interacting organisms.'],
        correctAnswerIndex: 2,
        rationale: 'A habitat is the specific place where an organism lives, which provides it with the food, water, shelter, and space it needs to survive.'
    },
    {
        question: 'Which blood vessels carry blood away from the heart?',
        answers: ['Veins', 'Arteries', 'Capillaries', 'Ventricles'],
        correctAnswerIndex: 1,
        rationale: 'Arteries are the muscular tubes that carry oxygenated blood away from the heart to the rest of the body. Veins carry deoxygenated blood back to the heart.'
    },
    {
        question: 'What is the "control" or "control group" in a scientific experiment?',
        answers: ['The variable that is measured.', 'The variable that is changed by the scientist.', 'The group that is not exposed to the experimental treatment, used for comparison.', 'The final result of the experiment.'],
        correctAnswerIndex: 2,
        rationale: 'A control group is essential for a fair test. It provides a baseline against which the experimental group (the one being tested) can be compared.'
    },
    {
        question: 'What is the green pigment in plant leaves that captures light energy for photosynthesis?',
        answers: ['Chloroplast', 'Cytoplasm', 'Chlorophyll', 'Cellulose'],
        correctAnswerIndex: 2,
        rationale: 'Chlorophyll is the pigment that gives plants their green color. It is located in the chloroplasts and is vital for absorbing light energy.'
    },
    {
        question: 'The process of a caterpillar transforming into a butterfly is an example of:',
        answers: ['Growth', 'Reproduction', 'Metamorphosis', 'Respiration'],
        correctAnswerIndex: 2,
        rationale: 'Metamorphosis is a profound transformation from one stage of life to another, such as a larva into an adult form.'
    },
    {
        question: 'Where does the digestion of carbohydrates begin in the human body?',
        answers: ['Stomach', 'Small intestine', 'Mouth', 'Large intestine'],
        correctAnswerIndex: 2,
        rationale: 'Digestion of carbohydrates starts in the mouth with the action of an enzyme called amylase found in saliva.'
    },
    {
        question: 'Which of the following is a function of the human skeleton?',
        answers: ['To produce hormones', 'To transport oxygen', 'To protect vital organs', 'To break down food'],
        correctAnswerIndex: 2,
        rationale: 'The skeleton serves several functions, including providing a protective cage for vital organs like the heart, lungs, and brain (protected by the skull).'
    },
    {
        question: 'What is pollination?',
        answers: ['The process of a seed growing into a plant.', 'The transfer of pollen from the anther to the stigma of a flower.', 'The fusion of male and female gametes.', 'The process of a plant making food.'],
        correctAnswerIndex: 1,
        rationale: 'Pollination is a crucial step in the reproduction of flowering plants. It can be carried out by wind, water, or animals like bees and birds.'
    },
    {
        question: 'Which term describes an organism that eats both plants and animals?',
        answers: ['Herbivore', 'Carnivore', 'Producer', 'Omnivore'],
        correctAnswerIndex: 3,
        rationale: 'Omnivores, like humans and bears, have a diet consisting of both plant and animal matter. Herbivores eat only plants, and carnivores eat only animals.'
    },
    {
        question: 'What is the main function of white blood cells?',
        answers: ['To transport carbon dioxide', 'To carry oxygen', 'To fight infection and disease', 'To help blood clot'],
        correctAnswerIndex: 2,
        rationale: 'White blood cells are a key component of the body\'s immune system. They identify and destroy pathogens like bacteria and viruses.'
    },
    {
        question: 'How do fish breathe underwater?',
        answers: ['They hold their breath for a long time.', 'They absorb oxygen through their skin.', 'They come to the surface for air.', 'They use gills to extract dissolved oxygen from the water.'],
        correctAnswerIndex: 3,
        rationale: 'Gills are specialized respiratory organs that allow fish to take in oxygen from the water and release carbon dioxide.'
    },
    {
        question: 'A trait that helps an organism blend in with its surroundings is called:',
        answers: ['Mimicry', 'Camouflage', 'Hibernation', 'Migration'],
        correctAnswerIndex: 1,
        rationale: 'Camouflage is an adaptation that allows animals to be less visible to predators or prey by blending in with their environment.'
    },
    {
        question: 'Which organ in the human body is primarily responsible for filtering waste from the blood to produce urine?',
        answers: ['Liver', 'Stomach', 'Lungs', 'Kidneys'],
        correctAnswerIndex: 3,
        rationale: 'The kidneys are the main organs of the urinary system. They filter waste products from the blood and regulate water and salt balance.'
    }
  ],
};
