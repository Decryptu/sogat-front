"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ locale }) {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		const newLocale = locale === "fr" ? "en" : "fr";
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};

	const label = locale === "fr" ? "EN" : "FR";

	return (
		<Button onClick={handleClick} variant="secondary" className="font-medium gap-2">
			<Globe className="h-4 w-4" />
			{label}
		</Button>
	);
}
