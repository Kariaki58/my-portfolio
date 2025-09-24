import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  className?: string;
};

export function SectionHeading({ subtitle, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
        {subtitle}
      </h3>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-glow">
        {title}
      </h2>
    </div>
  );
}
