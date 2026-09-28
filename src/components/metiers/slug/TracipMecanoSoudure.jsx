import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: 3 column showcase
  showcase: {
    col1: "/images/metiers/tracip-mecano-soudure/1.webp",
    col2: "/images/metiers/tracip-mecano-soudure/2.webp",
    col3: "/images/metiers/tracip-mecano-soudure/3.webp",
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-muted ${className}`}>
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
export default function TracipMecanoSoudure() {
  return (
    <div className="w-full">
      {/* ===== SECTION: 3 Column Image Showcase ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlaceholderImage
              src={IMAGES.showcase.col1}
              alt="Fabrication mécano-soudée 1"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.showcase.col2}
              alt="Fabrication mécano-soudée 2"
              aspectRatio="aspect-[4/3]"
            />
            <PlaceholderImage
              src={IMAGES.showcase.col3}
              alt="Fabrication mécano-soudée 3"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
