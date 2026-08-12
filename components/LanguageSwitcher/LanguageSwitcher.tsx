"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/catalog";
import { stripLocaleFromPathname, withLocalePrefix } from "@/lib/i18n/path";
import { IconGlobeOutline } from "@/components/icons/IconGlobeOutline";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function switchLocale(code: Locale) {
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : pathname;
    const barePath = stripLocaleFromPathname(currentPath);
    const nextPath = withLocalePrefix(barePath, code);
    setLocale(code);
    setOpen(false);
    if (nextPath !== currentPath) {
      router.push(nextPath);
    }
  }

  return (
    <div className={styles.wrap} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("a11y.chooseLanguage")}
        onClick={() => setOpen((o) => !o)}
      >
        <IconGlobeOutline className={styles.triggerIcon} />
        <span className={styles.triggerCode} suppressHydrationWarning>
          {locale.toUpperCase()}
        </span>
      </button>
      {open ? (
        <ul className={styles.menu} role="listbox" aria-label={t("a11y.language")}>
          {LOCALES.map((code) => (
            <li key={code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className={`${styles.option} ${code === locale ? styles.optionActive : ""}`}
                onClick={() => switchLocale(code)}
              >
                <span className={styles.optionLabel}>{LOCALE_LABELS[code]}</span>
                <span className={styles.optionCode}>{code.toUpperCase()}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
