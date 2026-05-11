"use client";

import { useState } from "react";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./HomeVideo.module.css";

export function HomeVideo({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const { messages } = useLocale();

  return (
    <div className={`${styles.videoContainer} ${className ?? ""}`}>
      {!loaded ? (
        <img
          src={media.photos.bluryPresentation}
          alt={messages.home.heroPlaceholderAlt}
          className={styles.blurryImage}
        />
      ) : null}
      <video
        src={media.videoHero}
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setLoaded(true)}
      />
    </div>
  );
}
