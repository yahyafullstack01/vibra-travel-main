"use client";

import Link from "next/link";
import { HomeVideo } from "@/components/HomeVideo";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./HomePresentation.module.css";

export function HomePresentation() {
  const { messages } = useLocale();
  const h = messages.home;

  return (
    <div className={styles.presentationContainer}>
      <div className={styles.presentationContent}>
        <div className={styles.presentationVideo}>
          <HomeVideo className={styles.video} />
          <div className={styles.videoOverlay}>
            <h2 className={`${styles.videoTitle} cooper-font`}>
              {h.videoLine1}
              <span style={{ display: "block" }} />
              {h.videoLine2}
            </h2>
          </div>
        </div>
        <div className={styles.presentationText}>
          <p className={`${styles.presentationTitle} cooper-font`}>
            {h.subtitleBefore}
            <span className="orange">Barcelona</span>
            {h.subtitleBetween}
            <span className="orange">Sevilla</span>
            {h.subtitleAfter}
          </p>
          <Link href="/groups" className={`${styles.presentationButton} fgrotesk-font`}>
            <p className={styles.buttonText}>{h.planTrip}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
