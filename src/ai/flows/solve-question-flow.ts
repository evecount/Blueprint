'use server';

/**
 * @fileOverview Solves a user-submitted question by converting it into a multiple-choice format.
 *
 * - solveQuestion - A function that handles the question-solving process.
 * - SolveQuestionInput - The input type for the solveQuestion function.
 * - SolveQuestionOutput - The return type for the solveQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolveQuestionInputSchema = z.object({
  question: z.string().describe('The user-submitted question to be answered and formatted.'),
  context: z.string().describe('The subject or context for the question (e.g., M8A Exam).'),
});
export type SolveQuestionInput = z.infer<typeof SolveQuestionInputSchema>;

// The output is a single QuizQuestion object
const SolveQuestionOutputSchema = z.object({
    question: z.string(),
    answers: z.array(z.string()),
    correctAnswerIndex: z.number(),
    rationale: z.string(),
})
export type SolveQuestionOutput = z.infer<typeof SolveQuestionOutputSchema>;

export async function solveQuestion(input: SolveQuestionInput): Promise<SolveQuestionOutput> {
  return solveQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solveQuestionPrompt',
  input: {schema: SolveQuestionInputSchema},
  output: {schema: SolveQuestionOutputSchema},
  prompt: `You are an expert exam question creator and subject matter expert for the context: {{{context}}}.

A user has submitted the following question they are stuck on. Your task is to:
1.  Rephrase the user's input into a clear, high-quality multiple-choice question.
2.  Provide the single best correct answer.
3.  Generate three plausible but definitively incorrect distractor answers.
4.  Provide a detailed rationale explaining why the correct answer is right and the others are wrong, referencing core concepts related to the context.

The user's question is:
"{{{question}}}"

Ensure the entire output conforms to the JSON schema, including a 'question', an array of 'answers', the 'correctAnswerIndex', and a 'rationale'.`,
});

const solveQuestionFlow = ai.defineFlow(
  {
    name: 'solveQuestionFlow',
    inputSchema: SolveQuestionInputSchema,
    outputSchema: SolveQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
