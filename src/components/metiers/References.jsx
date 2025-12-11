import { Lightbulb, ClipboardList, Target, Handshake } from "lucide-react";

export default function References({ t }) {
	const valueCards = [
		{
			icon: Lightbulb,
			key: "solutions"
		},
		{
			icon: ClipboardList,
			key: "project"
		},
		{
			icon: Target,
			key: "results"
		},
		{
			icon: Handshake,
			key: "services"
		}
	];

	return (
		<section className="bg-slate-700 px-4 sm:px-8 lg:px-16 py-32">
			<div className="container mx-auto">
				{/* Title */}
				<div className="max-w-3xl mb-16">
					<h2 className="text-4xl font-bold text-white mb-6">
						{t("references.title")}
					</h2>
				</div>

				{/* Value Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{valueCards.map((card) => {
						const Icon = card.icon;
						return (
							<div
								key={card.key}
								className="bg-slate-600/50 p-8 rounded-lg hover:bg-slate-600 transition-colors duration-300"
							>
								<div className="mb-6">
									<Icon className="w-12 h-12 text-blue-400" />
								</div>
								<p className="text-gray-200 text-base leading-relaxed">
									{t(`references.${card.key}`)}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
