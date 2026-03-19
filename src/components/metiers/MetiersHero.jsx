"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/motion";
import HeroImageFrame from "@/components/ui/HeroImageFrame";

export default function MetiersHero() {
	const t = useTranslations("metiersPage");
	return (
		<div className="w-full">
			<div className="grid lg:grid-cols-2 items-center">
				<div className="space-y-6 px-4 md:px-16 py-12">
					<FadeIn>
						<h1 className="text-4xl lg:text-6xl font-bold">{t("hero.title")}</h1>
					</FadeIn>
					<FadeIn delay={0.12}>
						<p className="text-lg lg:text-xl text-gray-700">
							{t("hero.description")}
						</p>
					</FadeIn>
				</div>
				<FadeIn y={0} x={30} delay={0.1}>
					<HeroImageFrame
						src="/images/nos-metiers.webp"
						alt={t("hero.imageAlt")}
						priority
					/>
				</FadeIn>
			</div>
		</div>
	);
}
