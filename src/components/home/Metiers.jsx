import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { METIERS } from '@/constants/metiers';

const AnimatedLink = ({ href, children }) => (
  <Link href={href} className="group relative flex items-center gap-2 w-fit">
    {/* Text content */}
    <span className="text-xl md:text-2xl font-light transition-colors duration-300 group-hover:text-blue-600">
      {children}
    </span>
    
    {/* Arrow icon with fade-in animation */}
    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-blue-600" />
    
    {/* Animated underline */}
    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 ease-out group-hover:w-full" />
  </Link>
);

export default function BusinessAreas({ t }) {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px]">
      {/* Left column */}
      <div className="bg-gray-50 px-8 md:px-16 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          {t('businessAreas.title')}
        </h2>
        
        <nav className="space-y-8">
          {METIERS.map((metier) => (
            <AnimatedLink 
              key={metier}
              href={`/metiers/${metier}`}
            >
              {t(`businessAreas.${metier}`)}
            </AnimatedLink>
          ))}
        </nav>
      </div>

      {/* Right column */}
      <div className="bg-white p-8 md:p-16 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/nos-metiers.webp"
            alt={t('businessAreas.imageAlt')}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}