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
});
export type GenerateSingleQuestionInput = z.infer<typeof GenerateSingleQuestionInputSchema>;

const GenerateSingleQuestionOutputSchema = z.object({
    question: z.string().describe("The transcribed text of the primary question."),
    subject: z.string().describe("The academic subject of the question (e.g., 'Physics', 'Biology', 'History'). Standardize common subjects."),
    level: z.string().describe("The academic grade level for the question (e.g., 'Primary 5', 'Secondary 3'). Standardize to this format."),
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

Your tasks are to:
1.  **Classify the Question**: Determine the academic subject and grade level from the text.
2.  **Create a Study Card**: Convert the text into a high-quality, multiple-choice question.

**Classification Instructions:**
- Analyze the user's submitted question to determine the specific academic subject (e.g., 'Physics', 'Biology', 'History').
- Determine the most appropriate academic level (e.g., 'Primary 5', 'Secondary 3', 'Advanced').
- Populate the 'subject' and 'level' fields. Use standardized terms and formats (e.g. 'Primary 1', 'Secondary 4', NOT 'P1' or 'Sec 4').

**Study Card Instructions:**
- Rephrase the question if necessary into a clear, high-quality multiple-choice question format.
- Provide the single best correct answer and generate three plausible but incorrect distractor answers.
- Provide a detailed rationale explaining why the correct answer is right and the others are wrong, suitable for a student.

**Safety Instruction:** If the submitted text contains any personal information (names, addresses, contact details), R-rated content, or is not a discernible academic question, you must refuse to process it. Instead, return a JSON object with the 'question' field set to "Invalid Input" and an empty 'answers' array.

User's question: {{{questionText}}}

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
