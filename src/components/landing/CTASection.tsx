"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20 text-center">
      {/* Glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Start Scaling Your Profile
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit uppercase tracking-tighter leading-none italic">
            Ready to Build <br /> Your Career OS?
          </h2>
          
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto leading-relaxed">
            Register your profile in 60 seconds. Unlock your candidate scorecard and deploy your personal representative bot today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="group relative bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Free Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
            Includes 100 Free Diamonds • Full Portfolio Templates Included • No Credit Card Required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
