import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Metiers from "@/components/home/Metiers";
import CTA from "@/components/home/CTA";
import IntroAnimation from "@/components/home/IntroAnimation";

export async function generateMetadata() {
	const t = await getTranslations("home");

	return {
		title: t("hero.title"),
		description: t("hero.description"),
	};
}

export default async function Home() {
	const t = await getTranslations("home");

	return (
		<>
			<IntroAnimation />
			<Hero t={t} />
			<Expertise t={t} />
			<Metiers t={t} />
			<CTA />
		</>
	);
}
