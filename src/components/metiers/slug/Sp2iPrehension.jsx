import SubpageCard from "@/components/metiers/SubpageCard";
import SectionHeader from "@/components/ui/SectionHeader";

const IMAGES = {
  equipment: {
    navette: "/images/metiers/sp2i-prehension/3.webp",
    convoyeur: "/images/metiers/sp2i-prehension/4.webp",
    transfert: "/images/metiers/sp2i-prehension/5.webp",
  },
  levage: {
    main: "/images/metiers/sp2i-prehension/6.webp",
  },
};

export default function Sp2iPrehension() {
  return (
    <div className="w-full">
      {/* ===== SECTION: Outils de levage ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <SectionHeader title="Nos équipements" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <SubpageCard
              href="/metiers/sp2i-prehension/outils-de-levage"
              src={IMAGES.levage.main}
              alt="Outils de levage"
              title="Outils de levage"
            />
            <SubpageCard
              href="/metiers/sp2i-prehension/navette-transbordeur"
              src={IMAGES.equipment.navette}
              alt="Navette transbordeur"
              title="Manutention Navette transbordeur"
            />
            <SubpageCard
              href="/metiers/sp2i-prehension/convoyeur-a-rouleau"
              src={IMAGES.equipment.convoyeur}
              alt="Convoyeur à rouleau"
              title="Convoyeur à rouleau"
            />
            <SubpageCard
              href="/metiers/sp2i-prehension/ligne-de-transfert"
              src={IMAGES.equipment.transfert}
              alt="Ligne de transfert et de manutention"
              title="Ligne de transfert et de manutention"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
