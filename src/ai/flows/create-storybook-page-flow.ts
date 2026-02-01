'use server';

/**
 * @fileOverview An AI flow that generates an illustration prompt for a single page of a story.
 *
 * - createPagePrompt - Generates an illustration prompt from a snippet of story text.
 * - PageTextInput - The input type for the createPagePrompt function.
 * - PagePromptOutput - The return type for the createPagePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PageTextInputSchema = z.object({
  text: z.string().describe('The text content for this specific page.'),
});
export type PageTextInput = z.infer<typeof PageTextInputSchema>;

const PagePromptOutputSchema = z.object({
  illustrationPrompt: z.string().describe(
    'A detailed, imaginative prompt for an AI illustrator to create a black-and-white, whimsical, coloring-book style image for this page. The style should be clean, simple, and full of wonder.'
  ),
});
export type PagePromptOutput = z.infer<typeof PagePromptOutputSchema>;

export async function createPagePrompt(input: PageTextInput): Promise<PagePromptOutput> {
  return createPagePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createStorybookPagePrompt',
  input: {schema: PageTextInputSchema},
  output: {schema: PagePromptOutputSchema},
  prompt: `You are a gentle and encouraging children's book editor. Your task is to take a single page of text from a story and generate a single, high-quality illustration prompt for it.

**Your Instructions:**

1.  **Read the Page Text**: Read the provided text carefully.
2.  **Generate Illustration Prompt**: Create a detailed and whimsical prompt for an AI illustrator.
    *   **Style**: The prompt MUST specify a "whimsical, clean, black-and-white coloring book style, simple lines, full of wonder and charm."
    *   **Content**: The prompt should describe the main action, characters, and emotion of that specific page's text. Be imaginative!

**Safety Guardrail**: If the text contains any inappropriate content, personal information (last names, addresses, etc.), or anything unsafe for children, you MUST respond with an illustrationPrompt of "Invalid content detected."

**Page Text**:
---
{{{text}}}
---

Please format your entire output as a single JSON object that strictly follows the output schema.`,
});


const createPagePromptFlow = ai.defineFlow(
  {
    name: 'createPagePromptFlow',
    inputSchema: PageTextInputSchema,
    outputSchema: PagePromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
