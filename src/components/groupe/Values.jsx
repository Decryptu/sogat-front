import { Award, Heart, Leaf, Lightbulb, Shield, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/ui/motion";

const VALUES = [
  { key: "human", icon: Users },
  { key: "innovation", icon: Lightbulb },
  { key: "quality", icon: Award },
  { key: "safety", icon: Shield },
  { key: "csr", icon: Leaf },
  { key: "satisfaction", icon: Heart },
];

export default function Values() {
  const t = useTranslations("groupe.values");

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-16">
        <SectionHeader
          title={t("title")}
          description={t("description")}
        />

        <StaggerIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {VALUES.map(({ key, icon: Icon }, index) => (
            <StaggerItem key={key} className="border-t border-foreground/15 pt-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-5xl md:text-6xl font-bold leading-none text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-8 text-primary-light" strokeWidth={1.25} />
              </div>
              <h3 className="mb-3 text-lg md:text-xl font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
