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
    <section id="ai-rep" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
            AI Candidate Agent
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            AI Representative.
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Recruiters query your personal AI representative directly on your live portfolio. The agent replies with concrete verified database and GitHub proofs.
          </p>
        </div>

        {/* Chat Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Custom queries */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight font-outfit">Recruiter Queries</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Instead of reading long resume documents, recruiters can interview your profile agent. Click a query below to see how the agent responds.
            </p>

            <div className="space-y-3">
              {QAData.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQA(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs font-bold transition-all ${
                    idx === activeQA
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-slate-900 border-white/5 text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Chat dialogue interface */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-[3.5rem] border-white/5 bg-slate-950 p-8 md:p-12 space-y-6 shadow-premium relative">
              {/* Chat header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/20 flex items-center justify-center text-accent">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-white">Umair's Representative</p>
                    <p className="text-[9px] font-bold text-success uppercase tracking-widest">Active Proof Engine</p>
                  </div>
                </div>
                <Terminal className="w-5 h-5 text-slate-600" />
              </div>

              {/* Message loop simulation */}
              <div className="h-60 flex flex-col justify-between overflow-y-auto space-y-4 pt-2">
                <div className="space-y-4">
                  {/* Recruiter side */}
                  <div className="flex justify-end">
                    <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl text-xs text-slate-300 max-w-sm text-right">
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
                      <div className="bg-accent/5 border border-accent/20 p-4 rounded-2xl text-xs text-white max-w-md text-left leading-relaxed">
                        {QAData[activeQA].answer}
                      </div>

                      {/* Verified proof badges */}
                      <div className="flex flex-wrap gap-2 pl-2">
                        {QAData[activeQA].proofs.map((proof, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono font-black text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md"
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
              <div className="flex gap-3 bg-slate-900 border border-white/5 p-3 rounded-2xl items-center">
                <MessageSquare className="w-4 h-4 text-slate-600 ml-2" />
                <input
                  type="text"
                  placeholder="Ask representative something..."
                  disabled
                  className="flex-1 bg-transparent text-xs text-slate-400 focus:outline-none select-none pointer-events-none cursor-default"
                />
                <button disabled className="p-2 bg-slate-800 rounded-xl text-slate-600">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 text-center">
                <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 text-xs font-black text-accent hover:text-white transition-colors">
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
