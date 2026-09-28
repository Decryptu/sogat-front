import Image from "next/image";

const IMAGES = {
  visArchimede: "/images/metiers/mc2-maintenance/1.webp",
  convoyeurBande: "/images/metiers/mc2-maintenance/4.webp",
  convoyeurBande2: "/images/metiers/mc2-maintenance/10.webp",
  charpenteMetallique: "/images/metiers/mc2-maintenance/5.webp",
  charpente2: "/images/metiers/mc2-maintenance/6.webp",
  charpente3: "/images/metiers/mc2-maintenance/7.webp",
  thermoEjecteur: "/images/metiers/mc2-maintenance/8.webp",
  thermoEjecteur2: "/images/metiers/mc2-maintenance/9.webp",
};

const BODY = "text-lg text-muted-foreground leading-relaxed";

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-4/3" }) {
  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-foreground/5 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function Section({ children }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-16">{children}</div>
    </section>
  );
}

function Lead({ children }) {
  return <p className="text-xl md:text-2xl font-medium leading-relaxed">{children}</p>;
}

function BulletList({ title, items }) {
  return (
    <div>
      <h3 className="mb-4 text-lg md:text-xl font-semibold">{title}</h3>
      <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-3 text-muted-foreground">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-mc2-maintenance" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VisArchimede() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-6">
          <Lead>
            MC2 installe et effectue le lignage des vis d&apos;Archimède en une ou plusieurs parties. Nous effectuons le démontage pour réparation, rechargement ou modification de l&apos;installation.
          </Lead>
          <p className={BODY}>
            Qu&apos;il s&apos;agisse de vis dans l&apos;agroalimentaire ou dans les industries chimiques, de petites vis ou d&apos;installations importantes, MC2 a plusieurs années d&apos;expérience dans ce type de prestation.
          </p>
        </div>
        <PlaceholderImage src={IMAGES.visArchimede} alt="Vis d'Archimède" className="border-t-4 border-mc2-maintenance" />
      </div>
    </Section>
  );
}

function ConvoyeurABande() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
        <div className="space-y-6">
          <Lead>
            Fort de ses 20 années d&apos;expérience en industrie agroalimentaire, MC2 INDUSTRIE a acquis un savoir-faire particulier dans la conception, fabrication et installation de convoyeurs à bande.
          </Lead>
          <p className={BODY}>
            Nous proposons une prestation de conception et étude du projet avec vos éléments (matière transportée, débit attendu, implantation, etc…).
          </p>
          <p className={BODY}>
            Ensuite nous pouvons intégrer diverses options (stations de pesage, capots, détecteurs de particules, goulottes d&apos;alimentation ou de jetée, etc…) à votre installation. MC2 assure également le déménagement et la réimplantation de convoyeurs existants.
          </p>
        </div>
        <PlaceholderImage src={IMAGES.convoyeurBande} alt="Convoyeur à bande" className="border-t-4 border-mc2-maintenance" />
      </div>
      <PlaceholderImage src={IMAGES.convoyeurBande2} alt="Convoyeur à bande - vue détaillée" aspectRatio="aspect-21/9" />
    </Section>
  );
}

function CharpenteStructureMetallique() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
        <PlaceholderImage src={IMAGES.charpenteMetallique} alt="Charpente et structure métallique" className="border-t-4 border-mc2-maintenance" />
        <div className="space-y-6">
          <Lead>
            Depuis ses débuts, MC2 conçoit et construit des charpentes métalliques. Notre bureau d&apos;études et nos dessinateurs sont capables de développer un projet qui s&apos;inscrit dans votre installation.
          </Lead>
          <p className={BODY}>
            Nous modélisons en 3D vos bâtiments existants pour y adapter tout type d&apos;extension fabriqué sur mesure dans notre atelier. En collaboration avec des organismes certificateurs, nous fournissons une installation certifiée par une note de calcul.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlaceholderImage src={IMAGES.charpente2} alt="Charpente métallique" />
        <PlaceholderImage src={IMAGES.charpente3} alt="Structure métallique" />
      </div>
    </Section>
  );
}

function ThermoEjecteur() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-12 md:mb-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <Lead>
              Les thermo-éjecteurs utilisent l&apos;énergie cinétique de la vapeur à haute pression pour comprimer une vapeur à basse pression. Ce procédé transforme une énergie autrefois considérée comme perdue en une ressource précieuse.
            </Lead>
            <p className={BODY}>
              Développés il y a plus de 30 ans par Monsieur Claude Chacoux et la société MC2, ces équipements ont été spécialement conçus pour optimiser les performances des unités de production de sucre et d&apos;éthanol.
            </p>
          </div>

          <BulletList
            title="Spécifications techniques"
            items={[
              "Technologie éprouvée : Plus de 30 ans d'excellence",
              "Conformité aux normes européennes (97/23/CE)",
              "Fiabilité optimale : Conception sans pièce mobile",
              "Solutions personnalisées sur mesure",
              "Entretien simplifié : Démontage partiel possible",
            ]}
          />

          <BulletList
            title="Avantages clés"
            items={[
              "Compatible avec une large gamme de flux et de pressions",
              "Intégration aisée aux installations existantes",
              "Aucune consommation supplémentaire d'énergie",
              "Conception durable nécessitant peu de maintenance",
              "Réduction de plus de 30 % de la consommation de vapeur",
            ]}
          />
        </div>
        <PlaceholderImage src={IMAGES.thermoEjecteur} alt="Thermo-éjecteur" className="border-t-4 border-mc2-maintenance" />
      </div>
      <PlaceholderImage src={IMAGES.thermoEjecteur2} alt="Thermo-éjecteur détail" aspectRatio="aspect-21/9" />
    </Section>
  );
}

const SUBPAGE_COMPONENTS = {
  "vis-archimede": VisArchimede,
  "convoyeur-a-bande": ConvoyeurABande,
  "charpente-structure-metallique": CharpenteStructureMetallique,
  "thermo-ejecteur": ThermoEjecteur,
};

export default function Mc2MaintenanceSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
