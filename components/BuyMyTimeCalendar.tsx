"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "./Calendar.module.css";

export function BuyMyTimeCalendar() {
  const { messages } = useLocale();

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarContent}>
        <iframe
          title={messages.buyMyTime.iframeTitle}
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EAhHjYwRs0wE69Jb-yRwvf3zWNcRfZuEeYl05dvobOQR9nwwppDczxwrT4I0IdYPSBiwh60PV?gv=true"
          width="100%"
          height={900}
        />
      </div>
    </div>
  );
}
