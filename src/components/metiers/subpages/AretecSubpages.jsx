import Image from "next/image";

const IMAGES = {
  grid2x2: {
    row1col1: "/images/metiers/aretec/4.webp",
    row1col2: "/images/metiers/aretec/5.webp",
    row2col1: "/images/metiers/aretec/6.webp",
    row2col2: "/images/metiers/aretec/7.webp",
  },
  production: {
    img1: "/images/metiers/aretec/19.webp",
    img2: "/images/metiers/aretec/20.webp",
    img3: "/images/metiers/aretec/21.webp",
  },
  machines: {
    decoupe: "/images/metiers/aretec/8.webp",
    poinconnage: "/images/metiers/aretec/9.webp",
    tunnel: "/images/metiers/aretec/10.webp",
    presse: "/images/metiers/aretec/11.webp",
    controle: "/images/metiers/aretec/12.webp",
  },
  robotique: {
    fabrication: "/images/metiers/aretec/13.webp",
    vision: "/images/metiers/aretec/14.webp",
    clippage: "/images/metiers/aretec/15.webp",
  },
  cobots: {
    img1: "/images/metiers/aretec/16.webp",
    img2: "/images/metiers/aretec/17.webp",
    img3: "/images/metiers/aretec/18.webp",
  },
};

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function ImageCard({ src, alt, title }) {
  return (
    <div className="group">
      <PlaceholderImage src={src} alt={alt} />
      {title && <h3 className="text-lg font-semibold text-gray-900 mt-4">{title}</h3>}
    </div>
  );
}

function OverlayCard({ src, alt, title }) {
  return (
    <div className="group">
      <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
        <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}

function LignesProductionAutomatisees() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
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
                  "Calcul du PL et du SIL par logiciel agréé",
                  "AMDEC",
                  "Études des contraintes ergonomiques",
                  "Études mécaniques en CAO (Catia V5)",
                  "Études électriques, automatismes, robotiques",
                  "Fabrication et étude d'ensemble « clé en main »",
                  "Assemblage mécanique",
                  "Câblage armoire, pupitre et machine",
                  "Mise au point en atelier et sur site client",
                  "Installation et mise en service sur site",
                  "Formation du personnel",
                  "Contrats de maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-aretec rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ImageCard src={IMAGES.grid2x2.row1col1} alt="Ligne fabrication échelle à câble" title="Ligne fabrication échelle à câble" />
            <ImageCard src={IMAGES.grid2x2.row1col2} alt="Ligne fabrication tubes spiralés" title="Ligne fabrication tubes spiralés" />
            <ImageCard src={IMAGES.grid2x2.row2col1} alt="Ligne sérigraphie patte pâtissière" title="Ligne sérigraphie patte pâtissière" />
            <ImageCard src={IMAGES.grid2x2.row2col2} alt="Ligne assemblage de batterie" title="Ligne assemblage de batterie" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlaceholderImage src={IMAGES.production.img1} alt="Ligne de production automatisée" />
            <PlaceholderImage src={IMAGES.production.img2} alt="Ligne de production automatisée" />
            <PlaceholderImage src={IMAGES.production.img3} alt="Ligne de production automatisée" />
          </div>
        </div>
      </section>
    </>
  );
}

function MachinesSpeciales() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg text-gray-600 mb-12">
          ARETEC conçoit et réalise des machines spéciales sur mesure pour répondre aux besoins spécifiques de ses clients industriels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <OverlayCard src={IMAGES.machines.decoupe} alt="Découpe de porte" title="Découpe de porte" />
          <OverlayCard src={IMAGES.machines.poinconnage} alt="Poinçonnage" title="Poinçonnage" />
          <OverlayCard src={IMAGES.machines.tunnel} alt="Tunnel de séchage" title="Tunnel de séchage" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <OverlayCard src={IMAGES.machines.presse} alt="Presse de collage" title="Presse de collage" />
          <OverlayCard src={IMAGES.machines.controle} alt="Poste de contrôle éclaireur" title="Poste de contrôle éclaireur" />
        </div>
      </div>
    </section>
  );
}

function Robotique() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
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
                Nos roboticiens sont certifiés par les fabricants de robots (applicatifs métiers spécifiques, vision, fonction de sécurité, Profisafe, robots collaboratifs...)
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <OverlayCard src={IMAGES.robotique.fabrication} alt="Ligne de fabrication" title="Ligne de fabrication" />
            <OverlayCard src={IMAGES.robotique.vision} alt="Vision" title="Vision" />
            <OverlayCard src={IMAGES.robotique.clippage} alt="Clippage" title="Clippage" />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-aretec rounded-full" />
              <h3 className="text-2xl font-bold text-gray-900">Robots collaboratifs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlaceholderImage src={IMAGES.cobots.img1} alt="Robot collaboratif 1" />
              <PlaceholderImage src={IMAGES.cobots.img2} alt="Robot collaboratif 2" />
              <PlaceholderImage src={IMAGES.cobots.img3} alt="Robot collaboratif 3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SUBPAGE_COMPONENTS = {
  "lignes-production-automatisees": LignesProductionAutomatisees,
  "machines-speciales": MachinesSpeciales,
  "robotique": Robotique,
};

export default function AretecSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
