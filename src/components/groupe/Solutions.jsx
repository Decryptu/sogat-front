"use client";

import { Building2, Cog, Construction, Wrench } from "lucide-react";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/ui/motion";

const ICONS = {
  engineering: Cog,
  project: Building2,
  manufacturing: Wrench,
  installation: Construction,
};

export default function Solutions({ subtitle, title, items }) {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <FadeIn className="flex flex-col items-center mb-20">
          <p className="text-gray-600 mb-4">{subtitle}</p>
          <h2 className="text-6xl font-bold text-center text-gray-900">
            {title}
          </h2>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
          {items.map(({ key, title: itemTitle, description }) => {
            const Icon = ICONS[key];
            return (
              <StaggerItem key={key}>
                <div className="relative bg-white border-t border-gray-200 p-8">
                  <div className="flex gap-8">
                    <div className="shrink-0">
                      <Icon className="w-10 h-10 text-gray-900" strokeWidth={1} />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-3">
                        {itemTitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerIn>
      </div>
    </section>
  );
}