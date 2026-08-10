"use client";

import { useEffect } from "react";
import { CultureGastronomy } from "@/components/CultureGastronomy/CultureGastronomy";
import { RelaxWellness } from "@/components/RelaxWellness/RelaxWellness";
import { SportsAdventure } from "@/components/SportsAdventure/SportsAdventure";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./MakeItYours.module.css";

function scrollToActivitiesSection() {
  const el = document.getElementById("activities");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function MakeItYours() {
  const { messages } = useLocale();
  const m = messages.makeItYours;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#activities") return;

    const timeoutId = window.setTimeout(scrollToActivitiesSection, 80);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className={styles.miyContainer} id="activities" aria-label={m.titleAccent}>
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
    </section>
  );
}
