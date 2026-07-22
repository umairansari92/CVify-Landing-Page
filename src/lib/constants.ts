/**
 * Centralized URL constants for the CVify landing page.
 * Change here → updates everywhere automatically.
 */

export const APP_URL = "https://app-cvifypro.vercel.app";
export const DOCS_URL = `${APP_URL}/documentation`;
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
    screenshot: null, // use abstract UI
  },
  {
    username: "sarahj",
    name: "Sarah Jenkins",
    role: "Senior Frontend Engineer | React & 3D Web",
    initials: "SJ",
    url: `${APP_URL}/p/sarahj`,
    theme: "APEX",
    themeAccent: "#2D9881",
    screenshot: "/demos/apex-sarahj-hero.png",
    screenshotAbout: "/demos/apex-sarahj-about.png",
  },
  {
    username: "marcusw",
    name: "Marcus Williams",
    role: "Data Scientist & ML Engineer",
    initials: "MW",
    url: `${APP_URL}/p/marcusw`,
    theme: "TERMINAL DARK",
    themeAccent: "#915eff",
    screenshot: null, // use abstract UI
  },
  {
    username: "aishap",
    name: "Aisha Patel",
    role: "AI & Machine Learning Researcher",
    initials: "AP",
    url: `${APP_URL}/p/aishap`,
    theme: "TERMINAL DARK",
    themeAccent: "#915eff",
    screenshot: "/demos/terminaldark-aishap-hero.png",
  },
];
