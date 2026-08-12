"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../ExperienceGrid/ExperienceGrid.module.css";

const relaxLayout: Record<number, { image: string; doubleWidth: boolean }> = {
  1: { image: media.photos.yoga, doubleWidth: false },
  3: { image: media.photos.massage, doubleWidth: true },
};

export function RelaxWellness() {
  const { messages } = useLocale();
  const title = messages.experiences.relaxTitle;
  const items = messages.experiences.relax;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.experiencesGrid}>
        {items.map((experience) => {
          const layout = relaxLayout[experience.id];
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
