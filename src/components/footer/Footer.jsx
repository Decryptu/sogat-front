import LanguageSwitcher from "@/components/language-switcher/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { METIERS } from "@/constants/metiers";
import MetiersLogos from "@/components/home/MetiersLogos";

export default function Footer() {
	const t = useTranslations("footer");
	const metierT = useTranslations("home.businessAreas");
	const contactT = useTranslations("contact.location");
	const locale = useLocale();

	return (
		<footer className="bg-gray-900 text-white">
			<MetiersLogos />
			<div className="container py-12 mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<div className="h-8 w-32 mb-4">
							<Image
								src="/images/sogat-white.webp"
								alt="Sogat"
								width={100}
								height={32}
								className="w-[100px] h-8 object-contain" // Fixed dimensions
							/>
						</div>
						<p className="text-gray-400 mb-4">{t("description")}</p>
						<div className="space-y-2">
							<a
								href={`mailto:${contactT("email")}`}
								className="flex items-center gap-2 text-gray-400 hover:text-white"
							>
								<Mail className="w-4 h-4" />
								<span className="text-sm">{contactT("email")}</span>
							</a>
							<a
								href={contactT("linkedin")}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-gray-400 hover:text-white"
							>
								<Linkedin className="w-4 h-4" />
								<span className="text-sm">LinkedIn</span>
							</a>
						</div>
					</div>

					<div>
						<h3 className="font-semibold mb-4">{t("sections.services")}</h3>
						<ul className="space-y-2">
							{METIERS.map((metier) => (
								<li key={metier}>
									<Link
										href={`/metiers/${metier}`}
										className="text-gray-400 hover:text-white"
									>
										{metierT(metier)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">{t("sections.company")}</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/groupe" className="text-gray-400 hover:text-white">
									{t("sections.about")}
								</Link>
							</li>
							<li>
								<Link
									href="/metiers"
									className="text-gray-400 hover:text-white"
								>
									{t("sections.careers")}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-400 hover:text-white"
								>
									{t("sections.contact")}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">{t("sections.language")}</h3>
						<LanguageSwitcher locale={locale} />
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Sogat. {t("rights")}
					</p>
				</div>
			</div>
		</footer>
	);
}
