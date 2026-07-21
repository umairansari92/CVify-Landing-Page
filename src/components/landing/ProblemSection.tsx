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
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20 text-error text-[10px] font-black uppercase tracking-widest">
            The Harsh Reality
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Stop Sending Resumes Into <span className="text-error">The Void.</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg prose-block mx-auto">
            Traditional job hunting is broken. Compare the outdated apply-and-pray method against the CVify Pro AI Operating System.
          </p>
        </div>

        {/* Contrast Table Container */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Without CVify */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-error/10 border border-error/20 text-error font-black uppercase text-xs tracking-widest">
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
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-error/20 text-left space-y-1 hover:border-error/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-error/60">0{idx + 1}</span>
                    <h4 className="text-base font-black text-slate-200 uppercase tracking-tight">{row.without.title}</h4>
                  </div>
                  <p className="text-xs font-medium text-slate-500 pl-7">{row.without.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: With CVify */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-success/10 border border-success/20 text-success font-black uppercase text-xs tracking-widest">
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
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-success/30 text-left space-y-1 hover:border-success/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-success/60">0{idx + 1}</span>
                    <h4 className="text-base font-black text-white uppercase tracking-tight">{row.withCvify.title}</h4>
                  </div>
                  <p className="text-xs font-medium text-slate-400 pl-7">{row.withCvify.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-8">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-base font-black shadow-xl shadow-primary/20 transition-all hover:scale-105"
          >
            Fix Your Resume Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
