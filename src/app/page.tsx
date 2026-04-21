"use client";

import React from "react";
import { MoveRight } from "lucide-react";

// New Conversion-Machine Components
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SystemFlow from "@/components/landing/SystemFlow";
import Comparison from "@/components/landing/Comparison";
import Features from "@/components/landing/Features";
import ApplicationKit from "@/components/landing/ApplicationKit";
import ProfileShowcase from "@/components/landing/ProfileShowcase";
import DemoSection from "@/components/landing/DemoSection";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

import { APP_URL } from "@/lib/constants";

const AnnouncementBar = () => (
  <div className="bg-primary/10 border-b border-primary/20 py-2.5 px-6 relative overflow-hidden group z-50">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm">
      <span className="bg-primary text-white px-2 py-0.5 rounded-[4px] font-black uppercase text-[10px] tracking-wider shadow-sm shadow-primary/40">New</span>
      <p className="font-bold text-slate-300 italic tracking-tight">AI Resume Coach is here — Get an instant ATS score and action plan!</p>
      <a href={`${APP_URL}/signup`} className="text-primary font-black hover:underline inline-flex items-center gap-1 group/btn transition-all uppercase text-[10px] tracking-widest">
        Check My Score <MoveRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

const SocialProof = () => (
  <section className="py-20 border-y border-white/5 bg-slate-900/20 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-12">Used by job seekers worldwide</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {["Google", "Amazon", "Microsoft", "Meta", "Tesla", "SpaceX"].map((logo) => (
          <span key={logo} className="text-2xl md:text-3xl font-black text-white hover:text-primary transition-colors cursor-default select-none">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground bg-mesh selection:bg-primary/30 min-h-screen">
      <AnnouncementBar />
      <Nav />
      <main>
        {/* 1 ── Hero: Hook + Promise + Action */}
        <Hero />

        {/* 2 ── Social Proof: Credibility bar */}
        <SocialProof />

        {/* 3 ── Problem: Emotional Trigger (REJECTED stamp) */}
        <ProblemSection />

        {/* 4 ── System Flow: Core Differentiation (The 5-step reveal) */}
        <SystemFlow />

        {/* 5 ── How It Works: Simple Digestible Version */}
        <HowItWorks />

        {/* 6 ── Before vs After: Conversion Weapon (+65% Proof) */}
        <Comparison />

        {/* 7 ── Features: Outcome Based (Decision Engine) */}
        <Features />

        {/* 8 ── Demo Section: See it in Action */}
        <DemoSection />

        {/* 9 ── Trust / Testimonials: Real Results */}
        <Testimonials />

        {/* 10 ── Application Kit: Everything You Need to Apply (Resume + Letter + Profile) */}
        <ApplicationKit />

        {/* 11 ── Live Profile: Proof of Concept */}
        <ProfileShowcase />

        {/* 12 ── Pricing: Diamond Economy */}
        <Pricing />

        {/* 13 ── Final CTA: Conversion Push */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
