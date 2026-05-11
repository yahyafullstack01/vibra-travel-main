"use client";

import { SchoolActivities } from "@/components/SchoolActivities";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./ChooseYourActivities.module.css";

export function ChooseYourActivities() {
  const { messages } = useLocale();
  const c = messages.schools.chooseActivities;

  return (
    <div className={styles.cyaContainer}>
      <div className={styles.cyaContent}>
        <div className={styles.cyaTop}>
          <p className={`${styles.topTitle} cooper-font`}>
            {c.titleBefore}
            <span className="orange">{c.titleAccent}</span>
          </p>
          <p className={styles.topSubtitle}>{c.subtitle}</p>
        </div>

        <div>
          <SchoolActivities />

          <p className={styles.note}>{c.note}</p>
        </div>
      </div>
    </div>
  );
}
