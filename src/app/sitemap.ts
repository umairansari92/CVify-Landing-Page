import { MetadataRoute } from 'next';

const SITE_URL = "https://cvifypro.vercel.app";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Tier 1: Homepage (Highest priority, daily refresh)
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Tier 2: Documentation Hub (Master Canonical Knowledge Base)
    // NOTE: Per Google Search Guidelines (RFC 3986), URL fragment identifiers (#anchor)
    // must NEVER be included in sitemaps as Googlebot strips '#' and treats them as duplicate pages.
    {
      url: `${SITE_URL}/documentation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
