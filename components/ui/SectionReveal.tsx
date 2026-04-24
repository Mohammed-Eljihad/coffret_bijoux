"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: SectionRevealProps) {
  const initial = {
    up:    { opacity: 0, y: 40 },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none:  { opacity: 0 },
  }[direction];

  const animate = {
    up:    { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none:  { opacity: 1 },
  }[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
