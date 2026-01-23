import type { QuizQuestion } from './types';

export const m8aQuizQuestions: QuizQuestion[] = [
  {
    question: 'Under the Securities and Futures Act (SFA), what is the primary purpose of the licensing regime for capital markets intermediaries?',
    answers: [
      'To generate revenue for the Monetary Authority of Singapore (MAS).',
      'To ensure intermediaries are fit and proper, and to protect the investing public.',
      'To limit the number of participants operating in the capital markets.',
      'To provide employment for compliance officers.',
    ],
    correctAnswerIndex: 1,
    rationale: 'The SFA\'s licensing requirements are designed to ensure that firms and individuals operating in the capital markets meet high standards of competence and integrity, thereby protecting the interests and trust of the public.',
  },
  {
    question: 'An individual is considered an "insider" under the SFA if they possess information that is:',
    answers: [
      'Publicly available and widely reported in the news.',
      'Not material and would not influence a person\'s decision to trade.',
      'Material, non-public, and price-sensitive.',
      'Only related to changes in government policy.',
    ],
    correctAnswerIndex: 2,
    rationale: 'The legal definition of inside information is specific. It must be material and non-public, meaning it is not generally available and is likely to have a significant effect on the price or value of securities if it were.',
  },
  {
    question: 'What is the primary role of the Singapore Exchange (SGX) as a front-line regulator?',
    answers: [
      'To set national monetary policy.',
      'To issue government bonds like SGS and T-bills.',
      'To enforce listing rules, trading rules, and supervise market participants on its platform.',
      'To provide legal advice and counsel to listed companies.',
    ],
    correctAnswerIndex: 2,
    rationale: 'The SGX is responsible for maintaining a fair, orderly, and transparent market. It fulfills this role by setting the rules for listed companies and trading members, and by conducting surveillance to detect and deter market misconduct.',
  },
  {
    question: 'What does the offense of "Tipping Off" refer to under the Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act (CDSA)?',
    answers: [
      'Informing a client that you have filed a Suspicious Transaction Report (STR) about them.',
      'Giving a client a particularly good stock tip.',
      'Failing to report a suspicious transaction in a timely manner.',
      'Investing in a high-risk security on behalf of a client.',
    ],
    correctAnswerIndex: 0,
    rationale: 'Tipping off is a serious offense. It involves informing any person—directly or indirectly—that a suspicious transaction report has been filed or that an investigation is being conducted, as this could prejudice the investigation.',
  },
  {
    question: 'Creating a false or misleading appearance of active trading in a security by entering matching buy and sell orders through different brokers is known as:',
    answers: [
      'Dollar-cost averaging.',
      'Arbitrage.',
      'Churning.',
      'Wash trading.',
    ],
    correctAnswerIndex: 3,
    rationale: 'Wash trading is a form of market manipulation where an investor simultaneously buys and sells the same financial instruments to create a misleading appearance of market activity, without any change in beneficial ownership, to deceive other market participants.',
  },
];
