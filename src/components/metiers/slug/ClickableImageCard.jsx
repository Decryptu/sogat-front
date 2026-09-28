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
    <div>
      <button
        type="button"
        disabled={!hasContent}
        aria-expanded={hasContent ? showDescription : undefined}
        onClick={() => setShowDescription(!showDescription)}
        className="group block w-full cursor-pointer text-left disabled:cursor-default"
      >
        <span
          className={`relative block ${aspectRatio} overflow-hidden mb-4 bg-gray-100`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </span>
        {title && (
          <span className="block text-lg font-semibold text-gray-900 mb-2">
            {title}
          </span>
        )}
      </button>
      {hasContent && showDescription && (
        <div className="text-gray-600 text-sm leading-relaxed animate-in fade-in duration-300">
          {description && <p>{description}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
