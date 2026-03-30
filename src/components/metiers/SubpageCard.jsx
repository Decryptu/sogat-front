import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function SubpageCard({
  href,
  src,
  alt,
  title,
  aspectRatio = "aspect-[4/3]",
}) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative ${aspectRatio} rounded-xl overflow-hidden mb-4 bg-gray-100`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
      )}
    </Link>
  );
}
