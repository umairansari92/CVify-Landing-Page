import { MetadataRoute } from 'next'

const API_URL = "https://cvify-backend.vercel.app/api"; // Replace with your production backend URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://cvify.pro',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://cvify.pro/signup',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cvify.pro/login',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    const response = await fetch(`${API_URL}/auth/sitemap-data`, { 
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000) // 5s timeout
    });

    if (!response.ok) {
      console.warn(`Sitemap fetch failed: ${response.status} ${response.statusText}`);
      return staticRoutes;
    }

    const users = await response.json();

    if (!Array.isArray(users)) {
      console.warn("Sitemap data is not an array");
      return staticRoutes;
    }

    const dynamicRoutes: MetadataRoute.Sitemap = users.map((user: any) => ({
      url: `https://cvify.pro/p/${user.username}`,
      lastModified: new Date(user.updatedAt || new Date()),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return staticRoutes;
  }
}
