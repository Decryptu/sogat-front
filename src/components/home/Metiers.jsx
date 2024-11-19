import { METIERS } from "@/constants/metiers";
import MetiersClient from "./MetiersClient";

export default function Metiers({ t }) {
  // Pre-translate all needed strings
  const translations = {
    title: t("businessAreas.title"),
    imageAlt: t("businessAreas.imageAlt"),
    // Create an object of all metier translations
    metiers: Object.fromEntries(
      METIERS.map(metier => [
        metier,
        t(`businessAreas.${metier}`)
      ])
    )
  };

  return (
    <section className="grid md:grid-cols-2 border-b-4 border-blue-500 bg-white min-h-[600px]">
      <MetiersClient translations={translations} metiers={METIERS} />
    </section>
  );
}