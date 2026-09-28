import HeroParallax from "./HeroParallax";
import CtaLink from "@/components/ui/CtaLink";

export default function Hero({ t }) {
	return (
		<div className="flex flex-col w-full">
			<section className="w-full bg-dark flex items-center pt-40 pb-20 md:min-h-[85vh] md:pt-48 md:pb-28">
				<div className="container mx-auto px-6 md:px-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
						<h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white">
							{t("hero.title")}
						</h1>

						<div className="flex flex-col gap-10 md:max-w-md">
							<p className="flex gap-4 text-lg text-white/85 leading-relaxed">
								<span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-white" />
								{t("hero.description")}
							</p>
							<CtaLink href="/groupe" tone="light">
								{t("hero.cta")}
							</CtaLink>
						</div>
					</div>
				</div>
			</section>

			<HeroParallax />
		</div>
	);
}
