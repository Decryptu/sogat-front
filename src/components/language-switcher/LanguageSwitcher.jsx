'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const onLanguageChange = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    const newPathname = pathname.replace(`/${locale}/`, '/');
    router.push(newPathname, { locale: newLocale });
  };

  return (
    <button
      type="button"
      onClick={onLanguageChange}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    </button>
  );
}