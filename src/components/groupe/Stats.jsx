export default function Stats({ stats }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {stats.map(({ key, value, label }) => (
          <div key={key} className="border-t border-foreground/15 pt-6">
            <p className="font-display text-5xl md:text-6xl font-bold leading-none text-primary">
              {value}
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
