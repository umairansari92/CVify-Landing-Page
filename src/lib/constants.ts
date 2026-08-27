/**
 * Centralized URL constants for the CVify landing page.
 * Change here → updates everywhere automatically.
 */

export const APP_URL = "https://app-cvifypro.vercel.app";
export const DOCS_URL = "/documentation";
export const SAMPLE_PROFILE_URL = `${APP_URL}/p/umairansari92`;
export const DATAVERSE_URL = "https://dataversetechnologies.vercel.app/";

/** Live demo portfolio profiles — seeded via seedDummyProfiles.js */
export const DEMO_PROFILES = [
  {
    username: "umairansari92",
    name: "Umair Ahmed",
    role: "Full Stack Developer & AI Engineer",
    initials: "UA",
    url: `${APP_URL}/p/umairansari92`,
    theme: "NOIR",
    themeAccent: "#FF2E0C",
    tagline: "High-contrast editorial typography for senior architects.",
    screenshot: null,
  },
  {
    username: "sarahj",
    name: "Sarah Jenkins",
    role: "Senior Frontend Engineer | React & 3D Web",
    initials: "SJ",
    url: `${APP_URL}/p/sarahj`,
    theme: "APEX",
    themeAccent: "#3B82F6",
    tagline: "Silicon Valley glassmorphism with dynamic spotlights.",
    screenshot: "/demos/apex-sarahj-hero.png",
    screenshotAbout: "/demos/apex-sarahj-about.png",
  },
  {
    username: "alexchen",
    name: "Alex Chen",
    role: "Cloud Systems & DevOps Engineer",
    initials: "AC",
    url: `${APP_URL}/p/alexchen`,
    theme: "CYBERNEON",
    themeAccent: "#00FF66",
    tagline: "Terminal scanlines, live metrics, and phosphor accents.",
    screenshot: null,
  },
  {
    username: "marcusw",
    name: "Marcus Williams",
    role: "Data Scientist & ML Engineer",
    initials: "MW",
    url: `${APP_URL}/p/marcusw`,
    theme: "TERMINAL DARK",
    themeAccent: "#915eff",
    tagline: "Deep violet hacker aesthetics for machine learning experts.",
    screenshot: null,
  },
  {
    username: "aishap",
    name: "Aisha Patel",
    role: "AI & Machine Learning Researcher",
    initials: "AP",
    url: `${APP_URL}/p/aishap`,
    theme: "AURA DARK",
    themeAccent: "#A855F7",
    tagline: "Obsidian luxury design with ambient violet gradients.",
    screenshot: "/demos/terminaldark-aishap-hero.png",
  },
  {
    username: "elena_v",
    name: "Elena Vance",
    role: "Lead Product Designer & Design Systems",
    initials: "EV",
    url: `${APP_URL}/p/elena_v`,
    theme: "ORIENTAL LUXE",
    themeAccent: "#EAB308",
    tagline: "Serene gold and ivory proportions inspired by architectural print.",
    screenshot: null,
  },
];
