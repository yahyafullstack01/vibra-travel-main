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

async function tryAutoplay(video: HTMLVideoElement) {
  video.defaultMuted = true;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  try {
    await video.play();
    return true;
  } catch {
    return false;
  }
}

export function HomeVideo({ className }: { className?: string }) {
  const { messages } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
        // Short delay keeps LCP on the poster, then start the muted loop.
        delayId = setTimeout(() => setLoadVideo(true), 400);
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

    let cancelled = false;

    const start = async () => {
      const ok = await tryAutoplay(video);
      if (!cancelled) setIsPlaying(ok);
    };

    const onReady = () => {
      void start();
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    void start();

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
    };
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
          className={isPlaying ? styles.videoPlaying : styles.videoIdle}
          src={media.videoHero}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden={!isPlaying}
          tabIndex={-1}
        />
      ) : null}
    </div>
  );
}
