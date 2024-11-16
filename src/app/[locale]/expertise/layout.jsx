import { setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function ExpertiseLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full pt-20">
      {children}
    </div>
  );
}