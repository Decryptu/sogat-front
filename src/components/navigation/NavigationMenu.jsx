"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationContent from "./NavigationContent";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { getMetierSlugFromPathname } from "@/constants/navigation";

export default function NavigationMenu({ locale }) {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("navigation");
	const pathname = usePathname();

	const handleNavigationClose = () => {
		setIsOpen(false);
	};

	// Check if we're on the root path
	const isRootPath = pathname === `/${locale}` || pathname === "/";
	const currentMetier = getMetierSlugFromPathname(pathname);

	// Dynamic styles based on path
	const styles = {
		logo: isRootPath
			? "/images/sogat-white.webp"
			: currentMetier
				? `/images/metiers/logo-${currentMetier}-full.webp`
				: "/images/sogat-blue.webp",
		logoAlt: currentMetier ? `${currentMetier} logo` : "SOGAT logo",
		border: isRootPath ? "border-white/20" : "border-black/20",
		buttonClass: isRootPath
			? "text-white hover:bg-white/20"
			: "text-black hover:bg-black/20",
	};

	return (
		<>
			<div className="absolute top-0 w-full z-50">
				<div
					className={`border-b ${styles.border} grid grid-cols-[1fr_auto_1fr] h-20`}
				>
					{/* Logo section */}
					<div className="px-6 md:px-12 flex items-center">
						<Link href={`/${locale}`} className="block w-fit">
							<Image
								src={styles.logo}
								alt={styles.logoAlt}
								width={160}
								height={48}
								priority
								className="object-contain h-10 w-auto max-w-[160px]"
							/>
						</Link>
					</div>

					{/* Empty middle section - just for border */}
					<div
						className={`border-l md:border-x ${styles.border} w-8 md:w-96`}
					/>

					{/* Menu trigger section */}
					<div className="flex justify-end px-6 md:px-12 items-center">
						<Button
							variant="ghost"
							size="icon"
							className={styles.buttonClass}
							onClick={() => setIsOpen(true)}
							aria-label={t("close")}
						>
							<Menu className="h-8 w-8" />
						</Button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<NavigationContent onClose={handleNavigationClose} locale={locale} />
				)}
			</AnimatePresence>
		</>
	);
}
