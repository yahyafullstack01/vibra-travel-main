"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./ContactPresentation.module.css";

export function ContactPresentation() {
  const { messages } = useLocale();
  const c = messages.contact;

  return (
    <div className={styles.presentationContainer}>
      <div className={styles.presentationContent}>
        <div className={styles.presentationImage}>
          <img src={media.photos.charlie} fetchPriority="high" alt={c.photoAlt} />
        </div>
        <div className={styles.presentationText}>
          <p className={`${styles.presentationTitle} cooper-font`}>
            {c.titleLine1}
            <br />
            {c.titleLine2}
          </p>
          <p className={styles.desc}>{c.desc}</p>
        </div>
      </div>
    </div>
  );
}
