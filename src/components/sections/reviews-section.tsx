import { reviews } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '../scroll-animation-wrapper';
import { SectionHeading } from '../section-heading';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Testimonials" title="What My Clients Say" />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review, index) => {
                const placeholder = PlaceHolderImages.find(p => p.id === review.imageId);
                return (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-card/50 border-white/10 rounded-xl backdrop-blur-sm overflow-hidden">
                        <CardContent className="flex flex-col items-center text-center p-8 md:p-12">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                            ))}
                          </div>
                          <p className="text-lg md:text-xl text-foreground italic mb-6">
                            &ldquo;{review.quote}&rdquo;
                          </p>
                          {placeholder && (
                             <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.4)] mb-4">
                               <Image
                                   src={placeholder.imageUrl}
                                   alt={review.name}
                                   width={80}
                                   height={80}
                                   data-ai-hint={placeholder.imageHint}
                                   className="object-cover"
                               />
                           </div>
                          )}
                          <p className="font-bold text-lg font-headline text-primary-foreground">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] text-foreground bg-card/80 border-white/10 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-[-50px] text-foreground bg-card/80 border-white/10 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
