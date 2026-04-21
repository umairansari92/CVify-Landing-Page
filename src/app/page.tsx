"use client";

import React from "react";
import { MoveRight } from "lucide-react";

// New Conversion-Machine Components
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ComparisonTable from "@/components/landing/ComparisonTable";
import FeaturesSection from "@/components/landing/FeaturesSection";
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
        {/* 1 ── Promise: Hook them in 5 seconds */}
        <Hero />

        {/* 2 ── Social Proof: Credibility early */}
        <SocialProof />

        {/* 3 ── Problem: Emotional pain */}
        <ProblemSection />

        {/* 4 ── How It Works: Effortless process */}
        <HowItWorks />

        {/* 5 ── Before vs After: Visual proof */}
        <ComparisonTable />

        {/* 6 ── Features (Outcome-Based): Clarity on value */}
        <FeaturesSection />

        {/* 7 ── Live Profile: Show don't tell */}
        <ProfileShowcase />

        {/* 8 ── Demo: Break hesitation */}
        <DemoSection />

        {/* 9 ── Testimonials: Trust + Social proof */}
        <Testimonials />

        {/* 10 ── Pricing: Transparent */}
        <Pricing />

        {/* 11 ── Final CTA: Urgency + Loss aversion */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
