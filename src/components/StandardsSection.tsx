"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-white py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ae-teal" />
              <span className="text-xs tracking-[0.25em] uppercase text-ae-teal font-semibold">
                {t.label}
              </span>
              <span className="w-6 h-px bg-ae-teal" />
            </div>
          </motion.div>
          <motion.h2
            variants={FU(0.08)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-ae-ink mb-4 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-ae-muted leading-relaxed"
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
              className="group relative p-6 rounded-2xl bg-ae-page border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative z-10">
                {/* Code badge + stat */}
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-ae-teal text-white text-xs font-bold tracking-wide">
                    {s.code}
                  </span>
                  <span className="text-ae-muted text-[10px] font-medium tracking-wide text-end leading-tight max-w-[110px]">
                    {s.stat}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-ae-ink font-semibold text-sm mb-2 group-hover:text-ae-teal transition-colors leading-snug">
                  {s.name}
                </h3>

                {/* Description */}
                <p className="text-ae-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
