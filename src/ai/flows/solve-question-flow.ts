'use server';

/**
 * @fileOverview Solves a user-submitted question by converting it into a multiple-choice format from an image.
 *
 * - solveQuestion - A function that handles the question-solving process.
 * - SolveQuestionInput - The input type for the solveQuestion function.
 * - SolveQuestionOutput - The return type for the solveQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolveQuestionInputSchema = z.object({
  imageDataUri: z.string().describe(
    "A photo of the question, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
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

A user has submitted a photo of a question they are stuck on. Your task is to:
1.  Analyze the photo to identify and transcribe the user's question.
2.  Rephrase the transcribed question into a clear, high-quality multiple-choice question.
3.  Provide the single best correct answer.
4.  Generate three plausible but definitively incorrect distractor answers.
5.  Provide a detailed rationale explaining why the correct answer is right and the others are wrong, referencing core concepts related to the context.

The user's photo is here:
{{media url=imageDataUri}}

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
