"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LanguageSwitcher({ locale }) {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		const newLocale = locale === "fr" ? "en" : "fr";
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};

	const label = locale === "fr" ? "EN" : "FR";
	const flagSrc = locale === "fr" ? "/images/flags/en.svg" : "/images/flags/fr.svg";
	const flagAlt = locale === "fr" ? "English flag" : "French flag";

	return (
		<Button onClick={handleClick} variant="secondary" className="font-medium gap-2">
			<Image
				src={flagSrc}
				alt={flagAlt}
				width={16}
				height={16}
				className="h-4 w-4 shrink-0"
			/>
			{label}
		</Button>
	);
}
