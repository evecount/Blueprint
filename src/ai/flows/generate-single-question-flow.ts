'use server';

/**
 * @fileOverview Converts a user-submitted text question into a multiple-choice format.
 *
 * - generateSingleQuestion - A function that handles the question conversion process.
 * - GenerateSingleQuestionInput - The input type for the generateSingleQuestion function.
 * - GenerateSingleQuestionOutput - The return type for the generateSingleQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSingleQuestionInputSchema = z.object({
  questionText: z.string().describe(
    "The text of the question submitted by the user."
  ),
  context: z.string().describe('The subject or context for the question (e.g., Secondary 4 Chemistry).'),
});
export type GenerateSingleQuestionInput = z.infer<typeof GenerateSingleQuestionInputSchema>;

const GenerateSingleQuestionOutputSchema = z.object({
    question: z.string().describe("The transcribed text of the primary question."),
    answers: z.array(z.string()).describe("An array of 4-5 possible answers for the question."),
    correctAnswerIndex: z.number().describe("The index of the correct answer in the 'answers' array."),
    rationale: z.string().describe("A detailed explanation of why the correct answer is right and the others are wrong."),
});
export type GenerateSingleQuestionOutput = z.infer<typeof GenerateSingleQuestionOutputSchema>;


export async function generateSingleQuestion(input: GenerateSingleQuestionInput): Promise<GenerateSingleQuestionOutput> {
  return generateSingleQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSingleQuestionPrompt',
  input: {schema: GenerateSingleQuestionInputSchema},
  output: {schema: GenerateSingleQuestionOutputSchema},
  prompt: `You are an expert study assistant. A user has submitted a text-based question.

Your task is to convert the user's question into a high-quality, multiple-choice study card.

1.  Analyze the user's submitted question text.
2.  Rephrase it if necessary into a clear, high-quality multiple-choice question format.
3.  Provide the single best correct answer and generate three plausible but incorrect distractor answers.
4.  Provide a detailed rationale explaining why the correct answer is right and the others are wrong, suitable for a student.

**Safety Instruction:** If the submitted text contains any personal information (names, addresses, contact details), R-rated content, or is not a discernible academic question, you must refuse to process it. Instead, return a JSON object with the 'question' field set to "Invalid Input" and an empty 'answers' array.

User's question: {{{questionText}}}

Context for the question subject: {{{context}}}

Ensure the entire output strictly conforms to the JSON output schema.`,
});

const generateSingleQuestionFlow = ai.defineFlow(
  {
    name: 'generateSingleQuestionFlow',
    inputSchema: GenerateSingleQuestionInputSchema,
    outputSchema: GenerateSingleQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
