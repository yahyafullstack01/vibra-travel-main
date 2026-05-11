"use client";

import Link from "next/link";
import { IconHeart } from "@/components/icons/IconHeart";
import { IconTailor } from "@/components/icons/IconTailor";
import { IconHassle } from "@/components/icons/IconHassle";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./MoreThanPadel.module.css";

const cardIcons = [IconHeart, IconHeart, IconTailor, IconHassle];

export function MoreThanPadel() {
  const { messages } = useLocale();
  const m = messages.moreThanPadel;

  return (
    <div className={styles.mtpContainer}>
      <div className={styles.mtpContent}>
        <div className={styles.mtpLeft}>
          <h1 className="cooper-font">{m.head1}</h1>
          <h1 className="cooper-font">
            {m.head2Before}
            <span className="orange">{m.head2Accent}</span>
          </h1>
          <p className={styles.mtpLeftDesc}>
            {m.descBefore}
            <span className="orange">Barcelona</span>
            {m.descBetween}
            <span className="orange">Sevilla</span>
            {m.descAfter}
          </p>
          <Link href="/groups" className={`nav-link fgrotesk-font ${styles.learnMore}`}>
            {m.learnMore}
          </Link>
        </div>

        <div className={styles.mtpRightWrap}>
          {m.cards.map((card, idx) => {
            const Icon = cardIcons[idx] ?? IconHeart;
            return (
              <div key={idx} className={styles.mtpCard}>
                <div className={styles.mtpIcon}>
                  <Icon />
                </div>
                <div className={styles.mtpInfo}>
                  <div className={styles.mtpCardTitle}>
                    <p>{card.title}</p>
                  </div>
                  <div className={styles.mtpCardText}>
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
