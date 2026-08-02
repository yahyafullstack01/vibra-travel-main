"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./ContactPresentation.module.css";

type InfoBox = {
  title: string;
  value: string;
  href?: string;
};

export function ContactPresentation() {
  const { messages } = useLocale();
  const c = messages.contact;

  const infoBoxes =
    "infoBoxes" in c && Array.isArray(c.infoBoxes) ? (c.infoBoxes as InfoBox[]) : [];

  const planningTips =
    "planningTips" in c && c.planningTips
      ? (c.planningTips as { title: string; items: string[] })
      : null;

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.heroPanel}>
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageAccent} aria-hidden="true" />
              <div className={styles.imageWrap}>
                <img
                  src={media.photos.homeAbout}
                  fetchPriority="high"
                  alt={c.photoAlt}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.heroCopy}>
            <p className={`${styles.pageTitle} cooper-font`}>
              {c.titleLine1}
              <br />
              {c.titleLine2}
            </p>
            <p className={styles.desc}>{c.desc}</p>
          </div>
        </div>

        {infoBoxes.length > 0 ? (
          <div className={styles.infoSection}>
            {"infoEyebrow" in c && c.infoEyebrow ? (
              <p className={styles.infoEyebrow}>{c.infoEyebrow as string}</p>
            ) : null}
            <div className={styles.infoGrid}>
              {infoBoxes.map((box) => {
                const inner = (
                  <>
                    <h2 className={styles.infoTitle}>{box.title}</h2>
                    <p className={styles.infoValue}>{box.value}</p>
                  </>
                );

                return box.href ? (
                  <a
                    key={box.title}
                    href={box.href}
                    className={`${styles.infoCard} ${styles.infoCardLink}`}
                    target={box.href.startsWith("http") ? "_blank" : undefined}
                    rel={box.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <article key={box.title} className={styles.infoCard}>
                    {inner}
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        {planningTips ? (
          <aside className={styles.tipsPanel} aria-label={planningTips.title}>
            <h2 className={`${styles.tipsTitle} cooper-font`}>{planningTips.title}</h2>
            <ul className={styles.tipsList}>
              {planningTips.items.map((item) => (
                <li key={item} className={styles.tipsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
