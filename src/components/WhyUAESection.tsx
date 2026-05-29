"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

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

export default function WhyUAESection() {
  const { lang } = useLang();
  const t = translations.whyUAE[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const advantages = [
    { title: t.adv1Title, desc: t.adv1Desc },
    { title: t.adv2Title, desc: t.adv2Desc },
    { title: t.adv3Title, desc: t.adv3Desc },
    { title: t.adv4Title, desc: t.adv4Desc },
    { title: t.adv5Title, desc: t.adv5Desc },
    { title: t.adv6Title, desc: t.adv6Desc },
  ];

  return (
    <section id="why-uae" className="overflow-hidden">
      {/* Full-bleed mangrove image band */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.mangroves})` }}
      >
        <div className="absolute inset-0 bg-ae-dark/60" />
        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6">
          <div ref={ref}>
            <motion.div
              variants={FU(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-px bg-ae-gold/60" />
              <span className="text-xs tracking-[0.25em] uppercase text-ae-gold font-semibold">
                {t.label}
              </span>
            </motion.div>
            <motion.h2
              variants={FU(0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-3 max-w-2xl"
            >
              {t.title}
            </motion.h2>
            <motion.p
              variants={FU(0.14)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-ae-gold font-serif text-lg italic"
            >
              {t.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stone background with intro + features */}
      <div className="bg-ae-stone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.p
            variants={FU(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-ae-muted text-lg leading-relaxed max-w-3xl mb-14"
          >
            {t.intro}
          </motion.p>

          {/* Advantages grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                variants={FU(i * 0.08)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-2xl bg-white shadow-sm border border-black/[0.06] hover:shadow-lg transition-all group"
              >
                {/* Teal accent bar */}
                <div className="w-8 h-1 bg-ae-teal rounded mb-4" />
                <h4 className="text-ae-ink font-bold text-sm mb-2 group-hover:text-ae-teal transition-colors">
                  {adv.title}
                </h4>
                <p className="text-ae-muted text-xs leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
