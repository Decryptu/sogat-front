import Image from "next/image";

const IMAGES = {
  levage: {
    bobines: "/images/metiers/sp2i-prehension/6.webp",
    outillage: "/images/metiers/sp2i-prehension/7.webp",
    toles: "/images/metiers/sp2i-prehension/8.webp",
    brames: "/images/metiers/sp2i-prehension/9.webp",
    diverses: "/images/metiers/sp2i-prehension/10.webp",
    lingot: "/images/metiers/sp2i-prehension/11.webp",
  },
  levageDetail: {
    bobines1: "/images/metiers/sp2i-prehension/15.webp",
    bobines2: "/images/metiers/sp2i-prehension/16.webp",
    outillage1: "/images/metiers/sp2i-prehension/17.webp",
  },
  convoyeur: {
    img1: "/images/metiers/sp2i-prehension/12.webp",
    img2: "/images/metiers/sp2i-prehension/13.webp",
  },
  transfert: {
    main: "/images/metiers/sp2i-prehension/14.webp",
  },
  navette: {
    main: "/images/metiers/sp2i-prehension/3.webp",
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

function Dot() {
  return <span className="mt-2.5 size-2 shrink-0 rounded-full bg-sp2i-prehension" />;
}

function BulletList({ items }) {
  return (
    <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 py-4 text-lg">
          <Dot />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Label({ children }) {
  return <span className="font-semibold text-foreground">{children}</span>;
}

function SubList({ label, items }) {
  return (
    <div>
      <Label>{label}</Label>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Dot />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LevageItem({ image, alt, title, children }) {
  return (
    <article className="group">
      <PlaceholderImage src={image} alt={alt} className="border-t-4 border-sp2i-prehension" />
      <h3 className="mt-6 mb-4 text-lg md:text-xl font-semibold">{title}</h3>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </article>
  );
}

function OutilsDeLevage() {
  return (
    <Section>
      <p className={`max-w-3xl mb-12 md:mb-16 ${BODY}`}>
        SP2I conçoit et fabrique des pinces de préhension et outils de levage sur mesure pour la manutention de charges lourdes dans l&apos;industrie sidérurgique, métallurgique et manufacturière.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
        <LevageItem image={IMAGES.levage.bobines} alt="Pinces pour bobines horizontales" title="Pinces pour bobines horizontales">
          <p><Label>Objectif :</Label> Lever et transférer des bobines d&apos;acier, d&apos;aluminium, de papier, ou autres corps ronds creux rigides d&apos;axe horizontal</p>
          <SubList
            label="Prise :"
            items={[
              "Dans le noyau de la bobine (sabot, éperon)",
              "Serrage sur les rives de la bobine",
              "Serrage sur le Ø extérieur de la bobine",
            ]}
          />
          <p><Label>Capacité de levage : NGH15 (15T) — NGH32 (32T) — NGH50 (50T)</Label></p>
          <div className="grid grid-cols-2 gap-2 pt-3">
            <PlaceholderImage src={IMAGES.levageDetail.bobines1} alt="Pince bobines horizontales" />
            <PlaceholderImage src={IMAGES.levageDetail.bobines2} alt="Pince bobines horizontales" />
          </div>
        </LevageItem>

        <LevageItem image={IMAGES.levage.outillage} alt="Pinces pour outillage de presse" title="Pinces pour outillage de presse">
          <p><Label>Objectif :</Label> Lever et transférer des outillages de presses grâce à 4 bras, munis de sabots spéciaux, mobiles longitudinalement et transversalement.</p>
          <p><Label>Type de matériel :</Label> Pinces électromécaniques</p>
          <p><Label>Options :</Label> Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
          <PlaceholderImage src={IMAGES.levageDetail.outillage1} alt="Pince outillage de presse" className="mt-6" />
        </LevageItem>

        <LevageItem image={IMAGES.levage.toles} alt="Pinces pour paquets de tôles" title="Pinces pour paquets de tôles et produits plats">
          <p><Label>Objectif :</Label> Manutentionner des paquets de tôles, panneaux, palettes ou autres produits plats.</p>
          <p><Label>Prise :</Label> Par le dessous du paquet</p>
          <SubList
            label="Type de matériel :"
            items={[
              "Pinces : Manuelles, Électro-mécaniques, Électrohydrauliques",
              "Palonniers : Cés, À fourches, À contrepoids, À rappel par ressort",
            ]}
          />
        </LevageItem>

        <LevageItem image={IMAGES.levage.brames} alt="Pince à brames" title="Pince à brames">
          <p><Label>Objectif :</Label> Lever et transférer des brames en position horizontale ou verticale, unitairement ou plusieurs.</p>
          <SubList
            label="Caractéristiques :"
            items={[
              "Brames ronds, carrés ou rectangulaires",
              "En acier, aluminium, bronze, zinc...",
            ]}
          />
          <SubList label="Fonctions :" items={["Levage, Démoulage, Reprise à plat, Multifonctions"]} />
        </LevageItem>

        <LevageItem image={IMAGES.levage.diverses} alt="Pinces charges diverses" title="Pinces charges diverses">
          <p><Label>Objectif :</Label> Lever et transférer une charge.</p>
          <p>À partir d&apos;un cahier des charges, nous pouvons concevoir et fabriquer tout type d&apos;équipement de levage.</p>
          <p><Label>Options :</Label> Chaque pince est adaptée aux outils à manutentionner ainsi qu&apos;aux contraintes de stockage et à l&apos;environnement de travail.</p>
        </LevageItem>

        <LevageItem image={IMAGES.levage.lingot} alt="Pince à lingot d'aluminium" title="Pince à lingot d'aluminium">
          <p><Label>Objectif :</Label> Lever et transférer des lingots en position horizontale ou verticale, unitairement ou plusieurs.</p>
          <SubList
            label="Caractéristiques :"
            items={[
              "Lingots ronds, carrés ou rectangulaires",
              "En acier, aluminium, bronze, zinc...",
            ]}
          />
          <SubList label="Fonctions :" items={["Levage, Démoulage, Reprise à plat, Multifonctions"]} />
        </LevageItem>
      </div>
    </Section>
  );
}

function ConvoyeurARouleau() {
  return (
    <Section>
      <p className="mb-12 md:mb-16 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]">
        <span className="size-2 rounded-full bg-sp2i-prehension" />
        Convoyeurs à rouleaux, à chaînes et à bandes
      </p>
      <div className="space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <PlaceholderImage src={IMAGES.convoyeur.img1} alt="Convoyeurs à rouleaux" className="border-t-4 border-sp2i-prehension" />
          <div className="space-y-8">
            <Lead>
              Les convoyeurs permettent de transférer des charges unitaires, en paquets ou en vrac d&apos;une position vers une autre ou vers de multiples positions.
            </Lead>
            <BulletList items={["Convoyeurs à rouleaux", "Convoyeurs à chaînes", "Convoyeurs à bandes", "Convoyeurs à écailles"]} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:order-last">
            <Lead>
              Les convoyeurs peuvent être isolés ou intégrés à une ligne de convoyage avec des transferts.
            </Lead>
            <p className={`border-l-4 border-sp2i-prehension bg-sp2i-prehension/10 p-6 ${BODY}`}>
              <Label>Exemple :</Label> Transfert à chaînes à 90° intégré dans un convoyage à rouleaux.
            </p>
          </div>
          <PlaceholderImage src={IMAGES.convoyeur.img2} alt="Transfert à chaînes intégré" className="border-t-4 border-sp2i-prehension lg:order-first" />
        </div>
      </div>
    </Section>
  );
}

function LigneDeTransfert() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <PlaceholderImage src={IMAGES.transfert.main} alt="Ligne de transfert et de manutention" className="border-t-4 border-sp2i-prehension" />
        <div className="space-y-6">
          <Lead>
            Nos lignes assurent le transfert ou la manutention de charges unitaires ou en paquets.
          </Lead>
          <p className={BODY}>
            Pour ces lignes, nous intégrons :
          </p>
          <BulletList items={["Convoyeurs à chaînes de manutention", "Refroidissoirs", "Tournes tubes", "Décalamineuses"]} />
          <p className="text-muted-foreground">
            Les lignes peuvent être isolées, ou intégrées à une ligne de convoyage complète.
          </p>
        </div>
      </div>
    </Section>
  );
}

function NavetteTransbordeur() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <Lead>
            La navette transbordeur est un système de manutention automatisé permettant le déplacement de charges lourdes entre différentes lignes de production ou postes de travail.
          </Lead>
          <p className={BODY}>
            Se déplaçant sur rails, elle assure le transfert transversal de produits tels que bobines, lingots, ou palettes entre les différentes zones d&apos;un atelier industriel.
          </p>
          <div>
            <h3 className="mb-4 text-lg md:text-xl font-semibold">Caractéristiques</h3>
            <BulletList
              items={[
                "Déplacement sur rails motorisé",
                "Capacité de charge adaptée au besoin",
                "Intégration dans les lignes de production existantes",
                "Pilotage automatisé ou semi-automatisé",
              ]}
            />
          </div>
        </div>
        <PlaceholderImage src={IMAGES.navette.main} alt="Navette transbordeur" className="border-t-4 border-sp2i-prehension" />
      </div>
    </Section>
  );
}

const SUBPAGE_COMPONENTS = {
  "outils-de-levage": OutilsDeLevage,
  "convoyeur-a-rouleau": ConvoyeurARouleau,
  "ligne-de-transfert": LigneDeTransfert,
  "navette-transbordeur": NavetteTransbordeur,
};

export default function Sp2iPrehensionSubpages({ subpage }) {
  const Component = SUBPAGE_COMPONENTS[subpage];
  if (!Component) return null;
  return <Component />;
}
