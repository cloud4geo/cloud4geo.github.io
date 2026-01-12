'use client';

import { motion } from 'framer-motion';
import { Database, Server, Map as MapIcon, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('migration.title'),
      description: t('migration.description'),
      icon: Database,
      color: 'from-orange-400 to-pink-500'
    },
    {
      title: t('infrastructure.title'),
      description: t('infrastructure.description'),
      icon: Server,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: t('collab.title'),
      description: t('collab.description'),
      icon: MapIcon,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-5xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-slate-400"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} opacity-80 shadow-lg shadow-blue-500/10`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -right-4 -top-4 h-24 w-24 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
