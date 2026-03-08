import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesCarousel from '@/components/sections/CasesCarousel';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactForm from '@/components/sections/ContactForm';
import ProductsSection from '@/components/sections/ProductsSection';
import ClientsBar from '@/components/sections/ClientsBar';

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ClientsBar />
      <ServicesSection />
      <CasesCarousel />
      <ProcessTimeline />
      <ProductsSection />
      <ContactForm />
    </>
  );
}
