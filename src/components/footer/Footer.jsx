import LanguageSwitcher from "@/components/language-switcher/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Linkedin from "@/components/ui/LinkedinIcon";
import { METIERS } from "@/constants/metiers";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import MetiersLogos from "@/components/home/MetiersLogos";

const LINK_CLASS = "text-white/60 transition-colors hover:text-white";

export default function Footer() {
	const t = useTranslations("footer");
	const navT = useTranslations("navigation");
	const metierT = useTranslations("home.businessAreas");
	const contactT = useTranslations("contact.location");
	const locale = useLocale();

	return (
		<footer className="bg-gray-900 text-white border-b-4 border-primary-light">
			<MetiersLogos />

			<div className="container mx-auto px-6 md:px-16 py-16 md:py-24 grid gap-16 md:grid-cols-2">
				<div className="flex flex-col items-start gap-8">
					<h2 className="text-5xl md:text-6xl font-bold">{t("question")}</h2>
					<Link
						href={`/${locale}/contact`}
						className="group inline-flex items-center gap-4 text-lg"
					>
						{t("contactCta")}
						<ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-10">
					<div>
						<h3 className="mb-6 text-white">{t("sections.pages")}</h3>
						<ul className="space-y-3">
							{NAVIGATION_LINKS.map(({ key, path }) => (
								<li key={key}>
									<Link
										href={`/${locale}${path}`}
										className={`inline-block lowercase first-letter:uppercase ${LINK_CLASS}`}
									>
										{navT(key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-6 text-white">{t("sections.services")}</h3>
						<ul className="space-y-3">
							{METIERS.map((metier) => (
								<li key={metier}>
									<Link
										href={`/${locale}/metiers/${metier}`}
										className={LINK_CLASS}
									>
										{metierT(metier)}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container mx-auto px-6 md:px-16 py-8 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between text-sm text-white/50">
					<p>
						&copy; {new Date().getFullYear()} Sogat. {t("rights")}
					</p>
					<div className="flex flex-wrap items-center gap-6">
						<a
							href={`mailto:${contactT("email")}`}
							className={`flex items-center gap-2 ${LINK_CLASS}`}
						>
							<Mail className="size-4" />
							{contactT("email")}
						</a>
						<a
							href={contactT("linkedin")}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className={LINK_CLASS}
						>
							<Linkedin className="size-5" />
						</a>
						<LanguageSwitcher locale={locale} />
					</div>
				</div>
			</div>
		</footer>
	);
}
