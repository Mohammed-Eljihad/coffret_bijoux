"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-200 bg-charcoal flex flex-col items-center justify-center"
        >
          {/* Gold top rule */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-[#C9A96E] to-transparent" />

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="mb-3">
              <span
                className="font-display text-5xl tracking-[0.15em] uppercase text-[#C9A96E]"
                style={{ fontStyle: "italic" }}
              >
                Bijoux
              </span>
              <span className="font-display text-5xl tracking-[0.15em] uppercase text-white">
                Éclat
              </span>
            </div>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/25">
              Maison de Luxe · Paris
            </p>
          </motion.div>

          {/* Animated diamond */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              bounce: 0.3,
            }}
            className="relative mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border border-[#C9A96E]/20 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border border-[#C9A96E]/40 rounded-full flex items-center justify-center"
              >
                {/* Diamond shape */}
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon
                    points="10,1 19,10 10,19 1,10"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="1"
                  />
                  <circle cx="10" cy="10" r="2" fill="#C9A96E" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-48"
          >
            <div className="h-px bg-white/8 w-full rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-[#A0823F] via-[#C9A96E] to-[#E8D5B0]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/15">
                Chargement
              </span>
              <span className="font-body text-[9px] text-white/20 tabular-nums">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Gold bottom rule */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-[#C9A96E] to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
