import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '../../i18n/routing';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-xl mb-2">{t('welcome')}</p>
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('description')}</p>
        </div>
      </div>
    </main>
  );
}