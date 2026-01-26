"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hierarchyData = {
  parent: {
    logo: "/images/groupe/sogat_groupe.png",
    name: "SOGAT Groupe",
  },
  children: [
    {
      logo: "/images/groupe/tracip_groupe.png",
      name: "TRACIP",
      subsidiaries: [
        { logo: "/images/metiers/logo-tracip-environnement-full.webp", name: "TRACIP Environnement" },
        { logo: "/images/metiers/logo-tracip-mecano-soudure-full.webp", name: "TRACIP Mécano-Soudure" },
        { logo: "/images/metiers/logo-iserco-full.png", name: "ISERCO" },
        { logo: "/images/metiers/logo-haquette-full.png", name: "HAQUETTE" },
      ],
    },
    {
      logo: "/images/groupe/sp2i_groupe.png",
      name: "SP2I",
      subsidiaries: [
        { logo: "/images/metiers/logo-sp2i-ferroviaire-full.webp", name: "SP2I Ferroviaire" },
        { logo: "/images/metiers/logo-sp2i-prehension-full.webp", name: "SP2I Préhension" },
      ],
    },
    {
      logo: "/images/groupe/aretec_groupe.png",
      name: "ARETEC",
      subsidiaries: [
        { logo: "/images/metiers/logo-aretec-full.webp", name: "ARETEC" },
      ],
    },
    {
      logo: "/images/groupe/sermas_groupe.png",
      name: "SERMAS",
      subsidiaries: [
        { logo: "/images/metiers/logo-sermas-full.webp", name: "SERMAS" },
      ],
    },
  ],
};

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

export default function GroupeHierarchy() {
  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Structure du Groupe
          </h2>
          <p className="text-gray-400 text-lg">
            Un groupe industriel structuré autour de filiales complémentaires
          </p>
        </motion.div>

        {/* Parent - SOGAT Groupe */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
            <Image
              src={hierarchyData.parent.logo}
              alt={hierarchyData.parent.name}
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Connector line from parent */}
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-white/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </div>

        {/* Horizontal connector */}
        <div className="hidden md:flex justify-center mb-4">
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ width: "80%" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>

        {/* Level 2 - Main subsidiaries */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hierarchyData.children.map((child, index) => (
            <motion.div key={child.name} variants={itemVariants} className="flex flex-col items-center">
              {/* Vertical connector from horizontal line */}
              <div className="hidden md:block w-0.5 h-6 bg-white/20 mb-4" />

              {/* Main subsidiary card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 w-full">
                <div className="flex justify-center mb-4">
                  <Image
                    src={child.logo}
                    alt={child.name}
                    width={180}
                    height={60}
                    className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>

                {/* Connector to subsidiaries */}
                {child.subsidiaries.length > 0 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-white/30 to-white/10" />
                  </div>
                )}

                {/* Level 3 - Sub-subsidiaries */}
                <div className="space-y-3">
                  {child.subsidiaries.map((subsidiary) => (
                    <motion.div
                      key={subsidiary.name}
                      className="bg-black/30 rounded-lg p-3 border border-white/5 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={subsidiary.logo}
                        alt={subsidiary.name}
                        width={140}
                        height={40}
                        className="h-7 md:h-8 w-auto object-contain mx-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
