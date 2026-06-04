"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALE_LABELS, LOCALES } from "@/lib/i18n/catalog";
import { IconGlobeOutline } from "@/components/icons/IconGlobeOutline";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
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
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
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
