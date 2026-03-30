import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  visArchimede: "/images/metiers/mc2-maintenance/1.webp",
  convoyeurBande: "/images/metiers/mc2-maintenance/4.webp",
  charpenteMetallique: "/images/metiers/mc2-maintenance/5.webp",
  thermoEjecteur: "/images/metiers/mc2-maintenance/8.webp",
};

export default function Mc2Maintenance({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {locale === "fr" ? "Nos équipements" : "Our equipment"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
