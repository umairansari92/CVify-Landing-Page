import { MetadataRoute } from 'next';

const LANDING_URL = "https://cvifypro.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LANDING_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${LANDING_URL}/documentation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

