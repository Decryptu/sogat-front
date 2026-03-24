import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - 3-column grid
  equipment: {
    col1: "/images/metiers/aretec/1.webp", // Lignes de production
    col2: "/images/metiers/aretec/2.webp", // Machines spéciales
    col3: "/images/metiers/aretec/3.webp", // Robotique
  },
  // Section: Lignes de production automatisées - 2x2 grid
  grid2x2: {
    row1col1: "/images/metiers/aretec/4.webp", // Ligne échelle câble
    row1col2: "/images/metiers/aretec/5.webp", // Ligne tubes spiralés
    row2col1: "/images/metiers/aretec/6.webp", // Ligne sérigraphie
    row2col2: "/images/metiers/aretec/7.webp", // Ligne assemblage batterie
  },
  // Section: Lignes de production - additional photos
  production: {
    img1: "/images/metiers/aretec/19.webp",
    img2: "/images/metiers/aretec/20.webp",
    img3: "/images/metiers/aretec/21.webp",
  },
  // Section: Machines spéciales (5 items)
  machines: {
    decoupe: "/images/metiers/aretec/8.webp",
    poinconnage: "/images/metiers/aretec/9.webp",
    tunnel: "/images/metiers/aretec/10.webp",
    presse: "/images/metiers/aretec/11.webp",
    controle: "/images/metiers/aretec/12.webp",
  },
  // Section: Robotique (3 items)
  robotique: {
    fabrication: "/images/metiers/aretec/13.webp",
    vision: "/images/metiers/aretec/14.webp",
    clippage: "/images/metiers/aretec/15.webp",
  },
  // Section: Robots collaboratifs (3 images)
  cobots: {
    img1: "/images/metiers/aretec/16.webp",
    img2: "/images/metiers/aretec/17.webp",
    img3: "/images/metiers/aretec/18.webp",
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

function OverlayCard({ src, alt, title }) {
  return (
    <div className="group">
      <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
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
export default function Aretec({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Introduction text ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            ARETEC possède, sur le même site, un ensemble des ressources expertes en mécanique, usinage, électricité et automatisme. Nos moyens en hommes et machines permettent de garantir un niveau de qualité élevé, une forte réactivité et une grande flexibilité.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Nous sommes familiarisés à l&apos;intégration des préconisations et des normes spécifiques notamment des acteurs de l&apos;industrie automobile.
          </p>
          <p className="text-gray-700 leading-relaxed mb-12">
            Force de propositions techniques, nous apportons également des solutions alternatives créatives tout en intégrant les critères de fiabilité, de taux de production et de facilité de maintenance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">NOTRE SAVOIR-FAIRE</h3>
              <ul className="space-y-2">
                {[
                  "Assemblage mécanique (vissage, sertissage, clinchage, rivetage…)",
                  "Contrôle d'étanchéité, de géométrie, dimensionnel...",
                  "Emmanchement avec contrôle d'effort et de position",
                  "Manipulateur, mains de préhension pour déchargement, presse à injecter",
                  "Coupe seuils d'injection",
                  "Poinçonnage : standard et Ultrason",
                  "Assemblage et contrôle d'accessoires",
                  "Soudures Ultrasons",
                  "Transitique inter machines",
                  "Rétrofit ou adaptation d'anciens moyens",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">NOTRE CHAMP D&apos;ACTION</h3>
              <ul className="space-y-2">
                {[
                  "Construction de machines",
                  "Analyse de risques",
                  "Calcul du PL (niveau de performance) et du SIL (niveau d'intégrité de sécurité) par logiciel agréé",
                  "AMDEC",
                  "Études des contraintes ergonomiques",
                  "Études mécaniques en CAO (Catia V5)",
                  "Études électriques, automatismes, robotiques et informatique industrielle",
                  "Fabrication (usinage, mécano soudure…) et études d'ensemble « clé en main »",
                  "Assemblage mécanique",
                  "Câblage armoire, pupitre et machine",
                  "Mise au point en atelier et sur site client",
                  "Installation, intégration et mise en service sur site",
                  "Formation du personnel",
                  "Mise en place de contrats de maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Nos équipements ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>NOS équipements</SectionTitle>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              src={IMAGES.equipment.col1}
              alt="Lignes de production automatisées"
              title="LIGNES DE PRODUCTION AUTOMATISÉES"
            />
            <ImageCard
              src={IMAGES.equipment.col2}
              alt="Machines spéciales"
              title="MACHINES SPÉCIALES"
            />
            <ImageCard
              src={IMAGES.equipment.col3}
              alt="Robotique"
              title="ROBOTIQUE"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Lignes de production automatisées ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>LIGNES DE PRODUCTION AUTOMATISÉES</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NOTRE SAVOIR-FAIRE</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Réalisation de moyens mécaniques (sans électricité ou automatisme)",
                  "Construction de machines",
                  "Conception et étude d'ensemble « clé en main »",
                  "Construction de systèmes de convoyage et de manutention",
                  "Construction de ligne de production",
                  "Réalisation de prototypes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble des compétences d&apos;ARETEC et son organisation structurelle, lui permettent la construction de lignes de production « clé en main » : études, usinage, mécanique, électricité, automatisme (robotique).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NOTRE CHAMP D&apos;ACTION</h3>
              <ul className="space-y-2">
                {[
                  "Construction de machines",
                  "Analyse de risques",
                  "Calcul du PL (niveau de performance) et du SIL (niveau d'intégrité de sécurité) par logiciel agréé",
                  "AMDEC",
                  "Études des contraintes ergonomiques",
                  "Études mécaniques en CAO (Catia V5)",
                  "Études électriques, automatismes, robotiques et informatique industrielle",
                  "Fabrication (usinage, mécano soudure…) et étude d'ensemble « clé en main »",
                  "Assemblage mécanique",
                  "Câblage armoire, pupitre et machine",
                  "Mise au point en atelier et sur site client",
                  "Installation, intégration et mise en service sur site",
                  "Formation du personnel",
                  "Mise en place de contrats de maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ImageCard
              src={IMAGES.grid2x2.row1col1}
              alt="Ligne fabrication échelle à câble"
              title="Ligne fabrication échelle à câble"
            />
            <ImageCard
              src={IMAGES.grid2x2.row1col2}
              alt="Ligne fabrication tubes spiralés"
              title="Ligne fabrication tubes spiralés"
            />
            <ImageCard
              src={IMAGES.grid2x2.row2col1}
              alt="Ligne sérigraphie patte pâtissière"
              title="Ligne sérigraphie patte pâtissière"
            />
            <ImageCard
              src={IMAGES.grid2x2.row2col2}
              alt="Ligne assemblage de batterie"
              title="Ligne assemblage de batterie"
            />
          </div>

          {/* Additional production photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlaceholderImage
              src={IMAGES.production.img1}
              alt="Ligne de production automatisée"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.production.img2}
              alt="Ligne de production automatisée"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.production.img3}
              alt="Ligne de production automatisée"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Machines spéciales ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>MACHINES SPÉCIALES</SectionTitle>

          {/* First row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <OverlayCard
              src={IMAGES.machines.decoupe}
              alt="Découpe de porte"
              title="Découpe de porte"
            />
            <OverlayCard
              src={IMAGES.machines.poinconnage}
              alt="Poinçonnage"
              title="Poinçonnage"
            />
            <OverlayCard
              src={IMAGES.machines.tunnel}
              alt="Tunnel de séchage"
              title="Tunnel de séchage"
            />
          </div>

          {/* Second row - 2 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <OverlayCard
              src={IMAGES.machines.presse}
              alt="Presse de collage"
              title="Presse de collage"
            />
            <OverlayCard
              src={IMAGES.machines.controle}
              alt="Poste de contrôle éclaireur"
              title="Poste de contrôle éclaireur"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Robotique ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>ROBOTIQUE</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NOTRE SAVOIR-FAIRE</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Intégration sur lignes existantes",
                  "Création d'îlots complets",
                  "Remplacement de robots obsolètes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-medium">Optimisation de trajectoires :</span> Collage, Soudure laser, Manutention / assemblage
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-medium">Cobotique :</span> ARETEC possède les normes liées à la robotique collaborative et notre personnel a suivi la formation liée au niveau de sécurité élevé lié à cette technologie.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos roboticiens sont certifiés par le biais de formations dispensées par les fabricants de robots (notamment en applicatifs métiers spécifiques, vision, fonction de sécurité, Profisafe, robots collaboratifs...)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NOTRE CHAMP D&apos;ACTION</h3>
              <ul className="space-y-2">
                {[
                  "Robots standards et coopératifs",
                  "Cobots « robots collaboratifs »",
                  "Simulation 3D de trajectoires et temps de cycle",
                  "Conception 3D",
                  "Plans pour fabrication",
                  "Études automatisme et robotique",
                  "Fabrication et assemblage en nos ateliers",
                  "Test production en nos locaux",
                  "Mise en place sur site client",
                  "Assistance au démarrage et formation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <OverlayCard
              src={IMAGES.robotique.fabrication}
              alt="Ligne de fabrication"
              title="Ligne de fabrication"
            />
            <OverlayCard
              src={IMAGES.robotique.vision}
              alt="Vision"
              title="Vision"
            />
            <OverlayCard
              src={IMAGES.robotique.clippage}
              alt="Clippage"
              title="Clippage"
            />
          </div>

          {/* Robots collaboratifs section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-aretec rounded-full" />
              <h3 className="text-2xl font-bold text-gray-900">Robots collaboratifs</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlaceholderImage
                src={IMAGES.cobots.img1}
                alt="Robot collaboratif 1"
                aspectRatio="aspect-[4/3]"
              />
              <PlaceholderImage
                src={IMAGES.cobots.img2}
                alt="Robot collaboratif 2"
                aspectRatio="aspect-[4/3]"
              />
              <PlaceholderImage
                src={IMAGES.cobots.img3}
                alt="Robot collaboratif 3"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
