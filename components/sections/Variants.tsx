"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "@/lib/variants";
import type { ProductVariant } from "@/lib/variants";

export default function Variants() {
  const [active, setActive] = useState<ProductVariant>(variants[0]);

  return (
    <section
      className="py-32 bg-charcoal relative overflow-hidden"
      id="variants"
    >
      {/* Ambient glow */}
      <motion.div
        animate={{ backgroundColor: active.color }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block"
          >
            Notre Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white"
          >
            Trouvez votre <span className="italic text-[#C9A96E]">couleur</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — large product display */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div className="relative z-10 w-[130%] lg:w-[170%] aspect-square translate-x-[-15%] lg:translate-x-[-0.5%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.2, y: 30 }}
                    animate={{ opacity: 1, scale: 1.35, y: 0 }}
                    exit={{ opacity: 0, scale: 1.25, y: -20 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center animate-float"
                  >
                    <div
                      className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
                      style={{ backgroundColor: active.color }}
                    />
                    <Image
                      src={active.imagePath}
                      alt={`Coffret ${active.name}`}
                      width={1600}
                      height={1600}
                      className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Active name */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`name-${active.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-0 left-0 right-0 text-center"
              >
                <p className="font-display text-3xl italic text-white/20">
                  {active.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — variant selector cards */}
          <div className="space-y-4">
            {variants.map((variant, idx) => (
              <motion.button
                key={variant.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => setActive(variant)}
                className="w-full text-left relative overflow-hidden rounded-2xl border transition-all duration-400 group"
                style={{
                  borderColor:
                    active.id === variant.id
                      ? variant.accentColor
                      : "rgba(255,255,255,0.06)",
                  background:
                    active.id === variant.id
                      ? `linear-gradient(135deg, ${variant.color}22, ${variant.color}08)`
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <div className="flex items-center gap-5 p-5">
                  {/* Thumbnail */}
                  <div
                    className="w-16 h-16 rounded-xl shrink-0 overflow-hidden flex items-center justify-center relative"
                    style={{ background: variant.bgGradient }}
                  >
                    <Image
                      src={variant.imagePath}
                      alt={variant.name}
                      width={64}
                      height={64}
                      className="object-contain scale-110"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl text-white/90 group-hover:text-white transition-colors">
                        {variant.name}
                      </h3>
                      {variant.badge && (
                        <span
                          className="font-body text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor:
                              variant.badge === "ÉPUISÉ"
                                ? "#5a3535"
                                : variant.badge === "BEST-SELLER"
                                  ? "#C9A96E"
                                  : "#3d5a45",
                            color:
                              variant.badge === "BEST-SELLER"
                                ? "#0d0d0d"
                                : "#fff",
                          }}
                        >
                          {variant.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-white/30">
                      {variant.label} · Cuir premium
                    </p>
                  </div>

                  {/* Active indicator */}
                  <div
                    className="w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor:
                        active.id === variant.id
                          ? variant.accentColor
                          : "rgba(255,255,255,0.15)",
                      backgroundColor:
                        active.id === variant.id
                          ? variant.accentColor
                          : "transparent",
                    }}
                  >
                    {active.id === variant.id && (
                      <motion.div
                        layoutId="check"
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    )}
                  </div>
                </div>
              </motion.button>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#cta"
                className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 rounded-2xl font-body text-[11px] tracking-[0.2em] uppercase font-medium bg-[#C9A96E] text-charcoal hover:bg-[#E8D5B0] transition-colors duration-300"
              >
                Commander le coffret {active.label}
                <span className="text-base">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
