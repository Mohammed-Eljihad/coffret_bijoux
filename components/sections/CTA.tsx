"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";
import OrderModal from "@/components/ui/OrderModal";

const guarantees = [
  { icon: ShieldCheck, label: "Paiement Sécurisé" },
  { icon: Truck, label: "Livraison Offerte" },
  { icon: RotateCcw, label: "Retour 30 jours" },
];

export default function CTA() {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-charcoal" id="cta">
      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#FAF7F2]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left — image */}
            <div className="relative overflow-hidden rounded-l-[2.5rem]">
              <Image
                src="/images/box_green.png"
                alt="Coffret BijouxÉclat Noir"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#FAF7F2]/10" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.5 }}
                className="absolute top-8 left-8 bg-charcoal rounded-2xl px-5 py-3 text-center"
              >
                <p className="font-display text-3xl text-[#C9A96E]">-20%</p>
                <p className="font-body text-[9px] uppercase tracking-widest text-white/40 mt-0.5">
                  Offre limitée
                </p>
              </motion.div>
            </div>

            {/* Right — copy */}
            <div className="flex flex-col justify-center p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase mb-8 self-start"
              >
                <Sparkles className="w-3 h-3" />
                Édition Spéciale
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-[1.1]"
              >
                Offrez-lui l&apos;écrin
                <br />
                qu&apos;elle{" "}
                <span className="italic text-[#C9A96E]">mérite vraiment.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-body text-base text-charcoal/50 mb-10 leading-relaxed max-w-[360px]"
              >
                Rejoignez plus de 15 000 clientes satisfaites. Livraison offerte
                en France Métropolitaine.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={() => setModalOpen(true)}
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-4 px-8 py-5 bg-charcoal text-white rounded-2xl font-body text-[11px] tracking-[0.2em] uppercase group overflow-hidden relative border border-[#C9A96E]/20"
                >
                  <span className="relative z-10">Commander Maintenant</span>
                  <motion.div
                    animate={{ x: hovered ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                  <div className="absolute inset-0 bg-[#C9A96E] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-in-out" />
                </motion.button>
              </motion.div>

              {/* Guarantees */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-charcoal/8"
              >
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <g.icon
                      className="w-4 h-4 text-[#C9A96E]"
                      strokeWidth={1.5}
                    />
                    <span className="font-body text-[10px] tracking-[0.15em] uppercase text-charcoal/40">
                      {g.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
