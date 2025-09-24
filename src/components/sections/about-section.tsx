import { timeline } from "@/lib/data";
import { ScrollAnimationWrapper } from "../scroll-animation-wrapper";
import { SectionHeading } from "../section-heading";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="My Journey" title="About Me" />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-muted-foreground">
                I&apos;m a passionate web developer with a knack for creating elegant, high-performance digital experiences. With a foundation in computer science and years of hands-on experience, I transform complex problems into beautiful, intuitive solutions.
            </p>
        </ScrollAnimationWrapper>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
          {timeline.map((item, index) => (
            <ScrollAnimationWrapper key={index} className="mb-8" threshold={0.5}>
              <div className={cn("flex items-center w-full", index % 2 === 0 ? "md:justify-start" : "md:justify-end")}>
                <div className="md:w-1/2 w-full pl-12 md:pl-0">
                  <div className={cn("p-6 bg-card/50 border border-white/10 rounded-xl backdrop-blur-sm",
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  )}>
                    <p className="text-primary font-bold mb-1">{item.year}</p>
                    <h4 className="font-headline font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_hsl(var(--primary))]"></div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}