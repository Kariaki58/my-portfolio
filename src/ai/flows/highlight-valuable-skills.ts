'use server';

/**
 * @fileOverview Highlights valuable combinations of skills based on AI analysis.
 *
 * - highlightValuableSkills - A function that analyzes skills and returns highlighted combinations.
 * - HighlightValuableSkillsInput - The input type for the highlightValuableSkills function.
 * - HighlightValuableSkillsOutput - The return type for the highlightValuableSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightValuableSkillsInputSchema = z.object({
  skills: z
    .array(
      z.object({
        name: z.string().describe('The name of the skill.'),
        category: z.string().describe('The category of the skill.'),
      })
    )
    .describe('An array of skills with their categories.'),
});
export type HighlightValuableSkillsInput = z.infer<
  typeof HighlightValuableSkillsInputSchema
>;

const HighlightValuableSkillsOutputSchema = z.object({
  highlightedCombinations: z
    .array(z.string())
    .describe(
      'An array of skill combinations that are considered particularly valuable.'
    ),
});
export type HighlightValuableSkillsOutput = z.infer<
  typeof HighlightValuableSkillsOutputSchema
>;

export async function highlightValuableSkills(
  input: HighlightValuableSkillsInput
): Promise<HighlightValuableSkillsOutput> {
  return highlightValuableSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'highlightValuableSkillsPrompt',
  input: {schema: HighlightValuableSkillsInputSchema},
  output: {schema: HighlightValuableSkillsOutputSchema},
  prompt: `You are an expert in identifying valuable combinations of technical skills.

  Given the following list of skills and their categories, identify which combinations of skills would be most valuable to a web developer in 2025, and explain why.
  Return only the names of the valuable skill combinations.

  Skills:
  {{#each skills}}
  - {{name}} ({{category}})
  {{/each}}`,
});

const highlightValuableSkillsFlow = ai.defineFlow(
  {
    name: 'highlightValuableSkillsFlow',
    inputSchema: HighlightValuableSkillsInputSchema,
    outputSchema: HighlightValuableSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
