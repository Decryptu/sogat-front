"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import HeroImageFrame from "@/components/ui/HeroImageFrame";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

const HERO_IMAGES = [
  "/images/expertise/hero.webp",
  "/images/expertise/engineering.webp",
  "/images/expertise/manufacturing.webp",
  "/images/expertise/installation.webp",
  "/images/expertise/onsite.webp",
];

const PILLARS = [
  { key: "engineering", image: "/images/expertise/engineering.webp" },
  { key: "project", image: "/images/expertise/project.webp" },
  { key: "manufacturing", image: "/images/expertise/fabrication.webp" },
  { key: "installation", image: "/images/expertise/installation.webp" },
];

const DETAILED_SECTIONS = [
  { key: "mechanicalDesign", image: "/images/expertise/mechanical.webp", reverse: false },
  { key: "electricalAutomation", image: "/images/expertise/electrical.webp", reverse: true },
  { key: "integratedManufacturing", image: "/images/expertise/manufacturing.webp", reverse: false },
  { key: "industrialAutomation", image: "/images/expertise/automatisation.webp", reverse: true },
  { key: "mechanicalConstruction", image: "/images/expertise/mechanical.webp", reverse: false },
  { key: "onsiteWork", image: "/images/expertise/onsite.webp", reverse: true },
  { key: "service", image: "/images/expertise/service.webp", reverse: false },
];

function Dot() {
  return <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />;
}

export default function ExpertiseClient() {
  const t = useTranslations("expertise");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      <PageHero title={t("title")} description={t("description")}>
        <FadeIn x={20} y={0} delay={0.15}>
          <HeroImageFrame images={HERO_IMAGES} alt={t("imageAlt")} priority />
        </FadeIn>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <StaggerIn className="container mx-auto px-6 md:px-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.key} className="group flex flex-col gap-6">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={t(`pillars.${pillar.key}.imageAlt`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-foreground/10 pt-6">
                <h3 className="text-lg md:text-xl font-semibold transition-colors group-hover:text-primary">
                  {t(`pillars.${pillar.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`pillars.${pillar.key}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </section>

      {DETAILED_SECTIONS.map((section, index) => {
        const sectionData = t.raw(`sections.${section.key}`);

        return (
          <section
            key={section.key}
            className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-background" : "bg-white"}`}
          >
            <div className="container mx-auto px-6 md:px-16 grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <FadeIn
                x={section.reverse ? 20 : -20}
                y={0}
                className={`group relative aspect-4/3 overflow-hidden border-t-4 border-primary-light ${
                  section.reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image}
                  alt={sectionData.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </FadeIn>

              <FadeIn
                x={section.reverse ? -20 : 20}
                y={0}
                delay={0.15}
                className={`flex flex-col gap-10 ${section.reverse ? "lg:order-1" : ""}`}
              >
                <div className="flex flex-col gap-6">
                  <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    <span className="size-2 rounded-full bg-current" />
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold">
                    {sectionData.title}
                  </h2>
                  <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                    {sectionData.description}
                  </p>
                </div>

                {sectionData.points && (
                  <ul className="flex flex-col gap-4">
                    {sectionData.points.map((point) => (
                      <li key={point} className="flex gap-4 leading-relaxed">
                        <Dot />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {sectionData.services && (
                  <ul className="border-y border-foreground/10 divide-y divide-foreground/10">
                    {sectionData.services.map((service) => (
                      <li key={service.title} className="flex flex-col gap-1.5 py-5">
                        <h3 className="text-lg md:text-xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {sectionData.specs && (
                  <ul className="grid grid-cols-2 border-l border-t border-foreground/10">
                    {sectionData.specs.map((spec) => (
                      <li
                        key={spec}
                        className="border-r border-b border-foreground/10 p-5 md:p-6 font-display text-xl md:text-2xl font-bold uppercase leading-tight"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                {sectionData.equipment && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {locale === "fr"
                        ? "Usinage sur machine numérique :"
                        : "CNC machining:"}
                    </h3>
                    <ul className="border-y border-foreground/10 divide-y divide-foreground/10">
                      {sectionData.equipment.map((item) => (
                        <li key={item} className="flex gap-4 py-3 text-muted-foreground">
                          <Dot />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </FadeIn>
            </div>
          </section>
        );
      })}
    </main>
  );
}
