"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "./ForEveryTeam.module.css";

export function ForEveryTeam() {
  const { messages } = useLocale();
  const f = messages.corporate.forEveryTeam;

  return (
    <div className={styles.fetContainer}>
      <div className={styles.fetContent}>
        <div className={styles.fetTop}>
          <div className={styles.fetTopTitle}>
            <p className="cooper-font">
              {f.titleLine1}
              <br />
              {f.titleLine2}
            </p>
          </div>
          <div className={styles.fetTopSubtitle}>
            <p>
              {f.p1Before}
              <span className="orange">Barcelona</span>
              {f.p1Mid}
              <span className="orange">Sevilla</span>
              {f.p1After}
              <br />
              <br />
              {f.p2}
              <br />
              <br />
              {f.p3}
            </p>
          </div>
        </div>
        <div className={styles.fetBottom} />
      </div>
    </div>
  );
}
