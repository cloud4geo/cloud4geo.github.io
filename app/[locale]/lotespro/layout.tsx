import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LotesProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
