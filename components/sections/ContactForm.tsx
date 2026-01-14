'use client';

import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="mb-8 text-xl text-slate-400">
            {t('description')}
          </p>
          
          <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
              <Mail className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">{t('directEmail')}</p>
              <a 
                href="mailto:info@cloud4geo.com" 
                className="text-lg text-blue-400 hover:text-blue-300 transition-colors"
              >
                info@cloud4geo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
