"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function GoldButton({
  children,
  primary = false,
  className = "",
  onClick,
  href,
  type = "button",
}: GoldButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-body text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 px-8 py-4 group";

  const styles = primary
    ? "bg-[#C9A96E] text-[#0d0d0d] hover:bg-[#E8D5B0]"
    : "bg-transparent border border-[#C9A96E]/40 text-[#C9A96E] hover:border-[#C9A96E] hover:bg-[#C9A96E]/10";

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 skew-x-12 pointer-events-none" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${styles} ${className}`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </motion.button>
  );
}
