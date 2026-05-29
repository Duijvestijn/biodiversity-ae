"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-ae-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ae-gold/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ae-gold/80 font-medium">{t.label}</span>
              <span className="w-6 h-px bg-ae-gold/50" />
            </div>
          </motion.div>
          <motion.h2
            variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ae-sand/55 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Standards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.standards.map((s, i) => (
            <motion.div
              key={s.code}
              variants={FU(i * 0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative p-6 rounded-2xl bg-ae-night border border-white/[0.05] hover:border-ae-gold/20 transition-all overflow-hidden"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-ae-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Code badge + stat */}
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-ae-gold/10 border border-ae-gold/20 text-ae-gold text-xs font-bold tracking-wide">
                    {s.code}
                  </span>
                  <span className="text-ae-gold/60 text-[10px] font-medium tracking-wide text-end leading-tight max-w-[110px]">
                    {s.stat}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-ae-gold/90 transition-colors leading-snug">
                  {s.name}
                </h3>

                {/* Description */}
                <p className="text-ae-sand/45 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
