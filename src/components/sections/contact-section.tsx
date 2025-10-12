'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimationWrapper } from '../scroll-animation-wrapper';
import { SectionHeading } from '../section-heading';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();

  const handleBookCall = () => {
    // Open Calendly in a new tab
    window.open('https://calendly.com/kariakistephen94/30min', '_blank', 'noopener,noreferrer');
    
    // Optional: Show a toast notification
    toast({
      title: 'Opening Calendly',
      description: "You'll be redirected to schedule your call.",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading 
            subtitle="Let's Work Together" 
            title="Schedule a Call" 
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200} className="max-w-2xl mx-auto">
          <div className="text-center space-y-8 p-8 border border-white/10 rounded-xl bg-card/50 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Start Your Project?
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Let's discuss your ideas and how we can bring them to life. 
                Book a 30-minute call with me to talk about your project requirements, 
                timeline, and how we can work together to achieve your goals.
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ 30-minute video call</p>
                <p>✓ No obligation consultation</p>
                <p>✓ Discuss project scope & timeline</p>
                <p>✓ Get expert advice</p>
              </div>
            </div>

            <Button 
              onClick={handleBookCall}
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-sm text-muted-foreground">
              You'll be redirected to Calendly to choose your preferred time
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}