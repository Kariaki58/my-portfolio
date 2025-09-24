'use server';

import { highlightValuableSkills, type HighlightValuableSkillsInput, type HighlightValuableSkillsOutput } from "@/ai/flows/highlight-valuable-skills";

export async function analyzeSkills(input: HighlightValuableSkillsInput): Promise<HighlightValuableSkillsOutput | null> {
  try {
    const result = await highlightValuableSkills(input);
    return result;
  } catch (error) {
    console.error("Error analyzing skills:", error);
    return null;
  }
}
