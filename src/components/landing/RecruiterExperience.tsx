"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, UserCheck, CheckCircle2, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const RecruiterExperience = () => {
  return (
    <section id="recruiter-experience" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            Hiring Signal
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Recruiter Experience.
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            CVify simulates a hiring manager's first 6-second review to generate clear alignment tags and guidance.
          </p>
        </div>

        {/* Verdict Cards */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                <Bot className="w-4 h-4 animate-pulse" /> 6-Second Verdict
              </span>
              <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">The First Impression</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              Recruiters scan quickly. CVify simulates recruiter psychology to generate a concise candidate rating, highlight key verified achievements, and provide recommendation advice.
            </p>

            <ul className="space-y-3">
              {[
                "Instant candidate summary outline",
                "Clear visual alignment indicators",
                "Direct verified link tags for proofs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel: Simulator Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-[3.5rem] border-white/5 bg-slate-950 p-8 md:p-12 space-y-8 shadow-premium text-left">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Recruiter Verdict Card</span>
                <span className="text-[10px] font-black text-success bg-success/10 border border-success/20 px-3 py-1 rounded-full uppercase tracking-widest">Alignment: High</span>
              </div>

              {/* Impressions summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success/15 border border-success/20 flex items-center justify-center text-success">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Candidate Impressions</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">AI Generated Rating</p>
                  </div>
                </div>

                <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Umair stands out immediately as a strong React developer with verified projects. The structural integration of his code is backed by active GitHub commits. Recommended for immediate screening."
                  </p>
                </div>
              </div>

              {/* Metrics indicator */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Recruiter Rating</p>
                  <p className="text-lg font-black text-white font-outfit">Tier 1 - Strong</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Apply Guidance</p>
                  <p className="text-lg font-black text-primary font-outfit">Apply Immediately</p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-sm justify-center shadow-xl">
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
