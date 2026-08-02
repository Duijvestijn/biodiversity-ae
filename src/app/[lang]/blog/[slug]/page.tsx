import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SUPPORTED_LANGS = ["en", "ar"];
const BASE = "https://biodiversity.ae";

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) =>
    posts.map((post) => ({ lang, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const t = post.lang[lang] || post.lang.en;
  return {
    title: `${t.title} — Biodiversity.ae`,
    description: t.excerpt,
    openGraph: {
      title: t.title,
      description: t.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${BASE}/${lang}/blog/${slug}`,
    },
    alternates: {
      canonical: `${BASE}/en/blog/${slug}`,
      languages: {
        en: `${BASE}/en/blog/${slug}`,
        ar: `${BASE}/ar/blog/${slug}`,
        "x-default": `${BASE}/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang)) notFound();
  const post = getPost(slug);
  if (!post) notFound();
  const t = post.lang[lang] || post.lang.en;
  const isAr = lang === "ar";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.excerpt,
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "Biodiversity.ae", url: BASE },
    url: `${BASE}/${lang}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main
        dir={isAr ? "rtl" : "ltr"}
        className="bg-ae-stone pt-28 pb-20"
      >
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href={`/${lang}/blog`}
            className="text-ae-muted text-sm hover:text-ae-ink transition-colors inline-flex items-center gap-1 mb-8"
          >
            {isAr ? "→ رجوع" : "← Back"}
          </Link>
          <time className="text-xs text-ae-muted font-medium tracking-wide uppercase block">
            {new Date(post.date).toLocaleDateString(isAr ? "ar-AE" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ae-ink mt-3 mb-8 leading-tight">
            {t.title}
          </h1>
          <div
            className="prose-ae max-w-none"
            dangerouslySetInnerHTML={{ __html: t.content }}
          />
          <div className="mt-14 pt-8 border-t border-ae-ink/10">
            <Link
              href={`/${lang}/blog`}
              className="text-ae-gold font-semibold text-sm hover:underline"
            >
              {isAr ? "→ جميع المقالات" : "← All articles"}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
