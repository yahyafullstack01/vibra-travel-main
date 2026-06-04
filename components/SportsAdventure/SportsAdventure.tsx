"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../ExperienceGrid/ExperienceGrid.module.css";

const sportsLayout: Record<number, { image: string; doubleWidth: boolean }> = {
  1: { image: media.photos.hike, doubleWidth: true },
  2: { image: media.photos.golf, doubleWidth: false },
  4: { image: media.photos.running, doubleWidth: false },
  5: { image: media.photos.kayak, doubleWidth: false },
};

export function SportsAdventure() {
  const { messages } = useLocale();
  const title = messages.experiences.sportsTitle;
  const items = messages.experiences.sports;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.experiencesGrid}>
        {items.map((experience) => {
          const layout = sportsLayout[experience.id];
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
