"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Destinations.module.css";

export function Destinations() {
  const { messages } = useLocale();
  const d = messages.schools.destinations;

  return (
    <div className={styles.dtContainer}>
      <h2 className={`${styles.dtTitle} cooper-font`}>{d.title}</h2>
      <div className={styles.dtCards}>
        <div className={styles.destCard}>
          <img src={media.photos.bcn} alt={d.barcelonaTitle} />
          <div className={styles.destInfo}>
            <h3 className={styles.destTitle}>{d.barcelonaTitle}</h3>
            <p className={styles.destDesc}>{d.barcelonaDesc}</p>
          </div>
        </div>

        <div className={styles.destCard}>
          <img src={media.photos.seville} alt={d.sevilleTitle} />
          <div className={styles.destInfo}>
            <h3 className={styles.destTitle}>{d.sevilleTitle}</h3>
            <p className={styles.destDesc}>{d.sevilleDesc}</p>
          </div>
        </div>

        <div className={styles.destCard}>
          <img src={media.photos.valencia} alt={d.valenciaTitle} />
          <div className={styles.destInfo}>
            <h3 className={styles.destTitle}>{d.valenciaTitle}</h3>
            <p className={styles.destDesc}>{d.valenciaDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
