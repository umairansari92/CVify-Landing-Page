"use client";

import React from "react";
import { MoveRight } from "lucide-react";

// Modern Conversion-Engine Components
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import CareerJourney from "@/components/landing/CareerJourney";
import Ecosystem from "@/components/landing/Ecosystem";
import ProductShowcase from "@/components/landing/ProductShowcase";
import ATSIntelligence from "@/components/landing/ATSIntelligence";
import ResumeCoach from "@/components/landing/ResumeCoach";
import AIRepresentative from "@/components/landing/AIRepresentative";
import LivePortfolio from "@/components/landing/LivePortfolio";
import RecruiterExperience from "@/components/landing/RecruiterExperience";
import Comparison from "@/components/landing/Comparison";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
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

export default function Home() {
  return (
    <div className="bg-background text-foreground bg-mesh selection:bg-primary/30 min-h-screen">
      <AnnouncementBar />
      <Nav />
      <main>
        {/* 1 ── Hero: Outcome hook + Storytelling tabs */}
        <Hero />

        {/* 2 ── Trust Proof Bar: Metrics & Company Logos */}
        <TrustBar />

        {/* 3 ── Problem: Journey Lane Contrast (Red vs Green) */}
        <ProblemSection />

        {/* 4 ── Career Journey: Funnel timeline */}
        <CareerJourney />

        {/* 5 ── Ecosystem Grid: Bento overview */}
        <Ecosystem />

        {/* 6 ── Product Showcase: Visual Workspace pre-renders */}
        <ProductShowcase />

        {/* 7 ── ATS Intelligence: Sweep simulation & keyword calibration */}
        <ATSIntelligence />

        {/* 8 ── AI Resume Coach: Live Checkbox HUD simulation */}
        <ResumeCoach />

        {/* 9 ── AI Representative: Recruiter chat bot mock proofs */}
        <AIRepresentative />

        {/* 10 ── Live Portfolio: Theme selectors & Traffic logs */}
        <LivePortfolio />

        {/* 11 ── Recruiter Experience: 6-second verdict card */}
        <RecruiterExperience />

        {/* 12 ── Capabilities Comparison Matrix */}
        <Comparison />

        {/* 13 ── Plans: Solo / Pro + nested Diamond Economy guide */}
        <Pricing />

        {/* 14 ── Dropdown FAQ accordions */}
        <FAQ />

        {/* 15 ── Final Conversion Push */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
