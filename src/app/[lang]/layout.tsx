import { notFound } from "next/navigation";
import { LangProvider, type Lang } from "@/lib/LangContext";
import { DirSetter } from "@/lib/DirSetter";

const SUPPORTED: Lang[] = ["ar", "en"];
const BASE = "https://biodiversity.ae";

const TITLES: Record<Lang, string> = {
  ar: "Biodiversity.ae — التنوع البيولوجي وتمويل المناخ في الإمارات",
  en: "Biodiversity.ae — UAE Biodiversity & Carbon Finance",
};
const DESCS: Record<Lang, string> = {
  ar: "الإمارات تقود الشرق الأوسط في التزامات التنوع البيولوجي وتمويل المناخ — من غابات المانغروف إلى مشاريع COP28.",
  en: "The UAE leads the Middle East in biodiversity commitments and climate finance — from mangrove forests to COP28 pledges.",
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (SUPPORTED.includes(rawLang as Lang) ? rawLang : "ar") as Lang;
  return {
    title: TITLES[lang],
    description: DESCS[lang],
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages: { ar: `${BASE}/ar`, en: `${BASE}/en`, "x-default": `${BASE}/ar` },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang as Lang)) notFound();
  return (
    <LangProvider initialLang={lang as Lang}>
      <DirSetter />
      {children}
    </LangProvider>
  );
}
