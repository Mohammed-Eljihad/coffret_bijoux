"use client";

import { motion } from "framer-motion";
import { Diamond, Award, LayoutGrid, Gift } from "lucide-react";

const benefits = [
  {
    title: "Design Raffiné",
    description:
      "Un symbole de luxe et d'élégance intemporelle, façonné pour impressionner.",
    icon: Diamond,
    number: "01",
  },
  {
    title: "Qualité Premium",
    description:
      "Matériaux haut de gamme, finitions artisanales impeccables à chaque détail.",
    icon: Award,
    number: "02",
  },
  {
    title: "Compartiments Intelligents",
    description: "Rangement optimal pensé pour chaque type de bijou précieux.",
    icon: LayoutGrid,
    number: "03",
  },
  {
    title: "Cadeau Parfait",
    description:
      "L'écrin idéal pour offrir avec une élégance qui touche le cœur.",
    icon: Gift,
    number: "04",
  },
];

export default function Benefits() {
  return (
    <section className="py-32 bg-cream relative overflow-hidden" id="details">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] text-charcoal/2 whitespace-nowrap select-none pointer-events-none leading-none">
        LUXE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]"
          >
            Pourquoi choisir
            <br />
            <span className="italic text-[#C9A96E]">notre coffret ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-body text-base text-charcoal/50 leading-relaxed max-w-[340px] lg:ml-auto"
          >
            Chaque coffret BijouxÉclat est pensé pour sublimer votre collection
            et durer des années avec une élégance intacte.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-[#FAF7F2] p-10 flex flex-col hover:bg-charcoal rounded-lg hover-effect cursor-default"
            >
              <span className="font-body text-[10px] tracking-[0.3em] text-[#C9A96E] mb-8 block">
                {benefit.number}
              </span>

              <div className="mb-8">
                <benefit.icon
                  className="w-8 h-8 text-[#C9A96E] group-hover:text-[#E8D5B0] hove-effect"
                  strokeWidth={1.2}
                />
              </div>

              <h3 className="font-display text-2xl text-charcoal group-hover:text-white mb-4 hover-effect">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-charcoal/50 group-hover:text-white/40 leading-relaxed hover-effect mt-auto">
                {benefit.description}
              </p>

              {/* Bottom line */}
              <div className="mt-8 h-px bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/40 hover-effect origin-left scale-x-0 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
