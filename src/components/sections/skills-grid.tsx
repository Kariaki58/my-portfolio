'use client';

import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { type skills } from "@/lib/data";

type Skill = (typeof skills)[0];

interface SkillsGridProps {
  skills: Skill[];
  highlightedSkills: Set<string>;
}

export default function SkillsGrid({ skills, highlightedSkills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {skills.map((skill) => {
        const isHighlighted = highlightedSkills.has(skill.name);
        return (
          <Card
            key={skill.name}
            className={cn(
              "p-4 md:p-6 flex items-center justify-center text-center font-semibold font-headline text-sm md:text-base transition-all duration-300",
              "bg-card/30 border-white/10 backdrop-blur-sm relative overflow-hidden",
              "hover:bg-primary/20 hover:text-primary hover:scale-105",
              isHighlighted && "animate-glow border-accent/50 text-accent",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {skill.name}
          </Card>
        );
      })}
    </div>
  );
}
