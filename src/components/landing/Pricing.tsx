"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

import { APP_URL } from "@/lib/constants";

const diamondTable = [
  { action: "1 AI Resume Scan", cost: "5 Diamonds" },
  { action: "1 AI Cover Letter", cost: "50 Diamonds" },
  { action: "1 AI Bullet Rewrite", cost: "10 Diamonds" },
  { action: "Full Profile Optimize", cost: "75 Diamonds" },
];

const Pricing = () => (
  <section id="pricing" className="py-40 px-6 relative overflow-hidden bg-slate-900/30">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-3xl"
      >
        <h2 className="text-4xl md:text-7xl font-black text-white font-outfit mb-6 tracking-tighter uppercase italic">The Diamond Economy.</h2>
        <p className="text-lg text-slate-400 font-medium leading-relaxed">
          Keep the core features for free, forever. Power up with AI using our transparent diamond system — pay only for what you use.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[4rem] border-white/5 relative group"
        >
          <div className="mb-10 space-y-2">
            <h3 className="text-2xl font-black text-white">Standard</h3>
            <p className="text-slate-400 text-sm font-medium">Perfect for building your foundation.</p>
          </div>
          <div className="text-6xl font-black text-white mb-10 font-outfit">$0<span className="text-lg text-slate-500 font-bold">/mo</span></div>
          <ul className="space-y-5 mb-12">
            {["Unlimited Resumes", "Standard Templates", "Basic ATS Check", "Manual Cover Letters", "Public Profile Link"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <a href={`${APP_URL}/signup`} className="block text-center py-5 rounded-3xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
            Start for Free
          </a>
        </motion.div>

        {/* AI Pro Plan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[4rem] border-primary/20 relative group overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-primary/20 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-primary/20">AI PRO</div>
          </div>
          <div className="mb-10 space-y-2">
            <h3 className="text-2xl font-black text-white">AI Pro</h3>
            <p className="text-slate-400 text-sm font-medium">For the elite, relentless job hunter.</p>
          </div>
          <div className="text-5xl font-black text-white mb-10 flex items-center gap-3">
            Diamonds
            <div className="p-2 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <ul className="space-y-5 mb-12">
            {["Deep AI ATS Match Score", "Unlimited AI Cover Letters", "AI Bullet Point Rewriting", "Full Analytics Dashboard", "Priority Support"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <a href={`${APP_URL}/signup`} className="block text-center py-5 rounded-3xl bg-primary text-white font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all uppercase tracking-widest text-xs">
            Unlock AI Power
          </a>
        </motion.div>
      </div>

      {/* Diamond Usage Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 w-full max-w-2xl glass-card rounded-[3rem] border-white/5 overflow-hidden"
      >
        <div className="px-10 py-6 bg-white/[0.02] border-b border-white/5 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Diamond Usage Guide</p>
        </div>
        <div className="divide-y divide-white/5">
          {diamondTable.map((row, i) => (
            <div key={i} className="flex items-center justify-between px-10 py-5 hover:bg-white/[0.02] transition-colors">
              <span className="text-sm font-bold text-slate-300">{row.action}</span>
              <span className="text-[10px] font-black text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full uppercase tracking-widest">{row.cost}</span>
            </div>
          ))}
        </div>
        <div className="px-10 py-5 bg-white/[0.02] border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest text-center italic">Diamonds are earned free or purchased. No subscriptions.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
