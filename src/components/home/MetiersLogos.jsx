import { METIERS } from "@/constants/metiers";
import Image from "next/image";
import Link from "next/link";

export default function MetiersLogos() {
  return (
    <section className="bg-gray-900 border-b border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {METIERS.map((name) => (
            <Link 
              key={name} 
              href={`/metiers/${name}`}
              className="relative h-12 transition-all duration-300 hover:opacity-100 opacity-50 [filter:brightness(5)_grayscale(1)] hover:[filter:brightness(1)_grayscale(0)]"
            >
              <Image
                src={`/images/metiers/logo-${name}-full.webp`}
                alt={name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}