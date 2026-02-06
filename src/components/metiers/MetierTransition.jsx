"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { METIER_COLORS } from "@/constants/metier-colors";

export default function MetierTransition({ slug }) {
  const [isVisible, setIsVisible] = useState(true);
  const color = METIER_COLORS[slug] || "hsl(208, 82.9%, 25.3%)";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: color }}
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{
            exit: {
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
              duration: 0.35,
              ease: [0.21, 0.47, 0.32, 0.98],
              exit: { duration: 0.2 },
            }}
            className="relative w-32 h-32 md:w-40 md:h-40"
          >
            {/* Using native img instead of next/image so the URL matches
                the preloaded resource from the metiers list page */}
            <img
              src={`/images/metiers/logo-${slug}-white.webp`}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
