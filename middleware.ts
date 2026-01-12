import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

// Use 'as-needed' so English is served at root (/) and Spanish at /es/
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed' // English at root, Spanish at /es/
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_static (inside /public)
  // - all root files inside /public (e.g. /favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

