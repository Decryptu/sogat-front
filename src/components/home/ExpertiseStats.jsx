"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { Clock, Users, Building2, TrendingUp, Network, Factory, Briefcase, Globe } from "lucide-react";

const STATS = [
  { icon: Clock, value: 1970, label: "yearFounded", isYear: true },
  { icon: Users, value: 120, label: "employees" },
  { icon: Building2, value: 15000, label: "workshopArea", suffix: " m²" },
  { icon: TrendingUp, value: 35, label: "revenue", suffix: " M€" },
  { icon: Network, value: 7, label: "entities" },
  { icon: Factory, textValue: "integratedProduction", label: "integratedProduction" },
  { icon: Briefcase, value: 4, label: "designOffices" },
  { icon: Globe, textValue: "exportPercentage", label: "exportPercentage" },
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
      {STATS.map(({ icon: Icon, value, textValue, label, suffix, isYear }, index) => (
        <div
          key={label}
          className="relative"
          style={{
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          <Icon className="h-10 w-10 text-blue-600 mb-4 stroke-[1.5]" />
          {textValue ? (
            <div className="text-xl font-medium text-blue-600 leading-tight">
              {t(`${textValue}.value`)}
            </div>
          ) : (
            <div className="text-5xl font-light text-blue-600">
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