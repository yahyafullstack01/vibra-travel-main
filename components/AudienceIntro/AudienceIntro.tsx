"use client";

import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./AudienceIntro.module.css";

type AudienceIntroProps = {
  audience: "business" | "schools";
};

export function AudienceIntro({ audience }: AudienceIntroProps) {
  const { messages } = useLocale();
  const intro = messages.audienceIntro[audience];

  return (
    <section
      className={`${styles.section} ${audience === "business" ? styles.businessSection : ""}`}
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          {intro.eyebrow ? (
            <p className={styles.eyebrow}>{intro.eyebrow}</p>
          ) : null}
          <h2 className={`${styles.title} cooper-font`}>{intro.title}</h2>
          {intro.description ? (
            <p className={styles.description}>{intro.description}</p>
          ) : null}
        </div>
        <div className={styles.points}>
          {intro.points.map((point, index) => (
            <article className={styles.point} key={point.title}>
              <span className={styles.pointIndex}>{String(index + 1).padStart(2, "0")}</span>
              <p className={styles.pointTitle}>{point.title}</p>
              <p className={styles.pointText}>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
