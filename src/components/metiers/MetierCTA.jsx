import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Dynamic CTA component for Metier pages
 * @param {Object} props
 * @param {string} props.slug - The metier slug (sermas, aretec, etc.)
 * @param {Function} props.t - Translation function specific to the metier
 */
export default function MetierCTA({ slug, t }) {
  // Construct image path based on slug
  const imagePath = `/images/metiers/cta-${slug}.webp`;
  
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="relative text-white pt-20 pb-24 rounded-xl overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
          <Image 
            src={imagePath}
            alt={t("cta.imageAlt") || `${slug} CTA background`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority={false} // Not needed for below-the-fold content
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto px-6 md:px-16">
          <div className="max-w-3xl">
            <span className="text-sm font-light uppercase text-gray-200 tracking-wider mb-6 block">
              {t("cta.label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light">
              {t("cta.description")}
            </p>
            <Button 
              variant="secondary" 
              className="inline-flex items-center gap-2 text-base px-6"
            >
              {t("cta.button")}
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
                <title>Arrow</title>
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}