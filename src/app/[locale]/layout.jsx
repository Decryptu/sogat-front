import { geist, geistMono } from '../fonts'
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import Header from '@/components/header/Header';
import { getTranslations } from 'next-intl/server';
import '@/app/globals.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const [t, homeT] = await Promise.all([
    getTranslations('metadata'),
    getTranslations('home')
  ]);
 
  return {
    metadataBase: new URL('https://sogat.com'),
    title: {
      template: '%s | SOGAT',
      default: t('siteTitle'),
    },
    description: homeT('hero.description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    robots: 'index, follow',
    openGraph: {
      title: t('siteTitle'),
      description: homeT('hero.description'),
      url: 'https://sogat.com',
      siteName: t('siteName'),
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
          alt: t('socialBanner'),
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('siteTitle'),
      description: homeT('hero.description'),
      images: ['/og-image.webp'],
    },
  };
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={`${geist.variable} ${geistMono.variable} font-sans h-full flex flex-col overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}