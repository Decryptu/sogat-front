import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/motion";
import { METIER_COLORS } from "@/constants/metier-colors";

const WHITE_TEXT_METIERS = new Set(["sermas", "haquette"]);

export default function MetierCTA({ slug, t }) {
  const color = METIER_COLORS[slug];
  const whiteText = WHITE_TEXT_METIERS.has(slug);

  return (
    <section className="border-t-4" style={{ borderColor: color }}>
      <div className="container mx-auto px-6 md:px-16 py-20 md:py-28">
        <FadeIn className="grid md:grid-cols-[5fr_7fr]">
          <Link
            href="/contact"
            className={`group flex min-h-[420px] flex-col justify-between gap-16 p-8 md:p-12 ${
              whiteText ? "text-white" : "text-foreground"
            }`}
            style={{ backgroundColor: color }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-current" />
                {t("cta.label")}
              </span>
              <span className="flex items-center gap-3">
                {t("cta.button")}
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold">{t("cta.title")}</h2>
              <p className="text-lg opacity-85">{t("cta.description")}</p>
            </div>
          </Link>

          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src={`/images/metiers/cta-${slug}.webp`}
              alt={t("cta.imageAlt") || `${slug} CTA background`}
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
