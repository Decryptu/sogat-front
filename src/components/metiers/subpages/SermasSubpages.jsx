import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

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

const BODY = "text-lg text-muted-foreground leading-relaxed";

function PlaceholderImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-4/3",
}) {
  return (
    <div
      className={`relative ${aspectRatio} overflow-hidden bg-foreground/5 ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
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

function Eyebrow({ children }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-sermas">
      <span className="size-2 rounded-full bg-current" />
      {children}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 py-4 text-lg">
          <span className="mt-2.5 size-2 shrink-0 rounded-full bg-sermas" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SciesABillettes() {
  return (
    <>
      <Section>
        <SectionHeader title="Solutions « hautes-performances » pour tous formats de billettes" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
          <div className="space-y-8">
            <BulletList
              items={[
                "Robuste et fiable",
                "Hautes performances",
                "Faible consommation d'énergie",
              ]}
            />
            <div className="space-y-2">
              <p className="text-lg font-semibold">Lames circulaires ou à ruban</p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-sermas">Option :</span>{" "}
                Intégration de la scie dans un processus entièrement automatisé
              </p>
            </div>
          </div>
          <PlaceholderImage
            src={IMAGES.hautesPerformances.main}
            alt="Solutions hautes-performances"
            className="border-t-4 border-sermas"
          />
        </div>
        <PlaceholderImage
          src={IMAGES.hautesPerformances.bottom}
          alt="Solutions hautes-performances vue d'ensemble"
          aspectRatio="aspect-21/9"
        />
      </Section>

      <Section bg="bg-background">
        <SectionHeader title="Technologie à ruban" />
        <PlaceholderImage
          src={IMAGES.billettes.col2}
          alt="Technologie à ruban"
        />
      </Section>

      <Section>
        <SectionHeader title="Technologie à disque" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[IMAGES.disque.img1, IMAGES.disque.img2, IMAGES.disque.img3].map(
            (src, index) => (
              <PlaceholderImage
                key={src}
                src={src}
                alt={`Technologie à disque ${index + 1}`}
              />
            )
          )}
        </div>
      </Section>
    </>
  );
}

function SciesLigneDeSciage() {
  return (
    <Section>
      <SectionHeader
        title="Pour plaques coulées & Tés (T-bars) d'Aluminium"
        description="Solutions complètes de sciage pour la transformation de plaques coulées et de Tés en aluminium, intégrant manutention et traitement des copeaux."
      />
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
          aspectRatio="aspect-3/4 lg:aspect-auto"
          className="h-full min-h-100 lg:min-h-0 border-t-4 border-sermas"
        />
      </div>
    </Section>
  );
}

function SciesMultiFonctions() {
  return (
    <Section>
      <p className={`max-w-3xl mb-16 md:mb-20 ${BODY}`}>
        Pour le refendage, l&apos;éboutage de plaques & Billettes d&apos;Aluminium
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24">
        <div>
          <Eyebrow>Production de feuilles flexibles</Eyebrow>
          <h3 className="mb-8 text-lg md:text-xl font-semibold">Slicing Saws</h3>
          <BulletList
            items={[
              "Robuste, fiable et entièrement automatisée.",
              "Faible consommation d'énergie.",
              "Système d'extraction et de compactage des copeaux.",
            ]}
          />
        </div>
        <PlaceholderImage
          src={IMAGES.multiFonctions.slicing}
          alt="Slicing Saws"
          className="border-t-4 border-sermas"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <PlaceholderImage
          src={IMAGES.multiFonctions.essential}
          alt="SERMAS ESSENTIAL"
          className="border-t-4 border-sermas"
        />
        <div>
          <Eyebrow>Série BS-E</Eyebrow>
          <h3 className="mb-4 text-lg md:text-xl font-semibold">
            SERMAS ESSENTIAL
          </h3>
          <p className={BODY}>
            Scie XL à découpe sur mesure : Scies circulaires pour la découpe de
            tôles non ferreuses (Al, Cu, Laiton... et alliages)
          </p>
        </div>
      </div>
    </Section>
  );
}

function SciesDeRefendage() {
  return (
    <Section>
      <p className={`max-w-3xl mb-16 md:mb-20 ${BODY}`}>
        La production de plaques fines (tôles) d&apos;aluminium à partir de plaques coulées
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
        <div>
          <h3 className="mb-6 text-lg md:text-xl font-semibold">
            Solution intelligente et flexible :
          </h3>
          <BulletList
            items={[
              "Découpe polyvalente : extrémités, morceaux intermédiaires, petits morceaux, échantillons",
              "Configuration flexible",
              "Mode entièrement automatique",
              "Système d'extraction des copeaux",
            ]}
          />
        </div>
        <PlaceholderImage
          src={IMAGES.refendage.main}
          alt="Scies de refendage"
          className="border-t-4 border-sermas"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          IMAGES.refendage.bottom1,
          IMAGES.refendage.bottom2,
          IMAGES.refendage.bottom3,
        ].map((src, index) => (
          <PlaceholderImage
            key={src}
            src={src}
            alt={`Scies de refendage ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}

function InstallationPlaquesLaminees() {
  return (
    <Section>
      <Eyebrow>Solution complètes « plates Saws »</Eyebrow>
      <p className="max-w-3xl mb-12 md:mb-16 text-2xl md:text-3xl font-semibold leading-snug">
        Fabrication de produits de précision pour l&apos;industrie aérospatiale ou
        navale
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlaceholderImage
          src={IMAGES.plaquesLaminees.img1}
          alt="Installation plaques laminées 1"
          className="border-t-4 border-sermas"
        />
        <PlaceholderImage
          src={IMAGES.plaquesLaminees.img2}
          alt="Installation plaques laminées 2"
          className="border-t-4 border-sermas"
        />
      </div>
    </Section>
  );
}

function MachinesASurfacer() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <Eyebrow>Pour la production de plaques</Eyebrow>
          <p className={BODY}>
            Finition de surface de tôles sciées, pour obtenir une tôle
            d&apos;aluminium coulée présentant une rugosité de surface similaire
            à celle des tôles laminées.
          </p>
          <div className="mt-10 border-t border-foreground/10 pt-6">
            <p className="font-display text-3xl md:text-4xl font-bold leading-none text-sermas">
              Jusqu&apos;à 7 500 mm x 3 200 mm
            </p>
            <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">
              Dimensions maximales
            </p>
          </div>
        </div>
        <PlaceholderImage
          src={IMAGES.surfacer.main}
          alt="Machines à surfacer"
          className="border-t-4 border-sermas"
        />
      </div>
    </Section>
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
