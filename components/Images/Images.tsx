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
    const [court, selfie, tomatina, paella] = media.photos.groupsGallery;
    const shots = [
      { src: court, alt: alt.groupsCourt, className: styles.groupsHero },
      { src: selfie, alt: alt.groupsSelfie, className: styles.groupsSideTop },
      { src: tomatina, alt: alt.groupsTomatina, className: styles.groupsSideBottom },
      { src: paella, alt: alt.groupsPaella, className: styles.groupsWide },
    ];

    return (
      <section className={styles.groupsSection} aria-label={alt.groupsSection}>
        <div className={styles.groupsGrid}>
          {shots.map((shot) => (
            <figure key={shot.src} className={`${styles.groupsFigure} ${shot.className}`}>
              <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
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
