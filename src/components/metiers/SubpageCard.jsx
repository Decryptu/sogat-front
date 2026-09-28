import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { METIER_COLORS } from "@/constants/metier-colors";

export default function SubpageCard({
  href,
  src,
  alt,
  title,
  aspectRatio = "aspect-[4/3]",
}) {
  const color = METIER_COLORS[href.split("/")[2]];

  return (
    <Link href={href} className="group block">
      <div
        className={`relative ${aspectRatio} overflow-hidden mb-5 bg-background ${color ? "border-t-4" : ""}`}
        style={color ? { borderColor: color } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {title && (
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg md:text-xl font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      )}
    </Link>
  );
}
