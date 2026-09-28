import { Building2, Cog, Construction, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/ui/motion";

const ICONS = {
  engineering: Cog,
  project: Building2,
  manufacturing: Wrench,
  installation: Construction,
};

export default function Solutions({ subtitle, title, items }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <SectionHeader eyebrow={subtitle} title={title} />

        <StaggerIn className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14" stagger={0.1}>
          {items.map(({ key, title: itemTitle, description }) => {
            const Icon = ICONS[key];
            return (
              <StaggerItem
                key={key}
                className="border-t border-foreground/15 pt-6 transition-colors duration-300 hover:border-primary"
              >
                <Icon className="mb-8 size-10 text-primary" strokeWidth={1} />
                <h3 className="mb-3 text-lg md:text-xl font-semibold">{itemTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </StaggerItem>
            );
          })}
        </StaggerIn>
      </div>
    </section>
  );
}
