import Image from "next/image";
import ClickableImageCard from "./ClickableImageCard";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - remaining items (pince spécifique & pince préhension removed)
  equipment: {
    navette: "/images/metiers/sp2i-prehension/3.webp", // Navette transbordeur
    convoyeur: "/images/metiers/sp2i-prehension/4.webp", // Convoyeur à rouleau
    transfert: "/images/metiers/sp2i-prehension/5.webp", // Ligne de transfert
  },
  // Section: Outil de levage (6 items)
  levage: {
    bobines: "/images/metiers/sp2i-prehension/6.webp",
    outillage: "/images/metiers/sp2i-prehension/7.webp",
    toles: "/images/metiers/sp2i-prehension/8.webp",
    brames: "/images/metiers/sp2i-prehension/9.webp",
    diverses: "/images/metiers/sp2i-prehension/10.webp",
    lingot: "/images/metiers/sp2i-prehension/11.webp",
  },
  // Additional images for levage detail
  levageDetail: {
    bobines1: "/images/metiers/sp2i-prehension/15.webp",
    bobines2: "/images/metiers/sp2i-prehension/16.webp",
    outillage1: "/images/metiers/sp2i-prehension/17.webp",
  },
  // Section: Convoyeur à rouleau
  convoyeur: {
    img1: "/images/metiers/sp2i-prehension/12.webp",
    img2: "/images/metiers/sp2i-prehension/13.webp",
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

function DetailImage({ src, alt }) {
  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mt-3">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function Sp2iPrehension({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              src={IMAGES.equipment.navette}
              alt="Navette transbordeur"
              title="Manutention Navette transbordeur"
            />
            <ImageCard
              src={IMAGES.equipment.convoyeur}
              alt="Convoyeur à rouleau"
              title="Convoyeur à rouleau"
            />
            <ImageCard
              src={IMAGES.equipment.transfert}
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
            {/* Pinces pour bobines horizontales */}
            <ClickableImageCard
              src={IMAGES.levage.bobines}
              alt="Pinces pour bobines horizontales"
              title="Pinces pour bobines horizontales"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pince pour bobines horizontales</p>
                <p><span className="font-medium">Objectif :</span> Lever et transférer des bobines d&apos;acier, d&apos;aluminium, de papier, ou autres corps ronds creux rigides d&apos;axe horizontal</p>
                <div>
                  <p className="font-medium">Prise :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Dans le noyau de la bobine (sabot, éperon)</li>
                    <li>Serrage sur les rives de la bobine</li>
                    <li>Serrage sur le Ø extérieur de la bobine</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Type de matériel :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Pinces Mécaniques</li>
                    <li>Électromécaniques</li>
                    <li>Électrohydrauliques</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Nos pinces standards</p>
                  <p>Nous avons développé trois gammes de pinces pour lesquelles nous avons une série de pièces standards. Ces gammes de pinces nous permettent de proposer des pinces avec un délai de fabrication plus court et une disponibilité des pièces standards que nous gérons en stock. Cette fabrication de pièces en série nous permet de vous proposer des prix attractifs par rapport à une réalisation spécifique. Même si ces pièces sont issues d&apos;une fabrication standard, nous pouvons l&apos;adapter à vos besoins.</p>
                </div>
                <p className="font-medium">Capacité de levage de nos pinces standard : NGH15 : jusque 15T — NGH32 : jusque 32T — NGH50 : jusque 50T</p>
                <div className="grid grid-cols-2 gap-2">
                  <DetailImage src={IMAGES.levageDetail.bobines1} alt="Pince bobines horizontales" />
                  <DetailImage src={IMAGES.levageDetail.bobines2} alt="Pince bobines horizontales" />
                </div>
              </div>
            </ClickableImageCard>

            {/* Pinces pour outillage de presse */}
            <ClickableImageCard
              src={IMAGES.levage.outillage}
              alt="Pinces pour outillage de presse"
              title="Pinces pour outillage de presse"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pince pour outillages de presse</p>
                <p><span className="font-medium">Objectif :</span> Lever et transférer des outillages de presses grâce à 4 bras, munis de sabots spéciaux, mobiles longitudinalement et transversalement.</p>
                <div>
                  <p className="font-medium">Prise de levage :</p>
                  <p className="ml-2">Passage des sabots dans les oreilles de levage prévues sur les outillages de presse</p>
                </div>
                <p><span className="font-medium">Type de matériel :</span> Pinces électromécaniques</p>
                <p><span className="font-medium">Options :</span> De nombreuses options sont possibles selon les besoins et les demandes des clients. Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
                <DetailImage src={IMAGES.levageDetail.outillage1} alt="Pince outillage de presse" />
              </div>
            </ClickableImageCard>

            {/* Pinces pour paquets de tôles */}
            <ClickableImageCard
              src={IMAGES.levage.toles}
              alt="Pinces pour paquets de tôles"
              title="Pinces pour paquets de tôles et produits plats"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pince pour paquets de tôles et de produits plats</p>
                <p><span className="font-medium">Objectif :</span> Manutentionner des paquets de tôles, panneaux, palettes ou autres produits plats pour lesquels des appuis à entraxe important sont nécessaires.</p>
                <p><span className="font-medium">Prise :</span> Par le dessous du paquet</p>
                <div>
                  <p className="font-medium">Type de matériel :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Pinces : Manuelles, Électro-mécaniques, Électrohydrauliques</li>
                    <li>Palonniers : Cés, À fourches, À contrepoids, À rappel par ressort</li>
                  </ul>
                </div>
                <p className="text-xs italic">Dans la mesure du possible, nous essayons d&apos;utiliser les caissons et autres constituants issus de notre gamme de pince à bobines horizontales.</p>
              </div>
            </ClickableImageCard>

            {/* Pince à brames */}
            <ClickableImageCard
              src={IMAGES.levage.brames}
              alt="Pince à brames"
              title="Pince à brames"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pince à brames</p>
                <p><span className="font-medium">Objectif :</span> Lever et transférer des brames en position horizontale ou verticale, unitairement ou plusieurs.</p>
                <p><span className="font-medium">Prise de levage :</span> Par tout type de prise</p>
                <div>
                  <p className="font-medium">Caractéristiques des produits manutentionnés :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Brames ronds, carrés ou rectangulaires</li>
                    <li>Horizontaux, verticaux</li>
                    <li>En acier, aluminium, bronze, zinc...</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Type de matériel : Pinces</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Manuelles</li>
                    <li>Électromécaniques</li>
                    <li>Électrohydrauliques</li>
                    <li>Électropneumatiques</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Fonctions des pinces :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Levage</li>
                    <li>Démoulage</li>
                    <li>Reprise à plat</li>
                    <li>Multifonctions</li>
                  </ul>
                </div>
              </div>
            </ClickableImageCard>

            {/* Pinces charges diverses */}
            <ClickableImageCard
              src={IMAGES.levage.diverses}
              alt="Pinces charges diverses"
              title="Pinces charges diverses"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pour charges diverses</p>
                <p><span className="font-medium">Objectif :</span> Lever et transférer une charge.</p>
                <p><span className="font-medium">Type de matériel :</span> Pinces</p>
                <p>À partir d&apos;un cahier des charges, nous pouvons concevoir et fabriquer tout type d&apos;équipement de levage.</p>
                <p><span className="font-medium">Options :</span> De nombreuses options sont possibles selon les besoins et les demandes des clients. Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
              </div>
            </ClickableImageCard>

            {/* Pince à lingot d'aluminium */}
            <ClickableImageCard
              src={IMAGES.levage.lingot}
              alt="Pince à lingot d'aluminium"
              title="Pince à lingot d'aluminium"
            >
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-gray-900">Pinces à lingot d&apos;aluminium</p>
                <p><span className="font-medium">Objectif :</span> Lever et transférer des lingots en position horizontale ou verticale, unitairement ou plusieurs.</p>
                <p><span className="font-medium">Prise de levage :</span> Par tout type de prise</p>
                <div>
                  <p className="font-medium">Caractéristiques des produits manutentionnés :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Lingots ronds, carrés ou rectangulaires</li>
                    <li>Horizontaux, verticaux</li>
                    <li>En acier, aluminium, bronze, zinc...</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Type de matériel : Pinces</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Manuelles</li>
                    <li>Électromécaniques</li>
                    <li>Électrohydrauliques</li>
                    <li>Électropneumatiques</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Fonctions des pinces :</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Levage</li>
                    <li>Démoulage</li>
                    <li>Reprise à plat</li>
                    <li>Multifonctions</li>
                  </ul>
                </div>
              </div>
            </ClickableImageCard>
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
