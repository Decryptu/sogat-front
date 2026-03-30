import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - First 3-column grid
  equipmentRow1: {
    col1: "/images/metiers/sp2i-ferroviaire/1.webp", // Caténaire escamotable
    col2: "/images/metiers/sp2i-ferroviaire/2.webp", // Passerelle d'accès toiture
    col3: "/images/metiers/sp2i-ferroviaire/3.webp", // PEMP
  },
  // Section: Nos équipements - Second 3-column grid
  equipmentRow2: {
    col1: "/images/metiers/sp2i-ferroviaire/4.webp", // Portique mobile
    col2: "/images/metiers/sp2i-ferroviaire/5.webp", // Table élévatrice
    col3: "/images/metiers/sp2i-ferroviaire/6.webp", // Automate de sécurité
  },
  // Section: Grue Vélocipédique
  grue: {
    main: "/images/metiers/sp2i-ferroviaire/7.webp",
  },
  // Section: Caténaire escamotable detail
  catenaire: {
    side: "/images/metiers/sp2i-ferroviaire/8.webp",
    collage: [
      "/images/metiers/sp2i-ferroviaire/16.webp",
      "/images/metiers/sp2i-ferroviaire/17.webp",
      "/images/metiers/sp2i-ferroviaire/18.webp",
    ],
  },
  // Section: Passerelle d'accès toiture detail
  passerelle: {
    side: "/images/metiers/sp2i-ferroviaire/10.webp",
    collage: [
      "/images/metiers/sp2i-ferroviaire/19.webp",
      "/images/metiers/sp2i-ferroviaire/20.webp",
      "/images/metiers/sp2i-ferroviaire/21.webp",
    ],
  },
  // Section: PEMP detail
  pemp: {
    main: "/images/metiers/sp2i-ferroviaire/12.webp",
  },
  // Section: Automate de sécurité detail
  automate: {
    main: "/images/metiers/sp2i-ferroviaire/13.webp",
    img2: "/images/metiers/sp2i-ferroviaire/14.webp",
    img3: "/images/metiers/sp2i-ferroviaire/15.webp",
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

function DiagonalCollage({ images, alt }) {
  // Gap width in % of container and diagonal offset in % of container
  const gap = 1.2;
  const skew = 3;

  // Boundaries where diagonal cuts happen (in % of container width)
  const cut1 = 33.33;
  const cut2 = 66.66;

  // Each image covers its third, clip-path coordinates are in % of the full container
  const clips = [
    // Left image: straight left, diagonal right edge (/ shape)
    `polygon(0% 0%, ${cut1 + skew - gap / 2}% 0%, ${cut1 - skew - gap / 2}% 100%, 0% 100%)`,
    // Center image: both edges diagonal (/ shape)
    `polygon(${cut1 + skew + gap / 2}% 0%, ${cut2 + skew - gap / 2}% 0%, ${cut2 - skew - gap / 2}% 100%, ${cut1 - skew + gap / 2}% 100%)`,
    // Right image: diagonal left edge (/ shape), straight right
    `polygon(${cut2 + skew + gap / 2}% 0%, 100% 0%, 100% 100%, ${cut2 - skew + gap / 2}% 100%)`,
  ];

  return (
    <div className="w-full">
      {/* Desktop: horizontal collage with diagonal separations */}
      <div className="hidden md:block">
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: "21 / 9" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{ clipPath: clips[i] }}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden flex flex-col gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
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
          <SectionTitle>Caténaires Escamotables</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Le système de caténaire rigide escamotable a été conçu spécialement pour les centres de maintenance du matériel ferroviaire roulant pour permettre l&apos;électrification des voies internes de l&apos;atelier tout en conservant les possibilités d&apos;utilisation des ponts roulants et d&apos;autres installations aériennes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour faciliter les opérations d&apos;entretien des rames « en toiture », la caténaire escamotable doit permettre :
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">En position « captage » :</h4>
                  <p className="text-gray-700 leading-relaxed">
                    L&apos;amenée et le repli des rames par traction électrique à l&apos;intérieur du bâtiment, les essais des moteurs de traction, les essais des pantographes, les opérations nécessitant la présence d&apos;une ligne de contact sous tension électrique.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">En position « escamotée » :</h4>
                  <p className="text-gray-700 leading-relaxed">
                    L&apos;intervention par dessus les rames, en tout point, au moyen de nacelles élévatrices ou de ponts roulants mobiles sur toute la longueur des ateliers, … des interventions spécifiques telles que le tarage du pantographe, l&apos;élévation des rames via les systèmes de levage pour les interventions sous-caisse…
                  </p>
                </div>
              </div>

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

          {/* Full width collage */}
          <DiagonalCollage
            images={IMAGES.catenaire.collage}
            alt="Caténaire escamotable"
          />
        </div>
      </section>

      {/* ===== SECTION: Passerelle d'accès toiture detail ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>PASSERELLE D&apos;ACCÈS TOITURE</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left - Image */}
            <PlaceholderImage
              src={IMAGES.passerelle.side}
              alt="Passerelle d'accès toiture"
              aspectRatio="aspect-[4/3]"
            />
            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                SP2I est spécialisé dans la conception et fabrication de passerelle complète, c&apos;est-à-dire de l&apos;ossature, de garde-corps, d&apos;échelles et d&apos;escaliers. Que ce soit des produits fabriqués à partir de plans et devis établis ou d&apos;une conception, la qualité du produit répond aux normes standards de l&apos;industrie.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre connaissance du milieu ferroviaire, nous permet de maîtriser les contraintes du matériel roulant tel que les gabarits de passage, hauteur de travail en toiture, les caméras de rame…
              </p>
              <p className="text-gray-700 leading-relaxed">
                Par ailleurs, nous proposons des solutions efficaces pour l&apos;accès sécurisé aux trains. En effet, nous pouvons intégrer à la passerelle notre système de « compensateur de lacune » qui permet de combler le vide entre la passerelle fixe et différents gabarits empêchant la chute des opérateurs de maintenance mais aussi de leurs outils.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le plancher mobile permet de combler la lacune entre le gabarit théorique des différents matériels roulants et celui de l&apos;engin réel immobile à visiter. Il permet d&apos;occuper le vide entre les passerelles d&apos;accès toiture et les différents gabarits de train. L&apos;ensemble en position de travail permet d&apos;empêcher la chute de personnes et d&apos;outils (conformément au code du travail).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les tiroirs des passerelles sont actionnés par des vérins pneumatiques, la pression d&apos;air est réglée constante, de façon à garantir un arrêt lors de la rencontre d&apos;un obstacle, ou du gabarit d&apos;une rame.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Les compensateurs permettent :</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium">En position reculée :</span> l&apos;amenée ou le repli de la rame. Des capteurs de position valident la position.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium">En position déployée :</span> le comblement de l&apos;espace entre la passerelle et la rame en venant en butée contre la caisse du matériel roulant, permettant le passage des opérateurs en toiture en toute sécurité. Les compensateurs sont équipés de pressostats permettant de détecter que le tiroir est en contact avec la rame.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full width collage */}
          <DiagonalCollage
            images={IMAGES.passerelle.collage}
            alt="Passerelle d'accès toiture"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Image */}
            <PlaceholderImage
              src={IMAGES.automate.main}
              alt="Automate de sécurité"
              aspectRatio="aspect-[4/3]"
            />
            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Les multiples équipements des ateliers ferroviaires associés à l&apos;appareillage SP2I forment un ensemble complexe qui doit être soumis à un contrôle rigoureux afin d&apos;éviter les accidents.
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

          {/* Additional photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PlaceholderImage
              src={IMAGES.automate.img2}
              alt="Automate de sécurité - armoire de commande"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.automate.img3}
              alt="Automate de sécurité - armoire électrique"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
