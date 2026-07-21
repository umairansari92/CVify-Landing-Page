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
  },
  {
    username: "sarahj",
    name: "Sarah Johnson",
    role: "Senior UX Designer",
    initials: "SJ",
    url: `${APP_URL}/p/sarahj`,
  },
  {
    username: "marcusw",
    name: "Marcus Williams",
    role: "Data Scientist & ML Engineer",
    initials: "MW",
    url: `${APP_URL}/p/marcusw`,
  },
  {
    username: "aishap",
    name: "Aisha Patel",
    role: "Product Manager",
    initials: "AP",
    url: `${APP_URL}/p/aishap`,
  },
];
