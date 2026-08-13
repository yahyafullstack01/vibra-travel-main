"use client";

import { useEffect, useRef, useState } from "react";
import { partnerPromos } from "@/lib/partnerPromos";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./PartnerPromos.module.css";

export function PartnerPromos() {
  const { messages } = useLocale();
  const section = messages.partnerPromos;
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const copyCode = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedId(null);
        copyTimeoutRef.current = null;
      }, 2000);
    } catch {
      setCopiedId(null);
    }
  };

  const visiblePartners = partnerPromos.filter(
    (partner) => section.partners[partner.id as keyof typeof section.partners],
  );

  return (
    <section className={styles.section} id="partner-perks">
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 className={`${styles.title} cooper-font`}>{section.title}</h2>
          {section.subtitle ? (
            <p className={styles.subtitle}>{section.subtitle}</p>
          ) : null}
        </div>

        <div className={styles.grid}>
          {visiblePartners.map((partner) => {
            const copy = section.partners[partner.id as keyof typeof section.partners];
            const isCopied = copiedId === partner.id;

            return (
              <article className={styles.card} key={partner.id}>
                <div className={styles.logoWrap}>
                  <img
                    src={partner.logo}
                    alt={copy.name}
                    className={`${styles.logo}${partner.logoDark ? ` ${styles.logoLight}` : ""}`}
                    loading="lazy"
                    decoding="async"
                  />
                  {partner.logoDark ? (
                    <img
                      src={partner.logoDark}
                      alt=""
                      aria-hidden="true"
                      className={`${styles.logo} ${styles.logoDark}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>

                <h3 className={`${styles.partnerName} cooper-font`}>{copy.name}</h3>
                <p className={styles.description}>{copy.description}</p>

                <div className={styles.promoBlock}>
                  <p className={styles.promoLabel}>{section.promoLabel}</p>
                  <div className={styles.promoRow}>
                    <span className={styles.promoCode}>{copy.promoCode}</span>
                    <button
                      type="button"
                      className={`${styles.copyBtn} ${isCopied ? styles.copyBtnCopied : ""}`}
                      onClick={() => copyCode(partner.id, copy.promoCode)}
                    >
                      {isCopied ? section.copied : section.copyCode}
                    </button>
                  </div>
                </div>

                <a
                  href={partner.href}
                  className={`nav-link fgrotesk-font ${styles.shopLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.shopNow}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
