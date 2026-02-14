"use client";

import { Sparkles, ArrowRight, Crosshair, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

export default function References() {
	const t = useTranslations("metiersPage");
	const valueCards = [
		{ icon: Sparkles, key: "solutions", number: "01" },
		{ icon: ArrowRight, key: "project", number: "02" },
		{ icon: Crosshair, key: "results", number: "03" },
		{ icon: Globe, key: "services", number: "04" },
	];

	return (
		<section className="relative bg-gray-50 overflow-hidden py-32 px-4 sm:px-8 lg:px-16">
			{/* Subtle grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.4]"
				style={{
					backgroundImage:
						"linear-gradient(rgb(229 231 235) 1px, transparent 1px), linear-gradient(90deg, rgb(229 231 235) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			{/* Gradient glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="container mx-auto px-16 relative">
				<FadeIn className="mb-24">
					<h2 className="text-5xl font-black">
						{t("references.title")}
					</h2>
				</FadeIn>

				<StaggerIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-gray-200">
					{valueCards.map((card) => {
						const Icon = card.icon;
						return (
							<StaggerItem key={card.key}>
								<div className="group relative bg-white p-8 lg:p-10 h-full flex flex-col transition-colors duration-500 hover:bg-gray-50/80">
									{/* Top row: number + icon */}
									<div className="flex items-center justify-between mb-8">
										<span className="text-xs font-mono text-gray-300 tracking-wider">
											{card.number}
										</span>
										<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-500">
											<Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
										</div>
									</div>

									{/* Text */}
									<p className="text-[15px] leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors duration-500 flex-1">
										{t(`references.${card.key}`)}
									</p>

									{/* Bottom accent line */}
									<div className="mt-8 h-px w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700 ease-out" />
								</div>
							</StaggerItem>
						);
					})}
				</StaggerIn>
			</div>
		</section>
	);
}
