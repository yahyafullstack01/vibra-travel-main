"use client";

import Link from "next/link";
import { IconArrows } from "@/components/icons/IconArrows";
import { IconBattery } from "@/components/icons/IconBattery";
import { IconGroup } from "@/components/icons/IconGroup";
import { IconHost } from "@/components/icons/IconHost";
import { IconMoonBadge } from "@/components/icons/IconMoonBadge";
import { IconTrophy } from "@/components/icons/IconTrophy";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./AllInclusive.module.css";

const cardIcons = [
  IconMoonBadge,
  IconBattery,
  IconGroup,
  IconTrophy,
  IconArrows,
  IconHost,
];

export function AllInclusive() {
  const { messages } = useLocale();
  const a = messages.corporate.allInclusive;
  const cards = a.cards;

  return (
    <div className={styles.aieContainer}>
      <div className={styles.aieContent}>
        <div className={styles.aieLeft}>
          <h1 className="cooper-font">
            {a.line1a}
            <span className="orange">{a.line1Accent}</span>
            <br />
            {a.line2}
          </h1>
          <p className={styles.aieLeftDesc}>{a.desc}</p>
          <Link href="/groups" className={`nav-link fgrotesk-font ${styles.organiseBtn}`}>
            {a.organiseBtn}
          </Link>
        </div>

        <div className={styles.aieRightWrap}>
          {cards.map((card, idx) => {
            const Icon = cardIcons[idx] ?? IconMoonBadge;
            return (
              <div key={idx} className={styles.aieCard}>
                <div className={styles.aieIcon}>
                  <Icon />
                </div>
                <div className={styles.aieInfo}>
                  <div className={styles.aieCardTitle}>
                    <p>{card.title}</p>
                  </div>
                  <div className={styles.aieCardText}>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
