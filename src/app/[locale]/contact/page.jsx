import { getTranslations } from "next-intl/server";
import Hero from "@/components/contact/Hero";
import Location from "@/components/contact/Location";

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Contact() {
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