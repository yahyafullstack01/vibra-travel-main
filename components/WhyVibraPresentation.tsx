"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./WhyVibraPresentation.module.css";

export function WhyVibraPresentation() {
  const { messages } = useLocale();
  const w = messages.whyVibra;

  return (
    <div className={styles.wvContainer}>
      <div className={styles.wvContent}>
        <p className={`${styles.title} cooper-font`}>
          {w.titleLine1}
          <br />
          {w.titleLine2}
        </p>
        <div className={styles.presentation}>
          <img
            src={media.photos.charlie}
            fetchPriority="high"
            alt={w.photoAlt}
            className={styles.image}
          />
          <div className={styles.presentationRight}>
            <h3>{w.heading}</h3>
            <p className={styles.desc}>{w.p1}</p>
            <p className={styles.desc}>{w.p2}</p>
            <p className={styles.desc}>{w.p3}</p>
            <p className={`${styles.desc} ${styles.p4Preserve}`}>{w.p4}</p>
            <p className={styles.desc}>{w.p5}</p>
            <p className={styles.desc}>{w.p6}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
