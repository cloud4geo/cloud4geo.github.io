import { locales } from '@/i18n';

const validProjects = ['ohm', 'palestine', 'sandbox', 'kendall'];

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const slug of validProjects) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

