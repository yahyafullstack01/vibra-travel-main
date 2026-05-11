"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./Images.module.css";

export function Images() {
  const { messages } = useLocale();
  const alt = messages.images;

  return (
    <div className={styles.imagesContainer}>
      <div className={styles.imagesContent}>
        <div className={styles.leftImages}>
          <div className={styles.topLeft}>
            <img
              src={media.photos.resting}
              decoding="async"
              loading="lazy"
              alt={alt.resting}
            />
          </div>
          <div className={styles.bottomLeft}>
            <img
              src={media.photos.paella}
              decoding="async"
              loading="lazy"
              alt={alt.paella}
            />
          </div>
        </div>
        <div className={styles.rightImages}>
          <img
            className={styles.walkImg}
            src={media.photos.walk}
            decoding="async"
            loading="lazy"
            alt={alt.walk}
          />
          <img
            className={styles.beersImg}
            src={media.photos.beers}
            decoding="async"
            loading="lazy"
            alt={alt.beers}
          />
        </div>
      </div>
    </div>
  );
}
