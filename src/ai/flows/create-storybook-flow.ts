'use server';

/**
 * @fileOverview An AI flow that acts as a children's story editor.
 *
 * - createStorybook - Splits a story into pages and generates illustration prompts.
 * - StorybookInput - The input type for the createStorybook function.
 * - StorybookOutput - The return type for the createStorybook function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StorybookInputSchema = z.object({
  authorFirstName: z
    .string()
    .describe('The first name of the child author. This should be used as the author name.'),
  story: z.string().describe('The full text of the story written by the child.'),
});
export type StorybookInput = z.infer<typeof StorybookInputSchema>;

const PageSchema = z.object({
  pageNumber: z.number().describe('The page number, starting from 1.'),
  text: z.string().describe('The text content for this specific page.'),
  illustrationPrompt: z.string().describe(
    'A detailed, imaginative prompt for an AI illustrator to create a black-and-white, whimsical, coloring-book style image for this page. The style should be clean, simple, and full of wonder.'
  ),
});

const StorybookOutputSchema = z.object({
  title: z.string().describe('A creative and fitting title for the story.'),
  author: z.string().describe("The author's name, using only the provided first name."),
  pages: z.array(PageSchema).describe('An array of pages, each with its text and illustration prompt.'),
});
export type StorybookOutput = z.infer<typeof StorybookOutputSchema>;

export async function createStorybook(input: StorybookInput): Promise<StorybookOutput> {
  return createStorybookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createStorybookPrompt',
  input: {schema: StorybookInputSchema},
  output: {schema: StorybookOutputSchema},
  prompt: `You are a gentle and encouraging children's book editor. Your task is to take a story written by a child and prepare it for illustration.

**Your Instructions:**

1.  **Read the Story**: Read the provided story carefully.
2.  **Create a Title**: Give the story a short, magical, and fitting title.
3.  **Set the Author**: Use *only* the provided first name for the author. Do not use any other name.
4.  **Split into Pages**: Divide the story into several short pages. Each page should have just one or two sentences, to make it easy for a young child to read. This will become an illustrated flip book.
5.  **Generate Illustration Prompts**: For each page, create a detailed and whimsical prompt for an AI illustrator.
    *   **Style**: The prompt MUST specify a "whimsical, clean, black-and-white coloring book style, simple lines, full of wonder and charm."
    *   **Content**: The prompt should describe the main action or scene of that specific page's text. Be imaginative!

**Safety Guardrail**: If the story contains any inappropriate content, personal information (last names, addresses, etc.), or anything unsafe for children, you MUST respond with a title of "Invalid Story" and an empty pages array.

**Child's First Name**: {{{authorFirstName}}}
**Child's Story**:
---
{{{story}}}
---

Please format your entire output as a single JSON object that strictly follows the output schema.`,
});


const createStorybookFlow = ai.defineFlow(
  {
    name: 'createStorybookFlow',
    inputSchema: StorybookInputSchema,
    outputSchema: StorybookOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
