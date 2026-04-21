"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileUp, Briefcase, Sparkles, Package, Rocket, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: <FileUp className="w-7 h-7" />,
    step: "01",
    title: "Upload Your Resume",
    desc: "Start with your existing CV or build a master profile. Takes less than 60 seconds.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    text: "text-blue-400"
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    step: "02",
    title: "Add the Target Job",
    desc: "Paste the job description. CVify reads the role, company, and exact requirements the recruiter wants.",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    text: "text-violet-400"
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    step: "03",
    title: "AI Rewrites for That Role",
    desc: "Gemini AI rewrites your resume content — bullets, summary, keywords — specifically optimized for this job. You approve every change.",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    text: "text-pink-400"
  },
  {
    icon: <Package className="w-7 h-7" />,
    step: "04",
    title: "Generate Full Application Kit",
    desc: "In one click: a tailored resume, a matching cover letter, and a shareable profile — ready to send.",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    text: "text-amber-400"
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    step: "05",
    title: "Apply with Confidence",
    desc: "Your complete application passes ATS filters and impresses the human reviewer. No more guessing.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    text: "text-emerald-400"
  }
];

const ApplicationFlow = () => (
  <section id="application-flow" className="py-40 px-6 relative overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary text-[10px] font-black uppercase tracking-widest">
          The Full System
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9] uppercase italic">
          From Resume <br /><span className="text-primary">to Hired.</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          CVify matches your resume to the job and rewrites it to fit — automatically. This is not a tool. It's a complete job application system.
        </p>
      </motion.div>

      {/* Vertical step flow */}
      <div className="max-w-2xl mx-auto space-y-4">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 rounded-[3rem] border ${step.border} bg-gradient-to-br ${step.color} relative overflow-hidden group hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-start gap-6">
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-900/80 border ${step.border} flex items-center justify-center ${step.text} group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${step.text} opacity-60`}>{step.step}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{step.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Arrow connector (not after last) */}
            {i < steps.length - 1 && (
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-white/10" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom differentiator line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <p className="text-2xl font-black text-white italic max-w-2xl mx-auto">
          "Create job-specific resumes from one master profile."
        </p>
        <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em] mt-4">
          This is what separates CVify from every other tool
        </p>
      </motion.div>
    </div>
  </section>
);

export default ApplicationFlow;
