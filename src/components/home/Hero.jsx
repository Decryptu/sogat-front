import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero({ t }) {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/construction-hero.webp"
        alt="Construction site"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
          {t('hero.description')}
        </p>
        <Button 
          size="lg"
          className="w-fit"
          asChild
        >
          <a href="#discover">{t('hero.cta')}</a>
        </Button>
      </div>
    </section>
  );
}