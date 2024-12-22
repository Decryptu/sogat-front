import Image from "next/image";

export default function DetailedDomain({ domains, t }) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {domains.map((domain) => (
          <div 
            key={domain.id}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0"
          >
            {/* Text Content */}
            <div className={`space-y-6 ${
              domain.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t(`domains.${domain.id}.detailedTitle`)}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t(`domains.${domain.id}.detailedDescription`)}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.raw(`domains.${domain.id}.features`).map((feature, index) => (
                  <div 
                    key={`${domain.id}-feature-${index}`}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`relative h-96 w-full ${
              domain.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}>
              <Image
                src={domain.imageSrc}
                alt={t(`domains.${domain.id}.imageAlt`)}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}