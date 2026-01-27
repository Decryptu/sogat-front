"use client";

import { FadeIn } from "@/components/ui/motion";

export default function Hero({ title, description }) {
  return (
    <div className="min-h-[60vh] w-full bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn x={-20} y={0}>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900">
            {title}
          </h1>
        </FadeIn>
        <FadeIn x={20} y={0} delay={0.15}>
          <p className="text-xl text-gray-600 font-light">
            {description}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
