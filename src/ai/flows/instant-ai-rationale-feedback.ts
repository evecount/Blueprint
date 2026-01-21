'use server';
/**
 * @fileOverview Provides instant AI-generated rationales for quiz answers based on the provided learning material.
 *
 * - generateRationaleFeedback - A function that generates feedback for a given quiz question and answer.
 * - RationaleFeedbackInput - The input type for the generateRationaleFeedback function.
 * - RationaleFeedbackOutput - The return type for the generateRationaleFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RationaleFeedbackInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  answer: z.string().describe('The answer selected by the student.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  learningMaterial: z.string().describe('The relevant learning material (e.g., textbook excerpt).'),
});
export type RationaleFeedbackInput = z.infer<typeof RationaleFeedbackInputSchema>;

const RationaleFeedbackOutputSchema = z.object({
  rationale: z.string().describe('The AI-generated rationale for the selected answer, explaining why it is correct or incorrect based on the learning material.'),
});
export type RationaleFeedbackOutput = z.infer<typeof RationaleFeedbackOutputSchema>;

export async function generateRationaleFeedback(input: RationaleFeedbackInput): Promise<RationaleFeedbackOutput> {
  return rationaleFeedbackFlow(input);
}

const rationaleFeedbackPrompt = ai.definePrompt({
  name: 'rationaleFeedbackPrompt',
  input: {schema: RationaleFeedbackInputSchema},
  output: {schema: RationaleFeedbackOutputSchema},
  prompt: `You are an AI assistant that provides feedback on quiz questions.
  Given a question, the student's answer, the correct answer, and relevant learning material, generate a rationale for the student's answer.
  The rationale should explain why the student's answer is correct or incorrect based on the learning material provided.
  Learning Material: {{{learningMaterial}}}
  Question: {{{question}}}
  Student's Answer: {{{answer}}}
  Correct Answer: {{{correctAnswer}}}
  Rationale:
  `,
});

const rationaleFeedbackFlow = ai.defineFlow(
  {
    name: 'rationaleFeedbackFlow',
    inputSchema: RationaleFeedbackInputSchema,
    outputSchema: RationaleFeedbackOutputSchema,
  },
  async input => {
    const {output} = await rationaleFeedbackPrompt(input);
    return output!;
  }
);
