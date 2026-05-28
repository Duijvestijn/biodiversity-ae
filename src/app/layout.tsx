import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Biodiversity.ae",
  alternateName: ["UAE Biodiversity", "التنوع البيولوجي الإمارات"],
  url: "https://biodiversity.ae",
  description:
    "UAE's leading platform for biodiversity and carbon finance — mangrove forests, afforestation, and nature reserves under Verra VCS and COP28 commitments.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  knowsAbout: [
    "Carbon Credits", "Biodiversity UAE", "Mangrove Blue Carbon",
    "COP28", "Net Zero 2050", "Verra VCS", "UAE Climate Finance",
    "Nature Positive", "Afforestation UAE",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Biodiversity.ae — UAE Biodiversity & Carbon Finance",
    template: "%s | Biodiversity.ae",
  },
  description:
    "The UAE leads the Middle East in biodiversity commitments and climate finance. From Abu Dhabi's mangrove forests to COP28 pledges — building a green future for the Arabian Peninsula.",
  keywords: [
    "biodiversity UAE", "carbon credits UAE", "mangrove carbon UAE",
    "COP28 carbon", "UAE climate finance", "blue carbon Middle East",
    "التنوع البيولوجي الإمارات", "ائتمانات الكربون الإمارات",
  ],
  openGraph: {
    type: "website",
    siteName: "Biodiversity.ae",
    url: "https://biodiversity.ae",
    title: "Biodiversity.ae — UAE Biodiversity & Carbon Finance",
    description: "The UAE leads the Middle East in biodiversity and climate finance.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://biodiversity.ae"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-ae-dark text-ae-sand antialiased overflow-x-hidden font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
