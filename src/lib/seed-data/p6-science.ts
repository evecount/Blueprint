'use client';
import type { Resource } from '@/lib/types';

export const p6Science: Resource = {
  id: 'p6-science',
  name: 'Primary 6 Science',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Which of the following is a source of renewable energy?',
      answers: ['Coal', 'Natural Gas', 'Solar Power', 'Petroleum'],
      correctAnswerIndex: 2,
      rationale:
        'Renewable energy sources are naturally replenished. Solar power, derived from the sun, is a key example. Coal, natural gas, and petroleum are fossil fuels and are non-renewable.',
    },
    {
      question: 'What process do plants use to make their own food?',
      answers: ['Respiration', 'Photosynthesis', 'Transpiration', 'Decomposition'],
      correctAnswerIndex: 1,
      rationale:
        'Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide to create their own food and release oxygen.',
    },
    {
      question: 'How does heat travel from the Sun to the Earth?',
      answers: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
      correctAnswerIndex: 2,
      rationale:
        'Heat travels through the vacuum of space from the Sun to Earth primarily through electromagnetic waves, a process called radiation. Conduction and convection require a medium.',
    },
    {
      question: 'Which force pulls objects towards the center of the Earth?',
      answers: ['Magnetism', 'Friction', 'Tension', 'Gravity'],
      correctAnswerIndex: 3,
      rationale:
        'Gravity is the force of attraction between two objects with mass. On Earth, it is what pulls everything towards the planet\'s center.',
    },
    {
      question: 'In the water cycle, what is the process of water turning into water vapor called?',
      answers: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
      correctAnswerIndex: 2,
      rationale:
        'Evaporation is the process where a liquid, in this case water, turns into a gas (water vapor) when it is heated.',
    },
    {
      question: 'What is the main function of the human skeletal system?',
      answers: [
        'To pump blood',
        'To digest food',
        'To provide support and structure',
        'To send signals to the brain',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The skeletal system provides a framework for the body, giving it structure, protecting internal organs, and allowing movement.',
    },
    {
        question: 'Which of these is the correct order of energy conversion in a battery-operated toy car?',
        answers: ['Chemical -> Electrical -> Kinetic', 'Electrical -> Chemical -> Kinetic', 'Kinetic -> Electrical -> Chemical', 'Chemical -> Kinetic -> Electrical'],
        correctAnswerIndex: 0,
        rationale: 'The battery stores chemical energy. This is converted to electrical energy to power the motor, which then converts it to kinetic energy (movement).'
    },
    {
        question: 'In an ecosystem, what is the role of a decomposer like fungi?',
        answers: ['To produce food using sunlight', 'To eat other animals', 'To break down dead organic matter', 'To be eaten by herbivores'],
        correctAnswerIndex: 2,
        rationale: 'Decomposers play a crucial role by breaking down dead plants and animals, returning essential nutrients to the soil for producers to use.'
    },
    {
        question: 'Which part of a cell controls all its activities?',
        answers: ['Cytoplasm', 'Cell wall', 'Nucleus', 'Vacuole'],
        correctAnswerIndex: 2,
        rationale: 'The nucleus contains the cell\'s genetic material (DNA) and acts as the "brain" or control center, directing all cellular functions.'
    },
    {
        question: 'Why does a metal spoon in a cup of hot tea become hot?',
        answers: ['The spoon is a good conductor of heat.', 'The spoon is a good insulator of heat.', 'Heat travels by convection.', 'Heat travels by radiation.'],
        correctAnswerIndex: 0,
        rationale: 'Heat is transferred from the hot tea to the spoon through conduction. Metals are excellent conductors, allowing heat to travel through them easily.'
    },
    {
        question: 'What is an adaptation?',
        answers: ['A change in the weather.', 'A characteristic that helps an organism survive in its environment.', 'A type of food chain.', 'The process of a plant making food.'],
        correctAnswerIndex: 1,
        rationale: 'An adaptation is a special feature or behavior that helps an animal or plant survive in its specific habitat, such as a camel\'s hump for storing fat.'
    },
    {
        question: 'Which of these is required for both photosynthesis and respiration in plants?',
        answers: ['Light', 'Carbon dioxide', 'Water', 'Oxygen'],
        correctAnswerIndex: 2,
        rationale: 'Water is a reactant in photosynthesis (used to make food) and is also essential for all cellular processes, including respiration.'
    },
    {
        question: 'What is the main difference between a food chain and a food web?',
        answers: ['A food chain shows how plants grow.', 'A food web is a single path of energy transfer.', 'A food web shows multiple interconnected food chains.', 'Only food chains have producers.'],
        correctAnswerIndex: 2,
        rationale: 'A food web provides a more realistic and complex model of an ecosystem, showing that most animals eat more than one thing and are eaten by more than one thing.'
    },
    {
        question: 'What happens to light when it passes from air into a block of glass?',
        answers: ['It speeds up.', 'It is reflected.', 'It is refracted (bends).', 'It disappears.'],
        correctAnswerIndex: 2,
        rationale: 'Refraction is the bending of light as it passes from one medium to another (like from air to glass). This happens because the speed of light changes.'
    },
    {
        question: 'Which human organ system is responsible for sending electrical signals throughout the body?',
        answers: ['Digestive system', 'Circulatory system', 'Respiratory system', 'Nervous system'],
        correctAnswerIndex: 3,
        rationale: 'The nervous system, which includes the brain, spinal cord, and nerves, is the body\'s command center. It transmits nerve impulses between parts of the body.'
    },
    {
        question: 'What is the purpose of a flower on a plant?',
        answers: ['To absorb water', 'To make food', 'To help the plant reproduce', 'To provide shade'],
        correctAnswerIndex: 2,
        rationale: 'The flower is the reproductive part of most plants. It contains organs that produce seeds through the process of pollination and fertilization.'
    },
    {
        question: 'Which of the following is a structural adaptation of a polar bear for survival in the Arctic?',
        answers: ['Sharp teeth', 'Hibernating in winter', 'A thick layer of fat and fur', 'Living in groups'],
        correctAnswerIndex: 2,
        rationale: 'A polar bear\'s thick layer of blubber (fat) and dense fur are physical (structural) adaptations that provide insulation against the extreme cold.'
    },
    {
        question: 'What causes the tides in the Earth\'s oceans?',
        answers: ['The wind', 'Earthquakes on the ocean floor', 'The gravitational pull of the Moon and Sun', 'The Earth\'s rotation'],
        correctAnswerIndex: 2,
        rationale: 'The gravitational forces exerted by the Moon and, to a lesser extent, the Sun, cause the rise and fall of sea levels, known as tides.'
    },
    {
        question: 'What is the basic unit of life?',
        answers: ['An atom', 'A molecule', 'A cell', 'A tissue'],
        correctAnswerIndex: 2,
        rationale: 'The cell is the smallest structural and functional unit of an organism. All living things are composed of one or more cells.'
    },
    {
        question: 'Which two gases are mainly exchanged during breathing?',
        answers: ['Nitrogen and Hydrogen', 'Oxygen and Carbon Dioxide', 'Helium and Argon', 'Oxygen and Nitrogen'],
        correctAnswerIndex: 1,
        rationale: 'Organisms take in oxygen for cellular respiration and release carbon dioxide as a waste product.'
    },
    {
        question: 'In an electrical circuit, if one bulb in a series circuit blows, what happens to the other bulbs?',
        answers: ['They become brighter.', 'They become dimmer.', 'They all go out.', 'Nothing happens to them.'],
        correctAnswerIndex: 2,
        rationale: 'In a series circuit, there is only one path for the current to flow. If that path is broken (e.g., by a blown bulb), the entire circuit is incomplete, and all bulbs will go out.'
    },
    {
        question: 'Why are shadows formed?',
        answers: ['Because light travels in curved lines.', 'Because some objects are transparent.', 'Because an opaque object blocks the path of light.', 'Because light is absorbed by all objects.'],
        correctAnswerIndex: 2,
        rationale: 'Light travels in straight lines. When an opaque or translucent object blocks these lines of light, it creates a dark area, or shadow, behind it.'
    },
    {
        question: 'Which of these is an example of a push force?',
        answers: ['Opening a drawer', 'Kicking a ball', 'Lifting a bag', 'Stretching a rubber band'],
        correctAnswerIndex: 1,
        rationale: 'Kicking a ball involves applying a force that moves the object away from you, which is a push. Opening a drawer is a pull.'
    },
    {
        question: 'How are seeds dispersed by animals?',
        answers: ['By being light and floating on the wind.', 'By being eaten and passed out in droppings, or by sticking to fur.', 'By exploding from the parent plant.', 'By floating on water.'],
        correctAnswerIndex: 1,
        rationale: 'Animals can disperse seeds in two main ways: by eating fruits and excreting the seeds elsewhere, or by seeds with hooks or barbs attaching to their fur.'
    },
    {
        question: 'What is the function of the large intestine in the human digestive system?',
        answers: ['To digest proteins and fats.', 'To absorb most of the nutrients from food.', 'To absorb water from undigested food.', 'To produce digestive juices.'],
        correctAnswerIndex: 2,
        rationale: 'After the small intestine absorbs most nutrients, the remaining material passes to the large intestine, where water is absorbed back into the body.'
    }
  ],
};
