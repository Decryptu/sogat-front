import { setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function ContactLayout({ children, params }) {
	const { locale } = await params;
	setRequestLocale(locale);
  
	return (
	  <>
		<link
		  rel="stylesheet"
		  href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
		  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		  crossOrigin=""
		/>
		<div className="w-full pt-20">
		  {children}
		</div>
	  </>
	);
  }