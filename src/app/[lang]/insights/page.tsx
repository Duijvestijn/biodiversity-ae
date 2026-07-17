import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

const SUPPORTED = ["ar", "en"];
const BASE = "https://biodiversity.ae";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  COP28: { pill: "bg-ae-gold text-white", bar: "bg-ae-gold" },
  Finance: { pill: "bg-ae-teal text-white", bar: "bg-ae-teal" },
  Biodiversity: { pill: "bg-ae-green text-white", bar: "bg-ae-green" },
  "تمويل": { pill: "bg-ae-teal text-white", bar: "bg-ae-teal" },
  "تنوع بيولوجي": { pill: "bg-ae-green text-white", bar: "bg-ae-green" },
};

const UI = {
  en: {
    label: "Market Intelligence",
    title: "UAE Biodiversity & Carbon Insights",
    subtitle: "Analysis of UAE's climate commitments, carbon market evolution, and biodiversity investment opportunities.",
    readMore: "Read article",
    readTime: "min read",
    backHome: "Back to home",
  },
  ar: {
    label: "استخبارات السوق",
    title: "رؤى التنوع البيولوجي والكربون في الإمارات",
    subtitle: "تحليل التزامات الإمارات المناخية وتطور سوق الكربون وفرص الاستثمار في التنوع البيولوجي.",
    readMore: "اقرأ المقال",
    readTime: "دقيقة قراءة",
    backHome: "العودة إلى الرئيسية",
  },
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "ar" | "en") : "en";
  return {
    title: l === "ar"
      ? "رؤى التنوع البيولوجي والكربون في الإمارات — Biodiversity.ae"
      : "UAE Biodiversity & Carbon Insights — Biodiversity.ae",
    description: l === "ar"
      ? "تحليل التزامات الإمارات المناخية وتطور سوق الكربون وفرص الاستثمار في التنوع البيولوجي."
      : "Analysis of UAE's climate commitments, carbon market evolution, and biodiversity investment opportunities.",
    alternates: {
      canonical: `${BASE}/${l}/insights`,
      languages: {
        ar: `${BASE}/ar/insights`,
        en: `${BASE}/en/insights`,
        "x-default": `${BASE}/en/insights`,
      },
    },
  };
}

export default async function InsightsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "ar" | "en";
  const ui = UI[l];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ae-page pt-28 pb-24" dir={l === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-3">
            <Link
              href={`/${l}`}
              className="text-xs text-ae-muted hover:text-ae-gold transition-colors font-medium tracking-wide"
            >
              {l === "ar" ? "→" : "←"} {ui.backHome}
            </Link>
          </div>

          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-ae-gold font-bold inline-block mb-4">
              {ui.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ae-ink mb-4 leading-tight">
              {ui.title}
            </h1>
            <p className="text-ae-muted text-lg leading-relaxed">{ui.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const tag = l === "ar" ? article.tagAr : article.tag;
              const colors = TAG_COLORS[tag] ?? { pill: "bg-ae-muted text-white", bar: "bg-ae-muted" };
              return (
                <Link
                  key={article.slug}
                  href={`/${l}/insights/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className={`h-1.5 ${colors.bar} w-full`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${colors.pill}`}
                      >
                        {tag}
                      </span>
                      <span className="text-ae-muted text-xs">{article.date}</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-ae-ink leading-snug group-hover:text-ae-gold transition-colors flex-1">
                      {article.title[l]}
                    </h2>
                    <p className="text-ae-muted text-sm leading-relaxed line-clamp-3">
                      {article.excerpt[l]}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="flex items-center gap-1.5 text-ae-gold font-semibold text-xs tracking-wide group-hover:gap-2.5 transition-all">
                        {ui.readMore}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-ae-muted text-xs">
                        {article.readTime} {ui.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
