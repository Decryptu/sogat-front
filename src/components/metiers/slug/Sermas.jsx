import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - SCIE A BILLETTES (3 columns)
  billettes: {
    col1: "/images/metiers/sermas/placeholder.webp", // Solutions hautes-performances
    col2: "/images/metiers/sermas/placeholder.webp", // Technologie à ruban
    col3: "/images/metiers/sermas/placeholder.webp", // Technologie à disque
  },
  // Section: Second 3-column grid
  equipment: {
    col1: "/images/metiers/sermas/placeholder.webp", // SCIES & LIGNE DE SCIAGE
    col2: "/images/metiers/sermas/placeholder.webp", // SCIES MULTI-FONCTIONS
    col3: "/images/metiers/sermas/placeholder.webp", // SCIES DE REFENDAGE
  },
  // Section: Two columns
  twoCol: {
    col1: "/images/metiers/sermas/placeholder.webp", // Installation de sciage
    col2: "/images/metiers/sermas/placeholder.webp", // MACHINES A SURFACER
  },
  // Section: Solutions hautes-performances detail
  hautesPerformances: {
    main: "/images/metiers/sermas/placeholder.webp", // Right side image
    bottom: "/images/metiers/sermas/placeholder.webp", // Full width bottom image
  },
  // Section: Technologie à disque (3 images)
  disque: {
    img1: "/images/metiers/sermas/placeholder.webp",
    img2: "/images/metiers/sermas/placeholder.webp",
    img3: "/images/metiers/sermas/placeholder.webp",
  },
  // Section: SCIES & LIGNE DE SCIAGE detail
  ligneSciage: {
    left1: "/images/metiers/sermas/placeholder.webp", // Left column top
    left2: "/images/metiers/sermas/placeholder.webp", // Left column bottom
    right: "/images/metiers/sermas/placeholder.webp", // Right column (tall)
  },
  // Section: Scies multi-fonctions
  multiFonctions: {
    slicing: "/images/metiers/sermas/placeholder.webp", // Slicing Saws
    essential: "/images/metiers/sermas/placeholder.webp", // SERMAS ESSENTIAL
  },
  // Section: SCIES DE REFENDAGE
  refendage: {
    main: "/images/metiers/sermas/placeholder.webp", // Main image
    bottom1: "/images/metiers/sermas/placeholder.webp", // Bottom row 1
    bottom2: "/images/metiers/sermas/placeholder.webp", // Bottom row 2
    bottom3: "/images/metiers/sermas/placeholder.webp", // Bottom row 3
  },
  // Section: Installation plaques laminées
  plaquesLaminees: {
    img1: "/images/metiers/sermas/placeholder.webp",
    img2: "/images/metiers/sermas/placeholder.webp",
  },
  // Section: MACHINES A SURFACER
  surfacer: {
    main: "/images/metiers/sermas/placeholder.webp",
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
        <p className="text-xl text-sermas font-semibold">{subtitle}</p>
      )}
    </div>
  );
}

function ImageCard({ src, alt, title, description, aspectRatio = "aspect-[4/3]" }) {
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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
export default function Sermas({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements - SCIE A BILLETTES ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="SCIE A BILLETTES">
            Nos équipements
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              src={IMAGES.billettes.col1}
              alt="Solutions hautes-performances pour billettes"
              title="Solutions « hautes-performances »"
              description="Pour tous formats de billettes"
            />
            <ImageCard
              src={IMAGES.billettes.col2}
              alt="Technologie à ruban"
              title="Technologie à ruban"
            />
            <ImageCard
              src={IMAGES.billettes.col3}
              alt="Technologie à disque"
              title="Technologie à disque"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Second 3-column grid ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              src={IMAGES.equipment.col1}
              alt="Scies et ligne de sciage"
              title="SCIES & LIGNE DE SCIAGE"
              description="Pour plaques coulées & Tés (T-bars) d'Aluminium"
            />
            <ImageCard
              src={IMAGES.equipment.col2}
              alt="Scies multi-fonctions"
              title="SCIES MULTI-FONCTIONS"
              description="Pour le refendage, l'éboutage de plaques & Billettes d'Aluminium"
            />
            <ImageCard
              src={IMAGES.equipment.col3}
              alt="Scies de refendage"
              title="SCIES DE REFENDAGE"
              description="La production de plaques fines (tôles) d'aluminium à partir de plaques coulées"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Two columns - Installation & Machines ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCard
              src={IMAGES.twoCol.col1}
              alt="Installation de sciage pour plaques laminées"
              title="Installation de sciage pour plaques laminées"
              description="Solution complètes « plates Saws »"
            />
            <ImageCard
              src={IMAGES.twoCol.col2}
              alt="Machines à surfacer"
              title="MACHINES A SURFACER"
              description="Pour la production de plaques"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Solutions hautes-performances detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            Solutions « hautes-performances » pour tous formats de billettes
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Text content */}
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Robuste et fiable",
                  "Hautes performances",
                  "Faible consommation d'énergie",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <span className="w-2 h-2 bg-sermas rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 mb-2">Lames circulaires ou à ruban</p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-sermas">Option :</span> Intégration de la scie dans un processus entièrement automatisé
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.hautesPerformances.main}
              alt="Solutions hautes-performances"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Full width image below */}
          <PlaceholderImage
            src={IMAGES.hautesPerformances.bottom}
            alt="Solutions hautes-performances vue d'ensemble"
            aspectRatio="aspect-[21/9]"
          />
        </div>
      </section>

      {/* ===== SECTION: Technologie à disque ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Technologie à disque</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[IMAGES.disque.img1, IMAGES.disque.img2, IMAGES.disque.img3].map(
              (src, index) => (
                <PlaceholderImage
                  key={index}
                  src={src}
                  alt={`Technologie à disque ${index + 1}`}
                  aspectRatio="aspect-[4/3]"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== SECTION: SCIES & LIGNE DE SCIAGE detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            SCIES & LIGNE DE SCIAGE pour plaques coulées & Tés (T-bars) d'Aluminium
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left column - 2 stacked images */}
            <div className="space-y-6">
              <PlaceholderImage
                src={IMAGES.ligneSciage.left1}
                alt="Ligne de sciage vue 1"
                aspectRatio="aspect-[4/3]"
              />
              <PlaceholderImage
                src={IMAGES.ligneSciage.left2}
                alt="Ligne de sciage vue 2"
                aspectRatio="aspect-[4/3]"
              />
            </div>
            {/* Right column - single tall image */}
            <PlaceholderImage
              src={IMAGES.ligneSciage.right}
              alt="Ligne de sciage complète"
              aspectRatio="aspect-[3/4] lg:aspect-auto"
              className="h-full min-h-[400px] lg:min-h-0"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Scies multi-fonctions ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Scies multi-fonctions</SectionTitle>

          {/* First row - Slicing Saws */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Slicing Saws</h3>
              <p className="text-lg text-sermas font-medium">Production de feuilles flexibles</p>
              <ul className="space-y-3 pt-4">
                {[
                  "Robuste, fiable et entièrement automatisée.",
                  "Faible consommation d'énergie.",
                  "Système d'extraction et de compactage des copeaux.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-sermas rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.multiFonctions.slicing}
              alt="Slicing Saws"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Second row - SERMAS ESSENTIAL (reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <PlaceholderImage
              src={IMAGES.multiFonctions.essential}
              alt="SERMAS ESSENTIAL"
              aspectRatio="aspect-[4/3]"
            />
            {/* Right - Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">SERMAS ESSENTIAL</h3>
              <p className="text-lg text-sermas font-medium">Série BS-E</p>
              <p className="text-gray-700 leading-relaxed">
                Scie XL à découpe sur mesure : Scies circulaires pour la découpe de tôles non ferreuses (Al, Cu, Laiton... et alliages)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: SCIES DE REFENDAGE ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            SCIES DE REFENDAGE la production de plaques fines (tôles) d'aluminium à partir de plaques coulées
          </SectionTitle>

          {/* Two columns - text & image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Text */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-sermas">Solution intelligente et flexible :</h3>
              <ul className="space-y-3">
                {[
                  "Découpe polyvalente : extrémités, morceaux intermédiaires, petits morceaux, échantillons",
                  "Configuration flexible",
                  "Mode entièrement automatique",
                  "Système d'extraction des copeaux",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-sermas rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.refendage.main}
              alt="Scies de refendage"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* 3-column images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[IMAGES.refendage.bottom1, IMAGES.refendage.bottom2, IMAGES.refendage.bottom3].map(
              (src, index) => (
                <PlaceholderImage
                  key={index}
                  src={src}
                  alt={`Scies de refendage ${index + 1}`}
                  aspectRatio="aspect-[4/3]"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== SECTION: Installation plaques laminées ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Solution complètes « plates Saws »">
            Installation de sciage pour plaques laminées
          </SectionTitle>

          <p className="text-xl text-gray-700 mb-10 max-w-3xl">
            Fabrication de produits de précision pour l'industrie aérospatiale ou navale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderImage
              src={IMAGES.plaquesLaminees.img1}
              alt="Installation plaques laminées 1"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.plaquesLaminees.img2}
              alt="Installation plaques laminées 2"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: MACHINES A SURFACER ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pour la production de plaques">
            MACHINES A SURFACER
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Finition de surface de tôles sciées, pour obtenir une tôle d'aluminium coulée présentant une rugosité de surface similaire à celle des tôles laminées.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-2xl font-bold text-sermas">
                  Jusqu'à 7 500 mm x 3 200 mm
                </p>
                <p className="text-gray-600 mt-2">Dimensions maximales</p>
              </div>
            </div>
            {/* Right - Image */}
            <PlaceholderImage
              src={IMAGES.surfacer.main}
              alt="Machines à surfacer"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
