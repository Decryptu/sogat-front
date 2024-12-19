import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
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

  const formProps = {
    title: t("form.title"),
    labels: {
      name: t("form.name"),
      email: t("form.email"),
      message: t("form.message"),
      submit: t("form.submit")
    },
    messages: {
      success: t("form.success"),
      error: t("form.error")
    }
  };

  const locationProps = {
    title: t("location.title"),
    description: t("location.description"),
    address: t.raw("location.address"),
    hours: t("location.hours")
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero {...heroProps} />
      <ContactForm {...formProps} />
      <Location {...locationProps} />
    </main>
  );
}