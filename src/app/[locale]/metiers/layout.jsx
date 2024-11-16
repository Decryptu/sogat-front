import { setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function MetiersLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    // Removed padding and margin classes
    <div className="w-full pt-20">
      {children}
    </div>
  );
}