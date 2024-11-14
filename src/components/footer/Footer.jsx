import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-8 w-32 mb-4">
              <Image 
                src="/images/sogat-white.webp" 
                alt="Sogat" 
                width={128}
                height={32}
                className="h-full w-auto"
              />
            </div>
            <p className="text-gray-400">{t('description')}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('sections.services')}</h3>
            <ul className="space-y-2">
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">BIM/CIM</a></li>
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.studies')}</a></li>
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.monitoring')}</a></li>
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.3d')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('sections.company')}</h3>
            <ul className="space-y-2">
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.about')}</a></li>
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.careers')}</a></li>
              <li><a href="https://sogat.vercel.app/" className="text-gray-400 hover:text-white">{t('sections.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('sections.language')}</h3>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sogat. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}