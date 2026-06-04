"use client";

import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomeVideo.module.css";

export function HomeVideo({ className }: { className?: string }) {
  const { messages } = useLocale();

  return (
    <div className={`${styles.videoContainer} ${className ?? ""}`}>
      <img
        src={media.photos.bluryPresentation}
        alt={messages.home.heroPlaceholderAlt}
        className={styles.blurryImage}
      />
      <video
        src={media.videoHero}
        poster={media.photos.bluryPresentation}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}
