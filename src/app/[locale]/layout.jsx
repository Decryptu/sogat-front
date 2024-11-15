import { geist, geistMono } from '../fonts'
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import Header from '@/components/header/Header';
import '@/app/globals.css';

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