import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import { METIER_SUBPAGES } from "@/constants/metier-subpages";
import { METIER_COLORS } from "@/constants/metier-colors";
import SubpageLayout from "@/components/metiers/SubpageLayout";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    Object.entries(METIER_SUBPAGES).flatMap(([metierSlug, subpages]) =>
      subpages.map((sp) => ({
        locale,
        slug: metierSlug,
        subpage: sp.slug,
      }))
    )
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug, subpage } = await params;
  const metierSubpages = METIER_SUBPAGES[slug];
  if (!metierSubpages) return {};

  const subpageData = metierSubpages.find((sp) => sp.slug === subpage);
  if (!subpageData) return {};

  const t = await getTranslations({ locale, namespace: `metiers.${slug}` });
  const title = subpageData.title[locale] || subpageData.title.fr;

  return {
    title: `${title} - ${t("title")}`,
    description: `${title} - ${t("description")}`,
  };
}

export default async function SubPage({ params }) {
  const { locale, slug, subpage } = await params;

  const metierSubpages = METIER_SUBPAGES[slug];
  if (!metierSubpages) notFound();

  const subpageData = metierSubpages.find((sp) => sp.slug === subpage);
  if (!subpageData) notFound();

  setRequestLocale(locale);
  const t = await getTranslations(`metiers.${slug}`);

  const componentName = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const DynamicContent = dynamic(
    () =>
      import(`@/components/metiers/subpages/${componentName}Subpages`).catch(
        () => {
          return () => <div className="w-full py-8" />;
        }
      ),
    {
      loading: () => (
        <div className="w-full py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />
          </div>
        </div>
      ),
    }
  );

  return (
    <SubpageLayout
      metierSlug={slug}
      metierTitle={t("title")}
      metierColor={METIER_COLORS[slug]}
      subpageTitle={subpageData.title[locale] || subpageData.title.fr}
      heroImage={subpageData.image}
      locale={locale}
    >
      <DynamicContent subpage={subpage} locale={locale} />
    </SubpageLayout>
  );
}
