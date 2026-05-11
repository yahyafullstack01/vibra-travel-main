"use client";

import Link from "next/link";
import { IconVibraTravel } from "@/components/icons/IconVibraTravel";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLocale();

  return (
    <div dir="ltr" className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.logoAndTitle}>
            <div className={styles.icon}>
              <Link href="/" aria-label={t("a11y.home")}>
                <IconVibraTravel />
              </Link>
            </div>
            <div className={styles.footerTitle}>
              <p className={`${styles.footerTitleText} cooper-font`}>
                {t("footer.tagline")}
              </p>
            </div>
          </div>
          <div className={styles.footerLinksContent}>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.explore")}</p>
              <div className={styles.links}>
                <Link href="/groups" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.groups")}</p>
                </Link>
                <Link href="/corporate" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.corporate")}</p>
                </Link>
                <Link href="/schools" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.schools")}</p>
                </Link>
              </div>
            </div>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.aboutUs")}</p>
              <div className={styles.links}>
                <Link href="/why-vibra" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.whyVibra")}</p>
                </Link>
                <Link href="/contact" className="nav-link">
                  <p className={styles.buttonText}>{t("footer.contact")}</p>
                </Link>
              </div>
            </div>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.followTrips")}</p>
              <div className={styles.links}>
                <a
                  href="https://www.instagram.com/vibratravel__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <p className={styles.buttonText}>{t("footer.instagram")}</p>
                </a>
                <a
                  href="https://www.tiktok.com/@vibratravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <p className={styles.buttonText}>{t("footer.tiktok")}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerLine} />

        <div className={styles.footerBottom}>
          <p className={styles.bottomText}>{t("footer.copyright")}</p>
          <div className={styles.bottomLinks}>
            <Link href="/legal" className="nav-link">
              <p className={styles.buttonText}>{t("footer.terms")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
