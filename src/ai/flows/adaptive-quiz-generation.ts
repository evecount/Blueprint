'use server';

/**
 * @fileOverview A flow for generating adaptive quizzes from uploaded PDFs, adjusting difficulty based on student performance.
 *
 * - adaptiveQuizGeneration - A function that generates quizzes, increasing difficulty for correctly answered questions and decreasing difficulty for incorrect ones.
 * - AdaptiveQuizGenerationInput - The input type for the adaptiveQuizGeneration function.
 * - AdaptiveQuizGenerationOutput - The return type for the adaptiveQuizGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptiveQuizGenerationInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "A PDF document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  topic: z.string().describe('The topic of the quiz.'),
  difficulty: z
    .enum(['easy', 'medium', 'hard'])
    .describe('The difficulty level of the quiz questions.'),
  correctlyAnswered: z
    .boolean()
    .optional()
    .describe(
      'Whether the last question was answered correctly.  If undefined, assume this is the first question.'
    ),
});

export type AdaptiveQuizGenerationInput = z.infer<typeof AdaptiveQuizGenerationInputSchema>;

const AdaptiveQuizGenerationOutputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  answers: z.array(z.string()).describe('The possible answers to the question.'),
  correctAnswerIndex: z
    .number()
    .describe('The index of the correct answer in the answers array.'),
  rationale: z.string().describe('The rationale for the correct answer.'),
  wrongAnswerRationales: z
    .array(z.string())
    .describe('The rationales for the incorrect answers.'),
});

export type AdaptiveQuizGenerationOutput = z.infer<typeof AdaptiveQuizGenerationOutputSchema>;

export async function adaptiveQuizGeneration(
  input: AdaptiveQuizGenerationInput
): Promise<AdaptiveQuizGenerationOutput> {
  return adaptiveQuizGenerationFlow(input);
}

const adjustDifficulty = ai.defineTool({
  name: 'adjustDifficulty',
  description: 'Adjusts the difficulty level of the quiz questions based on student performance.',
  inputSchema: z.object({
    currentDifficulty: z
      .enum(['easy', 'medium', 'hard'])
      .describe('The current difficulty level of the quiz.'),
    correctlyAnswered: z
      .boolean()
      .describe('Whether the last question was answered correctly.'),
  }),
  outputSchema: z.enum(['easy', 'medium', 'hard']),
},
async input => {
  if (input.correctlyAnswered) {
    switch (input.currentDifficulty) {
      case 'easy':
        return 'medium';
      case 'medium':
        return 'hard';
      case 'hard':
        return 'hard'; // Already at the highest difficulty
    }
  } else {
    switch (input.currentDifficulty) {
      case 'easy':
        return 'easy'; // Already at the easiest difficulty
      case 'medium':
        return 'easy';
      case 'hard':
        return 'medium';
    }
  }
  // Should never happen
  return input.currentDifficulty;
});

const generateQuizPrompt = ai.definePrompt({
  name: 'generateQuizPrompt',
  tools: [adjustDifficulty],
  input: {schema: AdaptiveQuizGenerationInputSchema},
  output: {schema: AdaptiveQuizGenerationOutputSchema},
  prompt: `You are an AI quiz generator that creates quizzes from uploaded PDF documents.

  The quiz should be on the topic of {{{topic}}}.

  Here are the contents of the PDF document:
  {{media url=pdfDataUri}}

  First, determine the difficulty for the question.
  - If 'correctlyAnswered' is undefined in the input, this is the first question. The difficulty is {{{difficulty}}}.
  - If 'correctlyAnswered' is defined in the input, you MUST use the 'adjustDifficulty' tool to determine the new difficulty for the question. The current difficulty is {{{difficulty}}} and whether it was answered correctly is {{{correctlyAnswered}}}.

  Then, using the determined difficulty, generate one question with multiple choice answers, a correct answer, a rationale for the correct answer, and rationales for the incorrect answers.
`,
});

const adaptiveQuizGenerationFlow = ai.defineFlow(
  {
    name: 'adaptiveQuizGenerationFlow',
    inputSchema: AdaptiveQuizGenerationInputSchema,
    outputSchema: AdaptiveQuizGenerationOutputSchema,
  },
  async input => {
    const {output} = await generateQuizPrompt(input);
    return output!;
  }
);
