"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Locale } from "./translations";

type TranslationData = (typeof translations)["es"];

interface I18nContextType {
  locale: Locale;
  t: TranslationData;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  t: translations.es,
  setLocale: () => {},
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "es" ? "en" : "es";
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  const t: TranslationData = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
