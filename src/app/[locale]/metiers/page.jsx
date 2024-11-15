import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Metiers({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('metiers');

  return (
    <div className="container mx-auto px-4 py-12 lg:min-h-[calc(100vh-80px)]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{t('title')}</h1>
          <p className="text-lg lg:text-xl text-gray-700">{t('description')}</p>
        </div>

        {/* Right Column - Image */}
        <div className="relative aspect-[4/3] lg:aspect-square">
          <Image
            src="/images/nos-metiers.webp"
            alt={t('imageAlt')}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}