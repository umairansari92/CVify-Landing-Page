"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Eye, Users, ArrowRight } from "lucide-react";

import { SAMPLE_PROFILE_URL as LIVE_PROFILE } from "@/lib/constants";

const ProfileShowcase = () => (
  <section id="portfolio" className="py-40 px-6 relative overflow-hidden">
    <div className="absolute -inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary text-[10px] font-black uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live Example
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9] uppercase italic">
          Your Live <br /><span className="text-primary">Career Profile.</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Not just a PDF. A living, breathing profile page that recruiters can visit, save, and share — with real-time analytics for you.
        </p>
      </motion.div>

      {/* Profile preview card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-full max-w-5xl"
      >
        <div className="glass-card rounded-[4rem] border-white/5 shadow-premium overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-8 py-5 bg-slate-900/60 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/70" />
              <div className="w-3 h-3 rounded-full bg-warning/70" />
              <div className="w-3 h-3 rounded-full bg-success/70" />
            </div>
            <a
              href={LIVE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between mx-4 bg-slate-950/60 border border-white/5 rounded-xl px-4 py-2 group hover:border-primary/30 transition-all"
            >
              <span className="text-xs font-bold text-slate-500 group-hover:text-primary transition-colors truncate">
                app-cvifypro.vercel.app/p/umairansari92
              </span>
              <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
            </a>
          </div>

          {/* Profile content simulation */}
          <div className="bg-slate-950 p-12 md:p-16 grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Profile */}
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/20 text-3xl font-black text-primary">
                  UA
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white">Umair Ansari</h3>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-3">
                {[100, 85, 70].map((w, i) => (
                  <div key={i} className="h-2 bg-slate-800 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "TypeScript", "AWS"].map(tag => (
                  <span key={tag} className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={LIVE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all group"
              >
                View Full Live Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Analytics HUD */}
            <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] p-10 space-y-8">
              <div className="flex justify-between items-center">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Profile Insights</h4>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Eye className="w-5 h-5 text-primary" />, value: "2.4k", label: "Profile Views" },
                  { icon: <Users className="w-5 h-5 text-success" />, value: "842", label: "Recruiter Visits" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    {stat.icon}
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-slate-400">Authority Score: Top 1% in sector</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below preview */}
        <div className="mt-10 text-center">
          <a
            href={LIVE_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-black hover:underline underline-offset-4 text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Open the live profile → app-cvifypro.vercel.app/p/umairansari92
          </a>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mt-3">
            This is a real, live CVify profile — not a mockup.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProfileShowcase;
