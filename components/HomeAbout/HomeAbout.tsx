"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomeAbout.module.css";

export function HomeAbout() {
  const { messages, t } = useLocale();
  const about = messages.homeAbout;

  return (
    <section className={styles.section} aria-labelledby="home-about-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.panel}>
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageAccent} aria-hidden="true" />
              <div className={styles.imageWrap}>
                <img
                  src={media.photos.homeAbout}
                  alt={about.imageAlt}
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>{about.eyebrow}</p>
            <h2 id="home-about-title" className={`${styles.title} cooper-font`}>
              {about.title}
            </h2>
            <p className={styles.description}>{about.description}</p>
            <Link href="/why-vibra" className={`${styles.cta} fgrotesk-font`}>
              {t("nav.whyVibra")}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
