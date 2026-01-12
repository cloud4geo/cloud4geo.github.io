'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('pricing');

  const plans = [
    {
      name: t('starter.name'),
      price: '$99',
      period: t('perMonth'),
      description: t('starter.description'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
        t('starter.features.4')
      ],
      highlight: false
    },
    {
      name: t('pro.name'),
      price: '$299',
      period: t('perMonth'),
      description: t('pro.description'),
      features: [
        t('pro.features.0'),
        t('pro.features.1'),
        t('pro.features.2'),
        t('pro.features.3'),
        t('pro.features.4'),
        t('pro.features.5')
      ],
      highlight: true
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: '',
      description: t('enterprise.description'),
      features: [
        t('enterprise.features.0'),
        t('enterprise.features.1'),
        t('enterprise.features.2'),
        t('enterprise.features.3'),
        t('enterprise.features.4'),
        t('enterprise.features.5')
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="text-slate-400">{t('subtitle')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight 
                  ? 'border-blue-500 bg-slate-900 shadow-2xl shadow-blue-900/20' 
                  : 'border-slate-800 bg-slate-950'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-bold shadow-lg">
                  {t('highlight')}
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 shrink-0 text-blue-500" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full rounded-lg py-3 font-semibold transition-all ${
                  plan.highlight 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/50' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {plan.price === 'Custom' ? t('contact') : t('start')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
