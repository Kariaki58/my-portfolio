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
import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Updated reviews data with TikTok handles


export default function ReviewsSection() {
  const handleTikTokClick = (handle: string) => {
    window.open(`https://www.tiktok.com/${handle}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Testimonials" title="What Our Clients Say" />
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
                            
                            {/* TikTok Handle Section */}
                            <div className="mt-4 p-3 bg-gradient-to-r from-[#69C9D0]/10 to-[#EE1D52]/10 border border-[#69C9D0]/20 rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">contact on TikTok</p>
                              <div className="flex items-center justify-center gap-2">
                                <MessageCircle className="h-4 w-4 text-[#69C9D0]" />
                                <span className="text-sm font-medium text-foreground">
                                  {review.tiktokHandle}
                                </span>
                              </div>
                              <Button
                                onClick={() => handleTikTokClick(review.tiktokHandle)}
                                variant="ghost"
                                size="sm"
                                className="mt-2 h-7 text-xs bg-white/5 hover:bg-[#69C9D0] hover:text-white transition-all duration-300"
                              >
                                contact
                              </Button>
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