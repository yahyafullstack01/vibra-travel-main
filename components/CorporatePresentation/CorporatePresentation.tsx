"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { useRouter } from "next/navigation";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { withLocalePrefix } from "@/lib/i18n/path";
import styles from "./CorporatePresentation.module.css";

export function CorporatePresentation() {
  const router = useRouter();
  const { messages, locale } = useLocale();
  const p = messages.corporate.presentation;

  function goToTimetable(e: React.MouseEvent) {
    e.preventDefault();
    const timetable = document.getElementById("timetable");
    if (timetable) {
      timetable.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(withLocalePrefix("/for-businesses#timetable", locale));
  }

  return (
    <section className={styles.hero} aria-label={p.title}>
      <div className={styles.media} aria-hidden="true">
        <img
          className={styles.heroImage}
          src={media.photos.teamPresentation}
          fetchPriority="high"
          alt=""
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            {"eyebrow" in p && p.eyebrow ? (
              <p className={styles.eyebrow}>{p.eyebrow}</p>
            ) : null}
            <h1 className={`${styles.title} cooper-font`}>{p.title}</h1>
            <p className={`${styles.desc} fgrotesk-font`}>{p.desc}</p>

            {"highlights" in p && Array.isArray(p.highlights) ? (
              <ul className={styles.highlights}>
                {p.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            <div className={styles.buttons}>
              <Link href="/contact" className={`nav-link fgrotesk-font ${styles.planBtn}`}>
                {p.planTrip}
              </Link>
              <button
                type="button"
                className={`nav-link fgrotesk-font ${styles.imagineBtn}`}
                onClick={goToTimetable}
              >
                {p.imagineTrip}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
