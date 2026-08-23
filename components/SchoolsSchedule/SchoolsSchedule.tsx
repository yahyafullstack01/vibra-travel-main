"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./SchoolsSchedule.module.css";

type ScheduleDay = {
  title: string;
  items: string[];
};

type LegacySchedule = {
  titleLine1: string;
  titleLine2: string;
  footerTitle: string;
  planTrip: string;
  days?: ScheduleDay[];
  day1Title?: string;
  day1i1?: string;
  day2Title?: string;
  day2i1?: string;
  day2i2?: string;
  day2i3?: string;
  day3Title?: string;
  day3i1?: string;
  day3i2?: string;
  day3i3?: string;
  day4Title?: string;
  day4i1?: string;
  day4i2?: string;
  day4i3?: string;
  day5Title?: string;
  day5i1?: string;
};

function getDays(s: LegacySchedule): ScheduleDay[] {
  if (Array.isArray(s.days) && s.days.length > 0) return s.days;

  return [
    { title: s.day1Title ?? "", items: [s.day1i1].filter(Boolean) as string[] },
    {
      title: s.day2Title ?? "",
      items: [s.day2i1, s.day2i2, s.day2i3].filter(Boolean) as string[],
    },
    {
      title: s.day3Title ?? "",
      items: [s.day3i1, s.day3i2, s.day3i3].filter(Boolean) as string[],
    },
    {
      title: s.day4Title ?? "",
      items: [s.day4i1, s.day4i2, s.day4i3].filter(Boolean) as string[],
    },
    { title: s.day5Title ?? "", items: [s.day5i1].filter(Boolean) as string[] },
  ].filter((day) => day.title);
}

export function SchoolsSchedule() {
  const { messages } = useLocale();
  const s = messages.schools.schedule as LegacySchedule;
  const days = getDays(s);

  return (
    <div className={styles.sContainer} id="timetable">
      <div className={styles.sContent}>
        <div className={`${styles.title} cooper-font`}>
          {s.titleLine1}
          <br />
          {s.titleLine2}
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
