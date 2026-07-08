"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IconVibraTravel } from "@/components/icons/IconVibraTravel";
import { IconMoon } from "@/components/icons/IconMoon";
import { IconSun } from "@/components/icons/IconSun";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [themeToggleMounted, setThemeToggleMounted] = useState(false);
  const groupsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setThemeToggleMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isGroupsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        groupsMenuRef.current &&
        !groupsMenuRef.current.contains(event.target as Node)
      ) {
        setIsGroupsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isGroupsOpen]);

  return (
    <div
      dir="ltr"
      className={`${styles.headerContainer} ${hasShadow ? styles.headerShadow : ""} ${isMobileMenuOpen ? styles.headerMobileMenuOpen : ""}`}
    >
      <div className={styles.headerContent}>
        <div className={styles.desktopNav}>
          <div className={styles.brand}>
            <Link href="/" aria-label={t("a11y.home")}>
              <IconVibraTravel />
            </Link>
          </div>
          <nav className={styles.desktopLinks} aria-label={t("nav.groups")}>
            <div
              ref={groupsMenuRef}
              className={`${styles.subMenu} ${isGroupsOpen ? styles.subMenuOpen : ""}`}
            >
              <button
                type="button"
                className={styles.subMenuButton}
                aria-haspopup="true"
                aria-expanded={isGroupsOpen}
                onClick={() => setIsGroupsOpen((open) => !open)}
              >
                <span className={styles.headerText}>{t("nav.groups")}</span>
              </button>
              <div className={styles.subMenuPanel}>
                <Link
                  href="/groups"
                  className={styles.subMenuLink}
                  onClick={() => setIsGroupsOpen(false)}
                >
                  {t("nav.padelClubs")}
                </Link>
                <Link
                  href="/groups"
                  className={styles.subMenuLink}
                  onClick={() => setIsGroupsOpen(false)}
                >
                  {t("nav.privateGroups")}
                </Link>
              </div>
            </div>
            <Link href="/for-businesses" className={styles.navItem}>
              <span className={styles.headerText}>{t("nav.forBusinesses")}</span>
            </Link>
            <Link href="/schools" className={styles.navItem}>
              <span className={styles.headerText}>{t("nav.forSchools")}</span>
            </Link>
            <Link href="/why-vibra" className={styles.navItem}>
              <span className={styles.headerText}>{t("nav.whyVibra")}</span>
            </Link>
            <Link href="/testemonials" className={styles.navItem}>
              <span className={styles.headerText}>{t("nav.testemonials")}</span>
            </Link>
          </nav>
          <div className={styles.desktopActions}>
            <div className={styles.headerTools}>
              <LanguageSwitcher />
              <button
                type="button"
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? t("a11y.switchToLight")
                    : t("a11y.switchToDark")
                }
                suppressHydrationWarning
              >
                {themeToggleMounted && theme === "dark" ? (
                  <IconSun />
                ) : themeToggleMounted ? (
                  <IconMoon className={styles.themeToggleIcon} />
                ) : (
                  <span className={styles.themeTogglePlaceholder} aria-hidden />
                )}
              </button>
            </div>
            <Link href="/contact" className={`nav-link ${styles.cta}`}>
              <span className={styles.buttonText}>{t("nav.planTrip")}</span>
            </Link>
          </div>
        </div>

        <div className={styles.mobileNav}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileLogo}>
              <Link href="/" aria-label={t("a11y.home")}>
                <IconVibraTravel />
              </Link>
            </div>
            <div className={styles.mobileHeaderActions}>
              <LanguageSwitcher />
              <button
                type="button"
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? t("a11y.switchToLight")
                    : t("a11y.switchToDark")
                }
                suppressHydrationWarning
              >
                {themeToggleMounted && theme === "dark" ? (
                  <IconSun />
                ) : themeToggleMounted ? (
                  <IconMoon className={styles.themeToggleIcon} />
                ) : (
                  <span className={styles.themeTogglePlaceholder} aria-hidden />
                )}
              </button>
              <button
                type="button"
                className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.mobileMenuToggleActive : ""}`}
                onClick={() => setIsMobileMenuOpen((o) => !o)}
                aria-expanded={isMobileMenuOpen}
                aria-label={t("a11y.toggleMenu")}
              >
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
              </button>
            </div>
          </div>

          <div
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
          >
            <div className={styles.mobileMenuItems}>
              <div className={styles.mobileSubMenu}>
                <span className={styles.mobileSubMenuTitle}>{t("nav.groups")}</span>
                <Link
                  href="/groups"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNavText}>
                    {t("nav.padelClubs")}
                  </span>
                </Link>
                <Link
                  href="/groups"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNavText}>
                    {t("nav.privateGroups")}
                  </span>
                </Link>
              </div>
              <Link
                href="/for-businesses"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.mobileNavText}>
                  {t("nav.forBusinesses")}
                </span>
              </Link>
              <Link
                href="/schools"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.mobileNavText}>{t("nav.forSchools")}</span>
              </Link>
              <Link
                href="/why-vibra"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.mobileNavText}>
                  {t("nav.whyVibra")}
                </span>
              </Link>
              <Link
                href="/testemonials"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.mobileNavText}>
                  {t("nav.testemonials")}
                </span>
              </Link>
              <Link href="/contact" className={styles.mobileNavLink}>
                <span className={styles.mobileButtonText}>
                  {t("nav.planTrip")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
