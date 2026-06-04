"use client";

import Link from "next/link";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Testemonials.module.css";

export function Testemonials() {
  const { messages } = useLocale();
  const t = messages.testemonials;

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1 className={`${styles.title} cooper-font`}>{t.title}</h1>
            <p className={styles.intro}>{t.intro}</p>
            <Link href="/contact" className={`nav-link ${styles.cta}`}>
              {t.cta}
            </Link>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src={media.photos.resting}
              fetchPriority="high"
              alt={t.heroAlt}
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.grid} aria-label={t.listLabel}>
          {t.items.map((item) => (
            <article className={styles.card} key={item.name}>
              <div className={styles.rating} aria-label={item.ratingLabel}>
                {"★★★★★"}
              </div>
              <p className={styles.quote}>“{item.quote}”</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden>
                  {item.initials}
                </span>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.meta}>{item.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
