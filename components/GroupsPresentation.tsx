"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./GroupsPresentation.module.css";

export function GroupsPresentation() {
  const pathname = usePathname();
  const router = useRouter();
  const { messages } = useLocale();
  const p = messages.groups.presentation;

  function scrollToTimetable(e: React.MouseEvent) {
    e.preventDefault();
    if (pathname === "/groups") {
      document.getElementById("timetable")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/groups#timetable");
    }
  }

  return (
    <div className={styles.presentationContainer}>
      <div className={styles.presentationContent}>
        <div className={styles.leftContent}>
          <p className={`${styles.title} cooper-font`}>{p.title}</p>
          <p className={`${styles.desc} fgrotesk-font`}>
            {p.descBefore}
            <span className="orange">Barcelona</span>
            {p.descBetween}
            <span className="orange">Sevilla</span>
          </p>
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
        <div className={styles.rightContent}>
          <img
            src={media.photos.padelPresentation}
            fetchPriority="high"
            alt={p.heroAlt}
          />
        </div>
      </div>
    </div>
  );
}
