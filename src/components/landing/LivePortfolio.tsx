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
    <section id="live-portfolio" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ── Header ── */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <Monitor className="w-3.5 h-3.5" /> Live Deployment Layer
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Real Profiles. <span className="text-primary">Live Right Now.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            These aren&apos;t mockups. Switch between real CVifyPro portfolio profiles — deployed, themed, and tracking recruiters in real time.
          </p>
        </div>

        {/* ── Profile Selector Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mr-2">
            Live Demos →
          </span>
          {DEMO_PROFILES.map((profile, idx) => (
            <button
              key={profile.username}
              onClick={() => setActiveProfileIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                idx === activeProfileIdx
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-slate-900 border-white/5 text-slate-400 hover:border-white/15 hover:text-white"
              }`}
            >
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-black"
                style={{
                  backgroundColor: idx === activeProfileIdx ? "rgba(255,255,255,0.2)" : "#1e293b",
                  color: idx === activeProfileIdx ? "#fff" : (profile as any).themeAccent || "#fff",
                }}
              >
                {profile.initials}
              </span>
              {profile.name.split(" ")[0]}
              {(profile as any).theme && (
                <span className="hidden sm:inline text-[8px] opacity-60 normal-case font-medium">
                  ({(profile as any).theme})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Browser Viewport ── */}
        <div className="w-full max-w-5xl mx-auto glass-card rounded-[3.5rem] border-white/5 shadow-premium overflow-hidden">
          {/* Browser chrome */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 bg-slate-900/60 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>

            {/* Address bar */}
            <a
              href={activeProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-950/60 border border-white/5 rounded-xl px-4 py-2 hover:border-primary/30 transition-all text-xs font-mono text-slate-500 hover:text-primary max-w-xs truncate"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span>app-cvifypro.vercel.app/p/{activeProfile.username}</span>
              <ExternalLink className="w-3 h-3 ml-1 flex-shrink-0" />
            </a>

            {/* Theme badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest"
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
              className="grid lg:grid-cols-5 gap-0 min-h-[420px]"
            >
              {/* Left: Real screenshot OR abstract fallback */}
              <div className="lg:col-span-3 relative overflow-hidden">
                {hasScreenshot ? (
                  <div className="relative w-full h-full min-h-[360px]">
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
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live Portfolio
                    </div>
                    {/* View button overlay */}
                    <a
                      href={activeProfile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xl transition-all hover:scale-105"
                    >
                      Open Live Profile <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  /* Abstract animated fallback for profiles without screenshot */
                  <div className="w-full h-full min-h-[360px] bg-slate-950 p-8 flex flex-col justify-between">
                    {/* Simulated nav */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-primary/20 border border-primary/30" />
                        <div className="h-3 w-20 bg-slate-800 rounded" />
                      </div>
                      <div className="flex gap-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-2 w-10 bg-slate-800 rounded" />
                        ))}
                      </div>
                    </div>
                    {/* Simulated hero */}
                    <div className="flex items-center justify-between flex-1 py-8 gap-8">
                      <div className="space-y-4 flex-1">
                        <div className="h-2 w-24 bg-slate-800 rounded" />
                        <div className="space-y-2">
                          <div className="h-7 w-56 bg-white/10 rounded" />
                          <div className="h-7 w-44 bg-white/10 rounded" />
                        </div>
                        <div className="h-3 w-40 rounded"
                          style={{ backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}40` }} />
                        <div className="space-y-1.5">
                          <div className="h-2 w-52 bg-slate-800 rounded" />
                          <div className="h-2 w-44 bg-slate-800 rounded" />
                          <div className="h-2 w-36 bg-slate-800 rounded" />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <div className="h-8 w-24 rounded-full"
                            style={{ backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}30`,
                              border: `1px solid ${(activeProfile as any).themeAccent || "#6366f1"}50` }} />
                          <div className="h-8 w-28 bg-slate-800 rounded-full border border-white/5" />
                        </div>
                      </div>
                      <div
                        className="w-28 h-28 rounded-full border-4 flex-shrink-0 flex items-center justify-center font-black text-2xl"
                        style={{
                          borderColor: `${(activeProfile as any).themeAccent || "#6366f1"}60`,
                          backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}15`,
                          color: (activeProfile as any).themeAccent || "#6366f1",
                          boxShadow: `0 0 30px ${(activeProfile as any).themeAccent || "#6366f1"}30`,
                        }}
                      >
                        {activeProfile.initials}
                      </div>
                    </div>
                    {/* Live badge */}
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live · {(activeProfile as any).theme || "Custom"} Theme
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Analytics panel */}
              <div className="lg:col-span-2 bg-slate-900 border-l border-white/5 p-8 flex flex-col justify-between gap-6">
                {/* Profile header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm border"
                      style={{
                        borderColor: `${(activeProfile as any).themeAccent || "#6366f1"}50`,
                        backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}15`,
                        color: (activeProfile as any).themeAccent || "#6366f1",
                      }}
                    >
                      {activeProfile.initials}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{activeProfile.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight">{activeProfile.role}</p>
                    </div>
                  </div>

                  <div
                    className="h-px w-full"
                    style={{ backgroundColor: `${(activeProfile as any).themeAccent || "#6366f1"}20` }}
                  />

                  {/* Real-time indicator */}
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Traffic Analytics · Real-Time
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950 border border-white/5 p-4 rounded-2xl space-y-1 text-left">
                    <Eye className="w-4 h-4 text-primary mb-1" />
                    <p className="text-xl font-black text-white font-outfit">{stats.views}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Profile Views</p>
                  </div>
                  <div className="bg-slate-950 border border-white/5 p-4 rounded-2xl space-y-1 text-left">
                    <Users className="w-4 h-4 text-green-400 mb-1" />
                    <p className="text-xl font-black text-white font-outfit">{stats.recruiters}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Recruiter Visits</p>
                  </div>
                </div>

                {/* Authority badge */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Authority Index</span>
                  </div>
                  <p className="text-sm font-black text-white">{stats.authority}</p>
                  <p className="text-[9px] text-slate-500">Verified by CVify AI scoring</p>
                </div>

                {/* CTA */}
                <a
                  href={activeProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ backgroundColor: (activeProfile as any).themeAccent || "#6366f1" }}
                >
                  View Live Portfolio <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Profile navigation footer */}
          <div className="flex items-center justify-between px-8 py-5 border-t border-white/5 bg-slate-950/30">
            <button
              onClick={prev}
              className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev Profile
            </button>
            <div className="flex gap-2">
              {DEMO_PROFILES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProfileIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === activeProfileIdx ? "w-6 bg-primary" : "w-2 bg-slate-700"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-white transition-colors"
            >
              Next Profile <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={activeProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            View {activeProfile.name.split(" ")[0]}&apos;s Portfolio <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveProfileIdx((activeProfileIdx + 1) % DEMO_PROFILES.length); }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-black text-sm transition-colors"
          >
            Browse all demos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePortfolio;
