import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background -z-10"
           style={{
             backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1), transparent 30%), radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.08), transparent 30%)'
           }}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]"></div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline mb-4 tracking-tighter">
          <span className="text-glow">ClickFlow</span> Studio
        </h1>
        <p className="text-lg md:text-2xl font-light bg-gradient-to-r from-primary via-accent to-primary animated-gradient animate-text-shimmer mb-8 max-w-2xl">
          We build digital experiences that drive growth. From web development to SEO, we're your partners in success.
        </p>

        <Link href="#contact">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
            Start a Project
            <ArrowDown className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
