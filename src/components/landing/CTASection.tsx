"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 text-center">
      {/* Glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Start Scaling Your Profile
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit uppercase tracking-tight sm:tracking-tighter leading-tight sm:leading-none">
            Ready to Build <br className="hidden sm:inline" /> Your Career OS?
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Register your profile in 60 seconds. Unlock your candidate scorecard and deploy your personal representative bot today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="flex justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="group relative bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Free Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Includes 100 Free Diamonds • Full Portfolio Templates Included • No Credit Card Required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
