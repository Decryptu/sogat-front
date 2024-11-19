"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroParallax() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden border-t-4 border-blue-600">
			<div
				className="absolute inset-0 h-[130%]"
				style={{
					transform: `translateY(${-scrollY * 0.3}px)`,
					willChange: "transform",
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
