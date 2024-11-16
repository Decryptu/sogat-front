import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import ExpertiseStats from "./ExpertiseStats";
import { Button } from "@/components/ui/button";

export default function Expertise() {
	const t = useTranslations("home.expertise");

	return (
		<section id="discover" className="relative overflow-hidden">
			<div className="bg-white py-4 text-center border-t border-b">
				<div className="flex items-center justify-center gap-4">
					<span className="h-1 w-12 bg-blue-600" />
					<h3 className="text-sm font-medium uppercase tracking-wider">
						{t("banner")}
					</h3>
					<span className="h-1 w-12 bg-red-600" />
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 md:py-24">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h2>
					<p className="text-lg text-gray-600">{t("subtitle")}</p>
				</div>

				<ExpertiseStats />

				<div className="text-center">
					<Button asChild variant="outline" size="lg">
						<Link href="/expertise" className="inline-flex items-center gap-2">
							{t("cta")}
							<ArrowRight className="h-4 w-4 stroke-[1.5]" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
