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
    <section id="comparison" className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            Capabilities Matrix
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Why CVify <span className="text-primary">Pro.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-xl mx-auto">
            Compare the core capabilities of the AI Career Operating System against standard single-file PDF generators.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="glass-card rounded-[2.5rem] border-white/5 bg-slate-900/20 overflow-hidden text-left shadow-premium">
          <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-white/5 bg-white/[0.01] text-xs font-black uppercase tracking-widest text-slate-500">
            <div className="col-span-6 sm:col-span-8">System Capabilities</div>
            <div className="col-span-3 sm:col-span-2 text-center text-primary">CVify Pro</div>
            <div className="col-span-3 sm:col-span-2 text-center">Traditional</div>
          </div>

          <div className="divide-y divide-white/5">
            {matrix.map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-8 py-5 items-center hover:bg-white/[0.01] transition-colors">
                <div className="col-span-6 sm:col-span-8 text-sm font-bold text-slate-300">{row.feature}</div>
                
                {/* CVify Pro mark */}
                <div className="col-span-3 sm:col-span-2 flex justify-center text-primary">
                  {row.cvify ? (
                    <div className="p-1 bg-primary/10 rounded-full border border-primary/20">
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-slate-600" />
                  )}
                </div>

                {/* Traditional mark */}
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {row.traditional ? (
                    <div className="p-1 bg-white/5 rounded-full border border-white/5 text-slate-400">
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-error" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below table */}
        <div className="text-center">
          <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl">
            Unlock Full Operating System <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
