import { getTranslations } from "next-intl/server";
import Hero from "@/components/groupe/Hero";
import Stats from "@/components/groupe/Stats";
// import Overview from "@/components/groupe/Overview"; // Commented out - can be reactivated later
import GroupeHierarchy from "@/components/groupe/GroupeHierarchy";
import Values from "@/components/groupe/Values";
import Solutions from "@/components/groupe/Solutions";

export async function generateMetadata() {
  const t = await getTranslations("groupe");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Groupe() {
  const t = await getTranslations("groupe");

  const heroProps = {
    title: t("title"),
    description: t("description"),
    imageAlt: t("imageAlt")
  };

  const statsProps = {
    stats: ["foundation", "employees", "entities", "surface", "departments", "revenue"].map(
      (key) => ({
        key,
        value: t(`stats.${key}.value`),
        label: t(`stats.${key}.label`)
      })
    )
  };

  // Overview props - commented out, can be reactivated later
  // const overviewProps = {
  //   title: t("overview.title"),
  //   subtitle: t("overview.subtitle"),
  //   points: t.raw("overview.points")
  // };

  const solutionsProps = {
    subtitle: t("solutions.subtitle"),
    title: t("solutions.title"),
    items: ["engineering", "project", "manufacturing", "installation"].map(
      (key) => ({
        key,
        title: t(`solutions.items.${key}.title`),
        description: t(`solutions.items.${key}.description`)
      })
    )
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero {...heroProps} />
      <Stats {...statsProps} />
      <GroupeHierarchy />
      <Values />
      {/* <Overview {...overviewProps} /> */}
      <Solutions {...solutionsProps} />
    </main>
  );
}