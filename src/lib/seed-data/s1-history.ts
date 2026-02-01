'use client';
import type { Resource } from '@/lib/types';

export const s1History: Resource = {
  id: 's1-history',
  name: 'Secondary 1 History',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'Where did the ancient Olympic Games originate?',
      answers: ['Rome', 'Egypt', 'Greece', 'China'],
      correctAnswerIndex: 2,
      rationale:
        'The ancient Olympic Games were held in Olympia, Greece, from the 8th century BC to the 4th century AD.',
    },
    {
      question: 'Which ancient civilization is famous for its pyramids?',
      answers: ['Ancient Rome', 'Ancient Greece', 'Ancient Egypt', 'Mesopotamia'],
      correctAnswerIndex: 2,
      rationale:
        'The ancient Egyptians built massive pyramids as tombs for their pharaohs and queens. The most famous are the Pyramids of Giza.',
    },
    {
      question: 'The historical period characterized by the use of stone tools is known as the...',
      answers: ['Iron Age', 'Bronze Age', 'Stone Age', 'Information Age'],
      correctAnswerIndex: 2,
      rationale:
        'The Stone Age is a broad prehistoric period during which stone was widely used to make tools with an edge, a point, or a percussion surface.',
    },
    {
      question: 'What was the main purpose of the Great Wall of China?',
      answers: [
        'To be a tourist attraction',
        'To mark a border',
        'To protect against invasions from northern nomadic groups',
        'To serve as a major road',
      ],
      correctAnswerIndex: 2,
      rationale:
        'The Great Wall was built over centuries primarily as a defensive barrier to protect Chinese states and empires against raids and invasions from various nomadic groups of the Eurasian Steppe.',
    },
    {
      question: 'Who was the founder of the Mongol Empire, one of the largest empires in history?',
      answers: ['Kublai Khan', 'Marco Polo', 'Genghis Khan', 'Attila the Hun'],
      correctAnswerIndex: 2,
      rationale:
        'Genghis Khan, born Temüjin, was the founder and first Great Khan of the Mongol Empire.',
    },
    {
      question: 'The Renaissance was a period of "rebirth" in Europe. In which country did it begin?',
      answers: ['France', 'England', 'Spain', 'Italy'],
      correctAnswerIndex: 3,
      rationale:
        'The Renaissance began in Florence, Italy, a place with a rich cultural history where wealthy citizens could afford to support budding artists.',
    },
    {
        question: 'Which ancient civilization developed the first known system of writing, called cuneiform?',
        answers: ['Egyptians', 'Greeks', 'Sumerians (Mesopotamia)', 'Romans'],
        correctAnswerIndex: 2,
        rationale: 'The Sumerians, who lived in the region of Mesopotamia (modern-day Iraq), created cuneiform script around 3500 BC. It is one of the earliest systems of writing.'
    },
    {
        question: 'The Code of Hammurabi is one of the oldest deciphered writings of significant length in the world. From which civilization did it originate?',
        answers: ['Ancient China', 'Indus Valley', 'Ancient Egypt', 'Babylonia (Mesopotamia)'],
        correctAnswerIndex: 3,
        rationale: 'The Code of Hammurabi is a well-preserved Babylonian code of law of ancient Mesopotamia, dating back to about 1754 BC. It is famous for the principle of "an eye for an eye".'
    },
    {
        question: 'What is archaeology?',
        answers: [
            'The study of ancient languages.',
            'The study of past human life and culture by the recovery and examination of remaining material evidence, such as graves, buildings, tools, and pottery.',
            'The study of rocks and the Earth.',
            'The study of kings and queens.'
        ],
        correctAnswerIndex: 1,
        rationale: 'Archaeologists are like detectives of the past, using artifacts (objects made by humans) to understand how people lived long ago.'
    },
    {
        question: 'Which civilization flourished in the Indus River Valley, in what is now Pakistan and northwest India?',
        answers: ['The Mayan Civilization', 'The Indus Valley Civilization', 'The Roman Empire', 'The Aztec Empire'],
        correctAnswerIndex: 1,
        rationale: 'The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world\'s first great urban civilizations, known for its well-planned cities like Mohenjo-Daro.'
    },
    {
        question: 'In Ancient Greece, what was a "city-state" or "polis"?',
        answers: [
            'A large palace for the king.',
            'A religious temple.',
            'An independent city, and the land surrounding it, which had its own government.',
            'A military fortress.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Ancient Greece was not a single country but a collection of independent city-states, each with its own laws and army. Athens and Sparta were two of the most famous examples.'
    },
    {
        question: 'Who was the famous philosopher from Ancient Greece who taught Alexander the Great?',
        answers: ['Socrates', 'Plato', 'Aristotle', 'Pythagoras'],
        correctAnswerIndex: 2,
        rationale: 'Aristotle was a student of Plato and later became the personal tutor to Alexander the Great, influencing his thinking and approach to leadership.'
    },
    {
        question: 'The Roman Empire was initially a Republic. What is a republic?',
        answers: [
            'A system of government where a king or queen rules.',
            'A system of government where the people elect representatives to govern them.',
            'A system where the military is in control.',
            'A system with no government.'
        ],
        correctAnswerIndex: 1,
        rationale: 'In a republic, citizens have the power to elect officials to represent their interests in government, unlike a monarchy where power is inherited.'
    },
    {
        question: 'Who was Julius Caesar?',
        answers: [
            'The first emperor of Rome.',
            'A Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.',
            'A famous Roman philosopher.',
            'The architect who designed the Colosseum.'
        ],
        correctAnswerIndex: 1,
        rationale: 'Julius Caesar\'s conquest of Gaul and his subsequent civil war extended Rome\'s territory and power, but his ambition led to his assassination and the end of the Republic.'
    },
    {
        question: 'What was the Silk Road?',
        answers: [
            'A road made entirely of silk.',
            'A famous road in ancient Rome.',
            'A network of trade routes connecting the East and West, from China to the Mediterranean Sea.',
            'The path Marco Polo took to Italy.'
        ],
        correctAnswerIndex: 2,
        rationale: 'The Silk Road was vital for cultural and economic exchange between different civilizations for centuries, allowing goods like silk, spices, and ideas to travel vast distances.'
    },
    {
        question: 'The fall of which city in 1453 is often cited as the end of the Middle Ages?',
        answers: ['Rome', 'Athens', 'Jerusalem', 'Constantinople'],
        correctAnswerIndex: 3,
        rationale: 'The capture of Constantinople, the capital of the Byzantine Empire (the Eastern Roman Empire), by the Ottoman Empire marked a major turning point in European history.'
    },
    {
        question: 'What is a primary source in history?',
        answers: [
            'A textbook written about a historical event.',
            'An encyclopedia article.',
            'An original document or object that was created at the time of the event, such as a diary, letter, or photograph.',
            'A movie about a historical figure.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Primary sources provide a direct, first-hand account of an event or time period. Secondary sources, like textbooks, interpret and analyze primary sources.'
    },
    {
        question: 'What was the feudal system in medieval Europe?',
        answers: [
            'A system of democracy.',
            'A social and political system based on the granting of land in exchange for loyalty, military service, and labor.',
            'A system of free trade.',
            'A religious hierarchy.'
        ],
        correctAnswerIndex: 1,
        rationale: 'In feudalism, a king or lord granted land (a fief) to a vassal. In return, the vassal owed loyalty and military service. Serfs worked the land at the bottom of this hierarchy.'
    },
    {
        question: 'Which invention by Johannes Gutenberg in the 15th century dramatically increased the availability of books and the spread of information?',
        answers: ['The telescope', 'The steam engine', 'The printing press', 'The compass'],
        correctAnswerIndex: 2,
        rationale: 'The printing press with movable type allowed for the mass production of books, making knowledge more accessible and fueling the Renaissance and Reformation.'
    },
    {
        question: 'The "Neolithic Revolution" refers to what major change in human history?',
        answers: [
            'The beginning of the use of iron tools.',
            'The shift from hunting and gathering to agriculture and settlement.',
            'The start of the first sea voyages.',
            'The invention of writing.'
        ],
        correctAnswerIndex: 1,
        rationale: 'This was a fundamental change in how people lived. Agriculture allowed for permanent settlements, population growth, and the development of civilizations.'
    },
    {
        question: 'In ancient Egypt, what was the purpose of mummification?',
        answers: [
            'To punish criminals.',
            'To preserve the body for the afterlife.',
            'To create soldiers for an army.',
            'As a form of art.'
        ],
        correctAnswerIndex: 1,
        rationale: 'The ancient Egyptians believed that the body needed to be preserved so that the soul could recognize it and live on in the afterlife.'
    },
    {
        question: 'Which of the Four Great Inventions of ancient China was used to create fireworks and early rockets?',
        answers: ['Papermaking', 'The compass', 'Printing', 'Gunpowder'],
        correctAnswerIndex: 3,
        rationale: 'Gunpowder, initially discovered by Daoist alchemists seeking an elixir of immortality, was soon adapted for military use and for celebrations.'
    },
    {
        question: 'Democracy, a system of government by the people, was first developed in which ancient city-state?',
        answers: ['Sparta', 'Rome', 'Babylon', 'Athens'],
        correctAnswerIndex: 3,
        rationale: 'Athenian democracy, developed around the 5th century BC, allowed eligible citizens to participate directly in the making of laws.'
    },
    {
        question: 'Who was a famous female pharaoh of ancient Egypt?',
        answers: ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'All of the above'],
        correctAnswerIndex: 3,
        rationale: 'All three were powerful and influential women in ancient Egypt. Hatshepsut ruled as a pharaoh in her own right, Nefertiti was a queen known for her beauty, and Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt.'
    },
    {
        question: 'What does the term "BCE" stand for in historical dating?',
        answers: ['Before Common Era', 'Before Christian Era', 'Before Caesar\'s Empire', 'Before Century End'],
        correctAnswerIndex: 0,
        rationale: '"Before Common Era" (BCE) is the secular equivalent of "Before Christ" (BC). It is used to date events before the year 1.'
    }
  ],
};
