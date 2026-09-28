import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

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

const BODY = "text-lg text-muted-foreground leading-relaxed";

function PlaceholderImage({ src, alt, className = "" }) {
  return (
    <div className={`relative aspect-4/3 overflow-hidden bg-foreground/5 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

function ImageCard({ src, alt, title }) {
  return (
    <div className="group">
      <PlaceholderImage src={src} alt={alt} />
      <h3 className="mt-5 text-lg md:text-xl font-semibold transition-colors group-hover:text-aretec">
        {title}
      </h3>
    </div>
  );
}

function Section({ bg = "bg-white", children }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="container mx-auto px-6 md:px-16">{children}</div>
    </section>
  );
}

function ListColumn({ title, items, children }) {
  return (
    <div>
      <h3 className="mb-6 text-lg md:text-xl font-semibold">{title}</h3>
      <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-3">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-aretec" />
            {item}
          </li>
        ))}
      </ul>
      {children && <div className={`mt-8 space-y-4 ${BODY}`}>{children}</div>}
    </div>
  );
}

function LignesProductionAutomatisees() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ListColumn
            title="NOTRE SAVOIR-FAIRE"
            items={[
              "Réalisation de moyens mécaniques (sans électricité ou automatisme)",
              "Construction de machines",
              "Conception et étude d'ensemble « clé en main »",
              "Construction de systèmes de convoyage et de manutention",
              "Construction de ligne de production",
              "Réalisation de prototypes",
            ]}
          >
            <p>
              L&apos;ensemble des compétences d&apos;ARETEC et son organisation structurelle, lui permettent la construction de lignes de production « clé en main » : études, usinage, mécanique, électricité, automatisme (robotique).
            </p>
          </ListColumn>
          <ListColumn
            title="NOTRE CHAMP D'ACTION"
            items={[
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
            ]}
          />
        </div>
      </Section>

      <Section bg="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
          <ImageCard src={IMAGES.grid2x2.row1col1} alt="Ligne fabrication échelle à câble" title="Ligne fabrication échelle à câble" />
          <ImageCard src={IMAGES.grid2x2.row1col2} alt="Ligne fabrication tubes spiralés" title="Ligne fabrication tubes spiralés" />
          <ImageCard src={IMAGES.grid2x2.row2col1} alt="Ligne sérigraphie patte pâtissière" title="Ligne sérigraphie patte pâtissière" />
          <ImageCard src={IMAGES.grid2x2.row2col2} alt="Ligne assemblage de batterie" title="Ligne assemblage de batterie" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlaceholderImage src={IMAGES.production.img1} alt="Ligne de production automatisée" className="border-t-4 border-aretec" />
          <PlaceholderImage src={IMAGES.production.img2} alt="Ligne de production automatisée" className="border-t-4 border-aretec" />
          <PlaceholderImage src={IMAGES.production.img3} alt="Ligne de production automatisée" className="border-t-4 border-aretec" />
        </div>
      </Section>
    </>
  );
}

function MachinesSpeciales() {
  return (
    <Section>
      <p className={`max-w-3xl mb-12 md:mb-16 ${BODY}`}>
        ARETEC conçoit et réalise des machines spéciales sur mesure pour répondre aux besoins spécifiques de ses clients industriels.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12">
        <ImageCard src={IMAGES.machines.decoupe} alt="Découpe de porte" title="Découpe de porte" />
        <ImageCard src={IMAGES.machines.poinconnage} alt="Poinçonnage" title="Poinçonnage" />
        <ImageCard src={IMAGES.machines.tunnel} alt="Tunnel de séchage" title="Tunnel de séchage" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 max-w-3xl mx-auto">
        <ImageCard src={IMAGES.machines.presse} alt="Presse de collage" title="Presse de collage" />
        <ImageCard src={IMAGES.machines.controle} alt="Poste de contrôle éclaireur" title="Poste de contrôle éclaireur" />
      </div>
    </Section>
  );
}

function Robotique() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          <ListColumn
            title="NOTRE SAVOIR-FAIRE"
            items={[
              "Intégration sur lignes existantes",
              "Création d'îlots complets",
              "Remplacement de robots obsolètes",
            ]}
          >
            <p>
              <span className="font-semibold text-foreground">Optimisation de trajectoires :</span> Collage, Soudure laser, Manutention / assemblage
            </p>
            <p>
              <span className="font-semibold text-foreground">Cobotique :</span> ARETEC possède les normes liées à la robotique collaborative et notre personnel a suivi la formation liée au niveau de sécurité élevé lié à cette technologie.
            </p>
            <p>
              Nos roboticiens sont certifiés par les fabricants de robots (applicatifs métiers spécifiques, vision, fonction de sécurité, Profisafe, robots collaboratifs...)
            </p>
          </ListColumn>
          <ListColumn
            title="NOTRE CHAMP D'ACTION"
            items={[
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
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <ImageCard src={IMAGES.robotique.fabrication} alt="Ligne de fabrication" title="Ligne de fabrication" />
          <ImageCard src={IMAGES.robotique.vision} alt="Vision" title="Vision" />
          <ImageCard src={IMAGES.robotique.clippage} alt="Clippage" title="Clippage" />
        </div>
      </Section>

      <Section bg="bg-background">
        <SectionHeader title="Robots collaboratifs" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlaceholderImage src={IMAGES.cobots.img1} alt="Robot collaboratif 1" className="border-t-4 border-aretec" />
          <PlaceholderImage src={IMAGES.cobots.img2} alt="Robot collaboratif 2" className="border-t-4 border-aretec" />
          <PlaceholderImage src={IMAGES.cobots.img3} alt="Robot collaboratif 3" className="border-t-4 border-aretec" />
        </div>
      </Section>
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
