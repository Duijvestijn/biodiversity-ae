"use client";
import Link from "next/link";

type Props = { slug: string; title: string; excerpt: string; date: string; lang: string };

export default function BlogCard({ slug, title, excerpt, date, lang }: Props) {
  const isRtl = lang === "ar";
  const readMore = isRtl ? "اقرأ المزيد →" : "Read more →";

  return (
    <Link href={`/${lang}/blog/${slug}`} className="block group">
      <article
        dir={isRtl ? "rtl" : "ltr"}
        className="bg-white rounded-2xl border border-black/[0.07] p-6 hover:shadow-md transition-shadow"
      >
        <time className="text-xs text-ae-muted font-medium tracking-wide uppercase">
          {new Date(date).toLocaleDateString(isRtl ? "ar-AE" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="font-serif text-lg font-bold text-ae-ink mt-2 mb-3 group-hover:text-ae-gold transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-ae-muted text-sm leading-relaxed">{excerpt}</p>
        <span className="text-ae-gold font-semibold text-sm mt-4 inline-block">{readMore}</span>
      </article>
    </Link>
  );
}
