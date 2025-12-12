import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const params_obj = await Promise.resolve(params);
  const locale = params_obj.locale;

  const t = await getTranslations({ locale, namespace: "expertise" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Expertise({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("expertise");

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
      key: "mechanicalConstruction",
      image: "/images/expertise/mechanical.webp",
      reverse: true,
    },
    {
      key: "onsiteWork",
      image: "/images/expertise/onsite.webp",
      reverse: false,
    },
    {
      key: "service",
      image: "/images/expertise/service.webp",
      reverse: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.key}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={t(`pillars.${pillar.key}.imageAlt`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {t(`pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`pillars.${pillar.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                <div
                  className={`relative ${section.reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={section.image}
                      alt={sectionData.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={section.reverse ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {sectionData.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {sectionData.description}
                  </p>

                  {/* Points or Services or Specs */}
                  {sectionData.points && (
                    <ul className="space-y-4">
                      {sectionData.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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
                        </li>
                      ))}
                    </ul>
                  )}

                  {sectionData.services && (
                    <div className="grid gap-6">
                      {sectionData.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-600 pl-4"
                        >
                          <h3 className="font-bold text-lg mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {sectionData.specs && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {sectionData.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-100 rounded-lg p-4 text-center"
                          >
                            <span className="font-semibold text-sm">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                      {sectionData.equipment && (
                        <div className="mt-6">
                          <h3 className="font-bold text-xl mb-4">
                            {locale === "fr"
                              ? "Usinage sur machine numérique :"
                              : "CNC machining:"}
                          </h3>
                          <ul className="space-y-2">
                            {sectionData.equipment.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700"
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
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
