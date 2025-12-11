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

export default function NavigationMenu({ locale }) {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("navigation");
	const pathname = usePathname();

	const handleNavigationClose = () => {
		setIsOpen(false);
	};

	// Check if we're on the root path
	const isRootPath = pathname === `/${locale}` || pathname === "/";

	// Dynamic styles based on path
	const styles = {
		logo: isRootPath ? "/images/sogat-white.webp" : "/images/sogat-blue.webp",
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
						<Link href={`/${locale}`} className="w-32">
							<Image
								src={styles.logo}
								alt="Logo"
								width={120}
								height={40}
								priority
								className="object-contain w-[120px] h-10"
							/>
						</Link>
					</div>

					{/* Empty middle section - just for border */}
					<div
						className={`border-l md:border-x ${styles.border} w-8 md:w-96`}
					/>

					{/* Menu trigger section */}
					<div className="flex cursor-pointer justify-end px-6 md:px-12 items-center">
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
