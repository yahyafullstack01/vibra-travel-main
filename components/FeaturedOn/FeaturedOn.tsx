"use client";

import { partnerLogos } from "@/lib/partners";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./FeaturedOn.module.css";

export function FeaturedOn() {
  const { t } = useLocale();
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className={styles.featuredSection} aria-label={t("home.featuredLabel")}>
      <div className={styles.featuredInner}>
        <div className={styles.featuredHeading}>
          <p className={styles.featuredLabel}>{t("home.featuredLabel")}</p>
          {t("home.featuredIntro") ? (
            <p className={styles.featuredIntro}>{t("home.featuredIntro")}</p>
          ) : null}
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            <ul className={styles.logoRow}>
              {repeatedLogos.map((logo, idx) => (
                <li key={`${logo.src}-${idx}`} className={styles.logoItem}>
                  {logo.href ? (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.logoLink}
                      aria-label={logo.alt}
                    >
                      <img className={styles.logoImage} src={logo.src} alt="" />
                    </a>
                  ) : (
                    <img className={styles.logoImage} src={logo.src} alt={logo.alt} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
