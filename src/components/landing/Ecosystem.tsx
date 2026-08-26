"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Bot, FileUp, Target, 
  MessageSquare, UserCheck, BarChart3, ArrowRight, Check
} from "lucide-react";
import { APP_URL } from "@/lib/constants";

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            Complete System Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            The 6 Coordinated <span className="text-emerald-500">Career Engines.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg prose-block mx-auto">
            Not just isolated tools. CVify Pro integrates 6 specialized AI modules into one synchronized career operating system.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Large Featured Card — ATS Intelligence Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-6 sm:p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none flex flex-col justify-between space-y-6 sm:space-y-8 text-left relative overflow-hidden group"
          >
            <div className="space-y-3 sm:space-y-4 max-w-lg z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
                Core Engine 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit uppercase">ATS Intelligence Engine</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Hybrid ATS parser auditing keyword density, action verb alignment, and formatting loopholes against job specs in real-time.
              </p>
            </div>

            {/* Simulated Live Bar Visual */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 rounded-2xl space-y-3 z-10">
              <div className="flex justify-between text-xs font-mono text-slate-700 dark:text-slate-400 font-bold">
                <span>Keyword Match Index</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-black">91% Compliant</span>
              </div>
              <div className="h-2.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/5">
                <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full w-[91%]" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-[9px] font-mono text-slate-600 dark:text-slate-400 font-bold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Hard Skills</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Action Verbs</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Layout Parser</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Medium Card — Live Portfolio Lab */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none flex flex-col justify-between text-left space-y-6 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block">
                Core Engine 02
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-outfit uppercase">Portfolio Deployment Lab</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                Deploy responsive SEO web profiles with 12 theme presets and built-in recruiter tracking.
              </p>
            </div>
            <a href="#live-portfolio" className="text-xs font-black text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-white inline-flex items-center gap-1 group-hover:translate-x-1 transition-all">
              Preview Themes <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 3: Medium Card — AI Resume Coach */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none flex flex-col justify-between text-left space-y-6 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-primary bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
                Core Engine 03
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-outfit uppercase">AI Resume Coach</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                Contextual AI suggestions for quantified bullet rewrites, tone optimization, and impact metrics.
              </p>
            </div>
            <a href="#product-showcase" className="text-xs font-black text-blue-600 dark:text-primary hover:text-blue-700 dark:hover:text-white inline-flex items-center gap-1 group-hover:translate-x-1 transition-all">
              Test Coach <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 4: Small Card — Magic PDF Import */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col justify-between text-left space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-700 dark:text-slate-400">
                <FileUp className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white font-outfit uppercase">Magic Import</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                Parse existing PDFs into structured editable data models in seconds.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Small Card — Recruiter AI Representative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col justify-between text-left space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-slate-900 border border-cyan-500/20 dark:border-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white font-outfit uppercase">AI Representative</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                Let recruiters ask your candidate profile questions 24/7.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Small Card — Candidate Analytics HUD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col justify-between text-left space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-slate-900 border border-amber-500/20 dark:border-white/5 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white font-outfit uppercase">Analytics HUD</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                Real-time telemetry on profile views, resume downloads, and recruiter clicks.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section Mini-CTA */}
        <div className="pt-4 text-center">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white border border-slate-800 dark:border-white/10 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-md"
          >
            Explore All 6 Modules Free <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
