import { locales } from '@/i18n';

const validServices = ['migration', 'infrastructure', 'collab'];

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const slug of validServices) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
