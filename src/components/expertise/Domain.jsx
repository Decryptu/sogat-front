import { Cog, Cpu, Factory, Wrench, Headset } from "lucide-react";

const DOMAIN_ICONS = {
  mechanical: Cog,
  electrical: Cpu,
  manufacturing: Factory,
  onsite: Wrench,
  service: Headset
};

export default function Domain({ items }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {items?.map((item) => {
            const IconComponent = DOMAIN_ICONS[item.key];
            return (
              <div 
                key={item.key} 
                className="group hover:bg-gray-50 transition-all duration-300 p-8 border border-gray-100 rounded-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 p-3 bg-gray-100 rounded-lg group-hover:bg-white transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent 
                        className="w-8 h-8 text-gray-900" 
                        strokeWidth={1.5} 
                      />
                    )}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.points?.map((point) => (
                        <li 
                          key={`${item.key}-${point}`} 
                          className="flex items-start gap-2"
                        >
                          <span className="text-blue-600 mt-1.5">•</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}