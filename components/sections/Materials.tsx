"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, PenTool, CheckCircle, Clock } from "lucide-react";

const materials = [
  {
    name: "Cuir PU Premium",
    detail: "Grain fin, résistant aux rayures",
    icon: Shield,
  },
  {
    name: "Finitions Artisanales",
    detail: "Coutures à la main, bords polis",
    icon: PenTool,
  },
  {
    name: "Résistant & Durable",
    detail: "Testé pour 10+ années d'usage",
    icon: CheckCircle,
  },
  {
    name: "Conçu pour Durer",
    detail: "Structure renforcée, velours intérieur",
    icon: Clock,
  },
];

export default function Materials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="py-28 bg-charcoal relative overflow-hidden"
      id="materials"
    >
      {/* Scrolling marquee text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none">
        <motion.div style={{ x }} className="flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-display text-[160px] text-white/2 leading-none mr-16 select-none italic"
            >
              LUXE
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:w-2/5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block"
            >
              Savoir-Faire
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-white leading-[1.05]"
            >
              Des matières qui{" "}
              <span className="italic text-[#C9A96E]">
                traversent le temps.
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 h-px w-24 bg-linear-to-r from-[#C9A96E] to-transparent origin-left"
            />
          </div>

          {/* Right — materials */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-[#C9A96E]/20 hover:bg-white/4 hover-effect"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E]/20 hover-effect">
                  <m.icon
                    className="w-5 h-5 text-[#C9A96E]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="font-body text-sm font-medium text-white/80 mb-1 uppercase tracking-wider">
                    {m.name}
                  </h4>
                  <p className="font-body text-sm text-white/30 leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
