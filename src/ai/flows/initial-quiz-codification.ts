
'use server';

/**
 * @fileOverview Converts and codifies quiz questions from uploaded text content.
 *
 * - generateQuiz - A function that handles the quiz question conversion and codification process.
 * - GenerateQuizInput - The input type for the generateQuiz function.
 * - GenerateQuizOutput - The return type for the generateQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuizInputSchema = z.object({
  content: z.string().describe('The text content to generate a quiz from (e.g., from a markdown file).'),
  resourceName: z.string().describe('The name of the resource being uploaded (e.g. Chapter 1, Study Guide)'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

const GenerateQuizOutputSchema = z.object({
  codifiedQuestions: z
    .string()
    .describe('A JSON string containing an array of quiz questions and answers.'),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

export async function generateQuiz(input: GenerateQuizInput): Promise<GenerateQuizOutput> {
  return generateQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuizPrompt',
  input: {schema: GenerateQuizInputSchema},
  output: {schema: GenerateQuizOutputSchema},
  prompt: `You are an expert at converting study materials into JSON-formatted quiz questions.

You will be provided text content and a resource name. Your task is to extract quiz questions from the text and convert them into a JSON array of objects. Each object must have the following keys:
- question: The text of the question.
- answers: An array of strings, with 4-5 possible answers.
- correctAnswerIndex: The index of the correct answer in the answers array.
- rationale: A detailed explanation of why the correct answer is correct and the others are wrong.

**CRITICAL INSTRUCTION: Rationale Complexity and Curriculum Awareness**
The language and complexity of this rationale MUST be tailored to the likely academic level of the source material.
-   **If the Resource Name suggests a primary school level (e.g., 'Primary 1', 'P3 Science')**: Use simple, direct language a child can understand. AVOID complex jargon. For example, instead of "the simple past tense is required", say "the story happened yesterday, so we need a word for the past".
-   **If the Resource Name suggests 'Primary 1 English'**: The content will likely contain Grammar, Vocabulary, and Comprehension questions. Frame these as Multiple-Choice Questions (MCQs), such as fill-in-the-blank sentences.

Focus on accuracy and completeness. Ensure the JSON is valid and can be parsed without errors. Be very careful that 'correctAnswerIndex' is an integer between 0 and the number of answers - 1. If a question cannot be reliably converted, it should be excluded.

Resource Name: {{{resourceName}}}
Content: {{{content}}}`,
});

const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
