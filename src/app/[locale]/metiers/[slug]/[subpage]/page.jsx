import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { METIER_SUBPAGES } from "@/constants/metier-subpages";
import { METIER_COLORS } from "@/constants/metier-colors";
import SubpageLayout from "@/components/metiers/SubpageLayout";

const SUBPAGE_COMPONENTS = {
  sermas: dynamic(() => import("@/components/metiers/subpages/SermasSubpages")),
  "sp2i-ferroviaire": dynamic(() => import("@/components/metiers/subpages/Sp2iFerroviaireSubpages")),
  "sp2i-prehension": dynamic(() => import("@/components/metiers/subpages/Sp2iPrehensionSubpages")),
  aretec: dynamic(() => import("@/components/metiers/subpages/AretecSubpages")),
  haquette: dynamic(() => import("@/components/metiers/subpages/HaquetteSubpages")),
  iserco: dynamic(() => import("@/components/metiers/subpages/IsercoSubpages")),
  "mc2-maintenance": dynamic(() => import("@/components/metiers/subpages/Mc2MaintenanceSubpages")),
};

export function generateStaticParams() {
  return Object.entries(METIER_SUBPAGES).flatMap(([metierSlug, subpages]) =>
    subpages.map((sp) => ({
      slug: metierSlug,
      subpage: sp.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { slug, subpage } = await params;
  const locale = await rootLocale();
  const metierSubpages = METIER_SUBPAGES[slug];
  if (!metierSubpages) return {};

  const subpageData = metierSubpages.find((sp) => sp.slug === subpage);
  if (!subpageData) return {};

  const t = await getTranslations(`metiers.${slug}`);
  const title = subpageData.title[locale] || subpageData.title.fr;

  return {
    title: `${title} - ${t("title")}`,
    description: `${title} - ${t("description")}`,
  };
}

export default async function SubPage({ params }) {
  const { slug, subpage } = await params;

  const metierSubpages = METIER_SUBPAGES[slug];
  if (!metierSubpages) notFound();

  const subpageData = metierSubpages.find((sp) => sp.slug === subpage);
  if (!subpageData) notFound();
  const [locale, t] = await Promise.all([
    rootLocale(),
    getTranslations(`metiers.${slug}`),
  ]);

  const SubpageContent = SUBPAGE_COMPONENTS[slug];

  return (
    <SubpageLayout
      metierSlug={slug}
      metierTitle={t("title")}
      metierColor={METIER_COLORS[slug]}
      subpageTitle={subpageData.title[locale] || subpageData.title.fr}
      locale={locale}
    >
      <SubpageContent subpage={subpage} locale={locale} />
    </SubpageLayout>
  );
}
