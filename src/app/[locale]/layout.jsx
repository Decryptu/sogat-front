import { Inter } from 'next/font/google';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { SUPPORTED_LOCALES } from '../../i18n/routing';
import Header from '../../components/header/Header';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}