"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/variants";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="py-32 bg-[#FAF7F2] overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]"
          >
            Des milliers de femmes
            <br />
            <span className="italic text-[#C9A96E]">nous font confiance.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:text-right"
          >
            <div className="flex gap-1 lg:justify-end mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]"
                />
              ))}
            </div>
            <p className="font-display text-4xl font-semibold text-charcoal">
              4.9<span className="text-[#C9A96E] italic">/5</span>
            </p>
            <p className="font-body text-sm text-charcoal/40 mt-1">
              Basé sur 2 340 avis vérifiés
            </p>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-8 rounded-3xl bg-white border border-charcoal/6 group hover:border-[#C9A96E]/30 hover:shadow-xl hover:shadow-[#C9A96E]/5 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-10 h-10 text-[#C9A96E]" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-[15px] text-charcoal/70 leading-relaxed mb-8 line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-charcoal/6 pt-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-medium"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #A0823F)",
                    color: "#fff",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-charcoal">
                    {t.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <p className="font-body text-[10px] tracking-wider uppercase text-charcoal/40">
                      Cliente vérifiée · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling logos / trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-charcoal/8 flex flex-wrap items-center justify-between gap-6"
        >
          {[
            "15 000+ Clientes",
            "Livraison Offerte",
            "Garantie 30 jours",
            "Paiement Sécurisé",
            "Made in Europe",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-charcoal/40">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
