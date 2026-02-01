'use client';
import type { Resource } from '@/lib/types';

export const advFinance: Resource = {
  id: 'adv-finance',
  name: 'Just Finance Stuff',
  createdAt: new Date().toISOString(),
  questions: [
    {
      question: 'What is dollar-cost averaging?',
      answers: [
        'An investment strategy where you try to time the market to buy low and sell high.',
        'Investing a fixed amount of money at regular intervals, regardless of market fluctuations.',
        'A method for calculating the average cost of all your investments.',
        'A strategy to only invest in US dollar-denominated assets.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Dollar-cost averaging is an investment strategy that involves investing a fixed sum of money at regular intervals. This approach can help reduce the impact of market volatility by averaging out the purchase price over time. It is the opposite of market timing (a).',
    },
    {
      question: 'What does NAV stand for in the context of a unit trust?',
      answers: ['Net Asset Value', 'New Asset Valuation', 'Nominal Asset Value', 'Net-Associated Value'],
      correctAnswerIndex: 0,
      rationale:
        "NAV stands for Net Asset Value. It represents the per-unit market value of the fund, calculated by taking the total value of the fund's assets and subtracting its liabilities, then dividing by the number of units outstanding.",
    },
    {
      question: 'What is "diversification"?',
      answers: [
        'A strategy of concentrating investments in a single asset class.',
        'A risk management strategy that mixes a wide variety of investments within a portfolio.',
        'A method of timing the market to maximize returns.',
        'A way to guarantee that an investment will not lose money.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'Diversification is the principle of "not putting all your eggs in one basket." It involves spreading investments across various assets, industries, and geographic locations to reduce unsystematic (specific) risk. (a) is the opposite of diversification.',
    },
    {
      question: 'The "Sharpe Ratio" is used to measure:',
      answers: [
        'The total return of a fund.',
        'The risk-adjusted return of an investment.',
        'The level of diversification in a portfolio.',
        'The amount of leverage used by a fund.',
      ],
      correctAnswerIndex: 1,
      rationale:
        'The Sharpe Ratio measures the average return earned in excess of the risk-free rate per unit of volatility or total risk. A higher Sharpe Ratio indicates better performance on a risk-adjusted basis.',
    },
    {
      question: 'What is the primary purpose of a "prospectus" for a unit trust?',
      answers: [
        "To provide a summary of the fund's past performance.",
        'To serve as a marketing brochure to attract investors.',
        'To provide detailed information about the fund, including its investment objectives, strategies, risks, and fees.',
        'To list the names of all the current unitholders.',
      ],
      correctAnswerIndex: 2,
      rationale:
        'A prospectus is a mandatory legal document that provides investors with all the material information about an investment offering, helping them make an informed decision. While it contains performance data (a), it is much more than a marketing brochure (b) or a list of unitholders (d).',
    },
    {
      question: '"A balanced fund" typically invests in:',
      answers: ['Only equities.', 'Only bonds.', 'A mix of equities and bonds.', 'Only money market instruments.'],
      correctAnswerIndex: 2,
      rationale:
        'Balanced funds aim to provide a "balance" of growth (from equities) and income (from bonds). They hold a mix of both asset classes to moderate risk compared to a pure equity fund.',
    },
    {
        question: 'What is a "blue-chip" stock?',
        answers: [
            'A stock that costs less than $1 per share.',
            'A stock from a new, high-growth technology company.',
            'A stock from a large, well-established, and financially sound company.',
            'A stock that has a blue-colored certificate.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Blue-chip stocks are from companies that have a history of reliable performance and often pay dividends. They are generally considered less volatile than smaller-cap stocks.'
    },
    {
        question: 'What is the main advantage of an Exchange-Traded Fund (ETF) over a traditional unit trust?',
        answers: [
            'They always have higher returns.',
            'They can be bought and sold throughout the day like a stock.',
            'They are managed by more experienced fund managers.',
            'They are completely risk-free.'
        ],
        correctAnswerIndex: 1,
        rationale: 'ETFs are traded on stock exchanges, so their prices fluctuate throughout the day and they can be bought or sold at any time the market is open. Traditional unit trusts are typically priced only once per day.'
    },
    {
        question: 'If a bond has a higher coupon rate, what does this generally imply?',
        answers: [
            'It is a safer investment.',
            'It pays a lower annual interest payment.',
            'It is issued by a more stable government.',
            'It may carry a higher risk.'
        ],
        correctAnswerIndex: 3,
        rationale: 'A higher coupon rate (interest payment) is often used to compensate investors for taking on more risk, such as the risk of the issuer defaulting on its payments.'
    },
    {
        question: 'What is "inflation"?',
        answers: [
            'A decrease in the general price level of goods and services.',
            'A period of high stock market returns.',
            'The rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling.',
            'The interest rate set by the central bank.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Inflation erodes the purchasing power of money, meaning your dollar buys less than it did before. Central banks often try to manage inflation to maintain economic stability.'
    },
    {
        question: 'What is a "REIT"?',
        answers: [
            'A government bond.',
            'A type of high-risk technology stock.',
            'A company that owns and typically operates income-producing real estate.',
            'A retirement savings account.'
        ],
        correctAnswerIndex: 2,
        rationale: 'REIT stands for Real Estate Investment Trust. Investing in a REIT allows individuals to invest in large-scale properties without having to buy them directly. They often pay out high dividends.'
    },
    {
        question: 'What is the "P/E ratio"?',
        answers: [
            'A measure of a company\'s debt.',
            'A ratio for valuing a company that measures its current share price relative to its per-share earnings.',
            'The dividend yield of a stock.',
            'The total profit of a company.'
        ],
        correctAnswerIndex: 1,
        rationale: 'The Price-to-Earnings (P/E) ratio is a common metric used to determine if a stock is overvalued or undervalued. A high P/E could mean the stock is overvalued or that investors are expecting high growth rates in the future.'
    },
    {
        question: 'Which of the following is considered the most "liquid" asset?',
        answers: [
            'A house',
            'A painting',
            'Cash in a savings account',
            'A long-term government bond'
        ],
        correctAnswerIndex: 2,
        rationale: 'Liquidity refers to how easily an asset can be converted into cash without affecting its market price. Cash in a savings account is the most liquid, while assets like property are illiquid.'
    },
    {
        question: 'What is the role of a central bank, like the Monetary Authority of Singapore (MAS)?',
        answers: [
            'To print all the money for the government.',
            'To manage a country\'s currency, money supply, and interest rates.',
            'To provide loans directly to individuals.',
            'To regulate the stock market prices.'
        ],
        correctAnswerIndex: 1,
        rationale: 'Central banks oversee the monetary system for a nation. Their goals often include controlling inflation, supervising the banking system, and ensuring financial stability.'
    },
    {
        question: 'What does "compound interest" mean?',
        answers: [
            'A very complicated type of interest.',
            'Interest that is only calculated on the principal amount.',
            'The interest you earn on both your original principal and the accumulated interest.',
            'An interest rate that is fixed and does not change.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Compound interest is often called "interest on interest." It allows an investment to grow at a faster rate than simple interest, which is calculated only on the principal amount.'
    },
    {
        question: 'What type of investment represents ownership in a corporation?',
        answers: [
            'A bond',
            'A stock (or equity)',
            'A certificate of deposit',
            'A money market fund'
        ],
        correctAnswerIndex: 1,
        rationale: 'When you buy a stock, you are buying a small piece of ownership in that company. This gives you a claim on its assets and earnings.'
    },
    {
        question: 'What is a "bear market"?',
        answers: [
            'A market where stock prices are rising or expected to rise.',
            'A market where stock prices are falling or expected to fall.',
            'A market that is very active with high trading volume.',
            'A market for agricultural commodities.'
        ],
        correctAnswerIndex: 1,
        rationale: 'A bear market is typically characterized by a prolonged price decline of 20% or more from recent highs amid widespread pessimism. The opposite is a "bull market".'
    },
    {
        question: 'What is "asset allocation"?',
        answers: [
            'Choosing the single best stock to invest in.',
            'The process of selling all your assets for cash.',
            'An investment strategy that aims to balance risk and reward by apportioning a portfolio\'s assets according to an individual\'s goals, risk tolerance, and investment horizon.',
            'A legal document that lists all your assets.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Asset allocation is the practice of dividing an investment portfolio among different asset categories, such as stocks, bonds, and cash. It is a key concept in managing investment risk.'
    },
    {
        question: 'The CPF Special Account (SA) is designed for what primary purpose?',
        answers: [
            'Paying for a house.',
            'Covering medical expenses.',
            'Short-term savings.',
            'Retirement savings.'
        ],
        correctAnswerIndex: 3,
        rationale: 'The Central Provident Fund (CPF) Special Account is a retirement account that earns a higher interest rate and is intended to provide for members in their old age.'
    },
    {
        question: 'What is "volatility" in the context of investing?',
        answers: [
            'The guaranteed return of an investment.',
            'The measure of how quickly an investment can be sold.',
            'The degree of variation of a trading price series over time, usually measured by the standard deviation of returns.',
            'The amount of fees charged by a fund manager.'
        ],
        correctAnswerIndex: 2,
        rationale: 'Higher volatility means that an asset\'s price can change dramatically over a short time period in either direction. It is a common measure of risk.'
    },
    {
        question: 'What is a "dividend"?',
        answers: [
            'The fee you pay to a broker for buying a stock.',
            'A distribution of a portion of a company\'s earnings, decided by the board of directors, to a class of its shareholders.',
            'The increase in a stock\'s price over time.',
            'A type of tax on investment gains.'
        ],
        correctAnswerIndex: 1,
        rationale: 'Dividends are payments made by a corporation to its shareholders. They are a way for companies to share their profits with investors.'
    },
    {
        question: 'What is the primary risk associated with investing in bonds?',
        answers: [
            'Market risk (price fluctuations)',
            'Interest rate risk and credit/default risk',
            'Liquidity risk',
            'Currency risk'
        ],
        correctAnswerIndex: 1,
        rationale: 'Interest rate risk is the risk that a bond\'s price will fall as interest rates rise. Credit risk is the risk that the issuer will be unable to make its promised interest payments or repay the principal.'
    },
    {
        question: 'In Singapore, what is the Supplementary Retirement Scheme (SRS)?',
        answers: [
            'A compulsory savings account for all citizens.',
            'A government-run pension plan.',
            'A voluntary scheme to encourage individuals to save for retirement, over and above their CPF savings.',
            'A type of health insurance.'
        ],
        correctAnswerIndex: 2,
        rationale: 'The SRS is a voluntary scheme that complements the CPF. Contributions to SRS are eligible for tax relief, and investment returns are tax-free before withdrawal.'
    },
    {
        question: 'Which of these is NOT a typical characteristic of a growth stock?',
        answers: [
            'High P/E ratio',
            'Pays a high dividend',
            'Company reinvests most of its earnings back into the business',
            'Often in the technology or healthcare sector'
        ],
        correctAnswerIndex: 1,
        rationale: 'Growth companies typically reinvest their profits to fuel further expansion rather than paying them out to shareholders as dividends. High dividends are more characteristic of "value" or "income" stocks.'
    },
    {
        question: 'A "financial planner" is a professional who helps people:',
        answers: [
            'File their taxes.',
            'Manage their total financial situation by creating a comprehensive plan.',
            'Pick winning stocks.',
            'Get loans from a bank.'
        ],
        correctAnswerIndex: 1,
        rationale: 'A financial planner takes a holistic view of a person\'s finances, including budgeting, savings, investments, insurance, and retirement, to create a strategy to meet their financial goals.'
    }
  ],
};
