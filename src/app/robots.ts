import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://gestory.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/api/blog-sitemap`],
    host: baseUrl,
  };
}
