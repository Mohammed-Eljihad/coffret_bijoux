"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { variants } from "@/lib/variants";
import type { ProductVariant } from "@/lib/variants";
import { ArrowDown, Star } from "lucide-react";

export default function Hero() {
  const [activeVariant, setActiveVariant] = useState<ProductVariant>(
    variants[0],
  );
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  const isDark = activeVariant.id === "noir" || activeVariant.id === "vert";

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: activeVariant.bgGradient,
        transition: "background 1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Ambient noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "rgba(201,169,110,1)" : "rgba(13,13,13,1)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(201,169,110,1)" : "rgba(13,13,13,1)"} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          transition: "opacity 0.8s ease",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left — Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 self-start"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <span
                className="font-body text-[10px] tracking-[0.2em] uppercase"
                style={{
                  color: isDark
                    ? "rgba(250,247,242,0.6)"
                    : "rgba(13,13,13,0.5)",
                }}
              >
                15 000+ clientes satisfaites
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display leading-[0.95]"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  color: isDark ? "#FAF7F2" : "#0d0d0d",
                  transition: "color 0.8s ease",
                }}
              >
                L&apos;élégance
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display leading-[0.95] italic"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  color: activeVariant.accentColor,
                  transition: "color 0.5s ease",
                }}
              >
                qui protège
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display leading-[0.95]"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  color: isDark ? "#FAF7F2" : "#0d0d0d",
                  transition: "color 0.8s ease",
                }}
              >
                vos trésors.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-body text-base leading-relaxed mb-10 max-w-[380px]"
              style={{
                color: isDark ? "rgba(250,247,242,0.6)" : "rgba(13,13,13,0.55)",
                transition: "color 0.8s ease",
              }}
            >
              Nos coffrets préservent vos bijoux avec raffinement et sécurité.
              Un luxe pensé pour durer.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden px-8 py-4 rounded-full font-body text-[11px] tracking-[0.2em] uppercase font-medium group"
                style={{
                  backgroundColor: activeVariant.accentColor,
                  color: "#fff",
                }}
              >
                <span className="relative z-10">Commander maintenant</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
              </motion.a>
              <a
                href="#variants"
                className="font-body text-[11px] tracking-[0.2em] uppercase flex items-center gap-2"
                style={{
                  color: isDark
                    ? "rgba(250,247,242,0.5)"
                    : "rgba(13,13,13,0.45)",
                }}
              >
                Voir la collection
                <span className="text-gold">→</span>
              </a>
            </motion.div>

            {/* Color Swatches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <p
                className="font-body text-[10px] tracking-[0.25em] uppercase mb-4"
                style={{
                  color: isDark
                    ? "rgba(250,247,242,0.35)"
                    : "rgba(13,13,13,0.35)",
                }}
              >
                Coloris disponibles
              </p>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariant(variant)}
                    className="relative w-10 h-10 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none"
                    title={variant.name}
                  >
                    <div
                      className="w-full h-full rounded-full border border-black/10"
                      style={{ backgroundColor: variant.color }}
                    />
                    {activeVariant.id === variant.id && (
                      <motion.div
                        layoutId="swatch-ring"
                        className="absolute inset-[-4px] rounded-full border-2"
                        style={{ borderColor: activeVariant.accentColor }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 28,
                        }}
                      />
                    )}
                    {variant.badge === "BEST-SELLER" && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold" />
                    )}
                  </button>
                ))}
              </div>
              <p
                className="font-display text-sm mt-3 italic"
                style={{
                  color: activeVariant.accentColor,
                  transition: "color 0.4s ease",
                }}
              >
                {activeVariant.name}
              </p>
            </motion.div>
          </div>

          {/* Right — Product Visual */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center order-1 lg:order-2 mt-10 lg:mt-0"
            style={{ perspective: "1200px" }}
          >
            {/* Glow */}
            <motion.div
              className="absolute w-[60%] h-[60%] rounded-full blur-[80px] opacity-50"
              animate={{ backgroundColor: activeVariant.color }}
              transition={{ duration: 1 }}
            />

            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[85%] h-[85%] rounded-full border border-dashed opacity-20"
              style={{ borderColor: activeVariant.accentColor }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[70%] h-[70%] rounded-full border opacity-10"
              style={{ borderColor: activeVariant.accentColor }}
            />

            {/* Product Image with 3D tilt */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative z-10 w-[130%] lg:w-[170%] aspect-square translate-x-[-15%] lg:translate-x-[-0.5%]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVariant.id}
                  initial={{ opacity: 0, scale: 1.2, y: 30 }}
                  animate={{ opacity: 1, scale: 1.35, y: 0 }}
                  exit={{ opacity: 0, scale: 1.25, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex items-center justify-center animate-float"
                >
                  <Image
                    src={activeVariant.imagePath}
                    alt={`Coffret ${activeVariant.name}`}
                    width={1600}
                    height={1600}
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Price badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.8 }}
              className="absolute right-0 lg:-right-4 top-1/2 translate-y-8 z-20 bg-white rounded-2xl p-4 shadow-xl border border-black/5 w-24 text-center"
            >
              <p className="font-display text-2xl font-semibold text-charcoal leading-none">
                -20%
              </p>
              <p className="font-body text-[8px] uppercase tracking-[0.15em] text-charcoal/50 mt-1.5 leading-tight">
                Offre
                <br />
                Limitée
              </p>
            </motion.div>

            {/* Floating feature pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute left-0 lg:-left-4 bottom-1/4 z-20 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 shadow-lg border border-black/5"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ backgroundColor: `${activeVariant.accentColor}20` }}
              >
                ✦
              </div>
              <div>
                <p className="font-body text-[9px] uppercase tracking-widest text-charcoal/50">
                  Cuir Premium
                </p>
                <p className="font-display text-sm text-charcoal">Artisanal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p
          className="font-body text-[9px] tracking-[0.3em] uppercase"
          style={{
            color: isDark ? "rgba(250,247,242,0.3)" : "rgba(13,13,13,0.3)",
          }}
        >
          Découvrir
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown
            className="w-4 h-4"
            style={{ color: activeVariant.accentColor }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
