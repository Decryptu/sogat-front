import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from 'next/dynamic';
import fs from "fs";
import path from "path";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import { METIERS } from "@/constants/metiers";
import { METIER_COLORS } from "@/constants/metier-colors";
import MetierCTA from "@/components/metiers/MetierCTA";
import MetierTransition from "@/components/metiers/MetierTransition";
import HeroImageFrame from "@/components/ui/HeroImageFrame";

export function generateStaticParams() {
 return SUPPORTED_LOCALES.flatMap((locale) =>
   METIERS.map((slug) => ({
     locale,
     slug,
   })),
 );
}

export default async function MetierPage({ params }) {
 const { locale, slug } = await params;

 if (!METIERS.includes(slug)) {
   notFound();
 }

 setRequestLocale(locale);
 const t = await getTranslations(`metiers.${slug}`);

 // Gather carousel images from the metier's image folder
 const imgDir = path.join(process.cwd(), "public/images/metiers", slug);
 const heroImages = fs.existsSync(imgDir)
   ? fs.readdirSync(imgDir)
       .filter((f) => /^\d+\.webp$/.test(f))
       .sort((a, b) => parseInt(a) - parseInt(b))
       .slice(0, 6)
       .map((f) => `/images/metiers/${slug}/${f}`)
   : [`/images/metiers/${slug}.webp`];

 // Convert hyphenated slug to PascalCase for component name
 const componentName = slug
   .split('-')
   .map(part => part.charAt(0).toUpperCase() + part.slice(1))
   .join('');

 // Dynamic import with error handling and loading state
 const DynamicMetierComponent = dynamic(
   () => import(`@/components/metiers/slug/${componentName}`).catch(() => {
     console.warn(`Component for ${slug} not found`);
     return () => <div className="w-full py-8" />;
   }),
   {
     loading: () => (
       <div className="w-full py-8">
         <div className="max-w-7xl mx-auto px-4">
           <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />
         </div>
       </div>
     ),
   }
 );

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
     <DynamicMetierComponent t={t} locale={locale} />

     {/* Dynamic CTA Section */}
     <MetierCTA slug={slug} t={t} />
   </div>
 );
}
