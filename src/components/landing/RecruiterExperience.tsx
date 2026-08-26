"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, UserCheck, CheckCircle2, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const RecruiterExperience = () => {
  return (
    <section id="recruiter-experience" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            Hiring Signal
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Recruiter Experience.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            CVify simulates a hiring manager&apos;s first 6-second review to generate clear alignment tags and guidance.
          </p>
        </div>

        {/* Verdict Cards */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.25em] flex items-center gap-2">
                <Bot className="w-4 h-4 animate-pulse" /> 6-Second Verdict
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit uppercase tracking-tight">The First Impression</h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Recruiters scan quickly. CVify simulates recruiter psychology to generate a concise candidate rating, highlight key verified achievements, and provide recommendation advice.
            </p>

            <ul className="space-y-2.5 sm:space-y-3">
              {[
                "Instant candidate summary outline",
                "Clear visual alignment indicators",
                "Direct verified link tags for proofs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel: Simulator Card */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8 shadow-xl dark:shadow-none text-left">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-4">
                <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Recruiter Verdict Card</span>
                <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-widest">Alignment: High</span>
              </div>

              {/* Impressions summary */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Candidate Impressions</h4>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">AI Generated Rating</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-4 sm:p-5 rounded-2xl space-y-2 sm:space-y-3">
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    &ldquo;Umair stands out immediately as a strong React developer with verified projects. The structural integration of his code is backed by active GitHub commits. Recommended for immediate screening.&rdquo;
                  </p>
                </div>
              </div>

              {/* Metrics indicator */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Recruiter Rating</p>
                  <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-outfit">Tier 1 - Strong</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Apply Guidance</p>
                  <p className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-outfit">Apply Immediately</p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-2xl font-black text-sm justify-center shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]">
                  Analyze Recruiter Score <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterExperience;
