"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../SchoolsSchedule/SchoolsSchedule.module.css";

export function CorporateSchedule() {
  const { messages } = useLocale();
  const s = messages.corporate.schedule;

  const days = [
    { title: s.day1Title, items: s.day1Items },
    { title: s.day2Title, items: s.day2Items },
    { title: s.day3Title, items: s.day3Items },
    { title: s.day4Title, items: s.day4Items },
  ];

  return (
    <div className={styles.sContainer} id="timetable">
      <div className={styles.sContent}>
        <div className={`${styles.title} cooper-font`}>
          {s.titleLine1}
          {s.titleLine2 ? (
            <>
              <br />
              {s.titleLine2}
            </>
          ) : null}
        </div>
        <div className={styles.scheduleContainer}>
          {days.map((day) => (
            <div className={styles.daySection} key={day.title}>
              <div className={styles.dayTitle}>
                <div className={styles.dayBullet} />
                {day.title}
              </div>
              <ul className={styles.activityList}>
                {day.items.map((item) => (
                  <li className={styles.activityItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.title} cooper-font`}>{s.footerTitle}</div>
        <Link href="/contact" className={`nav-link fgrotesk-font ${styles.buttonText}`}>
          {s.planTrip}
        </Link>
      </div>
    </div>
  );
}
