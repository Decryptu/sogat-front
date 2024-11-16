import { useTranslations } from "next-intl";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { motion } from "framer-motion";
import { NAVIGATION_LINKS, NAVIGATION_STYLES } from "@/constants/navigation";
import { usePathname } from "next/navigation";

const ANIMATION_CONFIG = {
	duration: 0.5,
	ease: [0.22, 1, 0.36, 1],
};

const AnimatedNavLink = ({ href, children, onClick }) => (
	<Link
		href={href}
		onClick={onClick}
		className="group relative flex items-center gap-4 w-fit"
	>
		{/* Text content */}
		<span className="block text-4xl md:text-6xl font-bold transition-all duration-300 ease-out group-hover:translate-x-4">
			{children}
		</span>

		{/* Arrow icon */}
		<ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
	</Link>
);

// Rest of the component remains the same
export default function NavigationContent({ onClose, locale }) {
	const t = useTranslations("navigation");
	const pathname = usePathname();

	const getCurrentStyle = () => {
		const pathSegments = pathname.split("/");
		const metiersIndex = pathSegments.findIndex(
			(segment) => segment === "metiers",
		);

		if (metiersIndex !== -1 && pathSegments[metiersIndex + 1]) {
			const subPath = pathSegments[metiersIndex + 1];
			return NAVIGATION_STYLES[subPath] || NAVIGATION_STYLES.default;
		}

		return NAVIGATION_STYLES.default;
	};

	const currentStyle = getCurrentStyle();
	const backgroundStyle = {
		backgroundColor: `hsl(var(${currentStyle.cssVariable}))`,
	};

	return (
		<motion.div
			initial={{ height: 0 }}
			animate={{ height: "100%" }}
			exit={{ height: 0 }}
			transition={ANIMATION_CONFIG}
			className="fixed inset-x-0 top-0 z-50 overflow-hidden"
			style={backgroundStyle}
		>
			<div className="flex h-full">
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					exit={{ y: "-100%" }}
					transition={ANIMATION_CONFIG}
					className="relative hidden md:block w-1/2 h-full"
				>
					<Image
						src={currentStyle.image}
						alt="Navigation background"
						fill
						className="object-cover"
						priority={true}
					/>
					<div className="absolute top-8 left-8">
						<Link href={`/${locale}`}>
							<Image
								src="/images/sogat-white.webp"
								alt="Logo"
								width={120}
								height={40}
								className="object-contain"
							/>
						</Link>
					</div>
				</motion.div>

				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					exit={{ y: "-100%" }}
					transition={ANIMATION_CONFIG}
					className="w-full md:w-1/2 p-8 md:p-16 flex flex-col"
				>
					<div className="flex justify-end mb-8">
						<Button
							variant="ghost"
							size="icon"
							onClick={onClose}
							className="text-white hover:bg-white/20"
							aria-label={t("close")}
						>
							<X className="h-8 w-8" />
						</Button>
					</div>

					<nav className="flex-1">
						<ul className="space-y-6 text-white">
							{NAVIGATION_LINKS.map(({ key, path }, index) => (
								<motion.li
									key={key}
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -20, opacity: 0 }}
									transition={{
										...ANIMATION_CONFIG,
										delay: 0.1 * index,
									}}
								>
									<AnimatedNavLink href={`/${locale}${path}`} onClick={onClose}>
										{t(key)}
									</AnimatedNavLink>
								</motion.li>
							))}
						</ul>
					</nav>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={ANIMATION_CONFIG}
						className="mt-auto flex flex-col space-y-4 text-white"
					>
						<Link
							href={`/${locale}/personal`}
							className="text-sm hover:text-white/80 transition-colors"
							onClick={onClose}
						>
							{t("personalSpace")}
						</Link>
						<div className="flex justify-between items-center">
							<Link
								href={`/${locale}/legal`}
								className="text-sm hover:text-white/80 transition-colors"
								onClick={onClose}
							>
								{t("legalNotice")}
							</Link>
							<LanguageSwitcher locale={locale} />
						</div>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}
