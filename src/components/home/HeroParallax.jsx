"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function HeroParallax() {
	const innerRef = useRef(null);
	const rafId = useRef(null);

	const updateParallax = useCallback(() => {
		if (!innerRef.current) return;
		const offset = -window.scrollY * 0.3;
		innerRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);
			rafId.current = requestAnimationFrame(updateParallax);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		updateParallax();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId.current) cancelAnimationFrame(rafId.current);
		};
	}, [updateParallax]);

	return (
		<section className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden border-t-4 border-blue-600">
			<div
				ref={innerRef}
				className="absolute inset-0 h-[130%]"
				style={{
					willChange: "transform",
					backfaceVisibility: "hidden",
					transform: "translate3d(0, 0, 0)",
				}}
			>
				<Image
					src="/images/construction-hero.webp"
					alt="Construction site"
					fill
					priority={true}
					sizes="(max-width: 768px) 100vw, 100vw"
					className="object-cover"
					style={{
						objectPosition: "center 80%",
					}}
				/>
			</div>
		</section>
	);
}
