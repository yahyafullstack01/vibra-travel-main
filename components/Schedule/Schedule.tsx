"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Schedule.module.css";

export function Schedule() {
  const { messages } = useLocale();
  const s = messages.groups.schedule;

  return (
    <div className={styles.sContainer} id="timetable">
      <div className={styles.sContent}>
        <div className={`${styles.title} cooper-font`}>
          {s.titleLine1}
          <br />
          {s.titleLine2}
        </div>
        <div className={styles.scheduleContainer}>
          <div className={styles.daySection}>
            <div className={styles.dayTitle}>
              <div className={styles.dayBullet} />
              {s.day1Title}
            </div>
            <ul className={styles.activityList}>
              <li className={styles.activityItem}>{s.day1i1}</li>
              <li className={styles.activityItem}>{s.day1i2}</li>
              <li className={styles.activityItem}>{s.day1i3}</li>
            </ul>
          </div>

          <div className={styles.daySection}>
            <div className={styles.dayTitle}>
              <div className={styles.dayBullet} />
              {s.day2Title}
            </div>
            <ul className={styles.activityList}>
              <li className={styles.activityItem}>{s.day2i1}</li>
              <li className={styles.activityItem}>{s.day2i2}</li>
              <li className={styles.activityItem}>{s.day2i3}</li>
              <li className={styles.activityItem}>{s.day2i4}</li>
            </ul>
          </div>

          <div className={styles.daySection}>
            <div className={styles.dayTitle}>
              <div className={styles.dayBullet} />
              {s.day3Title}
            </div>
            <ul className={styles.activityList}>
              <li className={styles.activityItem}>{s.day3i1}</li>
              <li className={styles.activityItem}>{s.day3i2}</li>
              <li className={styles.activityItem}>{s.day3i3}</li>
            </ul>
          </div>

          <div className={styles.daySection}>
            <div className={styles.dayTitle}>
              <div className={styles.dayBullet} />
              {s.day4Title}
            </div>
            <ul className={styles.activityList}>
              <li className={styles.activityItem}>{s.day4i1}</li>
              <li className={styles.activityItem}>{s.day4i2}</li>
              <li className={styles.activityItem}>{s.day4i3}</li>
              <li className={styles.activityItem}>{s.day4i4}</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.title} cooper-font`}>{s.footerTitle}</div>
        <Link href="/contact" className={`nav-link fgrotesk-font ${styles.buttonText}`}>
          {s.planTrip}
        </Link>
      </div>
    </div>
  );
}
