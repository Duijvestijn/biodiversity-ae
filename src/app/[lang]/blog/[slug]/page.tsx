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
      canonical: `${BASE}/${lang}/blog/${slug}`,
      languages: {
        "en-AE": `${BASE}/en/blog/${slug}`,
        "ar-AE": `${BASE}/ar/blog/${slug}`,
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

  const related = posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Biodiversity.ae Research" },
    publisher: { "@type": "Organization", name: "Biodiversity.ae", url: BASE },
    url: `${BASE}/${lang}/blog/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isAr ? "الرئيسية" : "Home",
        item: `${BASE}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isAr ? "تحليلات" : "Insights",
        item: `${BASE}/${lang}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.title,
        item: `${BASE}/${lang}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main
        dir={isAr ? "rtl" : "ltr"}
        className="bg-ae-stone pt-28 pb-20"
      >
        <article className="max-w-2xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-ae-muted mb-8 flex-wrap">
            <Link href={`/${lang}`} className="hover:text-ae-gold transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <span className="text-ae-muted/40">/</span>
            <Link href={`/${lang}/blog`} className="hover:text-ae-gold transition-colors">
              {isAr ? "تحليلات" : "Insights"}
            </Link>
            <span className="text-ae-muted/40">/</span>
            <span className="text-ae-ink/60 truncate max-w-[200px]">{t.title}</span>
          </nav>

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

        {/* Related articles */}
        {related.length > 0 && (
          <div className="max-w-2xl mx-auto px-6 mt-16">
            <h2 className="font-serif text-xl font-bold text-ae-ink mb-6">
              {isAr ? "مقالات ذات صلة" : "Related articles"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((rel) => {
                const rt = rel.lang[lang] || rel.lang.en;
                return (
                  <Link
                    key={rel.slug}
                    href={`/${lang}/blog/${rel.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-black/[0.06] p-5 hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="h-0.5 w-full bg-ae-gold rounded-full mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <time className="text-xs text-ae-muted font-medium tracking-wide uppercase mb-2">
                      {new Date(rel.date).toLocaleDateString(isAr ? "ar-AE" : "en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                    <h3 className="font-serif text-sm font-bold text-ae-ink leading-snug group-hover:text-ae-gold transition-colors">
                      {rt.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
