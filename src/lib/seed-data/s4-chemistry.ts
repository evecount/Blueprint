'use client';
import type { Resource } from '@/lib/types';

export const s4Chemistry: Resource = {
  id: 's4-chemistry',
  name: 'Secondary 4 Chemistry',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is the chemical symbol for gold?',
      answers: ['Ag', 'Go', 'Gd', 'Au'],
      correctAnswerIndex: 3,
      rationale: 'The chemical symbol for gold is Au, which comes from its Latin name, "aurum".',
    },
    {
      question: 'What is the pH of a neutral substance, like pure water?',
      answers: ['0', '7', '14', '1'],
      correctAnswerIndex: 1,
      rationale:
        'The pH scale ranges from 0 to 14. A pH of 7 is neutral. A pH less than 7 is acidic, and a pH greater than 7 is basic (alkaline).',
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      correctAnswerIndex: 2,
      rationale:
        "Nitrogen makes up about 78% of the Earth's atmosphere, making it the most abundant gas. Oxygen is second, at about 21%.",
    },
    {
      question: 'What is the process of a solid turning directly into a gas, skipping the liquid phase?',
      answers: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'],
      correctAnswerIndex: 3,
      rationale:
        'Sublimation is the phase transition of a substance directly from the solid to the gas state, without passing through the liquid state. Dry ice (solid CO2) is a common example.',
    },
    {
      question: 'In a chemical equation, what does the arrow (→) represent?',
      answers: ['Equals', 'Yields or Produces', 'Is greater than', 'Is in equilibrium with'],
      correctAnswerIndex: 1,
      rationale:
        'The arrow in a chemical equation separates the reactants (on the left) from the products (on the right) and indicates the direction of the reaction.',
    },
    {
      question: 'What are isotopes?',
      answers: [
        'Atoms of the same element with different numbers of protons.',
        'Atoms of different elements with the same number of neutrons.',
        'Atoms of the same element with different numbers of neutrons.',
        'Atoms that have gained or lost electrons.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'Isotopes are variants of a particular chemical element which differ in neutron number, and consequently in nucleon number (mass number). All isotopes of a given element have the same number of protons in each atom.',
    },
    {
        question: 'Which of the following is a property of an acid?',
        answers: ['Has a slippery feel', 'Turns red litmus paper blue', 'Has a pH greater than 7', 'Tastes sour'],
        correctAnswerIndex: 3,
        rationale: 'Acids, like lemon juice (citric acid) and vinegar (acetic acid), are known for their sour taste. They have a pH less than 7 and turn blue litmus paper red.'
    },
    {
        question: 'What is a covalent bond?',
        answers: ['A bond formed by the transfer of electrons between atoms.', 'A bond formed by the sharing of electrons between atoms.', 'A bond formed between metal atoms.', 'A bond formed due to magnetic attraction.'],
        correctAnswerIndex: 1,
        rationale: 'A covalent bond typically forms between non-metal atoms, where they share one or more pairs of electrons to achieve a stable electron configuration.'
    },
    {
        question: 'The reaction between an acid and a base is called:',
        answers: ['Oxidation', 'Reduction', 'Combustion', 'Neutralisation'],
        correctAnswerIndex: 3,
        rationale: 'A neutralisation reaction occurs when an acid and a base react to form a salt and water. The resulting solution is neutral (pH 7).'
    },
    {
        question: 'What does Avogadro\'s number (approximately 6.022 x 10²³) represent?',
        answers: ['The number of atoms in 1 gram of a substance.', 'The number of protons in a nucleus.', 'The number of particles (atoms, molecules) in one mole of a substance.', 'The number of elements in the periodic table.'],
        correctAnswerIndex: 2,
        rationale: 'The mole is a unit for counting particles on a macroscopic level. One mole of any substance contains Avogadro\'s number of particles.'
    },
    {
        question: 'What is the main component of natural gas?',
        answers: ['Ethane', 'Propane', 'Butane', 'Methane'],
        correctAnswerIndex: 3,
        rationale: 'Natural gas is a fossil fuel primarily composed of methane (CH₄).'
    },
    {
        question: 'The process of splitting a heavy nucleus into lighter nuclei is called:',
        answers: ['Nuclear fusion', 'Nuclear fission', 'Radioactive decay', 'Combustion'],
        correctAnswerIndex: 1,
        rationale: 'Nuclear fission is the process used in nuclear power plants to release a large amount of energy. It is the opposite of nuclear fusion, which powers the sun.'
    },
    {
        question: 'What is a catalyst?',
        answers: ['A substance that is consumed in a chemical reaction.', 'A substance that increases the rate of a chemical reaction without being used up itself.', 'A substance that stops a chemical reaction.', 'A substance that is produced in a chemical reaction.'],
        correctAnswerIndex: 1,
        rationale: 'Catalysts provide an alternative reaction pathway with a lower activation energy, allowing the reaction to proceed faster. They are not consumed in the process.'
    },
    {
        question: 'Which of these is a noble gas?',
        answers: ['Oxygen', 'Hydrogen', 'Chlorine', 'Helium'],
        correctAnswerIndex: 3,
        rationale: 'The noble gases (Group 18 of the periodic table) are known for being very unreactive because they have a full outer shell of electrons. Helium, Neon, and Argon are examples.'
    },
    {
        question: 'What is the general formula for alkanes?',
        answers: ['CnH2n', 'CnH2n-2', 'CnH2n+2', 'CnHn'],
        correctAnswerIndex: 2,
        rationale: 'Alkanes are saturated hydrocarbons, meaning they contain only single bonds. The formula CnH2n+2 applies to all of them (e.g., Methane CH₄, Ethane C₂H₆).'
    },
    {
        question: 'The process where electrons are lost in a chemical reaction is known as:',
        answers: ['Reduction', 'Oxidation', 'Neutralisation', 'Hydration'],
        correctAnswerIndex: 1,
        rationale: 'Oxidation Is Loss, Reduction Is Gain (of electrons). This is a helpful mnemonic. Oxidation and reduction always occur together in what is called a redox reaction.'
    },
    {
        question: 'Which of the following metals is the most reactive?',
        answers: ['Gold', 'Copper', 'Iron', 'Potassium'],
        correctAnswerIndex: 3,
        rationale: 'Potassium is an alkali metal (Group 1) and is extremely reactive. It reacts vigorously with water. Gold is one of the least reactive metals.'
    },
    {
        question: 'What is the process used to separate crude oil into different fractions like petrol and kerosene?',
        answers: ['Filtration', 'Evaporation', 'Chromatography', 'Fractional distillation'],
        correctAnswerIndex: 3,
        rationale: 'Fractional distillation separates a mixture into its component parts, or fractions, based on their different boiling points. This is a key process in oil refineries.'
    },
    {
        question: 'What is an ionic bond?',
        answers: ['A bond formed by sharing electrons.', 'A bond formed by the electrostatic attraction between oppositely charged ions.', 'A bond found in metals.', 'A weak bond between molecules.'],
        correctAnswerIndex: 1,
        rationale: 'An ionic bond typically forms between a metal and a non-metal. The metal atom transfers one or more electrons to the non-metal atom, creating a positive ion (cation) and a negative ion (anion) which are then attracted to each other.'
    },
    {
        question: 'What are polymers?',
        answers: ['Small, simple molecules.', 'Substances that speed up reactions.', 'Very large molecules made up of many repeating smaller units called monomers.', 'Gases found in the atmosphere.'],
        correctAnswerIndex: 2,
        rationale: 'Plastics like poly(ethene) and natural substances like starch and DNA are all examples of polymers. They are long chains built from repeating monomer units.'
    },
    {
        question: 'What is produced at the cathode (negative electrode) during the electrolysis of molten sodium chloride (NaCl)?',
        answers: ['Chlorine gas', 'Sodium metal', 'Oxygen gas', 'Hydrogen gas'],
        correctAnswerIndex: 1,
        rationale: 'In electrolysis, positive ions (cations) are attracted to the negative cathode. The sodium ion (Na+) gains an electron (is reduced) to form sodium metal.'
    },
    {
        question: 'What is activation energy?',
        answers: ['The total energy released in a reaction.', 'The energy of the products.', 'The minimum amount of energy required for a reaction to occur.', 'The energy stored in chemical bonds.'],
        correctAnswerIndex: 2,
        rationale: 'Activation energy is like a "hill" that reactants must get over for a reaction to start. Catalysts work by lowering this energy hill.'
    },
    {
        question: 'The Haber process is used to manufacture which important chemical?',
        answers: ['Sulphuric acid', 'Ammonia', 'Ethanol', 'Plastics'],
        correctAnswerIndex: 1,
        rationale: 'The Haber process combines nitrogen from the air with hydrogen to produce ammonia (NH₃). Ammonia is a vital component in the production of fertilisers.'
    },
    {
        question: 'Which of the following describes an exothermic reaction?',
        answers: ['A reaction that absorbs heat from the surroundings.', 'A reaction that releases heat into the surroundings.', 'A reaction that produces a gas.', 'A reaction that requires a catalyst.'],
        correctAnswerIndex: 1,
        rationale: 'In an exothermic reaction, the products have less energy than the reactants, and the difference in energy is released as heat, causing the temperature of the surroundings to rise. Combustion is a common example.'
    },
    {
        question: 'What is the chemical formula for table salt?',
        answers: ['HCl', 'H₂O', 'CO₂', 'NaCl'],
        correctAnswerIndex: 3,
        rationale: 'Table salt is sodium chloride, which is an ionic compound formed from sodium (Na) and chlorine (Cl) ions.'
    }
  ],
};
