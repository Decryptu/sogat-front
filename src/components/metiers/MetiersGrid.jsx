"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { METIERS } from "@/constants/metiers";
import { METIER_COLORS } from "@/constants/metier-colors";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

export default function MetiersGrid() {
  const t = useTranslations("metiersPage");
  const locale = useLocale();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-16">
        <FadeIn>
          <SectionHeader title={t("grid.title")} />
        </FadeIn>
        <StaggerIn
          className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground/10"
          stagger={0.07}
        >
          {METIERS.map((metier) => (
            <StaggerItem key={metier} className="border-r border-b border-foreground/10">
              <Link
                href={`/${locale}/metiers/${metier}`}
                className="group relative flex h-full flex-col gap-6 p-8 md:p-10 transition-colors duration-500 hover:bg-background"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: METIER_COLORS[metier] }}
                />
                <div className="relative h-20 w-20">
                  <Image
                    src={`/images/metiers/logo-${metier}.webp`}
                    alt={t(`grid.items.${metier}.name`)}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {t(`grid.items.${metier}.name`)}
                </h3>
                <p className="flex-1 text-lg text-muted-foreground leading-relaxed">
                  {t(`grid.items.${metier}.description`)}
                </p>
                <div className="flex items-center gap-3 transition-colors group-hover:text-primary">
                  {t("grid.discoverCta")}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
