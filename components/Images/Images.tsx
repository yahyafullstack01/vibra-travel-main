"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Images.module.css";

type ImagesProps = {
  variant?: "default" | "business" | "schools" | "groups";
};

export function Images({ variant = "default" }: ImagesProps) {
  const { messages } = useLocale();
  const alt = messages.images;

  if (variant === "groups") {
    const [hero, , action, lifestyle] = media.photos.groupsGallery;
    const shots = [
      { src: hero, alt: alt.resting },
      { src: action, alt: alt.walk },
      { src: lifestyle, alt: alt.beers },
    ];

    return (
      <section className={styles.groupsSection} aria-label={alt.walk}>
        <div className={styles.groupsGrid}>
          <figure className={`${styles.groupsFigure} ${styles.groupsHero}`}>
            <img src={shots[0].src} alt={shots[0].alt} loading="lazy" decoding="async" />
          </figure>
          <figure className={`${styles.groupsFigure} ${styles.groupsSideTop}`}>
            <img src={shots[1].src} alt={shots[1].alt} loading="lazy" decoding="async" />
          </figure>
          <figure className={`${styles.groupsFigure} ${styles.groupsSideBottom}`}>
            <img src={shots[2].src} alt={shots[2].alt} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>
    );
  }

  const pics =
    variant === "business"
      ? {
          privatePage: media.photos.businessGallery[0],
          paella: media.photos.businessGallery[1],
          privateGroups: media.photos.businessGallery[2],
          beers: media.photos.businessGallery[3],
        }
      : variant === "schools"
        ? {
            privatePage: media.photos.schoolsGallery[0],
            paella: media.photos.schoolsGallery[1],
            privateGroups: media.photos.schoolsGallery[2],
            beers: media.photos.schoolsGallery[3],
          }
        : media.photos.padelPics;

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
