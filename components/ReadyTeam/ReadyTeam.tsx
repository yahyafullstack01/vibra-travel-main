"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { IconBallTR } from "@/components/icons/IconBallTR";
import { IconBallTRDark } from "@/components/icons/IconBallTRDark";
import { IconBallBL } from "@/components/icons/IconBallBL";
import { IconBallBLDark } from "@/components/icons/IconBallBLDark";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../ReadyCta/ReadyCta.module.css";

export function ReadyTeam({ variant }: { variant?: string }) {
  const { messages } = useLocale();
  const r = messages.corporate.readyTeam;
  const orange = variant === "orange";
  const BallTR = orange ? IconBallTRDark : IconBallTR;
  const BallBL = orange ? IconBallBLDark : IconBallBL;

  return (
    <section className={styles.readySection}>
      <div
        className={`${styles.readyContainer} ${orange ? styles.orangeVariant : ""}`}
      >
        <div className={styles.trDecoration}>
          <BallBL />
        </div>
        <div className={styles.readyContent}>
          <div className={`${styles.readyItems} cooper-font`}>
            <div className={styles.title}>
              {r.titleLine1}
              <br />
              <span className={orange ? "" : "orange"}>{r.titleAccent}</span>
              {r.titleLine2}
            </div>
            <p className={`${styles.description} fgrotesk-font`}>{r.description}</p>
            <Link href="/contact" className={`nav-link fgrotesk-font ${styles.buttonLink}`}>
              {r.planTrip}
            </Link>
          </div>
        </div>
        <div className={styles.blDecoration}>
          <BallTR />
        </div>
      </div>
    </section>
  );
}
