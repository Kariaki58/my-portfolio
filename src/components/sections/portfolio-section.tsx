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
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Our Work" title="Featured Projects" />
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8">
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
  return (
    <Card className="h-full bg-card/50 border-white/10 rounded-xl overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              data-ai-hint={placeholder.imageHint}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-2 font-headline">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
         <Button asChild variant="ghost" className="text-accent p-0 h-auto hover:bg-transparent hover:text-accent/80">
            <Link href={project.link} className="group/link">
                View Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
