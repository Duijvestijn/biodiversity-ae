import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticle, getAllSlugs } from "@/lib/articles";

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
    breadcrumbHome: "Home",
    breadcrumbInsights: "Insights",
    readTime: "min read",
    backInsights: "← All articles",
    related: "Related articles",
    ctaTitle: "Partner with Green Earth Group in the UAE",
    ctaDesc: "We work with governments, investors, and project developers across the UAE and Arabian Peninsula.",
    ctaBtn: "Start a conversation",
  },
  ar: {
    breadcrumbHome: "الرئيسية",
    breadcrumbInsights: "المقالات",
    readTime: "دقيقة قراءة",
    backInsights: "→ جميع المقالات",
    related: "مقالات ذات صلة",
    ctaTitle: "تعاون مع Green Earth Group في الإمارات",
    ctaDesc: "نعمل مع الحكومات والمستثمرين ومطوري المشاريع في الإمارات وشبه الجزيرة العربية.",
    ctaBtn: "ابدأ المحادثة",
  },
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "ar" | "en") : "en";
  const article = getArticle(slug);
  if (!article) return {};
  const tag = l === "ar" ? article.tagAr : article.tag;
  return {
    title: `${article.title[l]} — Biodiversity.ae`,
    description: article.excerpt[l],
    keywords: ["UAE carbon credits", "UAE carbon market", tag.toLowerCase(), "biodiversity UAE", "blue carbon"],
    openGraph: {
      title: article.title[l],
      description: article.excerpt[l],
      type: "article",
      publishedTime: article.date,
      url: `${BASE}/${l}/insights/${slug}`,
    },
    alternates: {
      canonical: `${BASE}/${l}/insights/${slug}`,
      languages: {
        ar: `${BASE}/ar/insights/${slug}`,
        en: `${BASE}/en/insights/${slug}`,
        "x-default": `${BASE}/en/insights/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "ar" | "en";
  const article = getArticle(slug);
  if (!article) notFound();

  const tag = l === "ar" ? article.tagAr : article.tag;
  const colors = TAG_COLORS[tag] ?? { pill: "bg-ae-muted text-white", bar: "bg-ae-gold" };
  const ui = UI[l];

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[l],
    description: article.excerpt[l],
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "Biodiversity.ae", url: BASE },
    url: `${BASE}/${l}/insights/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="min-h-screen bg-ae-page" dir={l === "ar" ? "rtl" : "ltr"}>
        {/* Hero / header */}
        <div className="bg-ae-dark pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
              <Link href={`/${l}`} className="hover:text-white/70 transition-colors">
                {ui.breadcrumbHome}
              </Link>
              <span>/</span>
              <Link href={`/${l}/insights`} className="hover:text-white/70 transition-colors">
                {ui.breadcrumbInsights}
              </Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{tag}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${colors.pill}`}
              >
                {tag}
              </span>
              <span className="text-white/40 text-xs">{article.date}</span>
              <span className="text-white/40 text-xs">
                · {article.readTime} {ui.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {article.title[l]}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{article.excerpt[l]}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div
            className="prose-ae"
            dangerouslySetInnerHTML={{ __html: article.content[l] }}
          />

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-ae-ink/10">
            <Link href={`/${l}/insights`} className="text-ae-gold font-semibold text-sm hover:underline">
              {ui.backInsights}
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="bg-ae-stone py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-2xl font-bold text-ae-ink mb-8">{ui.related}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((rel) => {
                  const relTag = l === "ar" ? rel.tagAr : rel.tag;
                  const relColors = TAG_COLORS[relTag] ?? {
                    pill: "bg-ae-muted text-white",
                    bar: "bg-ae-muted",
                  };
                  return (
                    <Link
                      key={rel.slug}
                      href={`/${l}/insights/${rel.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className={`h-1.5 ${relColors.bar} w-full`} />
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${relColors.pill}`}
                          >
                            {relTag}
                          </span>
                          <span className="text-ae-muted text-xs">{rel.date}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-ae-ink leading-snug group-hover:text-ae-gold transition-colors">
                          {rel.title[l]}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-ae-dark py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
            <p className="text-white/60 mb-8 leading-relaxed">{ui.ctaDesc}</p>
            <Link
              href={`/${l}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ae-gold hover:bg-ae-gold-light text-ae-dark font-bold rounded-full transition-colors text-sm tracking-wide"
            >
              {ui.ctaBtn}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
