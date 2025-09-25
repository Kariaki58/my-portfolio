import { services } from "@/lib/data";
import { ScrollAnimationWrapper } from "../scroll-animation-wrapper";
import { SectionHeading } from "../section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/20">
      <div className="container">
        <ScrollAnimationWrapper>
          <SectionHeading subtitle="What We Do" title="Our Services" />
        </ScrollAnimationWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={service.title} delay={index * 150}>
              <ServiceCard service={service} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon;
  return (
    <Card className="h-full bg-card/50 border-white/10 rounded-xl overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <div className="bg-primary/10 text-primary p-3 rounded-full">
            <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-bold font-headline">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
