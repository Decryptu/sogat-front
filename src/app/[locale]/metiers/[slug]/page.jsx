import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import dynamic from 'next/dynamic';
import fs from "node:fs";
import path from "node:path";
import { METIERS } from "@/constants/metiers";
import { METIER_COLORS } from "@/constants/metier-colors";
import MetierCTA from "@/components/metiers/MetierCTA";
import MetierTransition from "@/components/metiers/MetierTransition";
import HeroImageFrame from "@/components/ui/HeroImageFrame";

const METIER_COMPONENTS = {
 sermas: dynamic(() => import("@/components/metiers/slug/Sermas")),
 "sp2i-ferroviaire": dynamic(() => import("@/components/metiers/slug/Sp2iFerroviaire")),
 "sp2i-prehension": dynamic(() => import("@/components/metiers/slug/Sp2iPrehension")),
 aretec: dynamic(() => import("@/components/metiers/slug/Aretec")),
 "tracip-mecano-soudure": dynamic(() => import("@/components/metiers/slug/TracipMecanoSoudure")),
 "tracip-environnement": dynamic(() => import("@/components/metiers/slug/TracipEnvironnement")),
 haquette: dynamic(() => import("@/components/metiers/slug/Haquette")),
 iserco: dynamic(() => import("@/components/metiers/slug/Iserco")),
 "mc2-maintenance": dynamic(() => import("@/components/metiers/slug/Mc2Maintenance")),
};

export function generateStaticParams() {
 return METIERS.map((slug) => ({ slug }));
}

export default async function MetierPage({ params }) {
 const { slug } = await params;

 if (!METIERS.includes(slug)) {
   notFound();
 }
 const [locale, t] = await Promise.all([
   rootLocale(),
   getTranslations(`metiers.${slug}`),
 ]);

 // Gather carousel images from the metier's image folder
 const imgDir = path.join(process.cwd(), "public/images/metiers", slug);
 const heroImages = fs.existsSync(imgDir)
   ? fs.readdirSync(imgDir)
       .filter((f) => /^\d+\.webp$/.test(f))
       .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10))
       .slice(0, 6)
       .map((f) => `/images/metiers/${slug}/${f}`)
   : [`/images/metiers/${slug}.webp`];

 const MetierContent = METIER_COMPONENTS[slug];

 return (
   <div className="w-full">
     <MetierTransition slug={slug} />
     <div className="grid lg:grid-cols-2 items-center">
       {/* Left Column - Text Content */}
       <div className="space-y-6 px-4 md:px-16 py-12">
         <h1 className="text-4xl lg:text-6xl font-bold">{t("title")}</h1>
         <p className="text-lg lg:text-xl text-gray-700">{t("description")}</p>
       </div>

       {/* Right Column - Image */}
       <HeroImageFrame
         images={heroImages}
         alt={t("imageAlt")}
         frameColor={METIER_COLORS[slug]}
         priority
       />
     </div>

     {/* Dynamic Metier Component */}
     <MetierContent t={t} locale={locale} />

     {/* Dynamic CTA Section */}
     <MetierCTA slug={slug} t={t} />
   </div>
 );
}
