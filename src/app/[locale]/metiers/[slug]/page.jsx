import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import { METIERS } from '@/constants/metiers';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) => 
    METIERS.map((slug) => ({
      locale,
      slug
    }))
  );
}

export default async function MetierPage({ params }) {
  const { locale, slug } = await params;
  
  // Validate slug
  if (!METIERS.includes(slug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations(`metiers.${slug}`);

  return (
    <div className="container mx-auto mt-32 px-4 py-12 lg:min-h-[calc(100vh-80px)]">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{t('title')}</h1>
          <p className="text-lg lg:text-xl text-gray-700">{t('description')}</p>
        </div>

        {/* Right Column - Image */}
        <div className="relative aspect-[4/3] lg:aspect-square">
          <Image
            src={`/images/metiers/${slug}.webp`}
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