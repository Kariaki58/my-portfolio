"use client";

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
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Trust" title="Trusted By Busy Operators" />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <div className="relative">
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
                            <p className="text-sm text-muted-foreground mb-4">{review.title}</p>

                            <div className="w-full max-w-sm mt-4">
                              <Button asChild size="sm" className="w-full rounded-full">
                                <Link href="#contact">Book a call</Link>
                              </Button>
                              <p className="mt-3 text-xs text-muted-foreground">
                                No long-term contracts. Fast turnaround. Clear weekly delivery.
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-1/2 text-foreground bg-card/80 border-white/10 hover:bg-primary hover:text-primary-foreground z-10" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-1/2 text-foreground bg-card/80 border-white/10 hover:bg-primary hover:text-primary-foreground z-10" />
            </Carousel>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}