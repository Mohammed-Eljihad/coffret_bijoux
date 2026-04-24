"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span
                className="font-display text-2xl tracking-[0.15em] uppercase text-[#C9A96E]"
                style={{ fontStyle: "italic" }}
              >
                Bijoux
              </span>
              <span className="font-display text-2xl tracking-[0.15em] uppercase text-white">
                Éclat
              </span>
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-[280px]">
              L'art du rangement luxueux. Des coffrets conçus pour protéger ce
              que vous avez de plus précieux.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#C9A96E" }}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Collection", "Détails", "Matériaux", "Témoignages", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-body text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
              Informations
            </h4>
            <ul className="space-y-3">
              {[
                "Livraison & Retours",
                "Politique de confidentialité",
                "CGV",
                "Contact",
                "Presse",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] text-white/20 tracking-wider">
            © {new Date().getFullYear()} BijouxÉclat. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="font-body text-[10px] text-white/20 tracking-[0.2em] uppercase">
              Paiement 100% Sécurisé
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
