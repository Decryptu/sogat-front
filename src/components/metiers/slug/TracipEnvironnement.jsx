import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements (3 columns)
  equipements: {
    col1: "/images/metiers/tracip-environnement/placeholder.webp",
    col2: "/images/metiers/tracip-environnement/placeholder.webp",
    col3: "/images/metiers/tracip-environnement/placeholder.webp",
  },
  // Section: Filtres à manches (right image)
  filtres: {
    main: "/images/metiers/tracip-environnement/placeholder.webp",
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, subtitle, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-tracip-environnement font-semibold">{subtitle}</p>
      )}
    </div>
  );
}

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function TracipEnvironnement({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="NOTRE MAÎTRISE ENVIRONNEMENTALE">
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
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            FILTRES À MANCHES, DÉPOUSSIÉRAGE, TRAITEMENT DES FUMÉES
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Text content */}
            <div className="space-y-8">
              {/* Filtres à manches */}
              <div>
                <h3 className="text-xl font-bold text-tracip-environnement mb-4">
                  Filtres à manches
                </h3>
                <ul className="space-y-2">
                  {[
                    "Conceptions spécifiques pour l'industrie lourde",
                    "Intégration dans la ligne process",
                    "Applications gaz chauds et corrosifs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-tracip-environnement rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dépoussiérage */}
              <div>
                <h3 className="text-xl font-bold text-tracip-environnement mb-4">
                  Dépoussiérage
                </h3>
                <p className="text-gray-700 mb-3">Installations clé en main. Applications :</p>
                <ul className="space-y-2">
                  {[
                    "Cimenterie : Broyeurs, séparateurs dynamiques, fours, refroidisseurs clinker",
                    "Matériaux de construction",
                    "Engrais",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-tracip-environnement rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Traitement des fumées */}
              <div>
                <h3 className="text-xl font-bold text-tracip-environnement mb-4">
                  Traitement des fumées
                </h3>
                <p className="text-gray-700 mb-3">
                  Installations complètes avec neutralisation des polluants, transports et stockages des résidus.
                  Procédés « voie sèche », à la chaux, au bicarbonate de sodium.
                </p>
                <p className="text-gray-700 mb-3">Applications :</p>
                <ul className="space-y-2">
                  {[
                    "Incinération de déchets",
                    "Chaudières biomasse",
                    "Verreries",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-tracip-environnement rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.filtres.main}
              alt="Filtres à manches et traitement des fumées"
              aspectRatio="aspect-[3/4]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
