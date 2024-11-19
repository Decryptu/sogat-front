import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import ExpertiseStats from "./ExpertiseStats";

export default function Expertise() {
  const t = useTranslations("home.expertise");

  return (
    <section>
      <div className="py-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-1 w-12 bg-blue-600" />
          <h3 className="text-sm font-light uppercase tracking-wider">
            {t("banner")}
          </h3>
          <span className="h-1 w-12 bg-red-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-8 leading-tight">
            {t("title")}
          </h2>
          <Link 
            href="/expertise"
            className="inline-flex items-center text-lg text-blue-600 hover:text-blue-700 gap-2 font-medium"
          >
            {t("cta")}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        <ExpertiseStats />
      </div>
    </section>
  );
}