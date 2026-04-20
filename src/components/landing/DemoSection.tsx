"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Sparkles, CheckCircle2, ArrowRight, Cpu, BarChart3 } from "lucide-react";

const APP_URL = "https://app-cvifypro.vercel.app";

const sampleAnalysis = {
  score: 34,
  issues: [
    { type: "error", text: "Missing: 'Agile', 'Cloud Architecture', 'CI/CD'" },
    { type: "error", text: "Weak summary — no quantifiable achievements" },
    { type: "warning", text: "Poor keyword density (8% vs recommended 18%)" },
  ],
  fixes: [
    "Added 14 high-impact ATS keywords",
    "Rewrote summary with measurable results",
    "Optimized keyword density to 19%",
  ]
};

const DemoSection = () => {
  const [stage, setStage] = useState<"idle" | "analyzing" | "done">("idle");

  const runDemo = () => {
    setStage("analyzing");
    setTimeout(() => setStage("done"), 2500);
  };

  return (
    <section id="demo" className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 text-accent text-[10px] font-black uppercase tracking-widest">
            <PlayCircle className="w-4 h-4" /> Interactive Demo
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9] uppercase italic">
            See CVify <br /><span className="text-accent">in Action.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Not sure yet? Try a sample resume and see how CVify improves it instantly.
          </p>
        </motion.div>

        <div className="w-full max-w-4xl glass-card rounded-[4rem] border-white/5 p-8 md:p-14 space-y-10">
          
          {/* Sample Resume Input */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sample Resume</p>
              <span className="text-[9px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">Demo Mode</span>
            </div>
            <div className="relative bg-slate-950/60 border border-white/5 rounded-3xl p-8 space-y-3 overflow-hidden">
              {/* Sample resume content */}
              <div className="space-y-2">
                <div className="h-4 w-40 bg-white/20 rounded font-black" />
                <div className="h-2 w-32 bg-white/10 rounded" />
              </div>
              <div className="pt-4 space-y-2">
                <div className="h-2 w-full bg-slate-800 rounded" />
                <div className="h-2 w-4/5 bg-slate-800 rounded" />
                <div className="h-2 w-3/5 bg-slate-800 rounded" />
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Work Experience</p>
                <div className="h-2 w-full bg-slate-800 rounded" />
                <div className="h-2 w-full bg-slate-800 rounded" />
                <div className="h-2 w-2/3 bg-slate-800 rounded" />
              </div>

              {/* Scan animation overlay */}
              <AnimatePresence>
                {stage === "analyzing" && (
                  <motion.div
                    initial={{ top: "-10%", opacity: 1 }}
                    animate={{ top: "110%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow"
                    style={{ top: "-10%" }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Button */}
          {stage === "idle" && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={runDemo}
              className="w-full group relative bg-primary hover:bg-blue-600 text-white py-8 rounded-3xl text-xl font-black shadow-2xl shadow-primary/30 transition-all overflow-hidden flex items-center justify-center gap-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Cpu className="w-6 h-6" />
              Analyze a Sample Resume
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}

          {stage === "analyzing" && (
            <div className="w-full py-8 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center gap-4">
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-lg font-black text-primary uppercase tracking-widest">Analyzing... detecting issues...</span>
            </div>
          )}

          {/* Results */}
          <AnimatePresence>
            {stage === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Score indicator */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 p-8 rounded-3xl bg-error/10 border border-error/20 text-center space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-error">Issues Found ({sampleAnalysis.issues.length})</p>
                    <div className="space-y-4 pt-4 text-left">
                      {sampleAnalysis.issues.map((issue, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-error mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-slate-400 font-bold">{issue.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-white/10 font-black text-4xl hidden sm:flex">→</div>

                  <div className="flex-1 p-8 rounded-3xl bg-success/10 border border-success/20 text-center space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-success">AI Improvements Applied</p>
                    <div className="space-y-4 pt-4 text-left">
                      {sampleAnalysis.fixes.map((fix, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300 font-bold">{fix}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score improvement animation */}
                <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-950 border border-white/5">
                  <BarChart3 className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-black text-white mb-3">
                      <span>ATS Score</span>
                      <span className="text-success">+57% Improvement</span>
                    </div>
                    <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "34%" }}
                        animate={{ width: "91%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-slate-600 mt-2">
                      <span>BEFORE: 34%</span>
                      <span>AFTER: 91%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`${APP_URL}/signup`} className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-center shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Optimize My Real Resume
                  </a>
                  <button onClick={() => setStage("idle")} className="flex-1 bg-white/5 border border-white/5 text-slate-400 py-5 rounded-2xl font-black text-center hover:bg-white/10 transition-all">
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
          Takes less than 30 seconds · No signup required · Used by job seekers worldwide
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
