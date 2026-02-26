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
  title: "CVify | Build Your Professional Identity",
  description: "Create premium, ATS-friendly resumes in minutes with CVify. 10+ professional templates, real-time preview, and native PDF export.",
  keywords: ["resume builder", "CV maker", "ATS-friendly resume", "professional CV", "Next.js resume", "native PDF export"],
  openGraph: {
    title: "CVify | Build Your Professional Identity",
    description: "The ultimate tool for modern professionals to build stunning resumes.",
    url: "https://cvify.app",
    siteName: "CVify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CVify Resume Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVify | Build Your Professional Identity",
    description: "Modern CV builder with 10+ premium templates. Download native PDF instantly.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-mesh min-h-screen text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
