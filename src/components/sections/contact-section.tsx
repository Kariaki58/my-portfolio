'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimationWrapper } from '../scroll-animation-wrapper';
import { SectionHeading } from '../section-heading';
import { Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    // Mock form submission
    console.log('Form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="Get In Touch" title="Contact Me" />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200} className="max-w-2xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-4 sm:p-8 border border-white/10 rounded-xl bg-card/50 backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="min-h-[150px] bg-background/50 border-white/10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
