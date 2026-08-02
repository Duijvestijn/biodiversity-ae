import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SUPPORTED_LANGS = ["en", "ar"];
const BASE = "https://biodiversity.ae";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang)) return {};
  const isAr = lang === "ar";
  return {
    title: isAr
      ? "المدونة — التنوع البيولوجي والكربون في الإمارات | Biodiversity.ae"
      : "Blog — UAE Biodiversity & Carbon Markets | Biodiversity.ae",
    description: isAr
      ? "رؤى سوق الكربون والتنوع البيولوجي في الإمارات."
      : "Biodiversity and carbon market insights from the UAE — mangroves, ADGM, and COP28 developments.",
    alternates: {
      canonical: `${BASE}/en/blog`,
      languages: { en: `${BASE}/en/blog`, ar: `${BASE}/ar/blog`, "x-default": `${BASE}/en/blog` },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang)) notFound();
  const isAr = lang === "ar";

  return (
    <>
      <Header />
      <main
        dir={isAr ? "rtl" : "ltr"}
        className="bg-ae-stone min-h-screen pt-28 pb-20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-3">
            <Link
              href={`/${lang}`}
              className="text-xs text-ae-muted hover:text-ae-gold transition-colors font-medium tracking-wide"
            >
              {isAr ? "→ العودة إلى الرئيسية" : "← Back to home"}
            </Link>
          </div>
          <span className="text-xs tracking-[0.3em] uppercase text-ae-gold font-bold inline-block mb-4">
            {isAr ? "رؤى السوق" : "Market Insights"}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ae-ink mb-3 leading-tight">
            {isAr ? "المدونة" : "Blog"}
          </h1>
          <p className="text-ae-muted mb-12 text-lg leading-relaxed">
            {isAr
              ? "رؤى سوق الكربون والتنوع البيولوجي في الإمارات."
              : "Biodiversity and carbon market insights for the UAE."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const t = post.lang[lang] || post.lang.en;
              return (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={t.title}
                  excerpt={t.excerpt}
                  date={post.date}
                  lang={lang}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
