"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./TestemonialsPreview.module.css";

type TestemonialsPreviewProps = {
  audience?: "default" | "schools";
};

export function TestemonialsPreview({ audience = "default" }: TestemonialsPreviewProps) {
  const { messages, t } = useLocale();
  const section =
    audience === "schools" ? messages.schools.testemonials : messages.testemonials;
  const testemonials = section.items.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h2 className={`${styles.title} cooper-font`}>{section.title}</h2>
          </div>
          <Link href="/testemonials" className={`nav-link ${styles.link}`}>
            {t("nav.testemonials")}
          </Link>
        </div>
        <div className={styles.grid}>
          {testemonials.map((item) => (
            <article className={styles.card} key={item.name}>
              <div className={styles.rating} aria-label={item.ratingLabel}>
                {"★★★★★"}
              </div>
              <p className={styles.quote}>“{item.quote}”</p>
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.meta}>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
