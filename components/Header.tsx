'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const defaultLocale = 'en';

// Helper to get localized path
// With localePrefix: 'as-needed', English uses root path, Spanish uses /es/
function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLocale) {
    // English: serve at root without prefix
    return path;
  }
  // Spanish: add /es/ prefix
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}${cleanPath ? '/' + cleanPath : ''}`;
}

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { key: 'home', href: getLocalizedPath('/', locale) },
    { key: 'services', href: getLocalizedPath('/#services', locale) },
    { key: 'cases', href: getLocalizedPath('/#cases', locale) },
    { key: 'process', href: getLocalizedPath('/#process', locale) },
    { key: 'products', href: getLocalizedPath('/#products', locale) },
    { key: 'contact', href: getLocalizedPath('/#contact', locale) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={getLocalizedPath('/', locale)} className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="ml-2 text-xl md:text-2xl font-bold text-gray-900">
                Cloud<span className="text-primary-600">4Geo</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <MobileMenu navItems={navItems} t={t} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ navItems, t }: { navItems: any[]; t: any }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-700 hover:text-primary-600"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

