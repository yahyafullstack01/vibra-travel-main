"use client";

import { useEffect, useRef, useState } from "react";
import { media } from "@/lib/media";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./HomeVideo.module.css";

function shouldSkipVideo() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return true;
  return false;
}

export function HomeVideo({ className }: { className?: string }) {
  const { messages } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  const poster = media.photos.bluryPresentation;

  useEffect(() => {
    if (shouldSkipVideo()) return;

    const container = containerRef.current;
    if (!container) return;

    let delayId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        delayId = setTimeout(() => setLoadVideo(true), 1500);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (delayId) clearTimeout(delayId);
    };
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [loadVideo]);

  useEffect(() => {
    return () => {
      const video = videoRef.current;
      if (!video) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.videoContainer} ${className ?? ""}`}>
      <img
        src={poster}
        alt={messages.home.heroPlaceholderAlt}
        className={styles.posterImage}
        fetchPriority="high"
        decoding="async"
      />
      {loadVideo ? (
        <video
          ref={videoRef}
          src={media.videoHero}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : null}
    </div>
  );
}
