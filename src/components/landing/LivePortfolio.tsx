"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, Users, BarChart3, ExternalLink, ArrowRight,
  ChevronLeft, ChevronRight, Monitor, Sparkles,
} from "lucide-react";
import { DEMO_PROFILES } from "@/lib/constants";

// Per-persona analytics to keep the panel realistic
const personaStats: Record<string, { views: string; recruiters: string; authority: string }> = {
  umairansari92: { views: "4,218",  recruiters: "1,102", authority: "Top 1% Full Stack" },
  sarahj:        { views: "2,843",  recruiters: "671",   authority: "Top 3% Frontend"   },
  marcusw:       { views: "3,591",  recruiters: "894",   authority: "Top 2% Data/ML"    },
  aishap:        { views: "1,977",  recruiters: "543",   authority: "Top 5% AI Research" },
};

const LivePortfolio = () => {
  const [activeProfileIdx, setActiveProfileIdx] = useState(0);

  const activeProfile = DEMO_PROFILES[activeProfileIdx];
  const stats         = personaStats[activeProfile.username] || personaStats["umairansari92"];
  const hasScreenshot = !!activeProfile.screenshot;

  const prev = () => setActiveProfileIdx(i => (i - 1 + DEMO_PROFILES.length) % DEMO_PROFILES.length);
  const next = () => setActiveProfileIdx(i => (i + 1) % DEMO_PROFILES.length);

  return (
    <section id="live-portfolio" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* ── Header ── */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest">
            <Monitor className="w-3.5 h-3.5" /> Live Deployment Layer
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Real Profiles. <span className="text-purple-600 dark:text-purple-400">Live Right Now.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            These aren&apos;t mockups. Switch between real CVifyPro portfolio profiles — deployed, themed, and tracking recruiters in real time.
          </p>
        </div>

        {/* ── Profile Selector Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mr-1 sm:mr-2">
            Live Demos →
          </span>
          {DEMO_PROFILES.map((profile, idx) => (
            <button
              key={profile.username}
              onClick={() => setActiveProfileIdx(idx)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                idx === activeProfileIdx
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/15 hover:text-slate-950 dark:hover:text-white"
              }`}
            >
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-black"
                style={{
                  backgroundColor: idx === activeProfileIdx ? "rgba(255,255,255,0.25)" : "#e2e8f0",
                  color: idx === activeProfileIdx ? "#fff" : (profile as any).themeAccent || "#0f172a",
                }}
              >
                {profile.initials}
              </span>
              {profile.name.split(" ")[0]}
              {(profile as any).theme && (
                <span className="hidden sm:inline text-[8px] opacity-75 normal-case font-medium">
                  ({(profile as any).theme})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Browser Viewport ── */}
        <div className="w-full max-w-5xl mx-auto rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 shadow-xl dark:shadow-none overflow-hidden">
          {/* Browser chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 py-3.5 sm:py-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/70" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/70" />
            </div>

            {/* Address bar */}
            <a
              href={activeProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 hover:border-purple-500/40 transition-all text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 max-w-xs truncate"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="truncate">app-cvifypro.vercel.app/p/{activeProfile.username}</span>
              <ExternalLink className="w-3 h-3 ml-1 flex-shrink-0" />
            </a>

            {/* Theme badge */}
            <div
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest"
              style={{
                borderColor: `${(activeProfile as any).themeAccent || "#6366f1"}40`,
                color: (activeProfile as any).themeAccent || "#6366f1",
                backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}10`,
              }}
            >
              <Sparkles className="w-3 h-3" />
              {(activeProfile as any).theme || "Custom"} Theme
            </div>
          </div>

          {/* Profile content area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfileIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid lg:grid-cols-5 gap-0 min-h-[380px] sm:min-h-[420px]"
            >
              {/* Left: Real screenshot OR abstract fallback */}
              <div className="lg:col-span-3 relative overflow-hidden bg-slate-950">
                {hasScreenshot ? (
                  <div className="relative w-full h-full min-h-[320px] sm:min-h-[360px]">
                    {/* Actual portfolio screenshot */}
                    <img
                      src={(activeProfile as any).screenshot}
                      alt={`${activeProfile.name} CVifyPro Portfolio — ${(activeProfile as any).theme} theme`}
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                    {/* Subtle gradient overlay at bottom for seamless blend */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
                    {/* Live badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live Portfolio
                    </div>
                    {/* View button overlay */}
                    <a
                      href={activeProfile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105"
                    >
                      Open Live Profile <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  /* Abstract animated fallback for profiles without screenshot */
                  <div 
                    className="w-full h-full min-h-[340px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden"
                    style={{
                      backgroundColor: (activeProfile as any).theme === "NOIR" ? "#090A0F"
                        : (activeProfile as any).theme === "CYBERNEON" ? "#050B0A"
                        : (activeProfile as any).theme === "APEX" ? "#0B1120"
                        : (activeProfile as any).theme === "AURA DARK" ? "#0D0B14"
                        : (activeProfile as any).theme === "ORIENTAL LUXE" ? "#12100E"
                        : "#0f172a"
                    }}
                  >
                    {/* Simulated nav */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black text-white"
                          style={{ backgroundColor: `${(activeProfile as any).themeAccent || "#10b981"}40` }}
                        >
                          {activeProfile.initials}
                        </div>
                        <span className="text-xs font-mono font-bold text-white/90">
                          {activeProfile.username}.cvify
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-bold text-white/60">
                        <span>Experience</span>
                        <span>Showcase</span>
                        <span>Dossier</span>
                      </div>
                    </div>

                    {/* Simulated hero */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 py-6 sm:py-8 gap-4 sm:gap-6">
                      <div className="space-y-2 sm:space-y-3 flex-1 text-left">
                        <span 
                          className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border inline-block"
                          style={{
                            color: (activeProfile as any).themeAccent || "#10b981",
                            borderColor: `${(activeProfile as any).themeAccent || "#10b981"}40`,
                            backgroundColor: `${(activeProfile as any).themeAccent || "#10b981"}10`
                          }}
                        >
                          {(activeProfile as any).theme} THEME ENGINE
                        </span>
                        
                        <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                          {activeProfile.name}
                        </h4>
                        
                        <p 
                          className="text-xs font-bold font-mono leading-relaxed max-w-sm"
                          style={{ color: (activeProfile as any).themeAccent || "#10b981" }}
                        >
                          {activeProfile.role}
                        </p>
                        
                        <div className="flex gap-2 pt-2">
                          <a
                            href={activeProfile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white shadow-lg transition-all hover:scale-105 inline-flex items-center gap-1.5"
                            style={{ backgroundColor: (activeProfile as any).themeAccent || "#10b981" }}
                          >
                            <span>Open Profile</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div
                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl border-2 flex-shrink-0 flex items-center justify-center font-black text-xl sm:text-2xl shadow-2xl"
                        style={{
                          borderColor: `${(activeProfile as any).themeAccent || "#10b981"}70`,
                          backgroundColor: `${(activeProfile as any).themeAccent || "#10b981"}15`,
                          color: (activeProfile as any).themeAccent || "#10b981",
                          boxShadow: `0 0 35px ${(activeProfile as any).themeAccent || "#10b981"}30`,
                        }}
                      >
                        {activeProfile.initials}
                      </div>
                    </div>

                    {/* Live telemetry badge */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[9px] font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Telemetry v4.0</span>
                      </div>
                      <span className="uppercase font-bold text-white/70">{(activeProfile as any).theme}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Analytics panel */}
              <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/5 p-6 sm:p-8 flex flex-col justify-between gap-6 text-left">
                {/* Profile header */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center font-black text-sm border"
                      style={{
                        borderColor: `${(activeProfile as any).themeAccent || "#6366f1"}50`,
                        backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}15`,
                        color: (activeProfile as any).themeAccent || "#6366f1",
                      }}
                    >
                      {activeProfile.initials}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 dark:text-white">{activeProfile.name}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{activeProfile.role}</p>
                    </div>
                  </div>

                  <div
                    className="h-px w-full"
                    style={{ backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}20` }}
                  />

                  {/* Real-time indicator */}
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Traffic Analytics · Real-Time
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 p-3.5 sm:p-4 rounded-2xl space-y-1 text-left shadow-sm dark:shadow-none">
                    <Eye className="w-4 h-4 text-purple-600 dark:text-primary mb-1" />
                    <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-outfit">{stats.views}</p>
                    <p className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Profile Views</p>
                  </div>
                  <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 p-3.5 sm:p-4 rounded-2xl space-y-1 text-left shadow-sm dark:shadow-none">
                    <Users className="w-4 h-4 text-emerald-500 mb-1" />
                    <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-outfit">{stats.recruiters}</p>
                    <p className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Recruiter Visits</p>
                  </div>
                </div>

                {/* Authority badge */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-3.5 sm:p-4 space-y-1">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Authority Index</span>
                  </div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">{stats.authority}</p>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400">Verified by CVify AI scoring</p>
                </div>

                {/* CTA */}
                <a
                  href={activeProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white transition-all hover:opacity-90 hover:scale-[1.02] shadow-md"
                  style={{ backgroundColor: (activeProfile as any).themeAccent || "#6366f1" }}
                >
                  View Live Portfolio <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Profile navigation footer */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/30">
            <button
              onClick={prev}
              className="flex items-center gap-1 sm:gap-2 text-xs font-black text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Prev Profile</span>
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {DEMO_PROFILES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProfileIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === activeProfileIdx ? "w-6 bg-purple-600" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center gap-1 sm:gap-2 text-xs font-black text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">Next Profile</span> <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={activeProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black shadow-xl shadow-purple-600/25 hover:scale-105 transition-all"
          >
            View {activeProfile.name.split(" ")[0]}&apos;s Portfolio <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveProfileIdx((activeProfileIdx + 1) % DEMO_PROFILES.length); }}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-black text-xs sm:text-sm transition-colors py-2"
          >
            Browse all demos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePortfolio;
