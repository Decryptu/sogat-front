"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
	const currentY = useRef(0);
	const targetY = useRef(0);
	const rafId = useRef(null);
	const isRunning = useRef(false);

	useEffect(() => {
		// Only apply on non-touch devices (wheel scroll)
		const isTouchDevice =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;
		if (isTouchDevice) return;

		const lerp = (start, end, factor) => start + (end - start) * factor;

		const animate = () => {
			currentY.current = lerp(currentY.current, targetY.current, 0.12);

			// Stop animating when close enough
			if (Math.abs(currentY.current - targetY.current) < 0.5) {
				currentY.current = targetY.current;
				isRunning.current = false;
				rafId.current = null;
				return;
			}

			window.scrollTo(0, currentY.current);
			rafId.current = requestAnimationFrame(animate);
		};

		const startAnimation = () => {
			if (!isRunning.current) {
				isRunning.current = true;
				rafId.current = requestAnimationFrame(animate);
			}
		};

		const handleWheel = (e) => {
			e.preventDefault();

			// Sync current position in case native scroll happened
			currentY.current = window.scrollY;

			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			targetY.current = Math.max(
				0,
				Math.min(targetY.current + e.deltaY, maxScroll),
			);

			startAnimation();
		};

		// Sync on native scroll (keyboard, scrollbar drag, etc.)
		const handleScroll = () => {
			if (!isRunning.current) {
				currentY.current = window.scrollY;
				targetY.current = window.scrollY;
			}
		};

		// Initialize positions
		currentY.current = window.scrollY;
		targetY.current = window.scrollY;

		window.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("scroll", handleScroll);
			if (rafId.current) cancelAnimationFrame(rafId.current);
		};
	}, []);

	return children;
}
