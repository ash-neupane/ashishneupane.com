import type { MetadataRoute } from "next";
import { RESEARCH } from "@/data/research";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestReport = RESEARCH[0]?.date;
  const reports = RESEARCH.map((thread) => ({
    url: `${SITE_URL}/research/${thread.slug}`,
    lastModified: thread.date,
    priority: 0.6,
  }));
  return [
    { url: SITE_URL, lastModified: latestReport, priority: 1 },
    { url: `${SITE_URL}/research`, lastModified: latestReport, priority: 0.8 },
    ...reports,
  ];
}
