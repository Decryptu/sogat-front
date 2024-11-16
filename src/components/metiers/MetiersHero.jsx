import Image from 'next/image';

export default function MetiersHero({ t }) {
  return (
    <div className="container mx-auto mt-32 px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{t('hero.title')}</h1>
          <p className="text-lg lg:text-xl text-gray-700">{t('hero.description')}</p>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-square">
          <Image
            src="/images/nos-metiers.webp"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}