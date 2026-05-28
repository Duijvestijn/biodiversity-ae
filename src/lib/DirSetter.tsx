"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/LangContext";

export function DirSetter() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
