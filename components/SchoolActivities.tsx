"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./ExperienceGrid.module.css";

const schoolLayout: Record<number, { image: string; doubleWidth: boolean }> = {
  1: { image: media.photos.kidsPadel, doubleWidth: true },
  2: { image: media.photos.kidsFootball, doubleWidth: true },
  3: { image: media.photos.kidsKayaking, doubleWidth: true },
  4: { image: media.photos.classroom, doubleWidth: false },
  5: { image: media.photos.kidsCooking, doubleWidth: true },
  6: { image: media.photos.flamencoDancer, doubleWidth: true },
  7: { image: media.photos.footballStadium, doubleWidth: true },
  8: { image: media.photos.hostel, doubleWidth: false },
};

export function SchoolActivities() {
  const { messages } = useLocale();
  const section = messages.schools.schoolActivities;
  const items = section.items;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>

      <div className={styles.experiencesGrid}>
        {items.map((experience) => {
          const layout = schoolLayout[experience.id];
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
