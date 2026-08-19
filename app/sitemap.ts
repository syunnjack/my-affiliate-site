import type { MetadataRoute } from "next";
import cities from "@/data/cities.json";

// output: "export" では、サイトマップもビルド時に確定させる必要がある。
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 配信するドメインはこちらに一本化する。chikuden-v2h-nabi.jp は使わない。
  const base = "https://chikuden-hojokin.jp";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/guide`, lastModified: new Date() },
    ...cities.map((c: { id: string }) => ({
      url: `${base}/area/${c.id}`,
      lastModified: new Date(),
    })),
  ];
}
