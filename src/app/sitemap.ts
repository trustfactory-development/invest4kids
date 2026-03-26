import type { MetadataRoute } from "next";
import { posts } from "@/lib/blogData";
import { parseGermanDate, siteConfig } from "@/lib/site";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/beratung", changeFrequency: "weekly", priority: 0.9 },
  { path: "/invest4kids-konzept", changeFrequency: "weekly", priority: 0.9 },
  { path: "/erfahrungen", changeFrequency: "weekly", priority: 0.8 },
  { path: "/vorteilsrechner", changeFrequency: "weekly", priority: 0.8 },
  { path: "/team", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/podcast", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/presse", changeFrequency: "monthly", priority: 0.6 },
  { path: "/studie", changeFrequency: "monthly", priority: 0.6 },
  { path: "/invest4kids-serioes", changeFrequency: "monthly", priority: 0.6 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
  { path: "/transparenz", changeFrequency: "yearly", priority: 0.3 },
] as const;

function toAbsoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: parseGermanDate(post.publishedAt) ?? now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
