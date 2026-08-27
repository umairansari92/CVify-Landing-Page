import { MetadataRoute } from 'next';

const SITE_URL = "https://cvifypro.vercel.app";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Tier 1: Homepage (Highest priority, daily refresh) ──────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ── Tier 2: Documentation Hub (Authoritative knowledge base) ─────────────
    {
      url: `${SITE_URL}/documentation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // ── Deep Documentation Anchor Links (AI crawlers can fetch these directly) ─
    // Getting Started
    {
      url: `${SITE_URL}/documentation#overview`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/documentation#career-pipeline`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/documentation#master-profile`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Core Features
    {
      url: `${SITE_URL}/documentation#ats`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/documentation#ai-representative`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/documentation#magic-import`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/documentation#cover-letter`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/documentation#portfolio`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Intelligence Hub
    {
      url: `${SITE_URL}/documentation#six-engines`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/documentation#job-matcher`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Business & Economy
    {
      url: `${SITE_URL}/documentation#diamonds`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/documentation#diamond-architecture`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    // Security
    {
      url: `${SITE_URL}/documentation#security-v7`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    // Resources
    {
      url: `${SITE_URL}/documentation#faq`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/documentation#roadmap`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}
