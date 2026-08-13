"use client";

import { useEffect, useState } from "react";
import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { useRouter } from "next/navigation";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { withLocalePrefix } from "@/lib/i18n/path";
import styles from "./SchoolsPresentation.module.css";

const bannerImages = media.photos.schoolsBanner;
const SLIDE_MS = 5000;

type SchoolsPresentationCopy = {
  eyebrow?: string;
  title?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  desc?: string;
  descBefore?: string;
  descBetween?: string;
  descAfter?: string;
  highlights?: string[];
  planTrip: string;
  imagineTrip: string;
  heroAlt?: string;
};

function getTitle(p: SchoolsPresentationCopy) {
  if (p.title) return p.title;
  return [p.titleLine1, p.titleLine2, p.titleLine3].filter(Boolean).join(" ");
}

export function SchoolsPresentation() {
  const router = useRouter();
  const { messages, locale } = useLocale();
  const p = messages.schools.presentation as SchoolsPresentationCopy;
  const eyebrow = p.eyebrow ?? messages.audienceIntro.schools.eyebrow;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % bannerImages.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [active]);

  function goToTimetable(e: React.MouseEvent) {
    e.preventDefault();
    const timetable = document.getElementById("timetable");
    if (timetable) {
      timetable.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(withLocalePrefix("/schools#timetable", locale));
  }

  return (
    <section className={styles.hero} aria-label={getTitle(p)}>
      <div className={styles.media} aria-hidden="true">
        {bannerImages.map((src, index) => (
          <img
            key={src}
            className={`${styles.heroImage} ${index === active ? styles.heroImageActive : ""}`}
            src={src}
            fetchPriority={index === 0 ? "high" : undefined}
            alt=""
          />
        ))}
      </div>

      <div className={styles.overlay}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h1 className={`${styles.title} cooper-font`}>{getTitle(p)}</h1>

            {p.desc ? (
              <p className={`${styles.desc} fgrotesk-font`}>{p.desc}</p>
            ) : (
              <p className={`${styles.desc} fgrotesk-font`}>
                {p.descBefore}
                <span className="orange">Barcelona</span>
                {p.descBetween}
                <span className="orange">Sevilla</span>
                {p.descAfter}
              </p>
            )}

            {p.highlights?.length ? (
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

      <div className={styles.dots} role="tablist" aria-label="Banner photos">
        {bannerImages.map((src, index) => (
          <button
            key={src}
            type="button"
            className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
            aria-label={`${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
