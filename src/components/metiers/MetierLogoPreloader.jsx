"use client";

import { useEffect } from "react";
import { METIERS } from "@/constants/metiers";

export default function MetierLogoPreloader() {
	useEffect(() => {
		METIERS.forEach((slug) => {
			const img = new window.Image();
			img.src = `/images/metiers/logo-${slug}-white.webp`;
		});
	}, []);

	return null;
}
