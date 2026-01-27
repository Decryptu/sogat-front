"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { METIERS } from "@/constants/metiers";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

export default function MetiersGrid() {
  const t = useTranslations("metiersPage");
  const locale = useLocale();
  return (
    <div className="container mx-auto px-16 py-32">
      <FadeIn>
        <h1 className="text-5xl font-black mb-24 whitespace-pre-line">
          {t("grid.title")}
        </h1>
      </FadeIn>
      <StaggerIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" stagger={0.07}>
        {METIERS.map((metier) => (
          <StaggerItem key={metier}>
            <Link
              href={`/${locale}/metiers/${metier}`}
              className="group border-t border-gray-300 pt-4 block"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-12 w-12">
                  <Image
                    src={`/images/metiers/logo-${metier}.webp`}
                    alt={t(`grid.items.${metier}.name`)}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl">
                  {t(`grid.items.${metier}.name`)}
                </h2>
              </div>
              <p className="text-gray-400 font-light mb-6 leading-relaxed text-lg">
                {t(`grid.items.${metier}.description`)}
              </p>
              <div className="text-gray-900 flex items-center gap-2">
                {t("grid.discoverCta")}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerIn>
    </div>
  );
}
