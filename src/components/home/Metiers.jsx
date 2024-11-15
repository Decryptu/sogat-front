import Link from "next/link";
import Image from "next/image";
import { METIERS } from '@/constants/metiers';

export default function BusinessAreas({ t }) {
 return (
   <section className="grid md:grid-cols-2 min-h-[600px]">
     {/* Left column */}
     <div className="bg-gray-50 px-8 md:px-16 py-12 md:py-20">
       <h2 className="text-4xl md:text-5xl font-bold mb-16">{t('businessAreas.title')}</h2>
       
       <nav className="space-y-6">
         {METIERS.map((metier) => (
           <Link 
             key={metier}
             href={`/metiers/${metier}`}
             className="block text-xl md:text-2xl font-light hover:translate-x-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
           >
             {t(`businessAreas.${metier}`)}
           </Link>
         ))}
       </nav>
     </div>

     {/* Right column */}
     <div className="bg-white p-8 md:p-16 flex items-center justify-center">
       <div className="relative w-full h-full">
         <Image
           src="/images/nos-metiers.webp"
           alt={t('businessAreas.imageAlt')}
           fill
           className="object-cover"
           sizes="(max-width: 768px) 100vw, 50vw"
           priority
         />
       </div>
     </div>
   </section>
 );
}