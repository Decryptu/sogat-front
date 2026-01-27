import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - 3-column grid
  equipment: {
    col1: "/images/metiers/aretec/1.webp", // Lignes de production
    col2: "/images/metiers/aretec/2.webp", // Machines spéciales
    col3: "/images/metiers/aretec/3.webp", // Robotique
  },
  // Section: 2x2 grid
  grid2x2: {
    row1col1: "/images/metiers/aretec/4.webp", // Ligne échelle câble
    row1col2: "/images/metiers/aretec/5.webp", // Ligne tubes spiralés
    row2col1: "/images/metiers/aretec/6.webp", // Ligne sérigraphie
    row2col2: "/images/metiers/aretec/7.webp", // Ligne assemblage batterie
  },
  // Section: Machines spéciales (5 items)
  machines: {
    decoupe: "/images/metiers/aretec/8.webp", // Découpe de porte
    poinconnage: "/images/metiers/aretec/9.webp", // Poinçonnage
    tunnel: "/images/metiers/aretec/10.webp", // Tunnel de séchage
    presse: "/images/metiers/aretec/11.webp", // Presse de collage
    controle: "/images/metiers/aretec/12.webp", // Poste de contrôle
  },
  // Section: Robotique (3 items)
  robotique: {
    fabrication: "/images/metiers/aretec/13.webp", // Ligne de fabrication
    vision: "/images/metiers/aretec/14.webp", // Vision
    clippage: "/images/metiers/aretec/15.webp", // Clippage
  },
  // Section: Robots collaboratifs (3 images)
  cobots: {
    img1: "/images/metiers/aretec/16.webp",
    img2: "/images/metiers/aretec/17.webp",
    img3: "/images/metiers/aretec/18.webp",
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {children}
      </h2>
    </div>
  );
}

function ImageCard({ src, alt, title, aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className="group">
      <div className={`relative ${aspectRatio} rounded-xl overflow-hidden mb-4 bg-gray-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      )}
    </div>
  );
}

function OverlayCard({ src, alt, title }) {
  return (
    <div className="group">
      <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
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

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function Aretec({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>NOS équipements</SectionTitle>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipment.col1}
              alt="Lignes de production automatisées"
              title="LIGNES DE PRODUCTION AUTOMATISÉES"
            />
            <ImageCard
              src={IMAGES.equipment.col2}
              alt="Machines spéciales"
              title="MACHINES SPÉCIALES"
            />
            <ImageCard
              src={IMAGES.equipment.col3}
              alt="Robotique"
              title="ROBOTIQUE"
            />
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCard
              src={IMAGES.grid2x2.row1col1}
              alt="Ligne fabrication échelle à câble"
              title="Ligne fabrication échelle à câble"
            />
            <ImageCard
              src={IMAGES.grid2x2.row1col2}
              alt="Ligne fabrication tubes spiralés"
              title="Ligne fabrication tubes spiralés"
            />
            <ImageCard
              src={IMAGES.grid2x2.row2col1}
              alt="Ligne sérigraphie patte pâtissière"
              title="Ligne sérigraphie patte pâtissière"
            />
            <ImageCard
              src={IMAGES.grid2x2.row2col2}
              alt="Ligne assemblage de batterie"
              title="Ligne assemblage de batterie"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Machines spéciales ===== */}
      <section className="py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>MACHINES SPÉCIALES</SectionTitle>

          {/* First row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <OverlayCard
              src={IMAGES.machines.decoupe}
              alt="Découpe de porte"
              title="Découpe de porte"
            />
            <OverlayCard
              src={IMAGES.machines.poinconnage}
              alt="Poinçonnage"
              title="Poinçonnage"
            />
            <OverlayCard
              src={IMAGES.machines.tunnel}
              alt="Tunnel de séchage"
              title="Tunnel de séchage"
            />
          </div>

          {/* Second row - 2 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <OverlayCard
              src={IMAGES.machines.presse}
              alt="Presse de collage"
              title="Presse de collage"
            />
            <OverlayCard
              src={IMAGES.machines.controle}
              alt="Poste de contrôle éclaireur"
              title="Poste de contrôle éclaireur"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Robotique ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>ROBOTIQUE</SectionTitle>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <OverlayCard
              src={IMAGES.robotique.fabrication}
              alt="Ligne de fabrication"
              title="Ligne de fabrication"
            />
            <OverlayCard
              src={IMAGES.robotique.vision}
              alt="Vision"
              title="Vision"
            />
            <OverlayCard
              src={IMAGES.robotique.clippage}
              alt="Clippage"
              title="Clippage"
            />
          </div>

          {/* Robots collaboratifs section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-aretec rounded-full" />
              <h3 className="text-2xl font-bold text-gray-900">Robots collaboratifs</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlaceholderImage
                src={IMAGES.cobots.img1}
                alt="Robot collaboratif 1"
                aspectRatio="aspect-[4/3]"
              />
              <PlaceholderImage
                src={IMAGES.cobots.img2}
                alt="Robot collaboratif 2"
                aspectRatio="aspect-[4/3]"
              />
              <PlaceholderImage
                src={IMAGES.cobots.img3}
                alt="Robot collaboratif 3"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
