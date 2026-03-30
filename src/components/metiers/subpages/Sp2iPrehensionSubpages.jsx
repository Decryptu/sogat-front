import Image from "next/image";

const IMAGES = {
  levage: {
    bobines: "/images/metiers/sp2i-prehension/6.webp",
    outillage: "/images/metiers/sp2i-prehension/7.webp",
    toles: "/images/metiers/sp2i-prehension/8.webp",
    brames: "/images/metiers/sp2i-prehension/9.webp",
    diverses: "/images/metiers/sp2i-prehension/10.webp",
    lingot: "/images/metiers/sp2i-prehension/11.webp",
  },
  levageDetail: {
    bobines1: "/images/metiers/sp2i-prehension/15.webp",
    bobines2: "/images/metiers/sp2i-prehension/16.webp",
    outillage1: "/images/metiers/sp2i-prehension/17.webp",
  },
  convoyeur: {
    img1: "/images/metiers/sp2i-prehension/12.webp",
    img2: "/images/metiers/sp2i-prehension/13.webp",
  },
  transfert: {
    main: "/images/metiers/sp2i-prehension/14.webp",
  },
  navette: {
    main: "/images/metiers/sp2i-prehension/3.webp",
  },
};

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
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

function LevageItem({ image, alt, title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

function OutilsDeLevage() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg text-gray-600 mb-12">
          SP2I conçoit et fabrique des pinces de préhension et outils de levage sur mesure pour la manutention de charges lourdes dans l&apos;industrie sidérurgique, métallurgique et manufacturière.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LevageItem image={IMAGES.levage.bobines} alt="Pinces pour bobines horizontales" title="Pinces pour bobines horizontales">
            <p><span className="font-medium">Objectif :</span> Lever et transférer des bobines d&apos;acier, d&apos;aluminium, de papier, ou autres corps ronds creux rigides d&apos;axe horizontal</p>
            <div>
              <p className="font-medium">Prise :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Dans le noyau de la bobine (sabot, éperon)</li>
                <li>Serrage sur les rives de la bobine</li>
                <li>Serrage sur le Ø extérieur de la bobine</li>
              </ul>
            </div>
            <p className="font-medium">Capacité de levage : NGH15 (15T) — NGH32 (32T) — NGH50 (50T)</p>
            <div className="grid grid-cols-2 gap-2">
              <DetailImage src={IMAGES.levageDetail.bobines1} alt="Pince bobines horizontales" />
              <DetailImage src={IMAGES.levageDetail.bobines2} alt="Pince bobines horizontales" />
            </div>
          </LevageItem>

          <LevageItem image={IMAGES.levage.outillage} alt="Pinces pour outillage de presse" title="Pinces pour outillage de presse">
            <p><span className="font-medium">Objectif :</span> Lever et transférer des outillages de presses grâce à 4 bras, munis de sabots spéciaux, mobiles longitudinalement et transversalement.</p>
            <p><span className="font-medium">Type de matériel :</span> Pinces électromécaniques</p>
            <p><span className="font-medium">Options :</span> Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
            <DetailImage src={IMAGES.levageDetail.outillage1} alt="Pince outillage de presse" />
          </LevageItem>

          <LevageItem image={IMAGES.levage.toles} alt="Pinces pour paquets de tôles" title="Pinces pour paquets de tôles et produits plats">
            <p><span className="font-medium">Objectif :</span> Manutentionner des paquets de tôles, panneaux, palettes ou autres produits plats.</p>
            <p><span className="font-medium">Prise :</span> Par le dessous du paquet</p>
            <div>
              <p className="font-medium">Type de matériel :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Pinces : Manuelles, Électro-mécaniques, Électrohydrauliques</li>
                <li>Palonniers : Cés, À fourches, À contrepoids, À rappel par ressort</li>
              </ul>
            </div>
          </LevageItem>

          <LevageItem image={IMAGES.levage.brames} alt="Pince à brames" title="Pince à brames">
            <p><span className="font-medium">Objectif :</span> Lever et transférer des brames en position horizontale ou verticale, unitairement ou plusieurs.</p>
            <div>
              <p className="font-medium">Caractéristiques :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Brames ronds, carrés ou rectangulaires</li>
                <li>En acier, aluminium, bronze, zinc...</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Fonctions :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Levage, Démoulage, Reprise à plat, Multifonctions</li>
              </ul>
            </div>
          </LevageItem>

          <LevageItem image={IMAGES.levage.diverses} alt="Pinces charges diverses" title="Pinces charges diverses">
            <p><span className="font-medium">Objectif :</span> Lever et transférer une charge.</p>
            <p>À partir d&apos;un cahier des charges, nous pouvons concevoir et fabriquer tout type d&apos;équipement de levage.</p>
            <p><span className="font-medium">Options :</span> Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
          </LevageItem>

          <LevageItem image={IMAGES.levage.lingot} alt="Pince à lingot d'aluminium" title="Pince à lingot d'aluminium">
            <p><span className="font-medium">Objectif :</span> Lever et transférer des lingots en position horizontale ou verticale, unitairement ou plusieurs.</p>
            <div>
              <p className="font-medium">Caractéristiques :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Lingots ronds, carrés ou rectangulaires</li>
                <li>En acier, aluminium, bronze, zinc...</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Fonctions :</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Levage, Démoulage, Reprise à plat, Multifonctions</li>
              </ul>
            </div>
          </LevageItem>
        </div>
      </div>
    </section>
  );
}

function ConvoyeurARouleau() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl text-sp2i-prehension font-semibold mb-12">
          Convoyeurs à rouleaux, à chaînes et à bandes
        </p>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage src={IMAGES.convoyeur.img1} alt="Convoyeurs à rouleaux" />
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Les convoyeurs permettent de transférer des charges unitaires, en paquets ou en vrac d&apos;une position vers une autre ou vers de multiples positions.
              </p>
              <ul className="space-y-2 pt-4">
                {["Convoyeurs à rouleaux", "Convoyeurs à chaînes", "Convoyeurs à bandes", "Convoyeurs à écailles"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-sp2i-prehension rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            <PlaceholderImage src={IMAGES.convoyeur.img2} alt="Transfert à chaînes intégré" className="lg:order-first" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LigneDeTransfert() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <PlaceholderImage src={IMAGES.transfert.main} alt="Ligne de transfert et de manutention" />
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Nos lignes assurent le transfert ou la manutention de charges unitaires ou en paquets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour ces lignes, nous intégrons :
            </p>
            <ul className="space-y-3">
              {["Convoyeurs à chaînes de manutention", "Refroidissoirs", "Tournes tubes", "Décalamineuses"].map((item, index) => (
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
  );
}

function NavetteTransbordeur() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              La navette transbordeur est un système de manutention automatisé permettant le déplacement de charges lourdes entre différentes lignes de production ou postes de travail.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se déplaçant sur rails, elle assure le transfert transversal de produits tels que bobines, lingots, ou palettes entre les différentes zones d&apos;un atelier industriel.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
              <ul className="space-y-2">
                {[
                  "Déplacement sur rails motorisé",
                  "Capacité de charge adaptée au besoin",
                  "Intégration dans les lignes de production existantes",
                  "Pilotage automatisé ou semi-automatisé",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-sp2i-prehension rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PlaceholderImage src={IMAGES.navette.main} alt="Navette transbordeur" />
        </div>
      </div>
    </section>
  );
}

const SUBPAGE_COMPONENTS = {
  "outils-de-levage": OutilsDeLevage,
  "convoyeur-a-rouleau": ConvoyeurARouleau,
  "ligne-de-transfert": LigneDeTransfert,
  "navette-transbordeur": NavetteTransbordeur,
};

export default function Sp2iPrehensionSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
