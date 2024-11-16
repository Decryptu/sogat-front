import Image from 'next/image';
import Link from 'next/link';
import { METIERS } from '@/constants/metiers';

export default function MetiersGrid({ t, locale }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">{t('grid.title')}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {METIERS.map((metier) => (
          <Link 
            href={`/${locale}/metiers/${metier}`} 
            key={metier}
            className="group hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 border border-gray-200"
          >
            <div className="relative h-16 mb-6">
              <Image
                src={`/images/metiers/logo-${metier}.webp`}
                alt={t(`grid.items.${metier}.name`)}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t(`grid.items.${metier}.name`)}</h3>
            <p className="text-gray-500 line-clamp-3">{t(`grid.items.${metier}.description`)}</p>
            <div className="mt-4 text-blue-600 group-hover:text-blue-800 font-medium flex items-center gap-2">
              {t('grid.discoverCta')} 
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}