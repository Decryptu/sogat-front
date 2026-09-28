import HeroImageFrame from "@/components/ui/HeroImageFrame";
import PageHero from "@/components/ui/PageHero";

export default function Hero({ title, description, imageAlt }) {
  return (
    <PageHero title={title} description={description}>
      <HeroImageFrame
        images={[
          "/images/groupe.webp",
          "/images/construction-hero.webp",
          "/images/navigation-default.webp",
        ]}
        alt={imageAlt}
        priority
      />
    </PageHero>
  );
}
