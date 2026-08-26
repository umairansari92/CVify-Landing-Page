"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldAlert, Sparkles, FileText, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const ATSIntelligence = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Upload & Parse",
      desc: "Local server reads binary nodes."
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Keyword Gaps",
      desc: "Audit density against target JDs."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Formatting Audit",
      desc: "Scan layouts, frames and fonts."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Impact Score",
      desc: "Calibrate verb density metrics."
    }
  ];

  return (
    <section id="ats-engine" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest">
            Deep Compliance
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            ATS Compliance <span className="text-rose-500">Engine.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Our dual-layer parser maps layouts and parses skills just like modern applicant tracking systems.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Left panel: Before/After contrast */}
          <div className="space-y-6 sm:space-y-8 text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-outfit">The Before & After</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Watch what happens to a candidate file when passed through the optimizer. A generic layout is transformed into a highly relevant data structure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Before Card */}
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center text-xs font-black text-rose-600 dark:text-rose-400">
                  <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> BEFORE SCAN</span>
                  <span className="text-lg font-outfit">32%</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-1.5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-1.5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>
                <ul className="space-y-1.5 pt-2 text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  <li className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">✕ Missing keywords</li>
                  <li className="flex items-center gap-1.5">✕ Plain summary</li>
                  <li className="flex items-center gap-1.5">✕ Layout parsing errors</li>
                </ul>
              </div>

              {/* After Card */}
              <div className="bg-emerald-500/5 border border-emerald-500/30 p-5 sm:p-6 rounded-3xl space-y-4 shadow-md dark:shadow-glow">
                <div className="flex justify-between items-center text-xs font-black text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> OPTIMIZED</span>
                  <span className="text-xl text-slate-900 dark:text-white font-outfit">91%</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-1.5 w-full bg-emerald-500/40 rounded" />
                  <div className="h-1.5 w-4/5 bg-emerald-500/30 rounded" />
                  <div className="h-1.5 w-2/3 bg-emerald-500/30 rounded" />
                </div>
                <ul className="space-y-1.5 pt-2 text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  <li className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">✓ 14 target terms aligned</li>
                  <li className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">✓ Quantified impacts added</li>
                  <li className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">✓ Zero layout parsing issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right panel: Active scanner status */}
          <div className="rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 p-6 sm:p-8 md:p-12 bg-white dark:bg-slate-950 relative overflow-hidden space-y-6 sm:space-y-8 shadow-xl dark:shadow-none">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-4">
              <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Parser Status</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-3 sm:px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase rounded-lg tracking-widest transition-all"
                >
                  Step Cycle
                </button>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {steps.map((s, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div 
                    key={idx}
                    className={`flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all ${
                      isActive 
                        ? "bg-slate-50 dark:bg-slate-900 border-emerald-500/30 shadow-inner" 
                        : "bg-transparent border-transparent opacity-60 dark:opacity-45"
                    }`}
                  >
                    <div className={`p-2 sm:p-2.5 rounded-xl border ${isActive ? "bg-emerald-500 border-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400"}`}>
                      {s.icon}
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{s.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 sm:pt-4 text-center">
              <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-2xl font-black text-sm justify-center shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]">
                Run Real Scan Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSIntelligence;
