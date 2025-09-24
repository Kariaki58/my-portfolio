import { skills } from "@/lib/data";
import { analyzeSkills } from "@/app/actions";
import { ScrollAnimationWrapper } from "../scroll-animation-wrapper";
import { SectionHeading } from "../section-heading";
import SkillsGrid from "./skills-grid";

export default async function SkillsSection() {
  const valuableCombinations = await analyzeSkills({ skills });

  // Create a set of all individual skills that are part of valuable combinations
  const highlightedSkills = new Set<string>();
  if (valuableCombinations && valuableCombinations.highlightedCombinations) {
    valuableCombinations.highlightedCombinations.forEach(combo => {
      // This is a simple parser. A more robust solution might be needed for complex combination strings.
      const individualSkills = combo.split(/ & | and |, /i);
      individualSkills.forEach(skill => highlightedSkills.add(skill.trim()));
    });
  }

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/20">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="My Arsenal" title="Technical Skills" />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <SkillsGrid skills={skills} highlightedSkills={highlightedSkills} />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
