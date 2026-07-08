"use client";

import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./ForEveryTeam.module.css";

export function ForEveryTeam() {
  const { messages } = useLocale();
  const f = messages.corporate.forEveryTeam;

  return (
    <div className={styles.fetContainer}>
      <div className={styles.fetContent}>
        <div className={styles.fetTop}>
          <div className={styles.fetTopTitle}>
            <p className="cooper-font">{f.title}</p>
          </div>
          <div className={styles.fetTopSubtitle}>
            <p>{f.p1}</p>
            <p>{f.p2}</p>
          </div>
        </div>
        <div className={styles.fetBottom}>
          <p className={styles.inclusionsLabel}>{f.inclusionsLabel}</p>
          <ul className={styles.inclusionsList}>
            {f.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
