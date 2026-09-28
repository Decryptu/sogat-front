import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TONES = {
	light:
		"border-white text-white bg-[image:linear-gradient(white,white)] hover:text-foreground",
	dark: "border-foreground text-foreground bg-[image:linear-gradient(var(--color-foreground),var(--color-foreground))] hover:text-background",
};

export default function CtaLink({ href, children, tone = "dark", className }) {
	return (
		<Link
			href={href}
			className={cn(
				"group inline-flex w-fit items-center gap-6 border px-9 py-5 text-base bg-no-repeat bg-[length:0%_100%] bg-[position:0_0] transition-[background-size,color] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:bg-[length:100%_100%]",
				TONES[tone],
				className,
			)}
		>
			{children}
			<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
		</Link>
	);
}
