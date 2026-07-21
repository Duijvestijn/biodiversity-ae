import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";
import Script from "next/script";

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
    template: "%s",
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
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "biodiversity.ae — UAE Biodiversity & Carbon" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.svg"],
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
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MDF4N4PW');`}
      </Script>
      <body className="bg-ae-dark text-ae-sand antialiased overflow-x-hidden font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDF4N4PW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LenisProvider>{children}</LenisProvider>
        <Script id="hs-script-loader" src="//js.hs-scripts.com/8515463.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
