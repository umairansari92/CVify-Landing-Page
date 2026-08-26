"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, Sparkles, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const initialHints = [
  {
    id: "metric",
    text: "Quantify impact in experience section (add metric outputs to bullet 3)",
    scoreWeight: 6,
    checked: false
  },
  {
    id: "verbs",
    text: "Remove passive verbs (change 'responsible for running' to 'orchestrated')",
    scoreWeight: 6,
    checked: false
  },
  {
    id: "keywords",
    text: "Align missing strategic technical keywords ('Cloud Architecture', 'CI/CD')",
    scoreWeight: 6,
    checked: false
  }
];

const ResumeCoach = () => {
  const [hints, setHints] = useState(initialHints);

  const toggleHint = (id: string) => {
    setHints(prev =>
      prev.map(hint => (hint.id === id ? { ...hint, checked: !hint.checked } : hint))
    );
  };

  const baseScore = 74;
  const currentScore = baseScore + hints.reduce((acc, h) => (h.checked ? acc + h.scoreWeight : acc), 0);
  const potentialScore = 92;

  return (
    <section id="ai-coach" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            AI Assistant
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            AI Resume <span className="text-emerald-500">Coach.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Interact with the local dashboard simulation. Check off weak items to audit how the calibrator updates your score metrics.
          </p>
        </div>

        {/* Dashboard Simulator */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Info & instructions */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Interactive HUD
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit uppercase tracking-tight">The Loophole Finder</h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              CVify doesn&apos;t just scan and leave you hanging. Our coach highlights precise loophole boxes. Fix each issue inside your profile editor to see your potential score climb in real time.
            </p>

            <div className="flex gap-3 sm:gap-4 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 items-start shadow-sm dark:shadow-none">
              <HelpCircle className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Click on the coaching checklist checkboxes on the right to simulate making improvements. Watch the dashboard metrics update instantly.
              </p>
            </div>
          </div>

          {/* Right panel: Active dashboard mockup */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8 shadow-xl dark:shadow-none relative">
              {/* Top score details */}
              <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/5">
                <div className="space-y-1 text-left">
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Actual Score</p>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-outfit">{currentScore}%</p>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-white/5" />
                <div className="space-y-1 text-left">
                  <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest leading-none">Potential Target</p>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-outfit">{potentialScore}%</p>
                </div>
              </div>

              {/* Progress gauge animation */}
              <div className="space-y-2 text-left">
                <div className="flex justify-between text-xs font-black text-slate-600 dark:text-slate-400">
                  <span>Progress to Goal</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> 
                    {currentScore === potentialScore ? "Goal Achieved" : `+${potentialScore - currentScore}% needed`}
                  </span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-white/5 relative">
                  <motion.div
                    initial={{ width: "74%" }}
                    animate={{ width: `${(currentScore / potentialScore) * 100}%` }}
                    transition={{ type: "spring", stiffness: 60 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>

              {/* Dynamic Checklist */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest text-left">Loophole Checks Checklist</p>
                <div className="space-y-2.5 sm:space-y-3">
                  {hints.map((hint) => (
                    <button
                      key={hint.id}
                      onClick={() => toggleHint(hint.id)}
                      className={`w-full flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border text-left transition-all ${
                        hint.checked
                          ? "bg-emerald-500/10 border-emerald-500/30"
                          : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5 text-emerald-500">
                        {hint.checked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400 dark:text-slate-600" />}
                      </div>
                      <span className={`text-xs font-medium leading-relaxed ${hint.checked ? "text-slate-500 dark:text-slate-400 line-through opacity-70" : "text-slate-700 dark:text-slate-300"}`}>
                        {hint.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-2xl font-black text-sm justify-center shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]">
                  Try AI Coach HUD <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCoach;
