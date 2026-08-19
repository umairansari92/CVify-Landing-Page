"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  FileText, 
  Target, 
  Globe, 
  Cpu, 
  BookOpen, 
  Layers, 
  Award
} from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";
import { APP_URL, DOCS_URL } from "@/lib/constants";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const appsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (appsRef.current && !appsRef.current.contains(e.target as Node)) {
        setIsAppsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ecosystemApps = [
    {
      title: "Resume Studio & Wizard",
      desc: "6-step creation flow with 100% ATS vector export.",
      icon: FileText,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      href: `${APP_URL}/resume-builder`
    },
    {
      title: "ATS Intelligence Scanner",
      desc: "7-stage intake engine & recruiter eye-tracking simulation.",
      icon: Target,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      href: `${APP_URL}/ats`
    },
    {
      title: "Portfolio Themes Engine",
      desc: "Instant live web portfolio (NOIR, CYBERNEON, APEX, AURA).",
      icon: Globe,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      href: "#live-portfolio"
    },
    {
      title: "AI Cover Letter Studio",
      desc: "Tailored executive cover letters matched to any JD.",
      icon: Sparkles,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      href: `${APP_URL}/cover-letter`
    },
    {
      title: "Job Description Matcher",
      desc: "Scrape job postings and highlight missing stack keywords.",
      icon: Cpu,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      href: `${APP_URL}/job-matcher`
    },
    {
      title: "Career Roadmap & Copilot",
      desc: "Structured milestone roadmap and AI interview simulation.",
      icon: Layers,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      href: `${APP_URL}/roadmap`
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white/80 dark:bg-slate-950/85 backdrop-blur-2xl rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl transition-all">
            
            {/* Logo & App Switcher */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="/" className="flex items-center group">
                <Image 
                  src="/CVify Logo Dark.jpg" 
                  alt="CVify Pro" 
                  width={130} 
                  height={32} 
                  className="h-8 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                  priority
                />
              </a>

              {/* Ecosystem Apps Flyout Toggle */}
              <div className="relative hidden lg:block" ref={appsRef}>
                <button
                  onClick={() => setIsAppsOpen(!isAppsOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Ecosystem</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isAppsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isAppsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-96 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-2xl z-50 grid grid-cols-1 gap-1.5"
                    >
                      <div className="px-3 py-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">CVify Career Platform</span>
                        <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">v4.0 Live</span>
                      </div>

                      {ecosystemApps.map((app) => {
                        const Icon = app.icon;
                        return (
                          <a
                            key={app.title}
                            href={app.href}
                            onClick={() => setIsAppsOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/5 transition-all group"
                          >
                            <div className={`p-2 rounded-xl border ${app.color} shrink-0 group-hover:scale-105 transition-transform`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5 text-left">
                              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{app.title}</span>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{app.desc}</p>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex items-center gap-1 sm:gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
              <a 
                href={`${APP_URL}/resume-builder`} 
                className="px-3 py-1.5 rounded-xl hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <span>Resume Studio</span>
              </a>

              <a 
                href="#ats-engine" 
                className="px-3 py-1.5 rounded-xl hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Target className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>ATS Scanner</span>
              </a>

              <a 
                href="#live-portfolio" 
                className="px-3 py-1.5 rounded-xl hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                <span>Themes</span>
              </a>

              <a 
                href={`${APP_URL}/templates`} 
                className="px-3 py-1.5 rounded-xl hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Templates</span>
              </a>

              <a 
                href={DOCS_URL} 
                className="px-3 py-1.5 rounded-xl hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                <span>Docs</span>
              </a>
            </div>

            {/* Action Buttons & Theme Switcher */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Sun / Moon Button */}
              <ThemeToggle />

              <a 
                href={`${APP_URL}/login`} 
                className="hidden sm:inline-flex px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all"
              >
                Sign In
              </a>
              
              <a 
                href={`${APP_URL}/signup`} 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Started</span>
              </a>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-white/10 z-[70] p-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-white/10">
                  <Image 
                    src="/CVify Logo Dark.jpg" 
                    alt="CVify" 
                    width={110} 
                    height={28} 
                    className="h-7 w-auto object-contain"
                  />
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <a 
                    href={`${APP_URL}/resume-builder`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white transition-all"
                  >
                    <FileText className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>Resume Studio</span>
                  </a>
                  <a 
                    href="#ats-engine"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white transition-all"
                  >
                    <Target className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span>ATS Scanner</span>
                  </a>
                  <a 
                    href="#live-portfolio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white transition-all"
                  >
                    <Globe className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    <span>Themes Engine</span>
                  </a>
                  <a 
                    href={`${APP_URL}/templates`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white transition-all"
                  >
                    <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    <span>Templates</span>
                  </a>
                  <a 
                    href={DOCS_URL}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span>Documentation</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/10">
                <a 
                  href={`${APP_URL}/login`} 
                  className="w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white text-xs font-bold text-center block transition-all"
                >
                  Sign In
                </a>
                <a 
                  href={`${APP_URL}/signup`} 
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider text-center block shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Get Started Free
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
