'use client';

import { useTranslations } from 'next-intl';

const clients = [
  { name: 'OpenHistoricalMap', url: 'https://www.openhistoricalmap.org' },
  { name: 'OpenStreetMap US', url: 'https://www.openstreetmap.us' },
  { name: 'Visualizing Palestine', url: 'https://www.visualizingpalestine.org' },
  { name: 'Kendall County', url: 'https://www.kendallcountyil.gov' },
];

const technologies = [
  'PostGIS',
  'Kubernetes',
  'OpenStreetMap',
  'MapLibre',
  'Docker',
];

export default function ClientsBar() {
  const t = useTranslations('clientsBar');

  return (
    <section className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500 mb-8">
          {t('trustedBy')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-lg font-semibold"
            >
              {client.name}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
