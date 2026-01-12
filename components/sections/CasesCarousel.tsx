'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CasesCarousel() {
  const t = useTranslations('cases');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      slug: 'ohm',
      title: t('items.ohm.title'),
      category: t('items.ohm.category'),
      description: t('items.ohm.description'),
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
    },
    {
      slug: 'palestine',
      title: t('items.palestine.title'),
      category: t('items.palestine.category'),
      description: t('items.palestine.description'),
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80',
    },
    {
      slug: 'sandbox',
      title: t('items.sandbox.title'),
      category: t('items.sandbox.category'),
      description: t('items.sandbox.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    },
    {
      slug: 'kendall',
      title: t('items.kendall.title'),
      category: t('items.kendall.category'),
      description: t('items.kendall.description'),
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cases" className="bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
            <p className="text-slate-400">{t('subtitle')}</p>
          </div>
          
          <div className="hidden gap-4 md:flex">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 hover:bg-slate-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] snap-center rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden md:min-w-[400px]"
            >
              <Link href={`/projects/${item.slug}`} className="block h-full transition-colors hover:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-semibold text-blue-400">{item.category}</div>
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mb-6 text-slate-400">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-white group-hover:text-blue-400">
                    {t('viewDetails')} <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
