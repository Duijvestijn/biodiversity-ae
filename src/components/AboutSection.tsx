"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const credentials = [
  { icon: "✓", title: "Verra VCS Certified", desc: "All projects are registered under the Verified Carbon Standard — the world's most widely adopted voluntary carbon programme." },
  { icon: "✓", title: "VM0033 Tidal Wetlands Methodology", desc: "Abu Dhabi's mangrove projects apply VM0033 — the leading international methodology for tidal wetland and seagrass carbon accounting." },
  { icon: "◎", title: "Biodiversity Co-Benefits Verified", desc: "Measurable biodiversity outcomes — including habitat protection for hawksbill turtles, flamingos, and dugongs — are independently audited alongside carbon stocks." },
  { icon: "◑", title: "TCFD-Aligned Reporting", desc: "Project documentation and credit reporting is structured to meet UAE SCA TCFD mandatory disclosure requirements for listed corporations." },
];

export default function AboutSection() {
  const { lang } = useLang();
  const t = translations.about[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="bg-ae-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs tracking-[0.3em] uppercase text-ae-teal font-bold mb-4 block">
              {t.label}
            </motion.span>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-ae-ink leading-tight mb-6">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ae-muted leading-relaxed mb-6 text-lg">
              {t.body1}
            </motion.p>
            <motion.p variants={FU(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ae-muted leading-relaxed mb-10">
              {t.body2}
            </motion.p>
            <motion.a variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}
              href="https://registry.verra.org/app/search/VCS/projects"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ae-teal font-bold text-sm hover:underline underline-offset-4">
              {t.registryCta}
              <span>↗</span>
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <motion.div key={i} variants={FU(0.1 + i * 0.07)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-ae-teal/10 flex items-center justify-center mb-4">
                  <span className="text-ae-teal font-bold text-lg">{c.icon}</span>
                </div>
                <h4 className="font-serif font-bold text-ae-ink mb-2">{c.title}</h4>
                <p className="text-ae-muted text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
