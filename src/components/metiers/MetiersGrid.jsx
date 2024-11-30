import Image from "next/image";
import Link from "next/link";
import { METIERS } from "@/constants/metiers";

export default function MetiersGrid({ t, locale }) {
 return (
   <div className="container mx-auto px-4 py-16">
     <h1 className="text-5xl font-black mb-24">
       ENSEMBLE, NOUS<br />
       ALLONS PLUS LOIN
     </h1>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
       {METIERS.map((metier) => (
         <Link
           href={`/${locale}/metiers/${metier}`}
           key={metier} 
           className="group border-t border-gray-300 pt-4"
         >
           <div className="flex items-center gap-4 mb-6">
             <div className="relative h-12 w-12">
               <Image
                 src={`/images/metiers/logo-${metier}.webp`}
                 alt={t(`grid.items.${metier}.name`)}
                 fill
                 className="object-contain" 
               />
             </div>
             <h2 className="text-xl">
               {t(`grid.items.${metier}.name`)}
             </h2>
           </div>
           <p className="text-gray-400 font-light mb-6">
             {t(`grid.items.${metier}.description`)}
           </p>
           <div className="text-gray-900 flex items-center gap-2">
             {t("grid.discoverCta")}
             <span className="group-hover:translate-x-1 transition-transform">
               →
             </span>
           </div>
         </Link>
       ))}
     </div>
   </div>
 );
}