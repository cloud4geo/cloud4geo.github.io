import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesCarousel from '@/components/sections/CasesCarousel';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CasesCarousel />
      <ProcessTimeline />
      <ContactForm />
    </>
  );
}
