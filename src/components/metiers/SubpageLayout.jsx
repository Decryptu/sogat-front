import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SubpageLayout({
  metierSlug,
  metierTitle,
  metierColor,
  subpageTitle,
  locale,
  children,
}) {
  const isFr = locale === "fr";
  const backHref = `/metiers/${metierSlug}`;

  return (
    <div className="w-full" style={{ "--metier": metierColor }}>
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container mx-auto px-6 md:px-16">
          <Link
            href={backHref}
            className="group mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:mb-16"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {isFr ? "Retour à" : "Back to"} {metierTitle}
          </Link>

          <p className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-(--metier)">
            <span className="size-2 rounded-full bg-current" />
            {metierTitle}
          </p>
          <h1 className="max-w-5xl text-5xl md:text-7xl font-bold">
            {subpageTitle}
          </h1>
        </div>
      </section>

      {children}

      <section className="border-t-4 border-(--metier) bg-background py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-16">
          <Link
            href={backHref}
            className="group inline-flex items-center gap-4 text-xl md:text-2xl font-semibold transition-colors hover:text-(--metier)"
          >
            <ArrowLeft className="size-6 transition-transform duration-300 group-hover:-translate-x-1" />
            {isFr
              ? `Voir tous les équipements ${metierTitle}`
              : `See all ${metierTitle} equipment`}
          </Link>
        </div>
      </section>
    </div>
  );
}
