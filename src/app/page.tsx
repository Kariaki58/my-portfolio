import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import ReviewsSection from '@/components/sections/reviews-section';
import StatsSection from '@/components/sections/stats-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
