import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "CVify Pro | AI-Powered Elite Resume Builder & ATS Scanner",
  description: "Build undeniable professional identities with CVify Pro. Features AI-powered ATS scanning, Gemini-driven cover letters, and premium native PDF export. Join the top 1% today.",
  keywords: [
    "cvify", "cvifypro", "cvify pro", "resume builder", "CV maker", "ATS scanner", 
    "AI resume audit", "ATS-friendly resume", "professional CV", "native PDF export",
    "Gemini AI cover letter", "resume intelligence"
  ],
  openGraph: {
    title: "CVify Pro | Elevate Your Professional Identity",
    description: "The ultimate AI ecosystem for modern professionals to build stunning, ATS-optimized resumes.",
    url: "https://cvify.pro",
    siteName: "CVify Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CVify Pro Resume Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVify Pro | AI Resume Builder",
    description: "Modern CV builder with AI ATS scanning and premium templates. Build your future in minutes.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://cvify.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CVify Pro",
              "url": "https://cvify.pro",
              "description": "AI-powered professional resume builder and ATS scanner.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-mesh min-h-screen text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
