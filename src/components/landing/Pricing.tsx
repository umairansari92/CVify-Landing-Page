"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import DiamondEconomy from "./DiamondEconomy";

const Pricing = () => {
  return (
    <section id="pricing" className="py-40 px-6 relative overflow-hidden bg-slate-900/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            SaaS Packages
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit mb-6 tracking-tighter uppercase italic">
            Pricing Plans.
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Keep the core builder features free, forever. Scale up your career search with smart AI top-up credits.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl relative">
          {/* Free Standard Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[3.5rem] border-white/5 relative flex flex-col justify-between h-[520px] text-left"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Standard</h3>
                <p className="text-slate-500 text-xs font-medium">Perfect for building your foundations.</p>
              </div>
              <div className="text-5xl font-black text-white font-outfit">$0<span className="text-sm text-slate-500 font-bold">/mo</span></div>
              <ul className="space-y-4">
                {[
                  "Unlimited Profile editing",
                  "Standard visual templates",
                  "Public portfolio web page link",
                  "Native layout document exports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-400 font-bold text-xs">
                    <CheckCircle2 className="w-4.5 h-4.5 text-success flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={`${APP_URL}/signup`} className="block w-full text-center py-4 bg-slate-900 border border-white/5 text-white font-black rounded-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-[10px]">
              Start Free (100 Diamonds)
            </a>
          </motion.div>

          {/* AI Pro Diamond Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[3.5rem] border-primary/20 bg-primary/5 relative flex flex-col justify-between h-[520px] text-left shadow-glow overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">AI Pro</h3>
                  <p className="text-slate-300 text-xs font-medium">For the elite, strategic job seeker.</p>
                </div>
                <span className="text-[9px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">PRO</span>
              </div>
              <div className="text-5xl font-black text-white flex items-center gap-2">
                Diamonds
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <ul className="space-y-4">
                {[
                  "Deep AI ATS Calibration scans",
                  "Coaching Checklist Loophole fixes",
                  "Conversational AI Representative Bot",
                  "Cover Letter generator checks",
                  "Real-time recruiter telemetry tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-300 font-bold text-xs">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={`${APP_URL}/signup`} className="block w-full text-center py-4 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20">
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
