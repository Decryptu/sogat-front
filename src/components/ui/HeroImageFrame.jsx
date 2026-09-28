"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroImageFrame({
  src,
  images,
  alt,
  priority = false,
  frameColor = "var(--color-primary-light)",
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
      className="relative w-full aspect-4/3 overflow-hidden border-t-4"
      style={{ borderColor: frameColor }}
    >
      {srcs.map((imgSrc, i) => (
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority && i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
