import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import MetiersHero from '@/components/metiers/MetiersHero';
import MetiersGrid from '@/components/metiers/MetiersGrid';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Metiers({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('metiersPage');

  return (
    <main>
      <MetiersHero t={t} />
      <MetiersGrid t={t} locale={locale} />
    </main>
  );
}