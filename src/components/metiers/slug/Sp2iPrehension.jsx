import Image from "next/image";
import ClickableImageCard from "./ClickableImageCard";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - 3-column grid
  equipment: {
    col1: "/images/metiers/sp2i-prehension/1.webp", // Pince spécifique
    col2: "/images/metiers/sp2i-prehension/2.webp", // Pince de préhension bobine
    col3: "/images/metiers/sp2i-prehension/3.webp", // Navette transbordeur
  },
  // Section: 2-column grid
  twoCol: {
    col1: "/images/metiers/sp2i-prehension/4.webp", // Convoyeur à rouleau
    col2: "/images/metiers/sp2i-prehension/5.webp", // Ligne de transfert
  },
  // Section: Outil de levage (6 items)
  levage: {
    bobines: "/images/metiers/sp2i-prehension/6.webp", // Pinces bobines horizontales
    outillage: "/images/metiers/sp2i-prehension/7.webp", // Pinces outillage presse
    toles: "/images/metiers/sp2i-prehension/8.webp", // Pinces paquets tôles
    brames: "/images/metiers/sp2i-prehension/9.webp", // Pince à brames
    diverses: "/images/metiers/sp2i-prehension/10.webp", // Pinces charges diverses
    lingot: "/images/metiers/sp2i-prehension/11.webp", // Pince à lingot aluminium
  },
  // Section: Convoyeur à rouleau
  convoyeur: {
    img1: "/images/metiers/sp2i-prehension/12.webp", // Convoyeurs description
    img2: "/images/metiers/sp2i-prehension/13.webp", // Transfert à chaînes
  },
  // Section: Ligne de transfert
  transfert: {
    main: "/images/metiers/sp2i-prehension/14.webp",
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
        <p className="text-xl text-sp2i-prehension font-semibold">{subtitle}</p>
      )}
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
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
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

function LevageCard({ src, alt, title }) {
  return (
    <div className="group">
      <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3 bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function Sp2iPrehension({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements - 3-column ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ClickableImageCard
              src={IMAGES.equipment.col1}
              alt="Pince spécifique pour outillage de presse"
              title="PINCE spécifique"
              description="Pour outillage de presse"
            />
            <ClickableImageCard
              src={IMAGES.equipment.col2}
              alt="Pince de préhension pour bobine horizontale"
              title="PINCE de préhension"
              description="Pour bobine horizontale"
            />
            <ImageCard
              src={IMAGES.equipment.col3}
              alt="Navette transbordeur"
              title="Manutention Navette transbordeur"
            />
          </div>

          {/* 2-column row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCard
              src={IMAGES.twoCol.col1}
              alt="Convoyeur à rouleau"
              title="Convoyeur à rouleau"
            />
            <ImageCard
              src={IMAGES.twoCol.col2}
              alt="Ligne de transfert et de manutention"
              title="Ligne de transfert et de manutention"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Outil de levage ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Outil de levage</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <LevageCard
              src={IMAGES.levage.bobines}
              alt="Pinces pour bobines horizontales"
              title="Pinces pour bobines horizontales"
            />
            <LevageCard
              src={IMAGES.levage.outillage}
              alt="Pinces pour outillage de presse"
              title="Pinces pour outillage de presse"
            />
            <LevageCard
              src={IMAGES.levage.toles}
              alt="Pinces pour paquets de tôles"
              title="Pinces pour paquets de tôles et produits plats"
            />
            <LevageCard
              src={IMAGES.levage.brames}
              alt="Pince à brames"
              title="Pince à brames"
            />
            <LevageCard
              src={IMAGES.levage.diverses}
              alt="Pinces charges diverses"
              title="Pinces charges diverses"
            />
            <LevageCard
              src={IMAGES.levage.lingot}
              alt="Pince à lingot d'aluminium"
              title="Pince à lingot d'aluminium"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Convoyeur à rouleau ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Convoyeurs à rouleaux, à chaînes et à bandes">
            Convoyeur à rouleau
          </SectionTitle>

          <div className="space-y-12">
            {/* First row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <PlaceholderImage
                src={IMAGES.convoyeur.img1}
                alt="Convoyeurs à rouleaux"
                aspectRatio="aspect-[4/3]"
              />
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Les convoyeurs permettent de transférer des charges unitaires, en paquets ou en vrac d&apos;une position vers une autre ou vers de multiples positions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nos convoyeurs peuvent être à rouleau, à chaînes, à bandes ou encore à écailles.
                </p>
                <ul className="space-y-2 pt-4">
                  {[
                    "Convoyeurs à rouleaux",
                    "Convoyeurs à chaînes",
                    "Convoyeurs à bandes",
                    "Convoyeurs à écailles",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-sp2i-prehension rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-last">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Les convoyeurs peuvent être isolés ou intégrés à une ligne de convoyage avec des transferts.
                </p>
                <div className="bg-sp2i-prehension/10 rounded-xl p-6 border border-sp2i-prehension/20">
                  <p className="text-gray-700">
                    <span className="font-semibold text-sp2i-prehension">Exemple :</span> Transfert à chaînes à 90° intégré dans un convoyage à rouleaux.
                  </p>
                </div>
              </div>
              <PlaceholderImage
                src={IMAGES.convoyeur.img2}
                alt="Transfert à chaînes intégré"
                aspectRatio="aspect-[4/3]"
                className="lg:order-first"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Ligne de transfert et de manutention ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Ligne de transfert et de manutention</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage
              src={IMAGES.transfert.main}
              alt="Ligne de transfert et de manutention"
              aspectRatio="aspect-[4/3]"
            />
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nos lignes assurent le transfert ou la manutention de charges unitaires ou en paquets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour ces lignes, nous intégrons :
              </p>
              <ul className="space-y-3">
                {[
                  "Convoyeurs à chaînes de manutention",
                  "Refroidissoirs",
                  "Tournes tubes",
                  "Décalamineuses",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-sp2i-prehension rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Les lignes peuvent être isolées, ou intégrées à une ligne de convoyage complète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
