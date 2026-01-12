'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params: { slug } }: { params: { slug: string } }) {
  const t = useTranslations('projects');
  
  // Verify if project exists by checking if valid translation key exists
  // In a real app we might validate against a list of valid slugs
  const validProjects = ['ohm', 'palestine', 'sandbox', 'kendall'];
  if (!validProjects.includes(slug)) {
    notFound();
  }

  // Helper to get image URL based on slug (placeholder logic for now)
  const getProjectImage = (slug: string) => {
    const images: Record<string, string> = {
      ohm: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
      palestine: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80',
      sandbox: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      kendall: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    };
    return images[slug] || '';
  };

  return (
    <article className="min-h-screen bg-slate-950 pt-24 text-white">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        <img
          src={getProjectImage(slug)}
          alt={t(`items.${slug}.title`)}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link 
              href="/" 
              className="mb-6 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToHome')}
            </Link>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl max-w-4xl">
              {t(`items.${slug}.title`)}
            </h1>
            <p className="max-w-2xl text-xl text-slate-300">
              {t(`items.${slug}.description`)}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t('challengeTitle')}
              </h2>
              <p className="leading-relaxed text-slate-400 text-lg">
                {t(`items.${slug}.challenge`)}
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t('solutionTitle')}
              </h2>
              <p className="leading-relaxed text-slate-400 text-lg">
                {t(`items.${slug}.solution`)}
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t('resultTitle')}
              </h2>
              <ul className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start text-slate-400">
                    <CheckCircle2 className="mr-3 h-6 w-6 shrink-0 text-green-500" />
                    <span>{t(`items.${slug}.results.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">{t('projectInfo')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-500">{t('client')}</div>
                  <div className="font-medium text-slate-300">{t(`items.${slug}.client`)}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t('services')}</div>
                  <div className="font-medium text-slate-300">{t(`items.${slug}.services`)}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t('year')}</div>
                  <div className="font-medium text-slate-300">{t(`items.${slug}.year`)}</div>
                </div>
                <div className="pt-4">
                  <a
                    href={t(`items.${slug}.website`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                  >
                    {t('visitWebsite')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">{t('interestedTitle')}</h3>
              <p className="mb-6 text-blue-100">{t('interestedText')}</p>
              <Link 
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
