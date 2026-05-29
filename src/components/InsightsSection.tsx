"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-ae-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ae-gold/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ae-gold/80 font-medium">{t.label}</span>
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

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              variants={FU(i * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col rounded-2xl bg-ae-night border border-white/[0.05] hover:border-ae-gold/20 transition-all overflow-hidden"
            >
              {/* Top bar accent */}
              <div className="h-0.5 w-full bg-gradient-to-r from-ae-gold/60 via-ae-gold/20 to-transparent" />

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-ae-gold/10 border border-ae-gold/20 text-ae-gold text-[10px] font-bold tracking-wide uppercase">
                    {article.tag}
                  </span>
                  <span className="text-ae-sand/35 text-xs">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base font-bold text-white mb-3 leading-snug group-hover:text-ae-gold/90 transition-colors flex-1">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-ae-sand/45 text-xs leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 text-ae-gold/70 text-xs font-medium group-hover:text-ae-gold transition-colors mt-auto">
                  <span>{t.readMore}</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 rtl:rotate-180 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
