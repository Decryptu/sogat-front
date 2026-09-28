'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AnimatedLink = ({ href, children, onMouseEnter, onMouseLeave }) => (
  <Link 
    href={href} 
    className="group relative flex items-center justify-between gap-4 py-5"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="text-lg md:text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
      {children}
    </span>

    <ArrowRight className="w-5 h-5 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-primary" />

    <span className="absolute -bottom-px left-0 w-0 h-px bg-primary transition-all duration-500 ease-out group-hover:w-full" />
  </Link>
);

export default function MetiersClient({ translations, metiers }) {
  const [currentImage, setCurrentImage] = useState('nos-metiers');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (newImage) => {
    setLoading(true);
    setCurrentImage(newImage);
  };

  return (
    <>
      {/* Left column */}
      <div className="bg-background px-6 md:px-16 py-16 md:py-24">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 md:mb-16">
          {translations.title}
        </h2>

        <nav className="border-b border-foreground/10 divide-y divide-foreground/10 max-w-xl">
          {metiers.map((metier) => (
            <div key={metier}>
              <AnimatedLink 
                href={`/metiers/${metier}`}
                onMouseEnter={() => handleImageChange(metier)}
                onMouseLeave={() => handleImageChange('nos-metiers')}
              >
                {translations.metiers[metier]}
              </AnimatedLink>
            </div>
          ))}
        </nav>
      </div>

      {/* Right column */}
      <div className="relative h-[320px] md:h-auto md:m-24 overflow-hidden">
        <Image
          key={currentImage} // Force remount of component when image changes
          src={`/images/metiers/${currentImage}.webp`}
          alt={translations.imageAlt}
          fill
          className={`
            object-cover
            transition-opacity duration-500
            ${loading ? 'opacity-0' : 'opacity-100'}
          `}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onLoad={() => setLoading(false)}
        />
      </div>
    </>
  );
}