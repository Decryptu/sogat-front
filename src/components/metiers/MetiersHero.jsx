import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/motion";
import HeroImageFrame from "@/components/ui/HeroImageFrame";
import PageHero from "@/components/ui/PageHero";

export default function MetiersHero() {
	const t = useTranslations("metiersPage");
	return (
		<PageHero title={t("hero.title")} description={t("hero.description")}>
			<FadeIn y={0} x={30} delay={0.1}>
				<HeroImageFrame
					src="/images/nos-metiers.webp"
					alt={t("hero.imageAlt")}
					priority
				/>
			</FadeIn>
		</PageHero>
	);
}
