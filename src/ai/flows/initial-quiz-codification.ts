'use server';

/**
 * @fileOverview Converts and codifies quiz questions from uploaded PDFs.
 *
 * - initialQuizCodification - A function that handles the quiz question conversion and codification process.
 * - InitialQuizCodificationInput - The input type for the initialQuizCodification function.
 * - InitialQuizCodificationOutput - The return type for the initialQuizCodification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialQuizCodificationInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "A PDF document as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  resourceName: z.string().describe('The name of the resource being uploaded (e.g. Chapter 1, Midterm Exam)'),
});
export type InitialQuizCodificationInput = z.infer<typeof InitialQuizCodificationInputSchema>;

const InitialQuizCodificationOutputSchema = z.object({
  codifiedQuestions: z
    .string()
    .describe('A JSON string containing an array of quiz questions and answers.'),
});
export type InitialQuizCodificationOutput = z.infer<typeof InitialQuizCodificationOutputSchema>;

export async function initialQuizCodification(input: InitialQuizCodificationInput): Promise<InitialQuizCodificationOutput> {
  return initialQuizCodificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialQuizCodificationPrompt',
  input: {schema: InitialQuizCodificationInputSchema},
  output: {schema: InitialQuizCodificationOutputSchema},
  prompt: `You are an expert at converting textbook and exam PDFs into JSON-formatted quiz questions.

You will be provided a PDF document as a data URI, as well as the name of the resource it comes from. Extract all quiz questions and answers from the PDF and convert them into JSON format.

The JSON should be an array of objects, where each object represents a question and has the following keys:
- question: The text of the question.
- answers: An array of strings, where each string is a possible answer.
- correctAnswerIndex: The index of the correct answer in the answers array.
- rationale: A detailed explanation of why the correct answer is correct, with direct reference to the provided material, and why the incorrect answers are incorrect.

Ensure the JSON is valid and can be parsed without errors.  Be very careful to ensure that 'correctAnswerIndex' is an integer between 0 and the number of answers - 1.  Also, it is vital that ALL information needed to answer the question is contained within this JSON structure, and that the entire JSON can be parsed without errors, and that the whole structure conforms to these instructions. If a question cannot be reliably and completely converted, it should be excluded from the JSON output. Focus on accuracy and completeness.

Resource Name: {{{resourceName}}}
PDF Content: {{media url=pdfDataUri}}`,
});

const initialQuizCodificationFlow = ai.defineFlow(
  {
    name: 'initialQuizCodificationFlow',
    inputSchema: InitialQuizCodificationInputSchema,
    outputSchema: InitialQuizCodificationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
