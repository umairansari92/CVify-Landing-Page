"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const tabs = [
  {
    id: "studio",
    label: "Resume Studio",
    tagline: "High-Fidelity Document Builder",
    features: [
      "Dynamic Markdown / JSON raw syncing",
      "Auto-quantification verb engines",
      "Single-click structural template swaps"
    ],
    demoType: "editor"
  },
  {
    id: "ats",
    label: "ATS Engine",
    tagline: "Compliance Calibration Auditing",
    features: [
      "Keyword density scan checks",
      "Loophole structural flagging",
      "Real-time JD parsing calibration"
    ],
    demoType: "radar"
  },
  {
    id: "portfolio",
    label: "Portfolio Lab",
    tagline: "Live Career Web Presence",
    features: [
      "Responsive visual portfolio pages",
      "Built-in visitor tracking stats",
      "Custom themes and custom domains support"
    ],
    demoType: "web"
  },
  {
    id: "interview",
    label: "Interview Prep",
    tagline: "Behavioral AI Screenings",
    features: [
      "Context-aware custom prompt loops",
      "Project-specific technical queries",
      "Actionable scoring benchmarks feedback"
    ],
    demoType: "chat"
  }
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("studio");
  const selected = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section id="showcase" className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            Guided Showcase
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            See the OS <span className="text-primary">in Action.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Interact with the core subsystems. Witness the execution loops that optimize your application assets.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-white/5 pb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider border transition-all ${
                activeTab === tab.id
                  ? "bg-primary border-primary text-white shadow-glow"
                  : "bg-slate-900 border-white/5 text-slate-500 hover:text-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{selected.tagline}</span>
              <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">{selected.label}</h3>
            </div>
            
            <ul className="space-y-4">
              {selected.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 font-bold text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary text-primary px-8 py-4 rounded-2xl font-black text-sm transition-all"
              >
                Launch {selected.label} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Preview Visualization */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-[3.5rem] border-white/5 bg-slate-950 p-4 h-[400px] relative overflow-hidden flex items-center justify-center shadow-premium">
              <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {activeTab === "studio" && (
                  <motion.div
                    key="studio"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full relative overflow-hidden rounded-b-xl"
                  >
                    {/* Real dashboard screenshot */}
                    <img
                      src="/demos/dashboard-command-center.png"
                      alt="CVifyPro Career OS Dashboard — Command Center with Resume Studio"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    {/* Floating stat pill */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      Career Health: 100/100
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      99% Job-Ready · Live
                    </div>
                  </motion.div>
                )}


                {activeTab === "ats" && (
                  <motion.div
                    key="ats"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col justify-between p-6 text-center space-y-4"
                  >
                    <div className="text-xs font-mono text-slate-500 border-b border-white/5 pb-3">
                      <span>ATS Sweep Pipeline</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                      <div className="relative w-28 h-28 rounded-full border border-dashed border-primary/40 flex items-center justify-center">
                        <div className="absolute inset-2 border border-dashed border-primary/20 rounded-full" />
                        <span className="text-3xl font-black text-white font-outfit">91%</span>
                        <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin" />
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Scanning Keyword density against JD...</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "portfolio" && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col"
                  >
                    {/* Mini browser chrome */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 border-b border-white/5 pb-3 px-2 pt-2 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 font-mono text-[10px]">app-cvifypro.vercel.app/p/sarahj</span>
                      <span className="ml-auto text-[9px] text-emerald-400 font-black">● LIVE</span>
                    </div>
                    {/* Real screenshot */}
                    <div className="flex-1 relative overflow-hidden rounded-b-xl">
                      <img
                        src="/demos/apex-sarahj-hero.png"
                        alt="CVifyPro APEX theme — Sarah Jenkins live portfolio"
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                )}


                {activeTab === "interview" && (
                  <motion.div
                    key="interview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col justify-between p-6 space-y-4"
                  >
                    <div className="text-xs font-mono text-slate-500 border-b border-white/5 pb-3">
                      <span>Screening Simulation</span>
                    </div>
                    <div className="flex-1 space-y-4 text-left pt-2">
                      <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 text-xs text-slate-300">
                        <span className="font-black text-primary">Interviewer AI:</span> "How did you scale the API routes by 300%?"
                      </div>
                      <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 text-xs text-white pl-8">
                        <span className="font-black text-primary">Candidate (You):</span> "By implementing Redis cache layer and database indexing."
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
