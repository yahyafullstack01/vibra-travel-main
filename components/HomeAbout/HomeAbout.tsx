"use client";

import Link from "next/link";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomeAbout.module.css";

export function HomeAbout() {
  const { messages, t } = useLocale();
  const about = messages.homeAbout;

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img src={media.photos.charlie} alt={about.imageAlt} className={styles.image} />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{about.eyebrow}</p>
          <h2 className={`${styles.title} cooper-font`}>{about.title}</h2>
          <p className={styles.description}>{about.description}</p>
          <Link href="/why-vibra" className={`nav-link ${styles.link}`}>
            {t("nav.whyVibra")}
          </Link>
        </div>
      </div>
    </section>
  );
}
