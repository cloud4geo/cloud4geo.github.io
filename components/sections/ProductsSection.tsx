'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const productsList = [
  {
    key: 'lotespro',
    href: 'https://lotespro.com',
    image: '/images/lotespro.jpg',
  },
  {
    key: 'savepics',
    href: 'https://savepics.app',
    image: '/images/savepics.jpg',
  },
];

export default function ProductsSection() {
  const t = useTranslations('products');

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {productsList.map((product) => (
            <div
              key={product.key}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={product.image}
                  alt={t(`${product.key}.name`)}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {t(`${product.key}.tags`)
                    .split(', ')
                    .map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(`${product.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t('visitSite')}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
