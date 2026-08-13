"use client";

import { useEffect, useState } from "react";
import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { usePathname, useRouter } from "next/navigation";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { pathWithoutLocaleEquals, withLocalePrefix } from "@/lib/i18n/path";
import styles from "./GroupsPresentation.module.css";

const bannerImages = media.photos.groupsBanner;
const SLIDE_MS = 5000;

export function GroupsPresentation() {
  const pathname = usePathname();
  const router = useRouter();
  const { messages, locale } = useLocale();
  const p = messages.groups.presentation;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % bannerImages.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [active]);

  function scrollToTimetable(e: React.MouseEvent) {
    e.preventDefault();
    if (pathWithoutLocaleEquals(pathname, "/groups")) {
      document.getElementById("timetable")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(withLocalePrefix("/groups#timetable", locale));
    }
  }

  return (
    <section className={styles.hero} aria-label={p.title}>
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
            {p.eyebrow ? <p className={styles.eyebrow}>{p.eyebrow}</p> : null}
            <h1 className={`${styles.title} cooper-font`}>{p.title}</h1>
            <p className={`${styles.desc} fgrotesk-font`}>{p.desc}</p>

            <div className={styles.buttons}>
              <Link href="/contact" className={`nav-link fgrotesk-font ${styles.planBtn}`}>
                {p.planTrip}
              </Link>
              <button
                type="button"
                className={`nav-link fgrotesk-font ${styles.imagineBtn}`}
                onClick={scrollToTimetable}
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
