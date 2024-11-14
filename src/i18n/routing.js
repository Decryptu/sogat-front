import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const SUPPORTED_LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);