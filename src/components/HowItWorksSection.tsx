"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function HowItWorksSection() {
  const { lang } = useLang();
  const t = translations.howItWorks[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-xs tracking-[0.3em] uppercase text-ae-teal font-bold mb-4 block">{t.label}</motion.span>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-ae-ink leading-tight mb-4">{t.title}</motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ae-muted text-lg leading-relaxed">{t.subtitle}</motion.p>
        </div>
        <div className="space-y-6">
          {t.steps.map((step: { number: string; title: string; desc: string; duration: string }, i: number) => (
            <motion.div key={i} variants={FU(0.1 + i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative flex gap-6 md:gap-10 items-start p-6 rounded-2xl bg-ae-stone hover:bg-white border border-transparent hover:border-black/[0.07] hover:shadow-md transition-all group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ae-teal text-white font-serif font-bold text-lg flex items-center justify-center">{step.number}</div>
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl font-bold text-ae-ink group-hover:text-ae-teal transition-colors">{step.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-ae-teal/10 text-ae-teal font-medium">{step.duration}</span>
                </div>
                <p className="text-ae-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={FU(0.7)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 p-6 rounded-2xl bg-ae-teal text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg mb-1">{t.ctaTitle}</p>
            <p className="text-white/70 text-sm">{t.ctaDesc}</p>
          </div>
          <a href="#contact" className="flex-shrink-0 px-6 py-3 bg-white text-ae-teal font-bold text-sm rounded-xl hover:bg-ae-stone transition-colors">{t.ctaBtn}</a>
        </motion.div>
      </div>
    </section>
  );
}
