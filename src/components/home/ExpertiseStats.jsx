"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCounting(true);
    }
  }, [isInView]);

  return (
    <div
      ref={statsRef}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {STATS.map(({ icon, value, textValue, label, suffix, isYear }, index) => (
        <div
          key={label}
          className="relative"
          style={{
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          <Image
            src={icon}
            alt={t(`${label}.label`)}
            width={40}
            height={40}
            className="h-10 w-10 mb-4 object-contain"
          />
          {textValue ? (
            <div className="text-5xl font-light text-primary">
              {t(`${textValue}.value`)}
            </div>
          ) : (
            <div className="text-5xl font-light text-primary">
              {startCounting ? (
                <CountUp
                  start={0}
                  end={value}
                  duration={2.5}
                  separator={isYear ? "" : " "}
                  suffix={suffix || ""}
                />
              ) : (
                <span>0{suffix || ""}</span>
              )}
            </div>
          )}
          <p className="text-sm text-gray-600 uppercase mt-2">{t(`${label}.label`)}</p>
        </div>
      ))}
    </div>
  );
}
