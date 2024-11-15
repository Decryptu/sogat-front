'use client';

import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import { motion } from "framer-motion";

const NAVIGATION_LINKS = [
  { key: 'home', path: '/' },
  { key: 'group', path: '/group' },
  { key: 'services', path: '/services' },
  { key: 'expertise', path: '/expertise' },
  { key: 'contact', path: '/contact' }
];

// Standardized animation config
const ANIMATION_CONFIG = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1]
};

export default function NavigationContent({ onClose, locale }) {
  const t = useTranslations('navigation');

  return (
    <motion.div 
      initial={{ height: 0 }} 
      animate={{ height: '100%' }}
      exit={{ height: 0 }}
      transition={ANIMATION_CONFIG}
      className="fixed inset-x-0 top-0 bg-blue-600 z-50 overflow-hidden"
    >
      <div className="flex h-full">
        {/* Left column with image */}
        <motion.div 
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={ANIMATION_CONFIG}
          className="relative hidden md:block w-1/2 h-full"
        >
          <Image
            src="/images/navigation-default.webp"
            alt="Navigation background"
            fill
            className="object-cover"
          />
          <div className="absolute top-8 left-8">
            <Image
              src="/images/sogat-white.webp"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right column with navigation */}
        <motion.div 
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={ANIMATION_CONFIG}
          className="w-full md:w-1/2 p-8 md:p-16 flex flex-col"
        >
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
              aria-label={t('close')}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-6 text-white text-4xl md:text-6xl font-bold">
              {NAVIGATION_LINKS.map(({ key, path }, index) => (
                <motion.li 
                  key={key}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    ...ANIMATION_CONFIG,
                    delay: 0.1 * index
                  }}
                >
                  <Link
                    href={`/${locale}${path}`}
                    className="hover:text-white/80 transition-colors"
                    onClick={onClose}
                  >
                    {t(key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={ANIMATION_CONFIG}
            className="mt-auto flex flex-col space-y-4 text-white"
          >
            <Link
              href={`/${locale}/personal`}
              className="text-sm hover:text-white/80 transition-colors"
              onClick={onClose}
            >
              {t('personalSpace')}
            </Link>
            <div className="flex justify-between items-center">
              <Link
                href={`/${locale}/legal`}
                className="text-sm hover:text-white/80 transition-colors"
                onClick={onClose}
              >
                {t('legalNotice')}
              </Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}