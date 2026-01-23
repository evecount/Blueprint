'use server';

/**
 * @fileOverview A flow for chatting with a document.
 *
 * - askQuestion - A function that answers a query based on document content.
 * - ChatInput - The input type for the askQuestion function.
 * - ChatOutput - The return type for the askQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  documentContent: z.string().describe('The content of the document to chat with.'),
  query: z.string().describe('The user\'s question.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  answer: z.string().describe('The answer to the query based on the document.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function askQuestion(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are an expert study assistant. Your task is to answer the user's query based *only* on the provided document content.

If the information needed to answer the query is not in the document, you must clearly state that the answer cannot be found in the provided text. Do not use any external knowledge.

Document Content:
---
{{{documentContent}}}
---

User Query: {{{query}}}`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
