"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Stats({ stats }) {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ key, value, label }) => (
            <motion.div
              key={key}
              className="text-center"
              onHoverStart={() => setHoveredStat(key)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-6xl font-light text-blue-600 mb-4">{value}</h3>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}