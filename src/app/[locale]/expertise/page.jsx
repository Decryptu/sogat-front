import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import ExpertiseClient from "@/components/expertise/ExpertiseClient";

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

  return <ExpertiseClient />;
}
