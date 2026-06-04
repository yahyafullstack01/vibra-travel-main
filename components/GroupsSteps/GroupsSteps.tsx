"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./GroupsSteps.module.css";

export function GroupsSteps() {
  const { messages } = useLocale();
  const g = messages.groupsSteps;

  return (
    <div className={styles.ptsContainer}>
      <div className={styles.ptsContent}>
        <div className={styles.ptsTop}>
          <div className={styles.ptsTopTitle}>
            <p className="cooper-font">{g.title}</p>
          </div>
          <div className={styles.ptsTopSubtitle}>
            <p>{g.subtitle}</p>
          </div>
        </div>
        <div className={styles.ptsBottom}>
          <div className={styles.ptsCard}>
            <div className={styles.ptsBottomNumber}>
              <p>1</p>
            </div>
            <div className={styles.ptsBottomTitle}>
              <p>{g.step1Title}</p>
            </div>
            <div className={styles.ptsBottomDesc}>{g.step1Desc}</div>
          </div>
          <div className={styles.ptsCard}>
            <div className={styles.ptsBottomNumber}>
              <p>2</p>
            </div>
            <div className={styles.ptsBottomTitle}>
              <p>{g.step2Title}</p>
            </div>
            <div className={styles.ptsBottomDesc}>{g.step2Desc}</div>
          </div>
          <div className={styles.ptsCard}>
            <div className={styles.ptsBottomNumber}>
              <p>3</p>
            </div>
            <div className={styles.ptsBottomTitle}>
              <p>{g.step3Title}</p>
            </div>
            <div className={styles.ptsBottomDesc}>
              {g.step3Desc}
              <Link href="/contact" className={`nav-link fgrotesk-font ${styles.navLink}`}>
                <span className={styles.startNow}>{g.startNow}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
