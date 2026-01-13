'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Code, Server, Database, Map as MapIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

const defaultLocale = 'en';

// Helper to get localized path
function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}

const serviceIcons: Record<string, typeof Database> = {
  migration: Database,
  infrastructure: Server,
  collab: MapIcon,
};

const serviceColors: Record<string, string> = {
  migration: 'from-orange-400 to-pink-500',
  infrastructure: 'from-blue-400 to-indigo-500',
  collab: 'from-green-400 to-emerald-500',
};

export default function ServicePage({ params: { slug } }: { params: { slug: string } }) {
  const t = useTranslations('services');
  const locale = useLocale();
  
  const validServices = ['migration', 'infrastructure', 'collab'];
  if (!validServices.includes(slug)) {
    notFound();
  }

  const serviceKey = slug as 'migration' | 'infrastructure' | 'collab';
  const Icon = serviceIcons[slug];
  const colorGradient = serviceColors[slug];

  return (
    <article className="min-h-screen bg-slate-950 pt-24 text-white">
      {/* Hero Header */}
      <div className="relative border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            href={getLocalizedPath('/#services', locale)} 
            className="mb-6 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToServices')}
          </Link>
          
          <div className="flex items-start gap-6">
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${colorGradient} shadow-lg`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                {t(`${serviceKey}.heroTitle`)}
              </h1>
              <p className="max-w-3xl text-xl text-slate-300">
                {t(`${serviceKey}.heroDescription`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                {t(`${serviceKey}.overview.title`)}
              </h2>
              <p className="leading-relaxed text-slate-400 text-lg">
                {t(`${serviceKey}.overview.content`)}
              </p>
            </section>

            {/* Comparison Table - Only for migration */}
            {slug === 'migration' && (
              <section>
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    {t(`${serviceKey}.comparison.title`)}
                  </h2>
                  <p className="text-slate-400">
                    {t(`${serviceKey}.comparison.subtitle`)}
                  </p>
                </div>
                
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                          Aspecto
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-red-400">
                          {t(`${serviceKey}.comparison.arcgis.label`)}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-green-400">
                          {t(`${serviceKey}.comparison.opensource.label`)}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: 'cost', icon: '💰' },
                        { key: 'features', icon: '⚙️' },
                        { key: 'scalability', icon: '📈' },
                        { key: 'storage', icon: '💾' },
                        { key: 'support', icon: '🛟' },
                      ].map((aspect) => (
                        <tr key={aspect.key} className="border-b border-slate-800 last:border-b-0 hover:bg-slate-900/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-300">
                            <span className="mr-2">{aspect.icon}</span>
                            {t(`${serviceKey}.comparison.aspects.${aspect.key}`)}
                          </td>
                          <td className="px-6 py-4 text-slate-400">
                            {t(`${serviceKey}.comparison.arcgis.${aspect.key}`)}
                          </td>
                          <td className="px-6 py-4 text-green-300 font-medium">
                            {t(`${serviceKey}.comparison.opensource.${aspect.key}`)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {[
                    { key: 'cost', icon: '💰' },
                    { key: 'features', icon: '⚙️' },
                    { key: 'scalability', icon: '📈' },
                    { key: 'storage', icon: '💾' },
                    { key: 'support', icon: '🛟' },
                  ].map((aspect) => (
                    <div key={aspect.key} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                      <div className="mb-3 flex items-center font-semibold text-slate-300">
                        <span className="mr-2 text-xl">{aspect.icon}</span>
                        {t(`${serviceKey}.comparison.aspects.${aspect.key}`)}
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-3">
                          <div className="mb-1 text-xs font-semibold uppercase text-red-400">
                            {t(`${serviceKey}.comparison.arcgis.label`)}
                          </div>
                          <div className="text-sm text-slate-400">
                            {t(`${serviceKey}.comparison.arcgis.${aspect.key}`)}
                          </div>
                        </div>
                        <div className="rounded-lg border border-green-500/30 bg-green-950/20 p-3">
                          <div className="mb-1 text-xs font-semibold uppercase text-green-400">
                            {t(`${serviceKey}.comparison.opensource.label`)}
                          </div>
                          <div className="text-sm font-medium text-green-300">
                            {t(`${serviceKey}.comparison.opensource.${aspect.key}`)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What We Do */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t(`${serviceKey}.whatWeDo.title`)}
              </h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => {
                  const item = t(`${serviceKey}.whatWeDo.items.${i}`, { returnNull: true });
                  if (!item) return null;
                  return (
                    <li key={i} className="flex items-start text-slate-400">
                      <CheckCircle2 className="mr-3 h-6 w-6 shrink-0 text-green-500" />
                      <span className="text-lg">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t(`${serviceKey}.benefits.title`)}
              </h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                  const item = t(`${serviceKey}.benefits.items.${i}`, { returnNull: true });
                  if (!item) return null;
                  return (
                    <li key={i} className="flex items-start text-slate-400">
                      <CheckCircle2 className="mr-3 h-6 w-6 shrink-0 text-blue-500" />
                      <span className="text-lg">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  {t(`${serviceKey}.technologies.title`)}
                </h3>
              </div>
              <div className="space-y-3">
                {(() => {
                  // Map technologies by service
                  const techMap: Record<string, string[]> = {
                    migration: ['postgis', 'martingis', 'tegola', 'geoserver', 'mapproxy'],
                    infrastructure: ['kubernetes', 'docker', 'helm', 'prometheus', 'grafana'],
                    collab: ['maplibre', 'websockets', 'postgis', 'react', 'nodejs'],
                  };
                  
                  const techKeys = techMap[slug] || [];
                  return techKeys.map((techKey) => {
                    const techName = t(`${serviceKey}.technologies.items.${techKey}`, { returnNull: true });
                    if (!techName) return null;
                    return (
                      <div key={techKey} className="border-l-2 border-blue-500/30 pl-3">
                        <div className="text-sm font-medium text-blue-400 uppercase tracking-wide">
                          {techKey}
                        </div>
                        <div className="text-slate-300">
                          {techName}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* CTA */}
            <div className={`rounded-xl bg-gradient-to-br ${colorGradient} p-6 text-white`}>
              <h3 className="mb-3 text-xl font-bold">{t('page.interestedTitle')}</h3>
              <p className="mb-6 text-white/90">
                {t('page.interestedText')}
              </p>
              <Link 
                href={getLocalizedPath('/#contact', locale)}
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                {t('page.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
