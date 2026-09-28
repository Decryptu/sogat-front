import { Award, Heart, Leaf, Lightbulb, Shield, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/ui/motion";

const values = [
  {
    id: 1,
    title: "L'Homme",
    description:
      "Les hommes, par leurs compétences, leur créativité, leur adaptabilité, et leur résilience, sont une valeur essentielle au cœur du succès et du développement du groupe SOGAT.",
    icon: Users,
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "L'innovation, en apportant de nouvelles idées, solutions et technologies, est essentielle pour améliorer la compétitivité et répondre aux défis de nos clients.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Qualité",
    description:
      "La qualité, en garantissant des standards élevés et une satisfaction continue des clients, est essentielle pour renforcer la réputation, la fidélité et le succès à long terme du Groupe SOGAT.",
    icon: Award,
  },
  {
    id: 4,
    title: "La Sécurité",
    description:
      "L'une de nos valeurs fondamentales, garantissant le bien-être de nos collaborateurs, et la pérennité de nos activités.",
    icon: Shield,
  },
  {
    id: 5,
    title: "RSE",
    description:
      "La Responsabilité Sociétale des Entreprises (RSE), en intégrant des préoccupations sociales, environnementales et économiques dans les activités commerciales, est essentielle pour promouvoir un développement durable et améliorer l'impact social.",
    icon: Leaf,
  },
  {
    id: 6,
    title: "Satisfaction",
    description:
      "La satisfaction client est au cœur de notre engagement, nous visons à dépasser les attentes en offrant des solutions de qualité, fiables et personnalisées.",
    icon: Heart,
  },
];

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-16">
        <SectionHeader
          title="Nos Valeurs"
          description="Six piliers fondamentaux qui guident notre action quotidienne"
        />

        <StaggerIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {values.map(({ id, title, description, icon: Icon }) => (
            <StaggerItem key={id} className="border-t border-foreground/15 pt-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-5xl md:text-6xl font-bold leading-none text-primary">
                  {String(id).padStart(2, "0")}
                </span>
                <Icon className="size-8 text-primary-light" strokeWidth={1.25} />
              </div>
              <h3 className="mb-3 text-lg md:text-xl font-semibold">{title}</h3>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
