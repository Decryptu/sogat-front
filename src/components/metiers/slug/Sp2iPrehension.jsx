import SubpageCard from "@/components/metiers/SubpageCard";

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

function SectionTitle({ children, subtitle, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-sp2i-prehension font-semibold">{subtitle}</p>
      )}
    </div>
  );
}

export default function Sp2iPrehension({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Outils de levage ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
