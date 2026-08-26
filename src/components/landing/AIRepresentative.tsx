"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquare, Terminal, Send, ArrowRight, UserCheck } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const QAData = [
  {
    question: "Does candidate have production React experience?",
    answer: "Yes. Injected portfolio logs show 4 production-grade projects. Key references include a custom PDF builder engine and a responsive Redux-state theme switcher dashboard.",
    proofs: ["React 19", "Redux Toolkit", "Client/src/profile/engine"]
  },
  {
    question: "What is their experience with cloud architectures?",
    answer: "Candidate has deployed scalable server configurations on AWS, including binary hash tracking algorithms (SHA-256) to index user files and optimize cache efficiency.",
    proofs: ["AWS EC2", "Redis Cache", "SHA-256 Hashing"]
  },
  {
    question: "Are their credentials and education verified?",
    answer: "Verified database record matches: BS Computer Science degree from FAST NUCES (2018-2022) with 3 professional certifications.",
    proofs: ["FAST NUCES BS", "AWS Certified Developer"]
  }
];

const AIRepresentative = () => {
  const [activeQA, setActiveQA] = useState(0);

  return (
    <section id="ai-rep" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest">
            AI Candidate Agent
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            AI Representative.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Recruiters query your personal AI representative directly on your live portfolio. The agent replies with concrete verified database and GitHub proofs.
          </p>
        </div>

        {/* Chat Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Custom queries */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-outfit">Recruiter Queries</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Instead of reading long resume documents, recruiters can interview your profile agent. Click a query below to see how the agent responds.
            </p>

            <div className="space-y-2.5 sm:space-y-3">
              {QAData.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQA(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-xs font-bold transition-all ${
                    idx === activeQA
                      ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
                  }`}
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Chat dialogue interface */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 shadow-xl dark:shadow-none relative">
              {/* Chat header */}
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-900 dark:text-white">Umair&apos;s Representative</p>
                    <p className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Active Proof Engine</p>
                  </div>
                </div>
                <Terminal className="w-5 h-5 text-slate-400 dark:text-slate-600" />
              </div>

              {/* Message loop simulation */}
              <div className="h-60 flex flex-col justify-between overflow-y-auto space-y-4 pt-2">
                <div className="space-y-4">
                  {/* Recruiter side */}
                  <div className="flex justify-end">
                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-3.5 sm:p-4 rounded-2xl text-xs text-slate-700 dark:text-slate-300 max-w-xs sm:max-w-sm text-right">
                      {QAData[activeQA].question}
                    </div>
                  </div>

                  {/* AI Agent side */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeQA}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start flex-col space-y-3"
                    >
                      <div className="bg-cyan-500/10 border border-cyan-500/20 p-3.5 sm:p-4 rounded-2xl text-xs text-slate-900 dark:text-white max-w-md text-left leading-relaxed">
                        {QAData[activeQA].answer}
                      </div>

                      {/* Verified proof badges */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pl-2">
                        {QAData[activeQA].proofs.map((proof, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono font-black text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md"
                          >
                            ✓ {proof}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mock input bar */}
              <div className="flex gap-2 sm:gap-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-2.5 sm:p-3 rounded-2xl items-center">
                <MessageSquare className="w-4 h-4 text-slate-400 dark:text-slate-600 ml-1 sm:ml-2" />
                <input
                  type="text"
                  placeholder="Ask representative something..."
                  disabled
                  className="flex-1 bg-transparent text-xs text-slate-500 dark:text-slate-400 focus:outline-none select-none pointer-events-none cursor-default"
                />
                <button disabled className="p-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-600">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 text-center">
                <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 text-xs font-black text-cyan-600 dark:text-cyan-400 hover:underline transition-colors">
                  Build Your AI Representative Agent <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRepresentative;
