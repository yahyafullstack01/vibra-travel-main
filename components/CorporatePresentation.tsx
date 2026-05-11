"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./CorporatePresentation.module.css";

export function CorporatePresentation() {
  const router = useRouter();
  const { messages } = useLocale();
  const p = messages.corporate.presentation;

  function goToTimetable(e: React.MouseEvent) {
    e.preventDefault();
    router.push("/groups#timetable");
  }

  return (
    <div className={styles.presentationContainer}>
      <div className={styles.presentationContent}>
        <div className={styles.leftContent}>
          <p className={`${styles.title} cooper-font`}>{p.title}</p>
          <p className={`${styles.desc} fgrotesk-font`}>{p.desc}</p>
          <div className={styles.buttons}>
            <Link href="/contact" className={`nav-link fgrotesk-font ${styles.planBtn}`}>
              {p.planTrip}
            </Link>
            <button
              type="button"
              className={`nav-link fgrotesk-font ${styles.imagineBtn}`}
              onClick={goToTimetable}
            >
              {p.imagineTrip}
            </button>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img
            src={media.photos.teamPresentation}
            fetchPriority="high"
            alt={p.heroAlt}
          />
        </div>
      </div>
    </div>
  );
}
