import Image from "next/image";
import { ShieldCheck } from "lucide-react";

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

function FeatureList({ title, items }) {
  return (
    <div>
      <h3 className="mb-4 text-lg md:text-xl font-semibold">{title}</h3>
      <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-3 text-muted-foreground">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-sp2i-feroviaire" />
            {item}
          </li>
        ))}
      </ul>
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
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
          {images.map((src, i) => (
            <div key={src} className="absolute inset-0" style={{ clipPath: clips[i] }}>
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover object-center" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-3">
        {images.map((src, i) => (
          <div key={src} className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CatenaireEscamotable() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-12 md:mb-16">
        <div className="space-y-6">
          <Lead>
            Le système de caténaire rigide escamotable a été conçu spécialement pour les centres de maintenance du matériel ferroviaire roulant pour permettre l&apos;électrification des voies internes de l&apos;atelier tout en conservant les possibilités d&apos;utilisation des ponts roulants et d&apos;autres installations aériennes.
          </Lead>
          <p className={BODY}>
            Pour faciliter les opérations d&apos;entretien des rames « en toiture », la caténaire escamotable doit permettre :
          </p>
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            <div className="py-5">
              <h3 className="mb-2 text-lg md:text-xl font-semibold">En position « captage » :</h3>
              <p className={BODY}>
                L&apos;amenée et le repli des rames par traction électrique à l&apos;intérieur du bâtiment, les essais des moteurs de traction, les essais des pantographes, les opérations nécessitant la présence d&apos;une ligne de contact sous tension électrique.
              </p>
            </div>
            <div className="py-5">
              <h3 className="mb-2 text-lg md:text-xl font-semibold">En position « escamotée » :</h3>
              <p className={BODY}>
                L&apos;intervention par dessus les rames, en tout point, au moyen de nacelles élévatrices ou de ponts roulants mobiles sur toute la longueur des ateliers, … des interventions spécifiques telles que le tarage du pantographe, l&apos;élévation des rames via les systèmes de levage pour les interventions sous-caisse…
              </p>
            </div>
          </div>
          <p className="flex items-center gap-4 pt-2 text-sm font-medium uppercase tracking-[0.2em]">
            <span className="h-1 w-12 bg-sp2i-feroviaire" />
            Solution brevetée SP2I
          </p>
        </div>
        <PlaceholderImage src={IMAGES.catenaire.side} alt="Caténaire escamotable" className="border-t-4 border-sp2i-feroviaire" />
      </div>
      <DiagonalCollage images={IMAGES.catenaire.collage} alt="Caténaire escamotable" />
    </Section>
  );
}

function PasserelleAccesToiture() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-12 md:mb-16">
        <PlaceholderImage src={IMAGES.passerelle.side} alt="Passerelle d'accès toiture" className="border-t-4 border-sp2i-feroviaire" />
        <div className="space-y-6">
          <Lead>
            SP2I est spécialisé dans la conception et fabrication de passerelle complète, c&apos;est-à-dire de l&apos;ossature, de garde-corps, d&apos;échelles et d&apos;escaliers. Que ce soit des produits fabriqués à partir de plans et devis établis ou d&apos;une conception, la qualité du produit répond aux normes standards de l&apos;industrie.
          </Lead>
          <p className={BODY}>
            Notre connaissance du milieu ferroviaire, nous permet de maîtriser les contraintes du matériel roulant tel que les gabarits de passage, hauteur de travail en toiture, les caméras de rame…
          </p>
          <p className={BODY}>
            Par ailleurs, nous proposons des solutions efficaces pour l&apos;accès sécurisé aux trains. En effet, nous pouvons intégrer à la passerelle notre système de « compensateur de lacune » qui permet de combler le vide entre la passerelle fixe et différents gabarits empêchant la chute des opérateurs de maintenance mais aussi de leurs outils.
          </p>
          <p className={BODY}>
            Le plancher mobile permet de combler la lacune entre le gabarit théorique des différents matériels roulants et celui de l&apos;engin réel immobile à visiter. Il permet d&apos;occuper le vide entre les passerelles d&apos;accès toiture et les différents gabarits de train.
          </p>
          <div>
            <h3 className="mb-4 text-lg md:text-xl font-semibold">Les compensateurs permettent :</h3>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              <p className={`py-4 ${BODY}`}>
                <span className="font-semibold text-foreground">En position reculée :</span> l&apos;amenée ou le repli de la rame. Des capteurs de position valident la position.
              </p>
              <p className={`py-4 ${BODY}`}>
                <span className="font-semibold text-foreground">En position déployée :</span> le comblement de l&apos;espace entre la passerelle et la rame en venant en butée contre la caisse du matériel roulant, permettant le passage des opérateurs en toiture en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DiagonalCollage images={IMAGES.passerelle.collage} alt="Passerelle d'accès toiture" />
    </Section>
  );
}

function PortiqueMobile() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <Lead>
            Le portique mobile d&apos;accès toiture est conçu pour faciliter les opérations de maintenance sur le toit des rames ferroviaires. Monté sur rails, il se déplace le long des voies d&apos;atelier et offre un accès sécurisé en hauteur aux opérateurs.
          </Lead>
          <p className={BODY}>
            Équipé de plateformes réglables en hauteur et de garde-corps conformes aux normes de sécurité, le portique permet d&apos;intervenir sur tous les types de matériel roulant, quels que soient leur gabarit et leur longueur.
          </p>
          <FeatureList
            title="Caractéristiques"
            items={[
              "Déplacement motorisé sur rails",
              "Hauteur de travail ajustable",
              "Compatible tous gabarits de rames",
              "Conformité aux normes de sécurité ferroviaire",
            ]}
          />
        </div>
        <PlaceholderImage src={IMAGES.portique.main} alt="Portique mobile d'accès toiture" className="border-t-4 border-sp2i-feroviaire" />
      </div>
    </Section>
  );
}

function Pemp() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <Lead>
            Nos Plates-formes Élévatrices Mobiles de Personnes ont été conçues pour permettre un accès en hauteur, du côté et du dessus des rames.
          </Lead>
          <FeatureList
            title="Caractéristiques"
            items={[
              "Accès latéral sécurisé",
              "Accès toiture facilité",
              "Mobilité optimale en atelier",
            ]}
          />
        </div>
        <PlaceholderImage src={IMAGES.pemp.main} alt="Plateforme Élévatrice Mobile de Personne" className="border-t-4 border-sp2i-feroviaire" />
      </div>
    </Section>
  );
}

function AutomateSecurite() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
        <PlaceholderImage src={IMAGES.automate.main} alt="Automate de sécurité" className="border-t-4 border-sp2i-feroviaire" />
        <div className="space-y-6">
          <Lead>
            Les multiples équipements des ateliers ferroviaires associés à l&apos;appareillage SP2I forment un ensemble complexe qui doit être soumis à un contrôle rigoureux afin d&apos;éviter les accidents.
          </Lead>
          <p className={BODY}>
            Des automates de sécurité sont ainsi intégrés à nos structures pour gérer les risques entre caténaires sous tension et équipements mobiles ou humains.
          </p>
          <div className="flex items-center gap-4 border-t border-foreground/10 pt-6">
            <div className="flex size-12 shrink-0 items-center justify-center bg-sp2i-feroviaire/20">
              <ShieldCheck className="size-6 text-sp2i-feroviaire" />
            </div>
            <div>
              <p className="font-semibold">Sécurité maximale</p>
              <p className="text-sm text-muted-foreground">Gestion automatisée des risques</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlaceholderImage src={IMAGES.automate.img2} alt="Automate de sécurité - armoire de commande" />
        <PlaceholderImage src={IMAGES.automate.img3} alt="Automate de sécurité - armoire électrique" />
      </div>
    </Section>
  );
}

function GrueVelocipedique() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <Lead>
            La grue vélocipédique est un équipement de levage mobile conçu pour les ateliers de maintenance ferroviaire. Se déplaçant sur rails, elle permet de manipuler des charges lourdes (composants, bogies, équipements) le long des voies d&apos;atelier.
          </Lead>
          <p className={BODY}>
            Compacte et maniable, elle s&apos;intègre facilement dans les environnements contraints des centres de maintenance tout en offrant une capacité de levage adaptée aux besoins de l&apos;industrie ferroviaire.
          </p>
          <FeatureList
            title="Avantages"
            items={[
              "Mobilité sur rails le long des voies",
              "Capacité de levage adaptée au ferroviaire",
              "Encombrement réduit",
              "Facilité d'utilisation",
            ]}
          />
        </div>
        <PlaceholderImage src={IMAGES.grue.main} alt="Grue vélocipédique" aspectRatio="aspect-16/9" className="border-t-4 border-sp2i-feroviaire" />
      </div>
    </Section>
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
