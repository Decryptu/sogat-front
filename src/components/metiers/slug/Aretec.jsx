import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  equipment: {
    col1: "/images/metiers/aretec/1.webp",
    col2: "/images/metiers/aretec/2.webp",
    col3: "/images/metiers/aretec/3.webp",
  },
};

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
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              NOS équipements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SubpageCard
              href="/metiers/aretec/lignes-production-automatisees"
              src={IMAGES.equipment.col1}
              alt="Lignes de production automatisées"
              title="LIGNES DE PRODUCTION AUTOMATISÉES"
            />
            <SubpageCard
              href="/metiers/aretec/machines-speciales"
              src={IMAGES.equipment.col2}
              alt="Machines spéciales"
              title="MACHINES SPÉCIALES"
            />
            <SubpageCard
              href="/metiers/aretec/robotique"
              src={IMAGES.equipment.col3}
              alt="Robotique"
              title="ROBOTIQUE"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
