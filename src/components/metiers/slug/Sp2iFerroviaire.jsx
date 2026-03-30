import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  equipmentRow1: {
    col1: "/images/metiers/sp2i-ferroviaire/1.webp",
    col2: "/images/metiers/sp2i-ferroviaire/2.webp",
    col3: "/images/metiers/sp2i-ferroviaire/3.webp",
  },
  equipmentRow2: {
    col1: "/images/metiers/sp2i-ferroviaire/4.webp",
    col2: "/images/metiers/sp2i-ferroviaire/5.webp",
    col3: "/images/metiers/sp2i-ferroviaire/6.webp",
  },
  grue: {
    main: "/images/metiers/sp2i-ferroviaire/7.webp",
  },
};

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {children}
      </h2>
    </div>
  );
}

export default function Sp2iFerroviaire({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/catenaire-escamotable"
              src={IMAGES.equipmentRow1.col1}
              alt="Caténaire escamotable"
              title="CATÉNAIRE ESCAMOTABLE"
            />
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/passerelle-acces-toiture"
              src={IMAGES.equipmentRow1.col2}
              alt="Passerelle d'accès toiture"
              title="PASSERELLE D'ACCÈS TOITURE"
            />
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/pemp"
              src={IMAGES.equipmentRow1.col3}
              alt="Plateforme Élévatrice Mobile de Personne"
              title="Plateforme Élévatrice Mobile de Personne (PEMP)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/portique-mobile"
              src={IMAGES.equipmentRow2.col1}
              alt="Portique mobile d'accès toiture"
              title="PORTIQUE MOBILE D'ACCÈS TOITURE"
            />
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/automate-securite"
              src={IMAGES.equipmentRow2.col2}
              alt="Table élévatrice en fosse"
              title="Table élévatrice en fosse"
            />
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/automate-securite"
              src={IMAGES.equipmentRow2.col3}
              alt="Automate de sécurité"
              title="Automate de sécurité"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <SubpageCard
              href="/metiers/sp2i-ferroviaire/grue-velocipedique"
              src={IMAGES.grue.main}
              alt="Grue Vélocipédique"
              title="Grue Vélocipédique"
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
