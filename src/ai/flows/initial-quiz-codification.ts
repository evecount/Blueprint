
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

You will be provided text content. Extract quiz questions and answers from the text and convert them into JSON format.

The JSON should be an array of objects, where each object represents a question and has the following keys:
- question: The text of the question.
- answers: An array of strings, where each string is a possible answer.
- correctAnswerIndex: The index of the correct answer in the answers array.
- rationale: A detailed explanation of why the correct answer is correct, with direct reference to the provided material, and why the incorrect answers are incorrect. **Crucially, the language and complexity of this rationale should be tailored to the likely academic level of the source material. For primary school content, use simple, direct language a child can understand and avoid complex jargon.**

Ensure the JSON is valid and can be parsed without errors. Be very careful to ensure that 'correctAnswerIndex' is an integer between 0 and the number of answers - 1. Also, it is vital that ALL information needed to answer the question is contained within this JSON structure, and that the entire JSON can be parsed without errors, and that the whole structure conforms to these instructions. If a question cannot be reliably and completely converted, it should be excluded from the JSON output. Focus on accuracy and completeness.

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
