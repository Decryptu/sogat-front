import Image from 'next/image';
import { CLIENTS } from '@/constants/clients';

export default function References({ t }) {
  // Take first 10 clients for the grid
  const displayedClients = CLIENTS.slice(0, 10);

  return (
    <section className="bg-slate-700 py-24">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="max-w-xl mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">{t('references.title')}</h2>
          <p className="text-gray-300 text-lg">{t('references.description')}</p>
        </div>

        {/* Logos Grid change to src={`/images/clients/${client.id}.webp`} when ready */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {displayedClients.map((client) => (
            <div key={client.id} className="relative w-full h-12">
              <Image
                src="/images/sogat-white.webp"
                alt={t('references.logoAlt', { client: client.name })}
                fill
                className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}