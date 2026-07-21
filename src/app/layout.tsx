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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CVify Pro - ATS Resume Builder",
              "url": "https://cvify.pro",
              "description": "The best free AI-powered ATS resume builder and professional CV maker.",
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
