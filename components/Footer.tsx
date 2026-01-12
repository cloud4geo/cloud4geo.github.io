'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Cloud<span className="text-primary-400">4Geo</span>
              </span>
            </div>
            <p className="text-sm">{t('description')}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}#services`} className="hover:text-primary-400 transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#cases`} className="hover:text-primary-400 transition-colors">
                  {tNav('cases')}
                </Link>
              </li>

              <li>
                <Link href={`/${locale}#contact`} className="hover:text-primary-400 transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('location')}</h3>
            <p className="text-sm mb-2">Lima, Peru</p>
            <p className="text-sm text-gray-400">{t('servingClients')}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cloud for Geo. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
}

