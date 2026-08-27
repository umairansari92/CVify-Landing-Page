"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, Monitor, Code, Target, MessageSquare, BarChart3, Check } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const tabs = [
  { id: "resume", label: "Resume Studio" },
  { id: "ats", label: "ATS Scan" },
  { id: "portfolio", label: "Live Portfolio" },
  { id: "interview", label: "AI Interview" },
  { id: "analytics", label: "Analytics HUD" }
];

const atsSteps = [
  "Uploading Resume...",
  "Reading Experience...",
  "Matching Keywords...",
  "Calculating ATS Score..."
];

const keywords = ["React", "Node.js", "AWS", "TypeScript"];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("resume");
  const [atsStage, setAtsStage] = useState(0);
  const [atsScore, setAtsScore] = useState(32);
  const [showKeywords, setShowKeywords] = useState(false);

  // ATS AI Workflow simulation runner
  useEffect(() => {
    if (activeTab !== "ats") {
      setAtsStage(0);
      setAtsScore(32);
      setShowKeywords(false);
      return;
    }

    let interval: NodeJS.Timeout;
    const stepDuration = 700; // ms per step

    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setAtsStage((prev) => {
          if (prev < atsSteps.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            // Count up score to 91
            let current = 32;
            const scoreInterval = setInterval(() => {
              current += 3;
              if (current >= 91) {
                setAtsScore(91);
                clearInterval(scoreInterval);
                setShowKeywords(true);
              } else {
                setAtsScore(current);
              }
            }, 30);
            return prev;
          }
        });
      }, stepDuration);
    }, 400);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [activeTab]);

  return (
    <section className="relative pt-28 sm:pt-44 pb-16 sm:pb-32 px-4 sm:px-6 overflow-hidden min-h-screen flex flex-col justify-center bg-hero-glow">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -45, 0],
            rotate: [0, 4, 0],
            scale: [1, 1.04, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[70px] sm:blur-[120px] opacity-35"
        />
        <motion.div
          animate={{
            y: [0, 45, 0],
            rotate: [0, -6, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-20 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-accent/10 rounded-full blur-[80px] sm:blur-[140px] opacity-25"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-primary animate-pulse" />
              <span className="text-slate-800 dark:text-slate-300 text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                AI Career Operating System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[0.95] tracking-tight text-slate-900 dark:text-white font-outfit uppercase break-words"
            >
              Everything You Need to Get Hired. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 animate-shimmer bg-[length:200%_auto]">
                Powered by AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 prose-block font-medium leading-relaxed"
            >
              One intelligent platform to build, optimize, and launch your career — powered by AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={`${APP_URL}/signup`}
                  className="group relative bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-sm sm:text-lg font-black shadow-lg sm:shadow-2xl shadow-emerald-500/30 transition-all hover:scale-[1.02] sm:hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Start Free <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#career-journey"
                  className="text-slate-800 dark:text-white/80 hover:text-slate-950 dark:hover:text-white px-5 sm:px-8 py-3.5 sm:py-5 rounded-2xl text-sm sm:text-lg font-black transition-all border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-center bg-white dark:bg-transparent shadow-sm dark:shadow-none"
                >
                  Explore System
                </a>
              </div>

              {/* Trust Badges - Stack cleanly on mobile, wrap on tablet/desktop */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 lg:gap-6 text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs font-black uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" /> 100 Free Diamonds
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" /> Portfolio Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" /> No Credit Card Required
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Storytelling Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 w-full min-w-0"
          >
            <div className="p-3 sm:p-6 rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl relative space-y-3 sm:space-y-6">
              {/* Tabs controls inside visual box - Horizontal scroll with snap */}
              <div className="flex overflow-x-auto gap-1.5 sm:gap-2 pb-2.5 sm:pb-3 border-b border-slate-200 dark:border-white/5 scrollbar-none snap-x">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 snap-start ${
                      activeTab === tab.id
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Viewport content */}
              <div className="h-[280px] sm:h-[320px] relative overflow-hidden flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 p-2 sm:p-4">
                <AnimatePresence mode="wait">
                  {activeTab === "resume" && (
                    <motion.div
                      key="resume"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10"
                    >
                      {/* Real dashboard screenshot */}
                      <img
                        src="/demos/dashboard-command-center.png"
                        alt="CVifyPro Career OS Dashboard — Command Center"
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                      {/* Subtle bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      {/* Live badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Career OS · Live
                      </div>
                      {/* 99% badge top right */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-white/80 dark:bg-transparent">
                        99% Job-Ready
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "ats" && (
                    <motion.div
                      key="ats"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full flex flex-col justify-between text-left space-y-4 p-2 sm:p-4"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span>ATS Hybrid Scanner v4.0</span>
                        <Target className="w-3.5 h-3.5 text-emerald-500" />
                      </div>

                      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        {/* Live Workflow Status */}
                        <div className="w-full max-w-sm space-y-2">
                          <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              {atsSteps[atsStage]}
                            </span>
                            <span className="text-emerald-600 dark:text-emerald-400">{atsScore}%</span>
                          </div>

                          <div className="h-2.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/5">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                              animate={{ width: `${atsScore}%` }}
                              transition={{ ease: "easeOut" }}
                            />
                          </div>
                        </div>

                        {/* Keyword Chips Fade In */}
                        <AnimatePresence>
                          {showKeywords && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-3 text-center"
                            >
                              <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                                <Check className="w-3 h-3" /> 91% Match — Aligned to target JD
                              </p>
                              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
                                {keywords.map((kw, i) => (
                                  <motion.span
                                    key={kw}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-[9px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 px-2.5 py-1 rounded-lg"
                                  >
                                    + {kw}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="h-1 bg-slate-200 dark:bg-slate-900 rounded-full w-full overflow-hidden" />
                    </motion.div>
                  )}

                  {activeTab === "portfolio" && (
                    <motion.div
                      key="portfolio"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10"
                    >
                      <img
                        src="/demos/apex-sarahj-hero.png"
                        alt="CVifyPro APEX Portfolio — Sarah Jenkins"
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        APEX Theme · Live
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "interview" && (
                    <motion.div
                      key="interview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full flex flex-col justify-between text-left space-y-3 p-2 sm:p-4"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span>AI Behavioral Screenings</span>
                        <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <div className="flex-1 space-y-3 pt-2">
                        <div className="bg-slate-100 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                          <span className="font-black text-emerald-600 dark:text-emerald-400">Question:</span> "How do you handle Redis cache keys invalidation?"
                        </div>
                        <div className="bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20 text-xs text-slate-800 dark:text-slate-200">
                          <span className="font-black text-emerald-600 dark:text-emerald-400">Answer:</span> "By mapping key patterns using binary event indicators."
                        </div>
                      </div>
                      <div className="h-1 bg-slate-200 dark:bg-slate-900 rounded-full w-full overflow-hidden" />
                    </motion.div>
                  )}

                  {activeTab === "analytics" && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full flex flex-col justify-between text-left space-y-4 p-2 sm:p-4"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span>Candidate Analytics HUD</span>
                        <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-left">
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Views</p>
                          <p className="text-xl font-black text-slate-900 dark:text-white font-outfit">2.4k</p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-left">
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Downloads</p>
                          <p className="text-xl font-black text-slate-900 dark:text-white font-outfit">842</p>
                        </div>
                      </div>
                      <div className="h-1 bg-slate-200 dark:bg-slate-900 rounded-full w-full overflow-hidden" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
