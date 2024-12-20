import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
	return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function Expertise({ params }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations("expertise");

	return (
		<div className="w-full">
			<div className="grid lg:grid-cols-2 items-center">
				<div className="space-y-6 px-4 md:px-16 py-12">
					<h1 className="text-4xl lg:text-6xl font-bold">{t("title")}</h1>
					<p className="text-lg lg:text-xl text-gray-700">{t("description")}</p>
				</div>
				<div className="relative w-full aspect-[4/3] lg:aspect-square">
					<Image
						src="/images/expertise.webp"
						alt={t("imageAlt")}
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
