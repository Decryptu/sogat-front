export default function PageHero({ eyebrow, title, description, children }) {
	return (
		<section className="w-full bg-background pt-36 pb-16 md:pt-44 md:pb-24">
			<div className="container mx-auto px-6 md:px-16 grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
				<div className="flex flex-col gap-8">
					{eyebrow && (
						<p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
							<span className="size-2 rounded-full bg-current" />
							{eyebrow}
						</p>
					)}
					<h1 className="text-5xl md:text-7xl xl:text-8xl font-bold">
						{title}
					</h1>
					{children && description && (
						<p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
							{description}
						</p>
					)}
				</div>

				{children ?? (
					<p className="flex gap-4 max-w-md text-lg text-muted-foreground leading-relaxed">
						<span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-primary" />
						{description}
					</p>
				)}
			</div>
		</section>
	);
}
