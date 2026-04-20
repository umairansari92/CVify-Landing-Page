"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const APP_URL = "https://app-cvifypro.vercel.app";

const CTASection = () => (
  <section className="py-40 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5 -z-10" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto glass-card p-20 md:p-32 rounded-[5rem] text-center border-white/5 relative overflow-hidden"
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />

      {/* Background glow */}
      <div className="absolute -inset-40 bg-primary/10 blur-[160px] rounded-full opacity-40 pointer-events-none" />

      <div className="relative z-10 space-y-10">
        {/* Pre-heading urgency */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20 text-error text-[10px] font-black uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
          Your Next Opportunity Might Depend on Your Resume
        </div>

        <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-white font-outfit uppercase leading-[0.85] italic">
          Stop Getting <br />
          <span className="text-error">Rejected.</span> <br />
          Start Getting <br />
          <span className="text-success">Interviews.</span>
        </h2>

        <p className="text-xl text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
          Thousands of job seekers have already made the switch. Your turn.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={`${APP_URL}/signup`}
            className="group inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-16 py-8 rounded-[3rem] text-2xl font-black shadow-2xl shadow-primary/40 transition-all hover:scale-105 glow-btn"
          >
            Check My Resume Score Now
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "No signup required",
              "Instant results",
              "Takes less than 30 seconds",
            ].map((txt, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500 italic">
                <CheckCircle2 className="w-4 h-4 text-success" />
                {txt}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom shimmer line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-success/30 to-transparent animate-shimmer" />
      </div>
    </motion.div>
  </section>
);

export default CTASection;
