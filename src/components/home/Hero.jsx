import HeroParallax from './HeroParallax'
import { Button } from "@/components/ui/button"

export default function Hero({ t }) {
  return (
    <div className="flex flex-col w-full">
      {/* First section with two columns */}
      <section className="w-full bg-dark py-16 md:pb-32 md:pt-64">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* First column - Title */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background tracking-tight">
                {t('hero.title')}
              </h1>
            </div>
            
            {/* Second column - Description and CTA */}
            <div className="flex flex-col gap-6">
              <p className="text-md text-background/80 leading-relaxed">
                {t('hero.description')}
              </p>
              <Button 
                size="lg"
                className="w-fit text-lg"
                asChild
              >
                <a href="#discover">{t('hero.cta')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second section with parallax image */}
      <HeroParallax />
    </div>
  )
}