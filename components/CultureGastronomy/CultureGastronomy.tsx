"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../ExperienceGrid/ExperienceGrid.module.css";

const cultureLayout: Record<number, { image: string; doubleWidth: boolean }> = {
  1: { image: media.photos.vineyard, doubleWidth: true },
  3: { image: media.photos.laLigaMatchdaySevilla, doubleWidth: false },
  4: { image: media.photos.tapasTour, doubleWidth: true },
  6: { image: media.photos.flamencoShowSevilla, doubleWidth: false },
  7: { image: media.photos.foodMarketCookingClass, doubleWidth: false },
};

export function CultureGastronomy() {
  const { messages } = useLocale();
  const title = messages.experiences.cultureTitle;
  const items = messages.experiences.culture;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.experiencesGrid}>
        {items.map((experience) => {
          const layout = cultureLayout[experience.id];
          if (!layout) return null;
          return (
            <div
              key={experience.id}
              className={`${styles.experienceCard} ${layout.doubleWidth ? styles.doubleWidth : ""}`}
            >
              <div className={styles.imageContainer}>
                <img src={layout.image} alt={experience.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
