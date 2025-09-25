'use client';

import { stats } from "@/lib/data";
import { ScrollAnimationWrapper } from "../scroll-animation-wrapper";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
    const { count, ref } = useAnimatedCounter(stat.value, 2000);
    const Icon = stat.icon;

    return (
        <div className="p-8 bg-card/50 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
            <Icon className="h-10 w-10 text-primary mb-2" />
            <span ref={ref} className="text-4xl md:text-5xl font-bold text-glow">
                {count}+
            </span>
            <p className="text-muted-foreground font-medium">{stat.label}</p>
        </div>
    );
}