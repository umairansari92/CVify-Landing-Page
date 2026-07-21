"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Bot, XCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Context copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-error/10 border border-error/20">
              <AlertCircle className="w-4 h-4 text-error" />
              <span className="text-error text-[10px] font-black uppercase tracking-widest">The Harsh Reality</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white font-outfit uppercase italic">
                Most Resumes <br />
                <span className="text-error">Never Reach a Human.</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl">
                Traditional job seeking relies on hope. Candidates upload generic PDF resumes that fail keyword density filters or confuse parser layouts, resulting in immediate silent rejections.
              </p>
              
              <div className="pt-4">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all"
                >
                  Analyze My Resume <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Comparative loops */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 w-full"
          >
            {/* Traditional Card */}
            <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between h-[420px] text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-error bg-error/10 border border-error/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  Traditional Path
                </span>
                <h3 className="text-xl font-black text-slate-400 uppercase tracking-tight font-outfit">The Rejection Loop</h3>
              </div>
              
              {/* Timeline nodes */}
              <div className="space-y-4 py-4 relative pl-4 border-l border-white/5">
                <div className="text-xs font-bold text-slate-500">Generic PDF</div>
                <div className="text-xs font-bold text-slate-500">Manual Submissions</div>
                <div className="text-xs font-bold text-slate-500">Black Hole Hope</div>
                <div className="text-xs font-black text-error">✕ Automated Rejection</div>
              </div>

              <div className="h-2 w-full bg-slate-950 rounded overflow-hidden" />
            </div>

            {/* CVify Pro Card */}
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between h-[420px] text-left shadow-glow">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  CVify Pro Path
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight font-outfit">The Conversion Engine</h3>
              </div>

              {/* Timeline nodes */}
              <div className="space-y-4 py-4 relative pl-4 border-l border-primary/20">
                <div className="text-xs font-bold text-slate-300">Master Data Profile</div>
                <div className="text-xs font-bold text-slate-300">AI Calibration Check</div>
                <div className="text-xs font-bold text-slate-300">Live Custom Portfolio</div>
                <div className="text-xs font-black text-success">✓ Verified Interview Offer</div>
              </div>

              <div className="h-2 w-full bg-primary/20 rounded overflow-hidden" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
