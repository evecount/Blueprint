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
  ],
};
