"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function FlagshipProjectSection() {
  const { lang } = useLang();
  const t = translations.flagship[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="flagship" className="bg-ae-night py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ae-gold/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ae-gold/80 font-medium">{t.label}</span>
            </div>
          </motion.div>
          <motion.h2
            variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ae-sand/55 leading-relaxed max-w-2xl"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Main content: image + credentials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Image */}
          <motion.div
            variants={FU(0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden min-h-[360px] lg:min-h-[480px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.mangroves})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ae-dark/90 via-ae-dark/30 to-transparent" />

            {/* Status badge */}
            <div className="absolute top-5 start-5 flex items-center gap-2 px-4 py-2 rounded-full bg-ae-dark/80 backdrop-blur-sm border border-ae-teal/30">
              <span className="w-2 h-2 rounded-full bg-ae-teal animate-pulse" />
              <span className="text-ae-teal text-xs font-semibold">{t.status}</span>
              <span className="text-ae-sand/40 text-xs">·</span>
              <span className="text-ae-sand/60 text-xs">{t.statusDesc}</span>
            </div>

            {/* Location overlay */}
            <div className="absolute bottom-5 start-5 end-5">
              <div className="text-ae-sand/50 text-xs mb-1">{t.location}</div>
              <div className="text-white font-semibold text-sm">{t.area}</div>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            variants={FU(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <p className="text-ae-sand/60 leading-relaxed text-sm mb-6">{t.description}</p>

            <div className="space-y-3">
              {t.credentials.map((c, i) => (
                <div key={i} className="flex gap-3 pb-3 border-b border-white/[0.05] last:border-0">
                  <span className="text-ae-sand/40 text-xs w-28 flex-shrink-0 pt-0.5">{c.label}</span>
                  <span className="text-white/80 text-xs leading-relaxed">{c.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-ae-gold hover:bg-ae-gold/90 text-ae-dark transition-colors shadow-lg shadow-ae-gold/20 self-start"
            >
              {t.cta}
            </a>
          </motion.div>
        </div>

        {/* Impact stats */}
        <motion.div
          variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-ae-sand/50 text-xs tracking-[0.2em] uppercase mb-5">{t.impactTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
            {t.impacts.map((imp, i) => (
              <div key={i} className="bg-ae-dark/80 px-6 py-6 text-center">
                <div className="font-serif text-3xl font-bold text-ae-teal mb-2">{imp.value}</div>
                <div className="text-ae-sand/45 text-xs leading-snug">{imp.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
