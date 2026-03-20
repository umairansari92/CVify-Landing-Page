import { MetadataRoute } from 'next';

const APP_URL = "https://cvifypro.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
