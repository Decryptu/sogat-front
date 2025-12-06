import Image from "next/image";

export default function Hero({ title, description, imageAlt }) {
 return (
   <div className="w-full bg-background">
     <div className="grid lg:grid-cols-2 items-center">
       <div className="px-4 lg:px-16 py-16 space-y-6">
         <h1 className="text-5xl xl:text-7xl font-black text-gray-900">
           {title}
         </h1>
         <p className="font-light text-gray-600">
           {description}
         </p>
       </div>
       <div className="relative w-full aspect-4/3 lg:aspect-square">
         <Image
           src="/images/groupe.webp"
           alt={imageAlt}
           fill
           priority 
           className="object-cover"
         />
       </div>
     </div>
   </div>
 );
}