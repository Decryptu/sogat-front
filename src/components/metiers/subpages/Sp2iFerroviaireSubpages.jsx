import Image from "next/image";

const IMAGES = {
  catenaire: {
    side: "/images/metiers/sp2i-ferroviaire/8.webp",
    collage: [
      "/images/metiers/sp2i-ferroviaire/16.webp",
      "/images/metiers/sp2i-ferroviaire/17.webp",
      "/images/metiers/sp2i-ferroviaire/18.webp",
    ],
  },
  passerelle: {
    side: "/images/metiers/sp2i-ferroviaire/10.webp",
    collage: [
      "/images/metiers/sp2i-ferroviaire/19.webp",
      "/images/metiers/sp2i-ferroviaire/20.webp",
      "/images/metiers/sp2i-ferroviaire/21.webp",
    ],
  },
  pemp: {
    main: "/images/metiers/sp2i-ferroviaire/12.webp",
  },
  automate: {
    main: "/images/metiers/sp2i-ferroviaire/13.webp",
    img2: "/images/metiers/sp2i-ferroviaire/14.webp",
    img3: "/images/metiers/sp2i-ferroviaire/15.webp",
  },
  portique: {
    main: "/images/metiers/sp2i-ferroviaire/4.webp",
  },
  grue: {
    main: "/images/metiers/sp2i-ferroviaire/7.webp",
  },
};

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function DiagonalCollage({ images, alt }) {
  const gap = 1.2;
  const skew = 3;
  const cut1 = 33.33;
  const cut2 = 66.66;

  const clips = [
    `polygon(0% 0%, ${cut1 + skew - gap / 2}% 0%, ${cut1 - skew - gap / 2}% 100%, 0% 100%)`,
    `polygon(${cut1 + skew + gap / 2}% 0%, ${cut2 + skew - gap / 2}% 0%, ${cut2 - skew - gap / 2}% 100%, ${cut1 - skew + gap / 2}% 100%)`,
    `polygon(${cut2 + skew + gap / 2}% 0%, 100% 0%, 100% 100%, ${cut2 - skew + gap / 2}% 100%)`,
  ];

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
          {images.map((src, i) => (
            <div key={i} className="absolute inset-0" style={{ clipPath: clips[i] }}>
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover object-center" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CatenaireEscamotable() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Le système de caténaire rigide escamotable a été conçu spécialement pour les centres de maintenance du matériel ferroviaire roulant pour permettre l&apos;électrification des voies internes de l&apos;atelier tout en conservant les possibilités d&apos;utilisation des ponts roulants et d&apos;autres installations aériennes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour faciliter les opérations d&apos;entretien des rames « en toiture », la caténaire escamotable doit permettre :
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">En position « captage » :</h4>
                  <p className="text-gray-700 leading-relaxed">
                    L&apos;amenée et le repli des rames par traction électrique à l&apos;intérieur du bâtiment, les essais des moteurs de traction, les essais des pantographes, les opérations nécessitant la présence d&apos;une ligne de contact sous tension électrique.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">En position « escamotée » :</h4>
                  <p className="text-gray-700 leading-relaxed">
                    L&apos;intervention par dessus les rames, en tout point, au moyen de nacelles élévatrices ou de ponts roulants mobiles sur toute la longueur des ateliers, … des interventions spécifiques telles que le tarage du pantographe, l&apos;élévation des rames via les systèmes de levage pour les interventions sous-caisse…
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <span className="w-12 h-1 bg-sp2i-feroviaire rounded-full" />
                <span className="text-sp2i-feroviaire font-medium">Solution brevetée SP2I</span>
              </div>
            </div>
            <PlaceholderImage src={IMAGES.catenaire.side} alt="Caténaire escamotable" />
          </div>
          <DiagonalCollage images={IMAGES.catenaire.collage} alt="Caténaire escamotable" />
        </div>
      </section>
    </>
  );
}

function PasserelleAccesToiture() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <PlaceholderImage src={IMAGES.passerelle.side} alt="Passerelle d'accès toiture" />
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              SP2I est spécialisé dans la conception et fabrication de passerelle complète, c&apos;est-à-dire de l&apos;ossature, de garde-corps, d&apos;échelles et d&apos;escaliers. Que ce soit des produits fabriqués à partir de plans et devis établis ou d&apos;une conception, la qualité du produit répond aux normes standards de l&apos;industrie.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Notre connaissance du milieu ferroviaire, nous permet de maîtriser les contraintes du matériel roulant tel que les gabarits de passage, hauteur de travail en toiture, les caméras de rame…
            </p>
            <p className="text-gray-700 leading-relaxed">
              Par ailleurs, nous proposons des solutions efficaces pour l&apos;accès sécurisé aux trains. En effet, nous pouvons intégrer à la passerelle notre système de « compensateur de lacune » qui permet de combler le vide entre la passerelle fixe et différents gabarits empêchant la chute des opérateurs de maintenance mais aussi de leurs outils.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le plancher mobile permet de combler la lacune entre le gabarit théorique des différents matériels roulants et celui de l&apos;engin réel immobile à visiter. Il permet d&apos;occuper le vide entre les passerelles d&apos;accès toiture et les différents gabarits de train.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Les compensateurs permettent :</h4>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-medium">En position reculée :</span> l&apos;amenée ou le repli de la rame. Des capteurs de position valident la position.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-medium">En position déployée :</span> le comblement de l&apos;espace entre la passerelle et la rame en venant en butée contre la caisse du matériel roulant, permettant le passage des opérateurs en toiture en toute sécurité.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DiagonalCollage images={IMAGES.passerelle.collage} alt="Passerelle d'accès toiture" />
      </div>
    </section>
  );
}

function PortiqueMobile() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Le portique mobile d&apos;accès toiture est conçu pour faciliter les opérations de maintenance sur le toit des rames ferroviaires. Monté sur rails, il se déplace le long des voies d&apos;atelier et offre un accès sécurisé en hauteur aux opérateurs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Équipé de plateformes réglables en hauteur et de garde-corps conformes aux normes de sécurité, le portique permet d&apos;intervenir sur tous les types de matériel roulant, quels que soient leur gabarit et leur longueur.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
              <ul className="space-y-2">
                {[
                  "Déplacement motorisé sur rails",
                  "Hauteur de travail ajustable",
                  "Compatible tous gabarits de rames",
                  "Conformité aux normes de sécurité ferroviaire",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-sp2i-feroviaire rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PlaceholderImage src={IMAGES.portique.main} alt="Portique mobile d'accès toiture" />
        </div>
      </div>
    </section>
  );
}

function Pemp() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Nos Plates-formes Élévatrices Mobiles de Personnes ont été conçues pour permettre un accès en hauteur, du côté et du dessus des rames.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
              <ul className="space-y-2">
                {[
                  "Accès latéral sécurisé",
                  "Accès toiture facilité",
                  "Mobilité optimale en atelier",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-sp2i-feroviaire rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PlaceholderImage src={IMAGES.pemp.main} alt="Plateforme Élévatrice Mobile de Personne" />
        </div>
      </div>
    </section>
  );
}

function AutomateSecurite() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage src={IMAGES.automate.main} alt="Automate de sécurité" />
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Les multiples équipements des ateliers ferroviaires associés à l&apos;appareillage SP2I forment un ensemble complexe qui doit être soumis à un contrôle rigoureux afin d&apos;éviter les accidents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Des automates de sécurité sont ainsi intégrés à nos structures pour gérer les risques entre caténaires sous tension et équipements mobiles ou humains.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-xl bg-sp2i-feroviaire/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-sp2i-feroviaire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sécurité maximale</p>
                <p className="text-sm text-gray-600">Gestion automatisée des risques</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlaceholderImage src={IMAGES.automate.img2} alt="Automate de sécurité - armoire de commande" />
          <PlaceholderImage src={IMAGES.automate.img3} alt="Automate de sécurité - armoire électrique" />
        </div>
      </div>
    </section>
  );
}

function GrueVelocipedique() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              La grue vélocipédique est un équipement de levage mobile conçu pour les ateliers de maintenance ferroviaire. Se déplaçant sur rails, elle permet de manipuler des charges lourdes (composants, bogies, équipements) le long des voies d&apos;atelier.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Compacte et maniable, elle s&apos;intègre facilement dans les environnements contraints des centres de maintenance tout en offrant une capacité de levage adaptée aux besoins de l&apos;industrie ferroviaire.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Avantages</h4>
              <ul className="space-y-2">
                {[
                  "Mobilité sur rails le long des voies",
                  "Capacité de levage adaptée au ferroviaire",
                  "Encombrement réduit",
                  "Facilité d'utilisation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-sp2i-feroviaire rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PlaceholderImage src={IMAGES.grue.main} alt="Grue vélocipédique" aspectRatio="aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
}

const SUBPAGE_COMPONENTS = {
  "catenaire-escamotable": CatenaireEscamotable,
  "passerelle-acces-toiture": PasserelleAccesToiture,
  "portique-mobile": PortiqueMobile,
  "pemp": Pemp,
  "automate-securite": AutomateSecurite,
  "grue-velocipedique": GrueVelocipedique,
};

export default function Sp2iFerroviaireSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
