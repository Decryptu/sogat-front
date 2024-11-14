'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NavigationContent from './NavigationContent';
import Image from 'next/image';

export default function NavigationMenu({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <>
      <div className="absolute top-0 w-full z-50">
        <div className="border-b border-white/20 grid grid-cols-[1fr,auto,1fr] h-20">
          {/* Logo section */}
          <div className="px-6 md:px-12 flex items-center">
            <div className="w-32">
              <Image 
                src="/images/sogat-white.webp" 
                alt="Logo" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </div>
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

      {isOpen && (
        <NavigationContent 
          onClose={() => setIsOpen(false)} 
          locale={locale}
        />
      )}
    </>
  );
}