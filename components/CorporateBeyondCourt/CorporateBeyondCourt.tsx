"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./CorporateBeyondCourt.module.css";

export function CorporateBeyondCourt() {
  const { messages } = useLocale();
  const b = messages.corporate.beyondCourt;

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{b.eyebrow}</p>
          <h2 className={`${styles.title} cooper-font`}>{b.title}</h2>
          <p className={styles.subtitle}>{b.subtitle}</p>
        </div>

        <div className={styles.categories}>
          {b.categories.map((category) => (
            <article className={styles.categoryCard} key={category.title}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.categoryList}>
                {category.items.map((item) => (
                  <li className={styles.categoryItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link href="/groups#activities" className={`nav-link fgrotesk-font ${styles.cta}`}>
          {b.cta}
        </Link>
      </div>
    </section>
  );
}
