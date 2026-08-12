"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { HomeVideo } from "@/components/HomeVideo/HomeVideo";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomePresentation.module.css";

export function HomePresentation() {
  const { messages, t } = useLocale();
  const h = messages.home;

  return (
    <section className={styles.presentationContainer}>
      <HomeVideo className={styles.video} />
      <div className={styles.presentationOverlay}>
        <div className={styles.presentationContent}>
          <div className={styles.presentationText}>
            <p className={styles.eyebrow}>{h.videoLine1}</p>
            <h1 className={`${styles.presentationTitle} cooper-font`}>
              {h.videoLine2}
            </h1>
            <p className={styles.presentationSubtitle}>
              {"subtitle" in h && h.subtitle
                ? h.subtitle
                : (
                  <>
                    {"subtitleBefore" in h ? h.subtitleBefore : null}
                    <span>Barcelona</span>
                    {"subtitleBetween" in h ? h.subtitleBetween : null}
                    <span>Sevilla</span>
                    {"subtitleAfter" in h ? h.subtitleAfter : null}
                  </>
                )}
            </p>
            <div className={styles.buttonRow}>
              <Link href="/groups" className={`${styles.presentationButton} ${styles.primaryButton} fgrotesk-font`}>
                {h.planTrip}
              </Link>
              <Link href="/why-vibra" className={`${styles.presentationButton} ${styles.secondaryButton} fgrotesk-font`}>
                {t("nav.whyVibra")}
              </Link>
            </div>
          </div>

          <div className={styles.presentationRail}>
            <div className={styles.railCard}>
              <p className={styles.railLabel}>{t("nav.groups")}</p>
              <Link href="/groups" className={styles.railLink}>
                {t("nav.padelClubs")}
              </Link>
              <Link href="/groups" className={styles.railLink}>
                {t("nav.privateGroups")}
              </Link>
              <Link href="/for-businesses" className={styles.railLink}>
                {t("nav.forBusinesses")}
              </Link>
              <Link href="/schools" className={styles.railLink}>
                {t("nav.forSchools")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
