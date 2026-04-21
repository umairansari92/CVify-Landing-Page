"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, AlertCircle } from "lucide-react";

import { APP_URL } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-20 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/5 backdrop-blur-md shadow-inner"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-slate-300 text-xs font-black tracking-widest uppercase opacity-80">AI Job Application System</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white font-outfit uppercase"
            >
              Get More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent animate-shimmer bg-[length:200%_auto]">Job-Winning</span> <br />
              Applications
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed"
            >
              Upload once. CVify analyzes, rewrites, and generates job-specific resumes, cover letters, and recruiter-ready profiles.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href={`${APP_URL}/signup`} className="group relative bg-primary hover:bg-blue-600 text-white px-10 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:-translate-y-1 flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                   Check My Resume Score <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#demo" className="text-white/60 hover:text-white px-10 py-6 rounded-3xl text-xl font-black transition-all flex items-center gap-3 group underline decoration-white/20 underline-offset-8 decoration-2 hover:decoration-primary">
                  Analyze Sample Resume
                </a>
              </div>
              
              <div className="flex items-center gap-2 px-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest italic">No signup required. Get your ATS score instantly.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Before vs After) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="glass-card p-4 rounded-[4rem] border-white/5 shadow-premium relative overflow-hidden group">
               {/* Grid line background */}
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5 z-0" />
               <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/5 z-0" />

               <div className="relative z-10 grid grid-cols-2 gap-4 h-[500px]">
                  {/* Before */}
                  <div className="bg-slate-950/50 rounded-[3rem] p-8 border border-white/5 flex flex-col justify-between group-hover:translate-y-2 transition-transform duration-700">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-error flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Before
                        </span>
                        <span className="text-xl font-black text-error">32%</span>
                      </div>
                      <div className="space-y-2 opacity-50">
                        <div className="h-2 w-full bg-slate-800 rounded" />
                        <div className="h-2 w-3/4 bg-slate-800 rounded" />
                        <div className="h-2 w-1/2 bg-slate-800 rounded" />
                      </div>
                      <div className="pt-6 space-y-3">
                         <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Issues Found</p>
                         <ul className="space-y-2">
                            {["Missing keywords", "Weak summary", "Poor format"].map((txt, i) => (
                              <li key={i} className="text-[10px] font-black text-slate-600 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-error" /> {txt}
                              </li>
                            ))}
                         </ul>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-primary/5 rounded-[3rem] p-8 border border-primary/20 flex flex-col justify-between shadow-glow group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-success flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> After
                        </span>
                        <motion.span 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl font-black text-white"
                        >
                          91%
                        </motion.span>
                      </div>
                      <div className="space-y-2 relative">
                        <div className="h-2 w-full bg-primary/40 rounded shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-pulse" />
                        <div className="h-2 w-5/6 bg-primary/20 rounded" />
                        <div className="h-2 w-2/3 bg-primary/20 rounded" />
                        
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                      </div>
                      <div className="pt-6 space-y-3">
                         <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Optimized Results</p>
                         <ul className="space-y-2">
                            {["Optimized Keywords", "Strong Summary", "ATS Ready"].map((txt, i) => (
                              <li key={i} className="text-[10px] font-black text-white flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-success" /> {txt}
                              </li>
                            ))}
                         </ul>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Central "Improvement Badge" */}
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 1, type: "spring" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center min-w-[120px] aspect-square border-8 border-slate-950"
               >
                 <span className="text-2xl font-black">+65%</span>
                 <span className="text-[8px] font-black uppercase tracking-tighter leading-tight text-center">Score <br />Increase</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
