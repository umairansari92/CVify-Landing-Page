"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, TrendingUp, Users } from "lucide-react";

const TrustBar = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      value: "85,000+",
      label: "AI Resume Scans"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-success" />,
      value: "+65%",
      label: "Avg. Match Score Increase"
    },
    {
      icon: <Trophy className="w-5 h-5 text-warning" />,
      value: "24,000+",
      label: "Portfolios Published"
    }
  ];

  const logos = ["Google", "Amazon", "Microsoft", "Meta", "Tesla", "SpaceX"];

  return (
    <section className="py-12 sm:py-16 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Dynamic statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm dark:shadow-none"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/5">
                {stat.icon}
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit">{stat.value}</p>
                <p className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider sm:tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand alignment line */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
            Engineered for professionals targeting top-tier organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg sm:text-xl md:text-2xl font-black text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-default select-none uppercase tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
