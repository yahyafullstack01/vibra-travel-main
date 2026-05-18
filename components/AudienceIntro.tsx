"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "./AudienceIntro.module.css";

type AudienceIntroProps = {
  audience: "business" | "schools";
};

export function AudienceIntro({ audience }: AudienceIntroProps) {
  const { messages } = useLocale();
  const intro = messages.audienceIntro[audience];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{intro.eyebrow}</p>
          <h2 className={`${styles.title} cooper-font`}>{intro.title}</h2>
          <p className={styles.description}>{intro.description}</p>
        </div>
        <div className={styles.points}>
          {intro.points.map((point) => (
            <article className={styles.point} key={point.title}>
              <p className={styles.pointTitle}>{point.title}</p>
              <p className={styles.pointText}>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
