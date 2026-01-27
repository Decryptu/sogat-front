"use client";

import { motion } from "framer-motion";

// Fade in + slide up — the workhorse animation (Linear/Vercel style)
export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 24,
  x = 0,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — children animate one after another
export function StaggerIn({
  children,
  className = "",
  stagger = 0.08,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child
export function StaggerItem({
  children,
  className = "",
  y = 24,
  ...props
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Scale on hover — subtle card lift
export function HoverScale({ children, className = "", scale = 1.02, ...props }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
