import type { MetadataRoute } from "next";

const BASE_URL = "https://vibratravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0 },
    { path: "/groups", priority: 0.9 },
    { path: "/for-businesses", priority: 0.9 },
    { path: "/schools", priority: 0.9 },
    { path: "/why-vibra", priority: 0.7 },
    { path: "/testemonials", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));
}
