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
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {timeline.map((item, index) => (
            <ScrollAnimationWrapper key={index} className="mb-8" threshold={0.5}>
              <div className="flex md:grid md:grid-cols-2 items-start w-full">
                <div className={cn("hidden md:block", index % 2 === 0 ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right")}>
                  <div className="p-6">
                     <p className="text-primary font-bold mb-1">{item.year}</p>
                  </div>
                </div>
                <div className={cn("relative w-full pl-12 md:pl-0", index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left")}>
                  <div className="absolute -left-1.5 md:left-auto md:right-auto top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_hsl(var(--primary))] md:translate-y-6 md:hidden"></div>
                   <div className={cn("hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-y-1/2 shadow-[0_0_10px_hsl(var(--primary))]",
                    index % 2 === 0 ? "right-[-8px] -translate-x-0" : "left-[-8px] translate-x-0"
                  )}></div>
                   <div className="md:hidden text-primary font-bold mb-1">{item.year}</div>
                   <div className={cn("p-6 bg-card/50 border border-white/10 rounded-xl backdrop-blur-sm",
                    index % 2 === 0 ? "md:mr-8 text-left md:text-right" : "md:ml-8 text-left"
                  )}>
                    <h4 className="font-headline font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
