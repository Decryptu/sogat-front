import Image from "next/image";
import ClickableImageCard from "./ClickableImageCard";

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

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {children}
      </h2>
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

export default function Mc2Maintenance({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            {locale === "fr" ? "Nos équipements" : "Our equipment"}
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vis d'Archimède */}
            <ClickableImageCard
              src={IMAGES.visArchimede}
              alt="Vis d'Archimède"
              title={locale === "fr" ? "Vis d'Archimède" : "Archimedes screw"}
            >
              <div className="space-y-3 mt-2">
                <p>
                  MC2 installe et effectue le lignage des vis d&apos;Archimède en une ou plusieurs parties. Nous effectuons le démontage pour réparation, rechargement ou modification de l&apos;installation. Qu&apos;il s&apos;agisse de vis dans l&apos;agroalimentaire ou dans les industries chimiques, de petites vis ou d&apos;installations importantes, MC2 a plusieurs années d&apos;expérience dans ce type de prestation.
                </p>
              </div>
            </ClickableImageCard>

            {/* Convoyeur à bande */}
            <ClickableImageCard
              src={IMAGES.convoyeurBande}
              alt="Convoyeur à bande"
              title={locale === "fr" ? "Convoyeur à bande" : "Belt conveyor"}
            >
              <div className="space-y-3 mt-2">
                <p>
                  Fort de ses 20 années d&apos;expérience en industrie agroalimentaire, MC2 INDUSTRIE a acquis un savoir-faire particulier dans la conception, fabrication et installation de convoyeurs à bande. Nous proposons une prestation de conception et étude du projet avec vos éléments (matière transportée, débit attendu, implantation, etc…).
                </p>
                <p>
                  Ensuite nous pouvons intégrer diverses options (stations de pesage, capots, détecteurs de particules, goulottes d&apos;alimentation ou de jetée, etc…) à votre installation. MC2 assure également le déménagement et la réimplantation de convoyeurs existants.
                </p>
                <DetailImage src={IMAGES.convoyeurBande2} alt="Convoyeur à bande" />
              </div>
            </ClickableImageCard>

            {/* Charpente et structure métallique */}
            <ClickableImageCard
              src={IMAGES.charpenteMetallique}
              alt="Charpente et structure métallique"
              title={locale === "fr" ? "Charpente et structure métallique" : "Steel frame and structure"}
            >
              <div className="space-y-3 mt-2">
                <p>
                  Depuis ses débuts, MC2 conçoit et construit des charpentes métalliques. Notre bureau d&apos;études et nos dessinateurs sont capables de développer un projet qui s&apos;inscrit dans votre installation. Nous modélisons en 3D vos bâtiments existants pour y adapter tout type d&apos;extension fabriqué sur mesure dans notre atelier. En collaboration avec des organismes certificateurs, nous fournissons une installation certifiée par une note de calcul.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <DetailImage src={IMAGES.charpente2} alt="Charpente métallique" />
                  <DetailImage src={IMAGES.charpente3} alt="Structure métallique" />
                </div>
              </div>
            </ClickableImageCard>

            {/* Thermo-éjecteur */}
            <ClickableImageCard
              src={IMAGES.thermoEjecteur}
              alt="Thermo-éjecteur"
              title={locale === "fr" ? "Thermo-éjecteur" : "Thermo-ejector"}
            >
              <div className="space-y-3 mt-2">
                <p>
                  Les thermo-éjecteurs utilisent l&apos;énergie cinétique de la vapeur à haute pression pour comprimer une vapeur à basse pression. Ce procédé transforme une énergie autrefois considérée comme perdue en une ressource précieuse, contribuant ainsi à une amélioration significative de l&apos;efficacité énergétique globale.
                </p>
                <p>
                  Développés il y a plus de 30 ans par Monsieur Claude Chacoux et la société MC2, ces équipements ont été spécialement conçus pour optimiser les performances des unités de production de sucre et d&apos;éthanol. Cette technologie éprouvée se distingue par sa fiabilité et son apport concret à la transition énergétique des industries.
                </p>
                <div>
                  <p className="font-semibold text-gray-900 mt-3 mb-2">Spécifications techniques</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technologie éprouvée : Plus de 30 ans d&apos;excellence et de résultats concrets</li>
                    <li>Conformité aux normes européennes : Respect intégral de la Directive sur les équipements sous pression (97/23/CE)</li>
                    <li>Fiabilité optimale : Conception sans pièce mobile pour une maintenance réduite et simplifiée</li>
                    <li>Solutions personnalisées : Conception sur mesure adaptée à vos exigences spécifiques</li>
                    <li>Entretien simplifié : Démontage partiel possible pour faciliter les contrôles réguliers</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mt-3 mb-2">Avantages clés</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Adaptabilité exceptionnelle : Compatible avec une large gamme de flux et de niveaux de pression</li>
                    <li>Intégration aisée : S&apos;intègre facilement aux installations existantes ou aux nouveaux projets</li>
                    <li>Efficacité énergétique optimale : Aucune consommation supplémentaire d&apos;énergie</li>
                    <li>Robustesse et sécurité : Conception durable nécessitant peu de maintenance</li>
                    <li>Optimisation des ressources : Réduction de plus de 30 % de la consommation de vapeur d&apos;entraînement</li>
                  </ul>
                </div>
                <DetailImage src={IMAGES.thermoEjecteur2} alt="Thermo-éjecteur détail" />
              </div>
            </ClickableImageCard>
          </div>
        </div>
      </section>
    </div>
  );
}
