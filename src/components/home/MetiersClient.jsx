'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AnimatedLink = ({ href, children, onMouseEnter, onMouseLeave }) => (
  <Link 
    href={href} 
    className="group relative flex items-center gap-2 w-fit"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="text-xl md:text-2xl font-light transition-colors duration-300 group-hover:text-blue-600">
      {children}
    </span>

    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-blue-600" />

    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 ease-out group-hover:w-full" />
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
      <div className="bg-background px-8 md:px-16 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          {translations.title}
        </h2>

        <nav className="divide-y divide-gray-200">
          {metiers.map((metier) => (
            <div key={metier} className="py-4 first:pt-0 last:pb-0">
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
      <div className="relative h-[300px] md:h-auto md:m-16">
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
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </>
  );
}