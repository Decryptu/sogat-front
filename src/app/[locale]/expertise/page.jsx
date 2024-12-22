import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import { EXPERTISE_DOMAINS } from "@/constants/expertise";
import Domain from "@/components/expertise/Domain";
import DetailedDomain from "@/components/expertise/DetailedDomain";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const params_obj = await Promise.resolve(params);
  const locale = params_obj.locale;
  
  const t = await getTranslations({ locale, namespace: "expertise" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Expertise({ params }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations("expertise");
  
	const domainProps = {
	  items: ["mechanical", "electrical", "manufacturing", "onsite", "service"].map(
		(key) => ({
		  key,
		  title: t(`domains.${key}.title`),
		  description: t(`domains.${key}.description`),
		  points: t.raw(`domains.${key}.points`)
		})
	  )
	};

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="space-y-6 px-4 md:px-16 py-12">
            <h1 className="text-4xl lg:text-6xl font-bold">{t("title")}</h1>
            <p className="text-lg font-light lg:text-xl text-gray-700">{t("description")}</p>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/expertise/hero.webp"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <Domain {...domainProps} />
	  <DetailedDomain domains={EXPERTISE_DOMAINS} t={t} />
    </main>
  );
}