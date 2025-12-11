import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import Hero from "@/components/contact/Hero";
import Location from "@/components/contact/Location";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const params_obj = await Promise.resolve(params);
  const locale = params_obj.locale;
  
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Contact(props) {
  const params_obj = await Promise.resolve(props.params);
  const locale = params_obj.locale;
  
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const heroProps = {
    title: t("title"),
    description: t("description")
  };

  const locationProps = {
    title: t("location.title"),
    description: t("location.description"),
    address: t.raw("location.address"),
    hours: t("location.hours"),
    phone: t("location.phone"),
    fax: t("location.fax"),
    email: t("location.email"),
    linkedin: t("location.linkedin")
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero {...heroProps} />
      <Location {...locationProps} />
    </main>
  );
}