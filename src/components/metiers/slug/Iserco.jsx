import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements (Pour Silo)
  equipementsSilo: {
    silo: "/images/metiers/iserco/placeholder.webp",
    bigBag: "/images/metiers/iserco/placeholder.webp",
    sac: "/images/metiers/iserco/placeholder.webp",
    fondVibrantRond: "/images/metiers/iserco/placeholder.webp",
    fondVibrantCarre: "/images/metiers/iserco/placeholder.webp",
    fondVibrantMultiple: "/images/metiers/iserco/placeholder.webp",
  },
  // Detail sections (Pour Silo)
  fondVibrantRond: "/images/metiers/iserco/placeholder.webp",
  fondVibrantCarre: "/images/metiers/iserco/placeholder.webp",
  fondVibrantMultiple: "/images/metiers/iserco/placeholder.webp",
  // Section: Nos équipements (Pour BIG BAGs)
  equipementsBigBag: {
    bonneCoulabilite: "/images/metiers/iserco/placeholder.webp",
    faibleCoulabilite: "/images/metiers/iserco/placeholder.webp",
    mauvaiseCoulabilite: "/images/metiers/iserco/placeholder.webp",
  },
  // Detail sections (Pour BIG BAGs)
  vidangeBonneCoulabilite: "/images/metiers/iserco/placeholder.webp",
  vidangeFaibleCoulabilite1: "/images/metiers/iserco/placeholder.webp",
  vidangeFaibleCoulabilite2: "/images/metiers/iserco/placeholder.webp",
  // Section: Nos équipements (Pour remplir un BIG BAG)
  equipementsRemplissage: {
    cadencePlus: "/images/metiers/iserco/placeholder.webp",
    cadencePlusPlus: "/images/metiers/iserco/placeholder.webp",
    cadencePlusPlusPlus: "/images/metiers/iserco/placeholder.webp",
    bigBagOctabin: "/images/metiers/iserco/placeholder.webp",
  },
  // Detail sections (Pour remplir un BIG BAG)
  remplissagePlus: "/images/metiers/iserco/placeholder.webp",
  remplissagePlusPlus: "/images/metiers/iserco/placeholder.webp",
  remplissagePlusPlusPlus: "/images/metiers/iserco/placeholder.webp",
  remplissageBigBagOctabin: "/images/metiers/iserco/placeholder.webp",
  // Section: Nos équipements (Pour vider un BIG BAG)
  equipementsVideSac: {
    bonneCoulabilite: "/images/metiers/iserco/placeholder.webp",
    mauvaiseCoulabilite: "/images/metiers/iserco/placeholder.webp",
    hauteHygiene: "/images/metiers/iserco/placeholder.webp",
    stationVideSac: "/images/metiers/iserco/placeholder.webp",
  },
  // Detail sections (Pour vider un BIG BAG)
  videSacBonneCoulabilite: "/images/metiers/iserco/placeholder.webp",
  videSacMauvaiseCoulabilite: "/images/metiers/iserco/placeholder.webp",
  videSacHauteHygiene: "/images/metiers/iserco/placeholder.webp",
  stationVideSac: "/images/metiers/iserco/placeholder.webp",
  // Section: Nos équipements (transfert, dosage, réduction)
  equipementsAutres: {
    transfert: "/images/metiers/iserco/placeholder.webp",
    dosage: "/images/metiers/iserco/placeholder.webp",
    reduction: "/images/metiers/iserco/placeholder.webp",
  },
  // Detail sections
  transfertVis: "/images/metiers/iserco/placeholder.webp",
  transfertPneumatique: "/images/metiers/iserco/placeholder.webp",
  dosagePonderal: "/images/metiers/iserco/placeholder.webp",
  dosageVolumetrique: "/images/metiers/iserco/placeholder.webp",
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, subtitle, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-iserco font-semibold">{subtitle}</p>
      )}
    </div>
  );
}

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

function ImageCard({ src, alt, label }) {
  return (
    <div className="group">
      <PlaceholderImage src={src} alt={alt} aspectRatio="aspect-[4/3]" />
      <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-iserco transition-colors">
        {label}
      </p>
    </div>
  );
}

function DetailSection({ title, imageSrc, imageAlt, children, bgColor = "bg-white" }) {
  return (
    <section className={`py-16 px-4 md:px-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <PlaceholderImage src={imageSrc} alt={imageAlt} aspectRatio="aspect-[4/3]" />
          <div className="text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberedItem({ number, title, children }) {
  return (
    <div>
      <p className="font-bold text-gray-900">
        <span className="text-iserco">{number}-</span> {title}
      </p>
      <p className="text-gray-700 mt-1">{children}</p>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function Iserco({ t, locale }) {
  return (
    <div className="w-full">

      {/* ================================================================== */}
      {/* SECTION: Nos équipements — Pour Silo                              */}
      {/* ================================================================== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard src={IMAGES.equipementsSilo.silo} alt="Pour Silo" label="Pour Silo" />
            <ImageCard src={IMAGES.equipementsSilo.bigBag} alt="Pour Big Bag" label="Pour Big Bag" />
            <ImageCard src={IMAGES.equipementsSilo.sac} alt="Pour SAC" label="Pour SAC" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard src={IMAGES.equipementsSilo.fondVibrantRond} alt="Fond vibrant rond" label="Fond vibrant rond" />
            <ImageCard src={IMAGES.equipementsSilo.fondVibrantCarre} alt="Fond vibrant carré et rectangulaire" label="Fond vibrant carré et rectangulaire" />
            <ImageCard src={IMAGES.equipementsSilo.fondVibrantMultiple} alt="Fond vibrant à sortie multiple" label="Fond vibrant à sortie multiple" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Fond vibrant rond                                         */}
      {/* ================================================================== */}
      <DetailSection
        title="Fond vibrant rond"
        imageSrc={IMAGES.fondVibrantRond}
        imageAlt="Fond vibrant rond"
        bgColor="bg-gray-50"
      >
        <NumberedItem number="1" title="Plaque registre manuelle de sécurité">
          Permet d&apos;isoler le fond vibrant lorsqu&apos;une intervention de maintenance est nécessaire en dessous de ce dernier.
          C&apos;est une plaque métallique insérée dans une fente de 180° et positionnée horizontalement dans la tubulure de sortie.
          Dispositif qui permet de ne jamais être en situation de blocage grâce à un manchon en caoutchouc qui recouvre la fente.
        </NumberedItem>
        <NumberedItem number="2" title="Accélérateur pneumatique">
          Génère une chasse d&apos;air comprimé se dirigeant vers la sortie du fond vibrant. Ce qui permet de décoller le produit se trouvant bloqué dans la zone d&apos;action et d&apos;aider au redémarrage d&apos;un écoulement de poudre.
        </NumberedItem>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Fond vibrant carré et rectangulaire                       */}
      {/* ================================================================== */}
      <DetailSection
        title="Fond vibrant carré et rectangulaire"
        imageSrc={IMAGES.fondVibrantCarre}
        imageAlt="Fond vibrant carré et rectangulaire"
        bgColor="bg-white"
      >
        <NumberedItem number="1" title={<>Tuyauterie de ringardage ou &quot;Poke Hole&quot;</>}>
          Permet une intervention manuelle à l&apos;intérieur du fond vibrant, lorsque le silo est en charge.
        </NumberedItem>
        <NumberedItem number="2" title="Manchon profil U tenu entre les brides de sorties">
          Assure l&apos;étanchéité entre le fond vibrant en mouvement et l&apos;appareil de reprise qui est statique.
          Permet une isolation des vibrations produites par le fond vibrant sur les équipements positionnés en aval.
          Ce manchon peut remplacer la manchette de sortie avec un collier de serrage d&apos;autant plus qu&apos;il supporte plus de pression que les manchettes souples.
        </NumberedItem>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Fond vibrant à sortie multiple                            */}
      {/* ================================================================== */}
      <DetailSection
        title="Fond vibrant à sortie multiple"
        imageSrc={IMAGES.fondVibrantMultiple}
        imageAlt="Fond vibrant à sortie multiple"
        bgColor="bg-gray-50"
      >
        <NumberedItem number="1" title="Manchette souple avec colliers de serrage en sortie de fond vibrant">
          Garantit l&apos;étanchéité du fond vibrant.
          Elle a une résistance à la pression identique à celle de la bande d&apos;étanchéité et permet d&apos;isoler la vibration émise par le fond vibrant du silo.
        </NumberedItem>
        <NumberedItem number="2" title="Fishtail (queue de carpe)">
          Crée une lame d&apos;air permettant de dégager les adhérences du produit sur une paroi interne du fond vibrant.
          Cette lame a un effet mécanique vertical, qui lui permet de faire disparaître les forces de friction entre les parois internes du cône et le produit.
          Elle se présente comme une aide à l&apos;extraction de poudre avec son action fluidifiante du produit.
        </NumberedItem>
      </DetailSection>

      {/* ================================================================== */}
      {/* SECTION: Nos équipements — Pour BIG BAGs                          */}
      {/* ================================================================== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pour BIG BAGs">Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard src={IMAGES.equipementsBigBag.bonneCoulabilite} alt="Station de vidange pour un produit à bonne coulabilité" label="Station de vidange pour un produit à bonne coulabilité" />
            <ImageCard src={IMAGES.equipementsBigBag.faibleCoulabilite} alt="Station de vidange pour un produit à faible coulabilité" label="Station de vidange pour un produit à faible coulabilité" />
            <ImageCard src={IMAGES.equipementsBigBag.mauvaiseCoulabilite} alt="Station de vidange pour un produit à mauvaise coulabilité" label="Station de vidange pour un produit à mauvaise coulabilité" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Station de vidange — bonne coulabilité                    */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de vidange pour produit à bonne coulabilité"
        imageSrc={IMAGES.vidangeBonneCoulabilite}
        imageAlt="Station de vidange pour produit à bonne coulabilité"
        bgColor="bg-gray-50"
      >
        <p>
          Composé d&apos;un palonnier et d&apos;un palonnier de mise en extension <strong>(1)</strong>. Il assure le levage du big bag.
        </p>
        <p>
          De plus, la trémie vibrée et la boîte de délaçage <strong>(2)</strong> facilitent l&apos;extraction des produits et permettent la vidange de produit en ouvrant la sache des big bags dans un environnement clos et propre.
        </p>
        <p>
          L&apos;iserclose <strong>(3)</strong> : système d&apos;aide à la religature du big bag et à la vidange partielle ; vient pincer la sache de sortie du big bag, ce qui permet de réduire le diamètre de sortie jusqu&apos;à l&apos;arrêt total de la vidange et la fermeture de la sache.
        </p>
        <p>
          Enfin, la trémie tampon <strong>(4)</strong> permet de stocker le produit en attente de conditionnement ou de transformation.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de vidange — faible coulabilité (1)               */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de vidange pour produit à faible coulabilité"
        imageSrc={IMAGES.vidangeFaibleCoulabilite1}
        imageAlt="Station de vidange pour produit à faible coulabilité"
        bgColor="bg-white"
      >
        <p>
          Le châssis avec monorail palan et palonnier <strong>(1)</strong> permet le levage du big bag et sa manutention.
        </p>
        <p>
          Le massage pneumatique <strong>(2)</strong> permet l&apos;optimisation de l&apos;écoulement des produits difficiles et très cohésifs. Il contribue à réduire la taille des mottes se trouvant à l&apos;intérieur du big bag qui peuvent obstruer la manche de vidange.
        </p>
        <p>
          Enfin, le clean connect <strong>(3)</strong> permet l&apos;étanchéité par pincement de la sache du big bag ; garantit une vidange propre du produit et évite les risques de contamination extérieurs.
        </p>
        <p>
          L&apos;ensemble est ajustable en hauteur grâce à des compas à gaz.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de vidange — faible coulabilité (2)               */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de vidange pour produit à faible coulabilité"
        imageSrc={IMAGES.vidangeFaibleCoulabilite2}
        imageAlt="Station de vidange pour produit à faible coulabilité - hydraulique"
        bgColor="bg-gray-50"
      >
        <p>
          Le massage hydraulique <strong>(1)</strong> permet l&apos;optimisation de l&apos;écoulement des produits difficiles à extraire. Les vérins hydrauliques réglables en hauteur sont implantés dans la partie basse du Big Bag et viennent casser les mottes et les voûtes.
        </p>
        <p>
          L&apos;émotteur <strong>(2)</strong> permet la réduction de la granulométrie des produits ayant tendance à former des mottes. Il permet le concassage des produits cohésifs. Il est facile à démonter et à nettoyer.
        </p>
        <p>
          L&apos;armoire électrique <strong>(3)</strong> permet un meilleur rendement et est automatisée.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* SECTION: Nos équipements — Pour remplir un BIG BAG                */}
      {/* ================================================================== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pour remplir un BIG BAG">Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard src={IMAGES.equipementsRemplissage.cadencePlus} alt="Station de remplissage cadence +" label="Station de remplissage cadence + (15 big bags/heure)" />
            <ImageCard src={IMAGES.equipementsRemplissage.cadencePlusPlus} alt="Station de remplissage cadence ++" label="Station de remplissage cadence ++ (30 big bags/heure)" />
            <ImageCard src={IMAGES.equipementsRemplissage.cadencePlusPlusPlus} alt="Station de remplissage cadence +++" label="Station de remplissage cadence +++ (60 big bags/heure)" />
            <ImageCard src={IMAGES.equipementsRemplissage.bigBagOctabin} alt="Station de remplissage big bag et octabin" label="Station de remplissage big bag et octabin" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Station de remplissage cadence +                          */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de remplissage cadence + (15 big bags/heure)"
        imageSrc={IMAGES.remplissagePlus}
        imageAlt="Station de remplissage cadence +"
        bgColor="bg-gray-50"
      >
        <p>
          Composé d&apos;un clean connect <strong>(1)</strong> qui permet la connexion de la manchette du Big bag. Ce système d&apos;étanchéité par clampage de la goulotte rend toute émission de particules fines impossible.
        </p>
        <p>
          Le tablier de mise en extension <strong>(2)</strong> assure la bonne stabilité du Big bag et permet d&apos;optimiser le remplissage. Ce système est équipé d&apos;une commande permettant la montée ou la descente du tablier, ainsi que d&apos;une soupape de décompression permettant l&apos;ajustement automatique.
        </p>
        <p>
          La fourche U <strong>(3)</strong> permet le retrait du Big Bag par anses.
        </p>
        <p>
          Les crochets automatiques par système de vérins <strong>(4)</strong> permettent le décrochage automatique du Big Bag pouvant atteindre 500kg en fin de remplissage.
        </p>
        <p>
          La table densificatrice <strong>(5)</strong> assure une meilleure densification du produit lors du remplissage. Permet d&apos;éviter les talus et aide à stabiliser le Big Bag sur la palette de transport. Elle garantit également une désaération et un compactage du produit par vibration.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de remplissage cadence ++                         */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de remplissage cadence ++ (30 big bags/heure)"
        imageSrc={IMAGES.remplissagePlusPlus}
        imageAlt="Station de remplissage cadence ++"
        bgColor="bg-white"
      >
        <p>
          Le distributeur double voie <strong>(1)</strong> permet une double cadence de remplissage des Big Bags.
        </p>
        <p>
          Le ventilateur de préformage <strong>(2)</strong> assure la mise en forme du Big Bag et facilite son remplissage.
        </p>
        <p>
          La tête de remplissage double peau <strong>(3)</strong> permet le dégazage du big bag. En effet, suite au pré gonflage du Big Bag fait avec le ventilateur de préformage, la goulotte double peau permet lors du remplissage la libération de l&apos;air présent dans le Big Bag.
        </p>
        <p>
          Enfin, le joint gonflable <strong>(4)</strong> permet la connexion de la manchette du Big Bag. Cette ceinture de maintien pour la goulotte de remplissage sur la tête d&apos;alimentation permet une étanchéité complète. L&apos;ensemble est ajustable en hauteur grâce au vérin hydraulique, ce qui permet l&apos;adaptation à de nombreux types et longueurs de sache.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de remplissage cadence +++                        */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de remplissage cadence +++ (60 big bags/heure)"
        imageSrc={IMAGES.remplissagePlusPlusPlus}
        imageAlt="Station de remplissage cadence +++"
        bgColor="bg-gray-50"
      >
        <p>
          Pour un rendement s&apos;élevant à 60 Big Bags par heure, un remplissage fonctionnant en full automatique est conseillé. Tout se fait de manière automatique suite aux paramétrages de la machine faits par l&apos;opérateur en début de cycle.
        </p>
        <p>
          La station de remplissage est dotée d&apos;un système de sécurité et s&apos;arrête en cas d&apos;anomalie.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de remplissage BIG Bag et octabin                 */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de remplissage BIG Bag et octabin"
        imageSrc={IMAGES.remplissageBigBagOctabin}
        imageAlt="Station de remplissage Big Bag et octabin"
        bgColor="bg-white"
      >
        <p>
          La gaine télescopique <strong>(1)</strong> permet de conserver une connexion étanche entre le Big Bag ou l&apos;octabin et la goulotte de remplissage lors de la mise en extension du tablier.
        </p>
        <p>
          Ensuite, la tôle en inox <strong>(2)</strong> assure le remplissage étanche des octabins sans perte de produit et sans risque de contamination.
        </p>
        <p>
          Enfin, les pesons <strong>(3)</strong> permettent un dosage pondéral du produit par l&apos;intermédiaire d&apos;une vanne électropneumatique.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* SECTION: Nos équipements — Pour vider un BIG BAG                  */}
      {/* ================================================================== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pour vider un BIG BAG">Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard src={IMAGES.equipementsVideSac.bonneCoulabilite} alt="Trémie vide sac pour un produit à bonne coulabilité" label="Trémie vide sac pour un produit à bonne coulabilité" />
            <ImageCard src={IMAGES.equipementsVideSac.mauvaiseCoulabilite} alt="Trémie vide sac pour un produit à mauvaise coulabilité" label="Trémie vide sac pour un produit à mauvaise coulabilité" />
            <ImageCard src={IMAGES.equipementsVideSac.hauteHygiene} alt="Trémie vide sac avec conception haute hygiène" label="Trémie vide sac avec conception haute hygiène" />
            <ImageCard src={IMAGES.equipementsVideSac.stationVideSac} alt="Station de vidange avec trémie vide sac" label="Station de vidange avec trémie vide sac" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Trémie vide sac — bonne coulabilité                       */}
      {/* ================================================================== */}
      <DetailSection
        title="Trémie vide sac pour produit à bonne coulabilité"
        imageSrc={IMAGES.videSacBonneCoulabilite}
        imageAlt="Trémie vide sac pour produit à bonne coulabilité"
        bgColor="bg-white"
      >
        <p>
          La porte d&apos;accès sur les vérins à gaz <strong>(1)</strong> est sécurisée par des capteurs inductifs et deux sauterelles.
        </p>
        <p>
          Ensuite, le piquage <strong>(2)</strong> assure l&apos;aspiration et le décolmatage.
        </p>
        <p>
          La chambre de vidage de sacs avec une grille amovible <strong>(3)</strong> permet l&apos;ouverture manuelle des sacs et la séparation des corps étrangers, tout en facilitant le nettoyage et la maintenance de l&apos;équipement.
        </p>
        <p>
          La tablette de support de sac <strong>(4)</strong> offre une surface stable et ergonomique pour la dépose et la manipulation des sacs, améliorant le confort opérateur et la sécurité lors des opérations de vidage.
        </p>
        <p>
          Enfin, la trémie carrée ou ronde <strong>(5)</strong> permet l&apos;élimination des rétentions de produits situés dans les coins des trémies classiques.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Trémie vide sac — mauvaise coulabilité                    */}
      {/* ================================================================== */}
      <DetailSection
        title="Trémie vide sac pour produit à mauvaise coulabilité"
        imageSrc={IMAGES.videSacMauvaiseCoulabilite}
        imageAlt="Trémie vide sac pour produit à mauvaise coulabilité"
        bgColor="bg-gray-50"
      >
        <p>
          Le système d&apos;évacuation des sacs vides <strong>(1)</strong> permet une extraction rapide et sécurisée des sacs après vidage, limitant les manipulations manuelles et améliorant la propreté de la zone de travail.
        </p>
        <p>
          Le système de vibration avec un moteur à balourd <strong>(2)</strong> permet un écoulement rapide et facile du produit.
        </p>
        <p>
          Le système de raccordement sur le process d&apos;exploitation <strong>(3)</strong> assure une connexion fiable et adaptable aux équipements existants, assurant la continuité du flux produit et limitant les pertes de matière.
        </p>
        <p>
          Et enfin, les roues de manutention <strong>(4)</strong> qui permettent de déplacer la machine facilement.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Trémie vide sac — haute hygiène                           */}
      {/* ================================================================== */}
      <DetailSection
        title="Trémie vide sac avec conception haute hygiène"
        imageSrc={IMAGES.videSacHauteHygiene}
        imageAlt="Trémie vide sac avec conception haute hygiène"
        bgColor="bg-white"
      >
        <p>
          La grille vibrée <strong>(1)</strong> facilite l&apos;écoulement du produit et l&apos;entraîne plus facilement vers la sortie.
        </p>
        <p>
          Les poignées de manutention <strong>(2)</strong> aident au déplacement de la trémie.
        </p>
        <p>
          De plus, le moteur vibrant amovible <strong>(3)</strong> qui est démontable avec des sauterelles permet d&apos;amener la trémie seule dans la zone de lavage.
        </p>
        <p>
          Enfin, les manchettes BFM <strong>(4)</strong> simplifient le nettoyage et le démontage de la trémie.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* DETAIL: Station de vidange avec trémie vide sac                   */}
      {/* ================================================================== */}
      <DetailSection
        title="Station de vidange avec trémie vide sac"
        imageSrc={IMAGES.stationVideSac}
        imageAlt="Station de vidange avec trémie vide sac"
        bgColor="bg-gray-50"
      >
        <p>
          Le palan électrique à chaîne et le palonnier <strong>(1)</strong> permettent de manutentionner le Big Bag et assurent son levage.
        </p>
        <p>
          Le massage pneumatique <strong>(2)</strong> assure l&apos;écoulement des produits difficiles à extraire contenus dans le Big Bag.
        </p>
        <p>
          Le vide Bag <strong>(3)</strong> facilite l&apos;extraction des produits grâce à la vibration. Associé à une boîte de délaçage, il permet à l&apos;opérateur d&apos;ouvrir les lacets des saches dans un environnement propre.
        </p>
        <p>
          La chambre d&apos;accès <strong>(4)</strong> permet l&apos;ouverture du Big Bag dans un environnement propre.
        </p>
        <p>
          Le vide sac <strong>(5)</strong> gère la vidange des produits contenus dans les sacs.
        </p>
        <p>
          L&apos;ensemble trémie tampon et fond vibrant <strong>(6)</strong> sont destinés à stocker la matière en attente de conditionnement ou de transformation et aident à l&apos;extraction du produit contenu dans la trémie.
        </p>
        <p>
          Enfin, la vis doseuse <strong>(7)</strong> permet le dosage volumétrique du produit.
        </p>
      </DetailSection>

      {/* ================================================================== */}
      {/* SECTION: Nos équipements — transfert, dosage, réduction           */}
      {/* ================================================================== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard src={IMAGES.equipementsAutres.transfert} alt="Équipements de transfert produit" label="Équipements de transfert produit" />
            <ImageCard src={IMAGES.equipementsAutres.dosage} alt="Équipements de dosage produit" label="Équipements de dosage produit" />
            <ImageCard src={IMAGES.equipementsAutres.reduction} alt="Équipement de réduction produit" label="Équipement de réduction produit" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Équipements de transfert produit                          */}
      {/* ================================================================== */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Équipements de transfert produit
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <PlaceholderImage src={IMAGES.transfertVis} alt="Vis d'Archimède" aspectRatio="aspect-[4/3]" />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-bold text-iserco">Vis d&apos;Archimède</h3>
              <p>
                Elle permet le transport de poudre ou granulé d&apos;un point A à un point B. Nos convoyeurs à vis spécialement conçus avec de nombreuses options et variantes selon la typologie des produits et l&apos;environnement de travail.
              </p>
              <p>La vis d&apos;Archimède d&apos;ISERCO propose une prestation globale.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <PlaceholderImage src={IMAGES.transfertPneumatique} alt="Transport pneumatique" aspectRatio="aspect-[4/3]" />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-bold text-iserco">Transport pneumatique</h3>
              <p>
                Il fonctionne avec l&apos;air comprimé permettant de créer une dépression afin d&apos;aspirer le produit. Il est ainsi transféré dans un tuyau d&apos;un contenant A à un contenant B. Il assure l&apos;étanchéité et est souvent recommandé pour un produit long ou compliqué, ou lorsqu&apos;il faut desservir plusieurs contenants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DETAIL: Équipements de dosage produit                             */}
      {/* ================================================================== */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Équipements de dosage produit
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <PlaceholderImage src={IMAGES.dosagePonderal} alt="Dosage pondéral" aspectRatio="aspect-[4/3]" />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-bold text-iserco">Dosage pondéral</h3>
              <p>
                Peut être fait par la mise en place d&apos;une chaîne de pesée. Le procédé est automatisé et permet l&apos;indication du poids avec une précision commerciale et non commerciale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <PlaceholderImage src={IMAGES.dosageVolumetrique} alt="Dosage volumétrique" aspectRatio="aspect-[4/3]" />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-bold text-iserco">Dosage volumétrique</h3>
              <p>
                Permet un dosage pondéral plus rapide et est moins coûteux.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
