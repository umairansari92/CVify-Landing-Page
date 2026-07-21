"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Cpu, CheckSquare, FileSignature, Monitor, Target, MessageSquare, Award, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const steps = [
  {
    title: "Master Profile",
    subtitle: "Create",
    icon: <FileText className="w-6 h-6" />,
    detailTitle: "Step 1: Build Your Master Data Profile",
    desc: "Import your raw PDF resume or build it using our structured editor. Your data is synced automatically as a living career asset.",
    actionText: "Build Master Profile",
    badge: "Input Layer"
  },
  {
    title: "AI Analysis",
    subtitle: "Audit",
    icon: <Cpu className="w-6 h-6" />,
    detailTitle: "Step 2: Deep AI GAP Analysis",
    desc: "Gemini AI crawls your content to extract hard competencies, action verbs, and structural loopholes against current industry benchmarks.",
    actionText: "Run AI Analysis",
    badge: "Audit Layer"
  },
  {
    title: "ATS Align",
    subtitle: "Optimize",
    icon: <CheckSquare className="w-6 h-6" />,
    detailTitle: "Step 3: ATS Format & Keyword Match",
    desc: "Align your profile directly with target keywords. Fix hidden parsing issues and optimize bullet layout rules.",
    actionText: "Align Keywords",
    badge: "Optimization Layer"
  },
  {
    title: "Cover Letter",
    subtitle: "Tailor",
    icon: <FileSignature className="w-6 h-6" />,
    detailTitle: "Step 4: AI Contextual Cover Letters",
    desc: "Generate highly professional cover letters built directly from your profile data matching the target job description constraints.",
    actionText: "Generate Cover Letter",
    badge: "Writing Layer"
  },
  {
    title: "Portfolio",
    subtitle: "Publish",
    icon: <Monitor className="w-6 h-6" />,
    detailTitle: "Step 5: Launch Live Portfolio Page",
    desc: "Go beyond flat files. Publish your professional profile as a responsive, SEO-ready web page featuring recruiter tracking details.",
    actionText: "Launch Portfolio",
    badge: "Deployment Layer"
  },
  {
    title: "Job Match",
    subtitle: "Calibrate",
    icon: <Target className="w-6 h-6" />,
    detailTitle: "Step 6: Target Role Calibration",
    desc: "Test your fit against specific job postings. Calibrate keywords and structural emphasis for every role you apply to.",
    actionText: "Calibrate Role",
    badge: "Calibration Layer"
  },
  {
    title: "AI Coach prep",
    subtitle: "Simulate",
    icon: <MessageSquare className="w-6 h-6" />,
    detailTitle: "Step 7: AI Interview Simulations",
    desc: "Prepare for live screenings. Practice technical and behavioral questions tailored directly to your projects and experience.",
    actionText: "Start Prep Simulation",
    badge: "Preparation Layer"
  },
  {
    title: "Offer",
    subtitle: "Land",
    icon: <Award className="w-6 h-6" />,
    detailTitle: "Step 8: Recruiter Simulation to Offer",
    desc: "Simulate the recruiter's 6-second verdict screen. Keep optimization scores high, pass initial filters, and land the interview.",
    actionText: "Get Started Now",
    badge: "Outcome Layer"
  }
];

const CareerJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="career-journey" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            The Complete Pipeline
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            From Resume <span className="text-primary">to Offer.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            CVify Pro manages the entire job application lifecycle. Follow the 8 key layers of professional positioning.
          </p>
        </div>

        {/* Timeline selector */}
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x justify-start lg:justify-between border-b border-white/5">
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`snap-center flex flex-col items-center gap-3 pb-6 px-4 min-w-[120px] text-center focus:outline-none relative group transition-all`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-glow"
                      : "bg-slate-900 border-white/5 text-slate-500 group-hover:text-slate-300 group-hover:border-white/10"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="space-y-0.5">
                  <p className={`text-xs font-black uppercase tracking-wider ${isActive ? "text-white" : "text-slate-500"}`}>
                    {step.title}
                  </p>
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{step.subtitle}</p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeTimelineIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Details Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-[3.5rem] border-white/5 p-8 md:p-14 bg-gradient-to-br from-slate-900/40 via-transparent to-transparent flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <div className="space-y-6 flex-1">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full">
                  {steps[activeIndex].badge}
                </span>
                <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">
                  {steps[activeIndex].detailTitle}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed text-lg max-w-xl">
                  {steps[activeIndex].desc}
                </p>
                <div className="pt-4">
                  <a
                    href={`${APP_URL}/signup`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  >
                    {steps[activeIndex].actionText} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative Visual Mockup */}
              <div className="w-full md:w-80 h-48 bg-slate-950 border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center p-8">
                {/* Visual context patterns */}
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="text-center space-y-3 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto animate-pulse">
                    {steps[activeIndex].icon}
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    CVify System Node 0{activeIndex + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
