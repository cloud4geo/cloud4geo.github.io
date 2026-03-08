import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesCarousel from '@/components/sections/CasesCarousel';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactForm from '@/components/sections/ContactForm';
import ProductsSection from '@/components/sections/ProductsSection';
import ClientsBar from '@/components/sections/ClientsBar';

// Root page serves English content directly (no locale prefix)
export default async function RootPage() {
  const locale = 'en';

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ClientsBar />
        <ServicesSection />
        <CasesCarousel />
        <ProcessTimeline />
        <ProductsSection />
        <ContactForm />
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}

