import type { MetadataRoute } from "next";
import cities from "@/data/cities.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chikuden-v2h-nabi.jp";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/guide`, lastModified: new Date() },
    ...cities.map((c: { id: string }) => ({
      url: `${base}/area/${c.id}`,
      lastModified: new Date(),
    })),
  ];
}
