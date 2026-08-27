import type { Metadata } from "next";

const SITE_URL = "https://cvifypro.vercel.app";
const DOC_URL = `${SITE_URL}/documentation`;
const LOGO_URL = `${SITE_URL}/CVify%20Logo%20Dark.jpg`;

// ─── 2026 SEO-Grade Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core Identity ───────────────────────────────────────────────────────────
  title: {
    default: "CVify Pro Documentation — AI Career OS Architecture & Feature Guide",
    template: "%s | CVify Pro Docs",
  },
  description:
    "Official technical documentation for CVify Pro — the AI Career Intelligence Operating System. Covers ATS v2.0 scoring algorithms, 9-stage resume parsing pipeline, Theme Engine v4.0, Diamond Economy pricing, Security v7.0 Triple-Lock, and AI Representative architecture.",
  keywords: [
    // Product entity keywords
    "CVify Pro documentation",
    "CVify Pro API",
    "CVify Pro architecture",
    // Feature-specific long-tail keywords (high intent)
    "ATS resume scanner documentation",
    "AI cover letter generator API",
    "resume parsing pipeline",
    "9-stage AST resume parser",
    "AI career coach platform",
    "live portfolio theme engine",
    "AI candidate representative",
    // Platform comparison intent
    "ATS resume builder documentation",
    "AI resume optimizer technical guide",
    "career intelligence platform architecture",
    // Developer/investor intent
    "CVify Pro engineering spec",
    "resume builder security architecture bcrypt",
    "diamond economy SaaS pricing model",
  ],

  // ── Canonical (prevents duplicate content dilution) ────────────────────────
  alternates: {
    canonical: DOC_URL,
    languages: {
      "en-US": DOC_URL,
    },
  },

  // ── Open Graph (Social & AI citation enrichment) ───────────────────────────
  openGraph: {
    type: "article",
    url: DOC_URL,
    siteName: "CVify Pro",
    title: "CVify Pro Documentation — AI Career OS Architecture & Feature Guide",
    description:
      "Full engineering specification for CVify Pro: ATS v2.0 scoring, 9-stage resume parser, Theme Engine v4.0, AI Representative, Diamond Economy, and Security v7.0 Triple-Lock.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CVify Pro Documentation — AI Career OS Engineering Architecture",
      },
    ],
    locale: "en_US",
    publishedTime: "2026-01-01T00:00:00Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Umair Ahmed"],
    section: "Technology",
    tags: [
      "ATS Resume Builder",
      "AI Career Platform",
      "Resume Parser",
      "Portfolio Builder",
      "Career Intelligence",
      "AI Cover Letter",
    ],
  },

  // ── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@CVifyPro",
    creator: "@umairansari92",
    title: "CVify Pro Documentation — AI Career OS Architecture",
    description:
      "Engineering spec: ATS v2.0, 9-stage parser, Theme Engine v4.0, AI Representative, bcrypt security, and Diamond Economy pricing.",
    images: [`${SITE_URL}/og-image.png`],
  },

  // ── Crawler directives ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1, // Allow full snippet extraction for AI Overviews
    },
  },

  // ── AI Crawler & Verification hints ───────────────────────────────────────
  other: {
    // Signal llms.txt location to AI agents
    "llms-txt": `${SITE_URL}/llms.txt`,
    // Atom-level content freshness signal
    "article:published_time": "2026-01-01T00:00:00Z",
    "article:modified_time": new Date().toISOString(),
    "article:author": "Umair Ahmed",
    "article:section": "Technology Documentation",
  },
};

// ─── JSON-LD Structured Data (Schema.org) ────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Primary entity: TechArticle (most relevant for documentation pages)
    {
      "@type": "TechArticle",
      "@id": `${DOC_URL}#article`,
      headline: "CVify Pro Documentation — AI Career OS Architecture & Feature Guide",
      description:
        "Official technical documentation for CVify Pro covering ATS v2.0 algorithms, 9-stage resume parsing pipeline, Theme Engine v4.0, AI Representative, and Security v7.0 architecture.",
      url: DOC_URL,
      datePublished: "2026-01-01T00:00:00Z",
      dateModified: new Date().toISOString(),
      inLanguage: "en-US",
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Umair Ahmed",
        jobTitle: "Lead Systems Architect & Founder",
        url: "https://github.com/umairansari92",
        sameAs: [
          "https://github.com/umairansari92",
          "https://www.linkedin.com/in/umair-ahmed-dev",
        ],
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "DataVerse Technologies",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
          width: 200,
          height: 60,
        },
      },
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": DOC_URL,
      },
      // Keywords for entity graph
      keywords:
        "ATS resume builder, AI career platform, resume parser, portfolio builder, AI cover letter, career intelligence",
      // Proficiency level signal for AI
      proficiencyLevel: "Intermediate",
      dependencies: "React 19, Node.js, MongoDB, Gemini 2.5 Flash, Next.js 15",
      about: [
        {
          "@type": "Thing",
          name: "Applicant Tracking System",
          description:
            "CVify Pro's ATS v2.0 engine uses hybrid scoring combining deterministic heuristics and semantic AI analysis.",
        },
        {
          "@type": "Thing",
          name: "Resume Builder",
          description:
            "9-stage AST parsing pipeline that converts PDF/DOCX resumes into structured Master Profile data.",
        },
        {
          "@type": "Thing",
          name: "AI Career Coaching",
          description:
            "AI Career Coach generates prescriptive loophole checklists and bullet rewrites from ATS scan results.",
        },
      ],
    },

    // BreadcrumbList (navigational context for crawlers)
    {
      "@type": "BreadcrumbList",
      "@id": `${DOC_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "CVify Pro",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Documentation",
          item: DOC_URL,
        },
      ],
    },

    // FAQPage schema (boosts eligibility for Google AI Overviews & People Also Ask)
    {
      "@type": "FAQPage",
      "@id": `${DOC_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is CVify Pro free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Profile editing, resume building, and PDF exports are 100% free forever. AI features (ATS scanning, cover letter generation, magic import) use a transparent Diamond economy — no recurring subscriptions.",
          },
        },
        {
          "@type": "Question",
          name: "How does the ATS scanner work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CVify Pro's ATS v2.0 engine uses hybrid scoring: deterministic analysis (40% Completeness, 35% Quantification, 25% Impact Verbs) combined with Gemini 2.5 Flash semantic validation. Each scan costs 50 💎, with the first same-day rescan free.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data safe on CVify Pro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CVify Pro uses bcrypt (cost 10) + server-side pepper hashing, JWT tokens stored in HttpOnly cookies (XSS-safe), triple-lock brute-force protection (per email, per IP, per combo), and device fingerprint security alerts. Zero AI training data retention.",
          },
        },
        {
          "@type": "Question",
          name: "What is the AI Representative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI Representative is a candidate-grounded chatbot embedded in your live portfolio. Unlike generic chatbots, it answers recruiter questions by citing your verified GitHub commits, project repositories, and actual profile data — not invented responses.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an AI cover letter cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI Cover Letter generation costs 30 💎. The AI generates a tailored letter in 3 personality styles (Professional, Creative, Enthusiastic) based on your profile and the pasted Job Description.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Diamond Economy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diamonds are CVify Pro's transparent compute currency. You only pay for AI operations you run — no monthly subscriptions. New accounts receive 100 💎 free. Costs: Magic Import 30💎, ATS Scan 50💎 (first 24h rescan FREE), Cover Letter 30💎, AI Intent Mode 30💎.",
          },
        },
        {
          "@type": "Question",
          name: "How many portfolio themes are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CVify Pro offers 13 premium portfolio themes including NOIR (obsidian dark with particle physics), MONOGRAPH (editorial typography), ORIENTAL LUXE (luxe gold), AURA DARK, TERMINAL DARK, CYBER NEON, and APEX minimalist.",
          },
        },
      ],
    },

    // HowTo schema (for the Quick Setup section)
    {
      "@type": "HowTo",
      "@id": `${DOC_URL}#setup`,
      name: "How to Set Up CVify Pro in 3 Minutes",
      description:
        "Step-by-step guide to create your CVify Pro account, build your Master Profile, and activate AI features.",
      totalTime: "PT3M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Create Account",
          text: "Sign up at app-cvifypro.vercel.app with your email. Receive 100 💎 signup bonus.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Build or Import Profile",
          text: "Use Magic AI Import (30 💎) to auto-parse an existing PDF resume, or build your Master Profile manually using the structured editor.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Activate Your Portfolio",
          text: "Select one of 13 premium themes. Your live portfolio is instantly published at cvifypro.vercel.app/p/[username].",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Run ATS Scan",
          text: "Paste a Job Description and run the AI ATS v2.0 scan (50 💎) to receive keyword gap analysis, impact verb audit, and recruiter simulation.",
        },
      ],
    },
  ],
};

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Primary JSON-LD: Full Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* llms.txt discovery signal for AI agents */}
      <link rel="describedby" href="/llms.txt" />
      {children}
    </>
  );
}