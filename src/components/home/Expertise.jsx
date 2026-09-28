import { useTranslations } from "next-intl";
import CtaLink from "@/components/ui/CtaLink";
import ExpertiseStats from "./ExpertiseStats";

export default function Expertise() {
  const t = useTranslations("home.expertise");

  return (
    <section>
      <div id="discover" className="flex items-center gap-6 px-6 pt-14 md:pt-20">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-primary/40" />
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {t("banner")}
        </h3>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-primary/40" />
      </div>

      <div className="container mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="mb-16 md:mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-5xl md:text-7xl font-bold">
            {t("title")}
          </h2>
          <CtaLink href="/groupe">{t("cta")}</CtaLink>
        </div>

        <ExpertiseStats />
      </div>
    </section>
  );
}
