"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useLang, type Lang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const SUPPORTED: Lang[] = ["ar", "en"];

export default function Header() {
  const { lang, setLang } = useLang();
  const t = translations.nav[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const otherLang: Lang = lang === "ar" ? "en" : "ar";

  const switchLang = (code: Lang) => {
    setLang(code);
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && SUPPORTED.includes(segments[0] as Lang)) {
      segments[0] = code;
    } else {
      segments.unshift(code);
    }
    router.push("/" + segments.join("/"));
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.credits, href: "#what-is" },
    { label: t.why, href: "#why-uae" },
    { label: t.projects, href: "#projects" },
    { label: t.insights, href: `/${lang}/insights` },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ae-dark/95 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href={`/${lang}`} className="flex-shrink-0 group">
          <span className="font-serif font-bold text-[17px] leading-none tracking-tight">
            <span className="text-ae-gold group-hover:text-ae-gold-light transition-colors">
              {t.logo}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-white/70 hover:text-white font-medium tracking-wide transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: lang switcher + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => switchLang(otherLang)}
            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-200 bg-white/[0.08] border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/[0.15]"
          >
            {t.lang}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ae-gold hover:bg-ae-gold-light text-ae-dark text-xs font-bold rounded-full transition-colors tracking-wide"
          >
            {t.contact}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ae-dark/98 border-t border-white/[0.06] overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-white/70 hover:text-white font-medium border-b border-white/[0.05] last:border-0 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
