"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import DiamondEconomy from "./DiamondEconomy";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 sm:py-36 px-4 sm:px-6 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            SaaS Packages
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Pricing Plans.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Keep the core builder features free, forever. Scale up your career search with smart AI top-up credits.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl relative">
          {/* Free Standard Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl sm:rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-6 sm:p-10 relative flex flex-col justify-between min-h-[480px] sm:min-h-[520px] text-left shadow-lg dark:shadow-none"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Standard</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Perfect for building your foundations.</p>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-outfit">$0<span className="text-sm text-slate-500 dark:text-slate-400 font-bold">/mo</span></div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Unlimited Profile editing",
                  "Standard visual templates",
                  "Public portfolio web page link",
                  "Native layout document exports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 font-bold text-xs">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={`${APP_URL}/signup`} className="block w-full text-center py-3.5 sm:py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white font-black rounded-2xl transition-all uppercase tracking-widest text-[10px]">
              Start Free (100 Diamonds)
            </a>
          </motion.div>

          {/* AI Pro Diamond Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl sm:rounded-[3rem] border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-6 sm:p-10 relative flex flex-col justify-between min-h-[480px] sm:min-h-[520px] text-left shadow-xl dark:shadow-glow overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">AI Pro</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">For the elite, strategic job seeker.</p>
                </div>
                <span className="text-[9px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-widest">PRO</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
                Diamonds
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-500" />
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Deep AI ATS Calibration scans",
                  "Coaching Checklist Loophole fixes",
                  "Conversational AI Representative Bot",
                  "Cover Letter generator checks",
                  "Real-time recruiter telemetry tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-bold text-xs">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={`${APP_URL}/signup`} className="block w-full text-center py-3.5 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-emerald-500/25 hover:scale-105">
              Upgrade Account <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Diamond Economy schedule sub-component */}
        <DiamondEconomy />
      </div>
    </section>
  );
};

export default Pricing;
