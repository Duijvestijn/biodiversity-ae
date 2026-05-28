import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import WhyUAESection from "@/components/WhyUAESection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const SUPPORTED = ["ar", "en"];

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhyUAESection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
