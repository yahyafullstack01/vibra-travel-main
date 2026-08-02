"use client";

import type { ReactNode } from "react";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./WhyVibraPresentation.module.css";

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type DifferenceItem = {
  icon: string;
  label: string;
};

function StoryImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className={styles.visual}>
      <div className={styles.imageFrame}>
        <div className={styles.imageAccent} aria-hidden="true" />
        <div className={styles.imageWrap}>
          <img
            src={src}
            alt={alt}
            className={styles.image}
            fetchPriority={priority ? "high" : undefined}
            loading={priority ? undefined : "lazy"}
            decoding="async"
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function EditorialRow({
  reverse = false,
  image,
  imageAlt,
  priority = false,
  children,
}: {
  reverse?: boolean;
  image: string;
  imageAlt: string;
  priority?: boolean;
  children: ReactNode;
}) {
  return (
    <article className={`${styles.row} ${reverse ? styles.rowReverse : ""}`}>
      <StoryImage src={image} alt={imageAlt} priority={priority} />
      <div className={styles.copy}>{children}</div>
    </article>
  );
}

export function WhyVibraPresentation() {
  const { messages } = useLocale();
  const w = messages.whyVibra;
  const gallery = media.whyVibra.gallery;

  const extendedIntro =
    "extendedIntro" in w && w.extendedIntro
      ? (w.extendedIntro as { title: string; paragraphs: string[] })
      : null;

  const contentSections =
    "contentSections" in w && Array.isArray(w.contentSections)
      ? (w.contentSections as ContentSection[])
      : [];

  const vibraDifference =
    "vibraDifference" in w && w.vibraDifference
      ? (w.vibraDifference as { title: string; items: DifferenceItem[] })
      : null;

  const closingSection =
    "closingSection" in w && w.closingSection
      ? (w.closingSection as { title: string; paragraphs: string[] })
      : null;

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <header className={styles.pageHeader}>
          <p className={`${styles.pageTitle} cooper-font`}>
            {w.titleLine1}
            <br />
            {w.titleLine2}
          </p>
        </header>

        <EditorialRow image={media.whyVibra.hero} imageAlt={w.photoAlt} priority>
          <h2 className={styles.subheading}>{w.heading}</h2>
          <p className={styles.body}>{w.p1}</p>
          <p className={styles.body}>{w.p2}</p>
          <p className={styles.body}>{w.p3}</p>
        </EditorialRow>

        <blockquote className={styles.quote}>
          <p className={`${styles.quoteText} cooper-font`}>{w.p4}</p>
        </blockquote>

        <EditorialRow reverse image={gallery[0]} imageAlt={w.photoAlt}>
          <p className={styles.body}>{w.p5}</p>
          <p className={styles.body}>{w.p6}</p>
        </EditorialRow>

        {extendedIntro ? (
          <EditorialRow image={gallery[1]} imageAlt={w.photoAlt}>
            <h2 className={`${styles.sectionTitle} cooper-font`}>{extendedIntro.title}</h2>
            {extendedIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.body}>
                {paragraph}
              </p>
            ))}
          </EditorialRow>
        ) : null}

        {contentSections.map((section, index) => (
          <EditorialRow
            key={section.title}
            reverse={index % 2 === 1}
            image={gallery[index + 2] ?? gallery[gallery.length - 1]}
            imageAlt={w.photoAlt}
          >
            <h2 className={`${styles.sectionTitle} cooper-font`}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.body}>
                {paragraph}
              </p>
            ))}
          </EditorialRow>
        ))}

        {vibraDifference ? (
          <section className={styles.differencePanel} aria-labelledby="vibra-difference-title">
            <h2 id="vibra-difference-title" className={`${styles.differenceHeading} cooper-font`}>
              {vibraDifference.title}
            </h2>
            <ul className={styles.differenceGrid}>
              {vibraDifference.items.map((item) => (
                <li key={item.label} className={styles.differenceCard}>
                  <span className={styles.differenceIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className={styles.differenceLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {closingSection ? (
          <EditorialRow reverse image={gallery[8]} imageAlt={w.photoAlt}>
            <h2 className={`${styles.sectionTitle} cooper-font`}>{closingSection.title}</h2>
            {closingSection.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`${styles.body} ${index === closingSection.paragraphs.length - 1 ? styles.bodyEmphasis : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </EditorialRow>
        ) : null}
      </div>
    </section>
  );
}
