'use client';

import { motion } from 'framer-motion';
import { Search, Database, Code, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProcessTimeline() {
  const t = useTranslations('process');

  const steps = [
    {
      title: t('steps.diagnosis.title'),
      description: t('steps.diagnosis.description'),
      icon: Search,
    },
    {
      title: t('steps.migration.title'),
      description: t('steps.migration.description'),
      icon: Database,
    },
    {
      title: t('steps.development.title'),
      description: t('steps.development.description'),
      icon: Code,
    },
    {
      title: t('steps.deployment.title'),
      description: t('steps.deployment.description'),
      icon: Rocket,
    }
  ];

  return (
    <section id="process" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="text-slate-400">{t('subtitle')}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-slate-800 md:left-1/2 md:-ml-px" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-900 bg-blue-600 shadow-lg shadow-blue-900/50 md:left-1/2 md:-ml-5">
                <step.icon className="h-4 w-4 text-white" />
              </div>

              {/* Content Spacer for standard alternating layout */}
              <div className="flex-1 md:w-1/2" />

              {/* Content Card */}
              <div className="flex-1 pl-12 md:pl-0">
                <div className={`rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="mb-2 text-sm font-bold text-blue-500">Paso 0{index + 1}</div>
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
