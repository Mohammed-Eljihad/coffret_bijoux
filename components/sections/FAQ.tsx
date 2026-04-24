"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/variants";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-charcoal" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left sticky heading */}
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block"
            >
              Questions fréquentes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-white leading-[1.05] sticky top-32"
            >
              Tout ce
              <br />
              que vous
              <br />
              <span className="italic text-[#C9A96E]">voulez savoir.</span>
            </motion.h2>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3">
            {faqItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="border-b border-white/8"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors duration-300 pr-8">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C9A96E]/50 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4 text-white/40 group-hover:text-[#C9A96E] transition-colors duration-300" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-base text-white/40 leading-relaxed pb-8 pr-12">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
