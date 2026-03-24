"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroImageFrame({
  src,
  images,
  alt,
  priority = false,
  frameColor = "var(--color-muted)",
  interval = 4000,
}) {
  const srcs = images || [src];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (srcs.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % srcs.length);
    }, interval);
    return () => clearInterval(timer);
  }, [srcs.length, interval]);

  return (
    <div
      className="relative w-full aspect-4/3 lg:aspect-square p-8 sm:p-10 lg:p-14"
      style={{ backgroundColor: frameColor }}
    >
      <div className="relative h-full w-full overflow-hidden">
        {srcs.map((imgSrc, i) => (
          <Image
            key={imgSrc}
            src={imgSrc}
            alt={alt}
            fill
            priority={priority && i === 0}
            className={`object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
