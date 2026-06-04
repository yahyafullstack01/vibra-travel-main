"use client";

import Link from "next/link";
import { IconVibraTravel } from "@/components/icons/IconVibraTravel";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Footer.module.css";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.2 8.2V6.8c0-.7.5-1.1 1.2-1.1h1.4V3.2c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.2v1H8v2.8h2.5v10h3.1V11h2.6l.4-2.8h-3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.8 2.8h8.4c2.8 0 5 2.2 5 5v8.4c0 2.8-2.2 5-5 5H7.8c-2.8 0-5-2.2-5-5V7.8c0-2.8 2.2-5 5-5Zm0 2.2C6.2 5 5 6.2 5 7.8v8.4C5 17.8 6.2 19 7.8 19h8.4c1.6 0 2.8-1.2 2.8-2.8V7.8C19 6.2 17.8 5 16.2 5H7.8Zm4.2 3.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 2.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4-2.5a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.8a9 9 0 0 0-7.7 13.7L3 21.2l4.8-1.3A9 9 0 1 0 12 2.8Zm0 2.1a6.9 6.9 0 0 1 5.8 10.7 6.9 6.9 0 0 1-9.4 2.1l-.4-.2-2 .5.5-1.9-.3-.4A6.9 6.9 0 0 1 12 4.9Zm-3 3.8c-.2 0-.5.1-.7.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1l-.6-.3-1.7-.8c-.2-.1-.5-.1-.6.1l-.7.9c-.1.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.4c-.2-.3 0-.5.1-.6l.4-.5c.1-.1.1-.3.2-.4.1-.2 0-.4 0-.5l-.8-1.7c-.2-.4-.3-.4-.5-.4Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.7 9.4H3.6v10.8h3.1V9.4ZM5.1 4.1a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm14.8 10c0-3.1-1.7-4.9-4.3-4.9-1.5 0-2.5.8-2.9 1.5V9.4h-3v10.8h3.1v-5.5c0-1.6.8-2.5 2-2.5 1.1 0 1.9.8 1.9 2.5v5.5h3.1v-6.1Z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.facebook.com/vibratravel",
    labelKey: "footer.facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/vibratravel__/",
    labelKey: "footer.instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://wa.me/34744484995",
    labelKey: "footer.whatsapp",
    Icon: WhatsappIcon,
  },
  {
    href: "https://www.linkedin.com/company/vibra-travel",
    labelKey: "footer.linkedin",
    Icon: LinkedinIcon,
  },
];

const contactLinks = [
  {
    href: "https://wa.me/34744484995",
    labelKey: "footer.whatsapp",
    text: "WhatsApp",
  },
  {
    href: "mailto:info@vibra-travel.com",
    labelKey: "contactForm.emailLabel",
    text: "info@vibra-travel.com",
  },
  {
    href: "tel:+34744484995",
    labelKey: "contactForm.phoneLabel",
    text: "(+34) 744 484 995",
  },
];

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
                <Link href="/for-businesses" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.forBusinesses")}</p>
                </Link>
                <Link href="/schools" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.forSchools")}</p>
                </Link>
              </div>
            </div>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.aboutUs")}</p>
              <div className={styles.links}>
                <Link href="/why-vibra" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.whyVibra")}</p>
                </Link>
                <Link href="/testemonials" className="nav-link">
                  <p className={styles.buttonText}>{t("nav.testemonials")}</p>
                </Link>
                <Link href="/contact" className="nav-link">
                  <p className={styles.buttonText}>{t("footer.contact")}</p>
                </Link>
              </div>
            </div>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.contact")}</p>
              <div className={styles.contactLinks}>
                {contactLinks.map(({ href, labelKey, text }) => (
                  <a
                    href={href}
                    key={href}
                    className={styles.contactLink}
                    aria-label={t(labelKey)}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.footerLinksSection}>
              <p className={styles.tripsTitle}>{t("footer.followTrips")}</p>
              <div className={styles.socialLinks}>
                {socialLinks.map(({ href, labelKey, Icon }) => (
                  <a
                    href={href}
                    key={labelKey}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={t(labelKey)}
                    title={t(labelKey)}
                  >
                    <Icon />
                  </a>
                ))}
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
