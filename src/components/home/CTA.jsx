"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/motion";

export default function CTA() {
  const t = useTranslations("home");

  return (
    <section className="border-t-4 border-primary-light">
      <div className="container mx-auto px-6 md:px-16 py-16 md:py-24">
        <FadeIn className="grid md:grid-cols-[5fr_7fr]">
          <Link
            href="/contact"
            className="group flex min-h-[420px] flex-col justify-between gap-16 bg-primary-light p-8 md:p-12 text-white transition-colors duration-500 hover:bg-primary"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-white" />
                {t("cta.button")}
              </span>
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold">{t("cta.title")}</h2>
              <p className="text-lg text-white/85">{t("cta.description")}</p>
            </div>
          </Link>

          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src="/images/contact.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
