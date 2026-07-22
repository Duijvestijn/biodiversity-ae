"use client";

import { useRef, useState } from "react";
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

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("loading");
    try {
      const res = await fetch("https://biodiversity-ae.pages.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ae-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + audience flows */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-ae-teal" />
                <span className="text-xs tracking-[0.25em] uppercase text-ae-teal font-semibold">
                  {t.label}
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={FU(0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-ae-ink mb-4"
            >
              {t.title}
            </motion.h2>
            <motion.p
              variants={FU(0.14)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-ae-muted leading-relaxed mb-10"
            >
              {t.subtitle}
            </motion.p>

            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div
                  key={i}
                  variants={FU(0.18 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-black/[0.06] hover:border-ae-teal/30 hover:shadow-md transition-all group"
                >
                  <div>
                    <h4 className="text-ae-ink text-sm font-bold mb-1 group-hover:text-ae-teal transition-colors">
                      {flow.title}
                    </h4>
                    <p className="text-ae-muted text-xs leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            variants={FU(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-white shadow-sm border border-black/[0.06]"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-ae-teal/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-ae-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-ae-ink font-semibold text-lg">Message sent!</p>
                <p className="text-ae-muted text-sm">{"We'll be in touch shortly."}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-ae-teal underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-ae-page border border-black/[0.1] text-ae-ink placeholder-ae-muted text-sm focus:outline-none focus:border-ae-teal/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-ae-page border border-black/[0.1] text-ae-ink placeholder-ae-muted text-sm focus:outline-none focus:border-ae-teal/50 transition-colors"
                />
                <textarea
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-ae-page border border-black/[0.1] text-ae-ink placeholder-ae-muted text-sm focus:outline-none focus:border-ae-teal/50 transition-colors resize-none"
                />
                {status === "error" && (
                  <p className="text-red-500 text-sm">{"Something went wrong. Please try again."}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-ae-teal hover:bg-ae-teal-light text-white font-bold text-sm transition-colors shadow-lg shadow-ae-teal/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : t.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
