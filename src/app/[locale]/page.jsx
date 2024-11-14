import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Expertise from '@/components/home/Expertise';
import CTA from '@/components/home/CTA';
import Footer from '@/components/footer/Footer';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <>
      <Hero t={t} />
      <Services t={t} />
      <Expertise t={t} />
      <CTA t={t} />
      <Footer />
    </>
  );
}