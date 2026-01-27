import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Metiers from "@/components/home/Metiers";
import CTA from "@/components/home/CTA";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations("home");

	return {
		title: t("hero.title"),
		description: t("hero.description"),
	};
}

export function generateStaticParams() {
	return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations("home");

	return (
		<>
			<Hero t={t} />
			<Expertise t={t} />
			<Metiers t={t} />
			<CTA />
		</>
	);
}
