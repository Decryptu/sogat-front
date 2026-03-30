import Image from "next/image";

const IMAGES = {
  hautesPerformances: {
    main: "/images/metiers/sermas/9.webp",
    bottom: "/images/metiers/sermas/10.webp",
  },
  disque: {
    img1: "/images/metiers/sermas/11.webp",
    img2: "/images/metiers/sermas/12.webp",
    img3: "/images/metiers/sermas/13.webp",
  },
  ligneSciage: {
    left1: "/images/metiers/sermas/14.webp",
    left2: "/images/metiers/sermas/15.webp",
    right: "/images/metiers/sermas/16.webp",
  },
  multiFonctions: {
    slicing: "/images/metiers/sermas/17.webp",
    essential: "/images/metiers/sermas/18.webp",
  },
  refendage: {
    main: "/images/metiers/sermas/19.webp",
    bottom1: "/images/metiers/sermas/20.webp",
    bottom2: "/images/metiers/sermas/21.webp",
    bottom3: "/images/metiers/sermas/22.webp",
  },
  plaquesLaminees: {
    img1: "/images/metiers/sermas/23.webp",
    img2: "/images/metiers/sermas/24.webp",
  },
  surfacer: {
    main: "/images/metiers/sermas/25.webp",
  },
  billettes: {
    col2: "/images/metiers/sermas/2.webp",
    col3: "/images/metiers/sermas/3.webp",
  },
};

function PlaceholderImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
}) {
  return (
    <div
      className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function SciesABillettes() {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Solutions « hautes-performances » pour tous formats de billettes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Robuste et fiable",
                  "Hautes performances",
                  "Faible consommation d'énergie",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <span className="w-2 h-2 bg-sermas rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 mb-2">
                  Lames circulaires ou à ruban
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-sermas">Option :</span>{" "}
                  Intégration de la scie dans un processus entièrement automatisé
                </p>
              </div>
            </div>
            <PlaceholderImage
              src={IMAGES.hautesPerformances.main}
              alt="Solutions hautes-performances"
            />
          </div>
          <PlaceholderImage
            src={IMAGES.hautesPerformances.bottom}
            alt="Solutions hautes-performances vue d'ensemble"
            aspectRatio="aspect-[21/9]"
          />
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technologie à ruban
          </h2>
          <PlaceholderImage
            src={IMAGES.billettes.col2}
            alt="Technologie à ruban"
          />
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technologie à disque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[IMAGES.disque.img1, IMAGES.disque.img2, IMAGES.disque.img3].map(
              (src, index) => (
                <PlaceholderImage
                  key={index}
                  src={src}
                  alt={`Technologie à disque ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function SciesLigneDeSciage() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pour plaques coulées & Tés (T-bars) d&apos;Aluminium
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Solutions complètes de sciage pour la transformation de plaques coulées et de Tés en aluminium, intégrant manutention et traitement des copeaux.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <PlaceholderImage
              src={IMAGES.ligneSciage.left1}
              alt="Ligne de sciage vue 1"
            />
            <PlaceholderImage
              src={IMAGES.ligneSciage.left2}
              alt="Ligne de sciage vue 2"
            />
          </div>
          <PlaceholderImage
            src={IMAGES.ligneSciage.right}
            alt="Ligne de sciage complète"
            aspectRatio="aspect-[3/4] lg:aspect-auto"
            className="h-full min-h-100 lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}

function SciesMultiFonctions() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg text-gray-600 mb-12">
          Pour le refendage, l&apos;éboutage de plaques & Billettes d&apos;Aluminium
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Slicing Saws</h3>
            <p className="text-lg text-sermas font-medium">
              Production de feuilles flexibles
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Robuste, fiable et entièrement automatisée.",
                "Faible consommation d'énergie.",
                "Système d'extraction et de compactage des copeaux.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-sermas rounded-full shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderImage src={IMAGES.multiFonctions.slicing} alt="Slicing Saws" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <PlaceholderImage
            src={IMAGES.multiFonctions.essential}
            alt="SERMAS ESSENTIAL"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              SERMAS ESSENTIAL
            </h3>
            <p className="text-lg text-sermas font-medium">Série BS-E</p>
            <p className="text-gray-700 leading-relaxed">
              Scie XL à découpe sur mesure : Scies circulaires pour la découpe de
              tôles non ferreuses (Al, Cu, Laiton... et alliages)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SciesDeRefendage() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg text-gray-600 mb-12">
          La production de plaques fines (tôles) d&apos;aluminium à partir de plaques coulées
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-sermas">
              Solution intelligente et flexible :
            </h3>
            <ul className="space-y-3">
              {[
                "Découpe polyvalente : extrémités, morceaux intermédiaires, petits morceaux, échantillons",
                "Configuration flexible",
                "Mode entièrement automatique",
                "Système d'extraction des copeaux",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-sermas rounded-full shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderImage src={IMAGES.refendage.main} alt="Scies de refendage" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            IMAGES.refendage.bottom1,
            IMAGES.refendage.bottom2,
            IMAGES.refendage.bottom3,
          ].map((src, index) => (
            <PlaceholderImage
              key={index}
              src={src}
              alt={`Scies de refendage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallationPlaquesLaminees() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl text-sermas font-semibold mb-4">
          Solution complètes « plates Saws »
        </p>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl">
          Fabrication de produits de précision pour l&apos;industrie aérospatiale ou
          navale
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            src={IMAGES.plaquesLaminees.img1}
            alt="Installation plaques laminées 1"
          />
          <PlaceholderImage
            src={IMAGES.plaquesLaminees.img2}
            alt="Installation plaques laminées 2"
          />
        </div>
      </div>
    </section>
  );
}

function MachinesASurfacer() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl text-sermas font-semibold mb-12">
          Pour la production de plaques
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Finition de surface de tôles sciées, pour obtenir une tôle
              d&apos;aluminium coulée présentant une rugosité de surface similaire
              à celle des tôles laminées.
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-2xl font-bold text-sermas">
                Jusqu&apos;à 7 500 mm x 3 200 mm
              </p>
              <p className="text-gray-600 mt-2">Dimensions maximales</p>
            </div>
          </div>
          <PlaceholderImage
            src={IMAGES.surfacer.main}
            alt="Machines à surfacer"
          />
        </div>
      </div>
    </section>
  );
}

const SUBPAGE_COMPONENTS = {
  "scies-a-billettes": SciesABillettes,
  "scies-ligne-de-sciage": SciesLigneDeSciage,
  "scies-multi-fonctions": SciesMultiFonctions,
  "scies-de-refendage": SciesDeRefendage,
  "installation-plaques-laminees": InstallationPlaquesLaminees,
  "machines-a-surfacer": MachinesASurfacer,
};

export default function SermasSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
