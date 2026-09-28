"use client";

import { Sparkles, ArrowRight, Crosshair, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

const VALUE_CARDS = [
	{ icon: Sparkles, key: "solutions", number: "01" },
	{ icon: ArrowRight, key: "project", number: "02" },
	{ icon: Crosshair, key: "results", number: "03" },
	{ icon: Globe, key: "services", number: "04" },
];

export default function References() {
	const t = useTranslations("metiersPage");

	return (
		<section className="bg-background py-20 md:py-28">
			<div className="container mx-auto px-6 md:px-16">
				<FadeIn>
					<SectionHeader title={t("references.title")} />
				</FadeIn>

				<StaggerIn className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-foreground/10">
					{VALUE_CARDS.map(({ icon: Icon, key, number }) => (
						<StaggerItem
							key={key}
							className="border-r border-b border-foreground/10"
						>
							<div className="group relative flex h-full flex-col gap-10 p-8 md:p-10 transition-colors duration-500 hover:bg-white">
								<span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-light transition-transform duration-500 group-hover:scale-x-100" />
								<div className="flex items-center justify-between">
									<span className="font-display text-4xl font-bold leading-none text-primary">
										{number}
									</span>
									<Icon
										className="size-5 text-muted-foreground transition-colors duration-500 group-hover:text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-lg text-muted-foreground leading-relaxed">
									{t(`references.${key}`)}
								</p>
							</div>
						</StaggerItem>
					))}
				</StaggerIn>
			</div>
		</section>
	);
}
