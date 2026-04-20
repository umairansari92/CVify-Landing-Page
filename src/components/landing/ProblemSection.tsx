"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Bot, XCircle, Search, ShieldAlert } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Search className="w-8 h-8 text-error" />,
      title: "Missing Keywords",
      description: "If your resume doesn't match the exact skills recruiters look for, the bot will filter it out immediately."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-error" />,
      title: "Poor Formatting",
      description: "Complex layouts, tables, and images confuse ATS parsers, leading to unreadable or missing data."
    },
    {
      icon: <XCircle className="w-8 h-8 text-error" />,
      title: "Weak Content",
      description: "Generic descriptions and fluff fail to quantify your impact, making you invisible to hiring managers."
    }
  ];

  return (
    <section id="problem" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-error/10 border border-error/20">
               <AlertCircle className="w-4 h-4 text-error" />
               <span className="text-error text-[10px] font-black uppercase tracking-widest">The Harsh Reality</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white font-outfit uppercase italic">
                Why Your Resume <br />
                <span className="text-error">Gets Rejected.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Most resumes never reach a human. They are filtered out by ATS systems before a recruiter even sees them.
              </p>
            </div>

            <div className="space-y-10">
              {problems.map((prob, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-error/10 border border-error/20 flex items-center justify-center transition-all group-hover:bg-error group-hover:text-white">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{prob.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-xl font-black text-white italic">
                "If your resume can't pass the bot, it will never reach the recruiter."
              </p>
            </div>
          </motion.div>

          {/* Visual Hook: The "Filtered" Resume */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-20 bg-error/10 blur-[140px] rounded-full opacity-50" />
            <div className="glass-card p-12 rounded-[4rem] border-error/20 bg-slate-950/80 space-y-10 relative overflow-hidden shadow-2xl">
               {/* ATS HUD Simulation */}
               <div className="flex justify-between items-center bg-error/10 p-6 rounded-3xl border border-error/20">
                  <div className="flex items-center gap-4">
                     <Bot className="w-8 h-8 text-error animate-pulse" />
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-error uppercase tracking-widest leading-none">ATS System Status</p>
                        <p className="text-lg font-black text-white">REJECTION DETECTED</p>
                     </div>
                  </div>
                  <div className="h-8 w-8 rounded-full border-4 border-error/20 border-t-error animate-spin" />
               </div>

               {/* Messy Resume Mockup */}
               <div className="space-y-8 relative opacity-40 grayscale group">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3 px-1">
                       <div className="h-6 w-40 bg-slate-800 rounded" />
                       <div className="h-3 w-32 bg-slate-800 rounded" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-800" />
                  </div>
                  <div className="space-y-3">
                     {[1, 2, 3, 4].map(n => <div key={n} className="h-2 w-full bg-slate-800 rounded" />)}
                  </div>
                  {/* Floating labels for issues */}
                  <div className="absolute top-20 -right-4 bg-error text-white px-4 py-2 rounded-xl text-[10px] font-black shadow-xl rotate-12">MISSING: CLOUD ARCHITECTURE</div>
                  <div className="absolute bottom-10 -left-4 bg-error text-white px-4 py-2 rounded-xl text-[10px] font-black shadow-xl -rotate-6">POOR KEYWORD DENSITY</div>

                  {/* The Big Rejection Stamp */}
                  <motion.div 
                    initial={{ scale: 3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                     <div className="border-[12px] border-error text-error text-8xl font-black px-12 py-6 -rotate-12 rounded-[2rem] shadow-2xl backdrop-blur-sm">
                        REJECTED
                     </div>
                  </motion.div>
               </div>
               
               <div className="pt-10 border-t border-white/5 text-center">
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">75% OF RESUMES GET FILTERED HERE</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
