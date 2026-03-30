import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  tourVertical: "/images/metiers/haquette/1.webp",
  tourHorizontal: "/images/metiers/haquette/2.webp",
  aleseuse: "/images/metiers/haquette/3.webp",
  fraiseuseCNC: "/images/metiers/haquette/4.webp",
  fraiseuseConv: "/images/metiers/haquette/5.webp",
  tourHorizontalCNC: "/images/metiers/haquette/6.webp",
  bancMesure: "/images/metiers/haquette/7.webp",
  brasMesure: "/images/metiers/haquette/8.webp",
  tourUniversel: "/images/metiers/haquette/9.webp",
  aleseuseMobile: "/images/metiers/haquette/10.webp",
  fraiseuseCN: "/images/metiers/haquette/11.webp",
};

const EQUIPMENT = [
  { slug: "tour-vertical-cnc", image: IMAGES.tourVertical, label: "Tour Vertical CNC" },
  { slug: "tour-horizontal-cnc", image: IMAGES.tourHorizontal, label: "Tour Horizontal CNC" },
  { slug: "aleseuse-cnc", image: IMAGES.aleseuse, label: "Aléseuse CNC" },
  { slug: "fraiseuse-cnc", image: IMAGES.fraiseuseCNC, label: "Fraiseuse CNC" },
  { slug: "fraiseuse-conventionnelle", image: IMAGES.fraiseuseConv, label: "Fraiseuse conventionnelle" },
  { slug: "tour-horizontale-cnc", image: IMAGES.tourHorizontalCNC, label: "Tour horizontale CNC" },
  { slug: "banc-mesure-dimensionnel", image: IMAGES.bancMesure, label: "Banc de mesure dimensionnel" },
  { slug: "bras-mesure-3d", image: IMAGES.brasMesure, label: "Bras de mesure 3D portable" },
  { slug: "tour-universel", image: IMAGES.tourUniversel, label: "Tour universel" },
  { slug: "aleseuse-montant-mobile", image: IMAGES.aleseuseMobile, label: "Aléseuse à montant mobile" },
  { slug: "fraiseuse-commande-numerique", image: IMAGES.fraiseuseCN, label: "Fraiseuse à commande numérique" },
];

export default function Haquette({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nos équipements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EQUIPMENT.map((item) => (
              <SubpageCard
                key={item.slug}
                href={`/metiers/haquette/${item.slug}`}
                src={item.image}
                alt={item.label}
                title={item.label}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
