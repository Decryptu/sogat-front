import { Geist } from 'next/font/google';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { SUPPORTED_LOCALES } from '@/i18n/routing';
import Header from '@/components/header/Header';
import '@/app/globals.css';

const geist = Geist({ subsets: ['latin'] });

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={`${geist.className} h-full flex flex-col overflow-x-hidden`}>
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