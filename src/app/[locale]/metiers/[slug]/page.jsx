import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import { METIERS } from "@/constants/metiers";
import MetierCTA from "@/components/metiers/MetierCTA";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    METIERS.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export default async function MetierPage({ params }) {
  const { locale, slug } = await params;

  if (!METIERS.includes(slug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations(`metiers.${slug}`);

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 px-4 md:px-16 py-12">
          <h1 className="text-4xl lg:text-6xl font-bold">{t("title")}</h1>
          <p className="text-lg lg:text-xl text-gray-700">{t("description")}</p>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-square">
          <Image
            src={`/images/metiers/${slug}.webp`}
            alt={t("imageAlt")}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Dynamic CTA Section */}
      <MetierCTA slug={slug} t={t} />
    </div>
  );
}