"use client";

import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./FeaturedOn.module.css";

const logos = [
  { src: "/featured/court-culture.svg", alt: "Court & Culture" },
  { src: "/featured/padel-hub.svg", alt: "Padel Hub" },
  { src: "/featured/spain-collective.svg", alt: "Spain Collective" },
  { src: "/featured/travel-circuit.svg", alt: "Travel Circuit" },
];

export function FeaturedOn() {
  const { t } = useLocale();
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className={styles.featuredSection} aria-label={t("home.featuredLabel")}>
      <div className={styles.featuredInner}>
        <div className={styles.featuredHeading}>
          <p className={styles.featuredLabel}>{t("home.featuredLabel")}</p>
          <p className={styles.featuredIntro}>{t("home.featuredIntro")}</p>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            <ul className={styles.logoRow}>
              {repeatedLogos.map((logo, idx) => (
                <li key={`${logo.src}-${idx}`} className={styles.logoItem}>
                  <img className={styles.logoImage} src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
