"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./WhyVibraPresentation.module.css";

const sideStack = media.whyVibra.gallery.slice(0, 2);
const mosaic = media.whyVibra.gallery.slice(2);

export function WhyVibraPresentation() {
  const { messages } = useLocale();
  const w = messages.whyVibra;

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={`${styles.title} cooper-font`}>
            {w.titleLine1}
            <br />
            {w.titleLine2}
          </p>
        </header>

        <div className={styles.panel}>
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageAccent} aria-hidden="true" />
              <div className={styles.imageWrap}>
                <img
                  src={media.whyVibra.hero}
                  fetchPriority="high"
                  alt={w.photoAlt}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.story}>
            <h3 className={styles.heading}>{w.heading}</h3>
            <p className={styles.desc}>{w.p1}</p>
            <p className={styles.desc}>{w.p2}</p>
            <p className={styles.desc}>{w.p3}</p>
          </div>
        </div>

        <blockquote className={styles.quote}>
          <p className={`${styles.quoteText} cooper-font`}>{w.p4}</p>
        </blockquote>

        <div className={`${styles.panel} ${styles.panelReverse}`}>
          <div className={styles.story}>
            <p className={styles.desc}>{w.p5}</p>
            <p className={styles.desc}>{w.p6}</p>
          </div>

          <div className={styles.sideStack}>
            {sideStack.map((src) => (
              <div key={src} className={styles.sideImageWrap}>
                <img src={src} alt="" className={styles.sideImage} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mosaic} aria-hidden="true">
          {mosaic.map((src, index) => (
            <div
              key={src}
              className={`${styles.mosaicItem} ${index === 0 ? styles.mosaicFeatured : ""}`}
            >
              <img src={src} alt="" className={styles.mosaicImage} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
