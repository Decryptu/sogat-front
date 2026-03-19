import Image from "next/image";

const IMAGES = {
  visArchimede: "/images/metiers/mc2-maintenance/1.webp",
  convoyeurBande: "/images/metiers/mc2-maintenance/4.webp",
  charpenteMetallique: "/images/metiers/mc2-maintenance/5.webp",
  thermoEjecteur: "/images/metiers/mc2-maintenance/9.webp",
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
      <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-mc2-maintenance transition-colors">
        {label}
      </p>
    </div>
  );
}

export default function Mc2Maintenance({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>
            {locale === "fr" ? "Nos réalisations" : "Our achievements"}
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImageCard
              src={IMAGES.visArchimede}
              alt="Vis d'Archimède"
              label={locale === "fr" ? "Vis d'Archimède" : "Archimedes screw"}
            />
            <ImageCard
              src={IMAGES.convoyeurBande}
              alt="Convoyeur à bande"
              label={locale === "fr" ? "Convoyeur à bande" : "Belt conveyor"}
            />
            <ImageCard
              src={IMAGES.charpenteMetallique}
              alt="Charpente et structure métallique"
              label={locale === "fr" ? "Charpente et structure métallique" : "Steel frame and structure"}
            />
            <ImageCard
              src={IMAGES.thermoEjecteur}
              alt="Thermo-éjecteur"
              label={locale === "fr" ? "Thermo-éjecteur" : "Thermo-ejector"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
