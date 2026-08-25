import { getTranslations } from "next-intl/server";
import ExpertiseClient from "@/components/expertise/ExpertiseClient";

export async function generateMetadata() {
  const t = await getTranslations("expertise");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Expertise() {
  return <ExpertiseClient />;
}
