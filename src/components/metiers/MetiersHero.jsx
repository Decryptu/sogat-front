import Image from "next/image";

export default function MetiersHero({ t }) {
	return (
		// Removed container class and padding/margin
		<div className="w-full">
			<div className="grid lg:grid-cols-2 items-center">
				<div className="space-y-6 px-4 md:px-16 py-12">
					<h1 className="text-4xl lg:text-6xl font-bold">{t("hero.title")}</h1>
					<p className="text-lg lg:text-xl text-gray-700">
						{t("hero.description")}
					</p>
				</div>
				<div className="relative w-full aspect-4/3 lg:aspect-square">
					<Image
						src="/images/nos-metiers.webp"
						alt={t("hero.imageAlt")}
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
