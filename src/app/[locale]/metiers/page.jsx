import MetiersHero from "@/components/metiers/MetiersHero";
import MetiersGrid from "@/components/metiers/MetiersGrid";
import References from "@/components/metiers/References";
import MetierLogoPreloader from "@/components/metiers/MetierLogoPreloader";

export default function Metiers() {
	return (
		// Removed main tag as it's adding default margins
		<div className="w-full">
			<MetierLogoPreloader />
			<MetiersHero />
			<MetiersGrid />
			<References />
		</div>
	);
}
