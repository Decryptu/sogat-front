import { preload } from "react-dom";
import { METIERS } from "@/constants/metiers";

export default function MetierLogoPreloader() {
	METIERS.forEach((slug) => {
		preload(`/images/metiers/logo-${slug}-white.webp`, {
			as: "image",
			type: "image/webp",
		});
	});

	return null;
}
