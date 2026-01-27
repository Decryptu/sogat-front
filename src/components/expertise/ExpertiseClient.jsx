"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 }
};

export default function ExpertiseClient() {
  const t = useTranslations("expertise");
  const locale = useLocale();

  const pillars = [
    {
      key: "engineering",
      image: "/images/expertise/engineering.webp",
    },
    {
      key: "project",
      image: "/images/expertise/project.webp",
    },
    {
      key: "manufacturing",
      image: "/images/expertise/fabrication.webp",
    },
    {
      key: "installation",
      image: "/images/expertise/installation.webp",
    },
  ];

  const detailedSections = [
    {
      key: "mechanicalDesign",
      image: "/images/expertise/mechanical.webp",
      reverse: false,
    },
    {
      key: "electricalAutomation",
      image: "/images/expertise/electrical.webp",
      reverse: true,
    },
    {
      key: "integratedManufacturing",
      image: "/images/expertise/manufacturing.webp",
      reverse: false,
    },
    {
      key: "industrialAutomation",
      image: "/images/expertise/automatisation.webp",
      reverse: true,
    },
    {
      key: "mechanicalConstruction",
      image: "/images/expertise/mechanical.webp",
      reverse: false,
    },
    {
      key: "onsiteWork",
      image: "/images/expertise/onsite.webp",
      reverse: true,
    },
    {
      key: "service",
      image: "/images/expertise/service.webp",
      reverse: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Two Column */}
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6 px-4 md:px-16 py-12 lg:py-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {t("title")}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
          <motion.div
            className="relative w-full aspect-4/3 lg:aspect-square"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/expertise/hero.webp"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* 4 Pillars - Modern Minimal Design with Animations */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-1"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.key}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                className="group relative border border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="p-8 lg:p-10">
                  <motion.div
                    className="relative h-48 w-full mb-6 overflow-hidden rounded-lg"
                    variants={scaleOnHover}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={pillar.image}
                      alt={t(`pillars.${pillar.key}.imageAlt`)}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {t(`pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`pillars.${pillar.key}.description`)}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 transition-colors duration-200 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections - Alternating Layout */}
      {detailedSections.map((section, index) => {
        const sectionData = t.raw(`sections.${section.key}`);

        return (
          <section
            key={section.key}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  section.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative ${section.reverse ? "lg:order-2" : ""}`}
                  initial={{ opacity: 0, x: section.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={section.image}
                      alt={sectionData.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={section.reverse ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: section.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {sectionData.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {sectionData.description}
                  </p>

                  {/* Points or Services or Specs */}
                  {sectionData.points && (
                    <motion.ul
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {sectionData.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          variants={fadeInUp}
                        >
                          <svg
                            className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {sectionData.services && (
                    <motion.div
                      className="grid gap-6"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {sectionData.services.map((service, idx) => (
                        <motion.div
                          key={idx}
                          className="border-l-4 border-blue-600 pl-4"
                          variants={fadeInUp}
                        >
                          <h3 className="font-bold text-lg mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {sectionData.specs && (
                    <div className="space-y-6">
                      <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {sectionData.specs.map((spec, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-gray-100 rounded-lg p-4 text-center"
                            variants={fadeInUp}
                          >
                            <span className="font-semibold text-sm">
                              {spec}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                      {sectionData.equipment && (
                        <motion.div
                          className="mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="font-bold text-xl mb-4">
                            {locale === "fr"
                              ? "Usinage sur machine numérique :"
                              : "CNC machining:"}
                          </h3>
                          <ul className="space-y-2">
                            {sectionData.equipment.map((item, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <svg
                                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
