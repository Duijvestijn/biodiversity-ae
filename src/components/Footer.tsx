"use client";

import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations.footer[lang];
  const nav = translations.nav[lang];

  return (
    <footer className="bg-ae-dark border-t border-white/[0.06] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif font-bold text-xl leading-none tracking-tight mb-2">
              <span className="text-ae-gold">biodiversity</span>
              <span className="text-white/50">.ae</span>
            </div>
            <div className="text-white/50 text-xs tracking-wide mt-2 leading-relaxed max-w-xs">
              {t.tagline}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {lang === "ar" ? "التنقل" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: nav.credits, href: "#what-is" },
                { label: nav.why, href: "#why-uae" },
                { label: nav.projects, href: "#projects" },
                { label: nav.insights, href: `/${lang}/insights` },
                { label: nav.contact, href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/45 hover:text-ae-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {lang === "ar" ? "المعايير" : "Standards"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Verra VCS", href: "https://verra.org" },
                { label: "Gold Standard", href: "https://goldstandard.org" },
                { label: "Paris Agreement", href: "https://unfccc.int" },
                { label: "UAE MoCCAE", href: "https://www.moccae.gov.ae" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 hover:text-ae-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-white/30 text-xs leading-relaxed mb-4 max-w-2xl">
            {lang === "ar"
              ? "هذه المنصة لأغراض إعلامية فقط. تنطوي أسواق الكربون على مخاطر. استشر مستشارين ماليين وقانونيين مستقلين قبل اتخاذ قرارات استثمارية."
              : "This platform is for informational purposes only. Carbon markets involve risks. Consult independent financial and legal advisors before making investment decisions."}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-white/30 text-xs">{t.copyright}</p>
            <span className="text-white/20 text-xs">
              {lang === "ar" ? "مدعوم بالطبيعة" : "Powered by nature"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
