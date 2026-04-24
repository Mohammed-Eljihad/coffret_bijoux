"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Détails", href: "#details" },
  { label: "Collection", href: "#variants" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  // ── Intersection Observer: tracks which section is in view ──────────────
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observers: IntersectionObserver[] = [];

    // Map to track which sections are currently intersecting
    const intersecting: Record<string, boolean> = {};

    const updateActive = () => {
      // Find the first navLink whose section is currently intersecting
      const found = navLinks.find(
        (l) => intersecting[l.href.replace("#", "")]
      );
      setActiveLink(found ? found.href : "");
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          intersecting[id] = entry.isIntersecting;
          updateActive();
        },
        {
          // Trigger when section covers ≥ 30% of the viewport
          threshold: 0.3,
          // Optionally shrink top margin to account for the fixed navbar height
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hover-effect ${
          scrolled
            ? "container mx-auto py-5 top-2 rounded-full bg-charcoal/90 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span
              className="font-display text-xl tracking-[0.15em] uppercase"
              style={{ color: "#C9A96E", fontStyle: "italic" }}
            >
              Bijoux
            </span>
            <span className="font-display text-xl tracking-[0.15em] uppercase text-white">
              Éclat
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-linear-to-r from-[#C9A96E] to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover-effect group ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-[#C9A96E]"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ display: "block" }}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase font-medium text-charcoal bg-[#C9A96E] hover:bg-[#E8D5B0] transition-colors duration-300 rounded-full"
            >
              Commander
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-10 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => {
          const isActive = activeLink === link.href;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMenuOpen(false);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.07 }}
              className={`font-display text-4xl transition-colors ${
                isActive ? "text-[#C9A96E]" : "text-white/80 hover:text-[#C9A96E]"
              }`}
              style={{ fontStyle: "italic" }}
            >
              {link.label}
            </motion.a>
          );
        })}
        <motion.a
          href="#cta"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 px-8 py-3 font-body text-[10px] tracking-[0.2em] uppercase text-charcoal bg-[#C9A96E] rounded-full"
        >
          Commander
        </motion.a>
      </motion.div>
    </>
  );
}
