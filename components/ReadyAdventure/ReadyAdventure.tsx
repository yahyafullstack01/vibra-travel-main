"use client";

import Link from "next/link";
import { IconBallTR } from "@/components/icons/IconBallTR";
import { IconBallTRDark } from "@/components/icons/IconBallTRDark";
import { IconBallBL } from "@/components/icons/IconBallBL";
import { IconBallBLDark } from "@/components/icons/IconBallBLDark";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "../ReadyCta/ReadyCta.module.css";

export function ReadyAdventure({
  variant,
  hideDescription,
}: {
  variant?: string;
  hideDescription?: boolean;
}) {
  const { messages } = useLocale();
  const r = messages.readyAdventure;
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
              {r.titleBefore}
              <span className={orange ? "" : "orange"}>{r.titleAccent}</span>
              {r.titleAfter}
            </div>
            {!hideDescription ? (
              <p className={`${styles.description} fgrotesk-font`}>{r.description}</p>
            ) : null}
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
