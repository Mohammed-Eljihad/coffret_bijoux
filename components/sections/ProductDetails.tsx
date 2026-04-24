"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  { label: "12 emplacements", detail: "Pour bagues & petits bijoux" },
  { label: "6 crochets", detail: "Pour colliers & pendentifs" },
  { label: "Velours intérieur", detail: "Protection douce anti-rayures" },
  { label: "Tiroir secret", detail: "Pour pièces les plus précieuses" },
];

const stats = [
  { value: "3", unit: "niveaux", label: "de rangement" },
  { value: "22+", unit: "compartiments", label: "organisés" },
  { value: "100%", unit: "artisanal", label: "fabriqué à la main" },
];

export default function ProductDetails() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="py-32 bg-[#FAF7F2] relative overflow-hidden"
      id="details"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:-ml-12"
          >
            {/* Background block */}
            <div className="absolute -inset-10 bg-charcoal/5 rounded-[3rem] -z-10" />

            <motion.div style={{ y: imgY }} className="relative z-10">
              <div className="aspect-4/5 lg:aspect-square rounded-4xl overflow-hidden bg-[#E8E3DC] shadow-xl flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/box-interior.png"
                    alt="Intérieur du coffret — rangement intelligent"
                    fill
                    className="object-cover scale-100 hover:scale-110 hover-effect duration-1000! ease-out"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute z-20 -bottom-6 left-4 right-4 bg-charcoal rounded-2xl px-6 py-5 grid grid-cols-3 gap-4"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`text-center ${i < 2 ? "border-r border-white/10" : ""}`}
                >
                  <p className="font-display text-2xl text-white">
                    {s.value}{" "}
                    <span className="text-[#C9A96E] text-base italic">
                      {s.unit}
                    </span>
                  </p>
                  <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="lg:pt-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block"
            >
              Conception Intérieure
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-charcoal mb-6 leading-[1.05]"
            >
              Chaque trésor
              <br />à sa{" "}
              <span className="italic text-[#C9A96E]">place attitrée.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-base text-charcoal/50 leading-relaxed mb-12 max-w-[400px]"
            >
              L'intérieur de nos coffrets est pensé comme un appartement pour
              vos bijoux — chaque pièce trouve sa place naturellement.
            </motion.p>

            {/* Feature list */}
            <ul className="space-y-5">
              {features.map((f, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.6 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/5 flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E] hover-effect">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] group-hover:bg-white hover-effect" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-medium text-charcoal">
                      {f.label}
                    </span>
                    <span className="font-body text-sm text-charcoal/40 ml-2">
                      — {f.detail}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-10 border-t border-charcoal/8"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] hover:gap-5 hover-effect"
              >
                Commander le mien <span className="text-base">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
