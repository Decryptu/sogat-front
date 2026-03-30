import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function SubpageLayout({
  metierSlug,
  metierTitle,
  metierColor,
  subpageTitle,
  heroImage,
  locale,
  children,
}) {
  return (
    <div className="w-full">
      {/* Back navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-4">
          <Link
            href={`/metiers/${metierSlug}`}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>
              {locale === "fr" ? "Retour à" : "Back to"} {metierTitle}
            </span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="space-y-4 px-4 md:px-16 py-12">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: metierColor }}
            >
              {metierTitle}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {subpageTitle}
            </h1>
          </div>
          {heroImage && (
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
              <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: metierColor }}
              />
              <Image
                src={heroImage}
                alt={subpageTitle}
                fill
                className="object-cover relative z-10"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      {children}

      {/* Bottom back navigation */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href={`/metiers/${metierSlug}`}
            className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80 transition-opacity"
            style={{ color: metierColor }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {locale === "fr"
              ? `Voir tous les équipements ${metierTitle}`
              : `See all ${metierTitle} equipment`}
          </Link>
        </div>
      </section>
    </div>
  );
}
