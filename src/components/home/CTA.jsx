import { Button } from "@/components/ui/button";

export default function CTA({ t }) {
	return (
		<section className="bg-blue-600 text-white py-20">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					{t("cta.title")}
				</h2>
				<p className="text-xl mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
				<Button size="lg" variant="secondary" className="font-semibold">
					{t("cta.button")}
				</Button>
			</div>
		</section>
	);
}
