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
1.  **Classify the Question**: Analyze the user's submitted question to determine the specific academic subject (e.g., 'Physics', 'Biology', 'History') and the most appropriate academic level (e.g., 'Primary 5', 'Secondary 3'). Use standardized terms and formats (e.g. 'Primary 1', 'Secondary 4', NOT 'P1' or 'Sec 4').
2.  **Create a Study Card**: Convert the text into a high-quality, multiple-choice question. Rephrase the question if necessary. Provide the single best correct answer and generate three plausible but incorrect distractor answers.
3.  **Provide a Rationale**: Write a detailed explanation for why the correct answer is right and the others are wrong.

**CRITICAL INSTRUCTION: Rationale Complexity**
The language and complexity of the rationale MUST be tailored to the determined academic level.
-   **For primary school levels (e.g., 'Primary 1-6')**: Use simple, direct language a child can understand. AVOID technical jargon. For example, instead of "the simple past tense is required", say "the story happened yesterday, so we need a word for the past".
-   **For secondary school and advanced levels**: You can use more formal and technical language appropriate for older students.

**Curriculum-Specific Instructions for Singapore Primary 1 English:**
If the question is identified as 'Primary 1' and 'English', it should follow these patterns:
-   **Grammar MCQ**: Focus on simple tenses (past/present), pronouns, and prepositions (in, on, under).
-   **Vocabulary MCQ**: Use words related to common household items, school, animals, and simple actions.
-   **Cloze-style Questions**: Present a sentence with a blank and offer word choices.

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
