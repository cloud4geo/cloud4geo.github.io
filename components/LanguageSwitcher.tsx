'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const defaultLocale = 'en';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    let newPath = pathname;
    
    if (locale === defaultLocale) {
      // Current locale is English (no prefix), pathname is like "/" or "/some-path"
      if (newLocale !== defaultLocale) {
        // Switching to Spanish, add /es/ prefix
        newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
      }
      // If staying in English, pathname stays the same
    } else {
      // Current locale is Spanish (has /es/ prefix)
      if (newLocale === defaultLocale) {
        // Switching to English, remove /es/ prefix
        newPath = pathname.replace(`/${locale}`, '') || '/';
      } else {
        // Switching between non-default locales, replace prefix
        newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      }
    }
    
    router.push(newPath);
  };

  const languageNames: Record<string, string> = {
    en: 'EN',
    es: 'ES',
  };

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-primary-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {languageNames[loc]}
        </button>
      ))}
    </div>
  );
}

