'use client';
import type { Resource } from '@/lib/types';

export const p3Science: Resource = {
  id: 'p3-science',
  name: 'Primary 3 Science',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is the first stage in the life cycle of a butterfly?',
      answers: ['Pupa', 'Egg', 'Caterpillar', 'Adult'],
      correctAnswerIndex: 1,
      rationale:
        'The life cycle of a butterfly begins with an egg, which then hatches into a larva (caterpillar).',
    },
    {
      question: 'Which part of a plant absorbs water and nutrients from the soil?',
      answers: ['Leaves', 'Stem', 'Flower', 'Roots'],
      correctAnswerIndex: 3,
      rationale:
        'The roots anchor the plant and are responsible for absorbing water and essential nutrients from the soil.',
    },
    {
      question: 'Which of these is NOT a living thing?',
      answers: ['A tree', 'A rock', 'A bird', 'A fish'],
      correctAnswerIndex: 1,
      rationale:
        'A rock does not grow, breathe, or reproduce, which are characteristics of living things.',
    },
    {
      question: 'Which of these materials is waterproof?',
      answers: ['Paper', 'Fabric', 'Plastic', 'Wood'],
      correctAnswerIndex: 2,
      rationale: 'Plastic does not allow water to pass through it, making it waterproof.',
    },
    {
      question: 'What do we call animals that only eat plants?',
      answers: ['Carnivores', 'Omnivores', 'Herbivores', 'Decomposers'],
      correctAnswerIndex: 2,
      rationale: 'Herbivores are animals whose primary food source is plant-based.',
    },
    {
      question: 'Magnets can attract which of the following materials?',
      answers: ['Glass', 'Iron', 'Wood', 'Plastic'],
      correctAnswerIndex: 1,
      rationale: 'Magnets attract ferromagnetic materials, such as iron.',
    },
    {
        question: 'What are the three states of matter?',
        answers: ['Hot, Cold, Warm', 'Hard, Soft, Spongy', 'Solid, Liquid, Gas', 'Light, Dark, Bright'],
        correctAnswerIndex: 2,
        rationale: 'The three common states of matter found on Earth are solid (like ice), liquid (like water), and gas (like steam).'
    },
    {
        question: 'Which part of the plant makes food through photosynthesis?',
        answers: ['Roots', 'Stem', 'Flower', 'Leaves'],
        correctAnswerIndex: 3,
        rationale: 'The leaves contain chlorophyll and are the primary site for photosynthesis, the process of making food using sunlight.'
    },
    {
        question: 'Which of these animals is a mammal?',
        answers: ['Frog', 'Snake', 'Dolphin', 'Eagle'],
        correctAnswerIndex: 2,
        rationale: 'Dolphins are mammals. They are warm-blooded, breathe air with lungs, and give birth to live young which they feed with milk.'
    },
    {
        question: 'What is the function of the stem in a plant?',
        answers: ['To make seeds', 'To absorb sunlight', 'To hold the plant up and transport water', 'To attract insects'],
        correctAnswerIndex: 2,
        rationale: 'The stem provides support to the plant, holding the leaves, flowers, and fruits. It also contains tubes (xylem and phloem) that transport water and nutrients.'
    },
    {
        question: 'What is the process of a liquid turning into a gas called?',
        answers: ['Condensation', 'Freezing', 'Melting', 'Evaporation'],
        correctAnswerIndex: 3,
        rationale: 'Evaporation is the process where a liquid becomes a gas or vapor. For example, a puddle of water drying up in the sun.'
    },
    {
        question: 'Which of these is a source of light?',
        answers: ['The Moon', 'A mirror', 'The Sun', 'A book'],
        correctAnswerIndex: 2,
        rationale: 'The Sun is a star that produces its own light. The Moon reflects light from the Sun but does not create its own.'
    },
    {
        question: 'What is the main function of the human lungs?',
        answers: ['To pump blood', 'To digest food', 'To help us breathe', 'To help us move'],
        correctAnswerIndex: 2,
        rationale: 'The lungs are the primary organs of the respiratory system. They are responsible for taking in oxygen from the air and removing carbon dioxide from the blood.'
    },
    {
        question: 'Which of these is NOT a characteristic of a living thing?',
        answers: ['It grows', 'It needs food and water', 'It can stand still', 'It reproduces'],
        correctAnswerIndex: 2,
        rationale: 'While living things can stand still, being motionless is not a defining characteristic. Growing, needing nourishment, and reproducing are key characteristics of life.'
    },
    {
        question: 'What happens when you put the North pole of a magnet and the South pole of another magnet together?',
        answers: ['They push each other away (repel)', 'They pull towards each other (attract)', 'Nothing happens', 'They get hot'],
        correctAnswerIndex: 1,
        rationale: 'Opposite poles of magnets attract each other (North attracts South), while like poles repel each other (North repels North).'
    },
    {
        question: 'A tadpole grows and changes into a...',
        answers: ['Fish', 'Frog', 'Lizard', 'Worm'],
        correctAnswerIndex: 1,
        rationale: 'A tadpole is the larval stage in the life cycle of an amphibian, particularly that of a frog or toad.'
    },
    {
        question: 'Which of these materials is flexible?',
        answers: ['A glass cup', 'A wooden ruler', 'A rubber band', 'A metal spoon'],
        correctAnswerIndex: 2,
        rationale: 'Flexible means it can bend easily without breaking. A rubber band is a classic example of a flexible object.'
    },
    {
        question: 'What do we call the process of heat moving through a liquid or gas?',
        answers: ['Conduction', 'Convection', 'Radiation', 'Reflection'],
        correctAnswerIndex: 1,
        rationale: 'Convection is the transfer of heat by the movement of fluids (liquids or gases). For example, boiling water circulates due to convection.'
    },
    {
        question: 'Which group of animals has feathers?',
        answers: ['Mammals', 'Reptiles', 'Fish', 'Birds'],
        correctAnswerIndex: 3,
        rationale: 'Feathers are a characteristic unique to birds. They are used for flight, insulation, and display.'
    },
    {
        question: 'The process of a seed growing into a plant is called...',
        answers: ['Germination', 'Pollination', 'Fertilisation', 'Respiration'],
        correctAnswerIndex: 0,
        rationale: 'Germination is the process by which a plant grows from a seed. It requires water, oxygen, and a suitable temperature.'
    },
    {
        question: 'What is the hard outer covering that protects some animals, like a snail or a turtle?',
        answers: ['Skin', 'Fur', 'Shell', 'Scales'],
        correctAnswerIndex: 2,
        rationale: 'A shell is a hard, protective outer layer created by an animal. It is a key feature of animals like snails, turtles, and crabs.'
    },
    {
        question: 'What is the difference between a solid and a liquid?',
        answers: ['A solid has a fixed shape, but a liquid takes the shape of its container.', 'A liquid is always hotter than a solid.', 'A solid is always heavier than a liquid.', 'A liquid has a fixed shape, but a solid does not.'],
        correctAnswerIndex: 0,
        rationale: 'A key property of solids is that they have a definite shape and volume. Liquids have a definite volume but take the shape of the container they are in.'
    },
    {
        question: 'Which part of the flower produces pollen?',
        answers: ['Petal', 'Sepal', 'Stamen', 'Pistil'],
        correctAnswerIndex: 2,
        rationale: 'The stamen is the male reproductive part of a flower, and it consists of the anther (which produces pollen) and the filament.'
    },
    {
        question: 'What happens to water when it boils?',
        answers: ['It turns into ice (freezes).', 'It disappears forever.', 'It turns into steam (a gas).', 'It becomes solid.'],
        correctAnswerIndex: 2,
        rationale: 'When water reaches its boiling point (100°C), it changes from a liquid state to a gaseous state, which we call steam or water vapor.'
    },
    {
        question: 'An animal that hunts other animals for food is called a...',
        answers: ['Prey', 'Herbivore', 'Producer', 'Predator'],
        correctAnswerIndex: 3,
        rationale: 'A predator is an animal that hunts, kills, and eats other animals. The animal that is hunted is called the prey.'
    }
  ],
};
