import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements (3 columns)
  equipements: {
    col1: "/images/metiers/tracip-environnement/1.webp",
    col2: "/images/metiers/tracip-environnement/2.webp",
    col3: "/images/metiers/tracip-environnement/3.webp",
  },
  // Section: Filtres à manches (right image)
  filtres: {
    main: "/images/metiers/tracip-environnement/4.webp",
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, eyebrow }) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col gap-6">
      {eyebrow && (
        <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-tracip-environnement">
          <span className="size-2 rounded-full bg-current" />
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-4xl text-4xl md:text-6xl font-bold">{children}</h2>
    </div>
  );
}

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-muted ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-muted-foreground">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-tracip-environnement" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function TracipEnvironnement() {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <SectionTitle eyebrow="NOTRE MAÎTRISE ENVIRONNEMENTALE">
            Nos équipements
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlaceholderImage
              src={IMAGES.equipements.col1}
              alt="Équipement environnemental 1"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.equipements.col2}
              alt="Équipement environnemental 2"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.equipements.col3}
              alt="Équipement environnemental 3"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Filtres à manches, dépoussiérage, traitement des fumées ===== */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <SectionTitle>
            FILTRES À MANCHES, DÉPOUSSIÉRAGE, TRAITEMENT DES FUMÉES
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              <div className="py-8">
                <h3 className="mb-5 text-lg md:text-xl font-semibold">
                  Filtres à manches
                </h3>
                <BulletList
                  items={[
                    "Conceptions spécifiques pour l'industrie lourde",
                    "Intégration dans la ligne process",
                    "Applications gaz chauds et corrosifs",
                  ]}
                />
              </div>

              <div className="py-8">
                <h3 className="mb-5 text-lg md:text-xl font-semibold">
                  Dépoussiérage
                </h3>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  Installations clé en main. Applications :
                </p>
                <BulletList
                  items={[
                    "Cimenterie : Broyeurs, séparateurs dynamiques, fours, refroidisseurs clinker",
                    "Matériaux de construction",
                    "Engrais",
                  ]}
                />
              </div>

              <div className="py-8">
                <h3 className="mb-5 text-lg md:text-xl font-semibold">
                  Traitement des fumées
                </h3>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  Installations complètes avec neutralisation des polluants, transports et stockages des résidus.
                  Procédés « voie sèche », à la chaux, au bicarbonate de sodium.
                </p>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">Applications :</p>
                <BulletList
                  items={[
                    "Incinération de déchets",
                    "Chaudières biomasse",
                    "Verreries",
                  ]}
                />
              </div>
            </div>

            <PlaceholderImage
              src={IMAGES.filtres.main}
              alt="Filtres à manches et traitement des fumées"
              aspectRatio="aspect-[3/4]"
              className="border-t-4 border-tracip-environnement"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
