"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldAlert, CheckCircle2, RotateCw } from "lucide-react";

const diamondTable = [
  { action: "Full AI ATS Scan (Calibration check)", cost: "50 Diamonds" },
  { action: "First 24hr Re-Scan (Verify edits)", cost: "FREE" },
  { action: "Subsequent 24hr Re-Scans (Iterative tuning)", cost: "25 Diamonds" },
  { action: "AI Cover Letter (Job contextualized)", cost: "50 Diamonds" },
  { action: "AI Bullet Rewrite (Metric quantification)", cost: "10 Diamonds" },
  { action: "Offline PDF Optimization Report", cost: "FREE" }
];

const DiamondEconomy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 sm:mt-24 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Credit Architecture
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit uppercase tracking-tight">The Diamond Economy</h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto">
          We believe in smart, fair pricing. Build your resume for free, and use diamonds only for advanced AI computing.
        </p>
      </div>

      {/* Rules highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 p-5 sm:p-6 rounded-3xl flex gap-4 text-left shadow-sm dark:shadow-none">
          <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex-shrink-0 h-fit">
            <RotateCw className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">24-Hour Free Window</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Scan your resume as many times as you want. Once audited, the first re-scan of the same file within 24 hours costs <strong className="text-slate-900 dark:text-white">0 diamonds</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 p-5 sm:p-6 rounded-3xl flex gap-4 text-left shadow-sm dark:shadow-none">
          <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex-shrink-0 h-fit">
            <Zap className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Iterative Scan Discounts</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Making incremental tweaks? Subsequent edits/re-scans within 24 hours cost 50% less (only <strong className="text-slate-900 dark:text-white">25 diamonds</strong>).
            </p>
          </div>
        </div>
      </div>

      {/* Usage matrix */}
      <div className="rounded-3xl sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 overflow-hidden text-left shadow-md dark:shadow-none">
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01]">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Diamond Cost Schedule</p>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {diamondTable.map((row, i) => (
            <div key={i} className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4.5 hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-300 pr-2">{row.action}</span>
              <span className="text-[9px] font-black text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">{row.cost}</span>
            </div>
          ))}
        </div>
        <div className="px-5 sm:px-8 py-3.5 sm:py-4 bg-slate-50 dark:bg-white/[0.01] border-t border-slate-200 dark:border-white/5 text-center">
          <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest italic">
            Diamonds are purchased in custom top-up blocks. No automatic recurring subscriptions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiamondEconomy;
