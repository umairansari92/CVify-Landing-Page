"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const timelineRows = [
  {
    without: { title: "Apply Blindly", desc: "Sending raw resumes into black-box application portals." },
    withCvify: { title: "AI Resume Audit", desc: "Gemini audits content against industry standards before submission." }
  },
  {
    without: { title: "ATS Silently Rejects", desc: "75% of applications fail keyword & formatting checks instantly." },
    withCvify: { title: "ATS Match Reaches 91%", desc: "Keywords, action verbs, and layout gaps automatically calibrated." }
  },
  {
    without: { title: "No Human Sees It", desc: "Recruiters never open applicant profiles scoring below 80%." },
    withCvify: { title: "Recruiter Opens Profile", desc: "High ATS score guarantees top-tier candidate card placement." }
  },
  {
    without: { title: "3 Weeks of Silence", desc: "Endless waiting with no feedback or status tracking." },
    withCvify: { title: "Interview Scheduled", desc: "Direct outreach from hiring managers wanting to talk." }
  },
  {
    without: { title: "Ghosted", desc: "Another application lost in the recruiter void." },
    withCvify: { title: "Offer Received", desc: "Land the job with negotiated market-rate compensation." }
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest">
            The Harsh Reality
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Stop Sending Resumes Into <span className="text-rose-500">The Void.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg prose-block mx-auto">
            Traditional job hunting is broken. Compare the outdated apply-and-pray method against the CVify Pro AI Operating System.
          </p>
        </div>

        {/* Contrast Table Container */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column: Without CVify */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 font-black uppercase text-xs tracking-widest">
              <span>Without CVify Pro</span>
              <XCircle className="w-5 h-5" />
            </div>

            <div className="space-y-3">
              {timelineRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-rose-500/20 text-left space-y-1 hover:border-rose-500/40 shadow-sm dark:shadow-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-rose-500/70">0{idx + 1}</span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-200 uppercase tracking-tight">{row.without.title}</h4>
                  </div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 pl-7 leading-relaxed">{row.without.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: With CVify */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black uppercase text-xs tracking-widest">
              <span>With CVify Pro</span>
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="space-y-3">
              {timelineRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-emerald-500/30 text-left space-y-1 hover:border-emerald-500/50 shadow-sm dark:shadow-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400">0{idx + 1}</span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">{row.withCvify.title}</h4>
                  </div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">{row.withCvify.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-4 sm:pt-6">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base font-black shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
          >
            Fix Your Resume Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
