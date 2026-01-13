'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="h-full w-full bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/10/10/10.png')] bg-cover bg-center grayscale" />
        {/* Actual MapLibre implementation will go here or be overlaid */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm leading-relaxed text-blue-300 md:text-base">
            <div className="flex items-start gap-2">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
              <span>{t('badge')}</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {t('title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              {t('titleHighlight')}
            </span>
          </h1>
          
          <p className="mb-8 text-xl text-slate-300 md:text-2xl">
            {t('description')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              {t('cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="#cases"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-blue-400"
            >
              {t('secondary')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-500">{t('scroll')}</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
