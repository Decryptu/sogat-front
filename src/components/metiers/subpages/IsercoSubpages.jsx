import Image from "next/image";

const IMAGES = {
  fondVibrantRond: "/images/metiers/iserco/7.webp",
  fondVibrantCarre: "/images/metiers/iserco/8.webp",
  fondVibrantMultiple: "/images/metiers/iserco/9.webp",
  vidangeBonneCoulabilite: "/images/metiers/iserco/13.webp",
  vidangeFaibleCoulabilite1: "/images/metiers/iserco/14.webp",
  vidangeFaibleCoulabilite2: "/images/metiers/iserco/15.webp",
  remplissagePlus: "/images/metiers/iserco/20.webp",
  remplissagePlusPlus: "/images/metiers/iserco/21.webp",
  remplissagePlusPlusPlus: "/images/metiers/iserco/22.webp",
  remplissageBigBagOctabin: "/images/metiers/iserco/23.webp",
  videSacBonneCoulabilite: "/images/metiers/iserco/28.webp",
  videSacMauvaiseCoulabilite: "/images/metiers/iserco/29.webp",
  videSacHauteHygiene: "/images/metiers/iserco/30.webp",
  stationVideSac: "/images/metiers/iserco/31.webp",
  transfertVis: "/images/metiers/iserco/35.webp",
  transfertPneumatique: "/images/metiers/iserco/36.webp",
  dosagePonderal: "/images/metiers/iserco/37.webp",
  dosageVolumetrique: "/images/metiers/iserco/38.webp",
  siloEquip: {
    fondVibrantRond: "/images/metiers/iserco/4.webp",
    fondVibrantCarre: "/images/metiers/iserco/5.webp",
    fondVibrantMultiple: "/images/metiers/iserco/6.webp",
  },
  bigBagEquip: {
    bonneCoulabilite: "/images/metiers/iserco/10.webp",
    faibleCoulabilite: "/images/metiers/iserco/11.webp",
    mauvaiseCoulabilite: "/images/metiers/iserco/12.webp",
  },
  remplissageEquip: {
    cadencePlus: "/images/metiers/iserco/16.webp",
    cadencePlusPlus: "/images/metiers/iserco/17.webp",
    cadencePlusPlusPlus: "/images/metiers/iserco/18.webp",
    bigBagOctabin: "/images/metiers/iserco/19.webp",
  },
  videSacEquip: {
    bonneCoulabilite: "/images/metiers/iserco/24.webp",
    mauvaiseCoulabilite: "/images/metiers/iserco/25.webp",
    hauteHygiene: "/images/metiers/iserco/26.webp",
    stationVideSac: "/images/metiers/iserco/27.webp",
  },
  autresEquip: {
    transfert: "/images/metiers/iserco/32.webp",
    dosage: "/images/metiers/iserco/33.webp",
    reduction: "/images/metiers/iserco/34.webp",
  },
};

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]", contain = false }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image src={src} alt={alt} fill className={contain ? "object-contain" : "object-cover"} />
    </div>
  );
}

function ImageCard({ src, alt, label }) {
  return (
    <div className="group">
      <PlaceholderImage src={src} alt={alt} />
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
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{title}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <PlaceholderImage src={imageSrc} alt={imageAlt} contain />
          <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
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

function Silo() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-12">
            ISERCO conçoit et fabrique des fonds vibrants pour l&apos;extraction de produits stockés en silos. Trois configurations adaptées à chaque besoin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard src={IMAGES.siloEquip.fondVibrantRond} alt="Fond vibrant rond" label="Fond vibrant rond" />
            <ImageCard src={IMAGES.siloEquip.fondVibrantCarre} alt="Fond vibrant carré et rectangulaire" label="Fond vibrant carré et rectangulaire" />
            <ImageCard src={IMAGES.siloEquip.fondVibrantMultiple} alt="Fond vibrant à sortie multiple" label="Fond vibrant à sortie multiple" />
          </div>
        </div>
      </section>

      <DetailSection title="Fond vibrant rond" imageSrc={IMAGES.fondVibrantRond} imageAlt="Fond vibrant rond" bgColor="bg-gray-50">
        <NumberedItem number="1" title="Plaque registre manuelle de sécurité">
          Permet d&apos;isoler le fond vibrant lorsqu&apos;une intervention de maintenance est nécessaire en dessous de ce dernier. Dispositif qui permet de ne jamais être en situation de blocage grâce à un manchon en caoutchouc qui recouvre la fente.
        </NumberedItem>
        <NumberedItem number="2" title="Accélérateur pneumatique">
          Génère une chasse d&apos;air comprimé se dirigeant vers la sortie du fond vibrant. Ce qui permet de décoller le produit se trouvant bloqué dans la zone d&apos;action et d&apos;aider au redémarrage d&apos;un écoulement de poudre.
        </NumberedItem>
      </DetailSection>

      <DetailSection title="Fond vibrant carré et rectangulaire" imageSrc={IMAGES.fondVibrantCarre} imageAlt="Fond vibrant carré et rectangulaire">
        <NumberedItem number="1" title={<>Tuyauterie de ringardage ou &quot;Poke Hole&quot;</>}>
          Permet une intervention manuelle à l&apos;intérieur du fond vibrant, lorsque le silo est en charge.
        </NumberedItem>
        <NumberedItem number="2" title="Manchon profil U tenu entre les brides de sorties">
          Assure l&apos;étanchéité entre le fond vibrant en mouvement et l&apos;appareil de reprise qui est statique. Permet une isolation des vibrations produites par le fond vibrant sur les équipements positionnés en aval.
        </NumberedItem>
      </DetailSection>

      <DetailSection title="Fond vibrant à sortie multiple" imageSrc={IMAGES.fondVibrantMultiple} imageAlt="Fond vibrant à sortie multiple" bgColor="bg-gray-50">
        <NumberedItem number="1" title="Manchette souple avec colliers de serrage en sortie de fond vibrant">
          Garantit l&apos;étanchéité du fond vibrant. Elle a une résistance à la pression identique à celle de la bande d&apos;étanchéité et permet d&apos;isoler la vibration émise par le fond vibrant du silo.
        </NumberedItem>
        <NumberedItem number="2" title="Fishtail (queue de carpe)">
          Crée une lame d&apos;air permettant de dégager les adhérences du produit sur une paroi interne du fond vibrant. Cette lame a un effet mécanique vertical, qui lui permet de faire disparaître les forces de friction entre les parois internes du cône et le produit.
        </NumberedItem>
      </DetailSection>
    </>
  );
}

function BigBagVidange() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-12">
            Stations de vidange de Big Bags adaptées à la coulabilité du produit contenu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard src={IMAGES.bigBagEquip.bonneCoulabilite} alt="Bonne coulabilité" label="Produit à bonne coulabilité" />
            <ImageCard src={IMAGES.bigBagEquip.faibleCoulabilite} alt="Faible coulabilité" label="Produit à faible coulabilité" />
            <ImageCard src={IMAGES.bigBagEquip.mauvaiseCoulabilite} alt="Mauvaise coulabilité" label="Produit à mauvaise coulabilité" />
          </div>
        </div>
      </section>

      <DetailSection title="Station de vidange — bonne coulabilité" imageSrc={IMAGES.vidangeBonneCoulabilite} imageAlt="Station de vidange bonne coulabilité" bgColor="bg-gray-50">
        <p>Composé d&apos;un palonnier et d&apos;un palonnier de mise en extension <strong>(1)</strong>. Il assure le levage du big bag.</p>
        <p>La trémie vibrée et la boîte de délaçage <strong>(2)</strong> facilitent l&apos;extraction des produits.</p>
        <p>L&apos;iserclose <strong>(3)</strong> : système d&apos;aide à la religature du big bag et à la vidange partielle.</p>
        <p>La trémie tampon <strong>(4)</strong> permet de stocker le produit en attente.</p>
      </DetailSection>

      <DetailSection title="Station de vidange — faible coulabilité" imageSrc={IMAGES.vidangeFaibleCoulabilite1} imageAlt="Station de vidange faible coulabilité">
        <p>Le châssis avec monorail palan et palonnier <strong>(1)</strong> permet le levage et la manutention du big bag.</p>
        <p>Le massage pneumatique <strong>(2)</strong> permet l&apos;optimisation de l&apos;écoulement des produits difficiles et très cohésifs.</p>
        <p>Le clean connect <strong>(3)</strong> permet l&apos;étanchéité par pincement de la sache du big bag.</p>
      </DetailSection>

      <DetailSection title="Station de vidange — faible coulabilité (hydraulique)" imageSrc={IMAGES.vidangeFaibleCoulabilite2} imageAlt="Station de vidange faible coulabilité hydraulique" bgColor="bg-gray-50">
        <p>Le massage hydraulique <strong>(1)</strong> permet l&apos;optimisation de l&apos;écoulement des produits difficiles à extraire.</p>
        <p>L&apos;émotteur <strong>(2)</strong> permet la réduction de la granulométrie des produits ayant tendance à former des mottes.</p>
        <p>L&apos;armoire électrique <strong>(3)</strong> permet un meilleur rendement et est automatisée.</p>
      </DetailSection>
    </>
  );
}

function BigBagRemplissage() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-12">
            Stations de remplissage de Big Bags avec différentes cadences de production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard src={IMAGES.remplissageEquip.cadencePlus} alt="Cadence +" label="Cadence + (15 big bags/h)" />
            <ImageCard src={IMAGES.remplissageEquip.cadencePlusPlus} alt="Cadence ++" label="Cadence ++ (30 big bags/h)" />
            <ImageCard src={IMAGES.remplissageEquip.cadencePlusPlusPlus} alt="Cadence +++" label="Cadence +++ (60 big bags/h)" />
            <ImageCard src={IMAGES.remplissageEquip.bigBagOctabin} alt="Big Bag et octabin" label="Big Bag et octabin" />
          </div>
        </div>
      </section>

      <DetailSection title="Cadence + (15 big bags/heure)" imageSrc={IMAGES.remplissagePlus} imageAlt="Station de remplissage cadence +" bgColor="bg-gray-50">
        <p>Clean connect <strong>(1)</strong> : connexion de la manchette du Big bag avec étanchéité par clampage.</p>
        <p>Tablier de mise en extension <strong>(2)</strong> : stabilité et remplissage optimisé.</p>
        <p>Fourche U <strong>(3)</strong> : retrait du Big Bag par anses.</p>
        <p>Crochets automatiques <strong>(4)</strong> : décrochage automatique jusqu&apos;à 500kg.</p>
        <p>Table densificatrice <strong>(5)</strong> : meilleure densification par vibration.</p>
      </DetailSection>

      <DetailSection title="Cadence ++ (30 big bags/heure)" imageSrc={IMAGES.remplissagePlusPlus} imageAlt="Station de remplissage cadence ++">
        <p>Distributeur double voie <strong>(1)</strong> : double cadence de remplissage.</p>
        <p>Ventilateur de préformage <strong>(2)</strong> : mise en forme du Big Bag.</p>
        <p>Tête de remplissage double peau <strong>(3)</strong> : dégazage du big bag.</p>
        <p>Joint gonflable <strong>(4)</strong> : connexion étanche et ajustable en hauteur.</p>
      </DetailSection>

      <DetailSection title="Cadence +++ (60 big bags/heure)" imageSrc={IMAGES.remplissagePlusPlusPlus} imageAlt="Station de remplissage cadence +++" bgColor="bg-gray-50">
        <p>Remplissage fonctionnant en full automatique. Tout se fait de manière automatique suite aux paramétrages de la machine faits par l&apos;opérateur en début de cycle.</p>
        <p>La station est dotée d&apos;un système de sécurité et s&apos;arrête en cas d&apos;anomalie.</p>
      </DetailSection>

      <DetailSection title="Big Bag et octabin" imageSrc={IMAGES.remplissageBigBagOctabin} imageAlt="Station de remplissage Big Bag et octabin">
        <p>Gaine télescopique <strong>(1)</strong> : connexion étanche lors de la mise en extension.</p>
        <p>Tôle en inox <strong>(2)</strong> : remplissage étanche des octabins.</p>
        <p>Pesons <strong>(3)</strong> : dosage pondéral par vanne électropneumatique.</p>
      </DetailSection>
    </>
  );
}

function VideSac() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-12">
            Trémies vide sac et stations de vidange adaptées à chaque typologie de produit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard src={IMAGES.videSacEquip.bonneCoulabilite} alt="Bonne coulabilité" label="Bonne coulabilité" />
            <ImageCard src={IMAGES.videSacEquip.mauvaiseCoulabilite} alt="Mauvaise coulabilité" label="Mauvaise coulabilité" />
            <ImageCard src={IMAGES.videSacEquip.hauteHygiene} alt="Haute hygiène" label="Conception haute hygiène" />
            <ImageCard src={IMAGES.videSacEquip.stationVideSac} alt="Station de vidange" label="Station de vidange avec trémie" />
          </div>
        </div>
      </section>

      <DetailSection title="Trémie vide sac — bonne coulabilité" imageSrc={IMAGES.videSacBonneCoulabilite} imageAlt="Trémie vide sac bonne coulabilité" bgColor="bg-gray-50">
        <p>Porte d&apos;accès sur vérins à gaz <strong>(1)</strong> sécurisée par capteurs inductifs et sauterelles.</p>
        <p>Piquage <strong>(2)</strong> pour aspiration et décolmatage.</p>
        <p>Chambre de vidage avec grille amovible <strong>(3)</strong>.</p>
        <p>Tablette de support de sac <strong>(4)</strong> pour ergonomie et sécurité.</p>
        <p>Trémie carrée ou ronde <strong>(5)</strong> pour éliminer les rétentions de produits.</p>
      </DetailSection>

      <DetailSection title="Trémie vide sac — mauvaise coulabilité" imageSrc={IMAGES.videSacMauvaiseCoulabilite} imageAlt="Trémie vide sac mauvaise coulabilité">
        <p>Système d&apos;évacuation des sacs vides <strong>(1)</strong> pour extraction rapide et sécurisée.</p>
        <p>Système de vibration avec moteur à balourd <strong>(2)</strong> pour écoulement rapide.</p>
        <p>Système de raccordement sur le process <strong>(3)</strong> pour connexion fiable.</p>
        <p>Roues de manutention <strong>(4)</strong> pour déplacement facile.</p>
      </DetailSection>

      <DetailSection title="Trémie vide sac — haute hygiène" imageSrc={IMAGES.videSacHauteHygiene} imageAlt="Trémie vide sac haute hygiène" bgColor="bg-gray-50">
        <p>Grille vibrée <strong>(1)</strong> pour faciliter l&apos;écoulement.</p>
        <p>Poignées de manutention <strong>(2)</strong> pour déplacement.</p>
        <p>Moteur vibrant amovible <strong>(3)</strong> démontable pour zone de lavage.</p>
        <p>Manchettes BFM <strong>(4)</strong> pour nettoyage et démontage simplifiés.</p>
      </DetailSection>

      <DetailSection title="Station de vidange avec trémie vide sac" imageSrc={IMAGES.stationVideSac} imageAlt="Station de vidange avec trémie vide sac">
        <p>Palan électrique à chaîne et palonnier <strong>(1)</strong> pour manutention et levage du Big Bag.</p>
        <p>Massage pneumatique <strong>(2)</strong> pour écoulement des produits difficiles.</p>
        <p>Vide Bag <strong>(3)</strong> avec vibration et boîte de délaçage.</p>
        <p>Chambre d&apos;accès <strong>(4)</strong> pour ouverture propre du Big Bag.</p>
        <p>Vide sac <strong>(5)</strong> pour vidange des sacs.</p>
        <p>Trémie tampon et fond vibrant <strong>(6)</strong> pour stockage temporaire.</p>
        <p>Vis doseuse <strong>(7)</strong> pour dosage volumétrique.</p>
      </DetailSection>
    </>
  );
}

function AutresEquipements() {
  return (
    <>
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Équipements de transfert produit</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <PlaceholderImage src={IMAGES.transfertVis} alt="Vis d'Archimède" contain />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h4 className="text-xl font-bold text-iserco">Vis d&apos;Archimède</h4>
              <p>Elle permet le transport de poudre ou granulé d&apos;un point A à un point B. Nos convoyeurs à vis spécialement conçus avec de nombreuses options et variantes selon la typologie des produits et l&apos;environnement de travail.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <PlaceholderImage src={IMAGES.transfertPneumatique} alt="Transport pneumatique" contain />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h4 className="text-xl font-bold text-iserco">Transport pneumatique</h4>
              <p>Il fonctionne avec l&apos;air comprimé permettant de créer une dépression afin d&apos;aspirer le produit. Il est transféré dans un tuyau d&apos;un contenant A à un contenant B.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Équipements de dosage produit</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <PlaceholderImage src={IMAGES.dosagePonderal} alt="Dosage pondéral" contain />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h4 className="text-xl font-bold text-iserco">Dosage pondéral</h4>
              <p>Peut être fait par la mise en place d&apos;une chaîne de pesée. Le procédé est automatisé et permet l&apos;indication du poids avec une précision commerciale et non commerciale.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <PlaceholderImage src={IMAGES.dosageVolumetrique} alt="Dosage volumétrique" contain />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h4 className="text-xl font-bold text-iserco">Dosage volumétrique</h4>
              <p>Permet un dosage pondéral plus rapide et est moins coûteux.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SUBPAGE_COMPONENTS = {
  "silo": Silo,
  "big-bag-vidange": BigBagVidange,
  "big-bag-remplissage": BigBagRemplissage,
  "vide-sac": VideSac,
  "autres-equipements": AutresEquipements,
};

export default function IsercoSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
