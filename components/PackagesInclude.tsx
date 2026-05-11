import type { ComponentType } from "react";
import styles from "./PackagesInclude.module.css";

export type PackageCardDef = {
  Icon: ComponentType;
  title: string;
  desc: string;
};

export function PackagesInclude({
  cards,
  titleHtml,
  subtitle,
}: {
  cards: PackageCardDef[];
  titleHtml: string;
  subtitle: string;
}) {
  return (
    <div className={styles.piContainer}>
      <div className={styles.piContent}>
        <div className={styles.piTop}>
          <div className={styles.piTopTitle}>
            <p
              className="cooper-font"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </div>
          <div className={styles.piTopSubtitle}>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={styles.piBottom}>
          {cards.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <div key={idx} className={styles.piCard}>
                <div className={styles.piCardIcon}>
                  <Icon />
                </div>
                <div className={styles.piCardTitle}>
                  <p>{card.title}</p>
                </div>
                <div className={styles.piCardDesc}>{card.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
