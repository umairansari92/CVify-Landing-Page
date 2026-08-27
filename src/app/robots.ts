import { MetadataRoute } from 'next';

const SITE_URL = "https://cvifypro.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard search engine crawlers ─────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // ── Google AI (Gemini, Bard, Search Generative Experience) ────────────
      {
        userAgent: 'Google-Extended',
        allow: ['/documentation', '/documentation/', '/'],
        disallow: ['/api/', '/_next/'],
      },
      // ── OpenAI GPTBot (ChatGPT, Perplexity, search citations) ─────────────
      {
        userAgent: 'GPTBot',
        allow: ['/documentation', '/documentation/', '/'],
        disallow: ['/api/', '/_next/'],
      },
      // ── Anthropic ClaudeBot ───────────────────────────────────────────────
      {
        userAgent: 'ClaudeBot',
        allow: ['/documentation', '/documentation/', '/'],
        disallow: ['/api/', '/_next/'],
      },
      // ── Perplexity AI ─────────────────────────────────────────────────────
      {
        userAgent: 'PerplexityBot',
        allow: ['/documentation', '/documentation/', '/'],
        disallow: ['/api/', '/_next/'],
      },
      // ── Meta AI (Llama) ──────────────────────────────────────────────────
      {
        userAgent: 'FacebookBot',
        allow: ['/', '/documentation'],
        disallow: ['/api/', '/_next/'],
      },
      // ── Microsoft Copilot ─────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: ['/', '/documentation'],
        disallow: ['/api/', '/_next/'],
      },
      // ── Common agentic coding crawlers (Cursor, GitHub Copilot) ───────────
      {
        userAgent: 'cohere-ai',
        allow: ['/documentation', '/'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    // Sitemap registered for both standard + AI discovery
    sitemap: `${SITE_URL}/sitemap.xml`,
    // llms.txt for LLM-native content discovery (2026 standard)
    host: SITE_URL,
  };
}
