'use client';
import type { Resource } from '@/lib/types';

export const s1Science: Resource = {
  id: 's1-science',
  name: 'Secondary 1 Science',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: "What is the first step in the scientific method?",
      answers: [
        "Forming a hypothesis",
        "Conducting an experiment",
        "Making an observation",
        "Drawing a conclusion"
      ],
      correctAnswerIndex: 2,
      rationale: "The scientific method begins with an observation or question about a phenomenon. This observation then leads to the formation of a hypothesis."
    },
    {
      question: "Which of the following is NOT a state of matter?",
      answers: [
        "Solid",
        "Liquid",
        "Gas",
        "Energy"
      ],
      correctAnswerIndex: 3,
      rationale: "Solid, liquid, and gas are the three common states of matter. Energy is a property that matter can have, but it is not a state of matter itself."
    },
    {
      question: "What is the function of the cell membrane?",
      answers: [
        "To produce energy for the cell",
        "To control all cell activities",
        "To control what enters and leaves the cell",
        "To provide a rigid structure to the cell"
      ],
      correctAnswerIndex: 2,
      rationale: "The cell membrane is a semi-permeable barrier that surrounds the cell, regulating the passage of substances in and out."
    },
    {
      question: "In an electrical circuit, what is the purpose of a switch?",
      answers: [
        "To provide power to the circuit",
        "To measure the current",
        "To open or close the circuit",
        "To protect the circuit from high voltage"
      ],
      correctAnswerIndex: 2,
      rationale: "A switch is a device used to interrupt the flow of electrons in a circuit. Closing the switch completes the circuit, allowing current to flow, while opening it breaks the circuit."
    },
    {
      question: "Which part of a plant cell is not found in an animal cell?",
      answers: [
        "Nucleus",
        "Cytoplasm",
        "Cell Wall",
        "Cell Membrane"
      ],
      correctAnswerIndex: 2,
      rationale: "Plant cells have a rigid cell wall made of cellulose outside the cell membrane for structural support. Animal cells do not have a cell wall."
    },
    {
      question: "What is the process of a liquid turning into a solid called?",
      answers: [
        "Melting",
        "Freezing",
        "Evaporation",
        "Condensation"
      ],
      correctAnswerIndex: 1,
      rationale: "Freezing, or solidification, is the phase transition in which a liquid turns into a solid when its temperature is lowered below its freezing point."
    },
    {
      question: "Which human organ system is responsible for breaking down food?",
      answers: [
        "Respiratory System",
        "Circulatory System",
        "Nervous System",
        "Digestive System"
      ],
      correctAnswerIndex: 3,
      rationale: "The digestive system, which includes the stomach and intestines, is responsible for breaking down food into nutrients that the body can absorb."
    },
    {
      question: "A hypothesis is best described as:",
      answers: [
        "A proven fact",
        "A detailed experiment",
        "An educated guess or testable prediction",
        "A final conclusion"
      ],
      correctAnswerIndex: 2,
      rationale: "A hypothesis is a proposed explanation for an observation. It must be testable through experimentation so it can be supported or refuted."
    },
    {
      question: "What is the boiling point of water at sea level?",
      answers: [
        "0 degrees Celsius",
        "50 degrees Celsius",
        "100 degrees Celsius",
        "212 degrees Celsius"
      ],
      correctAnswerIndex: 2,
      rationale: "The boiling point of water is the temperature at which it turns from a liquid to a gas (steam). At standard atmospheric pressure (at sea level), this occurs at 100°C."
    },
    {
      question: "In an ecosystem, what are organisms that produce their own food called?",
      answers: [
        "Consumers",
        "Producers",
        "Decomposers",
        "Herbivores"
      ],
      correctAnswerIndex: 1,
      rationale: "Producers, such as plants, create their own food through photosynthesis. They form the base of the food chain."
    },
    {
      question: "What is the 'control center' of the cell that contains DNA?",
      answers: [
        "Mitochondria",
        "Ribosome",
        "Nucleus",
        "Vacuole"
      ],
      correctAnswerIndex: 2,
      rationale: "The nucleus contains the cell's genetic material (DNA) and controls the cell's growth, metabolism, and reproduction."
    },
    {
      question: "Which of these is an example of a good electrical conductor?",
      answers: [
        "Rubber",
        "Copper",
        "Glass",
        "Wood"
      ],
      correctAnswerIndex: 1,
      rationale: "Conductors are materials that allow electricity to flow through them easily. Metals like copper are excellent conductors, while rubber, glass, and wood are insulators."
    },
    {
      question: "What is the transfer of heat through direct contact called?",
      answers: [
        "Conduction",
        "Convection",
        "Radiation",
        "Insulation"
      ],
      correctAnswerIndex: 0,
      rationale: "Conduction is the transfer of heat energy between substances that are in direct contact with each other."
    },
    {
      question: "What is the primary function of red blood cells?",
      answers: [
        "To fight infection",
        "To help blood clot",
        "To transport oxygen",
        "To carry nutrients"
      ],
      correctAnswerIndex: 2,
      rationale: "Red blood cells contain a protein called hemoglobin, which binds to oxygen in the lungs and transports it to all the cells in the body."
    },
    {
      question: "A group of similar cells performing the same function is called a(n):",
      answers: [
        "Organ",
        "Tissue",
        "Organism",
        "System"
      ],
      correctAnswerIndex: 1,
      rationale: "In multicellular organisms, cells are organized into tissues. For example, muscle tissue is made of muscle cells."
    },
    {
      question: "What force opposes motion between two surfaces in contact?",
      answers: [
        "Gravity",
        "Magnetism",
        "Friction",
        "Tension"
      ],
      correctAnswerIndex: 2,
      rationale: "Friction is a force that resists the relative motion between two surfaces sliding against each other. It acts in the opposite direction of the motion."
    },
    {
      question: "What is the smallest unit of a chemical element?",
      answers: [
        "A molecule",
        "A compound",
        "An atom",
        "A cell"
      ],
      correctAnswerIndex: 2,
      rationale: "An atom is the smallest particle of an element that retains the chemical properties of that element."
    },
    {
      question: "What instrument is used to measure temperature?",
      answers: [
        "Barometer",
        "Thermometer",
        "Ammeter",
        "Voltmeter"
      ],
      correctAnswerIndex: 1,
      rationale: "A thermometer is a device that measures temperature or a temperature gradient."
    },
    {
      question: "Which of the following is a renewable resource?",
      answers: [
        "Coal",
        "Natural Gas",
        "Wind",
        "Petroleum"
      ],
      correctAnswerIndex: 2,
      rationale: "Renewable resources are those that can be replenished naturally over a short period. Wind is generated by atmospheric pressure differences and is considered renewable. Fossil fuels like coal and oil are non-renewable."
    },
    {
      question: "The process of plants releasing water vapor from their leaves is called:",
      answers: [
        "Photosynthesis",
        "Respiration",
        "Transpiration",
        "Condensation"
      ],
      correctAnswerIndex: 2,
      rationale: "Transpiration is the process where plants absorb water through the roots and then give off water vapor through pores in their leaves."
    },
    {
      question: "What does a food web represent?",
      answers: [
        "A single path of energy flow",
        "Only the producers in an ecosystem",
        "Multiple interconnected food chains",
        "Only the consumers in an ecosystem"
      ],
      correctAnswerIndex: 2,
      rationale: "A food web is a more realistic model than a food chain because it shows the complex network of feeding relationships and energy flow among various organisms in an ecosystem."
    },
    {
      question: "A material that does not allow electricity to pass through it is called a(n):",
      answers: [
        "Conductor",
        "Semiconductor",
        "Insulator",
        "Resistor"
      ],
      correctAnswerIndex: 2,
      rationale: "Insulators, such as plastic, rubber, and glass, have high resistance to the flow of electric current."
    },
    {
      question: "The change of a gas into a liquid is called:",
      answers: [
        "Evaporation",
        "Condensation",
        "Sublimation",
        "Melting"
      ],
      correctAnswerIndex: 1,
      rationale: "Condensation is the process where water vapor (a gas) in the air is changed into liquid water. It is the reverse of evaporation."
    },
    {
      question: "In an experiment, the factor that is deliberately changed by the scientist is called the:",
      answers: [
        "Control variable",
        "Independent variable",
        "Dependent variable",
        "Constant variable"
      ],
      correctAnswerIndex: 1,
      rationale: "The independent variable is the one that the experimenter manipulates or changes to observe its effect on the dependent variable."
    },
    {
      question: "Which organ pumps blood throughout the human body?",
      answers: [
        "Lungs",
        "Brain",
        "Stomach",
        "Heart"
      ],
      correctAnswerIndex: 3,
      rationale: "The heart is a muscular organ that acts as a pump for the circulatory system, pushing blood to all parts of the body."
    }
  ]
};
