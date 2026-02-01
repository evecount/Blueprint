'use client';
import type { Resource } from '@/lib/types';

export const s3Physics: Resource = {
  id: 's3-physics',
  name: 'Secondary 3 Physics',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question:
        "According to Newton's Second Law of Motion, what is the relationship between force (F), mass (m), and acceleration (a)?",
      answers: ['F = m / a', 'F = a / m', 'F = m * a', 'F = m + a'],
      correctAnswerIndex: 2,
      rationale:
        "Newton's Second Law states that the force acting on an object is equal to the mass of that object times its acceleration (F = ma). This fundamental principle connects force, mass, and motion.",
    },
    {
      question: 'What is the unit of electrical resistance?',
      answers: ['Volt', 'Ampere', 'Watt', 'Ohm'],
      correctAnswerIndex: 3,
      rationale:
        'The Ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Simon Ohm.',
    },
    {
      question: 'Which type of energy is stored in a stretched rubber band?',
      answers: ['Kinetic Energy', 'Thermal Energy', 'Potential Energy', 'Chemical Energy'],
      correctAnswerIndex: 2,
      rationale:
        'Potential energy is stored energy. In a stretched rubber band, it is specifically elastic potential energy, stored as a result of applying a force to deform an elastic object.',
    },
    {
      question:
        "The principle that for every action, there is an equal and opposite reaction is which of Newton's Laws?",
      answers: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
      correctAnswerIndex: 2,
      rationale:
        "Newton's Third Law of Motion describes the interaction between two objects. It states that all forces between two objects exist in equal magnitude and opposite direction.",
    },
    {
      question: 'What is density?',
      answers: [
        'The amount of space an object takes up.',
        'The amount of matter in an object.',
        'The mass of an object per unit volume.',
        'The weight of an object.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'Density is a measure of how much mass is contained in a given unit volume (density = mass/volume). It describes how "compact" a substance is.',
    },
    {
      question: 'Sound waves travel fastest through which medium?',
      answers: ['Solids', 'Liquids', 'Gases', 'Vacuum'],
      correctAnswerIndex: 0,
      rationale:
        'Sound travels as vibrations through a medium. Because the particles in a solid are packed much more closely together than in liquids or gases, sound waves can travel through them more quickly.',
    },
    {
        question: 'What is the principle of moments?',
        answers: ['For every action, there is an equal and opposite reaction.', 'Energy cannot be created or destroyed.', 'For an object to be in rotational equilibrium, the sum of clockwise moments about any point must equal the sum of anticlockwise moments about the same point.', 'An object will stay at rest unless a force acts on it.'],
        correctAnswerIndex: 2,
        rationale: 'The Principle of Moments is key to understanding how levers and balances work. It\'s all about balancing turning forces.'
    },
    {
        question: 'What is pressure defined as?',
        answers: ['Mass per unit volume', 'The rate of change of velocity', 'Force per unit area', 'The capacity to do work'],
        correctAnswerIndex: 2,
        rationale: 'Pressure is the amount of force exerted perpendicularly on a surface, divided by the area over which the force is distributed (P = F/A). This is why a sharp knife cuts better than a blunt one.'
    },
    {
        question: 'How is heat transferred through a vacuum?',
        answers: ['Conduction', 'Convection', 'Radiation', 'It cannot be transferred through a vacuum'],
        correctAnswerIndex: 2,
        rationale: 'Radiation is the transfer of heat through electromagnetic waves, like infrared radiation. Unlike conduction and convection, it does not require a medium, which is how heat reaches us from the Sun.'
    },
    {
        question: 'What is kinetic energy?',
        answers: ['Stored energy', 'Energy of motion', 'Energy from chemical bonds', 'Energy from heat'],
        correctAnswerIndex: 1,
        rationale: 'Kinetic energy is the energy an object possesses due to its motion. It is calculated as (1/2)mv², where m is mass and v is velocity.'
    },
    {
        question: 'What does Ohm\'s Law state?',
        answers: ['Voltage = Current / Resistance', 'Resistance = Voltage x Current', 'Current = Resistance / Voltage', 'Voltage = Current x Resistance (V=IR)'],
        correctAnswerIndex: 3,
        rationale: 'Ohm\'s Law describes the relationship between voltage (V), current (I), and resistance (R) in an electrical circuit.'
    },
    {
        question: 'The bending of light as it passes from one medium to another is called:',
        answers: ['Reflection', 'Diffraction', 'Refraction', 'Dispersion'],
        correctAnswerIndex: 2,
        rationale: 'Refraction occurs because the speed of light changes as it enters a different medium (e.g., from air to water). This is why a straw in a glass of water appears bent.'
    },
    {
        question: 'Which of the following is a scalar quantity?',
        answers: ['Velocity', 'Acceleration', 'Speed', 'Force'],
        correctAnswerIndex: 2,
        rationale: 'Scalar quantities have only magnitude (size), while vector quantities have both magnitude and direction. Speed tells you how fast (e.g., 50 km/h), while velocity tells you how fast and in which direction (e.g., 50 km/h north).'
    },
    {
        question: 'What is the unit of power?',
        answers: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correctAnswerIndex: 2,
        rationale: 'Power is the rate at which work is done or energy is transferred. One watt is equal to one joule per second (1 J/s).'
    },
    {
        question: 'An object at rest tends to stay at rest and an object in motion tends to stay in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This is Newton\'s:',
        answers: ['First Law of Motion', 'Second Law of Motion', 'Third Law of Motion', 'Law of Universal Gravitation'],
        correctAnswerIndex: 0,
        rationale: 'Newton\'s First Law is also known as the law of inertia. It describes an object\'s resistance to a change in its state of motion.'
    },
    {
        question: 'What type of energy is stored in the nucleus of an atom?',
        answers: ['Chemical Energy', 'Nuclear Energy', 'Elastic Potential Energy', 'Gravitational Potential Energy'],
        correctAnswerIndex: 1,
        rationale: 'Nuclear energy is the energy stored in the core of an atom. It can be released through nuclear reactions like fission or fusion.'
    },
    {
        question: 'What happens in a series circuit if one of the bulbs breaks?',
        answers: ['The other bulbs get brighter.', 'The other bulbs get dimmer.', 'The other bulbs stay on.', 'The entire circuit is broken and all bulbs go off.'],
        correctAnswerIndex: 3,
        rationale: 'In a series circuit, there is only one path for the current. If the path is broken at any point (like a burnt-out filament), the circuit is incomplete and no current can flow.'
    },
    {
        question: 'The process of a liquid turning into a gas at its boiling point is called:',
        answers: ['Evaporation', 'Boiling (Vaporization)', 'Condensation', 'Melting'],
        correctAnswerIndex: 1,
        rationale: 'Boiling is a specific type of vaporization that occurs throughout the liquid when it reaches a specific temperature (the boiling point). Evaporation can occur at any temperature from the surface of the liquid.'
    },
    {
        question: 'Which of these colours of light is refracted the most when white light passes through a prism?',
        answers: ['Red', 'Yellow', 'Green', 'Violet'],
        correctAnswerIndex: 3,
        rationale: 'When white light is dispersed by a prism, it splits into a spectrum of colours. Violet light has the shortest wavelength and is bent (refracted) the most, while red light has the longest wavelength and is bent the least.'
    },
    {
        question: 'A voltmeter is used to measure what quantity in a circuit?',
        answers: ['Current', 'Resistance', 'Power', 'Voltage (Potential Difference)'],
        correctAnswerIndex: 3,
        rationale: 'A voltmeter measures the difference in electrical potential between two points in a circuit. It is connected in parallel with the component being measured.'
    },
    {
        question: 'What is the law of conservation of energy?',
        answers: ['Energy can only be used once.', 'Energy can be created from nothing.', 'Energy is always lost as heat.', 'Energy cannot be created or destroyed, only transformed from one form to another.'],
        correctAnswerIndex: 3,
        rationale: 'This is a fundamental principle of physics. The total energy in an isolated system remains constant over time.'
    },
    {
        question: 'If you push a wall with a force of 50 N, what is the force the wall exerts on you?',
        answers: ['0 N', '25 N', '50 N', '100 N'],
        correctAnswerIndex: 2,
        rationale: 'This is an example of Newton\'s Third Law. The wall exerts an equal and opposite force of 50 N back on you.'
    },
    {
        question: 'Which of the following is an example of a transverse wave?',
        answers: ['Sound wave', 'A slinky spring pushed at one end', 'A light wave', 'An earthquake P-wave'],
        correctAnswerIndex: 2,
        rationale: 'In a transverse wave, the oscillations are perpendicular to the direction of energy transfer. Light and other electromagnetic waves are transverse. Sound waves are longitudinal.'
    },
    {
        question: 'What is the primary function of a fuse in an electrical circuit?',
        answers: ['To increase the voltage.', 'To store electrical charge.', 'To act as a switch.', 'To protect the circuit from excessive current.'],
        correctAnswerIndex: 3,
        rationale: 'A fuse contains a thin wire designed to melt and break the circuit ("blow") if the current exceeds a safe level, thus preventing damage to the appliance.'
    },
    {
        question: 'What is the turning effect of a force called?',
        answers: ['Momentum', 'Inertia', 'Power', 'Moment (or Torque)'],
        correctAnswerIndex: 3,
        rationale: 'A moment is the measure of the tendency of a force to cause a body to rotate about a specific point or axis. It is calculated as Force × perpendicular distance from the pivot.'
    }
  ],
};
