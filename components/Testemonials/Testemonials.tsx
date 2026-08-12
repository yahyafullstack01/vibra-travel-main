"use client";

import { LocalizedLink as Link } from "@/components/LocalizedLink/LocalizedLink";
import { media } from "@/lib/media";
import {
  getHighlightTestimonialItems,
  getStoryTestimonialItems,
} from "@/lib/testimonials";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./Testemonials.module.css";

type TestimonialPhotoKey = Exclude<keyof typeof media.testimonials, "videos">;

export function Testemonials() {
  const { messages } = useLocale();
  const t = messages.testemonials;

  const storyItems = getStoryTestimonialItems(t.items);
  const highlightItems = getHighlightTestimonialItems(t.items);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={`${styles.title} cooper-font`}>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>
          <Link href="/contact" className={`nav-link ${styles.cta}`}>
            {t.cta}
          </Link>
        </header>

        <div className={styles.stories} aria-label={t.listLabel}>
          <h2 className={`${styles.photoSectionTitle} cooper-font`}>
            {t.photoSectionTitle}
          </h2>

          {storyItems.map((item, index) => {
            const imageKey = item.imageKey as TestimonialPhotoKey | undefined;
            const imageSrc = imageKey ? media.testimonials[imageKey] : null;
            const hasPhoto = Boolean(imageSrc);

            return (
              <article
                key={item.id}
                className={`${styles.storyRow} ${
                  hasPhoto && index % 2 === 1 ? styles.storyRowReverse : ""
                } ${hasPhoto ? "" : styles.storyRowQuoteOnly}`}
              >
                {imageSrc ? (
                  <div className={styles.photoWrap}>
                    <img
                      src={imageSrc}
                      alt={`${item.name} on a Vibra Travel trip`}
                      className={styles.photo}
                    />
                  </div>
                ) : null}

                <div className={styles.storyCard}>
                  <div className={styles.rating} aria-label={item.ratingLabel}>
                    {"★★★★★"}
                  </div>
                  <p className={styles.quote}>“{item.quote}”</p>
                  <div className={styles.person}>
                    <span className={styles.avatar} aria-hidden>
                      {item.initials}
                    </span>
                    <div>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.meta}>{item.meta}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {highlightItems.length > 0 ? (
          <div className={styles.highlights}>
            {highlightItems.map((item) => (
              <article key={item.id} className={styles.highlightCard}>
                <div className={styles.rating} aria-label={item.ratingLabel}>
                  {"★★★★★"}
                </div>
                <p className={styles.highlightQuote}>“{item.quote}”</p>
                <div className={styles.person}>
                  <span className={styles.avatar} aria-hidden>
                    {item.initials}
                  </span>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.meta}>{item.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <section className={styles.videos} aria-label={t.videoListLabel}>
          <div className={styles.videosHeader}>
            <h2 className={`${styles.videoSectionTitle} cooper-font`}>
              {t.videoSectionTitle}
            </h2>
            <p className={styles.videoSectionIntro}>{t.videoSectionIntro}</p>
          </div>

          <div className={styles.videoGrid}>
            {media.testimonials.videos.map((video, index) => (
              <article key={video.id} className={styles.videoCard}>
                <div className={styles.videoFrame}>
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className={styles.video}
                  />
                </div>
                <div className={styles.videoCardFooter}>
                  <span className={styles.videoBadge}>{t.videoCardLabel}</span>
                  <span className={styles.videoIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
