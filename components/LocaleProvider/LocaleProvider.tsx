"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  type Locale,
  type Messages,
  catalogs,
  isLocale,
} from "@/lib/i18n/catalog";
import { getMessageString } from "@/lib/i18n/translate";

const STORAGE_KEY = "vibra-locale";
const STORAGE_VERSION_KEY = "vibra-locale-default";
const STORAGE_VERSION = "en-v1";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const version = localStorage.getItem(STORAGE_VERSION_KEY);
    if (version !== STORAGE_VERSION) {
      localStorage.setItem(STORAGE_KEY, DEFAULT_LOCALE);
      localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
      return DEFAULT_LOCALE;
    }

    const v = localStorage.getItem(STORAGE_KEY);
    if (isLocale(v)) return v;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("lang", locale);
  root.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  messages: Messages;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const next = readStoredLocale();
    setLocaleState(next);
    applyDocumentLocale(next);
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    applyDocumentLocale(locale);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
      localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
    } catch {
      /* ignore */
    }
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const messages = catalogs[locale];
  const defaults = catalogs[DEFAULT_LOCALE];

  const t = useCallback(
    (path: string) => {
      const cur = messages as unknown as Record<string, unknown>;
      const def = defaults as unknown as Record<string, unknown>;
      let s = getMessageString(cur, path);
      if (s === undefined) s = getMessageString(def, path);
      return s ?? path;
    },
    [messages, defaults],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
