'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NavigationContent from './NavigationContent';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

export default function NavigationMenu({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');

  const handleNavigationClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="absolute top-0 w-full z-50">
        <div className="border-b border-white/20 grid grid-cols-[1fr,auto,1fr] h-20">
          {/* Logo section */}
          <div className="px-6 md:px-12 flex items-center">
            <Link href={`/${locale}`} className="w-32">
            <Image 
                src="/images/sogat-white.webp" 
                alt="Logo" 
                width={120}
                height={40}
                priority
                className="object-contain w-[120px] h-[40px]" // Fixed dimensions
              />
            </Link>
          </div>

          {/* Empty middle section - just for border */}
          <div className="border-x border-white/20 w-8 md:w-96" />

          {/* Menu trigger section */}
          <div className="flex justify-end px-6 md:px-12 items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(true)}
              aria-label={t('close')}
            >
              <Menu className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <NavigationContent 
            onClose={handleNavigationClose} 
            locale={locale}
          />
        )}
      </AnimatePresence>
    </>
  );
}