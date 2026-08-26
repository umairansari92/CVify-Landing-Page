"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Cpu, CheckSquare, FileSignature, Monitor, Target, MessageSquare, Award, ArrowRight } from "lucide-react";
import { APP_URL, SAMPLE_PROFILE_URL } from "@/lib/constants";

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
    actionText: "View Live Demo",
    badge: "Deployment Layer",
    actionUrl: SAMPLE_PROFILE_URL,
    isDemo: true,
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
    <section id="career-journey" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            The Complete Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            From Resume <span className="text-emerald-500">to Offer.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            CVify Pro manages the entire job application lifecycle. Follow the 8 key layers of professional positioning.
          </p>
        </div>

        {/* Timeline selector */}
        <div className="flex overflow-x-auto pb-4 gap-2 sm:gap-4 scrollbar-none snap-x justify-start lg:justify-between border-b border-slate-200 dark:border-white/5">
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="snap-center flex flex-col items-center gap-2 sm:gap-3 pb-4 sm:pb-6 px-2 sm:px-4 min-w-[100px] sm:min-w-[120px] text-center focus:outline-none relative group transition-all"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border transition-all ${
                    isActive
                      ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-200 group-hover:border-slate-300 dark:group-hover:border-white/10"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="space-y-0.5">
                  <p className={`text-[11px] sm:text-xs font-black uppercase tracking-wider ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                    {step.title}
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{step.subtitle}</p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeTimelineIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"
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
              className="rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 p-6 sm:p-8 md:p-12 bg-white dark:bg-slate-900/80 shadow-xl dark:shadow-none flex flex-col md:flex-row gap-8 sm:gap-10 items-center justify-between"
            >
              <div className="space-y-4 sm:space-y-6 flex-1 text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full inline-block">
                  {steps[activeIndex].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit uppercase tracking-tight">
                  {steps[activeIndex].detailTitle}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-base sm:text-lg max-w-xl">
                  {steps[activeIndex].desc}
                </p>
                <div className="pt-2 sm:pt-4">
                  <a
                    href={steps[activeIndex].isDemo ? steps[activeIndex].actionUrl! : `${APP_URL}/signup`}
                    target={steps[activeIndex].isDemo ? "_blank" : undefined}
                    rel={steps[activeIndex].isDemo ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-xs sm:text-sm transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
                  >
                    {steps[activeIndex].actionText} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative Visual Mockup */}
              <div className="w-full md:w-80 h-44 sm:h-48 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl relative overflow-hidden flex items-center justify-center p-6 sm:p-8">
                {/* Visual context patterns */}
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="text-center space-y-3 z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto animate-pulse">
                    {steps[activeIndex].icon}
                  </div>
                  <p className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">
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
