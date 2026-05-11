"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Smooth-scroll to `window.location.hash` after navigation (parity with vue-router scrollBehavior).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const raw = typeof window !== "undefined" ? window.location.hash : "";
    if (!raw || raw.length < 2) return;
    const id = raw.slice(1);
    let attempts = 0;
    const t = window.setInterval(() => {
      attempts++;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.clearInterval(t);
      } else if (attempts > 50) window.clearInterval(t);
    }, 100);
    return () => window.clearInterval(t);
  }, [pathname]);

  return null;
}
