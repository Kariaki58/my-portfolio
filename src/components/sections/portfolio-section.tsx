import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '../scroll-animation-wrapper';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Proof" title="Results-Driven Work" />
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <ScrollAnimationWrapper key={project.title} delay={index * 150}>
                <ProjectCard project={project} placeholder={placeholder} />
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, placeholder }: { project: (typeof projects)[0], placeholder: any }) {
  const videoSrc = (project as any).videoSrc as string | undefined;
  const isShortForm = (project as any).format === "short-form";

  const results = (project as any).results as string[] | undefined;
  const topResults = Array.isArray(results) ? results.slice(0, 3) : [];

  return (
    <Card className="h-full bg-card/50 border-white/10 rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/15 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className={isShortForm ? "aspect-[9/16] overflow-hidden" : "aspect-video overflow-hidden"}>
          {videoSrc ? (
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={placeholder?.imageUrl}
              />
              {/* Premium overlay so videos don't look like raw embeds */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute left-3 top-3">
                <div className="text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-full bg-black/40 border border-white/10 text-white/90 backdrop-blur">
                  {isShortForm ? "Short-form" : "Long-form"}
                </div>
              </div>
            </div>
          ) : (
            placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={project.title}
                width={600}
                height={800}
                data-ai-hint={placeholder.imageHint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )
          )}
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="text-lg md:text-xl font-bold mb-2 font-headline">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{project.description}</p>

        {topResults.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {topResults.map((result) => (
              <div
                key={result}
                className="text-xs text-foreground/90 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
              >
                {result}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild variant="ghost" className="text-accent p-0 h-auto hover:bg-transparent hover:text-accent/80">
          <Link href={project.link} className="group/link">
            Request an edit plan
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>

    </Card>
  );
}
