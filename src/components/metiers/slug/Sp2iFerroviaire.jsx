import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - First 3-column grid
  equipmentRow1: {
    col1: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Caténaire escamotable
    col2: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Passerelle d'accès toiture
    col3: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // PEMP
  },
  // Section: Nos équipements - Second 3-column grid
  equipmentRow2: {
    col1: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Portique mobile
    col2: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Table élévatrice
    col3: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Automate de sécurité
  },
  // Section: Grue Vélocipédique
  grue: {
    main: "/images/metiers/sp2i-ferroviaire/placeholder.webp",
  },
  // Section: Caténaire escamotable detail
  catenaire: {
    side: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Side image
    full: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Full width bottom
  },
  // Section: Passerelle d'accès toiture detail
  passerelle: {
    side: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Side image
    full: "/images/metiers/sp2i-ferroviaire/placeholder.webp", // Full width bottom
  },
  // Section: PEMP detail
  pemp: {
    main: "/images/metiers/sp2i-ferroviaire/placeholder.webp",
  },
  // Section: Automate de sécurité detail
  automate: {
    main: "/images/metiers/sp2i-ferroviaire/placeholder.webp",
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {children}
      </h2>
    </div>
  );
}

function ImageCard({ src, alt, title, aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className="group">
      <div className={`relative ${aspectRatio} rounded-xl overflow-hidden mb-4 bg-gray-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
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
export default function Sp2iFerroviaire({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements - First row ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipmentRow1.col1}
              alt="Caténaire escamotable"
              title="CATÉNAIRE ESCAMOTABLE"
            />
            <ImageCard
              src={IMAGES.equipmentRow1.col2}
              alt="Passerelle d'accès toiture"
              title="PASSERELLE D'ACCÈS TOITURE"
            />
            <ImageCard
              src={IMAGES.equipmentRow1.col3}
              alt="Plateforme Élévatrice Mobile de Personne"
              title="Plateforme Élévatrice Mobile de Personne (PEMP)"
            />
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipmentRow2.col1}
              alt="Portique mobile d'accès toiture"
              title="PORTIQUE MOBILE D'ACCÈS TOITURE"
            />
            <ImageCard
              src={IMAGES.equipmentRow2.col2}
              alt="Table élévatrice en fosse"
              title="Table élévatrice en fosse"
            />
            <ImageCard
              src={IMAGES.equipmentRow2.col3}
              alt="Automate de sécurité"
              title="Automate de sécurité"
            />
          </div>

          {/* Grue Vélocipédique - single column */}
          <div className="max-w-2xl mx-auto">
            <ImageCard
              src={IMAGES.grue.main}
              alt="Grue Vélocipédique"
              title="Grue Vélocipédique"
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Caténaire escamotable detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>CATÉNAIRE ESCAMOTABLE</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Notre système de caténaires rigides escamotables a été conçu spécialement pour les centres de maintenance du matériel ferroviaire roulant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il permet d'électrifier les voies internes de l'atelier tout en conservant les possibilités d'utilisation des ponts-roulants et des autres installations aériennes.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <span className="w-12 h-1 bg-sp2i-feroviaire rounded-full" />
                <span className="text-sp2i-feroviaire font-medium">Solution brevetée SP2I</span>
              </div>
            </div>
            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.catenaire.side}
              alt="Caténaire escamotable"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Full width image */}
          <PlaceholderImage
            src={IMAGES.catenaire.full}
            alt="Caténaire escamotable vue d'ensemble"
            aspectRatio="aspect-[21/9]"
          />
        </div>
      </section>

      {/* ===== SECTION: Passerelle d'accès toiture detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>PASSERELLE D'ACCÈS TOITURE</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Image */}
            <PlaceholderImage
              src={IMAGES.passerelle.side}
              alt="Passerelle d'accès toiture"
              aspectRatio="aspect-[4/3]"
            />
            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Des compensateurs de lacunes peuvent être intégrés à nos passerelles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ils permettent de combler le vide entre la passerelle fixe et les différents gabarits, empêchant la chute des opérateurs de maintenance et de leurs outils.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Comble-lacune intégré",
                  "Adaptation multi-gabarits",
                  "Sécurité renforcée",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-sp2i-feroviaire rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full width image */}
          <PlaceholderImage
            src={IMAGES.passerelle.full}
            alt="Passerelle d'accès toiture vue d'ensemble"
            aspectRatio="aspect-[21/9]"
          />
        </div>
      </section>

      {/* ===== SECTION: PEMP detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Plateforme Élévatrice Mobile de Personne (PEMP)</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nos Plates-formes Élévatrices Mobiles de Personnes ont été conçues pour permettre un accès en hauteur, du côté et du dessus des rames.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                <ul className="space-y-2">
                  {[
                    "Accès latéral sécurisé",
                    "Accès toiture facilité",
                    "Mobilité optimale en atelier",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-sp2i-feroviaire rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.pemp.main}
              alt="Plateforme Élévatrice Mobile de Personne"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Automate de sécurité detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Automate de sécurité</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <PlaceholderImage
              src={IMAGES.automate.main}
              alt="Automate de sécurité"
              aspectRatio="aspect-[4/3]"
            />
            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Les multiples équipements des ateliers ferroviaires associés à l'appareillage SP2I forment un ensemble complexe qui doit être soumis à un contrôle rigoureux afin d'éviter les accidents.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Des automates de sécurité sont ainsi intégrés à nos structures pour gérer les risques entre caténaires sous tension et équipements mobiles ou humains.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-xl bg-sp2i-feroviaire/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sp2i-feroviaire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sécurité maximale</p>
                  <p className="text-sm text-gray-600">Gestion automatisée des risques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
