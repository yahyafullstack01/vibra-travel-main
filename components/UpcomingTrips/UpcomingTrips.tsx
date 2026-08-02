"use client";

import Link from "next/link";
import type { UpcomingTrip } from "@/lib/i18n/upcomingTrips";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { WETRAVEL_PROFILE_URL } from "@/lib/wetravel";
import styles from "./UpcomingTrips.module.css";

function LocationIcon() {
  return (
    <svg
      className={styles.metaIcon}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className={styles.metaIcon}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z" />
    </svg>
  );
}

function formatTripDates(from: string, to: string) {
  return `${from} – ${to}`;
}

export function UpcomingTrips() {
  const { messages } = useLocale();
  const section = messages.upcomingTrips;
  const trips = section.trips as UpcomingTrip[];

  return (
    <section className={styles.section} id="upcoming-trips">
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 className={`${styles.title} cooper-font`}>{section.title}</h2>
          {section.subtitle ? (
            <p className={styles.subtitle}>{section.subtitle}</p>
          ) : null}
        </div>

        <div className={styles.grid}>
          {trips.map((trip, index) => {
            const tripUrl = trip.href || WETRAVEL_PROFILE_URL;

            return (
              <article className={styles.card} key={`${trip.title}-${index}`}>
                <div className={styles.media}>
                  <img
                    src={trip.image}
                    alt={trip.imageAlt || trip.title}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.mediaOverlay} aria-hidden="true" />
                  {(trip.dateFrom || trip.dateTo) && (
                    <span className={styles.dateBadge}>
                      {formatTripDates(trip.dateFrom, trip.dateTo)}
                    </span>
                  )}
                  {trip.price ? (
                    <span className={styles.priceBadge}>{trip.price}</span>
                  ) : null}
                </div>

                <div className={styles.body}>
                  <h3 className={`${styles.cardTitle} cooper-font`}>{trip.title}</h3>

                  {"subtitle" in trip && trip.subtitle ? (
                    <p className={styles.cardSubtitle}>{trip.subtitle}</p>
                  ) : null}

                  <p className={styles.location}>
                    <LocationIcon />
                    {trip.location}
                  </p>

                  {(trip.dateFrom || trip.dateTo) && (
                    <p className={styles.dates}>
                      <CalendarIcon />
                      {section.dateFromLabel} {trip.dateFrom} {section.dateToLabel}{" "}
                      {trip.dateTo}
                    </p>
                  )}

                  {trip.deposit ? (
                    <p className={styles.deposit}>
                      {section.depositLabel}: {trip.deposit}
                    </p>
                  ) : null}

                  {"intro" in trip && Array.isArray(trip.intro) && trip.intro.length > 0 ? (
                    <div className={styles.intro}>
                      {trip.intro.map((paragraph) => (
                        <p key={paragraph} className={styles.introText}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {trip.sections.length > 0 ? (
                    <div className={styles.sections}>
                      {trip.sections.map((block) => (
                        <div className={styles.sectionBlock} key={block.title}>
                          <h4 className={styles.sectionTitle}>{block.title}</h4>
                          <ul className={styles.list}>
                            {block.items.map((item) => (
                              <li className={styles.listItem} key={item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className={styles.actions}>
                    <a
                      href={tripUrl}
                      className={`nav-link fgrotesk-font ${styles.primaryBtn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {section.viewDetails}
                    </a>
                    <Link
                      href="/contact"
                      className={`nav-link fgrotesk-font ${styles.secondaryBtn}`}
                    >
                      {section.askQuestion}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <a
          href={WETRAVEL_PROFILE_URL}
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {section.viewAllTrips}
        </a>
      </div>
    </section>
  );
}
