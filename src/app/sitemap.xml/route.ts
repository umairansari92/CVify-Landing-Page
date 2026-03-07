import { NextResponse } from 'next/server';

const API_URL = "https://c-vify-backend.vercel.app/api";
const LANDING_URL = "https://cvifypro.vercel.app";
const APP_URL = "https://app-cvifypro.vercel.app";

export async function GET() {
  const staticPaths = [
    { url: LANDING_URL, priority: "1.0", changefreq: "daily" },
    { url: `${LANDING_URL}/signup`, priority: "0.8", changefreq: "monthly" },
    { url: `${LANDING_URL}/login`, priority: "0.8", changefreq: "monthly" },
  ];

  let dynamicPaths: any[] = [];
  try {
    const response = await fetch(`${API_URL}/auth/sitemap-data`, {
      next: { revalidate: 3600 },
    });
    
    if (response.ok) {
      const users = await response.json();
      if (Array.isArray(users)) {
        dynamicPaths = users.map((user: any) => ({
          url: `${APP_URL}/p/${user.username}`,
          priority: "0.8",
          changefreq: "weekly",
          lastmod: new Date(user.updatedAt || new Date()).toISOString(),
        }));
      }
    }
  } catch (error) {
    console.error("Sitemap fetch error:", error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPaths, ...dynamicPaths]
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    ${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ""}
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}

