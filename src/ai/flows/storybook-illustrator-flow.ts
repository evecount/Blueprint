'use server';

/**
 * @fileOverview An AI flow that acts as a children's book illustrator.
 *
 * - illustrateScene - Generates an image from a text prompt.
 * - SceneInput - The input type for the illustrateScene function.
 * - SceneOutput - The return type for the illustrateScene function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SceneInputSchema = z.object({
  prompt: z.string().describe('A detailed description of the scene to illustrate.'),
});
export type SceneInput = z.infer<typeof SceneInputSchema>;

const SceneOutputSchema = z.object({
  imageUrl: z.string().describe("A data URI of the generated image. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type SceneOutput = z.infer<typeof SceneOutputSchema>;

export async function illustrateScene(input: SceneInput): Promise<SceneOutput> {
  return illustratorFlow(input);
}

const illustratorFlow = ai.defineFlow(
  {
    name: 'illustratorFlow',
    inputSchema: SceneInputSchema,
    outputSchema: SceneOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Illustrate the following scene in a whimsical, clean, black-and-white coloring book style. The lines should be simple and clear, suitable for a child to color in. The overall feeling should be one of warmth, wonder, and charm.

      Scene: "${input.prompt}"`,
      config: {
        safetySettings: [
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_NONE',
          },
           {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed. This might be due to safety filters. Please try rephrasing your story or being more specific.');
    }
    
    return { imageUrl: media.url };
  }
);
