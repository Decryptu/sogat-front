"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NavigationContent from "./NavigationContent";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
	getMetierHeaderLogo,
	getMetierSlugFromPathname,
} from "@/constants/navigation";

export default function NavigationMenu({ locale }) {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("navigation");
	const pathname = usePathname();

	const handleNavigationClose = () => {
		setIsOpen(false);
	};

	const isRootPath = pathname === `/${locale}` || pathname === "/";
	const currentMetier = getMetierSlugFromPathname(pathname);

	const styles = {
		logo: isRootPath
			? "/images/sogat-white.webp"
			: currentMetier
				? getMetierHeaderLogo(currentMetier)
				: "/images/sogat-blue.webp",
		logoAlt: currentMetier ? `${currentMetier} logo` : "SOGAT logo",
		border: isRootPath ? "border-white/20" : "border-black/10",
		text: isRootPath ? "text-white" : "text-foreground",
	};

	return (
		<>
			<div className="absolute top-0 w-full z-50">
				<div
					className={`border-b ${styles.border} grid grid-cols-[1fr_auto_1fr] h-20 md:h-24`}
				>
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

					<div
						className={`border-l md:border-x ${styles.border} w-8 md:w-96`}
					/>

					<div className="flex justify-end md:justify-start px-6 md:px-12 items-center">
						<button
							type="button"
							onClick={() => setIsOpen(true)}
							aria-label={t("open")}
							aria-expanded={isOpen}
							className={`group flex cursor-pointer items-center gap-4 py-2 ${styles.text}`}
						>
							<span className="flex w-10 flex-col items-end gap-2">
								<span className="h-px w-full bg-current transition-[width] duration-300 group-hover:w-2/3" />
								<span className="h-px w-full bg-current" />
							</span>
							<span className="hidden sm:block font-display text-base font-bold uppercase tracking-wider">
								{t("menu")}
							</span>
						</button>
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
