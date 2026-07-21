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
    <section id="ats-engine" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20 text-error text-[10px] font-black uppercase tracking-widest">
            Deep Compliance
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            ATS Compliance <span className="text-error">Engine.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Our dual-layer parser maps layouts and parses skills just like modern applicant tracking systems.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Left panel: Before/After contrast */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight font-outfit">The Before & After</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Watch what happens to a candidate file when passed through the optimizer. A generic layout is transformed into a highly relevant data structure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Before Card */}
              <div className="bg-slate-900/60 border border-white/5 p-6 rounded-[2rem] space-y-4">
                <div className="flex justify-between items-center text-xs font-black text-error">
                  <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> BEFORE SCAN</span>
                  <span className="text-lg">32%</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-1.5 w-full bg-slate-800 rounded" />
                  <div className="h-1.5 w-3/4 bg-slate-800 rounded" />
                  <div className="h-1.5 w-1/2 bg-slate-800 rounded" />
                </div>
                <ul className="space-y-1.5 pt-2 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                  <li className="flex items-center gap-1.5 text-error">✕ Missing keywords</li>
                  <li className="flex items-center gap-1.5">✕ Plain summary</li>
                  <li className="flex items-center gap-1.5">✕ Layout parsing errors</li>
                </ul>
              </div>

              {/* After Card */}
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-[2rem] space-y-4 shadow-glow">
                <div className="flex justify-between items-center text-xs font-black text-success">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> OPTIMIZED</span>
                  <span className="text-xl text-white font-outfit">91%</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-1.5 w-full bg-primary/30 rounded" />
                  <div className="h-1.5 w-4/5 bg-primary/20 rounded" />
                  <div className="h-1.5 w-2/3 bg-primary/20 rounded" />
                </div>
                <ul className="space-y-1.5 pt-2 text-[10px] font-black text-slate-300 uppercase tracking-wider">
                  <li className="flex items-center gap-1.5 text-success">✓ 14 target terms aligned</li>
                  <li className="flex items-center gap-1.5 text-success">✓ Quantified impacts added</li>
                  <li className="flex items-center gap-1.5 text-success">✓ Zero layout parsing issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right panel: Active scanner status */}
          <div className="glass-card rounded-[3.5rem] border-white/5 p-8 md:p-12 bg-slate-950 relative overflow-hidden space-y-8">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Parser Status</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-1.5 bg-primary/10 border border-primary/20 hover:border-primary text-primary text-[9px] font-black uppercase rounded-lg tracking-widest"
                >
                  Step Cycle
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {steps.map((s, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div 
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                      isActive 
                        ? "bg-slate-900 border-primary/20 shadow-inner" 
                        : "bg-transparent border-transparent opacity-45"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl border ${isActive ? "bg-primary border-primary text-white" : "bg-slate-900 border-white/5 text-slate-500"}`}>
                      {s.icon}
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm font-black text-white uppercase tracking-tight">{s.title}</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 text-center">
              <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-sm justify-center shadow-xl shadow-primary/20">
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
