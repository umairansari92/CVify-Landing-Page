import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cvify.pro"),
  title: "Best Free ATS Resume Builder & CV Maker | CVify Pro",
  description: "Create an undeniable professional identity with the best free ATS resume builder. Get instant AI-powered ATS scanning, Gemini AI cover letters, and premium native PDF exports to land your dream job faster. Try CVify Pro today.",
  keywords: [
    "ATS resume builder", "free CV maker", "online resume builder", "AI resume generator", 
    "ATS friendly resume", "resume scanner", "best free resume builder", "build resume online", 
    "ATS resume checker", "Gemini AI cover letter", "professional CV maker", "CVify", "CVify Pro"
  ],
  openGraph: {
    title: "CVify Pro | The Ultimate ATS Resume Builder",
    description: "The ultimate AI ecosystem for modern professionals to build stunning, ATS-optimized resumes that beat the algorithms.",
    url: "https://cvify.pro",
    siteName: "CVify Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CVify Pro - AI-Powered Free ATS Resume Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVify Pro | AI ATS Resume Builder",
    description: "The ultimate AI ecosystem for modern professionals to build stunning, ATS-optimized resumes that beat the algorithms.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://cvify.pro",
  },
  verification: {
    google: "XfPfjDgxxYvjhcuVe4FWWBtUToJ2JaYBoDGBNr3LXd8",
  },
  icons: {
    icon: "/CVify Favicon.jpg",
    apple: "/CVify Favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/CVify Favicon.jpg" />
        <link rel="apple-touch-icon" href="/CVify Favicon.jpg" />
        {/* 2026: AI Crawler content roadmap discovery (llms.txt standard) */}
        <link rel="describedby" href="/llms.txt" />
        {/* Preconnect to external AI/CDN resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cvifypro.vercel.app/#organization",
                  "name": "DataVerse Technologies",
                  "url": "https://cvifypro.vercel.app",
                  "logo": "https://app-cvifypro.vercel.app/CVify%20Logo%20Dark.jpg",
                  "founder": {
                    "@id": "https://cvifypro.vercel.app/#founder"
                  },
                  "sameAs": [
                    "https://github.com/umairansari92",
                    "https://www.linkedin.com/in/umair-ahmed-dev"
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://cvifypro.vercel.app/#founder",
                  "name": "Umair Ahmed",
                  "jobTitle": "Lead Systems Architect & Founder",
                  "worksFor": {
                    "@id": "https://cvifypro.vercel.app/#organization"
                  },
                  "description": "Senior Full Stack Developer, Systems Architect, and Educator. Creator of CVify Pro.",
                  "sameAs": [
                    "https://github.com/umairansari92",
                    "https://www.linkedin.com/in/umair-ahmed-dev"
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://cvifypro.vercel.app/#software",
                  "name": "CVify Pro",
                  "alternateName": ["CVify", "CVifyPro", "CVify Pro AI"],
                  "applicationCategory": "BusinessApplication",
                  "applicationSubCategory": "Career & Resume Intelligence Platform",
                  "operatingSystem": "Web, Android, iOS, Windows, macOS, Linux",
                  "url": "https://cvifypro.vercel.app",
                  "image": "https://app-cvifypro.vercel.app/CVify%20Logo%20Dark.jpg",
                  "description": "AI-powered Career Intelligence and Portfolio Ecosystem providing ATS-optimized resume building, 9-stage resume parsing, real-time job description matching, and customizable live portfolio themes.",
                  "author": {
                    "@id": "https://cvifypro.vercel.app/#founder"
                  },
                  "publisher": {
                    "@id": "https://cvifypro.vercel.app/#organization"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
                  },
                  "featureList": [
                    "9-Stage Resume Intelligence Parsing & Auto-Healing",
                    "Context-Aware ATS v2.0 Micro-SaaS Engine",
                    "13 Live Portfolio Themes with Reactive Theme Engine v4.0",
                    "Natural Language AI Intent Command Bar",
                    "AI Job Description Matcher & Keyword Gap Analysis",
                    "AI Role-Play Interview Simulator",
                    "Dynamic Public Shareable Resumes & Portfolios"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cvifypro.vercel.app/#website",
                  "url": "https://cvifypro.vercel.app",
                  "name": "CVify Pro",
                  "publisher": {
                    "@id": "https://cvifypro.vercel.app/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-mesh min-h-screen text-[var(--color-foreground)] transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
