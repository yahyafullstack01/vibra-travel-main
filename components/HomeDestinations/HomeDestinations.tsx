"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomeDestinations.module.css";

const destinationImages = {
  valencia: media.photos.valencia,
  sevilla: media.photos.seville,
} as const;

export function HomeDestinations() {
  const { messages } = useLocale();
  const section = messages.homeDestinations;

  return (
    <section className={styles.section} aria-labelledby="home-destinations-title">
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 id="home-destinations-title" className={`${styles.title} cooper-font`}>
            {section.title}
          </h2>
          {section.subtitle ? (
            <p className={styles.subtitle}>{section.subtitle}</p>
          ) : null}
        </div>

        <div className={styles.grid}>
          {section.items.map((item) => {
            const imageSrc =
              destinationImages[item.id as keyof typeof destinationImages] ??
              media.photos.valencia;

            return (
              <article className={styles.card} key={item.id}>
                <div className={styles.media}>
                  <img
                    src={imageSrc}
                    alt={item.imageAlt}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={`${styles.cardTitle} cooper-font`}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>{section.note}</p>
      </div>
    </section>
  );
}
