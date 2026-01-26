
'use server';

/**
 * @fileOverview Solves a user-submitted question by converting it into a multiple-choice format from an image, and extracts metadata about the source.
 *
 * - solveQuestion - A function that handles the question-solving process.
 * - SolveQuestionInput - The input type for the solveQuestion function.
 * - SolveQuestionOutput - The return type for the solveQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolveQuestionInputSchema = z.object({
  imageDataUri: z.string().describe(
    "A photo of the question, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
  context: z.string().describe('The subject or context for the question (e.g., Secondary 4 Chemistry).'),
});
export type SolveQuestionInput = z.infer<typeof SolveQuestionInputSchema>;

const SolveQuestionOutputSchema = z.object({
    question: z.string().describe("The transcribed text of the primary question found in the image."),
    answers: z.array(z.string()).describe("An array of 4-5 possible answers for the question."),
    correctAnswerIndex: z.number().describe("The index of the correct answer in the 'answers' array."),
    rationale: z.string().describe("A detailed explanation of why the correct answer is right and the others are wrong."),
    sourceDetails: z.object({
        publisher: z.string().optional().describe("The publisher of the source material, if visible (e.g., 'Pearson', 'Marshall Cavendish')."),
        website: z.string().optional().describe("The website URL if the source is a screenshot from a webpage (e.g., 'khanacademy.org')."),
        school: z.string().optional().describe("The name of the school or educational institution, if a logo or name is visible."),
        documentTitle: z.string().optional().describe("The title of the document, worksheet, or exam paper (e.g., '2023 Mid-Year Examination')."),
        timestamp: z.string().optional().describe("Any visible date or time from the screenshot or document header."),
        pageNumber: z.string().optional().describe("The page number if visible on the document.")
    }).describe("Additional metadata extracted from the image about the source of the question.")
});
export type SolveQuestionOutput = z.infer<typeof SolveQuestionOutputSchema>;

export async function solveQuestion(input: SolveQuestionInput): Promise<SolveQuestionOutput> {
  return solveQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solveQuestionPrompt',
  input: {schema: SolveQuestionInputSchema},
  output: {schema: SolveQuestionOutputSchema},
  prompt: `You are an expert exam question creator and intelligence analyst specializing in extracting information from images. A user has submitted a photo or screenshot of a homework or exam question.

Your primary task is to solve the question. Your secondary task is to extract all available metadata from the image to understand its origin.

**Task 1: Solve the Question**
1.  Analyze the image to identify and transcribe the user's primary question.
2.  Rephrase it into a clear, high-quality multiple-choice question.
3.  Provide the single best correct answer and generate three plausible but incorrect distractor answers.
4.  Provide a detailed rationale explaining why the correct answer is right and the others are wrong.

**Task 2: Extract Source Details**
1.  Carefully examine the entire image, including headers, footers, and margins.
2.  Identify and extract any of the following details:
    - **Publisher**: Look for logos or names like 'Pearson', 'Marshall Cavendish', 'Scholastic'.
    - **Website**: If it's a screenshot, identify the website URL from the address bar or content.
    - **School**: Look for a school crest, logo, or name.
    - **Document Title**: Transcribe the title of the paper, e.g., '2023 Secondary 2 Mid-Year Examination', 'Worksheet 5.3'.
    - **Timestamp**: Note any date or time visible, often from a computer's menu bar in a screenshot.
    - **Page Number**: Extract any page number shown.
3.  Populate these findings in the \`sourceDetails\` object. If a detail is not present, omit the field.

The user's image is here:
{{media url=imageDataUri}}

Context for the question subject: {{{context}}}

Ensure the entire output strictly conforms to the JSON output schema, including the nested \`sourceDetails\` object.`,
});

const solveQuestionFlow = ai.defineFlow(
  {
    name: 'solveQuestionFlow',
    inputSchema: SolveQuestionInputSchema,
    outputSchema: SolveQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
