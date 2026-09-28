import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/ui/motion";

const hierarchyData = {
  parent: {
    logo: "/images/groupe/sogat_groupe.png",
    name: "SOGAT Groupe",
  },
  children: [
    {
      logo: "/images/groupe/tracip_groupe.png",
      name: "TRACIP",
      subsidiaries: [
        { logo: "/images/metiers/logo-tracip-environnement-full.webp", name: "TRACIP Environnement" },
        { logo: "/images/metiers/logo-tracip-mecano-soudure-full.webp", name: "TRACIP Mécano-Soudure" },
        { logo: "/images/metiers/logo-iserco-full.webp", name: "ISERCO" },
        { logo: "/images/metiers/logo-haquette-full.webp", name: "HAQUETTE" },
      ],
    },
    {
      logo: "/images/groupe/sp2i_groupe.png",
      name: "SP2I",
      subsidiaries: [
        { logo: "/images/metiers/logo-sp2i-ferroviaire-full.webp", name: "SP2I Ferroviaire" },
        { logo: "/images/metiers/logo-sp2i-prehension-full.webp", name: "SP2I Préhension" },
      ],
    },
    {
      logo: "/images/groupe/aretec_groupe.png",
      name: "ARETEC",
      subsidiaries: [
        { logo: "/images/metiers/logo-aretec-full.webp", name: "ARETEC" },
      ],
    },
    {
      logo: "/images/groupe/sermas_groupe.png",
      name: "SERMAS",
      subsidiaries: [
        { logo: "/images/metiers/logo-sermas-full.webp", name: "SERMAS" },
      ],
    },
    {
      logo: "/images/groupe/mc2_groupe.png",
      name: "MC2 Maintenance",
      subsidiaries: [
        { logo: "/images/metiers/logo-mc2-maintenance-full.webp", name: "MC2 Maintenance" },
      ],
    },
  ],
};

export default function GroupeHierarchy() {
  const { parent, children } = hierarchyData;

  return (
    <section className="py-20 md:py-28 bg-dark text-white">
      <div className="container mx-auto px-6 md:px-16">
        <SectionHeader
          tone="light"
          title="Structure du Groupe"
          description="Un groupe industriel structuré autour de filiales complémentaires"
        />

        <div className="flex flex-col items-center">
          <div className="border border-white/15 border-t-4 border-t-primary-light px-10 py-8">
            <Image
              src={parent.logo}
              alt={parent.name}
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </div>
          <span className="h-12 w-px bg-white/20" />
        </div>

        <StaggerIn className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <span className="absolute top-0 inset-x-[calc((100%_-_6rem)/10)] hidden h-px bg-white/20 lg:block" />
          {children.map((child) => (
            <StaggerItem key={child.name} className="flex flex-col items-center">
              <span className="hidden h-8 w-px bg-white/20 lg:block" />
              <div className="w-full border border-white/15 transition-colors duration-300 hover:border-white/40">
                <div className="flex h-24 items-center justify-center border-b border-white/15 p-6">
                  <Image
                    src={child.logo}
                    alt={child.name}
                    width={180}
                    height={60}
                    className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <ul className="divide-y divide-white/10">
                  {child.subsidiaries.map((subsidiary) => (
                    <li key={subsidiary.name} className="flex h-16 items-center justify-center px-4">
                      <Image
                        src={subsidiary.logo}
                        alt={subsidiary.name}
                        width={140}
                        height={40}
                        className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
