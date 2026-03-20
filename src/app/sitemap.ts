import { MetadataRoute } from 'next';

const LANDING_URL = "https://cvifypro.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Currently the landing page only has a single index route.
  // Add any new landing page specific routes here (e.g. /about, /pricing)
  
  return [
    {
      url: LANDING_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
