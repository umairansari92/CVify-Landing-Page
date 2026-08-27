import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CVify Pro System Documentation & Engineering Architecture",
  description: "Official technical documentation, API contracts, ATS v2.0 algorithms, 9-stage parser pipeline, Theme Engine v4.0, and security architecture for CVify Pro.",
  alternates: {
    canonical: "https://cvifypro.vercel.app/documentation",
  },
  openGraph: {
    title: "CVify Pro System Documentation & Engineering Architecture",
    description: "Technical architecture, ATS scoring models, 9-stage parsing pipeline, dual-theme design system v2.0, and security protocols for CVify Pro.",
    url: "https://cvifypro.vercel.app/documentation",
    type: "article",
    siteName: "CVify Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVify Pro Documentation",
    description: "Full engineering specification — ATS v2.0, Theme Engine v4.0, Resume Intelligence v5, Security v7.",
  },
};

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "CVify Pro System Documentation & Engineering Architecture",
            description: "Comprehensive engineering specification for CVify Pro — ATS scoring, 9-stage parsing, Theme Engine v4.0, security protocols.",
            url: "https://cvifypro.vercel.app/documentation",
            author: { "@type": "Person", name: "Umair Ahmed", jobTitle: "Lead Systems Architect & Founder" },
            publisher: { "@type": "Organization", name: "DataVerse Technologies", logo: "https://cvifypro.vercel.app/CVify%20Logo%20Dark.jpg" },
          }),
        }}
      />
      {children}
    </>
  );
}