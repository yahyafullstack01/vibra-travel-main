"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  type Locale,
  type Messages,
  catalogs,
} from "@/lib/i18n/catalog";
import { getLocaleFromPathname } from "@/lib/i18n/path";
import { getMessageString } from "@/lib/i18n/translate";

const STORAGE_KEY = "vibra-locale";

function readBrowserLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  return getLocaleFromPathname(window.location.pathname);
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
  // usePathname re-renders on navigation; locale is read from the real browser URL
  // because middleware rewrites strip the locale prefix from the Next pathname.
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useLayoutEffect(() => {
    const next = readBrowserLocale();
    setLocaleState(next);
    applyDocumentLocale(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, [pathname]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyDocumentLocale(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
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
