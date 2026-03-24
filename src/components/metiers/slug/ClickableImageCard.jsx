"use client";

import Image from "next/image";
import { useState } from "react";

export default function ClickableImageCard({
  src,
  alt,
  title,
  description,
  children,
  aspectRatio = "aspect-[4/3]",
}) {
  const [showDescription, setShowDescription] = useState(false);
  const hasContent = description || children;

  return (
    <div
      className="group cursor-pointer"
      onClick={() => hasContent && setShowDescription(!showDescription)}
    >
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      )}
      {hasContent && showDescription && (
        <div className="text-gray-600 text-sm leading-relaxed animate-in fade-in duration-300">
          {description && <p>{description}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
