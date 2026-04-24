"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronRight, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import { variants } from "@/lib/variants";
import type { ProductVariant } from "@/lib/variants";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "select" | "form" | "success";

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<ProductVariant>(variants[0]);
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const orderNumber = useState(
    () => "#BE24" + Math.floor(Math.random() * 9000 + 1000),
  )[0];

  const price = 89;
  const originalPrice = 119;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("select");
      setQty(1);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl bg-charcoal rounded-3xl overflow-hidden shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
              {/* Gold top bar */}
              <div className="h-1 w-full bg-linear-to-r from-[#A0823F] via-[#C9A96E] to-[#E8D5B0]" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#C9A96E]">
                    {step === "select"
                      ? "Étape 1 / 2 — Sélection"
                      : step === "form"
                        ? "Étape 2 / 2 — Livraison"
                        : "Confirmé"}
                  </span>
                </div>
                <h2 className="font-display text-3xl text-white italic">
                  {step === "select" && "Choisissez votre coffret"}
                  {step === "form" && "Vos informations"}
                  {step === "success" && "Commande confirmée !"}
                </h2>
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1 — Select variant */}
                {step === "select" && (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    {/* Variant grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelected(v)}
                          disabled={v.badge === "ÉPUISÉ"}
                          className={`relative p-4 rounded-2xl border text-left transition-all duration-300 ${
                            v.badge === "ÉPUISÉ"
                              ? "opacity-40 cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          style={{
                            borderColor:
                              selected.id === v.id
                                ? v.accentColor
                                : "rgba(255,255,255,0.07)",
                            background:
                              selected.id === v.id
                                ? `linear-gradient(135deg, ${v.color}22, transparent)`
                                : "rgba(255,255,255,0.02)",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full shrink-0 border border-white/10"
                              style={{ backgroundColor: v.color }}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-body text-sm text-white/80 truncate">
                                {v.name}
                              </p>
                              {v.badge && (
                                <span
                                  className="font-body text-[8px] tracking-widest uppercase"
                                  style={{
                                    color:
                                      v.badge === "BEST-SELLER"
                                        ? "#C9A96E"
                                        : v.badge === "ÉPUISÉ"
                                          ? "#888"
                                          : "#7ab",
                                  }}
                                >
                                  {v.badge}
                                </span>
                              )}
                            </div>
                            {selected.id === v.id && (
                              <div className="w-5 h-5 rounded-full bg-[#C9A96E] flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-charcoal" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between mb-8 p-5 rounded-2xl bg-white/3 border border-white/6">
                      <span className="font-body text-sm text-white/50 uppercase tracking-wider">
                        Quantité
                      </span>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="w-8 h-8 rounded-full border border-white/10 text-white/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-200 text-lg leading-none flex items-center justify-center"
                        >
                          −
                        </button>
                        <span className="font-display text-2xl text-white w-6 text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => setQty(qty + 1)}
                          className="w-8 h-8 rounded-full border border-white/10 text-white/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-200 text-lg leading-none flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price summary */}
                    <div className="flex items-end justify-between mb-8">
                      <div>
                        <p className="font-body text-xs text-white/30 uppercase tracking-wider mb-1">
                          Total
                        </p>
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-4xl text-white">
                            {price * qty}€
                          </span>
                          <span className="font-body text-sm text-white/25 line-through">
                            {originalPrice * qty}€
                          </span>
                          <span className="font-body text-xs text-[#C9A96E] bg-[#C9A96E]/10 px-2 py-0.5 rounded-full">
                            -20%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Truck
                          className="w-4 h-4 text-[#C9A96E]"
                          strokeWidth={1.5}
                        />
                        <span className="font-body text-xs text-white/30">
                          Livraison offerte
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("form")}
                      className="w-full py-5 rounded-2xl bg-[#C9A96E] text-charcoal font-body text-[11px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 hover:bg-[#E8D5B0] transition-colors duration-300"
                    >
                      Continuer <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}

                {/* STEP 2 — Form */}
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    {/* Order summary pill */}
                    <div
                      className="flex items-center gap-3 p-4 rounded-2xl mb-8 border"
                      style={{
                        background: `linear-gradient(135deg, ${selected.color}18, transparent)`,
                        borderColor: `${selected.accentColor}30`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl overflow-hidden relative">
                        <Image
                          src={selected.imagePath}
                          alt={selected.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-sm text-white/70">
                          {selected.name} × {qty}
                        </p>
                        <p className="font-display text-lg text-white">
                          {price * qty}€
                        </p>
                      </div>
                      <button
                        onClick={() => setStep("select")}
                        className="font-body text-[10px] tracking-wider uppercase text-[#C9A96E] hover:underline"
                      >
                        Modifier
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        {
                          key: "name",
                          label: "Nom complet",
                          placeholder: "Marie Dupont",
                          type: "text",
                        },
                        {
                          key: "email",
                          label: "Email",
                          placeholder: "marie@example.com",
                          type: "email",
                        },
                        {
                          key: "phone",
                          label: "Téléphone",
                          placeholder: "+33 6 00 00 00 00",
                          type: "tel",
                        },
                        {
                          key: "address",
                          label: "Adresse de livraison",
                          placeholder: "12 rue de la Paix, 75001 Paris",
                          type: "text",
                        },
                      ].map((field) => (
                        <div key={field.key}>
                          <label className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2 block">
                            {field.label}
                          </label>
                          <input
                            required
                            type={field.type}
                            placeholder={field.placeholder}
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) =>
                              setForm({ ...form, [field.key]: e.target.value })
                            }
                            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-200"
                          />
                        </div>
                      ))}

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep("select")}
                          className="flex-1 py-4 rounded-2xl border border-white/10 text-white/40 font-body text-[11px] tracking-[0.15em] uppercase hover:border-white/20 hover:text-white/60 transition-all duration-200"
                        >
                          Retour
                        </button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-2 py-4 rounded-2xl bg-[#C9A96E] text-charcoal font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#E8D5B0] transition-colors duration-300"
                        >
                          Confirmer la commande
                        </motion.button>
                      </div>
                    </form>

                    <div className="flex items-center justify-center gap-2 mt-6">
                      <ShieldCheck
                        className="w-4 h-4 text-[#C9A96E]/60"
                        strokeWidth={1.5}
                      />
                      <span className="font-body text-[10px] text-white/20 tracking-wider">
                        Paiement 100% sécurisé · Données chiffrées SSL
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 — Success */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-8"
                    >
                      <Check
                        className="w-8 h-8 text-[#C9A96E]"
                        strokeWidth={1.5}
                      />
                    </motion.div>

                    <h3 className="font-display text-4xl text-white mb-4 italic">
                      Merci pour votre commande !
                    </h3>
                    <p className="font-body text-base text-white/40 leading-relaxed mb-10 max-w-[340px] mx-auto">
                      Vous recevrez un email de confirmation sous peu. Votre
                      coffret sera expédié sous 48h.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {[
                        { label: "Commande", value: orderNumber },
                        { label: "Coloris", value: selected.label },
                        { label: "Total", value: `${price * qty}€` },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-white/3 border border-white/6"
                        >
                          <p className="font-body text-[10px] tracking-wider uppercase text-white/25 mb-1">
                            {item.label}
                          </p>
                          <p className="font-display text-xl text-white">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClose}
                      className="w-full py-4 rounded-2xl bg-[#C9A96E] text-charcoal font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#E8D5B0] transition-colors duration-300"
                    >
                      Fermer
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
