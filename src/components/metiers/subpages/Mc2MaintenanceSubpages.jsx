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

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function VisArchimede() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              MC2 installe et effectue le lignage des vis d&apos;Archimède en une ou plusieurs parties. Nous effectuons le démontage pour réparation, rechargement ou modification de l&apos;installation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Qu&apos;il s&apos;agisse de vis dans l&apos;agroalimentaire ou dans les industries chimiques, de petites vis ou d&apos;installations importantes, MC2 a plusieurs années d&apos;expérience dans ce type de prestation.
            </p>
          </div>
          <PlaceholderImage src={IMAGES.visArchimede} alt="Vis d'Archimède" />
        </div>
      </div>
    </section>
  );
}

function ConvoyeurABande() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Fort de ses 20 années d&apos;expérience en industrie agroalimentaire, MC2 INDUSTRIE a acquis un savoir-faire particulier dans la conception, fabrication et installation de convoyeurs à bande.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous proposons une prestation de conception et étude du projet avec vos éléments (matière transportée, débit attendu, implantation, etc…).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ensuite nous pouvons intégrer diverses options (stations de pesage, capots, détecteurs de particules, goulottes d&apos;alimentation ou de jetée, etc…) à votre installation. MC2 assure également le déménagement et la réimplantation de convoyeurs existants.
            </p>
          </div>
          <PlaceholderImage src={IMAGES.convoyeurBande} alt="Convoyeur à bande" />
        </div>
        <PlaceholderImage src={IMAGES.convoyeurBande2} alt="Convoyeur à bande - vue détaillée" aspectRatio="aspect-[21/9]" />
      </div>
    </section>
  );
}

function CharpenteStructureMetallique() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage src={IMAGES.charpenteMetallique} alt="Charpente et structure métallique" />
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Depuis ses débuts, MC2 conçoit et construit des charpentes métalliques. Notre bureau d&apos;études et nos dessinateurs sont capables de développer un projet qui s&apos;inscrit dans votre installation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous modélisons en 3D vos bâtiments existants pour y adapter tout type d&apos;extension fabriqué sur mesure dans notre atelier. En collaboration avec des organismes certificateurs, nous fournissons une installation certifiée par une note de calcul.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlaceholderImage src={IMAGES.charpente2} alt="Charpente métallique" />
          <PlaceholderImage src={IMAGES.charpente3} alt="Structure métallique" />
        </div>
      </div>
    </section>
  );
}

function ThermoEjecteur() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Les thermo-éjecteurs utilisent l&apos;énergie cinétique de la vapeur à haute pression pour comprimer une vapeur à basse pression. Ce procédé transforme une énergie autrefois considérée comme perdue en une ressource précieuse.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Développés il y a plus de 30 ans par Monsieur Claude Chacoux et la société MC2, ces équipements ont été spécialement conçus pour optimiser les performances des unités de production de sucre et d&apos;éthanol.
            </p>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Spécifications techniques</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Technologie éprouvée : Plus de 30 ans d&apos;excellence</li>
                <li>Conformité aux normes européennes (97/23/CE)</li>
                <li>Fiabilité optimale : Conception sans pièce mobile</li>
                <li>Solutions personnalisées sur mesure</li>
                <li>Entretien simplifié : Démontage partiel possible</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Avantages clés</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Compatible avec une large gamme de flux et de pressions</li>
                <li>Intégration aisée aux installations existantes</li>
                <li>Aucune consommation supplémentaire d&apos;énergie</li>
                <li>Conception durable nécessitant peu de maintenance</li>
                <li>Réduction de plus de 30 % de la consommation de vapeur</li>
              </ul>
            </div>
          </div>
          <PlaceholderImage src={IMAGES.thermoEjecteur} alt="Thermo-éjecteur" />
        </div>
        <PlaceholderImage src={IMAGES.thermoEjecteur2} alt="Thermo-éjecteur détail" aspectRatio="aspect-[21/9]" />
      </div>
    </section>
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
