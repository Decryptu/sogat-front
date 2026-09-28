"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import Image from "next/image";

const STATS = [
  { icon: "/images/icons/clock.png", value: 1970, label: "yearFounded", isYear: true },
  { icon: "/images/icons/users.png", value: 120, label: "employees" },
  { icon: "/images/icons/building.png", value: 15000, label: "workshopArea", suffix: " m²" },
  { icon: "/images/icons/chart.png", value: 35, label: "revenue", suffix: " M€" },
  { icon: "/images/icons/network.png", value: 7, label: "entities" },
  { icon: "/images/icons/factory.png", textValue: "integratedProduction", label: "integratedProduction" },
  { icon: "/images/icons/briefcase.png", value: 4, label: "designOffices" },
  { icon: "/images/icons/globe.png", textValue: "exportPercentage", label: "exportPercentage" },
];

export default function ExpertiseStats() {
  const t = useTranslations("home.expertise.stats");
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={statsRef}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14"
    >
      {STATS.map(({ icon, value, textValue, label, suffix, isYear }, index) => (
        <div
          key={label}
          className="border-t border-foreground/15 pt-6"
          style={{
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          <Image
            src={icon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 mb-6 object-contain"
          />
          <div className="font-display text-5xl md:text-6xl font-bold leading-none text-primary">
            {textValue ? (
              t(`${textValue}.value`)
            ) : isInView ? (
              <CountUp
                start={0}
                end={value}
                duration={2.5}
                separator={isYear ? "" : " "}
                suffix={suffix ?? ""}
              />
            ) : (
              `0${suffix ?? ""}`
            )}
          </div>
          <p className="mt-3 text-sm text-muted-foreground uppercase tracking-wide">
            {t(`${label}.label`)}
          </p>
        </div>
      ))}
    </div>
  );
}
