"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/motion';

export default function CTA() {
  const t = useTranslations('home');
  return (
    <div className="container mx-auto px-6 py-16">
      <FadeIn>
        <section className="relative text-white pt-20 pb-24 rounded-xl overflow-hidden">
          {/* Background image with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-10" />
            <Image
              src="/images/contact.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-20 mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <FadeIn delay={0.15} y={12}>
                <span className="text-sm font-light uppercase text-gray-200 tracking-wider mb-6 block">
                  {t('cta.label')}
                </span>
              </FadeIn>
              <FadeIn delay={0.25} y={12}>
                <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
                  {t('cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.35} y={12}>
                <p className="text-xl mb-8 opacity-90 font-light">{t('cta.description')}</p>
              </FadeIn>
              <FadeIn delay={0.45} y={12}>
                <Button
                  asChild
                  variant="secondary"
                  className="inline-flex items-center gap-2 text-base px-6"
                >
                  <Link href="/contact">
                    {t('cta.button')}
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                      <title>Arrow</title>
                    </svg>
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}