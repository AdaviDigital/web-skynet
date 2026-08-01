import type { MetadataRoute } from "next";
import { services, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://skynetng.com";
  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/reseller",
    "/affiliate",
    "/developers",
    "/blog",
    "/faq",
    "/contact",
    "/about",
    "/login",
    "/register",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/cookie-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
