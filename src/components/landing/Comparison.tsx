"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const matrix = [
  { feature: "Interactive Resume Builder", cvify: true, traditional: true },
  { feature: "AI ATS Optimization Auditing", cvify: true, traditional: false },
  { feature: "AI Resume Coach (Loophole Checklists)", cvify: true, traditional: false },
  { feature: "Live Hosted Career Portfolio", cvify: true, traditional: false },
  { feature: "AI Recruiter Representative Bot", cvify: true, traditional: false },
  { feature: "Real-time Recruiter Telemetry (Views, Downloads)", cvify: true, traditional: false },
  { feature: "Native Compliant PDF Exports", cvify: true, traditional: true }
];

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Why CVify <span className="text-emerald-500">Pro.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-xl mx-auto">
            Compare the core capabilities of the AI Career Operating System against standard single-file PDF generators.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="rounded-3xl sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 overflow-hidden text-left shadow-xl dark:shadow-none">
          <div className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-8 py-4 sm:py-6 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01] text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <div className="col-span-6 sm:col-span-8">System Capabilities</div>
            <div className="col-span-3 sm:col-span-2 text-center text-emerald-600 dark:text-emerald-400">CVify Pro</div>
            <div className="col-span-3 sm:col-span-2 text-center text-slate-500">Traditional</div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {matrix.map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-8 py-3.5 sm:py-4.5 items-center hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors">
                <div className="col-span-6 sm:col-span-8 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">{row.feature}</div>
                
                {/* CVify Pro mark */}
                <div className="col-span-3 sm:col-span-2 flex justify-center text-emerald-500">
                  {row.cvify ? (
                    <div className="p-1 sm:p-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                  )}
                </div>

                {/* Traditional mark */}
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {row.traditional ? (
                    <div className="p-1 sm:p-1.5 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400">
                      <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-rose-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below table */}
        <div className="text-center pt-2 sm:pt-4">
          <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black shadow-xl shadow-emerald-500/25 transition-all hover:scale-105">
            Unlock Full Operating System <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
