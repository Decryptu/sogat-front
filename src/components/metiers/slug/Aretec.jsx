import SubpageCard from "@/components/metiers/SubpageCard";
import SectionHeader from "@/components/ui/SectionHeader";

const IMAGES = {
  equipment: {
    col1: "/images/metiers/aretec/1.webp",
    col2: "/images/metiers/aretec/2.webp",
    col3: "/images/metiers/aretec/3.webp",
  },
};

const SAVOIR_FAIRE = [
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
];

const CHAMP_ACTION = [
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
];

function ListBlock({ title, items }) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-aretec">
        {title}
      </h3>
      <ul className="border-t border-foreground/10 divide-y divide-foreground/10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-4 text-muted-foreground">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-aretec" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Aretec() {
  return (
    <div className="w-full">
      {/* ===== SECTION: Introduction text ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              ARETEC possède, sur le même site, un ensemble des ressources expertes en mécanique, usinage, électricité et automatisme. Nos moyens en hommes et machines permettent de garantir un niveau de qualité élevé, une forte réactivité et une grande flexibilité.
            </p>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Nous sommes familiarisés à l&apos;intégration des préconisations et des normes spécifiques notamment des acteurs de l&apos;industrie automobile.
            </p>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Force de propositions techniques, nous apportons également des solutions alternatives créatives tout en intégrant les critères de fiabilité, de taux de production et de facilité de maintenance.
            </p>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ListBlock title="NOTRE SAVOIR-FAIRE" items={SAVOIR_FAIRE} />
            <ListBlock title="NOTRE CHAMP D'ACTION" items={CHAMP_ACTION} />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Nos équipements ===== */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <SectionHeader title="NOS équipements" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
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
