import { cn } from "@/lib/utils";

export default function SectionHeader({
	eyebrow,
	title,
	description,
	tone = "dark",
	className,
}) {
	const light = tone === "light";

	return (
		<div className={cn("flex flex-col gap-6 mb-12 md:mb-16", className)}>
			{eyebrow && (
				<p
					className={cn(
						"flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]",
						light ? "text-white/70" : "text-primary",
					)}
				>
					<span className="size-2 rounded-full bg-current" />
					{eyebrow}
				</p>
			)}
			<h2
				className={cn(
					"max-w-4xl text-4xl md:text-6xl font-bold",
					light && "text-white",
				)}
			>
				{title}
			</h2>
			{description && (
				<p
					className={cn(
						"max-w-2xl text-lg leading-relaxed",
						light ? "text-white/70" : "text-muted-foreground",
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
