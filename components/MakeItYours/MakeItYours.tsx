"use client";

import { CultureGastronomy } from "@/components/CultureGastronomy/CultureGastronomy";
import { RelaxWellness } from "@/components/RelaxWellness/RelaxWellness";
import { SportsAdventure } from "@/components/SportsAdventure/SportsAdventure";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./MakeItYours.module.css";

export function MakeItYours() {
  const { messages } = useLocale();
  const m = messages.makeItYours;

  return (
    <div className={styles.miyContainer}>
      <div className={styles.miyContent}>
        <div className={styles.miyTop}>
          <p className={`${styles.topTitle} cooper-font`}>
            {m.titleLine1}
            <br />
            {m.titleBreak}
            <span className="orange">{m.titleAccent}</span>
          </p>
          <p className={styles.topSubtitle}>{m.subtitle}</p>
        </div>

        <div>
          <CultureGastronomy />
          <SportsAdventure />
          <RelaxWellness />
        </div>
      </div>
    </div>
  );
}
