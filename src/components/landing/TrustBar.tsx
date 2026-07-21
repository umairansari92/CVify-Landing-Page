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
    <section className="py-16 border-y border-white/5 bg-slate-900/10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Dynamic statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-slate-900/40 border border-white/5 p-6 rounded-3xl"
            >
              <div className="p-3 bg-slate-950 rounded-2xl border border-white/5">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-black text-white font-outfit">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand alignment line */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-8">
            Engineered for professionals at top-tier organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-35 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xl md:text-2xl font-black text-slate-400 hover:text-primary transition-colors cursor-default select-none uppercase tracking-tight italic"
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
