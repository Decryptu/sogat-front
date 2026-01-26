"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Award,
  Shield,
  Leaf,
  Heart,
} from "lucide-react";

const values = [
  {
    id: 1,
    title: "L'Homme",
    description:
      "Les hommes, par leurs compétences, leur créativité, leur adaptabilité, et leur résilience, sont une valeur essentielle au cœur du succès et du développement du groupe SOGAT.",
    icon: Users,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "L'innovation, en apportant de nouvelles idées, solutions et technologies, est essentielle pour améliorer la compétitivité et répondre aux défis de nos clients.",
    icon: Lightbulb,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500",
  },
  {
    id: 3,
    title: "Qualité",
    description:
      "La qualité, en garantissant des standards élevés et une satisfaction continue des clients, est essentielle pour renforcer la réputation, la fidélité et le succès à long terme du Groupe SOGAT.",
    icon: Award,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600",
  },
  {
    id: 4,
    title: "La Sécurité",
    description:
      "L'une de nos valeurs fondamentales, garantissant le bien-être de nos collaborateurs, et la pérennité de nos activités.",
    icon: Shield,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500",
  },
  {
    id: 5,
    title: "RSE",
    description:
      "La Responsabilité Sociétale des Entreprises (RSE), en intégrant des préoccupations sociales, environnementales et économiques dans les activités commerciales, est essentielle pour promouvoir un développement durable et améliorer l'impact social.",
    icon: Leaf,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600",
  },
  {
    id: 6,
    title: "Satisfaction",
    description:
      "La satisfaction client est au cœur de notre engagement, nous visons à dépasser les attentes en offrant des solutions de qualité, fiables et personnalisées.",
    icon: Heart,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Values() {
  const leftValues = values.slice(0, 3);
  const rightValues = values.slice(3, 6);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-gray-600 text-lg">
            Six piliers fondamentaux qui guident notre action quotidienne
          </p>
        </motion.div>

        {/* Desktop layout with circular graphic */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left column - values 1, 2, 3 */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leftValues.map((value) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-100"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <span className="text-lg font-bold">{value.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Circular graphic */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-72 h-72">
              {/* Circular ring with segments */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ transform: "rotate(-90deg)" }}
              >
                {values.map((value, index) => {
                  const segmentAngle = 360 / 6;
                  const startAngle = index * segmentAngle;
                  const endAngle = startAngle + segmentAngle;
                  const radius = 80;
                  const innerRadius = 50;
                  const centerX = 100;
                  const centerY = 100;

                  const startAngleRad = (startAngle * Math.PI) / 180;
                  const endAngleRad = (endAngle * Math.PI) / 180;

                  const x1 = centerX + radius * Math.cos(startAngleRad);
                  const y1 = centerY + radius * Math.sin(startAngleRad);
                  const x2 = centerX + radius * Math.cos(endAngleRad);
                  const y2 = centerY + radius * Math.sin(endAngleRad);
                  const x3 = centerX + innerRadius * Math.cos(endAngleRad);
                  const y3 = centerY + innerRadius * Math.sin(endAngleRad);
                  const x4 = centerX + innerRadius * Math.cos(startAngleRad);
                  const y4 = centerY + innerRadius * Math.sin(startAngleRad);

                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                  const pathData = `
                    M ${x1} ${y1}
                    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
                    L ${x3} ${y3}
                    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
                    Z
                  `;

                  return (
                    <motion.path
                      key={value.id}
                      d={pathData}
                      fill={index % 2 === 0 ? "#2563eb" : "#06b6d4"}
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    />
                  );
                })}
              </svg>

              {/* Icons positioned around the ring */}
              {values.map((value, index) => {
                const segmentAngle = 360 / 6;
                const angle = index * segmentAngle + segmentAngle / 2 - 90;
                const angleRad = (angle * Math.PI) / 180;
                const iconRadius = 65;
                const x = 50 + iconRadius * Math.cos(angleRad);
                const y = 50 + iconRadius * Math.sin(angleRad);
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.id}
                    className="absolute w-8 h-8 flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <Icon className="w-5 h-5 text-white drop-shadow-md" />
                  </motion.div>
                );
              })}

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-sm font-bold text-gray-800">SOGAT</span>
                  <br />
                  <span className="text-xs text-gray-500">GROUPE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - values 4, 5, 6 */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rightValues.map((value) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-100"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <span className="text-lg font-bold">{value.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet layout */}
        <motion.div
          className="lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mobile circular graphic */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ transform: "rotate(-90deg)" }}
              >
                {values.map((value, index) => {
                  const segmentAngle = 360 / 6;
                  const startAngle = index * segmentAngle;
                  const endAngle = startAngle + segmentAngle;
                  const radius = 80;
                  const innerRadius = 50;
                  const centerX = 100;
                  const centerY = 100;

                  const startAngleRad = (startAngle * Math.PI) / 180;
                  const endAngleRad = (endAngle * Math.PI) / 180;

                  const x1 = centerX + radius * Math.cos(startAngleRad);
                  const y1 = centerY + radius * Math.sin(startAngleRad);
                  const x2 = centerX + radius * Math.cos(endAngleRad);
                  const y2 = centerY + radius * Math.sin(endAngleRad);
                  const x3 = centerX + innerRadius * Math.cos(endAngleRad);
                  const y3 = centerY + innerRadius * Math.sin(endAngleRad);
                  const x4 = centerX + innerRadius * Math.cos(startAngleRad);
                  const y4 = centerY + innerRadius * Math.sin(startAngleRad);

                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                  const pathData = `
                    M ${x1} ${y1}
                    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
                    L ${x3} ${y3}
                    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
                    Z
                  `;

                  return (
                    <path
                      key={value.id}
                      d={pathData}
                      fill={index % 2 === 0 ? "#2563eb" : "#06b6d4"}
                    />
                  );
                })}
              </svg>

              {/* Icons */}
              {values.map((value, index) => {
                const segmentAngle = 360 / 6;
                const angle = index * segmentAngle + segmentAngle / 2 - 90;
                const angleRad = (angle * Math.PI) / 180;
                const iconRadius = 65;
                const x = 50 + iconRadius * Math.cos(angleRad);
                const y = 50 + iconRadius * Math.sin(angleRad);
                const Icon = value.icon;

                return (
                  <div
                    key={value.id}
                    className="absolute w-6 h-6 flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Icon className="w-4 h-4 text-white drop-shadow-md" />
                  </div>
                );
              })}

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-xs font-bold text-gray-800">SOGAT</span>
                  <br />
                  <span className="text-[10px] text-gray-500">GROUPE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-100"
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <span className="text-base font-bold">{value.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
