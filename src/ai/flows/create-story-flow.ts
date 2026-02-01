'use server';

/**
 * @fileOverview An AI flow that takes a block of story text and splits it into illustrated pages.
 *
 * - createStory - Splits text into pages and generates illustration prompts.
 * - StoryTextInput - The input type for the createStory function.
 * - StoryOutput - The return type for the createStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StoryTextInputSchema = z.object({
  text: z.string().describe('The full text of the story to be split into pages.'),
});
export type StoryTextInput = z.infer<typeof StoryTextInputSchema>;

const StoryOutputSchema = z.object({
  pages: z.array(
    z.object({
      text: z.string().describe('The text content for this specific page.'),
      illustrationPrompt: z.string().describe(
        'A detailed, imaginative prompt for an AI illustrator to create a black-and-white, whimsical, coloring-book style image for this page.'
      ),
    })
  ).describe('An array of page objects, each containing text and an illustration prompt.'),
});
export type StoryOutput = z.infer<typeof StoryOutputSchema>;


export async function createStory(input: StoryTextInput): Promise<StoryOutput> {
  return createStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createStoryPrompt',
  input: {schema: StoryTextInputSchema},
  output: {schema: StoryOutputSchema},
  prompt: `You are a gentle and encouraging children's book editor. Your task is to take a story and intelligently split it into several short pages.

**Your Instructions:**

1.  **Read the Story**: Read the provided text carefully.
2.  **Split into Pages**: Divide the story into logical pages. **CRITICAL: Each page MUST contain only one or two sentences.**
3.  **Generate Illustration Prompts**: For each page you create, generate a detailed and whimsical prompt for an AI illustrator.
    *   **Style**: The prompt MUST specify a "whimsical, clean, black-and-white coloring book style, simple lines, full of wonder and charm."
    *   **Content**: The prompt should describe the main action, characters, and emotion of that specific page's text.

**Safety Guardrail**: If the text contains any inappropriate content or personal information, you MUST respond with an empty 'pages' array.

**Story Text**:
---
{{{text}}}
---

Please format your entire output as a single JSON object that strictly follows the output schema. The object should have a single key "pages" containing an array of page objects.`,
});


const createStoryFlow = ai.defineFlow(
  {
    name: 'createStoryFlow',
    inputSchema: StoryTextInputSchema,
    outputSchema: StoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
