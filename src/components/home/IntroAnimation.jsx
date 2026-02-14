"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.76, 0, 0.24, 1]; // cubic-bezier for smooth, modern feel
const TOTAL_DURATION = 2000; // ms before overlay is fully gone

export default function IntroAnimation() {
	const [phase, setPhase] = useState("logo"); // logo → reveal → done
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Phase 1: Logo appears immediately via framer-motion
		// Phase 2: After logo settles, start reveal
		const revealTimer = setTimeout(() => setPhase("reveal"), 1200);
		// Phase 3: Remove from DOM entirely
		const doneTimer = setTimeout(() => {
			setIsVisible(false);
			setPhase("done");
		}, TOTAL_DURATION);

		return () => {
			clearTimeout(revealTimer);
			clearTimeout(doneTimer);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<AnimatePresence>
			{phase !== "done" && (
				<motion.div
					key="intro-overlay"
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
					initial={{ y: 0 }}
					animate={
						phase === "reveal"
							? { y: "-100%" }
							: { y: 0 }
					}
					transition={
						phase === "reveal"
							? { duration: 0.8, ease: EASE }
							: {}
					}
				>
					{/* Subtle grid / texture overlay for depth */}
					<div
						className="absolute inset-0 opacity-[0.03]"
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
							backgroundSize: "60px 60px",
						}}
					/>

					{/* Logo + line group */}
					<div className="relative flex flex-col items-center gap-6">
						{/* Logo */}
						<motion.div
							initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
							animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
						>
							<Image
								src="/images/sogat-white.webp"
								alt="SOGAT"
								width={160}
								height={53}
								priority
								className="w-36 md:w-44 h-auto"
							/>
						</motion.div>

						{/* Expanding line */}
						<motion.div
							className="h-px bg-white/40"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "8rem", opacity: 1 }}
							transition={{
								duration: 0.6,
								ease: EASE,
								delay: 0.5,
							}}
						/>
					</div>

					{/* Corner accent — bottom-right */}
					<motion.div
						className="absolute bottom-8 right-8 h-px bg-white/20"
						initial={{ width: 0 }}
						animate={{ width: "3rem" }}
						transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
					/>
					<motion.div
						className="absolute bottom-8 right-8 w-px bg-white/20"
						initial={{ height: 0 }}
						animate={{ height: "3rem" }}
						transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
