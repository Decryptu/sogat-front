import Image from "next/image";

export default function HeroImageFrame({
  src,
  alt,
  priority = false,
  frameColor = "var(--color-muted)",
}) {
  return (
    <div
      className="relative w-full aspect-4/3 lg:aspect-square p-8 sm:p-10 lg:p-14"
      style={{ backgroundColor: frameColor }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
