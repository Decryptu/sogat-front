import { Building2, Cog, Construction, Wrench } from "lucide-react";

const ICONS = {
  engineering: Cog,
  project: Building2,
  manufacturing: Wrench,
  installation: Construction,
};

export default function Solutions({ title, items }) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/6 bg-blue-50 blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ key, title: itemTitle, description }) => {
            const Icon = ICONS[key];
            return (
              <div
                key={key}
                className="group relative bg-white rounded-2xl overflow-hidden"
              >
                {/* Card gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content wrapper with white background */}
                <div className="relative m-[1px] bg-white rounded-2xl p-8 h-full transition-transform group-hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-blue-100 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
                      <Icon className="relative w-14 h-14 text-blue-600 group-hover:scale-110 transition-transform" strokeWidth={1}/>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {itemTitle}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
}