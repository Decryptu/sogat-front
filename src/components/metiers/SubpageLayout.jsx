import { Link } from "@/i18n/routing";

export default function SubpageLayout({
  metierSlug,
  metierTitle,
  metierColor,
  subpageTitle,
  locale,
  children,
}) {
  return (
    <div className="w-full">
      {/* Header band */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-16 pt-6 pb-12 md:pt-8 md:pb-16">
          {/* Back link */}
          <Link
            href={`/metiers/${metierSlug}`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
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

          {/* Title area */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-1 rounded-full"
              style={{ backgroundColor: metierColor }}
            />
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: metierColor }}
            >
              {metierTitle}
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {subpageTitle}
          </h1>
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
