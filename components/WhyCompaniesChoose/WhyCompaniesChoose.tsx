"use client";

import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./WhyCompaniesChoose.module.css";

export function WhyCompaniesChoose() {
  const { messages } = useLocale();
  const w = messages.corporate.whyCompaniesChoose;

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={`${styles.title} cooper-font`}>{w.title}</h2>
        <ul className={styles.benefitsList}>
          {w.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
