'use client';
import type { Resource } from '@/lib/types';

export const p4SocialStudies: Resource = {
  id: 'p4-social-studies',
  name: 'Primary 4 Social Studies',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: "What is the name of Singapore's national flower?",
      answers: ['Rose', 'Hibiscus', 'Vanda Miss Joaquim', 'Tulip'],
      correctAnswerIndex: 2,
      rationale:
        'The Vanda Miss Joaquim, a hybrid orchid, was named Singapore\'s national flower in 1981 for its vibrancy and hardiness.',
    },
    {
      question: 'Who was the first Prime Minister of Singapore?',
      answers: ['Goh Chok Tong', 'Lee Kuan Yew', 'Yusof Ishak', 'Lee Hsien Loong'],
      correctAnswerIndex: 1,
      rationale:
        'Lee Kuan Yew was a key figure in Singapore\'s independence and served as its first Prime Minister from 1959 to 1990.',
    },
    {
      question: 'The Merlion is a mythical creature with the head of a lion and the body of a...',
      answers: ['Fish', 'Dragon', 'Bird', 'Horse'],
      correctAnswerIndex: 0,
      rationale:
        'The Merlion is the national symbol of Singapore, representing its origins as a fishing village (the fish body) and its original name, Singapura or "lion city" (the lion head).',
    },
    {
      question: 'Which of these is NOT one of Singapore\'s four official languages?',
      answers: ['English', 'Japanese', 'Malay', 'Tamil'],
      correctAnswerIndex: 1,
      rationale:
        'The four official languages of Singapore are English, Malay, Mandarin Chinese, and Tamil. Japanese is not an official language.',
    },
    {
      question: 'What is the main purpose of the "Total Defence" concept in Singapore?',
      answers: [
        'To encourage tourism',
        'To ensure everyone plays a part in defending the nation',
        'To promote a single religion',
        'To build more shopping malls',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Total Defence is Singapore\'s national defence concept, which involves all citizens in a comprehensive, all-round defence of the country.',
    },
    {
      question: 'What body of water surrounds the island of Singapore?',
      answers: ['Pacific Ocean', 'Indian Ocean', 'Singapore Strait', 'South China Sea'],
      correctAnswerIndex: 2,
      rationale:
        'Singapore is an island city-state located at the southern tip of the Malay Peninsula, bordered by the Singapore Strait.',
    },
    {
        question: 'Which group of early immigrants to Singapore came from South India and contributed mainly as labourers and moneylenders?',
        answers: ['Chinese', 'Malays', 'Indians', 'Europeans'],
        correctAnswerIndex: 2,
        rationale: 'Early Indian immigrants, particularly from Tamil Nadu, played a significant role in the development of colonial Singapore, working in various sectors including labour and finance.'
    },
    {
        question: 'Sir Stamford Raffles founded modern Singapore in which year?',
        answers: ['1786', '1819', '1867', '1942'],
        correctAnswerIndex: 1,
        rationale: 'In 1819, Sir Stamford Raffles of the British East India Company established a trading post on the island, which marked the beginning of modern Singapore.'
    },
    {
        question: 'What is the name of Singapore\'s main international airport?',
        answers: ['Seletar Airport', 'Paya Lebar Airport', 'Changi Airport', 'Kallang Airport'],
        correctAnswerIndex: 2,
        rationale: 'Changi Airport is consistently rated as one of the world\'s best airports and is a major aviation hub in Asia.'
    },
    {
        question: 'The period when Singapore was occupied by the Japanese during World War II is known as:',
        answers: ['The British Rule', 'The Merger', 'The Japanese Occupation', 'The Renaissance'],
        correctAnswerIndex: 2,
        rationale: 'The Japanese Occupation lasted from 1942 to 1945 and was a very difficult period in Singapore\'s history, known as "Syonan-to".'
    },
    {
        question: 'Which of these is a traditional food often eaten by Malay people in Singapore?',
        answers: ['Sushi', 'Pizza', 'Nasi Lemak', 'Hainanese Chicken Rice'],
        correctAnswerIndex: 2,
        rationale: 'Nasi Lemak, a fragrant rice dish cooked in coconut milk and pandan leaf, is a popular and iconic dish in Malay cuisine.'
    },
    {
        question: 'What does the red colour on the Singapore flag represent?',
        answers: ['Purity and virtue', 'Peace and progress', 'Universal brotherhood and equality of man', 'The sea'],
        correctAnswerIndex: 2,
        rationale: 'The red on the Singapore flag symbolises universal brotherhood and the equality of man. The white symbolises pervading and everlasting purity and virtue.'
    },
    {
        question: 'What is the name of the river that flows through the city centre of Singapore?',
        answers: ['Kallang River', 'Geylang River', 'Rochor River', 'Singapore River'],
        correctAnswerIndex: 3,
        rationale: 'The Singapore River was the historical heart of the city, where trade and commerce first flourished. It is now a major tourist attraction.'
    },
    {
        question: 'Which festival, celebrated by Chinese people in Singapore, involves the giving of red packets (hongbao)?',
        answers: ['Hari Raya Puasa', 'Deepavali', 'Chinese New Year', 'Christmas'],
        correctAnswerIndex: 2,
        rationale: 'Chinese New Year is a major festival celebrating the start of the new year on the traditional Chinese calendar. Giving red packets containing money is a key tradition.'
    },
    {
        question: 'Singapore is a small island with limited natural resources. Which resource is particularly scarce and requires careful management?',
        answers: ['Sand', 'Sunlight', 'Water', 'Wind'],
        correctAnswerIndex: 2,
        rationale: 'As a small island, Singapore has no natural lakes or aquifers and relies heavily on rainfall, imported water, and technology like NEWater and desalination.'
    },
    {
        question: 'Who is the head of state in Singapore?',
        answers: ['The Prime Minister', 'The Chief Justice', 'The Speaker of Parliament', 'The President'],
        correctAnswerIndex: 3,
        rationale: 'The President is the head of state in Singapore. The Prime Minister is the head of government.'
    },
    {
        question: 'What is a "HDB flat"?',
        answers: ['A type of luxury condominium', 'A house with a large garden', 'Public housing built by the Housing & Development Board', 'A traditional shophouse'],
        correctAnswerIndex: 2,
        rationale: 'The Housing & Development Board (HDB) is Singapore\'s public housing authority. The vast majority of Singaporeans live in HDB flats.'
    },
    {
        question: 'Which ethnic group in Singapore traditionally celebrates the festival of Deepavali, also known as the Festival of Lights?',
        answers: ['Chinese', 'Malay', 'Indian', 'Eurasian'],
        correctAnswerIndex: 2,
        rationale: 'Deepavali is a major Hindu festival celebrated by the Indian community, symbolising the victory of light over darkness and good over evil.'
    },
    {
        question: 'The five stars on the Singapore flag represent:',
        answers: ['The five main islands of Singapore', 'Wealth, health, happiness, family, and long life', 'Democracy, peace, progress, justice and equality', 'The five pillars of Total Defence'],
        correctAnswerIndex: 2,
        rationale: 'The five stars on the national flag stand for the ideals of democracy, peace, progress, justice and equality.'
    },
    {
        question: 'What does the term "kampong" refer to in Singapore\'s history?',
        answers: ['A modern skyscraper', 'A traditional village', 'A busy shopping mall', 'A type of boat'],
        correctAnswerIndex: 1,
        rationale: 'Kampong is the Malay word for village. In the past, many Singaporeans lived in kampongs before the development of modern public housing.'
    },
    {
        question: 'Which of these places in Singapore is a UNESCO World Heritage Site?',
        answers: ['Sentosa Island', 'Marina Bay Sands', 'Singapore Botanic Gardens', 'The Singapore Zoo'],
        correctAnswerIndex: 2,
        rationale: 'The Singapore Botanic Gardens was inscribed as a UNESCO World Heritage Site in 2015. It is the first and only tropical botanic garden on the list.'
    },
    {
        question: 'What is NEWater?',
        answers: ['A brand of bottled mineral water', 'Water imported from Malaysia', 'High-grade, reclaimed water produced from treated used water', 'Rainwater collected in reservoirs'],
        correctAnswerIndex: 2,
        rationale: 'NEWater is one of Singapore\'s "Four National Taps," a pillar of water sustainability. It is purified using advanced membrane technologies.'
    },
    {
        question: 'What does the crescent moon on the Singapore flag represent?',
        answers: ['The fishing industry', 'A young nation on the ascendant', 'The night sky', 'The importance of science'],
        correctAnswerIndex: 1,
        rationale: 'The crescent moon represents a young nation on the rise, symbolising Singapore\'s progress and growth.'
    },
    {
        question: 'In the past, Singapore\'s economy was based on "entrepôt trade". What does this mean?',
        answers: ['Growing rubber and palm oil', 'Manufacturing computer chips', 'Processing and re-exporting goods to other countries', 'Fishing and farming'],
        correctAnswerIndex: 2,
        rationale: 'Entrepôt trade means importing goods from one country and then re-exporting them to others, often after some processing. Singapore\'s strategic location made it an ideal hub for this.'
    },
    {
        question: 'Which of these is a core value taught in Singapore schools, emphasizing the importance of community over self?',
        answers: ['Individualism', 'Competition', 'Meritocracy', 'Communitarianism'],
        correctAnswerIndex: 3,
        rationale: 'Communitarianism is a key part of Singapore\'s shared values, stressing that the needs of the community and nation can sometimes come before individual interests.'
    }
  ],
};
