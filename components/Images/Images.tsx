"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Images.module.css";

export function Images() {
  const { messages } = useLocale();
  const alt = messages.images;
  const pics = media.photos.padelPics;

  return (
    <div className={styles.imagesContainer}>
      <div className={styles.imagesContent}>
        <div className={styles.leftImages}>
          <div className={styles.topLeft}>
            <img
              src={pics.privatePage}
              decoding="async"
              loading="lazy"
              alt={alt.resting}
            />
          </div>
          <div className={styles.bottomLeft}>
            <img
              src={pics.paella}
              decoding="async"
              loading="lazy"
              alt={alt.paella}
            />
          </div>
        </div>
        <div className={styles.rightImages}>
          <img
            className={styles.walkImg}
            src={pics.privateGroups}
            decoding="async"
            loading="lazy"
            alt={alt.walk}
          />
          <img
            className={styles.beersImg}
            src={pics.beers}
            decoding="async"
            loading="lazy"
            alt={alt.beers}
          />
        </div>
      </div>
    </div>
  );
}
