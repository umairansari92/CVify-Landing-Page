"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const kit = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Tailored Resume",
    desc: "Rewritten bullet-by-bullet for that specific job. Keywords matched, formatting clean, ATS-ready.",
    tags: ["ATS Optimized", "Job-Specific", "One Click"],
    color: "text-primary",
    glow: "shadow-primary/20"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Matching Cover Letter",
    desc: "AI generates a cover letter that bridges your experience to this exact role — in your tone.",
    tags: ["3 Tones", "Auto-Generated", "Edit Freely"],
    color: "text-violet-400",
    glow: "shadow-violet-400/20"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Live Profile Page",
    desc: "A shareable URL that shows recruiters exactly who you are — with real project proof and GitHub stats.",
    tags: ["SEO Indexed", "Live & Editable", "Recruiter HUD"],
    color: "text-emerald-400",
    glow: "shadow-emerald-400/20"
  }
];

const ApplicationKit = () => (
  <section id="application-kit" className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6 text-success text-[10px] font-black uppercase tracking-widest">
          <CheckCircle2 className="w-3 h-3" /> Complete Application Bundle
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9] uppercase italic">
          Everything You <br /><span className="text-success">Need to Apply.</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          One profile. One click. Three outputs. Resume + Cover Letter + Live Profile — generated for every job you apply to.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 w-full">
        {kit.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card p-12 rounded-[3.5rem] border-white/5 hover:border-white/10 transition-all group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col h-full space-y-8">
              <div className={`w-16 h-16 rounded-[1.5rem] bg-slate-900 border border-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xl ${item.glow}`}>
                {item.icon}
              </div>

              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {item.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-black text-slate-500 uppercase tracking-widest bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Power CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col sm:flex-row items-center gap-6 p-10 glass-card rounded-[3rem] border-white/5 w-full max-w-3xl"
      >
        <div className="flex-1 space-y-2">
          <p className="text-2xl font-black text-white italic">
            "Stop sending the same resume everywhere. Start sending the right one."
          </p>
          <p className="text-slate-500 text-sm font-bold italic">Generated instantly for every job role you target.</p>
        </div>
        <a
          href={`${APP_URL}/signup`}
          className="group flex-shrink-0 bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3"
        >
          Check My Resume Score <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ApplicationKit;
