import SubpageCard from "@/components/metiers/SubpageCard";
import SectionHeader from "@/components/ui/SectionHeader";

const IMAGES = {
  visArchimede: "/images/metiers/mc2-maintenance/1.webp",
  convoyeurBande: "/images/metiers/mc2-maintenance/4.webp",
  charpenteMetallique: "/images/metiers/mc2-maintenance/5.webp",
  thermoEjecteur: "/images/metiers/mc2-maintenance/8.webp",
};

export default function Mc2Maintenance({ locale }) {
  return (
    <div className="w-full">
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <SectionHeader title={locale === "fr" ? "Nos équipements" : "Our equipment"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <SubpageCard
              href="/metiers/mc2-maintenance/vis-archimede"
              src={IMAGES.visArchimede}
              alt="Vis d'Archimède"
              title={locale === "fr" ? "Vis d'Archimède" : "Archimedes Screw"}
            />
            <SubpageCard
              href="/metiers/mc2-maintenance/convoyeur-a-bande"
              src={IMAGES.convoyeurBande}
              alt="Convoyeur à bande"
              title={locale === "fr" ? "Convoyeur à bande" : "Belt Conveyor"}
            />
            <SubpageCard
              href="/metiers/mc2-maintenance/charpente-structure-metallique"
              src={IMAGES.charpenteMetallique}
              alt="Charpente et structure métallique"
              title={locale === "fr" ? "Charpente et structure métallique" : "Steel Frame and Structure"}
            />
            <SubpageCard
              href="/metiers/mc2-maintenance/thermo-ejecteur"
              src={IMAGES.thermoEjecteur}
              alt="Thermo-éjecteur"
              title={locale === "fr" ? "Thermo-éjecteur" : "Thermo-Ejector"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
